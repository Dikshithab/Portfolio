export const profile = {
  name: "Shiva Dikshitha Burra",
  initials: "SD",
  headline: "Python Full Stack Developer | AI & Generative AI Enthusiast | Cybersecurity",
  summary:
    "B.Tech Computer Science student specializing in Cybersecurity with hands-on expertise building production-ready web applications using Python, Django REST Framework, React, and Generative AI APIs.",
  education: {
    degree: "B.Tech in Computer Science and Engineering",
    specialization: "Cybersecurity",
    college: "Narasimha Reddy Engineering College",
    period: "2023 – 2027",
  },
  github: "https://github.com/Dikshithab",
  linkedin: "https://www.linkedin.com/in/burra-shiva-dikshitha-353173350/",
};

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Interests", href: "#interests" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Certifications", href: "#certifications" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" },
];

export const skillCategories = [
  {
    title: "Backend Development",
    description: "Robust RESTful APIs, data serialization, and server-side logic",
    skills: ["Python", "Django", "Django REST Framework", "Flask", "REST APIs"],
  },
  {
    title: "Frontend Development",
    description: "Interactive, modern single-page applications and responsive UIs",
    skills: ["React", "JavaScript", "HTML5", "CSS3", "Vite"],
  },
  {
    title: "Databases",
    description: "Relational data modeling, schema design, and query optimization",
    skills: ["SQL", "MySQL", "SQLite"],
  },
  {
    title: "AI and Generative AI",
    description: "Intelligent application workflows and LLM orchestration",
    skills: ["Generative AI", "AI API Integration", "Groq AI", "LLM Workflows", "Prompt Engineering"],
  },
  {
    title: "Cybersecurity",
    description: "Security-first development, symmetric encryption, and secure auth",
    skills: ["Cybersecurity Fundamentals", "Fernet Encryption", "Cryptography", "JWT", "Role-Based Auth"],
  },
  {
    title: "Development Tools",
    description: "Version control, collaboration, and modern dev environments",
    skills: ["Git", "GitHub", "VS Code"],
  },
];

export const interestsData = [
  {
    title: "Generative AI",
    description:
      "Exploring LLMs, prompt engineering, and AI-powered applications.",
    icon: "Brain",
  },
  {
    title: "AI Agents",
    description:
      "Interested in intelligent assistants, autonomous agents, and workflow automation.",
    icon: "Bot",
  },
  {
    title: "Full Stack Development",
    description:
      "Building modern, responsive applications using Python, Django, and React.",
    icon: "Code2",
  },
  {
    title: "Cybersecurity",
    description:
      "Exploring application security, encryption, and secure software development.",
    icon: "ShieldCheck",
  },
  {
    title: "Problem Solving",
    description:
      "Improving logical thinking through Data Structures, Algorithms, and coding challenges.",
    icon: "Lightbulb",
  },
  {
    title: "Technology Exploration",
    description:
      "Experimenting with emerging technologies and continuously learning new tools.",
    icon: "Rocket",
  },
];

export const projects = [
  {
    number: "01",
    featured: true,
    title: "HireSphere Job Portal",
    category: "AI-Powered Full Stack / Recruitment Tech",
    description:
      "An AI-powered job portal built to simplify recruitment and job searching. It enables candidates to discover opportunities, manage applications, upload resumes, and leverage AI-powered resume analysis, ATS scoring, and skill matching.",
    technologies: [
      "React",
      "Django REST Framework",
      "Python",
      "MySQL",
      "JWT",
      "Groq AI",
    ],
    features: [
      "Job discovery, advanced filtering, and application submission",
      "Role-based authentication for Job Seekers and Employers",
      "Resume upload, management, and automated text extraction",
      "AI-powered resume analysis and ATS-style scoring",
      "Skill matching and missing skill identification",
      "AI-powered job recommendations",
    ],
    github: "https://github.com/Dikshithab/HireSphere-Job-Portal",
    live: "https://hiresphere-frontend-mn01.onrender.com/login",
  },
  {
    number: "02",
    featured: false,
    title: "AI-Powered Kanban",
    category: "AI / Project Management",
    description:
      "An intelligent workflow and project management platform that organizes sprint tasks, monitors project health, detects delivery bottlenecks, and generates contextual AI recommendations using Groq AI.",
    technologies: [
      "React",
      "Django REST Framework",
      "Groq AI",
      "Python",
    ],
    features: [
      "Task and board management with status and priority workflows",
      "AI-powered project health analysis and risk identification",
      "Actionable project recommendations generated by Groq AI",
      "Interactive dashboard visualizations and data export",
    ],
    github: "https://github.com/Dikshithab/ai-powered-kanban",
    live: "https://ai-powered-kanban-frontend.vercel.app/login",
  },
  {
    number: "03",
    featured: false,
    title: "CipherVault",
    category: "Cybersecurity / Data Protection",
    description:
      "A security-focused web application that protects sensitive digital assets through symmetric cryptography, providing file encryption, decryption, and secure key generation.",
    technologies: [
      "Python",
      "Flask",
      "Cryptography",
      "Fernet",
    ],
    features: [
      "File encryption and decryption using Fernet",
      "Cryptographically secure encryption key generation",
      "Secure downloads for processed encrypted files",
    ],
    github: "https://github.com/Dikshithab/CipherVault",
    live: "",
  },
];
export const experienceData = [
  {
    role: "Python Full Stack Development Intern",
    organization: "AICTE Internship",
    period: "Jul – Sep 2025",
    type: "Internship",
    description:
      "Gained hands-on practical exposure to full stack web engineering, architecting RESTful services with Python, integrating database schemas, and building responsive client-side interfaces.",
  },
];

export const certificationsData = [
  {
    title: "Programming in Java",
    issuer: "NPTEL",
    detail: "Elite + Silver · 73% · 2025",
  },
  {
    title: "Generative AI",
    issuer: "Infosys Springboard",
    detail: "2025",
  },  
  {
    title: "Introduction to CyberSecurity",
    issuer: "Cisco Networking Academy",
    detail: "2025",
  },
  {
    title: "Introduction to Modern AI",
    issuer: "Cisco Networking Academy",
    detail: "2025",
  },
  
];