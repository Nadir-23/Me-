"use client";

import { motion } from "framer-motion";
import { BookOpen, Brain, Compass, GitBranch, Trophy } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { interests, languages, skills } from "@/lib/data";

const interestIcons: Record<string, React.ElementType> = {
  trophy: Trophy,
  compass: Compass,
  "book-open": BookOpen,
  "git-branch": GitBranch,
  "brain-circuit": Brain,
};

export default function SkillsPanel() {
  return (
    <section className="relative border-t border-border/60 bg-void py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="06 · Skills"
          title="Capabilities & languages"
          description="What I bring technically, how I work with people, and the languages I communicate in."
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="gradient-border rounded-2xl bg-panel/50 p-7 lg:col-span-1"
          >
            <h3 className="font-mono text-xs uppercase tracking-widest text-accent-cyan">
              Technical
            </h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {skills.technical.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-border bg-void/40 px-3 py-1.5 text-xs text-ink-primary"
                >
                  {s}
                </span>
              ))}
            </div>

            <h3 className="mt-8 font-mono text-xs uppercase tracking-widest text-accent-violet">
              Soft skills
            </h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {skills.soft.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-accent-violet/25 bg-accent-violet/5 px-3 py-1.5 text-xs text-ink-primary"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="gradient-border rounded-2xl bg-panel/50 p-7 lg:col-span-1"
          >
            <h3 className="font-mono text-xs uppercase tracking-widest text-accent-cyan">
              Languages
            </h3>
            <div className="mt-6 space-y-5">
              {languages.map((lang, i) => (
                <div key={lang.name}>
                  <div className="mb-1.5 flex items-center justify-between text-sm">
                    <span className="text-ink-primary">{lang.name}</span>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-ink-faint">
                      {lang.level}
                    </span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-border/70">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9, delay: i * 0.08, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-accent-blue to-accent-violet"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="gradient-border rounded-2xl bg-panel/50 p-7 lg:col-span-1"
          >
            <h3 className="font-mono text-xs uppercase tracking-widest text-accent-cyan">
              Interests
            </h3>
            <div className="mt-6 space-y-3">
              {interests.map((interest) => {
                const Icon = interestIcons[interest.icon] ?? Brain;
                return (
                  <div
                    key={interest.name}
                    className="flex items-center gap-3 rounded-xl border border-border/70 bg-void/40 px-4 py-3"
                  >
                    <Icon className="h-4 w-4 shrink-0 text-accent-cyan" />
                    <span className="text-sm text-ink-primary">{interest.name}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
