"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { useI18n } from "@/lib/i18n";

type FormState = { name: string; email: string; message: string };

const initialState: FormState = { name: "", email: "", message: "" };

export default function Contact() {
  const { profile, ui } = useI18n();
  const t = ui.contact;
  const [form, setForm] = useState<FormState>(initialState);
  const [sent, setSent] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
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

  const links = [
    { icon: Mail, label: t.email, value: profile.email, href: `mailto:${profile.email}` },
    { icon: Github, label: t.github, value: "Nadir-23", href: profile.github },
    { icon: Linkedin, label: t.linkedin, value: "in/boukrioui-nadir", href: profile.linkedin },
    { icon: MapPin, label: t.location, value: profile.location, href: undefined as string | undefined },
  ];

  return (
    <section id="contact" className="relative border-t border-border/60 bg-void py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeading
          eyebrow={t.eyebrow}
          title={t.title}
          description={t.description}
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          {/* Links + closing CTA */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="space-y-3 lg:col-span-2"
          >
            {links.map((link) => {
              const Icon = link.icon;
              const content = (
                <div className="gradient-border flex items-center gap-4 rounded-xl bg-panel/50 p-5 transition-colors hover:bg-panel/80">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent-violet/20 to-accent-cyan/20">
                    <Icon className="h-5 w-5 text-accent-cyan" aria-hidden="true" />
                  </span>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-ink-faint">
                      {link.label}
                    </div>
                    <div className="break-all text-sm text-ink-primary">{link.value}</div>
                  </div>
                </div>
              );
              return link.href ? (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="focus-ring block"
                >
                  {content}
                </a>
              ) : (
                <div key={link.label}>{content}</div>
              );
            })}

            <div className="gradient-border rounded-2xl bg-gradient-to-br from-accent-violet/15 to-accent-cyan/10 p-6">
              <p className="font-display text-lg font-semibold leading-snug text-ink-primary">
                {t.ctaTitle}
              </p>
              <p className="mt-2 text-sm text-ink-muted">{t.ctaBody}</p>
              <a
                href={`mailto:${profile.email}`}
                className="focus-ring mt-4 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-accent-cyan hover:underline"
              >
                <Mail className="h-3.5 w-3.5" />
                {profile.email}
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="gradient-border space-y-5 rounded-2xl bg-panel/50 p-6 sm:p-7 lg:col-span-3"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block font-mono text-xs uppercase tracking-wider text-ink-muted"
                >
                  {t.name}
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  autoComplete="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder={t.namePlaceholder}
                  className="focus-ring w-full rounded-lg border border-border bg-void/60 px-4 py-2.5 text-sm text-ink-primary placeholder:text-ink-faint"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block font-mono text-xs uppercase tracking-wider text-ink-muted"
                >
                  {t.email}
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder={t.emailPlaceholder}
                  className="focus-ring w-full rounded-lg border border-border bg-void/60 px-4 py-2.5 text-sm text-ink-primary placeholder:text-ink-faint"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-2 block font-mono text-xs uppercase tracking-wider text-ink-muted"
              >
                {t.message}
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={form.message}
                onChange={handleChange}
                placeholder={t.messagePlaceholder}
                className="focus-ring w-full resize-none rounded-lg border border-border bg-void/60 px-4 py-2.5 text-sm text-ink-primary placeholder:text-ink-faint"
              />
            </div>
            <button
              type="submit"
              className="focus-ring inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cta-from to-cta-to px-6 py-3 font-mono text-xs uppercase tracking-wider text-white shadow-glow transition-transform hover:scale-[1.01] sm:w-auto"
            >
              {sent ? (
                <>
                  <CheckCircle2 className="h-4 w-4" /> {t.ready}
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" /> {t.send}
                </>
              )}
            </button>
            <p role="status" className="font-mono text-[11px] text-ink-faint">
              {sent ? t.statusSent(profile.email) : t.statusIdle(profile.email)}
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
