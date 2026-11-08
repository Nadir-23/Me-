/**
 * ---------------------------------------------------------------------------
 * CONTENU FRANÇAIS — miroir exact de data.ts (mêmes noms d'export, mêmes
 * formes). Si vous ajoutez un champ dans data.ts, ajoutez-le aussi ici.
 * ---------------------------------------------------------------------------
 */

export const profile = {
  name: "Boukrioui Nadir",
  firstName: "Nadir",
  lastName: "Boukrioui",
  headline:
    "Ingénieur IA en devenir. Je construis des systèmes intelligents qui sortent en production.",
  subtext:
    "Étudiant en deuxième année du cycle ingénieur en IA et Science des données à l’ENSIASD, Maroc. Je fais passer des problèmes d’un carnet vierge à un système déployé — modèles, API et l’interface entre les deux.",
  rotating: ["IA", "Full-Stack", "Data Science"],
  email: "nadirboukrioui2001@gmail.com",
  location: "Tanger-Tétouan, Maroc",
  linkedin: "https://linkedin.com/in/boukrioui-nadir",
  github: "https://github.com/Nadir-23",
  cvPath: "/cv/CV_Boukrioui_Nadir.pdf",
  openTo: "Stages · Recherche · CDI dès 2027",
};

export const about = {
  paragraphs: [
    "Étudiant en deuxième année du cycle ingénieur à l’ENSIASD, l’École Nationale d’Intelligence Artificielle et de Science des données au Maroc. Je partage mon temps entre deux choses : entraîner des modèles qui comprennent le langage — notamment le darija et les autres variétés peu dotées — et livrer les systèmes full-stack qui mettent ces modèles entre les mains de vrais utilisateurs.",
    "Avant l’ENSIASD, j’ai passé deux ans en CPGE MPSI/MP, c’est là que l’habitude des mathématiques s’est installée. Je m’en sers chaque jour : algèbre linéaire pour les embeddings, probabilités pour l’évaluation, et beaucoup de patience quand une courbe de loss refuse de bouger.",
    "Je m’intéresse à toute la boucle — données, modèle, API, interface — parce qu’un modèle qui ne quitte jamais un carnet n’aide personne. Les projets ci-dessous sont ceux que je défendrais en revue.",
  ],
  facts: {
    location: { label: "Basé à", value: "Tanger-Tétouan, Maroc" },
    education: {
      label: "Formation",
      value: "ENSIASD · Ingénieur d’État en IA et Science des données",
      detail: "2e année · CPGE MPSI/MP avant",
    },
    languages: {
      label: "Langues",
      value: "Arabe · Anglais · Français · Espagnol",
      detail: "Natif · Avancé · Intermédiaire · Élémentaire",
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
    label: "IA / ML",
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
    label: "Données",
    icon: "database",
    items: ["MySQL", "SQL", "Nettoyage de données", "EDA", "Ingénierie des features", "Statistiques"],
  },
  {
    label: "DevOps / Outils",
    icon: "wrench",
    items: ["Git / GitHub", "Docker", "Linux", "Postman", "VS Code", "Bases de CI"],
  },
];

export const timeline = [
  {
    period: "2025 — Présent",
    type: "work",
    title: "Stagiaire en développement logiciel",
    org: "HB Development",
    location: "Tétouan, Maroc",
    description:
      "Développement de fonctionnalités full-stack sur les projets clients : conception d’API REST, modélisation de schémas MySQL et branchement des interfaces React. Des tickets du cahier des charges à la production, chaque semaine.",
    tags: ["Java", "Spring Boot", "MySQL", "React", "REST API"],
  },
  {
    period: "2025 — Présent",
    type: "education",
    title: "Ingénieur d’État · IA et Science des données",
    org: "ENSIASD",
    location: "Tanger, Maroc",
    description:
      "École Nationale d’Intelligence Artificielle et de Science des données. Le programme couvre les mathématiques pour l’IA, les statistiques, les algorithmes, les systèmes de ML, les bases de données et l’informatique quantique — sans oublier les projets qui deviennent les études de cas de ce site.",
    tags: ["Mathématiques pour l’IA", "Machine Learning", "Algorithmes", "Bases de données", "Informatique quantique"],
  },
  {
    period: "2023 — 2025",
    type: "education",
    title: "CPGE · MPSI / MP",
    org: "CPGE Tétouan",
    location: "Tétouan, Maroc",
    description:
      "Deux années préparatoires intensives en mathématiques et physique. Algèbre linéaire, analyse, probabilités et mécanique à un rythme qui ne laisse place à aucun raccourci — la fondation de tout ce que je construis aujourd’hui.",
    tags: ["Algèbre linéaire", "Probabilités", "Analyse", "Mécanique", "Python"],
  },
];

export const stats = [
  { value: 5, suffix: "+", label: "Projets livrés" },
  { value: 25, suffix: "+", label: "Technologies utilisées" },
  { value: 3, suffix: "", label: "Certifications" },
  { value: 40, suffix: "k+", label: "Lignes de code" },
];

export const workflow = [
  {
    step: "01",
    title: "Planifier",
    body: "Poser le vrai problème, la contrainte qui compte, et à quoi ressemble « fini » — avant d’ouvrir l’éditeur.",
  },
  {
    step: "02",
    title: "Prototyper",
    body: "La plus petite chose qui prouve l’idée : un notebook, un schéma, un écran. Assez rapide pour être jeté.",
  },
  {
    step: "03",
    title: "Livrer",
    body: "Boucler de bout en bout — modèle, API, interface — et mettre ça quelque part où d’autres peuvent cliquer.",
  },
  {
    step: "04",
    title: "Itérer",
    body: "Mesurer par rapport au critère fixé à l’étape 1, couper ce qui ne le fait pas bouger, garder ce qui le fait.",
  },
];

export const certifications = [
  { issuer: "DeepLearning.AI", name: "Machine Learning Specialization" },
  { issuer: "DeepLearning.AI", name: "Generative AI with LLMs" },
  { issuer: "Cisco", name: "Networking Essentials" },
];

export const navLinks = [
  { href: "#about", label: "À propos" },
  { href: "#projects", label: "Projets" },
  { href: "#skills", label: "Compétences" },
  { href: "#journey", label: "Parcours" },
  { href: "#impact", label: "Impact" },
  { href: "#contact", label: "Contact" },
];
