"use client";

import { motion } from "framer-motion";
import { Award, BookOpen, Globe, MapPin } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { about } from "@/lib/data";

type Fact = { label: string; value: string; detail?: string };

const factIcons = [MapPin, BookOpen, Globe, Award];

export default function About() {
  const facts: Fact[] = [
    about.facts.location,
    about.facts.education,
    about.facts.languages,
    about.facts.certifications,
  ];

  return (
    <section id="about" className="relative border-t border-border/60 bg-surface py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeading
          eyebrow="01 · About"
          title="Two ideas, one workflow: innovation and productivity"
          description="I like work that is both new and finished — a model nobody has trained for Darija, shipped as something people can actually use."
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Prose */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="space-y-5 lg:col-span-2"
          >
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 32)} className="text-base leading-relaxed text-ink-muted sm:text-lg">
                {p}
              </p>
            ))}
          </motion.div>

          {/* Quick-facts bento */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1"
          >
            {facts.map((fact, i) => {
              const Icon = factIcons[i];
              return (
                <motion.div
                  key={fact.label}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                  className="gradient-border group rounded-2xl bg-panel/50 p-5 transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent-violet/20 to-accent-cyan/20">
                      <Icon className="h-4 w-4 text-accent-cyan" aria-hidden="true" />
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-ink-faint">
                      {fact.label}
                    </span>
                  </div>
                  <p className="mt-3 text-sm font-medium leading-snug text-ink-primary">
                    {fact.value}
                  </p>
                  {fact.detail && (
                    <p className="mt-1 font-mono text-[11px] text-ink-muted">{fact.detail}</p>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
