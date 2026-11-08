"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

/**
 * CursorGlow — a soft accent glow that trails the pointer.
 * Fine pointers only; a single static position under reduced-motion.
 * Blend mode and intensity follow the active theme.
 */
export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const light = resolvedTheme === "light";

    el.style.mixBlendMode = light ? "normal" : "screen";

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let tx = x;
    let ty = y;
    let raf = 0;
    let visible = false;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      if (!visible) {
        visible = true;
        el.style.opacity = "1";
      }
      if (reduced) {
        el.style.transform = `translate3d(${tx - 200}px, ${ty - 200}px, 0)`;
      }
    };

    const onLeave = () => {
      visible = false;
      el.style.opacity = "0";
    };

    const tick = () => {
      x += (tx - x) * 0.14;
      y += (ty - y) * 0.14;
      el.style.transform = `translate3d(${x - 200}px, ${y - 200}px, 0)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    if (!reduced) raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, [resolvedTheme]);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[100] h-[400px] w-[400px] rounded-full opacity-0 transition-opacity duration-500"
      style={{
        background:
          "radial-gradient(circle, rgb(var(--glow-a) / 0.13) 0%, rgb(var(--accent-cyan) / 0.055) 35%, transparent 65%)",
      }}
    />
  );
}
