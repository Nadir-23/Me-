"use client";

import { motion } from "framer-motion";
import {
  Award,
  Brain,
  Database,
  Layout,
  Server,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { useI18n } from "@/lib/i18n";

const iconMap: Record<string, LucideIcon> = {
  brain: Brain,
  server: Server,
  layout: Layout,
  database: Database,
  wrench: Wrench,
};

export default function Skills() {
  const { skillGroups, certifications, ui } = useI18n();
  return (
    <section id="skills" className="relative border-t border-border/60 bg-surface py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeading
          eyebrow={ui.skills.eyebrow}
          title={ui.skills.title}
          description={ui.skills.description}
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, gi) => {
            const Icon = iconMap[group.icon] ?? Brain;
            return (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: gi * 0.06 }}
                className="gradient-border flex flex-col rounded-2xl bg-panel/50 p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent-violet/25 to-accent-cyan/20">
                    <Icon className="h-5 w-5 text-accent-cyan" aria-hidden="true" />
                  </span>
                  <h3 className="font-display text-base font-semibold text-ink-primary sm:text-lg">
                    {group.label}
                  </h3>
                </div>

                <ul className="mt-5 grid grid-cols-2 gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-lg border border-border/70 bg-void/40 px-3 py-2 text-center font-mono text-[11px] leading-tight text-ink-muted transition-colors hover:border-accent-cyan/40 hover:text-ink-primary"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}

          {/* Certifications card fills the grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="gradient-border flex flex-col rounded-2xl bg-panel/50 p-6"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent-amber/25 to-accent-violet/20">
                <Award className="h-5 w-5 text-accent-amber" aria-hidden="true" />
              </span>
              <h3 className="font-display text-base font-semibold text-ink-primary sm:text-lg">
                {ui.skills.certifications}
              </h3>
            </div>
            <ul className="mt-5 space-y-3">
              {certifications.map((c) => (
                <li
                  key={c.name}
                  className="rounded-lg border border-border/70 bg-void/40 px-3.5 py-3"
                >
                  <span className="font-mono text-[10px] uppercase tracking-widest text-accent-amber">
                    {c.issuer}
                  </span>
                  <p className="mt-0.5 text-sm text-ink-primary">{c.name}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
