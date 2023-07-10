/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/Android_logo.json"; // Rename to your file name for custom animation

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
  username: "wablevaibhav",
  title: "Hi all, I'm Vaibhav",
  subTitle: emoji(
    "A passionate Android Developer 🚀 having an experience of building Mobile applications with Android / Flutter / Kotlin / Dart and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1g-ByJOlQpbyOyXkfXDYkHIjTGjKdpfc3/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/wablevaibhav",
  linkedin: "https://www.linkedin.com/in/vaibhavwable//",
  gmail: "vaibhavswable@gmail.com",
  medium: "https://medium.com/@vaibhav-wabale",
 // stackoverflow: "https://stackoverflow.com/users/10422806/vaibhawable",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Crazy Android Developer Who Wants To Explore Every Tech Stack",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Android Applications in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase / AWS / MySQL"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Android",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "Wordpress",
      fontAwesomeClassname: "fab fa-wordpress"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "ReactJS",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Indira College of Science and Commerce",
      logo: require("./assets/images/indira.jpg"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2022 - Present",
      desc: "In First Year i have done my .Net Projects",
      descBullets: [
        "First Year Marks - 87%",
        "Working on Mobile Application"
      ]
    },
    {
      schoolName: "Modern College of Arts, Science and Commerce",
      logo: require("./assets/images/modern.jpg"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2019 - April 2022",
      desc: "Learned Java, C, PHP, Javascript",
      descBullets: ["Done 2 Android Projects"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Wordpress",
      progressPercentage: "66%"
    },
    {
      Stack: "Android",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Android Developer Intern",
      company: "RootKit.exe",
      companylogo: require("./assets/images/rootkit.jpg"),
      date: "Jan 2023 – Mar 2023",
      desc: "I'm part of the development team for the MIT Connect app, a platform that connects students with alumni and industry professionals.",
      descBullets: [
        "Debugging and Troubleshooting Application",
        "Website Desgning - Wordpress"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/codelab.png"),
      projectName: "Learn Coding: CodeLab",
      projectDesc: "CodeLab is a free android app that makes it easy to learn programming languages. You can use this app for programming tutorials, write and run programs in each lesson, take quiz, assignment and many more.",
      footerLink: [
        {
          name: "Download Now",
          url: "https://play.google.com/store/apps/details?id=in.icomputercoding.computercoding"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/folk.webp"),
      projectName: "Folk Messaging App",
      projectDesc: "FolkChat is a FREE messaging app to create and share your photos, stories, and chat with the friends and followers you care about.",
      footerLink: [
        {
          name: "Download Now",
          url: "https://play.google.com/store/apps/details?id=in.icomputercoding.folkchat"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Android App Development",
      subtitle:
        "Android Studio | Android Development | Android",
      image: require("./assets/images/internshala.jpg"),
      footerLink: [
        {
          name: "Certification",
          url: "https://trainings.internshala.com/view_certificate/67zzkvqx35q/bz4ydopuyik/"
        }
      ]
    },
    {
      title: "Internship & Job Preparation Training",
      subtitle:
        "Training About Android Development",
      image: require("./assets/images/internshala.jpg"),
      footerLink: [
        {
          name: "Certification",
          url: "https://trainings.internshala.com/view_certificate/f6sgw0u2cxm/8ova069uizo/"
        }
      ]
    },
    {
      title: "Foundations of User Experience (UX) Design",
      subtitle:
        "User Experience (UI)",
      image: require("./assets/images/google.jpg"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/verify/7TD2S9HLQMTV?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Dcourse"
        }
      ]
    },
    {
      title: "Become an Android Mobile App Developer",
      subtitle: "Mobile Application Development | Mobile Applications",
      image: require("./assets/images/linkedin.jpg"),
      footerLink: [
        {
          name: "Certification", 
          url: "https://www.linkedin.com/learning/certificates/40c17049386c25dafbfe4fac075aca12cb5e0362034b6cff160609d64c6fe70a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BMdL280POQs%2BMBAXnVdz3hA%3D%3D"
        },
      ]
    },
    {
      title: "Kotlin Essential Training",
      subtitle: "Kotlin For Android Development",
      image: require("./assets/images/linkedin.jpg"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.linkedin.com/learning/certificates/ded5085b6e7aef9b707ed89da0cae00b4fde01c2b56ce6c2fbce8a7b08ee0f9f"
        }
      ]
    },
    {
      title: "Programming Fundamentals in Kotlin",
      subtitle: "Kotlin For Android Development",
      image: require("./assets/images/coursera.jpg"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/verify/XCT5RJC3CC5L"
        }
      ]
    },
    {
      title: "Preparing for Google Cloud Certification: Cloud DevOps Engineer",
      subtitle: "Google Cloud",
      image: require("./assets/images/coursera.jpg"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/professional-cert/K8J8KA6PURHM"
        }
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
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@vaibhav-wabale/android-application-components-dbb3d030bf85",
      title: "Android Application Components",
      description:
        "In this blog, we will explain various Android Application Components used in Android development."
    },
    {
      url: "https://medium.com/@vaibhav-wabale/how-to-install-flutter-in-windows-391aac925fc8",
      title: "How To Install Flutter In Windows",
      description:
        "There are some resource available in google but many students or developers are facing problem related to installing flutter."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+918698066529",
  email_address: "vaibhavswable@gmail.com"
  
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
  contactInfo,
  isHireable
};
