"use client";

import { motion } from "framer-motion";
import { Brain, Cpu, Database, Shield, Code2, GitBranch, LineChart } from "lucide-react";
import SectionHeading from "./SectionHeading";
import StatCounter from "./StatCounter";
import { aboutInterests, stats } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  "Artificial Intelligence": Brain,
  "Machine Learning": LineChart,
  "Data Science": Database,
  "Full-Stack Development": Code2,
  Cybersecurity: Shield,
  "Software Engineering": Cpu,
  "Open Source": GitBranch,
};

export default function About() {
  return (
    <section id="about" className="relative border-t border-border/60 bg-surface py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="01 · About"
          title="Engineering intelligence, one system at a time"
        />

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <p className="text-lg leading-relaxed text-ink-muted">
              I am currently pursuing a{" "}
              <span className="text-ink-primary">
                State Engineering Degree in AI &amp; Data Sciences
              </span>{" "}
              at <span className="text-accent-cyan">ENSIASD</span> — the National School of
              Artificial Intelligence and Data Sciences.
            </p>
            <p className="mt-5 leading-relaxed text-ink-muted">
              I enjoy solving real-world problems through code and continuously learning new
              technologies — from training models to shipping the interfaces and infrastructure
              that put them in front of real users.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {aboutInterests.map((interest, i) => {
                const Icon = iconMap[interest] ?? Brain;
                return (
                  <motion.div
                    key={interest}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="gradient-border flex items-center gap-2.5 rounded-xl bg-panel/50 px-3.5 py-3"
                  >
                    <Icon className="h-4 w-4 shrink-0 text-accent-violet" />
                    <span className="text-sm text-ink-primary">{interest}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="gradient-border relative h-full rounded-2xl bg-panel/50 p-8">
              <div className="font-mono text-xs uppercase tracking-widest text-accent-cyan">
                Snapshot
              </div>
              <div className="mt-6 grid grid-cols-1 divide-y divide-border/70">
                {stats.map((s) => (
                  <StatCounter key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
