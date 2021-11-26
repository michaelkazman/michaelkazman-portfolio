/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true,
};

// SEO Related settings
const seo = {
  title: "Michael's Portfolio",
  description:
    "Innovative detail-oriented computer science student with a knack for full-stack development and passion for emerging technology.",
  og: {
    title: "Michael Kazman Portfolio",
    type: "website",
    url: "http://michaelkazman.com/",
  },
};

// Home Page
const greeting = {
  title: "Hello",
  name: "Michael Kazman",
  logo_name: "michaelkazman",
  nickname: "SeniorFluffie",
  subTitle:
    "An innovative detail-oriented computer science student with a knack for full-stack development and passion for emerging technology.",
  resumeLink:
    "https://drive.google.com/open?id=1XYpYhLeqCdyx_q6l0bQoC7RgwQjAjXPf",
  portfolio_repository:
    "https://github.com/michaelkazman/michaelkazman-portfolio",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/michaelkazman",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/michaelkazman",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:michael.kazman@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  title: "About Me",
  data: [
    {
      title: "Front-End Development",
      fileName: "FullStackImg",
      skills: [
        "Builds responsive web apps using Javascript, React, Jest, and Redux",
        "Designs dynamic interactive components using Bootstrap, Material-UI, and Sass",
        "Develops web-based backends with NodeJS, NextJS, Express, and MongoDB",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "vscode-icons:file-type-css",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "logos:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "logos:javascript",
          style: {
            backgroundColor: "transparent",
            borderRadius: 4,
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Redux",
          fontAwesomeClassname: "logos:redux",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Jest",
          fontAwesomeClassname: "logos:jest",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "vscode-icons:file-type-mongo",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Material-UI",
          fontAwesomeClassname: "logos:material-ui",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#563D7C",
          },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "logos:typescript-icon",
          style: {
            backgroundColor: "transparent",
            borderRadius: 4,
          },
        },
        {
          skillName: "Next.js",
          fontAwesomeClassname: "logos:nextjs-icon",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Back-End Development",
      fileName: "FullStackImg",
      skills: ["Building resposive website front end using React-Redux"],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "logos:django-icon",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "logos:java",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Spring",
          fontAwesomeClassname: "logos:spring-icon",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "C",
          fontAwesomeClassname: "logos:c",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "logos:c-plusplus",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "Working experience with recommender systems, clustering algorithms, and regression models",
        "Develops machine learning and neural network models using Keras, TensorFlow, and scikit-learn",
        "Builds production-ready pipelines using Python3, Jupyter, and Anaconda",
        "Visualizes statistical data using NumPy, Pandas, matplotlib, Bokeh, Altair, and plotnine",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Jupyter",
          fontAwesomeClassname: "logos:jupyter",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "OpenCV",
          fontAwesomeClassname: "logos:opencv",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "scikit-learn",
          fontAwesomeClassname: "simple-icons:scikitlearn",
          style: {
            backgroundColor: "transparent",
            color: "#FA9C3C",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "Designs highly attractive user interfaces for both mobile and web apps",
        "Describes process flows and user journeys through visualization tools like Miro, Sketch, and Figma",
        "Builds concise digestible slide decks to elegantly illustrate stakeholder requirements and project roadmaps",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "Working experience on various cloud platforms like Amazon Web Services, Microsoft Azure, and Google Cloud Platform",
        "Familiarity with AI infrastructure deployment for services like custom image recognition, natural language understanding, and insightful analytics",
        "Orchestration of containers using Docker, OpenShift, and Pivotal Cloud Foundry",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "logos:google-cloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "logos:aws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "logos:azure-icon",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "vscode-icons:file-type-mongo",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
    {
      title: "Misc",
      fileName: "CloudInfraImg",
      skills: [
        "Working experience in various environments (Unix, MacOS, Windows)",
        "Scripting experience using Python, Bash, and Google Scripts",
        "Project management using Git, Jira, Trello, Slack, Asana, and Confluence",
      ],
      softwareSkills: [
        {
          skillName: "MacOS",
          fontAwesomeClassname: "fa-brands:apple",
          style: {
            color: "#555555",
          },
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "logos:linux-tux",
          style: {
            color: "transparent",
          },
        },
        {
          skillName: "Ubuntu",
          fontAwesomeClassname: "logos:ubuntu",
          style: {
            color: "transparent",
          },
        },
        {
          skillName: "Windows",
          fontAwesomeClassname: "logos:microsoft-windows",
          style: {
            color: "transparent",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "logos:git-icon",
          style: {
            color: "transparent",
          },
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "logos:github-icon",
          style: {
            color: "transparent",
          },
        },
        {
          skillName: "GitLab",
          fontAwesomeClassname: "logos:gitlab",
          style: {
            color: "transparent",
          },
        },
        {
          skillName: "BitBucket",
          fontAwesomeClassname: "logos:bitbucket",
          style: {
            color: "transparent",
          },
        },
        {
          skillName: "Visual Studio Code",
          fontAwesomeClassname: "logos:visual-studio-code",
          style: {
            color: "transparent",
          },
        },
        {
          skillName: "Bash",
          fontAwesomeClassname: "logos:bash-icon",
          style: {
            color: "transparent",
          },
        },
        {
          skillName: "Confluence",
          fontAwesomeClassname: "logos:confluence",
          style: {
            color: "transparent",
          },
        },
        {
          skillName: "Powershell",
          fontAwesomeClassname: "vscode-icons:file-type-powershell",
          style: {
            color: "#transparent",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "StackOverflow",
      iconifyClassname: "simple-icons:stackoverflow",
      style: {
        color: "#F58025",
      },
      profileLink: "https://stackoverflow.com/users/9837834/seniorfluffie",
    },
    {
      siteName: "Credly",
      iconifyClassname: "simple-icons:c",
      style: {
        color: "#FF6C04",
      },
      profileLink: "https://www.credly.com/users/michael-kazman",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/michaelkazman",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/michael_kazman",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Carleton University",
      subtitle: "Bachelor of Computer Science, Honours",
      logo_path: "carleton_university.png",
      alt_name: "Carleton University",
      duration: "2016 - 2021",
      descriptions: [
        "Computer Science (Mobile Computing) Grad",
        "CS GPA: 11.00/12 (A+)",
        "Dean's Honours List: Sept 2016 - Present",
      ],
      website_link:
        "https://calendar.carleton.ca/undergrad/undergradprograms/computerscience/#Computer_Science__Mobile_Computing_Stream__BCS_Honours",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Azure AI Fundamentals",
      subtitle: "Microsoft Certified",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://www.credly.com/badges/0d7a8a23-384f-434e-81aa-f6a194b91c80?source=linked_in_profile",
      alt_name: "Microsoft Azure",
      color_code: "#07beb877",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteering",
  description:
    "I have worked with a number of diverse and growing companies wearing many different hats. From low-level system design and networking to data-science pipelines and full-stack development, I have expereience across the board. With technology being such a diverse field, I can never truley get enough of the various branches.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Technical Systems Analyst",
          company: "Royal Bank Canada",
          company_url: "https://www.rbccm.com/en/",
          logo_path: "rbc_logo.png",
          duration: "July 2021 - Present",
          location: "Toronto, ON",
          description:
            "Researched, designed, and developed the platform’s new UI. Restored entire front-end to use themeing, pattern-matching and testing best practises with MUI, Husky and ESLint libraries.",
          tasks: ["React", "Redux", "Jest", "Django", "Node.js", "Material-UI"],
          color: "#0879bf",
        },
        {
          title: "RBC Amplify, Developer",
          company: "Royal Bank Canada",
          company_url: "https://jobs.rbc.com/ca/en/amplify",
          logo_path: "rbc_logo.png",
          duration: "May 2020 - Aug 2020",
          location: "Toronto, ON",
          description:
            "Patented machine learning solutions utilizing voice recognition, clustering, and a hybridized recommendation engine. Designed, developed, and pitched a cloud-based market data management platform as a cross-functional team lead",
          tasks: [
            "React",
            "Recharts",
            "Node.js",
            "Patented ML Recommendation Engine",
            "OpenShift",
            "Amazon S3",
            "Semantic-UI",
          ],
          color: "#0879bf",
        },
        {
          title: "Web Designer",
          company: "BingeTV",
          company_url:
            "https://www.https://www.linkedin.com/company/binge-media/",
          logo_path: "binge_logo.jpeg",
          duration: "Oct 2019 - Jan 2020",
          location: "Toronto, ON",
          description:
            "Created a multi-media online platform dedicated to original content encompassing sports, mental health, and popular culture.",
          tasks: ["Wix", "Adobe Suite", "Corvid", "JavaScript"],
          color: "#0879bf",
        },
        {
          title: "Full-Stack Developer, Co-op",
          company: "TutorOcean",
          company_url: "https://www.tutorocean.com/",
          logo_path: "tutorocean_logo.png",
          duration: "May 2019 - Dec 2019",
          location: "Kanata, ON",
          description:
            "Engineered custom features for major academic institutions. Redesigned the online e-classroom through a UI/UX overhaul",
          tasks: ["React", "MongoDB", "Node.js", "Meteor", "Jira"],
          color: "#0879bf",
        },
        {
          title: "Student Software Developer",
          company: "Siemens Canada",
          company_url: "https://new.siemens.com/ca/en.html",
          logo_path: "siemens_logo.png",
          duration: "Sept 2018 - Dec 2018",
          location: "Kanata, ON",
          description:
            "Testing and QA for the dynamic VLAN registration of SDNs. Bottleneck analysis of custom data structures on L2 switches",
          tasks: ["C", "C++", "VLANs", "TCP/IP", "Bash", "Git"],
          color: "#0879bf",
          imgStyle: {
            borderRadius: 6,
          },
        },
        {
          title: "Information Technology Assistant",
          company: "Walking On A Cloud",
          company_url: "https://www.walkingonacloud.com/",
          logo_path: "woac_logo.jpeg",
          duration: "May 2017 - Sept 2017",
          location: "Toronto, ON",
          description:
            "Responsible for the support and maintenance of in-house computer systems, networks, and peripherals. Set up scripts, functions, and formatting for Excel-based documents.",
          tasks: [
            "Microsoft Excel",
            "Google Sheets scripting",
            "G-Suite analytics",
            "Magento e-Commerce",
          ],
          color: "#0879bf",
          imgStyle: {
            borderRadius: 6,
          },
        },
        {
          title: "Computer Technician Co-op",
          company: "WebPromotions Internet Services Inc.",
          company_url: "http://www.webpromo-inc.com/",
          logo_path: "webpromo_logo.png",
          duration: "May 2017 - Sept 2017",
          location: "Toronto, ON",
          description:
            "Constructed, modified, and deconstructed computer systems.",
          tasks: [
            "Microsoft Excel",
            "Magento e-Commerce",
            "Hardware repair and installation",
          ],
          color: "#0879bf",
          imgStyle: {
            borderRadius: 6,
          },
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Data Science Research Intern",
          company: "Delhivery Pvt. Ltd.",
          company_url: "https://www.delhivery.com/",
          logo_path: "delhivery_logo.png",
          duration: "May 2019 - Sept 2019",
          location: "Gurgaon, Haryana",
          description:
            "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
          tasks: [],
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Google Explore ML Facilitator",
          company: "Google",
          company_url: "https://about.google/",
          logo_path: "google_logo.png",
          duration: "June 2019 - April 2020",
          location: "Hyderabad, Telangana",
          description:
            "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
          tasks: [],
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "michaelkazman_headshot.png",
    description:
      "Feel free to reach out!\nYou can contact me through email or on LinkedIn.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I write stories about my interests, experiences, and lessons I've learned along the way.",
    link: "https://ashutoshhathidara.wordpress.com",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Ambavadi vas, Kanodar, T.A.-Palanpur, Dist.-Banaskantha, Gujarat - 385520",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 8320758513",
  },
};

const contactInfo = {};

const achievementSection = {};

const blogSection = {};

const bigProjects = {};

const podcastSection = {};

const openSource = {};

const talkSection = {};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  contactPageData,
  contactInfo,
  achievementSection,
  blogSection,
  bigProjects,
  podcastSection,
  openSource,
  talkSection,
};
