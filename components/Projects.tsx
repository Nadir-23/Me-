"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { projectCategories, projects } from "@/lib/data";

export default function Projects() {
  const [active, setActive] = useState<(typeof projectCategories)[number]>("All");

  const filtered = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.category === active)),
    [active]
  );

  return (
    <section id="projects" className="relative border-t border-border/60 bg-void py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="04 · Projects"
          title="Selected work"
          description="From heritage-preservation platforms to club management systems — built end to end, from schema design to deployment."
        />

        <div className="mb-10 flex flex-wrap gap-2">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`focus-ring rounded-full border px-4 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors ${
                active === cat
                  ? "border-accent-violet bg-accent-violet/15 text-ink-primary"
                  : "border-border text-ink-muted hover:border-accent-cyan/50 hover:text-accent-cyan"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.article
                key={project.slug}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={`gradient-border group relative flex flex-col rounded-2xl bg-panel/50 p-7 ${
                  project.featured ? "md:col-span-2" : ""
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-accent-cyan">
                      {project.category}
                    </span>
                    <h3 className="mt-2 font-display text-xl font-semibold text-ink-primary sm:text-2xl">
                      {project.title}
                    </h3>
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${project.title} on GitHub`}
                    className="focus-ring flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-ink-muted transition-colors group-hover:border-accent-cyan/50 group-hover:text-accent-cyan"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </div>

                <p className="mt-4 flex-1 leading-relaxed text-ink-muted">
                  {project.description}
                </p>

                <ul className="mt-5 space-y-1.5">
                  {project.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-ink-muted">
                      <ArrowUpRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent-violet" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border bg-void/40 px-3 py-1 text-xs text-ink-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
