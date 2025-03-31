import { 
  FaCode, 
  FaServer, 
  FaTools, 
  FaPython, 
  FaJs, 
  FaJava,
  FaAws, 
  FaReact, 
  FaDatabase, 
  FaDocker, 
  FaGithub,
  FaGraduationCap,
  FaSchool,
  FaCertificate,
  FaAward,
  FaLaptopCode,
  FaCloud,
  FaTrophy,
  FaEnvelope,
  FaLinkedinIn
} from "react-icons/fa";

import { 
  NavLink, 
  ProjectTag, 
  Project, 
  SkillCategory, 
  Experience,
  Certification,
  CertificationCategory,
  ContactInfo
} from "@/types";

export const navLinks: NavLink[] = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

export const educationItems = [
  {
    id: 1,
    icon: <FaGraduationCap className="mt-1 mr-3 text-blue-600 dark:text-blue-400" />,
    title: "Bachelor of Technology (B.Tech Hons.) in Computer Science Engineering",
    place: "AMC Engineering College, VTU (2021-2025) | CGPA: 8.7"
  },
  {
    id: 2,
    icon: <FaSchool className="mt-1 mr-3 text-blue-600 dark:text-blue-400" />,
    title: "Senior Secondary (CBSE)",
    place: "90% (2021)"
  },
  {
    id: 3,
    icon: <FaSchool className="mt-1 mr-3 text-blue-600 dark:text-blue-400" />,
    title: "Secondary (CBSE)",
    place: "90% (2019)"
  }
];

export const interestTags = [
  { id: 1, name: "Cloud Computing ☁️", color: "blue" },
  { id: 2, name: "AI & Machine Learning 🤖", color: "violet" },
  { id: 3, name: "Cybersecurity 🔐", color: "emerald" },
  { id: 4, name: "Web Development 🌐", color: "amber" }
];

export const skillCategories: SkillCategory[] = [
  {
    id: 1,
    title: "Programming",
    icon: <FaCode className="text-2xl text-blue-600 dark:text-blue-400 mr-3" />,
    skills: [
      { name: "Python", percentage: 90 },
      { name: "JavaScript", percentage: 80 },
      { name: "Java", percentage: 75 }
    ],
    color: "blue",
    delay: 0
  },
  {
    id: 2,
    title: "Technologies",
    icon: <FaServer className="text-2xl text-violet-600 dark:text-violet-400 mr-3" />,
    skills: [
      { name: "AWS", percentage: 85 },
      { name: "Machine Learning", percentage: 80 },
      { name: "Django", percentage: 75 }
    ],
    color: "violet",
    delay: 0.2
  },
  {
    id: 3,
    title: "Tools",
    icon: <FaTools className="text-2xl text-emerald-600 dark:text-emerald-400 mr-3" />,
    skills: [
      { name: "GitHub", percentage: 90 },
      { name: "Docker", percentage: 70 },
      { name: "VS Code", percentage: 95 }
    ],
    color: "emerald",
    delay: 0.4
  }
];

export const techStack = [
  { id: 1, name: "Python", icon: <FaPython className="text-blue-500" /> },
  { id: 2, name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
  { id: 3, name: "Java", icon: <FaJava className="text-red-500" /> },
  { id: 4, name: "AWS", icon: <FaAws className="text-orange-500" /> },
  { id: 5, name: "React", icon: <FaReact className="text-blue-400" /> },
  { id: 6, name: "SQL", icon: <FaDatabase className="text-green-500" /> },
  { id: 7, name: "Docker", icon: <FaDocker className="text-blue-600" /> },
  { id: 8, name: "GitHub", icon: <FaGithub className="text-slate-700 dark:text-slate-300" /> }
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Phishing Detection Website",
    description: "A machine learning powered web application that detects phishing websites to protect users from online scams.",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
    tags: [
      { name: "Python", color: "blue" },
      { name: "Django", color: "green" },
      { name: "AWS", color: "yellow" },
      { name: "MongoDB", color: "gray" }
    ],
    details: {
      features: [
        { id: 1, text: "Real-time URL scanning and analysis" },
        { id: 2, text: "Machine learning model with 95% accuracy" },
        { id: 3, text: "Responsive design for mobile and desktop" },
        { id: 4, text: "User alert system for dangerous websites" }
      ],
      technicalDetails: "Backend built with Python and Django, deployed on AWS. Uses MongoDB for data storage and custom ML models trained on phishing datasets."
    },
    githubLink: "#",
    delay: 0
  },
  {
    id: 2,
    title: "AI-Driven Surveillance",
    description: "Intelligent surveillance system using computer vision to detect and track objects and people.",
    image: "https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
    tags: [
      { name: "ML", color: "blue" },
      { name: "AWS", color: "yellow" },
      { name: "OpenCV", color: "purple" },
      { name: "YOLO", color: "red" }
    ],
    details: {
      features: [
        { id: 1, text: "Real-time object detection and tracking" },
        { id: 2, text: "Face recognition with MTCNN" },
        { id: 3, text: "Audio monitoring with PyAudio" },
        { id: 4, text: "Cloud storage and retrieval on AWS" }
      ],
      technicalDetails: "Used YOLO for object detection with 30 FPS processing speed. Implemented face recognition using MTCNN models and deployed the solution on AWS EC2 instances."
    },
    githubLink: "#",
    delay: 0.2
  },
  {
    id: 3,
    title: "House Price Prediction",
    description: "ML model for predicting real estate prices based on various features and market trends.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
    tags: [
      { name: "Python", color: "blue" },
      { name: "Scikit-learn", color: "green" },
      { name: "Pandas", color: "yellow" },
      { name: "Flask", color: "red" }
    ],
    details: {
      features: [
        { id: 1, text: "Regression models with 89% accuracy" },
        { id: 2, text: "Feature importance analysis" },
        { id: 3, text: "Interactive web interface for predictions" },
        { id: 4, text: "Visual data analytics of housing trends" }
      ],
      technicalDetails: "Used ensemble methods including Random Forest and Gradient Boosting for prediction. Flask backend with interactive charts using D3.js for visualizations."
    },
    githubLink: "#",
    delay: 0.4
  },
  {
    id: 4,
    title: "E-commerce Price Prediction",
    description: "Data-driven pricing strategy model for e-commerce platforms to optimize product pricing.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
    tags: [
      { name: "Python", color: "blue" },
      { name: "TensorFlow", color: "green" },
      { name: "Data Analysis", color: "yellow" },
      { name: "Visualization", color: "purple" }
    ],
    details: {
      features: [
        { id: 1, text: "Competitive price analysis" },
        { id: 2, text: "Demand forecasting algorithms" },
        { id: 3, text: "Seasonal pricing adjustments" },
        { id: 4, text: "Profit optimization models" }
      ],
      technicalDetails: "Implemented neural networks with TensorFlow for price prediction based on historical data, market trends, and competitor analysis. Used Tableau for interactive dashboards."
    },
    githubLink: "#",
    delay: 0.6
  }
];

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Software Development Intern (Data Science)",
    company: "Zidio Software Development",
    location: "Bangalore",
    period: "Aug 2024 - Nov 2024",
    description: "Working on data science projects involving machine learning algorithms and data visualization for business intelligence solutions.",
    skills: ["Data Science", "Python", "Machine Learning", "Business Intelligence"],
    dotColor: "bg-blue-600 dark:bg-blue-400",
    timeBadgeColor: "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300",
    delay: 0
  },
  {
    id: 2,
    title: "Data Science Intern",
    company: "ANDINTERN",
    location: "Remote",
    period: "Jan 2024 - Mar 2024",
    description: "Developed data analysis pipelines and predictive models for client projects. Worked with large datasets to extract actionable insights.",
    skills: ["Data Analysis", "Python", "Pandas", "Predictive Modeling"],
    dotColor: "bg-violet-600 dark:bg-violet-400",
    timeBadgeColor: "bg-violet-100 dark:bg-violet-900/30 text-violet-800 dark:text-violet-300",
    delay: 0.2
  },
  {
    id: 3,
    title: "AWS Cloud Internship",
    company: "AWS Academy Program",
    location: "",
    period: "Summer 2023",
    description: "Completed comprehensive training on AWS Foundation and Architecture. Gained hands-on experience with various AWS services and cloud infrastructure.",
    skills: ["AWS", "Cloud Computing", "Infrastructure as Code", "DevOps"],
    dotColor: "bg-emerald-600 dark:bg-emerald-400",
    timeBadgeColor: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300",
    delay: 0.4
  }
];

export const cloudDataCertifications: Certification[] = [
  {
    id: 1,
    title: "AWS Academy Data Engineering Certification",
    issuer: "Amazon Web Services",
    icon: <FaCertificate className="text-yellow-500 mt-1 mr-3" />
  },
  {
    id: 2,
    title: "AWS Academy Cloud Architecting Certification",
    issuer: "Amazon Web Services",
    icon: <FaCertificate className="text-yellow-500 mt-1 mr-3" />
  },
  {
    id: 3,
    title: "Google Advanced Data Analytics",
    issuer: "Google",
    icon: <FaCertificate className="text-yellow-500 mt-1 mr-3" />
  },
  {
    id: 4,
    title: "Google IT Automation with Python",
    issuer: "Google",
    icon: <FaCertificate className="text-yellow-500 mt-1 mr-3" />
  },
  {
    id: 5,
    title: "Data Science Associate Certificate",
    issuer: "DataCamp",
    icon: <FaCertificate className="text-yellow-500 mt-1 mr-3" />
  },
  {
    id: 6,
    title: "NPTEL Cloud Computing",
    issuer: "IIT Madras",
    icon: <FaCertificate className="text-yellow-500 mt-1 mr-3" />
  }
];

export const webProgrammingCertifications: Certification[] = [
  {
    id: 1,
    title: "Complete Web Development Bootcamp",
    issuer: "Udemy, Angela Yu",
    icon: <FaCertificate className="text-yellow-500 mt-1 mr-3" />
  },
  {
    id: 2,
    title: "JavaScript Fundamentals",
    issuer: "Coursera",
    icon: <FaCertificate className="text-yellow-500 mt-1 mr-3" />
  }
];

export const achievements: Certification[] = [
  {
    id: 1,
    title: "First place in paper presentation at Advaya",
    issuer: "National-Level Symposium",
    icon: <FaAward className="text-amber-500 mt-1 mr-3" />
  },
  {
    id: 2,
    title: "Hackathon participant",
    issuer: "Various coding competitions",
    icon: <FaLaptopCode className="text-blue-500 mt-1 mr-3" />
  }
];

export const certificationCategories: CertificationCategory[] = [
  {
    id: 1,
    title: "Cloud & Data Science",
    icon: <FaCloud className="text-xl text-blue-600 dark:text-blue-400" />,
    iconBg: "bg-blue-100 dark:bg-blue-900/30",
    iconTextColor: "text-blue-600 dark:text-blue-400",
    certifications: cloudDataCertifications,
    delay: 0
  },
  {
    id: 2,
    title: "Web & Programming",
    icon: <FaCode className="text-xl text-violet-600 dark:text-violet-400" />,
    iconBg: "bg-violet-100 dark:bg-violet-900/30",
    iconTextColor: "text-violet-600 dark:text-violet-400",
    certifications: webProgrammingCertifications,
    delay: 0.2
  },
  {
    id: 3,
    title: "Other Achievements",
    icon: <FaTrophy className="text-xl text-emerald-600 dark:text-emerald-400" />,
    iconBg: "bg-emerald-100 dark:bg-emerald-900/30",
    iconTextColor: "text-emerald-600 dark:text-emerald-400",
    certifications: achievements,
    delay: 0.4
  }
];

export const contactInfo: ContactInfo[] = [
  {
    id: 1,
    title: "Email",
    value: "sumanthgowdach123@gmail.com",
    icon: <FaEnvelope className="text-blue-600 dark:text-blue-400" />,
    link: "mailto:sumanthgowdach123@gmail.com"
  },
  {
    id: 2,
    title: "LinkedIn",
    value: "https://www.linkedin.com/in/sumanth-ch-b5617824a/",
    icon: <FaLinkedinIn className="text-blue-600 dark:text-blue-400" />,
    link: "https://www.linkedin.com/in/sumanth-ch-b5617824a/"
  },
  {
    id: 3,
    title: "GitHub",
    value: "https://github.com/sumanth-0"
    icon: <FaGithub className="text-blue-600 dark:text-blue-400" />,
    link: "https://github.com/sumanth-0"
  }
];

export const typingPhrases = [
  "Aspiring Cloud & AI Engineer",
  "Data Science Enthusiast",
  "Web Developer",
  "Problem Solver"
];

export const techTags = [
  "Python",
  "AWS",
  "Machine Learning",
  "JavaScript",
  "Django",
  "Data Science"
];
