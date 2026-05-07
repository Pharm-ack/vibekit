import { FileText, ListTodo, Palette, Sparkles } from "lucide-react";
import { Section } from "./section";

const files = [
  {
    icon: FileText,
    name: "project-description.md",
    body: "Complete description of your app — features, data model, pages, integrations.",
  },
  {
    icon: ListTodo,
    name: "project-phases.md",
    body: "Build blueprint with phases, tasks, and install commands. Claude Code checks them off.",
  },
  {
    icon: Palette,
    name: "design-style-guide.md",
    body: "Fully customized visual design system — colors, typography, spacing, component specs.",
  },
  {
    icon: Sparkles,
    name: "prompt.md",
    body: "The prompt you paste into Claude Code to start building.",
  },
];

export function FourFiles() {
  return (
    <Section
      id="files"
      eyebrow="The 4-file output"
      title={<>Four files. One coherent <em className="not-italic gradient-text">build plan</em>.</>}
      description="The planning step generates everything Claude Code needs. No vague briefs. No guessing. Each file has a single job."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {files.map(({ icon: Icon, name, body }) => (
          <div
            key={name}
            className="reveal group relative overflow-hidden rounded-[var(--radius-lg)] border border-[color:var(--border)] bg-[color:var(--bg-elevated)] p-6 transition-all hover:border-[color:var(--border-strong)] hover:shadow-[var(--shadow-md)]"
          >
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-[var(--radius)] bg-[color:var(--accent-soft)] text-[color:var(--accent)]">
                <Icon className="h-5 w-5" />
              </span>
              <code className="font-mono text-[14px] text-[color:var(--text-primary)]">
                {name}
              </code>
            </div>
            <p className="mt-4 text-[15px] leading-relaxed text-[color:var(--text-secondary)]">
              {body}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
