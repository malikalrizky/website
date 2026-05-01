// CV data extracted from src/portfolio.js
// Keep in sync with src/portfolio.js when portfolio content changes

const cvData = {
  name: "Malikal Rizky",
  title: "Lead SOC Security Engineer",
  summary:
    "Security engineer with 6+ years of experience spanning SOC operations, DevSecOps, and cloud infrastructure security across AWS and GCP. Currently leading SOC for a fintech company, owning incident response strategy, detection engineering, and SOAR-driven automation across multi-country environments. Proven track record in building LLM-powered security tooling, embedding shift-left controls into CI/CD pipelines, and driving measurable improvements in MTTR, cost efficiency, and compliance readiness. Holds AWS Cloud Architect and Certified Ethical Hacker certifications.",
  contact: {
    email: "hi@malikal.dpdns.org",
    linkedin: "linkedin.com/in/mrizkyabdillah",
    github: "github.com/malikalrizky"
  },
  experience: [
    {
      role: "Lead Security Engineer, SOC Security Operations Center",
      company: "DKATALIS",
      date: "2025 - Present",
      type: "Full-time",
      desc: "Lead SOC operations for a Indonesia-based fintech, owning incident response strategy, detection engineering, threat hunting, and automation across AWS, GCP, Kubernetes, endpoints, and identity systems in multi-country environments.",
      bullets: [
        "Drive end-to-end incident command for identity, cloud, endpoint, and phishing events, cutting containment time by over 60% through tighter triage and escalation workflows.",
        "Scale detection and response coverage across AWS, GCP, Kubernetes, and SaaS identity surfaces, increasing monitoring depth and reducing blind spots in production systems.",
        "Operationalize SOC playbooks and SOAR-driven automations to reduce MTTR, lower false positives, improve analyst throughput, and standardize response quality.",
        "Translate SOC risk and trend data into stakeholder-ready reporting, improving cross-functional alignment and audit/compliance readiness."
      ]
    },
    {
      role: "Security Engineer, DevSecOps",
      company: "DKATALIS",
      date: "2024 - 2025",
      type: "Full-time",
      desc: "Secure identity and cloud operations across AWS and GCP while serving as primary SecOps on-call, owning detection-to-remediation workflows and strengthening governance controls that support progression to Lead SOC.",
      bullets: [
        "Own IAM and identity security governance across AWS and GCP, enforcing least-privilege access and improving access control maturity at scale.",
        "Lead SecOps on-call response across SIEM, endpoint, and cloud telemetry, handling the full lifecycle from alert triage through containment and post-incident review.",
        "Embed security controls into CI/CD workflows and partner with engineering teams to reduce exploitable risk before production release.",
        "Solely led development of an LLM-powered security code review engine, reducing review time by 50%.",
        "Drive control hardening and incident learnings that materially improve audit posture and support promotion into Lead SOC Security Operations Center leadership."
      ]
    },
    {
      role: "Security Engineer, DevSecOps",
      company: "Grab",
      date: "2023 - 2024",
      type: "Full-time",
      desc: "Scale DevSecOps practices across Grab and OVO environments by combining AI-assisted triage, CI/CD security guardrails, and SIEM-driven detection improvements for high-volume engineering organizations.",
      bullets: [
        "Solely led development of an LLM-powered code triaging engine, reducing SAST/DAST false positives by 85%.",
        "Establish AI-assisted AppSec triage standards and security guardrails that improve engineering adoption of secure SDLC controls across CI/CD pipelines.",
        "Deploy and tune SIEM (Elastic Stack) use cases for distributed microservices, increasing actionable detection visibility across cloud workloads.",
        "Partner with platform and product security stakeholders to align DevSecOps controls across enterprise and fintech operating scope."
      ]
    },
    {
      role: "Security Engineer, Cloud Infrastructure",
      company: "Grab",
      date: "2023 - 2024",
      type: "Full-time",
      desc: "Design and operate cloud security architecture for Grab and OVO workloads on AWS and GCP, strengthening resilience, governance, and compliance enablement across large-scale platforms.",
      bullets: [
        "Build an in-house cloud observability platform that unifies logs, metrics, and threat intelligence to speed investigation and response.",
        "Design enterprise IAM and SSO control models that improve access governance, auditability, and risk reduction across teams.",
        "Enable security control mapping and evidence readiness against industry frameworks and regional regulatory requirements.",
        "Partner with engineering and governance teams to embed cloud security standards that scale consistently across business-critical services."
      ]
    },
    {
      role: "DevSecOps Engineer, Infrastructure and Platform",
      company: "Maxim Order Service",
      date: "2022 - 2023",
      type: "Full-time",
      desc: "Lead infrastructure and DevSecOps operations for Maxim Foods & Goods across 100+ cities in 10 countries, improving cost efficiency, reliability, and delivery speed on AWS.",
      bullets: [
        "Cut monthly AWS cloud costs by 25% through right-sizing, reserved instances, and auto-scaling optimizations.",
        "Reduce system downtime by 30% by deploying ELK Stack, Grafana, Prometheus, and New Relic for real-time observability and faster root-cause analysis.",
        "Accelerate infrastructure provisioning by 35% through Terraform-based Infrastructure as Code and repeatable platform workflows.",
        "Strengthen operational maturity and scalability across multi-country environments by standardizing platform security and reliability practices."
      ]
    },
    {
      role: "DevOps Engineer",
      company: "Virtualspirit",
      date: "2022 - 2023",
      type: "Freelance",
      desc: "Delivered cloud infrastructure and DevOps services as an IT vendor for clients including EV Connection - Malaysia's leading EV charging station provider - achieving 99.95% uptime through Kubernetes and CI/CD automation.",
      bullets: [
        "Achieved 99.95% uptime by architecting robust microservices infrastructure using Kubernetes for EV Connection and other clients.",
        "Deployed 5+ production applications for EV Connection within six months, achieving a 98% successful deployment rate.",
        "Reduced cloud costs by 30% and cut release time by 25% through right-sizing, reserved instances, and optimized CI/CD pipelines."
      ]
    },
    {
      role: "DevOps Engineer / Site Reliability Engineer",
      company: "Hungryhub",
      date: "2020 - 2022",
      type: "Full-time",
      desc: "Drove platform reliability and growth for Thailand's leading restaurant reservation platform, achieving 99.8% uptime and a 30% increase in user bookings through infrastructure optimization and SRE practices.",
      bullets: [
        "Drove a 30% increase in user bookings by optimizing platform performance and reliability for Hungryhub's Thailand market.",
        "Achieved 99.8% uptime with Kubernetes and ELK-based proactive monitoring, resolving 95% of issues before user impact.",
        "Reduced cloud costs by 15% through efficient resource management, auto-scaling, and reserved instance strategies."
      ]
    }
  ],
  education: [
    {
      school: "Utel University",
      degree: "Computer Engineering",
      duration: "2016 - 2020",
      projects: [
        "Project: Convolution Neural Network Models for Acute Lymphoblastic Leukemia Diagnosis",
        "Project: Analysis of the Radioactivity Yield of Fluorine-18 from the Reaction of 18-O(p,n)18-F with Proton Beam Current Variations at the Medical Cyclotron Facility in Dharmais Hospital National Cancer Center BATAN (National Nuclear Energy Agency)",
        "Project: Applying Deep Learning for the Optimization and Sustainability of Lithium Ferrophosphate (LFP) Batteries in Renewable Energy Applications"
      ]
    }
  ],
  certifications: [
    { name: "AWS Cloud Architect", issuer: "Amazon Web Services (AWS)" },
    { name: "Certified Ethical Hacker", issuer: "EC-Council" },
    { name: "Palo Alto Networks Cybersecurity", issuer: "Palo Alto Networks" }
  ],
  skills: [
    "Cloud Security",
    "DevSecOps",
    "AWS",
    "GCP",
    "Docker",
    "Kubernetes",
    "Terraform",
    "Python",
    "JavaScript",
    "React",
    "Node.js",
    "PostgreSQL",
    "CI/CD",
    "SIEM",
    "IAM",
    "Incident Response",
    "Vulnerability Assessment",
    "Penetration Testing",
    "ISO 27001",
    "ELK Stack",
    "Grafana",
    "Prometheus"
  ]
};

module.exports = cvData;
