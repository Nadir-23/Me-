"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { profile } from "@/lib/data";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const initialState: FormState = { name: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialState);
  const [sent, setSent] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setForm(initialState);
    setTimeout(() => setSent(false), 4000);
  }

  const contactCards = [
    { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: Linkedin, label: "LinkedIn", value: "in/boukrioui-nadir", href: profile.linkedin },
    { icon: Github, label: "GitHub", value: "Nadir-23", href: profile.github },
    { icon: MapPin, label: "Location", value: profile.location, href: undefined },
  ];

  return (
    <section id="contact" className="relative border-t border-border/60 bg-void py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="08 · Contact"
          title="Let's build something intelligent"
          description="Open to internships, collaborations, and interesting problems in AI, data, and software engineering."
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="space-y-3 lg:col-span-2"
          >
            {contactCards.map((card) => {
              const Icon = card.icon;
              const content = (
                <div className="gradient-border flex items-center gap-4 rounded-xl bg-panel/50 p-5 transition-colors hover:bg-panel/80">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent-violet/20 to-accent-cyan/20">
                    <Icon className="h-4.5 w-4.5 text-accent-cyan" />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-ink-faint">
                      {card.label}
                    </div>
                    <div className="text-sm text-ink-primary">{card.value}</div>
                  </div>
                </div>
              );
              return card.href ? (
                <a
                  key={card.label}
                  href={card.href}
                  target={card.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="focus-ring block"
                >
                  {content}
                </a>
              ) : (
                <div key={card.label}>{content}</div>
              );
            })}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="gradient-border space-y-5 rounded-2xl bg-panel/50 p-7 lg:col-span-3"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block font-mono text-xs uppercase tracking-wider text-ink-muted">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="focus-ring w-full rounded-lg border border-border bg-void/60 px-4 py-2.5 text-sm text-ink-primary placeholder:text-ink-faint"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block font-mono text-xs uppercase tracking-wider text-ink-muted">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="focus-ring w-full rounded-lg border border-border bg-void/60 px-4 py-2.5 text-sm text-ink-primary placeholder:text-ink-faint"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block font-mono text-xs uppercase tracking-wider text-ink-muted">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project or opportunity..."
                className="focus-ring w-full resize-none rounded-lg border border-border bg-void/60 px-4 py-2.5 text-sm text-ink-primary placeholder:text-ink-faint"
              />
            </div>
            <button
              type="submit"
              className="focus-ring inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent-violet to-accent-blue px-6 py-3 font-mono text-xs uppercase tracking-wider text-white shadow-glow transition-transform hover:scale-[1.01] sm:w-auto"
            >
              {sent ? (
                <>
                  <CheckCircle2 className="h-4 w-4" /> Opening mail client...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" /> Send Message
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
