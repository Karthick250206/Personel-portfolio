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
  username: "StyleNest",
  title: "Hi , I'm Karthick",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Karthick250206",
  linkedin: "https://www.linkedin.com/in/saadpasta/",
  gmail: "karthick250206@gmail.com",
  facebook: "https://www.facebook.com/saad.pasta7",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
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
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
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
      schoolName: "KSR Institute For Engineering & Technology",
      logo: require("./assets/images/College.jpg"),
      subHeader: "Bachelor of Engineering in Computer Science",
      duration: "September 2023 - July 2027",
      desc: "Pursuing a rigorous engineering curriculum while spearheading hands-on projects that bridge theoretical knowledge with industry demands. Demonstrated advanced front-end expertise by architecting responsive, high-performance web applications using React, SCSS, and JavaScript. Successfully designed and launched a fully optimized portfolio website for Azhizen Solutions during a professional internship, elevating user engagement through intuitive UI/UX and seamless cross-device functionality. Committed to delivering elegant code solutions that solve complex, real-time challenges and drive innovation."
    }
  ]
};


// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
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
  display: true, // Set it to true to show workExperiences Section
  experience: [
    {
  role: "Developer Intern",
  company: "Azhizen Solutions",
  companylogo: require("./assets/images/airbnbLogo.png"), // You can update this to your company's actual logo
  date: "Jan 2025 – Present",
  desc: "Worked as a developer intern where I actively contributed to the development of a real-time project that was later launched as a company product. I was also responsible for designing and building the official company website. The internship provided hands-on experience with live deployments, client requirements, and collaboration with the development team on production-level code.",
  descBullets: [
    "Built and launched a real-time web application that became a core product of the company",
    "Designed and developed Azhizen Solutions’ official company website from scratch",
    "Collaborated with senior developers and participated in code reviews and daily stand-ups",
    "Gained practical experience in frontend and backend development using modern tools and frameworks"
  ]
}, 
    {
       role: "Full-Stack Development Intern",
       company: "Accent-Techno-Soft",
       companylogo: require("./assets/images/comp2.jpg"),
       date: "June 2018 – Present",
      desc: "Completed a 15-day internship at Accent Techno Soft, Coimbatore, where I was introduced to full-stack web development concepts. The program focused on building a strong foundation in both frontend and backend technologies through guided learning, practical exercises, and mentorship sessions. Although I didn't work on a live project, the internship gave me valuable exposure to the software development lifecycle and modern development tools.",
descBullets: [
  "Underwent hands-on training in HTML, CSS, JavaScript, and React for frontend development",
  "Explored backend fundamentals using Node.js, Express.js, and MongoDB",
  "Learned how REST APIs are built and integrated into full-stack applications",
  "Received mentorship from experienced developers and participated in interactive coding sessions",
  "Gained insights into deployment processes and version control using Git and GitHub"
       ]
     },
    // {
    //   role: "Front-End Developer",
    //   company: "Quora",
    //   companylogo: require("./assets/images/quoraLogo.png"),
    //   date: "May 2017 – May 2018",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    // },


  ]
};


/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  projects: [
    {
      image: require("./assets/images/Job.jpg"),
      projectName: "Job Skill Analyzer from LinkedIn Profiles",
      projectDesc: "Job Skill Analyzer from LinkedIn Profiles extracts and analyzes skills from LinkedIn profiles to identify strengths and skill gaps, helping users improve their career prospects.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://Job Skill Analyzer.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/AI.jpg"),
      projectName: "AI-Powered Portfolio Site",
      projectDesc: "An interactive portfolio with an AI chatbot trained on my experience, enabling dynamic career Q&A. Built with GPT-4 and Web Speech API for voice-driven engagement.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://AI-Powered Portfolio.se/"
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
      title: "ICT Lernathon'24",
      subtitle:
        "Earned over 20 course certifications in the ICT Learnathon 2024, demonstrating a strong commitment to continuous learning. Developed versatile skills through intensive, hands-on training, enhancing technical expertise for innovative projects.",
      image: require("./assets/images/ICT.jpg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
      ]
    },
    {
      title: "GDSC Project '25",
      subtitle:
        "Completed a project under GDSC in 2025, earning a certification that highlights my hands-on experience and dedication to collaborative innovation. Developed practical skills through real-world problem-solving and teamwork, strengthening my technical proficiency.",
      image: require("./assets/images/GDSC.jpg"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
      ]
    },

    {
      title: "SIH Smart India Hackathon '24",
      subtitle: "Participated in the SIH Smart India Hackathon 2025 and got selected in the internal hackathon round, showcasing my problem-solving and teamwork skills. Gained valuable experience in developing innovative solutions under tight deadlines, boosting my technical and collaborative abilities.",
      image: require("./assets/images/SIH.png"),
      imageAlt: "PWA Logo",
      footerLink: [
         {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
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
  display: true // Set false to hide this section, defaults to true
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
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "6383686832",
  email_address: "karthick250206@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  isHireable,
  resumeSection
};
