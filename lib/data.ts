export const profile = {
  name: "Boukrioui Nadir",
  title: "AI & Data Sciences Engineer",
  subtitle: "Full-Stack Developer · Open to Work",
  description:
    "Passionate AI and Data Sciences engineering student with a strong foundation in mathematics, algorithms, software engineering, and full-stack development. I build intelligent and scalable solutions to solve real-world problems.",
  email: "nadirboukrioui2001@gmail.com",
  location: "Tangier-Tetouan, Morocco",
  linkedin: "https://linkedin.com/in/boukrioui-nadir",
  github: "https://github.com/Nadir-23",
  cvPath: "/cv/CV_Boukrioui_Nadir_ENSIASD.pdf",
};

export const aboutInterests = [
  "Artificial Intelligence",
  "Machine Learning",
  "Data Science",
  "Full-Stack Development",
  "Cybersecurity",
  "Software Engineering",
  "Open Source",
];

export type EducationEntry = {
  period: string;
  institution: string;
  institutionFull: string;
  degree: string;
  courses: string[];
};

export const education: EducationEntry[] = [
  {
    period: "2025 — Present",
    institution: "ENSIASD",
    institutionFull: "National School of Artificial Intelligence and Data Sciences",
    degree: "State Engineer Degree · AI & Data Sciences",
    courses: [
      "Mathematics for AI",
      "Statistics",
      "Numerical Analysis",
      "Algorithmics",
      "Networking",
      "Web Technologies",
      "Java OOP",
      "Databases",
      "Project Management",
      "Quantum Computing",
    ],
  },
  {
    period: "2022 — 2024",
    institution: "CPGE Tetouan",
    institutionFull: "Preparatory Classes MPSI / MP",
    degree: "Intensive Mathematics & Physics Track",
    courses: [
      "Advanced Mathematics",
      "Linear Algebra",
      "Probability",
      "Mechanics",
      "Electromagnetism",
      "Thermodynamics",
      "Python Programming",
      "Data Structures & Algorithms",
    ],
  },
];

export type TechCategory = {
  label: string;
  items: { name: string; level: number }[];
};

export const techStack: TechCategory[] = [
  {
    label: "Languages",
    items: [
      { name: "Python", level: 90 },
      { name: "Java", level: 80 },
      { name: "JavaScript", level: 78 },
      { name: "SQL", level: 82 },
      { name: "HTML", level: 88 },
      { name: "CSS", level: 84 },
    ],
  },
  {
    label: "Frameworks",
    items: [
      { name: "Flask", level: 82 },
      { name: "Spring Boot", level: 75 },
      { name: "React", level: 78 },
      { name: "Tailwind CSS", level: 85 },
    ],
  },
  {
    label: "Databases",
    items: [
      { name: "MySQL", level: 85 },
      { name: "phpMyAdmin", level: 80 },
      { name: "Workbench", level: 78 },
    ],
  },
  {
    label: "Tools",
    items: [
      { name: "Git", level: 88 },
      { name: "GitHub", level: 90 },
      { name: "VS Code", level: 92 },
      { name: "Postman", level: 80 },
      { name: "Jupyter Notebook", level: 85 },
    ],
  },
  {
    label: "Security",
    items: [
      { name: "JWT", level: 82 },
      { name: "RBAC", level: 80 },
      { name: "Spring Security", level: 72 },
      { name: "REST APIs", level: 86 },
    ],
  },
  {
    label: "Networking",
    items: [
      { name: "Cisco", level: 68 },
      { name: "Wireshark", level: 65 },
    ],
  },
];

export type Project = {
  slug: string;
  title: string;
  category: "AI & Data" | "Web" | "Systems";
  description: string;
  technologies: string[];
  features: string[];
  github: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "taroudant-heritage-shield",
    title: "Taroudant Heritage Shield",
    category: "Web",
    description:
      "Web platform for monitoring and protecting the architectural heritage of Taroudant. Includes automatic vulnerability score calculation, real-time alerts, role-based access control, and secure REST APIs.",
    technologies: ["Python", "Flask", "React", "Tailwind CSS", "MySQL", "JWT", "RBAC", "REST API"],
    features: [
      "Real-time alerts",
      "Expert → Authority workflow",
      "MySQL triggers and stored procedures",
      "3-tier architecture",
      "JWT authentication",
    ],
    github: "https://github.com/Nadir-23",
    featured: true,
  },
  {
    slug: "university-clubs-platform",
    title: "University Clubs Management Platform",
    category: "Web",
    description:
      "Centralized platform for managing student clubs, events, budgets, and members.",
    technologies: ["Java Spring Boot", "Spring Security", "MySQL", "JavaScript", "HTML", "CSS"],
    features: [
      "Authentication",
      "Authorization",
      "Database modeling",
      "Frontend/backend integration",
      "Production deployment",
    ],
    github: "https://github.com/Nadir-23",
  },
  {
    slug: "dynamo-energy-converter",
    title: "Mechanical-Electrical Energy Converter (Dynamo)",
    category: "Systems",
    description:
      "Designed a regulation system for stable voltage output and analyzed measurement data.",
    technologies: ["Python", "Scilab"],
    features: [
      "Voltage regulation system",
      "Measurement data analysis",
      "Signal visualization",
    ],
    github: "https://github.com/Nadir-23",
  },
];

export const projectCategories = ["All", "AI & Data", "Web", "Systems"] as const;

export const experience = [
  {
    company: "HB Development",
    location: "Tetouan, Morocco",
    role: "Software Developer Intern",
    period: "Current",
    focus: [
      "Web Development",
      "Backend Engineering",
      "APIs",
      "Databases",
      "Software Architecture",
    ],
  },
];

export const skills = {
  technical: [
    "AI",
    "Machine Learning",
    "Data Science",
    "Backend Development",
    "Frontend Development",
    "Cybersecurity",
    "REST APIs",
    "Database Design",
    "System Architecture",
  ],
  soft: [
    "Fast Learner",
    "Analytical Mindset",
    "Teamwork",
    "Communication",
    "Autonomy",
    "Problem Solving",
    "Leadership",
  ],
};

export const languages = [
  { name: "Arabic", level: "Native", value: 100 },
  { name: "English", level: "Advanced", value: 85 },
  { name: "French", level: "Intermediate", value: 60 },
  { name: "Spanish", level: "Elementary", value: 30 },
];

export const interests = [
  { name: "Football", icon: "trophy" },
  { name: "Travel", icon: "compass" },
  { name: "Reading Tech & Science", icon: "book-open" },
  { name: "Open Source Contributions", icon: "git-branch" },
  { name: "Artificial Intelligence", icon: "brain-circuit" },
];

export const stats = [
  { label: "Projects Completed", value: 3, suffix: "+" },
  { label: "Technologies Mastered", value: 20, suffix: "+" },
  { label: "Years of Study", value: 4, suffix: "" },
];
