"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="relative border-t border-border/60 bg-surface py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="05 · Experience" title="Where I'm working now" />

        <div className="space-y-5">
          {experience.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="gradient-border flex flex-col gap-6 rounded-2xl bg-panel/50 p-8 sm:flex-row sm:items-center"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent-violet/20 to-accent-cyan/20">
                <Briefcase className="h-6 w-6 text-accent-cyan" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-display text-xl font-semibold text-ink-primary">
                    {exp.role}
                  </h3>
                  <span className="rounded-full border border-accent-cyan/30 bg-accent-cyan/10 px-3 py-0.5 font-mono text-[10px] uppercase tracking-widest text-accent-cyan">
                    {exp.period}
                  </span>
                </div>
                <p className="mt-1 text-sm text-ink-muted">
                  {exp.company} · {exp.location}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.focus.map((f) => (
                    <span
                      key={f}
                      className="rounded-full border border-border bg-void/40 px-3 py-1 text-xs text-ink-muted"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
