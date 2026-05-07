import { Section } from "./section";

const steps = [
  {
    n: "01",
    title: "Copy the planning prompt",
    body: "Grab CLAUDE_PROMPT.md from the VibeKit repo. It's a self-contained interview script.",
  },
  {
    n: "02",
    title: "Open Claude (claude.ai)",
    body: "Start a new conversation. Paste the prompt, then add your app idea on a new line.",
  },
  {
    n: "03",
    title: "Answer Claude's questions",
    body: "6–10 targeted questions covering features, data model, integrations, and visual design.",
  },
  {
    n: "04",
    title: "Get your 4 project files",
    body: "Claude generates project-description.md, project-phases.md, design-style-guide.md, and prompt.md.",
  },
  {
    n: "05",
    title: "Copy the framework files",
    body: "Drop master_prompt.md, jb-components.md, and pre-deploy-review.md into your project root.",
  },
  {
    n: "06",
    title: "Open Claude Code & paste prompt.md",
    body: "Claude Code reads everything, plans Phase 1, and starts building. It stops between phases for your confirmation.",
  },
  {
    n: "07",
    title: "Run pre-deploy review, then ship",
    body: "Before going live, paste pre-deploy-review.md. Address every Critical issue. Deploy with confidence.",
  },
];

export function HowItWorks() {
  return (
    <Section
      id="how"
      eyebrow="How it works"
      title="Plan. Build. Ship — in seven steps."
      description="From a one-line idea to a deployed app, with an opinionated workflow that prevents the usual AI failure modes."
    >
      <ol className="grid gap-3 md:grid-cols-2">
        {steps.map((s) => (
          <li
            key={s.n}
            className="reveal group relative overflow-hidden rounded-[var(--radius-lg)] border border-[color:var(--border)] bg-[color:var(--bg-elevated)] p-6 transition-all hover:border-[color:var(--border-strong)]"
          >
            <div className="flex items-start gap-5">
              <span className="font-mono text-[28px] font-light text-[color:var(--accent)] tabular-nums leading-none">
                {s.n}
              </span>
              <div>
                <h3 className="font-display text-[22px] leading-tight text-[color:var(--text-primary)]">
                  {s.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-[color:var(--text-secondary)]">
                  {s.body}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
