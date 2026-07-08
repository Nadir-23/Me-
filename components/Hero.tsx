"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import NeuralField from "./NeuralField";
import { profile } from "@/lib/data";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-void pt-24"
    >
      <div className="absolute inset-0 bg-grid-lines bg-grid opacity-40 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_20%,#000_10%,transparent_75%)]" />
      <div className="absolute inset-0 bg-radial-fade" />
      <div className="absolute inset-0">
        <NeuralField />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto max-w-6xl px-6"
      >
        <motion.div
          variants={item}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-panel/60 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-accent-cyan backdrop-blur"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-cyan opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-cyan" />
          </span>
          Open to work
        </motion.div>

        <motion.h1
          variants={item}
          className="font-display text-5xl font-semibold leading-[1.05] tracking-tight text-ink-primary sm:text-6xl md:text-7xl"
        >
          {profile.name.split(" ")[0]}{" "}
          <span className="text-gradient">{profile.name.split(" ")[1]}</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-5 max-w-xl font-mono text-sm uppercase tracking-[0.2em] text-ink-muted sm:text-base"
        >
          {profile.title} <span className="text-accent-violet">/</span> Full-Stack Developer
        </motion.p>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg"
        >
          {profile.description}
        </motion.p>

        <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href={profile.cvPath}
            download
            className="focus-ring group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-violet to-accent-blue px-6 py-3 font-mono text-xs uppercase tracking-wider text-white shadow-glow transition-transform hover:scale-[1.03]"
          >
            <Download className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
            Download CV
          </a>
          <a
            href="#contact"
            className="focus-ring inline-flex items-center gap-2 rounded-full border border-border bg-panel/60 px-6 py-3 font-mono text-xs uppercase tracking-wider text-ink-primary backdrop-blur transition-colors hover:border-accent-cyan/60 hover:text-accent-cyan"
          >
            <Mail className="h-4 w-4" />
            Contact Me
          </a>
          <a
            href="#projects"
            className="focus-ring inline-flex items-center gap-2 px-2 py-3 font-mono text-xs uppercase tracking-wider text-ink-muted transition-colors hover:text-ink-primary"
          >
            View Projects
            <ArrowDown className="h-4 w-4" />
          </a>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-border/70 pt-6 font-mono text-xs text-ink-muted"
        >
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5 text-accent-violet" />
            {profile.location}
          </span>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="focus-ring inline-flex items-center gap-2 transition-colors hover:text-accent-cyan"
          >
            <Github className="h-3.5 w-3.5" />
            github.com/Nadir-23
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="focus-ring inline-flex items-center gap-2 transition-colors hover:text-accent-cyan"
          >
            <Linkedin className="h-3.5 w-3.5" />
            in/boukrioui-nadir
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="focus-ring inline-flex items-center gap-2 transition-colors hover:text-accent-cyan"
          >
            <Mail className="h-3.5 w-3.5" />
            {profile.email}
          </a>
        </motion.div>
      </motion.div>

      <div className="pointer-events-none absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-float text-ink-faint">
        <ArrowDown className="h-5 w-5" />
      </div>
    </section>
  );
}
