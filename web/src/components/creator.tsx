"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, ExternalLink, Github, Youtube } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { Button } from "./ui/button";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const stats = [
  { value: "10+", label: "Years coding" },
  { value: "50K+", label: "YouTube subs" },
  { value: "100+", label: "Apps shipped" },
  { value: "30+", label: "Components in JB Registry" },
];

const links = [
  { label: "Website", href: "https://jb.desishub.com", Icon: ExternalLink },
  { label: "GitHub", href: "https://github.com/MUKE-coder", Icon: Github },
  { label: "YouTube", href: "https://youtube.com/@jbwebdeveloper", Icon: Youtube },
  { label: "Desishub", href: "https://desishub.com", Icon: ExternalLink },
];

export function Creator() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
        defaults: { ease: "power3.out" },
      });

      tl.from(".creator-photo", { scale: 0.85, opacity: 0, duration: 0.8 })
        .from(".creator-orbit", { rotate: -90, opacity: 0, duration: 1, ease: "expo.out" }, "-=0.6")
        .from(".creator-eyebrow", { y: 14, opacity: 0, duration: 0.5 }, "-=0.4")
        .from(".creator-headline", { y: 18, opacity: 0, duration: 0.6 }, "-=0.3")
        .from(".creator-bio", { y: 14, opacity: 0, duration: 0.5 }, "-=0.4")
        .from(".creator-stat", { y: 12, opacity: 0, stagger: 0.08, duration: 0.4 }, "-=0.3")
        .from(".creator-link", { y: 8, opacity: 0, stagger: 0.06, duration: 0.35 }, "-=0.2");
    },
    { scope: root }
  );

  return (
    <section ref={root} id="creator" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background ambient */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 30% 50%, color-mix(in srgb, var(--accent) 10%, transparent), transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-14 md:grid-cols-[auto_1fr] md:items-center md:gap-20">
          {/* Photo + orbital frame */}
          <div className="relative mx-auto md:mx-0">
            <div className="relative h-72 w-72 sm:h-80 sm:w-80">
              {/* Orbital ring around photo */}
              <svg
                className="creator-orbit absolute inset-0 h-full w-full animate-spin-slow"
                viewBox="0 0 100 100"
                aria-hidden
                style={{ animationDuration: "28s" }}
              >
                <circle
                  cx="50"
                  cy="50"
                  r="48"
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth="0.4"
                  strokeDasharray="2 4"
                  opacity="0.5"
                />
                <circle cx="50" cy="2" r="1.5" fill="var(--accent)" />
                <circle cx="98" cy="50" r="1" fill="var(--accent)" opacity="0.6" />
              </svg>

              {/* Inner ring */}
              <svg
                className="absolute inset-2 h-[calc(100%-1rem)] w-[calc(100%-1rem)] animate-spin-slow"
                viewBox="0 0 100 100"
                aria-hidden
                style={{
                  animationDuration: "18s",
                  animationDirection: "reverse",
                }}
              >
                <circle
                  cx="50"
                  cy="50"
                  r="48"
                  fill="none"
                  stroke="var(--border-strong)"
                  strokeWidth="0.4"
                />
              </svg>

              {/* Glow behind photo */}
              <div
                className="absolute inset-6 rounded-full"
                aria-hidden
                style={{
                  background:
                    "radial-gradient(circle, color-mix(in srgb, var(--accent) 30%, transparent) 0%, transparent 70%)",
                  filter: "blur(20px)",
                }}
              />

              {/* The photo */}
              <div className="creator-photo absolute inset-6 overflow-hidden rounded-full border border-[color:var(--border-strong)] bg-[color:var(--bg-elevated)] shadow-[var(--shadow-xl)]">
                <Image
                  src="https://avatars.githubusercontent.com/u/64189841?v=4"
                  alt="JB (Muke Johnbaptist)"
                  fill
                  sizes="(min-width: 640px) 320px, 288px"
                  className="object-cover"
                  priority
                />
              </div>

              {/* Status badge */}
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full border border-[color:var(--border)] bg-[color:var(--bg-elevated)] px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-[color:var(--text-secondary)] shadow-[var(--shadow-md)]">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Building
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="creator-eyebrow inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--bg-elevated)] px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-[color:var(--text-secondary)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
              Built by JB · Desishub
            </div>

            <h2 className="creator-headline font-display mt-6 text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] tracking-tight text-[color:var(--text-primary)]">
              Hi, I'm <em className="not-italic gradient-text">JB</em>.
              <br />
              <span className="text-[color:var(--text-secondary)]">I built VibeKit</span>
            </h2>

            <div className="creator-bio mt-6 space-y-4 text-[15.5px] leading-relaxed text-[color:var(--text-secondary)]">
              <p>
                I'm <strong className="font-medium text-[color:var(--text-primary)]">Muke Johnbaptist</strong>, founder of <a href="https://desishub.com" target="_blank" rel="noopener noreferrer" className="text-[color:var(--accent)] underline underline-offset-4">Desishub Technologies</a> in Kampala, Uganda. I've been shipping production web apps for over a decade and teaching builders on YouTube for years.
              </p>
              <p>
                VibeKit is what I wished existed when I started using AI to build real apps. I was burning $200/month on tokens, getting different stacks every project, and watching agents ship code with unauthenticated routes. So I built the framework that fixes all of it — and put it in front of every coding agent I use.
              </p>
              <p>
                Everything in here is battle-tested in real client projects and my own apps. If it ships from my laptop, it goes into the framework.
              </p>
            </div>

            {/* Stats */}
            <dl className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="creator-stat rounded-md border border-[color:var(--border)] bg-[color:var(--bg-elevated)] p-4"
                >
                  <dt className="font-mono text-[10px] uppercase tracking-wider text-[color:var(--text-tertiary)]">
                    {s.label}
                  </dt>
                  <dd className="mt-1 font-mono text-[22px] font-semibold tabular-nums text-[color:var(--text-primary)]">
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>

            {/* Links */}
            <div className="mt-8 flex flex-wrap gap-3">
              {links.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="creator-link inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--bg-elevated)] px-4 py-2 font-mono text-[12px] uppercase tracking-wider text-[color:var(--text-secondary)] transition-all hover:-translate-y-0.5 hover:border-[color:var(--border-strong)] hover:text-[color:var(--text-primary)]"
                >
                  <Icon className="h-3.5 w-3.5" />
                  {label}
                </a>
              ))}
            </div>

            <div className="mt-10">
              <Button href="https://jb.desishub.com" variant="accent" size="md">
                Visit jb.desishub.com
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
