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
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/malikalrizky",
  linkedin: "https://www.linkedin.com/in/mrizkyabdillah/",
  gmail: "contact@malikalrizky.com",
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
  subTitle: "CLOUD INFRASTRUCTURE SECURITY AND DEVSECOPS ENGINEER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("🛡️ Implement robust security measures for cloud environments (AWS, Azure, GCP)"),
    emoji("⚙️ Automate security and compliance into CI/CD pipelines (DevSecOps)"),
    emoji("⚙️ Integrate security testing and vulnerability scanning early in development (Shift-Left approach)"), 
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
    },
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
      role: "Cloud Infrastructure Security / DevSecOps Engineer",
      company: "Grab",
      companylogo: require("./assets/images/grab.png"),
      date: "November 2023 – Present",
      desc: "Grab is Southeast Asia's largest mobile tech company. We solve critical transportation challenges and make transport freedom a reality for over 620 millions people in Southeast Asia. We believe everyone should be able to go anywhere - and trust that they can book a safe ride. As part of this mission, the Security Department plays a crucial role in safeguarding our technology infrastructure, enabling seamless and secure movement for everyone. As a member of the Security Department, I am responsible for handling the Cloud Infrastructure Security across Grab & OVO in the form of:",
      descBullets: [
        "Cloud Security Posture Management (CSPM): Reduce vulnerability and ensured security across diverse platforms including AWS, GCP, Azure and on-premise data center with Tenable, Qualys, Wiz.io for Vulnerability Assessment and CSPM and Cybereason and Crowdstrike for endpoint protection. Successfully migrated from Tenable and Qualys to Wiz.io and Cybereason to Crowdstrike",
        "Vulnerability Assessment and Patch Management: Utilizing tools such as Terraform, Ansible, and Packer to patch vulnerability on the base image",
        "Container & Kubernetes Security: Manage and maintain security in containerized environments and Kubernetes orchestration. Focused on configurations, network policies, and role based access controls.",
        "Security Information and Event Management (SIEM): Operated Wazuh for the audit process and ISO 27001 compliance, enhancing our capabilities in real-time monitoring, incident detection, and thorough reporting for potential threats, and effective incident response.",
        "CI/CD Security: Developed and maintained secure CI/CD processes using Jenkins and GitLab, integrating security tools like Snyk to enhance both efficiency and security in our development pipeline without slowing it down. Reducing pain points of the security partner by reducing false positives in Static and Dynamic Application Security Testing (SAST & DAST) to identify vulnerabilities earlier in the development cycle.",
        "Penetration Testing & Security Testing Automation: Supported penetration testing and helped automate security tests to ensure they are effective and efficient."
      ]
    },
    {
      role: "DevSecOps Engineer",
      company: "Maxim",
      companylogo: require("./assets/images/maxim.png"),
      date: "October 2022 – November 2023",
      desc: "Maxim is an international company that has offered a range of transportation services since 2003, impacting lives across more than 100 cities in 10 countries. As a vital part of this journey, I serve as the AWS CloudOps and DevSecOps Engineer, responsible for managing Maxim Foods and Goods' cloud infrastructure and applications on Amazon Web Services (AWS).",
      descBullets: [
        "Implemented cost-efficient cloud solutions, leading to around 25% reduction in monthly cloud expenses.",
        "Reduced system downtime, response time and latency by around 50% by optimizing the system",
        "Achieved zero security breaches by incorporating advanced security tools and best practices.",
        "Achieved a 20% cost reduction by optimizing resource allocation and implementing auto-scaling.",
        "Further reduced monthly cloud expenses by 15% through right-sizing and reserved instances.",
        "Increased error tracing capabilities by 40% through advanced monitoring",
        "Collaborated closely with the development team on identifying, analyzing and troubleshooting the system bottleneck and recurrence bugs, resulting in a 25% decrease in reported issues.",
        "Zero Down Time using Blue Green Deployment",
      ]
    },
    {
      role: "DevSecOps Engineer",
      company: "EV Connection Malaysia",
      companylogo: require("./assets/images/evc.png"),
      date: "September 2020 – October 2022",
      desc: "",
      descBullets: [
        "Successfully drove a 30% increase in user bookings within a year through platform optimizations.",
        "Implemented cost-efficient cloud solutions, leading to around 25% reduction in monthly cloud expenses.",
        "Achieved a 99.5% uptime rate by deploying robust and high available microservices using Kubernetes.",
        "Enhanced system reliability by using the ELK stack, resulting in a 30% reduction in reported issues.",
        "Collaborated with developers on identifying, analyzing and troubleshooting the system bottleneck and recurrence bugs, resulting in a 25% decrease in reported issues.",
        "Zero Down Time PostgreSQL major version upgrade using Blue Green Deployment",
        "Increasing system reliability and reducing latency during events by implementing chaos engineering",
      ]
    },
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
      subtitle:
        "Cloud Architect Certification from Amazon Web Services (AWS)",
      image: require("./assets/images/aws.png"),
      imageAlt: "AWS Cloud Architect",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/43a24302-cfed-4a50-a98b-60918350bf26/linked_in_profile"
        },
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
      subtitle:
        "Certified Ethical Hacker Certification from EC-Council",
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
        {name: "Certification", url: "https://coursera.org/share/6071ba577de8bdb325c84dd223e8d700"},
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
  email_address: "contact@malikalrizky.com"
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
