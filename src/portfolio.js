/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Malikal Rizky",
  title: "Hi all, I'm Malik",
  subTitle: emoji(
    "A passionate Cloud Infrastructure Security and DevSecOps Engineer 🚀 with a shift-left mindset and multiple years of experience of building secure Infrastructure and secure Software Development Lifecycle and CI/CD."
  ),
  resumeLink: "/cv.pdf",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/malikalrizky",
  linkedin: "https://www.linkedin.com/in/mrizkyabdillah/",
  gmail: "hi@malikal.dpdns.org",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "CLOUD INFRASTRUCTURE SECURITY AND DEVSECOPS ENGINEER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "🛡️ Implement robust security measures for cloud environments (AWS, Azure, GCP)"
    ),
    emoji(
      "⚙️ Automate security and compliance into CI/CD pipelines (DevSecOps)"
    ),
    emoji(
      "⚙️ Integrate security testing and vulnerability scanning early in development (Shift-Left approach)"
    ),
    emoji("🔎 Conduct vulnerability assessments and penetration testing"),
    emoji("✅ Design and maintain ISO 27001-compliant systems"), //ISO 27001 skill
    emoji("🧠 Continuously learn and apply emerging technologies")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift"
    // },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "postgresql",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Utel University",
      logo: "",
      subHeader: "Computer Engineering",
      duration: "2016 - 2020",
      // desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Project: Convolution Neural Network Models for Acute Lymphoblastic Leukemia Diagnosis",
        "Project: Analysis of the Radioactivity Yield of Fluorine-18 from the Reaction of 18-O(p,n)18-F with Proton Beam Current Variations at the Medical Cyclotron Facility in Dharmais Hospital National Cancer Center BATAN (National Nuclear Energy Agency)",
        "Project: Applying Deep Learning for the Optimization and Sustainability of Lithium Ferrophosphate (LFP) Batteries in Renewable Energy Applications"
      ]
    }
    // {
    //   schoolName: "Stanford University",
    //   logo: require("./assets/images/stanfordLogo.png"),
    //   subHeader: "Bachelor of Science in Computer Science",
    //   duration: "September 2013 - April 2017",
    //   desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
    //   descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    // },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Cloud", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "DevSecOps",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Lead Security Engineer, SOC Security Operations Center ",
      company: "DKATALIS",
      companylogo: require("./assets/images/dkatalis_logo.jpeg"),
      date: "2025 – Present",
      employmentType: "Full-time",
      desc: "Lead SOC operations for a Indonesia-based fintech, owning incident response strategy, detection engineering, threat hunting, and automation across AWS, GCP, Kubernetes, endpoints, and identity systems in multi-country environments.",
      descBullets: [
        "Drive end-to-end incident command for identity, cloud, endpoint, and phishing events, cutting containment time by over 60% through tighter triage and escalation workflows.",
        "Scale detection and response coverage across AWS, GCP, Kubernetes, and SaaS identity surfaces, increasing monitoring depth and reducing blind spots in production systems.",
        "Operationalize SOC playbooks and SOAR-driven automations to reduce MTTR, lower false positives, improve analyst throughput, and standardize response quality.",
        "Translate SOC risk and trend data into stakeholder-ready reporting, improving cross-functional alignment and audit/compliance readiness."
      ]
    },
    {
      role: "Security Engineer, DevSecOps",
      company: "DKATALIS",
      companylogo: require("./assets/images/dkatalis_logo.jpeg"),
      date: "2024 – 2025",
      employmentType: "Full-time",
      desc: "Secure identity and cloud operations across AWS and GCP while serving as primary SecOps on-call, owning detection-to-remediation workflows and strengthening governance controls that support progression to Lead SOC.",
      descBullets: [
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
      companylogo: require("./assets/images/grab.png"),
      date: "2023 – 2024",
      employmentType: "Full-time",
      desc: "Scale DevSecOps practices across Grab and OVO environments by combining AI-assisted triage, CI/CD security guardrails, and SIEM-driven detection improvements for high-volume engineering organizations.",
      descBullets: [
        "Solely led development of an LLM-powered code triaging engine, reducing SAST/DAST false positives by 85%.",
        "Establish AI-assisted AppSec triage standards and security guardrails that improve engineering adoption of secure SDLC controls across CI/CD pipelines.",
        "Deploy and tune SIEM (Elastic Stack) use cases for distributed microservices, increasing actionable detection visibility across cloud workloads.",
        "Partner with platform and product security stakeholders to align DevSecOps controls across enterprise and fintech operating scope."
      ]
    },
    {
      role: "Security Engineer, Cloud Infrastructure",
      company: "Grab",
      companylogo: require("./assets/images/grab.png"),
      date: "2023 – 2024",
      employmentType: "Full-time",
      desc: "Design and operate cloud security architecture for Grab and OVO workloads on AWS and GCP, strengthening resilience, governance, and compliance enablement across large-scale platforms.",
      descBullets: [
        "Build an in-house cloud observability platform that unifies logs, metrics, and threat intelligence to speed investigation and response.",
        "Design enterprise IAM and SSO control models that improve access governance, auditability, and risk reduction across teams.",
        "Enable security control mapping and evidence readiness against industry frameworks and regional regulatory requirements.",
        "Partner with engineering and governance teams to embed cloud security standards that scale consistently across business-critical services."
      ]
    },
    {
      role: "DevSecOps Engineer, Infrastructure and Platform",
      company: "Maxim Order Service",
      companylogo: require("./assets/images/maxim.png"),
      date: "2022 – 2023",
      employmentType: "Full-time",
      desc: "Lead infrastructure and DevSecOps operations for Maxim Foods & Goods across 100+ cities in 10 countries, improving cost efficiency, reliability, and delivery speed on AWS.",
      descBullets: [
        "Cut monthly AWS cloud costs by 25% through right-sizing, reserved instances, and auto-scaling optimizations.",
        "Reduce system downtime by 30% by deploying ELK Stack, Grafana, Prometheus, and New Relic for real-time observability and faster root-cause analysis.",
        "Accelerate infrastructure provisioning by 35% through Terraform-based Infrastructure as Code and repeatable platform workflows.",
        "Strengthen operational maturity and scalability across multi-country environments by standardizing platform security and reliability practices."
      ]
    },
    {
      role: "DevOps Engineer",
      company: "Virtualspirit",
      companylogo: require("./assets/images/evc.png"),
      date: "2022 – 2023",
      employmentType: "Freelance",
      desc: "Delivered cloud infrastructure and DevOps services as an IT vendor for clients including EV Connection — Malaysia's leading EV charging station provider — achieving 99.95% uptime through Kubernetes and CI/CD automation.",
      descBullets: [
        "Achieved 99.95% uptime by architecting robust microservices infrastructure using Kubernetes for EV Connection and other clients.",
        "Deployed 5+ production applications for EV Connection within six months, achieving a 98% successful deployment rate.",
        "Reduced cloud costs by 30% and cut release time by 25% through right-sizing, reserved instances, and optimized CI/CD pipelines."
      ]
    },
    {
      role: "DevOps Engineer / Site Reliability Engineer",
      company: "Hungryhub",
      companylogo: require("./assets/images/hungryhub.jpeg"),
      date: "2020 – 2022",
      employmentType: "Full-time",
      desc: "Drove platform reliability and growth for Thailand's leading restaurant reservation platform, achieving 99.8% uptime and a 30% increase in user bookings through infrastructure optimization and SRE practices.",
      descBullets: [
        "Drove a 30% increase in user bookings by optimizing platform performance and reliability for Hungryhub's Thailand market.",
        "Achieved 99.8% uptime with Kubernetes and ELK-based proactive monitoring, resolving 95% of issues before user impact.",
        "Reduced cloud costs by 15% through efficient resource management, auto-scaling, and reserved instance strategies."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆 "),
  // subtitle:
  //   "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "AWS Cloud Architect",
      subtitle: "Cloud Architect Certification from Amazon Web Services (AWS)",
      image: require("./assets/images/amazon_web_services_logo.jpeg"),
      imageAlt: "AWS Cloud Architect",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/43a24302-cfed-4a50-a98b-60918350bf26/linked_in_profile"
        }
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "Certified Ethical Hacker",
      subtitle: "Certified Ethical Hacker Certification from EC-Council",
      image: require("./assets/images/ec-council.jpeg"),
      imageAlt: "Certified Ethical Hacker EC-Council",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/specialization/Q4LZMCX9S5E8"
        }
      ]
    },

    {
      title: "Palo Alto Networks Cybersecurity",
      // subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/palo-alto.png"),
      imageAlt: "Palo Alto Networks Cybersecurity",
      footerLink: [
        {
          name: "Certification",
          url: "https://coursera.org/share/6071ba577de8bdb325c84dd223e8d700"
        }
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "",
  email_address: "hi@malikal.dpdns.org"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
