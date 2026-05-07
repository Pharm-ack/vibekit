"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Github } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import { LogoBadge } from "./graphics/logo-mark";
import { SITE } from "@/lib/utils";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/components", label: "Components" },
  { href: "/docs", label: "Docs" },
  { href: "/compare", label: "Compare" },
  { href: "/faq", label: "FAQ" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <nav
          className={cn(
            "flex items-center justify-between gap-6 rounded-[var(--radius-full)] px-3 py-2 transition-all duration-300",
            scrolled
              ? "glass border border-[color:var(--border)] shadow-[var(--shadow-sm)]"
              : "border border-transparent"
          )}
        >
          <Link href="/" className="flex items-center gap-2 pl-2 group">
            <LogoBadge />
            <span className="font-mono text-[14px] font-medium uppercase tracking-wider text-[color:var(--text-primary)]">
              VibeKit
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-sm text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)] transition-colors rounded-md"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle className="hidden sm:inline-flex" />
            <Button href={SITE.github} variant="outline" size="sm" className="hidden sm:inline-flex">
              <Github className="h-4 w-4" />
              GitHub
            </Button>
            <Button href="#get-started" variant="accent" size="sm">
              Get started
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
