"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { useI18n } from "@/lib/i18n";

export default function Journey() {
  const { timeline, ui } = useI18n();
  return (
    <section id="journey" className="relative border-t border-border/60 bg-void py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeading
          eyebrow={ui.journey.eyebrow}
          title={ui.journey.title}
          description={ui.journey.description}
        />

        <div className="relative ml-1 sm:ml-4">
          <div aria-hidden="true" className="timeline-line absolute left-0 top-0 h-full w-px" />

          {timeline.map((entry, i) => {
            const Icon = entry.type === "work" ? Briefcase : GraduationCap;
            const isWork = entry.type === "work";
            return (
              <motion.article
                key={`${entry.org}-${entry.period}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="relative mb-12 pl-9 last:mb-0 sm:pl-14"
              >
                <span
                  aria-hidden="true"
                  className={`absolute -left-[9px] top-1 flex h-[19px] w-[19px] items-center justify-center rounded-full border-2 bg-void ${
                    isWork ? "border-accent-violet" : "border-accent-cyan"
                  }`}
                >
                  <span
                    className={`h-2 w-2 rounded-full ${
                      isWork ? "bg-accent-violet" : "bg-accent-cyan"
                    }`}
                  />
                </span>

                <div className="gradient-border rounded-2xl bg-panel/50 p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-7">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-mono text-xs uppercase tracking-widest text-accent-violet">
                      {entry.period}
                    </span>
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest ${
                        isWork
                          ? "border-accent-violet/40 bg-accent-violet/10 text-accent-violet"
                          : "border-accent-cyan/40 bg-accent-cyan/10 text-accent-cyan"
                      }`}
                    >
                      <Icon className="h-3 w-3" aria-hidden="true" />
                      {isWork ? ui.journey.experience : ui.journey.education}
                    </span>
                  </div>

                  <h3 className="mt-3 font-display text-lg font-semibold text-ink-primary sm:text-xl">
                    {entry.title}
                  </h3>
                  <p className="mt-1 text-sm text-ink-muted">
                    <span className="text-ink-primary">{entry.org}</span> · {entry.location}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                    {entry.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {entry.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border bg-void/40 px-3 py-1 font-mono text-[11px] text-ink-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
