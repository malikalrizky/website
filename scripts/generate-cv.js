const fs = require("fs");
const path = require("path");
const cvData = require("../src/data/career.json");
const {formatJobDateRange} = require("../src/utils/formatJobDates");
const {
  groupExperience,
  pickCompanyField
} = require("../src/utils/groupExperience");

const DEFAULT_PRIMARY_MAX_BULLETS = 4;
const DEFAULT_PRIOR_MAX_BULLETS = 3;
const DEFAULT_SINGLE_MAX_BULLETS = 2;
const CV_MAX_CERTIFICATIONS = 5;
const CV_OMIT_EDUCATION_PROJECTS = true;

const CV_SKILLS = [
  {
    label: "Cloud & Platform",
    items: "AWS, GCP, Kubernetes, Terraform, Docker, ELK, Grafana, Prometheus"
  },
  {
    label: "Security Engineering",
    items:
      "SIEM/SOAR, Wazuh, CrowdStrike, Trend Micro XDR, Detection Engineering, Threat Hunting, MITRE ATT&CK"
  },
  {
    label: "Identity & Access Management",
    items:
      "OAuth2/OIDC, SAML, SSO, Auth0, CyberArk PAM, Google Workspace, Workload Identity Federation"
  },
  {
    label: "DevSecOps & Application Security",
    items:
      "CI/CD Security, SAST/DAST, Semgrep, API Security, Secret Scanning, Threat Modeling"
  },
  {
    label: "Cloud & Infrastructure Security",
    items: "Cloudflare WAF, Google SCC, Wiz CSPM, Zero Trust"
  },
  {
    label: "Programming & Automation",
    items: "Python, Bash, Golang, JavaScript, SQL"
  },
  {
    label: "Governance & Compliance",
    items: "ISO 27001, SOC 2, Sprinto"
  }
];

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function experienceForCv(experience) {
  return experience.filter(job => job.cvInclude !== false);
}

function resolveMaxBullets(job, roleIndex) {
  if (typeof job.cvMaxBullets === "number") {
    return job.cvMaxBullets;
  }
  return roleIndex === 0
    ? DEFAULT_PRIMARY_MAX_BULLETS
    : DEFAULT_PRIOR_MAX_BULLETS;
}

function formatRoleMeta(job) {
  const dateRange = formatJobDateRange(job.startMonth, job.endMonth);
  const parts = [dateRange, job.type];
  if (job.engagement) {
    parts.push(job.engagement);
  }
  return parts.join(" | ");
}

function shouldOmitRoleDesc(job) {
  return job.cvOmitDesc === true || !String(job.desc || "").trim();
}

function appendHeader(lines, data) {
  lines.push('<div class="cv-header">');
  lines.push('<div class="cv-header-main">');
  lines.push(`<h1>${escapeHtml(data.name)}</h1>`);
  lines.push(`<p class="cv-title">${escapeHtml(data.title)}</p>`);
  lines.push("</div>");
  lines.push('<div class="cv-header-contact">');
  if (data.contact.phone) {
    lines.push(`<p>${escapeHtml(data.contact.phone)}</p>`);
  }
  lines.push(`<p>${escapeHtml(data.contact.email)}</p>`);
  lines.push(`<p>${escapeHtml(data.contact.linkedin)}</p>`);
  lines.push(`<p>${escapeHtml(data.contact.github)}</p>`);
  lines.push("</div>");
  lines.push("</div>");
}

function appendCompactCertifications(lines, certifications) {
  const names = certifications
    .slice(0, CV_MAX_CERTIFICATIONS)
    .map(cert => cert.name);
  if (!names.length) {
    return;
  }
  lines.push(`<p class="cv-compact-list">${escapeHtml(names.join(", "))}</p>`);
}

function appendSkillLines(lines) {
  for (const skill of CV_SKILLS) {
    lines.push(
      `<p class="cv-skill-line"><strong>${escapeHtml(
        skill.label
      )}:</strong> ${escapeHtml(skill.items)}</p>`
    );
  }
}

function appendTailSections(lines, data) {
  lines.push('<div class="cv-tail">');
  lines.push('<h2 class="cv-section-heading">Skills</h2>');
  appendSkillLines(lines);

  lines.push('<h3 class="cv-subsection">Certifications</h3>');
  appendCompactCertifications(lines, data.certifications);

  lines.push('<h3 class="cv-subsection">Education</h3>');
  appendCompactEducation(lines, data.education);
  lines.push("</div>");
}

function appendCompactEducation(lines, education) {
  for (const edu of education) {
    const eduDates = formatJobDateRange(edu.startMonth, edu.endMonth);
    lines.push(
      `<p class="cv-education-line">${escapeHtml(edu.school)} — ${escapeHtml(
        edu.degree
      )} · ${escapeHtml(eduDates)}</p>`
    );
    if (!CV_OMIT_EDUCATION_PROJECTS) {
      for (const project of edu.projects) {
        lines.push(
          `<p class="cv-education-project">- ${escapeHtml(project)}</p>`
        );
      }
    }
  }
}

function resolveCvCompanyMeta(jobOrRole) {
  if (jobOrRole.cvOmitCompanyTagline === true) {
    return "";
  }
  if (Object.prototype.hasOwnProperty.call(jobOrRole, "cvCompanyTagline")) {
    return String(jobOrRole.cvCompanyTagline || "").trim();
  }
  return String(jobOrRole.companyTagline || "").trim();
}

function resolveGroupCompanyTagline(roles) {
  const cvTagline = pickCompanyField(roles, "cvCompanyTagline");
  if (cvTagline !== undefined) {
    return String(cvTagline).trim();
  }
  for (const role of roles) {
    if (role.companyTagline && role.cvOmitCompanyTagline !== true) {
      return String(role.companyTagline).trim();
    }
  }
  return "";
}

function appendCompanyMeta(lines, companyTagline) {
  const tagline = String(companyTagline || "").trim();
  if (!tagline) {
    return;
  }

  lines.push(`<p class="cv-company-meta"><em>${escapeHtml(tagline)}</em></p>`);
}

function appendCvClients(lines, job) {
  const clients = job.cvClients;
  if (!Array.isArray(clients) || !clients.length) {
    return;
  }

  lines.push(
    `<p class="cv-clients"><strong>Selected Clients:</strong> ${escapeHtml(
      clients.join(", ")
    )}</p>`
  );
}

function appendRoleBullets(lines, job, maxBullets) {
  const bullets = job.bullets.slice(0, maxBullets);
  if (!bullets.length) {
    return;
  }

  lines.push('<ul class="cv-role-bullets">');
  for (const bullet of bullets) {
    lines.push(`<li>${escapeHtml(bullet)}</li>`);
  }
  lines.push("</ul>");
}

function appendRoleBlock(lines, job, maxBullets, {skipRoleTitle = false} = {}) {
  const omitDesc = shouldOmitRoleDesc(job);

  lines.push('<div class="cv-role">');
  lines.push('<div class="cv-role-header">');
  if (!skipRoleTitle) {
    lines.push(`<h4>${escapeHtml(job.role)}</h4>`);
  }
  if (job.promotionFrom) {
    lines.push(
      `<p class="cv-promotion">${escapeHtml(
        `Promoted from ${job.promotionFrom}`
      )}</p>`
    );
  }
  lines.push(
    `<p class="cv-role-meta"><em>${escapeHtml(formatRoleMeta(job))}</em></p>`
  );
  lines.push("</div>");

  if (!omitDesc) {
    lines.push(`<p class="cv-role-desc">${escapeHtml(job.desc)}</p>`);
  }

  appendRoleBullets(lines, job, maxBullets);
  lines.push("</div>");
}

function appendGroupedCompanyToCv(lines, item) {
  const roles = item.roles;
  const primaryRole = roles[0];
  const inlineHeader = primaryRole.cvInlineRoleHeader === true;

  lines.push('<div class="cv-company">');
  if (inlineHeader) {
    appendInlineCompanyRoleHeader(lines, primaryRole);
  } else {
    lines.push(`<h3>${escapeHtml(item.company)}</h3>`);
    appendCompanyMeta(lines, resolveGroupCompanyTagline(roles));
  }

  roles.forEach((job, index) => {
    appendRoleBlock(lines, job, resolveMaxBullets(job, index), {
      skipRoleTitle: inlineHeader && index === 0
    });
  });

  lines.push("</div>");
}

function appendConsultingJobToCv(lines, job) {
  const maxBullets =
    typeof job.cvMaxBullets === "number"
      ? job.cvMaxBullets
      : DEFAULT_SINGLE_MAX_BULLETS;
  const omitDesc = shouldOmitRoleDesc(job);
  const tagline = resolveCvCompanyMeta(job);
  const dateRange = formatJobDateRange(job.startMonth, job.endMonth);
  const metaParts = [tagline, dateRange, job.type, job.engagement].filter(
    Boolean
  );

  lines.push('<div class="cv-company">');
  lines.push(`<h3>${escapeHtml(job.role)}</h3>`);
  lines.push(
    `<p class="cv-company-meta"><em>${escapeHtml(
      metaParts.join(" · ")
    )}</em></p>`
  );

  lines.push('<div class="cv-role cv-role--single">');

  if (!omitDesc) {
    lines.push(`<p class="cv-role-desc">${escapeHtml(job.desc)}</p>`);
  }

  appendRoleBullets(lines, job, maxBullets);
  appendCvClients(lines, job);

  lines.push("</div>");
  lines.push("</div>");
}

function appendInlineCompanyRoleHeader(lines, job) {
  const suffix = job.cvCompanySuffix ? ` ${job.cvCompanySuffix}` : "";
  lines.push(
    `<h3 class="cv-company-title-inline">${escapeHtml(
      job.company
    )}<span class="cv-title-sep"> | </span>${escapeHtml(job.role)}${escapeHtml(
      suffix
    )}</h3>`
  );
}

function appendSingleJobToCv(lines, job) {
  if (job.cvOnly) {
    appendConsultingJobToCv(lines, job);
    return;
  }

  const maxBullets =
    typeof job.cvMaxBullets === "number"
      ? job.cvMaxBullets
      : DEFAULT_SINGLE_MAX_BULLETS;
  const omitDesc = shouldOmitRoleDesc(job);
  const inlineHeader = job.cvInlineRoleHeader === true;

  lines.push('<div class="cv-company">');
  if (inlineHeader) {
    appendInlineCompanyRoleHeader(lines, job);
  } else {
    lines.push(`<h3>${escapeHtml(job.company)}</h3>`);
    appendCompanyMeta(lines, resolveCvCompanyMeta(job));
  }

  lines.push('<div class="cv-role cv-role--single">');
  lines.push('<div class="cv-role-header">');
  if (!inlineHeader) {
    lines.push(`<h4>${escapeHtml(job.role)}</h4>`);
  }
  if (job.promotionFrom) {
    lines.push(
      `<p class="cv-promotion">${escapeHtml(
        `Promoted from ${job.promotionFrom}`
      )}</p>`
    );
  }
  lines.push(
    `<p class="cv-role-meta"><em>${escapeHtml(formatRoleMeta(job))}</em></p>`
  );
  lines.push("</div>");

  if (!omitDesc) {
    lines.push(`<p class="cv-role-desc">${escapeHtml(job.desc)}</p>`);
  }

  appendRoleBullets(lines, job, maxBullets);
  appendCvClients(lines, job);

  lines.push("</div>");
  lines.push("</div>");
}

function buildMarkdown(data) {
  const lines = [];
  const cvExperience = experienceForCv(data.experience);

  appendHeader(lines, data);

  lines.push("");
  lines.push("---");
  lines.push("## Summary");
  lines.push("");
  lines.push(data.summary);

  lines.push("");
  lines.push("---");
  lines.push("## Experience");

  for (const item of groupExperience(cvExperience)) {
    lines.push("");
    if (item.kind === "single") {
      appendSingleJobToCv(lines, item.job);
      continue;
    }
    appendGroupedCompanyToCv(lines, item);
  }

  lines.push("");
  appendTailSections(lines, data);

  lines.push("");
  return lines.join("\n");
}

async function generateCV() {
  const markdown = buildMarkdown(cvData);
  const outputDir = path.join(__dirname, "..", "public");
  const mdPath = path.join(outputDir, "cv.md");
  const pdfPath = path.join(outputDir, "cv.pdf");
  const cssPath = path.join(__dirname, "cv-style.css");

  fs.writeFileSync(mdPath, markdown, "utf-8");
  console.log(`Markdown written to ${mdPath}`);

  const {mdToPdf} = await import("md-to-pdf");

  const os = require("os");
  let chromePath = process.env.CHROME_PATH;
  if (!chromePath) {
    if (os.platform() === "darwin") {
      chromePath =
        "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
    } else if (os.platform() === "linux") {
      chromePath = "/usr/bin/google-chrome";
    } else if (os.platform() === "win32") {
      chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
    }
  }

  const pdf = await mdToPdf(
    {content: markdown},
    {
      stylesheet: cssPath,
      document_title: "Malikal Rizky - CV",
      pdf_options: {
        format: "A4",
        margin: {top: "14mm", bottom: "14mm", left: "14mm", right: "14mm"},
        printBackground: false
      },
      launch_options: {
        executablePath: chromePath,
        args: ["--no-sandbox", "--disable-setuid-sandbox"]
      }
    }
  );

  if (pdf.content) {
    fs.writeFileSync(pdfPath, pdf.content);
    console.log(`PDF written to ${pdfPath}`);
  }
}

generateCV().catch(err => {
  console.error("Failed to generate CV:", err);
  process.exit(1);
});
