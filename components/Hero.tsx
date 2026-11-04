"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import NeuralField from "./NeuralField";
import { profile } from "@/lib/data";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

/** Rotating / typing line: AI • Full-Stack • Data Science */
function RotatingWords({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setText(words.join("  •  "));
      return;
    }

    const full = words[index];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text === full) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
    } else {
      timeout = setTimeout(
        () => {
          setText(
            deleting ? full.slice(0, text.length - 1) : full.slice(0, text.length + 1)
          );
        },
        deleting ? 45 : 95
      );
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, index, words]);

  return (
    <span className="font-mono text-sm uppercase tracking-[0.18em] text-accent-cyan sm:text-base">
      {text}
      <span
        aria-hidden="true"
        className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] animate-pulse bg-accent-cyan"
      />
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-void pt-24"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-grid-lines bg-grid opacity-40 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_20%,#000_10%,transparent_75%)]"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-radial-fade" />
      <div aria-hidden="true" className="absolute inset-0">
        <NeuralField />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-6"
      >
        <motion.div
          variants={item}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-panel/60 px-4 py-1.5 font-mono text-[11px] uppercase tracking-widest text-accent-cyan backdrop-blur sm:text-xs"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-cyan opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-cyan" />
          </span>
          {profile.openTo}
        </motion.div>

        <motion.h1
          variants={item}
          className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink-primary sm:text-5xl md:text-7xl"
        >
          {profile.firstName}{" "}
          <span className="text-gradient">{profile.lastName}</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-5 max-w-2xl font-display text-lg font-medium leading-snug text-ink-primary sm:text-xl md:text-2xl"
        >
          {profile.headline}
        </motion.p>

        <motion.p variants={item} className="mt-4">
          <RotatingWords words={profile.rotating} />
        </motion.p>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg"
        >
          {profile.subtext}
        </motion.p>

        <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3 sm:gap-4">
          <a
            href="#projects"
            className="focus-ring group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-violet to-accent-blue px-6 py-3 font-mono text-xs uppercase tracking-wider text-white shadow-glow transition-transform hover:scale-[1.03]"
          >
            View Projects
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          </a>
          <a
            href={profile.cvPath}
            download
            className="focus-ring inline-flex items-center gap-2 rounded-full border border-border bg-panel/60 px-6 py-3 font-mono text-xs uppercase tracking-wider text-ink-primary backdrop-blur transition-colors hover:border-accent-cyan/60 hover:text-accent-cyan"
          >
            <Download className="h-4 w-4" />
            Download CV
          </a>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-border/70 pt-6 font-mono text-[11px] text-ink-muted sm:text-xs"
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
            <span className="truncate">{profile.email}</span>
          </a>
        </motion.div>
      </motion.div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-float text-ink-faint"
      >
        <ArrowDown className="h-5 w-5" />
      </div>
    </section>
  );
}
