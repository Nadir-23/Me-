import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border/60 bg-surface py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 sm:flex-row sm:justify-between sm:px-6">
        <div className="text-center sm:text-left">
          <span className="font-display text-lg font-semibold">
            <span className="text-gradient">N.</span> Boukrioui
          </span>
          <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-ink-faint">
            Innovation · Productivity
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border border-border text-ink-muted transition-colors hover:border-accent-cyan/50 hover:text-accent-cyan"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border border-border text-ink-muted transition-colors hover:border-accent-cyan/50 hover:text-accent-cyan"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border border-border text-ink-muted transition-colors hover:border-accent-cyan/50 hover:text-accent-cyan"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>

        <p className="font-mono text-[11px] text-ink-faint">
          © {new Date().getFullYear()} Nadir Boukrioui. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
