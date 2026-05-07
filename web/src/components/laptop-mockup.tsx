"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check, FileText, ListTodo, Palette, Sparkles } from "lucide-react";
import { useRef } from "react";
import { Section } from "./section";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const generatedFiles = [
  { name: "project-description.md", Icon: FileText, sub: "What the app is" },
  { name: "project-phases.md", Icon: ListTodo, sub: "Build blueprint" },
  { name: "design-style-guide.md", Icon: Palette, sub: "Visual system" },
  { name: "prompt.md", Icon: Sparkles, sub: "Paste into agent" },
];

export function LaptopMockup() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      });

      // Laptop entrance
      tl.from(".laptop-frame", {
        y: 40,
        opacity: 0,
        rotateX: 18,
        duration: 1,
        ease: "power3.out",
      })
        // User message types in
        .from(
          ".chat-user",
          { opacity: 0, y: 8, duration: 0.4 },
          "-=0.3"
        )
        .to(".chat-user .typed", {
          width: "100%",
          duration: 1.6,
          ease: "steps(46)",
        })
        // Claude responds
        .from(".chat-claude", { opacity: 0, y: 8, duration: 0.4 })
        .from(".typing-dots", { opacity: 0, duration: 0.2 })
        .to(".typing-dots", { opacity: 0, duration: 0.2, delay: 0.6 })
        // Files appear sequentially
        .from(".gen-file", {
          opacity: 0,
          x: -16,
          stagger: 0.18,
          duration: 0.45,
          ease: "power2.out",
        })
        .from(".file-check", {
          scale: 0,
          stagger: 0.18,
          duration: 0.3,
          ease: "back.out(2)",
        }, "-=0.6")
        .from(".success-pill", { y: 8, opacity: 0, duration: 0.4 });

      // Continuous: subtle laptop hover float
      gsap.to(".laptop-frame", {
        y: -4,
        duration: 2.6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Cursor blink
      gsap.to(".typing-cursor", {
        opacity: 0,
        duration: 0.6,
        repeat: -1,
        yoyo: true,
        ease: "steps(1)",
      });
    },
    { scope: root }
  );

  return (
    <section ref={root} id="see-it" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--bg-elevated)] px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-[color:var(--text-secondary)]">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[color:var(--accent)] opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
            </span>
            See it in action
          </div>
          <h2 className="font-display mt-6 text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-tight text-[color:var(--text-primary)]">
            Idea in. <em className="not-italic gradient-text">Four files out.</em>
          </h2>
          <p className="mt-5 text-[16px] leading-relaxed text-[color:var(--text-secondary)]">
            Paste your one-line idea into Claude. Answer a handful of questions. Watch the framework generate exactly what your coding agent needs.
          </p>
        </div>

        {/* Laptop */}
        <div className="laptop-frame relative mx-auto mt-16 max-w-4xl" style={{ perspective: "2000px" }}>
          {/* Glow under laptop */}
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-12 -z-10"
            style={{
              background:
                "radial-gradient(ellipse 50% 50% at 50% 60%, color-mix(in srgb, var(--accent) 22%, transparent), transparent 70%)",
              filter: "blur(40px)",
            }}
          />

          {/* Screen */}
          <div className="relative rounded-t-2xl border border-[color:var(--border-strong)] bg-[color:var(--bg-elevated)] shadow-[var(--shadow-xl)]">
            {/* Top bezel */}
            <div className="flex items-center justify-center gap-1 border-b border-[color:var(--border)] py-1.5">
              <span className="h-1 w-12 rounded-full bg-[color:var(--bg-muted)]" />
              <span className="h-1 w-1 rounded-full bg-[color:var(--bg-muted)]" />
            </div>

            {/* Browser chrome */}
            <div className="flex items-center gap-3 border-b border-[color:var(--border)] bg-[color:var(--bg-subtle)] px-4 py-2.5">
              <div className="flex gap-1.5">
                <span className="h-3 w-3 rounded-full bg-[#FF5F57]/80" />
                <span className="h-3 w-3 rounded-full bg-[#FEBC2E]/80" />
                <span className="h-3 w-3 rounded-full bg-[#28C840]/80" />
              </div>
              <div className="flex-1 rounded-md border border-[color:var(--border)] bg-[color:var(--bg-elevated)] px-3 py-1 text-center font-mono text-[11px] text-[color:var(--text-tertiary)]">
                claude.ai/new
              </div>
            </div>

            {/* App body — Claude-style chat */}
            <div className="grid h-[460px] grid-cols-[200px_1fr] sm:grid-cols-[240px_1fr]">
              {/* Sidebar */}
              <aside className="hidden sm:block border-r border-[color:var(--border)] bg-[color:var(--bg-subtle)]/40 p-4">
                <div className="font-mono text-[10px] uppercase tracking-wider text-[color:var(--text-tertiary)]">
                  Claude
                </div>
                <div className="mt-4 space-y-1">
                  <div className="flex items-center gap-2 rounded border border-[color:var(--border)] bg-[color:var(--bg-elevated)] px-2.5 py-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
                    <span className="text-[12px] text-[color:var(--text-primary)] truncate">
                      VibeKit planning
                    </span>
                  </div>
                  <div className="flex items-center gap-2 px-2.5 py-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--text-tertiary)]" />
                    <span className="text-[12px] text-[color:var(--text-tertiary)] truncate">
                      School mgmt brief
                    </span>
                  </div>
                  <div className="flex items-center gap-2 px-2.5 py-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--text-tertiary)]" />
                    <span className="text-[12px] text-[color:var(--text-tertiary)] truncate">
                      Invoice app v2
                    </span>
                  </div>
                </div>
              </aside>

              {/* Chat content */}
              <div className="flex flex-col">
                {/* Messages */}
                <div className="flex-1 space-y-4 overflow-hidden p-5 sm:p-6">
                  {/* User msg */}
                  <div className="chat-user flex justify-end">
                    <div className="max-w-[85%] rounded-2xl rounded-tr-sm bg-[color:var(--text-primary)] px-4 py-2.5 text-[13px] text-[color:var(--text-inverse)]">
                      <div className="overflow-hidden">
                        <span className="typed inline-block overflow-hidden whitespace-nowrap" style={{ width: 0 }}>
                          I want to build a school management system for Uganda...
                        </span>
                        <span className="typing-cursor inline-block w-[1px] h-[1em] bg-[color:var(--text-inverse)] align-middle ml-0.5" />
                      </div>
                    </div>
                  </div>

                  {/* Claude response */}
                  <div className="chat-claude flex justify-start">
                    <div className="max-w-[85%] space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="grid h-5 w-5 place-items-center rounded-full bg-[color:var(--accent)] font-mono text-[9px] font-bold text-[color:var(--accent-fg)]">
                          C
                        </span>
                        <span className="font-mono text-[10px] uppercase tracking-wider text-[color:var(--text-tertiary)]">
                          Claude
                        </span>
                      </div>
                      <div className="rounded-2xl rounded-tl-sm border border-[color:var(--border)] bg-[color:var(--bg-elevated)] px-4 py-2.5 text-[12.5px] leading-relaxed text-[color:var(--text-primary)]">
                        Reading the VibeKit framework...
                        <div className="typing-dots mt-2 flex gap-1">
                          <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--text-tertiary)] animate-pulse" />
                          <span
                            className="h-1.5 w-1.5 rounded-full bg-[color:var(--text-tertiary)] animate-pulse"
                            style={{ animationDelay: "0.15s" }}
                          />
                          <span
                            className="h-1.5 w-1.5 rounded-full bg-[color:var(--text-tertiary)] animate-pulse"
                            style={{ animationDelay: "0.3s" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Generated files */}
                  <div className="space-y-2 pt-2">
                    <div className="font-mono text-[10px] uppercase tracking-wider text-[color:var(--text-tertiary)]">
                      ✓ Generated 4 files
                    </div>
                    {generatedFiles.map(({ name, Icon, sub }) => (
                      <div
                        key={name}
                        className="gen-file flex items-center gap-3 rounded-md border border-[color:var(--border)] bg-[color:var(--bg-subtle)]/60 px-3 py-2"
                      >
                        <span className="grid h-7 w-7 shrink-0 place-items-center rounded border border-[color:var(--border)] bg-[color:var(--bg-elevated)] text-[color:var(--text-secondary)]">
                          <Icon className="h-3.5 w-3.5" />
                        </span>
                        <div className="flex-1 min-w-0">
                          <div className="font-mono text-[12px] text-[color:var(--text-primary)] truncate">
                            {name}
                          </div>
                          <div className="text-[11px] text-[color:var(--text-tertiary)] truncate">
                            {sub}
                          </div>
                        </div>
                        <span className="file-check grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[color:var(--accent)]/15 text-[color:var(--accent)]">
                          <Check className="h-3 w-3" />
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Success pill */}
                  <div className="success-pill mt-3 flex justify-center">
                    <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--accent)]/40 bg-[color:var(--accent-soft)] px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-[color:var(--accent)]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
                      Ready to paste into Claude Code
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Laptop base */}
          <div
            className="relative mx-auto h-3 rounded-b-2xl bg-gradient-to-b from-[color:var(--border-strong)] to-[color:var(--bg-muted)]"
            style={{ width: "calc(100% + 24px)", marginLeft: "-12px" }}
          />
          <div
            className="mx-auto h-1 rounded-b-2xl bg-[color:var(--bg-muted)]"
            style={{ width: "32%" }}
          />
        </div>
      </div>
    </section>
  );
}
