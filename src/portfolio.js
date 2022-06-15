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
  username: "Sai Venkat R Banda",
  title: "Hi all, I am Sai Venkat",
  subTitle: emoji(
    "A passionate Software Developer, Creative Thinker & Quick Learner 🚀 having an experience of building Web applications with Java, React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1gNc0nzp8kz9fUYmk1uP_AkeoR4D_aIlY/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/vnkt996",
  linkedin: "https://www.linkedin.com/in/sai-venkat/",
  gmail: "saivenkat.996@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/saivenkat.996",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  // subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  subTitle: "Dedicated developed who wants to explore every tech stack",
  skills: [
    emoji(
      "⚡ Developed an end to end backend application using spring boot frame work"
    ),
    emoji(
      "⚡ Professional experience in using Java, SQL."
    ),
    emoji(
      "⚡ Worked on all phases of development from requirement gathering to deployment and maintainence."
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "springboot",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "hibernate",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "jpa",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "c++",
      fontAwesomeClassname: "fab fa-c"
    },
    {
      skillName: "STL",
      fontAwesomeClassname: "fas fa-c"
    },
    {
      skillName: "python 3",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "kubernetes",
      fontAwesomeClassname: "fas fa-kubernetes"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "jenkins",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "redis",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "kafka",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "postgres",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "mongo db",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "grafana",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "ELK",
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
      schoolName: "Virginia Tech",
      subHeader: "Master of Science in Computer Science",
      logo: require("./assets/images/vt.png"),
      duration: "August 2021 - December 2022",
      desc: "GPA: 3.95/4",
      descBullets: [
        "Specializatin in Software Engineering",
        "Relevant Course work: Software Engineering, Software Project Management, Web Application Development, Data Structures and Algorithms, Theory of Algorithms, Data Analytics",
        "Grader for Digital Design",
      ],
    },
    {
      schoolName: "Birla Institute of Science and Technology - Pilani",
      subHeader: "B.E.(hons) Computer Science",
      logo: require("./assets/images/bits.png"),
      duration: "August 2015 - May 2019",
      desc: "GPA: 8.17/10",
      descBullets: [
        "Relevant Course Work: Data Structures and Algorithms, Design and Analysis of Algorithms, Computer Networks, Operating Systems, Database Systems, Object Oriented Programming, C++, Computer Architecture ",
      ],
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "90%"
    },
    {
      Stack: "System Design", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Development Intern",
      company: "Bloomberg",
      companylogo: require("./assets/images/bloomberg.png"),
      date: "May 2022 – July 2022",
      // descBullets: [
      //   "Developed and deployed an automatic report generation tool for errors, exceptions, and SLA breaches using Java with DynamoDB as database and deployed in AWS.",
      //   "This project saves around 4 hours for on-calls every week, reducing their workload by 10%.",
      // ],
    },
    {
      role: "Software Engineer",
      company: "OYO",
      companylogo: require("./assets/images/oyo.png"),
      date: "June 2019 – May 2021",
      descBullets: ["Engineered Promotion Service APIs for coupon creation, enabling 16 times more features.",
        "Implemented Pricing Service (in a team of 2), improving website loading time by 70%.",
        "Fixed a scheduling bug by using Apache Kafka messaging queues to keep track of move out tasks, reducing on - call issues occurring from scheduling tasks by 20 %.",
        "On demand from customers, developed feature to find a property by metro line and distance, saving customers 2 min per each search.",
        "Designed and implemented invoice generation task, which reduced the number of invoices generated by more than 50 %, appreciably improving customer experience."],
    },
    {
      role: "Software Development Intern",
      company: "Amazon",
      companylogo: require("./assets/images/amazon.png"),
      date: "Jan 2019 – May 2019",
      descBullets: [
        "Developed and deployed an automatic report generation tool for errors, exceptions, and SLA breaches using Java with DynamoDB as database and deployed in AWS.",
        "This project saves around 4 hours for on-calls every week, reducing their workload by 10%.",
      ],
    },
    {
      role: "Software Development Intern",
      company: "United HealthGroup",
      companylogo: require("./assets/images/uhg.png"),
      date: "May 2018 – July 2018",
      descBullets: ["Developed a backend APIs for the Optum Data Lake team using NodeJS, enabling developers, managers, and executives to monitor insurance metrics in real-time instead of once a day",
        "Collaborated with senior developers on reducing the load on the backend servers and elastic search servers by implementing cache, which reduced the number of pods by more than 50%.",],
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  // subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
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
      title: "Facebook Hackercup",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.facebook.com/codingcompetitions/hacker-cup/2021/certificate/1217366392017646"
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
      title: "SQL (Intermediate) Certificate",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://www.hackerrank.com/certificates/7c712a23ee6f"
        }
      ]
    },
    {
      title: "Problem Solving (Intermediate) Certificate",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    },
    {
      title: "Rest API (Intermediate) Certificate",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
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
  number: "+1 (804) 482 1169",
  email_address: "saivenkat.996@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

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
  twitterDetails
};
