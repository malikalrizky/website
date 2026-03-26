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
  resumeLink: "", // Set to empty to hide the button
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
      schoolName: "Gadjah Mada University",
      logo: require("./assets/images/ugm.png"),
      subHeader: "Engineering Physics",
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
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Cybersecurity Incident Response Lead",
      company: "DKATALIS",
      companylogo: require("./assets/images/dkatalis_logo.jpeg"),
      date: "2025 – Present",
      employmentType: "Full-time",
      desc: "Leads end-to-end cybersecurity incident response operations at a cloud-native fintech, triaging and remediating threats across cloud and application layers.",
      descBullets: [
        "Spearheaded cybersecurity incident response at a Singapore-based fintech, reducing mean time to contain (MTTC) for critical security events.",
        "Oversaw threat detection and triage across cloud-native environments spanning AWS and GCP infrastructure.",
        "Drove continuous improvement of incident response playbooks, strengthening organizational security posture across Indonesia and Singapore."
      ]
    },
    {
      role: "DevSecOps Engineer",
      company: "DKATALIS",
      companylogo: require("./assets/images/dkatalis_logo.jpeg"),
      date: "2024 – 2025",
      employmentType: "Full-time",
      desc: "Focused on identity security across GCP and AWS, and served as the primary SecOps on-call covering end-to-end security operations. Promoted to Cybersecurity Incident Response Lead.",
      descBullets: [
        "Owned identity security across GCP and AWS, including IAM policy enforcement, privilege access management, and identity threat detection.",
        "Served as SecOps on-call, triaging and responding to security alerts across SIEM, endpoint, and cloud security tooling.",
        "Covered full security operations scope during on-call rotations — from threat detection and incident triage to containment and post-incident review."
      ]
    },
    {
      role: "DevSecOps Engineer",
      company: "Grab",
      companylogo: require("./assets/images/grab.png"),
      date: "2023 – 2024",
      employmentType: "Full-time",
      desc: "Secured Grab's large-scale cloud infrastructure by embedding DevSecOps practices into multi-cloud pipelines. Also covered OVO (PT Visionet Internasional), Grab's fintech arm, as part of the same security scope.",
      descBullets: [
        "Solely led development of an LLM-powered code triaging engine, reducing SAST/DAST false positives by 85%.",
        "Established AI security guardrails and scaled DevSecOps practices across CI/CD pipelines organization-wide.",
        "Deployed and tuned SIEM (Elastic Stack) for real-time threat detection across distributed microservices."
      ]
    },
    {
      role: "Cloud Infrastructure Security Engineer",
      company: "Grab",
      companylogo: require("./assets/images/grab.png"),
      date: "2023 – 2024",
      employmentType: "Full-time",
      desc: "Designed and maintained cloud security architecture for Grab and OVO's infrastructure, ensuring compliance and threat resilience across GCP and AWS environments.",
      descBullets: [
        "Built an in-house cloud observability platform integrating logs, metrics, and threat intelligence across services.",
        "Designed and implemented enterprise-grade IAM with SSO integration and full audit readiness.",
        "Enabled compliance for PCI-DSS, ISO 27001, NIST, and regional regulators including MAS and GDPR."
      ]
    },
    {
      role: "DevSecOps Engineer",
      company: "Maxim Order Service",
      companylogo: require("./assets/images/maxim.png"),
      date: "2022 – 2023",
      employmentType: "Full-time",
      desc: "Oversaw cloud infrastructure and DevSecOps operations for Maxim Foods & Goods across 100+ cities in 10 countries on AWS, delivering significant cost reductions and uptime improvements.",
      descBullets: [
        "Cut monthly AWS cloud costs by 25% through right-sizing, reserved instances, and auto-scaling optimizations.",
        "Reduced system downtime by 30% by deploying ELK Stack, Grafana, Prometheus, and New Relic for real-time observability.",
        "Accelerated infrastructure provisioning by 35% through Terraform-based Infrastructure as Code adoption."
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
      image: require("./assets/images/aws.png"),
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
      image: require("./assets/images/ec-council.png"),
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
