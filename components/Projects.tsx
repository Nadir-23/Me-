"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Github, PlayCircle } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { useI18n } from "@/lib/i18n";

type Category = string;

/** Abstract, lightweight hover preview — unique gradient per category. */
function ProjectPreview({ category, title }: { category: string; title: string }) {
  const hue = category === "AI" ? "168" : category === "Research" ? "258" : "212";
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-within:opacity-100"
    >
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 80% 0%, hsla(${hue},80%,60%,0.18), transparent 60%),
                       radial-gradient(ellipse 60% 50% at 10% 100%, hsla(${hue},70%,55%,0.12), transparent 55%)`,
        }}
      />
      <div
        className="absolute -right-6 -top-8 font-display text-[7rem] font-bold leading-none opacity-[0.045] sm:text-[9rem]"
        style={{ color: `hsl(${hue}, 80%, 70%)` }}
      >
        {title.charAt(0)}
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-cyan/50 to-transparent" />
    </div>
  );
}

export default function Projects() {
  const { projects, projectCategories, ui } = useI18n();
  const [active, setActive] = useState<Category>("All");

  const filtered = useMemo(
    () =>
      active === "All"
        ? projects
        : projects.filter((p) => p.category === active),
    [projects, active]
  );

  const categoryLabel = (cat: string) => ui.projects.categoryLabels[cat] ?? cat;

  return (
    <section id="projects" className="relative border-t border-border/60 bg-void py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeading
          eyebrow={ui.projects.eyebrow}
          title={ui.projects.title}
          description={ui.projects.description}
        />

        {/* Filters */}
        <div
          role="group"
          aria-label={ui.projects.filterLabel}
          className="mb-10 flex flex-wrap gap-2"
        >
          {projectCategories.map((cat: Category) => (
            <button
              key={cat}
              type="button"
              aria-pressed={active === cat}
              onClick={() => setActive(cat)}
              className={`focus-ring rounded-full border px-4 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors ${
                active === cat
                  ? "border-accent-cyan bg-accent-cyan/10 text-accent-cyan"
                  : "border-border text-ink-muted hover:border-accent-violet/50 hover:text-ink-primary"
              }`}
            >
              {categoryLabel(cat)}
            </button>
          ))}
        </div>

        <p role="status" className="sr-only">
          {ui.projects.status(
            filtered.length,
            active === "All" ? ui.projects.allCategories : categoryLabel(active)
          )}
        </p>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((project: (typeof projects)[number], i: number) => (
              <motion.article
                key={project.slug}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={`gradient-border group relative flex flex-col overflow-hidden rounded-2xl bg-panel/50 p-6 transition-transform duration-300 hover:-translate-y-1.5 sm:p-7 ${
                  project.featured ? "lg:col-span-2" : ""
                }`}
              >
                <ProjectPreview category={project.category} title={project.title} />

                <div className="relative z-10 flex flex-1 flex-col">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-full border border-accent-cyan/30 bg-accent-cyan/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest text-accent-cyan">
                          {categoryLabel(project.category)}
                        </span>
                        <span className="font-mono text-[10px] uppercase tracking-widest text-ink-faint">
                          {project.year} · {project.role}
                        </span>
                      </div>
                      <h3 className="mt-3 font-display text-xl font-semibold text-ink-primary sm:text-2xl">
                        {project.title}
                      </h3>
                      <p className="mt-1 text-sm text-ink-muted">{project.tagline}</p>
                    </div>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={ui.projects.openGithub(project.title)}
                      className="focus-ring flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-ink-muted transition-colors group-hover:border-accent-cyan/50 group-hover:text-accent-cyan"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  </div>

                  {/* Problem / Solution */}
                  <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="rounded-xl border border-border/70 bg-void/40 p-4">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-ink-faint">
                        {ui.projects.problem}
                      </span>
                      <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                        {project.problem}
                      </p>
                    </div>
                    <div className="rounded-xl border border-border/70 bg-void/40 p-4">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-accent-violet">
                        {ui.projects.solution}
                      </span>
                      <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="mt-4 space-y-1.5">
                    {project.highlights.map((h: string) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-ink-muted">
                        <ArrowUpRight
                          className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent-violet"
                          aria-hidden="true"
                        />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Metric */}
                  <div className="mt-5 flex items-baseline gap-3 rounded-xl border border-accent-violet/25 bg-accent-violet/5 px-4 py-3">
                    <span className="font-display text-2xl font-semibold text-gradient sm:text-3xl">
                      {project.metric.value}
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-ink-muted">
                      {project.metric.label}
                    </span>
                  </div>

                  {/* Stack */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((tech: string) => (
                      <span
                        key={tech}
                        className="rounded-full border border-border bg-void/40 px-3 py-1 font-mono text-[11px] text-ink-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="mt-5 flex flex-wrap items-center gap-4 border-t border-border/60 pt-4">
                    {project.live ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="focus-ring inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-accent-cyan transition-colors hover:underline"
                      >
                        <PlayCircle className="h-3.5 w-3.5" />
                        {ui.projects.liveDemo}
                      </a>
                    ) : (
                      <span className="font-mono text-xs uppercase tracking-wider text-ink-faint">
                        {ui.projects.demoOnRequest}
                      </span>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="focus-ring inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-ink-muted transition-colors hover:text-ink-primary"
                    >
                      <Github className="h-3.5 w-3.5" />
                      {ui.projects.source}
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <p className="rounded-2xl border border-border bg-panel/40 p-8 text-center font-mono text-sm text-ink-muted">
            {ui.projects.empty}
          </p>
        )}
      </div>
    </section>
  );
}
