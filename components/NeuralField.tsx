"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
};

/**
 * NeuralField — the hero's signature background.
 * A field of connected nodes that behaves like a lightweight neural network.
 * - node / edge colours come from CSS tokens, so it re-tints in light mode
 * - the animation loop pauses off-screen and when the tab is hidden
 * - reduced-motion gets a single static frame
 */
export default function NeuralField({ density = 0.00009 }: { density?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -9999, y: -9999 });
  const { resolvedTheme } = useTheme();
  const mode = resolvedTheme ?? "dark";

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rootStyle = getComputedStyle(document.documentElement);
    const token = (name: string, fallback: string) =>
      rootStyle.getPropertyValue(name).trim() || fallback;
    // tokens are space-separated rgb triplets; canvas needs comma syntax
    const rgba = (triplet: string, alpha: number | string) =>
      `rgba(${triplet.trim().replace(/\s+/g, ",")}, ${alpha})`;
    const nodeRgb = token("--node-rgb", "238 240 251");
    const nodeAlpha = token("--node-alpha", "0.75");
    const edgeA = token("--edge-a", "124 92 255");
    const edgeB = token("--edge-b", "53 224 208");

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let width = 0;
    let height = 0;
    let nodes: Node[] = [];
    let raf = 0;
    let inView = true;
    let edgeGradient: CanvasGradient | null = null;

    function resize() {
      const parent = canvas!.parentElement;
      width = parent ? parent.clientWidth : window.innerWidth;
      height = parent ? parent.clientHeight : window.innerHeight;
      canvas!.width = Math.max(1, Math.floor(width * dpr));
      canvas!.height = Math.max(1, Math.floor(height * dpr));
      canvas!.style.width = width + "px";
      canvas!.style.height = height + "px";
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(90, Math.max(28, Math.floor(width * height * density)));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.6 + 0.6,
      }));

      // one shared gradient for every edge — far cheaper than one per line
      edgeGradient = ctx!.createLinearGradient(0, 0, width, height);
      edgeGradient.addColorStop(0, rgba(edgeA, 1));
      edgeGradient.addColorStop(1, rgba(edgeB, 1));
    }

    function step() {
      ctx!.clearRect(0, 0, width, height);

      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;

        const dx = n.x - mouse.current.x;
        const dy = n.y - mouse.current.y;
        const distSq = dx * dx + dy * dy;
        if (distSq < 14400) {
          const dist = Math.sqrt(distSq) || 1;
          const force = (120 - dist) / 120;
          n.x += (dx / dist) * force * 0.6;
          n.y += (dy / dist) * force * 0.6;
        }
      }

      const linkDist = 140;
      const linkDistSq = linkDist * linkDist;
      ctx!.strokeStyle = edgeGradient ?? rgba(edgeA, 1);
      ctx!.lineWidth = 0.6;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distSq = dx * dx + dy * dy;
          if (distSq >= linkDistSq) continue;
          ctx!.globalAlpha = (1 - Math.sqrt(distSq) / linkDist) * 0.4;
          ctx!.beginPath();
          ctx!.moveTo(a.x, a.y);
          ctx!.lineTo(b.x, b.y);
          ctx!.stroke();
        }
      }
      ctx!.globalAlpha = 1;

      ctx!.fillStyle = rgba(nodeRgb, nodeAlpha);
      for (const n of nodes) {
        ctx!.beginPath();
        ctx!.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx!.fill();
      }
    }

    function loop() {
      raf = 0;
      if (!inView || document.hidden) return;
      step();
      raf = requestAnimationFrame(loop);
    }

    function kick() {
      if (prefersReduced) {
        step();
        return;
      }
      if (!raf && inView && !document.hidden) raf = requestAnimationFrame(loop);
    }

    function handleMove(e: MouseEvent) {
      const rect = canvas!.getBoundingClientRect();
      mouse.current.x = e.clientX - rect.left;
      mouse.current.y = e.clientY - rect.top;
    }
    function handleLeave() {
      mouse.current.x = -9999;
      mouse.current.y = -9999;
    }

    const io = new IntersectionObserver(
      (entries) => {
        inView = entries[0]?.isIntersecting ?? true;
        if (inView) kick();
        else if (raf) {
          cancelAnimationFrame(raf);
          raf = 0;
        }
      },
      { threshold: 0 }
    );

    const onVisibility = () => kick();

    resize();
    step();
    kick();
    io.observe(canvas);
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVisibility);
    if (!prefersReduced) {
      canvas.addEventListener("mousemove", handleMove);
      canvas.addEventListener("mouseleave", handleLeave);
    }

    return () => {
      if (raf) cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
      canvas.removeEventListener("mousemove", handleMove);
      canvas.removeEventListener("mouseleave", handleLeave);
    };
  }, [density, mode]);

  return (
    <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />
  );
}
