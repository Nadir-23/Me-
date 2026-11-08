"use client";

import { useEffect, useState } from "react";
import { ArrowDown, Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import NeuralField from "./NeuralField";
import { useI18n } from "@/lib/i18n";

/**
 * Hero entrance runs in CSS (.hero-in) rather than JS: the SSR HTML is
 * painted immediately, which keeps the Largest Contentful Paint honest.
 */
const rise = (step: number) => ({ animationDelay: `${(step + 1) * 0.05}s` });

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
    <>
      <span
        aria-hidden="true"
        className="font-mono text-sm uppercase tracking-[0.18em] text-accent-cyan sm:text-base"
      >
        {text}
        <span className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] animate-pulse bg-accent-cyan" />
      </span>
      <span className="sr-only">{words.join(", ")}</span>
    </>
  );
}

export default function Hero() {
  const { profile, ui } = useI18n();
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-void pb-24 pt-24 md:pb-28"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-grid-lines bg-grid opacity-40 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_20%,#000_10%,transparent_75%)]"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-radial-fade" />
      <div aria-hidden="true" className="absolute inset-0">
        <NeuralField />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-6">
        <div
          style={rise(0)}
          className="hero-in mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-panel/60 px-4 py-1.5 font-mono text-[11px] uppercase tracking-widest text-accent-cyan backdrop-blur sm:text-xs"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-cyan opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-cyan" />
          </span>
          {profile.openTo}
        </div>

        <h1
          style={rise(1)}
          className="hero-in font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink-primary sm:text-5xl md:text-7xl"
        >
          {profile.firstName}{" "}
          <span className="text-gradient-live">{profile.lastName}</span>
        </h1>

        <p
          style={rise(2)}
          className="hero-in mt-5 max-w-2xl font-display text-lg font-medium leading-snug text-ink-primary sm:text-xl md:text-2xl"
        >
          {profile.headline}
        </p>

        <p style={rise(3)} className="hero-in mt-4">
          <RotatingWords words={profile.rotating} />
        </p>

        <p
          style={rise(4)}
          className="hero-in mt-6 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg"
        >
          {profile.subtext}
        </p>

        <div
          style={rise(5)}
          className="hero-in mt-9 flex flex-wrap items-center gap-3 sm:gap-4"
        >
          <a
            href="#projects"
            className="focus-ring group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cta-from to-cta-to px-6 py-3 font-mono text-xs uppercase tracking-wider text-white shadow-glow transition-transform hover:scale-[1.03]"
          >
            {ui.hero.viewProjects}
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          </a>
          <a
            href={profile.cvPath}
            download
            className="focus-ring inline-flex items-center gap-2 rounded-full border border-border bg-panel/60 px-6 py-3 font-mono text-xs uppercase tracking-wider text-ink-primary backdrop-blur transition-colors hover:border-accent-cyan/60 hover:text-accent-cyan"
          >
            <Download className="h-4 w-4" />
            {ui.hero.downloadCv}
          </a>
        </div>

        <div
          style={rise(6)}
          className="hero-in mt-12 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-border/70 pt-6 font-mono text-[11px] text-ink-muted sm:text-xs"
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
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 animate-float text-ink-faint md:block"
      >
        <ArrowDown className="h-5 w-5" />
      </div>
    </section>
  );
}
