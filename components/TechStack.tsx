"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { techStack } from "@/lib/data";

export default function TechStack() {
  return (
    <section id="stack" className="relative border-t border-border/60 bg-surface py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="03 · Stack"
          title="Tools I reach for"
          description="A working toolkit spanning languages, frameworks, data, security, and infrastructure — built through coursework and shipped projects."
        />

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {techStack.map((category, catIdx) => (
            <motion.div
              key={category.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: catIdx * 0.06 }}
              className="gradient-border rounded-2xl bg-panel/50 p-6"
            >
              <h3 className="font-mono text-xs uppercase tracking-widest text-accent-cyan">
                {category.label}
              </h3>
              <div className="mt-5 space-y-4">
                {category.items.map((item, i) => (
                  <div key={item.name}>
                    <div className="mb-1.5 flex items-center justify-between">
                      <span className="text-sm text-ink-primary">{item.name}</span>
                      <span className="font-mono text-[10px] text-ink-faint">{item.level}%</span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-border/70">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: i * 0.06, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-accent-violet to-accent-cyan"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
