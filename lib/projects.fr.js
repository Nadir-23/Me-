/**
 * ---------------------------------------------------------------------------
 * PROJETS (FRANÇAIS) — miroir exact de projects.js : mêmes slugs, mêmes
 * clés `category` ("AI" | "Full-Stack" | "Research"), mêmes formes.
 * Les titres et la stack restent en anglais (noms propres).
 * ---------------------------------------------------------------------------
 */

export const projectCategories = ["All", "AI", "Full-Stack", "Research"];

export const projects = [
  {
    slug: "darija-voice-ai",
    title: "DarijaVoice AI",
    category: "AI",
    year: "2026",
    role: "Projet de fin d’études · ML et produit",
    tagline: "De la synthèse vocale qui parle enfin le darija marocain.",
    problem:
      "Le darija marocain ne dispose d’aucune voix TTS exploitable. Les moteurs existants sont entraînés sur l’arabe standard ou des langues européennes : tout produit qui doit parler aux Marocains dans leur propre dialecte retombe sur le texte — ou sur un accent que personne ne reconnaît.",
    solution:
      "J’ai construit une chaîne TTS de bout en bout sur un corpus darija curé : phonémisation adaptée à l’écriture arabe et aux translittérations latines, modèle acoustique séquence-à-séquence finement ajusté, et un vocoder pour une prosodie naturelle. Le tout est enveloppé dans une petite API d’inférence et une démo web, pour qu’un non-initié tape une phrase et l’entende en moins d’une seconde.",
    stack: ["Python", "PyTorch", "ESPnet", "Torchaudio", "FastAPI", "React", "Docker"],
    metric: { value: "0.9s", label: "latence médiane de synthèse" },
    highlights: [
      "Jeu de phonemes darija couvrant l’arabe écrit et le latin de chat",
      "API d’inférence en streaming, modes unitaire et par lots",
      "Évaluation perceptive avec des locuteurs natifs, pas seulement des deltas de WER",
    ],
    live: null,
    github: "https://github.com/Nadir-23",
    featured: true,
  },
  {
    slug: "chamaliya-tts-stt",
    title: "Chamaliya TTS / STT",
    category: "AI",
    year: "2025",
    role: "Recherche vocale · fine-tuning",
    tagline: "Whisper large-v3 + LoRA et XTTS-v2 pour une paire de dialectes régionaux.",
    problem:
      "Les modèles vocaux du marché transcrivent et synthétisent mal les variétés d’arabe régionales. Un fine-tuning complet de large-v3 coûte cher et surapprend sur un petit corpus.",
    solution:
      "Fine-tuning paramétriquement efficace de Whisper large-v3 avec LoRA sur un corpus chamaliya transcrit pour la reconnaissance, associé à de la conversion vocale XTTS-v2 pour la synthèse. Expériences suivies dans un harnais de training reproductible (runs à graine fixe, split d’évaluation figé) et comparées aux bases zéro-shot avant de livrer le checkpoint.",
    stack: ["Python", "Hugging Face", "Whisper large-v3", "LoRA", "XTTS-v2", "MLflow"],
    metric: { value: "−38%", label: "taux d’erreur de mots vs zéro-shot" },
    highlights: [
      "Balayage du rang LoRA avec un jeu d’évaluation tenu à part",
      "Synthèse XTTS-v2 préservant le locuteur pour la paire de dialectes",
      "Suivi des expériences : chaque chiffre de la carte est reproductible",
    ],
    live: null,
    github: "https://github.com/Nadir-23",
    featured: false,
  },
  {
    slug: "quantum-math-research-gpt",
    title: "QuantumMathResearchGPT",
    category: "Research",
    year: "2025",
    role: "Systèmes multi-agents",
    tagline: "Un assistant scientifique multi-agents pour les workflows de recherche mathématique.",
    problem:
      "Revue de littérature, dérivation symbolique et rédaction se font habituellement dans trois outils différents. Les chercheurs perdent du contexte à en changer, et les appels LLM mono-tape hallucinent des preuves sans aucune boucle de vérification.",
    solution:
      "J’ai conçu un pipeline multi-agents : un agent planificateur décompose la question, un agent de récupération remonte les références, un agent de dérivation travaille les maths dans un CAS en bac à sable, et un agent critique attaque chaque étape avant que quoi que ce soit n’atteigne l’utilisateur. Les agents communiquent sur un bloc-notes partagé dont l’état intermédiaire reste inspectable.",
    stack: ["Python", "LangGraph", "OpenAI API", "SymPy", "FastAPI", "Next.js"],
    metric: { value: "4", label: "agents spécialisés dans la boucle" },
    highlights: [
      "L’agent critique rejette les étapes non vérifiées avant qu’elles n’atteignent la réponse",
      "Appels CAS en bac à sable — aucun code généré par le modèle évalué sur l’hôte",
      "Le bloc-notes partagé rend chaque étape de raisonnement auditable",
    ],
    live: null,
    github: "https://github.com/Nadir-23",
    featured: true,
  },
  {
    slug: "taroudant-heritage-shield",
    title: "Taroudant Heritage Shield",
    category: "Full-Stack",
    year: "2025",
    role: "Ingénieur full-stack",
    tagline: "Plateforme de suivi du patrimoine architectural de Taroudant.",
    problem:
      "Les responsables du patrimoine suivaient les dégâts des murs et kasbahs de Taroudant sur papier et WhatsApp. Aucun score d’urgence partagé, aucune piste d’audit, et aucun moyen pour les experts de transmettre leurs constats aux autorités capables d’intervenir.",
    solution:
      "J’ai livré une plateforme web en 3 tiers : front React, API REST Flask, schéma MySQL avec des triggers qui calculent un score de vulnérabilité à partir du matériau, de l’âge et des signaux de dommage. Un accès basé sur les rôles sépare experts et autorités, des alertes se déclenchent au franchissement des seuils, et chaque changement de statut est journalisé.",
    stack: ["Python", "Flask", "React", "Tailwind CSS", "MySQL", "JWT", "RBAC"],
    metric: { value: "3 tiers", label: "architecture, déployée de bout en bout" },
    highlights: [
      "Calcul automatique du score de vulnérabilité via triggers et procédures stockées MySQL",
      "Workflow expert → autorité avec JWT + RBAC sur chaque route",
      "Alerting temps réel quand un site franchit le seuil de risque",
    ],
    live: null,
    github: "https://github.com/Nadir-23",
    featured: false,
  },
  {
    slug: "university-clubs-platform",
    title: "University Clubs Management",
    category: "Full-Stack",
    year: "2024",
    role: "Full-stack, orienté backend",
    tagline: "Une plateforme pour les membres de clubs, les events, les budgets et les validations.",
    problem:
      "Les clubs étudiants vivaient sur des tableurs éparpillés : listes de membres dans un fichier, budgets d’événements dans un autre, et aucun moyen fiable de savoir qui a validé quoi. Comptes dupliqués et endpoints admin ouverts aggravaient le problème.",
    solution:
      "J’ai construit un service Spring Boot avec Spring Security, authentification JWT et autorisation basée sur les rôles (étudiant / responsable de club / admin). Schéma MySQL normalisé autour des clubs, memberships, events et lignes de budget, puis une interface vanilla JS branchée sur l’API REST — le tout déployé.",
    stack: ["Java", "Spring Boot", "Spring Security", "MySQL", "JWT", "REST API"],
    metric: { value: "3", label: "rôles appliqués sur chaque endpoint" },
    highlights: [
      "Auth JWT + RBAC : permissions étudiant, responsable de club et admin",
      "Schéma normalisé pour clubs, events, budgets et memberships",
      "Déploiement en production avec des contrats REST documentés",
    ],
    live: null,
    github: "https://github.com/Nadir-23",
    featured: false,
  },
];

export default projects;
