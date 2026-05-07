"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const agents = [
  "Claude Code",
  "Cursor",
  "Kiro Code",
  "Antigravity",
  "Windsurf",
  "Cline",
  "Aider",
  "Continue",
  "Cody",
  "v0",
  "Lovable",
  "Bolt",
];

export function AgentsStrip() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".agents-line > *",
        { y: 12, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          stagger: 0.04,
          scrollTrigger: {
            trigger: root.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: root }
  );

  return (
    <section ref={root} className="relative border-y border-[color:var(--border)] bg-[color:var(--bg-subtle)] py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:gap-8">
          <span className="shrink-0 font-mono text-[11px] uppercase tracking-wider text-[color:var(--text-tertiary)]">
            Works with any agent that reads files
          </span>
          <div className="agents-line flex flex-wrap items-center justify-center gap-x-6 gap-y-2 sm:flex-1">
            {agents.map((a) => (
              <span
                key={a}
                className="font-mono text-[13px] text-[color:var(--text-secondary)] transition-colors hover:text-[color:var(--text-primary)]"
              >
                {a}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
