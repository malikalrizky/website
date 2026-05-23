const fs = require("fs");
const path = require("path");
const cvData = require("../src/data/career.json");
const {formatJobDateRange} = require("../src/utils/formatJobDates");
const {
  groupExperience,
  formatCompanyDateRange,
  pickCompanyField
} = require("../src/utils/groupExperience");

const CV_MAX_EDUCATION_PROJECTS = 1;
const CV_MAX_CERTIFICATIONS = 5;

const CV_SKILLS_LINES = [
  "Identity & access: IAM, SSO, SAML, OAuth2/OIDC, workload identity federation, CyberArk, Auth0, Google Workspace, JumpCloud, DLP",
  "Cloud security & SOC: AWS, GCP, Terraform, Kubernetes, Wiz CSPM, SIEM/SOAR, Wazuh, Google SCC, CrowdStrike Falcon, MITRE ATT&CK",
  "DevSecOps & engineering: CI/CD, GitLab, GitHub Actions, secret scanning, Cloudflare/AWS WAF, incident response, ISO 27001, ELK, Grafana, Prometheus"
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

function resolveMaxBullets(job) {
  if (typeof job.cvMaxBullets === "number") {
    return job.cvMaxBullets;
  }
  return job.bullets.length;
}

function resolveMaxEducationProjects(edu) {
  if (typeof edu.cvMaxProjects === "number") {
    return edu.cvMaxProjects;
  }
  return CV_MAX_EDUCATION_PROJECTS;
}

function formatRoleMeta(job) {
  const dateRange = formatJobDateRange(job.startMonth, job.endMonth);
  return `${dateRange} | ${job.type}`;
}

function shouldOmitRoleDesc(job) {
  return job.cvOmitDesc === true || !String(job.desc || "").trim();
}

function appendCompanyMeta(lines, companyTagline, regionalScope) {
  const tagline = String(companyTagline || "").trim();
  const regional = String(regionalScope || "").trim();
  if (!tagline && !regional) {
    return;
  }

  if (tagline && regional) {
    lines.push(
      '<p class="cv-company-meta"><em>' +
        `<span class="cv-company-tagline">${escapeHtml(tagline)}</span>` +
        '<span class="cv-company-meta-sep" aria-hidden="true"> · </span>' +
        `<span class="cv-company-regional">${escapeHtml(regional)}</span>` +
        "</em></p>"
    );
    return;
  }

  lines.push(
    `<p class="cv-company-meta"><em>${escapeHtml(tagline || regional)}</em></p>`
  );
}

function appendRoleBlock(lines, job, maxBullets) {
  const bullets = job.bullets.slice(0, maxBullets);
  const omitDesc = shouldOmitRoleDesc(job);

  lines.push('<div class="cv-role">');
  lines.push('<div class="cv-role-header">');
  lines.push(`<h4>${escapeHtml(job.role)}</h4>`);
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

  if (bullets.length) {
    lines.push('<ul class="cv-role-bullets">');
    for (const bullet of bullets) {
      lines.push(`<li>${escapeHtml(bullet)}</li>`);
    }
    lines.push("</ul>");
  }

  lines.push("</div>");
}

function appendGroupedCompanyToCv(lines, item) {
  const roles = item.roles;
  const companyTagline = pickCompanyField(roles, "companyTagline");
  const regionalScope = pickCompanyField(roles, "regionalScope");

  lines.push('<div class="cv-company">');
  lines.push(`<h3>${escapeHtml(item.company)}</h3>`);

  appendCompanyMeta(lines, companyTagline, regionalScope);

  roles.forEach(job => {
    appendRoleBlock(lines, job, resolveMaxBullets(job));
  });

  lines.push("</div>");
}

function appendSingleJobToCv(lines, job) {
  const maxBullets = resolveMaxBullets(job);
  const bullets = job.bullets.slice(0, maxBullets);
  const omitDesc = shouldOmitRoleDesc(job);

  lines.push('<div class="cv-company">');
  lines.push(`<h3>${escapeHtml(job.company)}</h3>`);

  appendCompanyMeta(lines, job.companyTagline, job.regionalScope);

  lines.push('<div class="cv-role cv-role--single">');
  lines.push('<div class="cv-role-header">');
  lines.push(`<h4>${escapeHtml(job.role)}</h4>`);
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

  if (bullets.length) {
    lines.push('<ul class="cv-role-bullets">');
    for (const bullet of bullets) {
      lines.push(`<li>${escapeHtml(bullet)}</li>`);
    }
    lines.push("</ul>");
  }

  lines.push("</div>");
  lines.push("</div>");
}

function buildMarkdown(data) {
  const lines = [];
  const cvExperience = experienceForCv(data.experience);

  lines.push(`# ${data.name}`);
  lines.push(`**${data.title}**`);
  lines.push("");
  lines.push(
    `${data.contact.email} | ${data.contact.linkedin} | ${data.contact.github}`
  );

  lines.push("");
  lines.push("---");
  lines.push("## Professional Summary");
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
  lines.push("---");
  lines.push("## Education");

  for (const edu of data.education) {
    lines.push("");
    const eduDates = formatJobDateRange(edu.startMonth, edu.endMonth);
    lines.push('<div class="cv-education-entry">');
    lines.push(`<h3>${escapeHtml(edu.school)}</h3>`);
    lines.push(
      `<p class="cv-education-meta"><em>${escapeHtml(
        `${edu.degree} | ${eduDates}`
      )}</em></p>`
    );
    if (edu.projects && edu.projects.length) {
      const maxProjects = resolveMaxEducationProjects(edu);
      const projects = edu.projects.slice(0, maxProjects);
      lines.push("<ul>");
      for (const project of projects) {
        lines.push(`<li>${escapeHtml(project)}</li>`);
      }
      lines.push("</ul>");
    }
    lines.push("</div>");
  }

  lines.push("");
  lines.push("---");
  lines.push("## Certifications");
  lines.push("");
  for (const cert of data.certifications.slice(0, CV_MAX_CERTIFICATIONS)) {
    lines.push(`- ${cert.name} - ${cert.issuer}`);
  }

  lines.push("");
  lines.push("---");
  lines.push("## Skills");
  lines.push("");
  for (const line of CV_SKILLS_LINES) {
    lines.push(line);
  }

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
        margin: {top: "18mm", bottom: "18mm", left: "18mm", right: "18mm"},
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
