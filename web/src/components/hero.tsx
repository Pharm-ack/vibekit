"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowRight, Github } from "lucide-react";
import { useRef } from "react";
import { HeroCanvas } from "./hero-canvas";
import { Button } from "./ui/button";
import { SITE } from "@/lib/utils";

const stackChips = [
  "Next.js 16",
  "Prisma v7",
  "Better Auth",
  "React Query",
  "Tailwind v4",
  "Resend",
  "Stripe",
];

export function Hero() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-eyebrow", { y: 16, opacity: 0, duration: 0.6 })
        .from(".hero-headline > span", {
          y: 32,
          opacity: 0,
          duration: 0.8,
          stagger: 0.08,
        }, "-=0.3")
        .from(".hero-sub", { y: 18, opacity: 0, duration: 0.6 }, "-=0.5")
        .from(".hero-cta > *", {
          y: 12,
          opacity: 0,
          duration: 0.5,
          stagger: 0.1,
        }, "-=0.4")
        .from(".hero-chip", {
          y: 8,
          opacity: 0,
          duration: 0.4,
          stagger: 0.04,
        }, "-=0.3");
    },
    { scope: root }
  );

  return (
    <section ref={root} className="relative isolate overflow-hidden pt-32 sm:pt-40 pb-20 sm:pb-28">
      {/* Three.js scene */}
      <HeroCanvas className="pointer-events-none absolute inset-0 -z-10 opacity-90" />

      {/* Grid overlay */}
      <div className="pointer-events-none absolute inset-0 -z-10 grid-pattern opacity-50" aria-hidden />

      {/* Soft radial vignette */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, color-mix(in srgb, var(--accent) 8%, transparent), transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center">
        <div className="hero-eyebrow inline-flex items-center gap-2 rounded-[var(--radius-full)] border border-[color:var(--border)] bg-[color:var(--bg-elevated)] px-3 py-1.5 text-xs font-medium text-[color:var(--text-secondary)]">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[color:var(--accent)] opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
          </span>
          The framework for vibe coders
        </div>

        <h1 className="hero-headline font-display mt-6 text-[clamp(2.5rem,7vw,5.5rem)] leading-[1.02] tracking-tight text-[color:var(--text-primary)]">
          <span className="block">Ship production apps</span>
          <span className="block">with <em className="not-italic gradient-text">Claude Code</em></span>
        </h1>

        <p className="hero-sub mx-auto mt-7 max-w-2xl text-[17px] sm:text-lg leading-relaxed text-[color:var(--text-secondary)]">
          A structured framework for vibe coders building production-grade Next.js apps with Claude Code or any agent —
          without burning tokens, shipping broken auth, or getting stuck.
        </p>

        <div className="hero-cta mt-9 flex flex-wrap items-center justify-center gap-3">
          <Button href="#get-started" variant="accent" size="lg">
            Get started
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button href={SITE.github} variant="outline" size="lg">
            <Github className="h-4 w-4" />
            View on GitHub
          </Button>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-2">
          {stackChips.map((chip) => (
            <span
              key={chip}
              className="hero-chip rounded-[var(--radius-full)] border border-[color:var(--border)] bg-[color:var(--bg-elevated)]/60 px-3 py-1 text-[12px] font-mono text-[color:var(--text-tertiary)]"
            >
              {chip}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
