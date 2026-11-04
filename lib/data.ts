/**
 * ---------------------------------------------------------------------------
 * SITE CONTENT — everything except projects lives here.
 * Projects are in ./projects.js
 * ---------------------------------------------------------------------------
 */

export const profile = {
  name: "Boukrioui Nadir",
  firstName: "Nadir",
  lastName: "Boukrioui",
  headline: "AI engineer in the making. I build intelligent systems that ship.",
  subtext:
    "Second-year AI & Data Science engineering student at ENSIASD, Morocco. I take problems from a blank notebook to a deployed system — models, APIs and the interface in between.",
  rotating: ["AI", "Full-Stack", "Data Science"],
  email: "nadirboukrioui2001@gmail.com",
  location: "Tangier-Tetouan, Morocco",
  linkedin: "https://linkedin.com/in/boukrioui-nadir",
  github: "https://github.com/Nadir-23",
  cvPath: "/cv/CV_Boukrioui_Nadir.pdf",
  openTo: "Internships · Research · Full-time from 2027",
};

export const about = {
  paragraphs: [
    "I'm a second-year engineering student at ENSIASD, the National School of Artificial Intelligence and Data Sciences in Morocco. Most of my time splits between two things: training models that understand language — especially Darija and other under-resourced varieties — and shipping the full-stack systems that put those models in front of real users.",
    "Before ENSIASD I spent two years in CPGE MPSI/MP, which is where the math habit stuck. Now I use it daily: linear algebra for embeddings, probability for evaluation, and a lot of patience when a loss curve refuses to move.",
    "I care about the whole loop — data, model, API, interface — because a model that never leaves a notebook doesn't help anyone. The projects below are the ones I'd defend in a review.",
  ],
  facts: {
    location: { label: "Based in", value: "Tangier-Tetouan, Morocco" },
    education: {
      label: "Education",
      value: "ENSIASD · State Engineer in AI & Data Sciences",
      detail: "2nd year · CPGE MPSI/MP before",
    },
    languages: {
      label: "Languages",
      value: "Arabic · English · French · Spanish",
      detail: "Native · Advanced · Intermediate · Elementary",
    },
    certifications: {
      label: "Certifications",
      value: "DeepLearning.AI · Cisco",
      detail: "DeepLearning.AI Machine Learning · Cisco Networking",
    },
  },
};

export const skillGroups = [
  {
    label: "AI / ML",
    icon: "brain",
    items: [
      "PyTorch",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Whisper",
      "LoRA / PEFT",
      "NLP",
      "Model Evaluation",
    ],
  },
  {
    label: "Backend",
    icon: "server",
    items: ["Python", "Flask", "FastAPI", "Java", "Spring Boot", "REST APIs", "JWT / RBAC"],
  },
  {
    label: "Frontend",
    icon: "layout",
    items: ["React", "Next.js", "Tailwind CSS", "TypeScript", "HTML / CSS", "Framer Motion"],
  },
  {
    label: "Data",
    icon: "database",
    items: ["MySQL", "SQL", "Data Cleaning", "EDA", "Feature Engineering", "Statistics"],
  },
  {
    label: "DevOps / Tools",
    icon: "wrench",
    items: ["Git / GitHub", "Docker", "Linux", "Postman", "VS Code", "CI basics"],
  },
];

export const timeline = [
  {
    period: "2025 — Present",
    type: "work",
    title: "Software Developer Intern",
    org: "HB Development",
    location: "Tetouan, Morocco",
    description:
      "Building full-stack features on client projects: designing REST endpoints, modelling MySQL schemas, and wiring React interfaces to the API. Moving tickets from spec to production on a weekly cadence.",
    tags: ["Java", "Spring Boot", "MySQL", "React", "REST API"],
  },
  {
    period: "2025 — Present",
    type: "education",
    title: "State Engineer · AI & Data Sciences",
    org: "ENSIASD",
    location: "Tangier, Morocco",
    description:
      "National School of Artificial Intelligence and Data Sciences. Coursework spans mathematics for AI, statistics, algorithms, ML systems, databases, and quantum computing — plus the project work that becomes the case studies on this site.",
    tags: ["Mathematics for AI", "Machine Learning", "Algorithms", "Databases", "Quantum Computing"],
  },
  {
    period: "2023 — 2025",
    type: "education",
    title: "CPGE · MPSI / MP",
    org: "CPGE Tétouan",
    location: "Tétouan, Morocco",
    description:
      "Two intensive preparatory years in mathematics and physics. Linear algebra, analysis, probability and mechanics at a pace that leaves no room for shortcuts — the foundation under everything I build now.",
    tags: ["Linear Algebra", "Probability", "Analysis", "Mechanics", "Python"],
  },
];

export const stats = [
  { value: 5, suffix: "+", label: "Projects shipped" },
  { value: 25, suffix: "+", label: "Technologies used" },
  { value: 3, suffix: "", label: "Certifications" },
  { value: 40, suffix: "k+", label: "Lines of code" },
];

export const workflow = [
  {
    step: "01",
    title: "Plan",
    body: "Pin the actual problem, the constraint that matters, and what “done” looks like — before opening an editor.",
  },
  {
    step: "02",
    title: "Prototype",
    body: "Thinnest thing that proves the idea: a notebook, a schema, a screen. Fast enough to throw away.",
  },
  {
    step: "03",
    title: "Ship",
    body: "Wire it end to end — model, API, interface — and put it somewhere other people can click it.",
  },
  {
    step: "04",
    title: "Iterate",
    body: "Measure against the metric I set in step one, cut what doesn't move it, keep what does.",
  },
];

export const certifications = [
  { issuer: "DeepLearning.AI", name: "Machine Learning Specialization" },
  { issuer: "DeepLearning.AI", name: "Generative AI with LLMs" },
  { issuer: "Cisco", name: "Networking Essentials" },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#journey", label: "Journey" },
  { href: "#impact", label: "Impact" },
  { href: "#contact", label: "Contact" },
];
