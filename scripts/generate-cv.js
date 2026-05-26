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

const CV_SKILLS_LINES = [
  "**Cloud & Infrastructure:** AWS, GCP, Kubernetes, Terraform, Docker, Cloudflare/AWS WAF",
  "**IAM & Identity:** IAM, SSO, SAML, OAuth2/OIDC, workload identity federation, CyberArk, Auth0, Google Workspace, JumpCloud, DLP",
  "**Detection & SOC:** SIEM/SOAR, MITRE ATT&CK, Wazuh, Google SCC, CrowdStrike Falcon, Wiz CSPM, incident response",
  "**DevSecOps & CI/CD:** GitLab, GitHub Actions, secret scanning, IAM-as-code, ISO 27001, Sprinto",
  "**Programming & Automation:** Python, Bash, JavaScript, Golang, PostgreSQL"
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
  return `${dateRange} | ${job.type}`;
}

function shouldOmitRoleDesc(job) {
  return job.cvOmitDesc === true || !String(job.desc || "").trim();
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

function appendRoleBlock(lines, job, maxBullets) {
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

  appendRoleBullets(lines, job, maxBullets);
  lines.push("</div>");
}

function appendGroupedCompanyToCv(lines, item) {
  const roles = item.roles;
  const companyTagline = pickCompanyField(roles, "companyTagline");

  lines.push('<div class="cv-company">');
  lines.push(`<h3>${escapeHtml(item.company)}</h3>`);

  appendCompanyMeta(lines, companyTagline);

  roles.forEach((job, index) => {
    appendRoleBlock(lines, job, resolveMaxBullets(job, index));
  });

  lines.push("</div>");
}

function appendConsultingJobToCv(lines, job) {
  const maxBullets =
    typeof job.cvMaxBullets === "number"
      ? job.cvMaxBullets
      : DEFAULT_SINGLE_MAX_BULLETS;
  const omitDesc = shouldOmitRoleDesc(job);
  const tagline = String(job.companyTagline || "").trim();
  const dateRange = formatJobDateRange(job.startMonth, job.endMonth);
  const metaParts = [tagline, dateRange, job.type].filter(Boolean);

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

  lines.push('<div class="cv-company">');
  lines.push(`<h3>${escapeHtml(job.company)}</h3>`);

  appendCompanyMeta(lines, job.companyTagline);

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

  appendRoleBullets(lines, job, maxBullets);
  appendCvClients(lines, job);

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
  lines.push("---");
  lines.push("## Skills");
  lines.push("");
  for (const line of CV_SKILLS_LINES) {
    lines.push(line);
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
  lines.push("## Education");

  for (const edu of data.education) {
    lines.push("");
    lines.push(`### ${edu.school}`);
    const eduDates = formatJobDateRange(edu.startMonth, edu.endMonth);
    lines.push(`*${edu.degree} | ${eduDates}*`);
    if (!CV_OMIT_EDUCATION_PROJECTS) {
      lines.push("");
      for (const project of edu.projects) {
        lines.push(`- ${project}`);
      }
    }
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
        margin: {top: "16mm", bottom: "16mm", left: "16mm", right: "16mm"},
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
