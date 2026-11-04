/**
 * ---------------------------------------------------------------------------
 * PROJECTS — the single source of truth for every case study on the site.
 * Edit this file to add, remove or reword projects. Nothing else needs to
 * change: the Projects section, filters and meta tags all read from here.
 *
 * category must be one of: "AI" | "Full-Stack" | "Research"
 * ---------------------------------------------------------------------------
 */

export const projectCategories = ["All", "AI", "Full-Stack", "Research"];

export const projects = [
  {
    slug: "darija-voice-ai",
    title: "DarijaVoice AI",
    category: "AI",
    year: "2026",
    role: "Final-year project · ML & product",
    tagline: "Text-to-speech that finally speaks Moroccan Darija.",
    problem:
      "Moroccan Darija has no usable open TTS voice. Existing engines are trained on MSA or European languages, so any product that needs to talk to Moroccans in their own dialect falls back to text — or to an accent nobody recognises.",
    solution:
      "Built an end-to-end TTS pipeline on a curated Darija corpus: phonemisation tuned for Arabic-script and Latin transliterations, a fine-tuned sequence-to-sequence acoustic model, and a vocoder for natural prosody. Wrapped it in a small inference API and a web demo so non-ML users can type a sentence and hear it back in under a second.",
    stack: ["Python", "PyTorch", "ESPnet", "Torchaudio", "FastAPI", "React", "Docker"],
    metric: { value: "0.9s", label: "median synthesis latency" },
    highlights: [
      "Custom Darija phoneme set covering Arabic script and chat Latin",
      "Streaming inference API with batch + single-utterance modes",
      "Perceptual eval with native speakers, not just WER deltas",
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
    role: "Speech research · fine-tuning",
    tagline: "Whisper large-v3 + LoRA and XTTS-v2 for a regional dialect pair.",
    problem:
      "Off-the-shelf speech models mis-transcribe and mis-synthesize regional Arabic varieties. Full fine-tunes of large-v3 are expensive and overfit a small corpus.",
    solution:
      "Parameter-efficient fine-tuning of Whisper large-v3 with LoRA on a transcribed Chamaliya corpus for STT, paired with XTTS-v2 voice conversion for TTS. Tracked experiments in a reproducible training harness (seeded runs, frozen eval split) and compared against zero-shot baselines before shipping the checkpoint.",
    stack: ["Python", "Hugging Face", "Whisper large-v3", "LoRA", "XTTS-v2", "MLflow"],
    metric: { value: "−38%", label: "word error rate vs zero-shot" },
    highlights: [
      "LoRA rank sweep with fixed held-out eval set",
      "XTTS-v2 speaker-preserving synthesis for the dialect pair",
      "Experiment tracking so every number on the card is reproducible",
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
    role: "Multi-agent systems",
    tagline: "A multi-agent scientific assistant for math-heavy research workflows.",
    problem:
      "Literature review, symbolic derivation and write-up are usually done in three different tools. Researchers lose context switching between them, and single-shot LLM calls hallucinate proofs without any verification loop.",
    solution:
      "Designed a multi-agent pipeline: a planner agent decomposes the question, a retrieval agent pulls references, a derivation agent works through the math in a sandboxed CAS, and a critic agent attacks each step before anything reaches the user. Agents communicate over a shared scratchpad so intermediate state is inspectable.",
    stack: ["Python", "LangGraph", "OpenAI API", "SymPy", "FastAPI", "Next.js"],
    metric: { value: "4", label: "specialised agents in the loop" },
    highlights: [
      "Critic agent rejects unverified steps before they reach the answer",
      "Sandboxed CAS calls — no eval of model-generated code on the host",
      "Shared scratchpad makes every reasoning step auditable",
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
    role: "Full-stack engineer",
    tagline: "Monitoring platform for Taroudant's architectural heritage.",
    problem:
      "Heritage officials tracked damage to Taroudant's walls and kasbahs on paper and WhatsApp. No shared score of urgency, no audit trail, and experts had no way to hand findings to the authorities who can actually intervene.",
    solution:
      "Shipped a 3-tier web platform: React front end, Flask REST API, MySQL schema with triggers that compute a vulnerability score from material, age and damage signals. Role-based access separates experts from authorities, alerts fire on score thresholds, and every status change is logged.",
    stack: ["Python", "Flask", "React", "Tailwind CSS", "MySQL", "JWT", "RBAC"],
    metric: { value: "3-tier", label: "architecture, deployed end-to-end" },
    highlights: [
      "Automatic vulnerability scoring via MySQL triggers & stored procedures",
      "Expert → authority workflow with JWT + RBAC on every route",
      "Real-time alerting when a site crosses the risk threshold",
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
    role: "Backend-focused full-stack",
    tagline: "One platform for club members, events, budgets and approvals.",
    problem:
      "Student clubs ran on scattered spreadsheets: membership lists in one file, event budgets in another, and no reliable way to know who approved what. Duplicate accounts and open admin endpoints made it worse.",
    solution:
      "Built a Spring Boot service with Spring Security, JWT authentication and role-based authorization (student / club leader / admin). Designed the MySQL schema around clubs, memberships, events and budget lines, then wired a vanilla JS front end to the REST API and deployed it.",
    stack: ["Java", "Spring Boot", "Spring Security", "MySQL", "JWT", "REST API"],
    metric: { value: "3", label: "roles enforced on every endpoint" },
    highlights: [
      "JWT auth + RBAC: student, club-leader and admin permissions",
      "Normalized schema for clubs, events, budgets and memberships",
      "Production deployment with documented REST contracts",
    ],
    live: null,
    github: "https://github.com/Nadir-23",
    featured: false,
  },
];

export default projects;
