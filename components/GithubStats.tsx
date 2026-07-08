"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { profile } from "@/lib/data";

export default function GithubStats() {
  return (
    <section className="relative border-t border-border/60 bg-surface py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="07 · Open Source"
          title="GitHub activity"
          description="A live snapshot of contributions, streaks, and repository stats pulled straight from GitHub."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="gradient-border overflow-hidden rounded-2xl bg-panel/50 p-6 sm:p-8"
        >
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-ink-muted">
              <Github className="h-4 w-4" />
              github.com/Nadir-23
            </div>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="focus-ring font-mono text-xs uppercase tracking-wider text-accent-cyan hover:underline"
            >
              View profile →
            </a>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
            <Image
              src="https://github-readme-stats.vercel.app/api?username=Nadir-23&show_icons=true&hide_border=true&bg_color=00000000&title_color=35e0d0&icon_color=7c5cff&text_color=9295b8"
              alt="Boukrioui Nadir's GitHub stats"
              width={495}
              height={195}
              unoptimized
              className="w-full rounded-xl lg:col-span-2"
            />
            <Image
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=Nadir-23&layout=compact&hide_border=true&bg_color=00000000&title_color=35e0d0&text_color=9295b8"
              alt="Boukrioui Nadir's most used languages"
              width={495}
              height={195}
              unoptimized
              className="w-full rounded-xl lg:col-span-3"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
