const fs = require("fs");
const path = require("path");
const cvData = require("./cv-data");

function buildMarkdown(data) {
  const lines = [];

  // Header
  lines.push(`# ${data.name}`);
  lines.push(`**${data.title}**`);
  lines.push("");
  lines.push(
    `${data.contact.email} | ${data.contact.linkedin} | ${data.contact.github}`
  );

  // Professional Summary
  lines.push("");
  lines.push("---");
  lines.push("## Professional Summary");
  lines.push("");
  lines.push(data.summary);

  // Experience
  lines.push("");
  lines.push("---");
  lines.push("## Experience");

  for (const job of data.experience) {
    lines.push("");
    lines.push(`### ${job.role} | ${job.company}`);
    lines.push(`**${job.date} | ${job.type}**`);
    lines.push("");
    lines.push(job.desc);
    lines.push("");
    for (const bullet of job.bullets) {
      lines.push(`- ${bullet}`);
    }
  }

  // Education
  lines.push("");
  lines.push("---");
  lines.push("## Education");

  for (const edu of data.education) {
    lines.push("");
    lines.push(`### ${edu.school}`);
    lines.push(`**${edu.degree} | ${edu.duration}**`);
    lines.push("");
    for (const project of edu.projects) {
      lines.push(`- ${project}`);
    }
  }

  // Certifications
  lines.push("");
  lines.push("---");
  lines.push("## Certifications");
  lines.push("");
  for (const cert of data.certifications) {
    lines.push(`- ${cert.name} - ${cert.issuer}`);
  }

  // Skills
  lines.push("");
  lines.push("---");
  lines.push("## Skills");
  lines.push("");
  lines.push(data.skills.join(" | "));

  lines.push("");
  return lines.join("\n");
}

async function generateCV() {
  const markdown = buildMarkdown(cvData);
  const outputDir = path.join(__dirname, "..", "public");
  const mdPath = path.join(outputDir, "cv.md");
  const pdfPath = path.join(outputDir, "cv.pdf");
  const cssPath = path.join(__dirname, "cv-style.css");

  // Write markdown file
  fs.writeFileSync(mdPath, markdown, "utf-8");
  console.log(`Markdown written to ${mdPath}`);

  // Convert to PDF
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
        margin: {top: "25mm", bottom: "25mm", left: "25mm", right: "25mm"},
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
