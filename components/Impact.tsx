"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { Rocket, Lightbulb, Ship, Repeat } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { useI18n } from "@/lib/i18n";

const workflowIcons = [Lightbulb, Rocket, Ship, Repeat];

function Counter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);
  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      setDisplay(value);
      return;
    }
    const controls = animate(0, value, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value, reduced]);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center gap-1.5 px-4 py-6 text-center"
    >
      <span className="font-display text-4xl font-semibold text-gradient sm:text-5xl">
        {display}
        {suffix}
      </span>
      <span className="font-mono text-[11px] uppercase tracking-widest text-ink-muted">
        {label}
      </span>
    </div>
  );
}

export default function Impact() {
  const { stats, workflow, ui } = useI18n();
  return (
    <section id="impact" className="relative border-t border-border/60 bg-surface py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeading
          eyebrow={ui.impact.eyebrow}
          title={ui.impact.title}
          description={ui.impact.description}
        />

        {/* Animated stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
          className="gradient-border grid grid-cols-2 divide-border/60 rounded-2xl bg-panel/50 sm:grid-cols-4 sm:divide-x"
        >
          {stats.map((s) => (
            <Counter key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
          ))}
        </motion.div>

        {/* How I work */}
        <div className="mt-14">
          <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-accent-cyan">
            {ui.impact.howIWork}
          </h3>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {workflow.map((step, i) => {
              const Icon = workflowIcons[i];
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="gradient-border group relative rounded-2xl bg-panel/50 p-6 transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs uppercase tracking-widest text-ink-faint">
                      {step.step}
                    </span>
                    <Icon
                      className="h-4 w-4 text-accent-violet transition-colors group-hover:text-accent-cyan"
                      aria-hidden="true"
                    />
                  </div>
                  <h4 className="mt-4 font-display text-lg font-semibold text-ink-primary">
                    {step.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{step.body}</p>
                  {i < workflow.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="absolute -right-2.5 top-1/2 hidden h-px w-4 bg-border lg:block"
                    />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
