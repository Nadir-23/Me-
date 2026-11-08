/**
 * ---------------------------------------------------------------------------
 * UI STRINGS — component-level copy (headings, buttons, labels, a11y text).
 * Content (profile, projects, timeline…) lives in data.ts / projects.js and
 * their French mirrors. To add a language: add a key here + mirror files.
 *
 * Functions are used where a sentence needs a dynamic value (counts, email…).
 * ---------------------------------------------------------------------------
 */

export type Lang = "en" | "fr";

export const ui = {
  en: {
    nav: {
      ariaPrimary: "Primary",
      toggleMenu: "Toggle menu",
      talk: "Let’s talk",
      toLight: "Switch to light mode",
      toDark: "Switch to dark mode",
      langToggle: "Switch to French",
    },
    skip: "Skip to content",
    hero: {
      viewProjects: "View Projects",
      downloadCv: "Download CV",
    },
    about: {
      eyebrow: "01 · About",
      title: "Two ideas, one workflow: innovation and productivity",
      description:
        "I like work that is both new and finished — a model nobody has trained for Darija, shipped as something people can actually use.",
    },
    projects: {
      eyebrow: "02 · Projects",
      title: "Case studies, not screenshots",
      description:
        "Each card states the problem, what I built, and the number that proves it works. Filter by what you care about.",
      filterLabel: "Filter projects by category",
      allCategories: "all categories",
      status: (n: number, cat: string) =>
        n === 1
          ? `1 project shown in ${cat}`
          : `${n} projects shown in ${cat}`,
      problem: "Problem",
      solution: "Solution",
      openGithub: (title: string) => `Open ${title} on GitHub`,
      liveDemo: "Live demo",
      demoOnRequest: "Demo on request",
      source: "Source",
      empty: "No projects in this category yet.",
      categoryLabels: {
        All: "All",
        AI: "AI",
        "Full-Stack": "Full-Stack",
        Research: "Research",
      } as Record<string, string>,
    },
    skills: {
      eyebrow: "03 · Skills",
      title: "The stack I actually reach for",
      description:
        "No progress bars — just the tools I’ve used in shipped projects, grouped the way I think about them.",
      certifications: "Certifications",
    },
    journey: {
      eyebrow: "04 · Journey",
      title: "Experience & education",
      description:
        "Where I’ve been building — internships and the academic path that feeds them.",
      experience: "Experience",
      education: "Education",
    },
    impact: {
      eyebrow: "05 · Impact",
      title: "Productivity, measured",
      description:
        "Innovation only counts when it ships. Here’s the tally — and the loop I run to keep it moving.",
      howIWork: "How I work",
    },
    contact: {
      eyebrow: "06 · Contact",
      title: "Let’s ship something intelligent",
      description:
        "Open to internships, research collaborations, and roles where AI has to leave the notebook. Tell me what you’re building.",
      email: "Email",
      github: "GitHub",
      linkedin: "LinkedIn",
      location: "Location",
      ctaTitle: "Got a hard problem and a deadline?",
      ctaBody: "That’s the kind of work I want. Drop a line — I reply within a day.",
      name: "Name",
      namePlaceholder: "Your name",
      emailPlaceholder: "you@example.com",
      message: "Message",
      messagePlaceholder: "What are you building, and where do you need help?",
      send: "Send Message",
      ready: "Message ready",
      statusIdle: (email: string) => `Opens your default mail app · ${email}`,
      statusSent: (email: string) =>
        `Opening your mail app — if nothing happens, write to ${email}.`,
    },
    footer: {
      tagline: "Innovation · Productivity",
      rights: (year: number) => `© ${year} Nadir Boukrioui. All rights reserved.`,
    },
    a11y: {
      scrollToTop: "Scroll to top",
    },
  },

  fr: {
    nav: {
      ariaPrimary: "Navigation principale",
      toggleMenu: "Basculer le menu",
      talk: "Discutons",
      toLight: "Passer en mode clair",
      toDark: "Passer en mode sombre",
      langToggle: "Passer en anglais",
    },
    skip: "Aller au contenu",
    hero: {
      viewProjects: "Voir les projets",
      downloadCv: "Télécharger le CV",
    },
    about: {
      eyebrow: "01 · À propos",
      title: "Deux idées, un seul flux : innovation et productivité",
      description:
        "J’aime un travail à la fois neuf et terminé — un modèle que personne n’a entraîné pour le darija, livré comme quelque chose que les gens peuvent vraiment utiliser.",
    },
    projects: {
      eyebrow: "02 · Projets",
      title: "Des études de cas, pas des captures d’écran",
      description:
        "Chaque carte indique le problème, ce que j’ai construit, et le chiffre qui prouve que ça marche. Filtrez selon ce qui vous intéresse.",
      filterLabel: "Filtrer les projets par catégorie",
      allCategories: "toutes les catégories",
      status: (n: number, cat: string) =>
        n === 1
          ? `1 projet affiché dans ${cat}`
          : `${n} projets affichés dans ${cat}`,
      problem: "Problème",
      solution: "Solution",
      openGithub: (title: string) => `Ouvrir ${title} sur GitHub`,
      liveDemo: "Démo en ligne",
      demoOnRequest: "Démo sur demande",
      source: "Code",
      empty: "Aucun projet dans cette catégorie pour l’instant.",
      categoryLabels: {
        All: "Tous",
        AI: "IA",
        "Full-Stack": "Full-Stack",
        Research: "Recherche",
      } as Record<string, string>,
    },
    skills: {
      eyebrow: "03 · Compétences",
      title: "La stack que j’utilise vraiment",
      description:
        "Pas de barres de progression — seulement les outils que j’ai utilisés dans des projets livrés, regroupés comme je les pense.",
      certifications: "Certifications",
    },
    journey: {
      eyebrow: "04 · Parcours",
      title: "Expérience et formation",
      description:
        "Là où j’ai construit — les stages et le parcours académique qui les nourrit.",
      experience: "Expérience",
      education: "Formation",
    },
    impact: {
      eyebrow: "05 · Impact",
      title: "La productivité, mesurée",
      description:
        "L’innovation ne compte que lorsqu’elle sort. Voici le décompte — et la boucle que je parcours pour faire avancer les choses.",
      howIWork: "Ma façon de travailler",
    },
    contact: {
      eyebrow: "06 · Contact",
      title: "Livrons quelque chose d’intelligent",
      description:
        "Ouvert aux stages, aux collaborations de recherche et aux postes où l’IA doit quitter le carnet. Dites-moi ce que vous construisez.",
      email: "E-mail",
      github: "GitHub",
      linkedin: "LinkedIn",
      location: "Localisation",
      ctaTitle: "Un problème difficile et une deadline ?",
      ctaBody:
        "Ce genre de travail, c’est ce que je veux. Écrivez-moi — je réponds dans la journée.",
      name: "Nom",
      namePlaceholder: "Votre nom",
      emailPlaceholder: "vous@exemple.com",
      message: "Message",
      messagePlaceholder: "Que construisez-vous, et où avez-vous besoin d’aide ?",
      send: "Envoyer le message",
      ready: "Message prêt",
      statusIdle: (email: string) => `Ouvre votre logiciel de messagerie · ${email}`,
      statusSent: (email: string) =>
        `Ouverture de votre messagerie — si rien ne se passe, écrivez à ${email}.`,
    },
    footer: {
      tagline: "Innovation · Productivité",
      rights: (year: number) => `© ${year} Nadir Boukrioui. Tous droits réservés.`,
    },
    a11y: {
      scrollToTop: "Remonter en haut de page",
    },
  },
};

export type UI = typeof ui.en;
