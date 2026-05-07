import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Quickstart — set up VibeKit in 7 steps",
  description:
    "Step-by-step quickstart for VibeKit: from copying the planning prompt into Claude.ai, to building with Claude Code, to running the pre-deploy review before launch.",
  alternates: { canonical: "/docs/quickstart" },
  openGraph: {
    url: `${SITE.url}/docs/quickstart`,
    images: ["/og.png"],
    type: "article",
  },
};

const steps = [
  {
    n: 1,
    title: "Copy the planning prompt",
    body: (
      <>
        Open <a href={`${SITE.github}/blob/main/CLAUDE_PROMPT.md`}>CLAUDE_PROMPT.md</a> in the GitHub repo and copy its full contents. This is the interview script that Claude (the chat) will use to scope your project.
      </>
    ),
  },
  {
    n: 2,
    title: "Open Claude (claude.ai)",
    body: <>Start a new conversation. Paste the prompt as your first message, then add your app idea on a new line. Be specific about who the app is for and what it does.</>,
  },
  {
    n: 3,
    title: "Answer 6–10 questions",
    body: <>Claude will interview you about features, user roles, data model, monetization, file uploads, email, and visual design. Answer honestly — vague answers produce vague output.</>,
  },
  {
    n: 4,
    title: "Save the 4 generated files",
    body: (
      <>
        Claude will produce <code>project-description.md</code>, <code>project-phases.md</code>, <code>design-style-guide.md</code>, and <code>prompt.md</code>. Save all four into your project root folder.
      </>
    ),
  },
  {
    n: 5,
    title: "Copy the framework files",
    body: (
      <>
        From the GitHub repo, copy these into your project root: <code>master_prompt.md</code> (Claude Code's coding constitution), <code>jb-components.md</code> (component registry reference), and <code>pre-deploy-review.md</code> (security audit prompt).
      </>
    ),
  },
  {
    n: 6,
    title: "Open Claude Code & paste prompt.md",
    body: <>In your project directory, open Claude Code. Paste the contents of <code>prompt.md</code> as your first message. Claude Code will read the framework, plan Phase 1, and start building. It pauses between phases for your confirmation.</>,
  },
  {
    n: 7,
    title: "Run pre-deploy review, then ship",
    body: <>Before deploying, paste <code>pre-deploy-review.md</code> into Claude Code as your last task. It writes a Critical / High / Medium report to <code>pre-deploy-review-report.md</code>. Address every Critical issue, then deploy.</>,
  },
];

export default function Quickstart() {
  return (
    <>
      <Nav />
      <main className="pt-28 pb-24">
        <article className="mx-auto max-w-3xl px-4 sm:px-6">
          <Link
            href="/docs"
            className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-wider text-[color:var(--text-tertiary)] transition-colors hover:text-[color:var(--text-primary)]"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Documentation
          </Link>

          <header className="mt-8 border-b border-[color:var(--border)] pb-10">
            <div className="font-mono text-[11px] uppercase tracking-wider text-[color:var(--accent)]">
              Guide · 7 steps · ~10 min read
            </div>
            <h1 className="mt-3 font-mono text-[clamp(2rem,5vw,3.5rem)] font-bold uppercase tracking-tight text-[color:var(--text-primary)]">
              Quickstart
            </h1>
            <p className="mt-5 text-[18px] leading-relaxed text-[color:var(--text-secondary)]">
              From a one-line idea to a deployed Next.js app, with an opinionated workflow that prevents the usual AI failure modes.
            </p>
          </header>

          <ol className="mt-10 space-y-8">
            {steps.map((s) => (
              <li key={s.n} className="grid gap-5 sm:grid-cols-[auto_1fr]">
                <div className="font-mono text-[40px] font-light leading-none text-[color:var(--accent)] tabular-nums">
                  {String(s.n).padStart(2, "0")}
                </div>
                <div>
                  <h2 className="font-mono text-[18px] uppercase tracking-tight text-[color:var(--text-primary)]">
                    {s.title}
                  </h2>
                  <div className="mt-3 text-[15.5px] leading-[1.75] text-[color:var(--text-secondary)]
                    [&_a]:text-[color:var(--accent)] [&_a]:underline [&_a]:underline-offset-4
                    [&_code]:font-mono [&_code]:text-[13px] [&_code]:rounded [&_code]:border [&_code]:border-[color:var(--border)] [&_code]:bg-[color:var(--bg-elevated)] [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:text-[color:var(--text-primary)]">
                    {s.body}
                  </div>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-14 rounded-md border border-[color:var(--border)] bg-[color:var(--bg-elevated)] p-6">
            <h3 className="font-mono text-[12px] uppercase tracking-wider text-[color:var(--accent)]">
              That's it
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-[color:var(--text-primary)]">
              Seven steps from idea to production. Bookmark this page — you'll repeat the flow for every new project.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href={SITE.github} variant="accent" size="md">
                Open the GitHub repo
              </Button>
              <Button href="/components" variant="outline" size="md">
                Browse components
              </Button>
            </div>
          </div>
        </article>
      </main>
      <Footer />

      {/* HowTo schema for AEO */}
      <Script
        id="ld-howto-quickstart"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "Set up VibeKit",
            description: "Set up VibeKit and build a production-grade Next.js app with Claude Code in 7 steps.",
            totalTime: "PT15M",
            step: steps.map((s) => ({
              "@type": "HowToStep",
              position: s.n,
              name: s.title,
              text: typeof s.body === "string" ? s.body : `Step ${s.n}: ${s.title}`,
            })),
          }),
        }}
      />
    </>
  );
}
