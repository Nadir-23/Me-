"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { education } from "@/lib/data";

export default function EducationTimeline() {
  return (
    <section id="education" className="relative border-t border-border/60 bg-void py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="02 · Education"
          title="Academic path"
          description="Two chapters of rigorous training — one in pure mathematics and physics, the other applying it directly to artificial intelligence."
        />

        <div className="relative ml-3 sm:ml-6">
          <div className="timeline-line absolute left-0 top-0 h-full w-px" />

          {education.map((entry, i) => (
            <motion.div
              key={entry.institution}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative mb-14 pl-10 sm:pl-14 last:mb-0"
            >
              <span className="absolute -left-[9px] top-1 flex h-[19px] w-[19px] items-center justify-center rounded-full border-2 border-accent-cyan bg-void">
                <span className="h-2 w-2 rounded-full bg-accent-cyan" />
              </span>

              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-xs uppercase tracking-widest text-accent-violet">
                  {entry.period}
                </span>
                <span className="h-px w-8 bg-border" />
                <GraduationCap className="h-4 w-4 text-ink-faint" />
              </div>

              <h3 className="mt-3 font-display text-2xl font-semibold text-ink-primary">
                {entry.institution}
              </h3>
              <p className="mt-1 text-sm text-ink-muted">{entry.institutionFull}</p>
              <p className="mt-2 font-mono text-xs uppercase tracking-wider text-accent-cyan">
                {entry.degree}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {entry.courses.map((course) => (
                  <span
                    key={course}
                    className="rounded-full border border-border bg-panel/50 px-3 py-1 text-xs text-ink-muted"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
