import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import {
  ArrowUpRight,
  CheckSquare,
  Clock,
  Code,
  Database,
  GitBranch,
  Layers,
  Rocket,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { CopyBlock } from "@/components/copy-block";
import { SITE } from "@/lib/utils";

export const metadata: Metadata = {
  title: "VibeKit Crash Course — build & deploy a SaaS in 3 hours",
  description:
    "Step-by-step crash course: build TaskFlow, a real personal task manager, using VibeKit and Claude Code (or any agent). From idea to deployed in 3 hours. Every prompt copyable inline.",
  alternates: { canonical: "/tutorial" },
  openGraph: {
    url: `${SITE.url}/tutorial`,
    images: ["/og.png"],
    type: "article",
  },
};

const taskFlowIdea = `I want to build TaskFlow — a personal task management app for solo professionals.

Users sign up with Google or email, then create and organize tasks across categories
(Work, Personal, Side Project, Learning). Each task has a title, optional notes, a due
date, a priority (Low / Medium / High), and a status (Open / In Progress / Done).

Users see a dashboard with: tasks due today, overdue tasks, a quick-add input, and
stats on tasks completed this week. They can filter and search the full task list,
edit inline, mark as done, and export their open tasks to PDF.

No team features, no collaboration. Single-user. Clean and minimal — Linear/Vercel
aesthetic, light mode primary, dark mode optional. Brand color: indigo.`;

const modules = [
  {
    Icon: CheckSquare,
    eyebrow: "MODULE 01",
    title: "Set up the accounts you'll need",
    time: "5 min",
    intro: "Before writing a single line of code, get the cloud accounts ready. All free tiers cover the entire course.",
  },
  {
    Icon: Sparkles,
    eyebrow: "MODULE 02",
    title: "Plan with Claude (claude.ai)",
    time: "15 min",
    intro: "Paste the VibeKit planning prompt into Claude, give it the TaskFlow brief, and let it interview you. You'll walk away with 4 files that define the entire build.",
  },
  {
    Icon: Layers,
    eyebrow: "MODULE 03",
    title: "Initialize the project",
    time: "10 min",
    intro: "Scaffold a Next.js 16 project, drop in the 4 generated files plus the 3 framework files, and open Claude Code.",
  },
  {
    Icon: ShieldCheck,
    eyebrow: "MODULE 04",
    title: "Phase 1 — Foundation",
    time: "30 min",
    intro: "Claude Code reads everything, then builds the foundation: Prisma + Neon, Better Auth, layout shell, design tokens. By the end you can sign in.",
  },
  {
    Icon: Database,
    eyebrow: "MODULE 05",
    title: "Phase 2 — Tasks CRUD",
    time: "45 min",
    intro: "The core feature — tasks model, API routes with server-side pagination, list page with search and filters, create/edit forms with Zod, dashboard stat cards.",
  },
  {
    Icon: Wrench,
    eyebrow: "MODULE 06",
    title: "Phase 3 — Polish (PDF export + filters)",
    time: "20 min",
    intro: "Add the production touches: PDF export of open tasks, category filters, the quick-add input on the dashboard.",
  },
  {
    Icon: Code,
    eyebrow: "MODULE 07",
    title: "Pre-deploy review",
    time: "30 min",
    intro: "Run the senior-level audit before deploying. Fix every Critical issue.",
  },
  {
    Icon: Rocket,
    eyebrow: "MODULE 08",
    title: "Deploy to Vercel",
    time: "20 min",
    intro: "Push to GitHub, link to Vercel, set env vars, point a custom domain via Cloudflare.",
  },
];

export default function TutorialPage() {
  return (
    <>
      <Nav />
      <main className="pt-28">
        {/* Hero */}
        <section className="relative pb-12 sm:pb-20 overflow-hidden">
          <div
            className="pointer-events-none absolute inset-0 -z-10 grid-pattern opacity-50"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 -z-10"
            aria-hidden
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 50% 0%, color-mix(in srgb, var(--accent) 12%, transparent), transparent 65%)",
            }}
          />

          <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--bg-elevated)] px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-[color:var(--text-secondary)]">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[color:var(--accent)] opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
              </span>
              Crash course · 8 modules · ~3 hours
            </div>

            <h1 className="font-display mt-6 text-[clamp(2.5rem,7vw,5rem)] leading-[1.02] tracking-tight text-[color:var(--text-primary)]">
              Build & deploy a SaaS in <em className="not-italic gradient-text">one afternoon</em>.
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-relaxed text-[color:var(--text-secondary)]">
              Follow this crash course and ship <strong className="font-medium text-[color:var(--text-primary)]">TaskFlow</strong> — a real personal task manager with auth, a dashboard, filters, search, PDF export, and a custom domain. Powered by VibeKit + your favorite AI coding agent.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <a href="#module-01" className="contents">
                <Button variant="accent" size="lg">
                  Start the course
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </a>
              <Button href={SITE.community} variant="outline" size="lg">
                Join the community
              </Button>
            </div>
          </div>
        </section>

        {/* What you'll build */}
        <Section
          eyebrow="WHAT YOU'LL BUILD"
          title="TaskFlow — a real personal task manager."
          description="Not a TODO toy. Real auth, real database, real export, real deploy. The skills carry over to any SaaS you build next."
          containerClassName="max-w-5xl"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="reveal rounded-md border border-[color:var(--border)] bg-[color:var(--bg-elevated)] p-6">
              <h3 className="font-mono text-[12px] uppercase tracking-wider text-[color:var(--accent)]">
                Features you'll ship
              </h3>
              <ul className="mt-4 space-y-2.5 text-[14.5px] text-[color:var(--text-primary)]">
                {[
                  "Email + Google OAuth sign-in (Better Auth)",
                  "Tasks with title, notes, due date, priority, status",
                  "Categories: Work / Personal / Side Project / Learning",
                  "Dashboard: due today, overdue, weekly completed, quick-add",
                  "Full task list with search, filters, sortable columns",
                  "Create / edit forms (React Hook Form + Zod)",
                  "Export open tasks to PDF (@react-pdf/renderer)",
                  "Light + dark mode",
                  "Deployed to Vercel + custom domain",
                ].map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[color:var(--accent)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="reveal rounded-md border border-[color:var(--border)] bg-[color:var(--bg-elevated)] p-6">
              <h3 className="font-mono text-[12px] uppercase tracking-wider text-[color:var(--accent)]">
                Skills you'll learn
              </h3>
              <ul className="mt-4 space-y-2.5 text-[14.5px] text-[color:var(--text-primary)]">
                {[
                  "Planning a project with Claude before any code",
                  "Reading a phase-by-phase build plan",
                  "Using Prisma v7 patterns (not v6) on Neon Postgres",
                  "Wiring auth-guarded API routes with Zod validation",
                  "Installing JB components instead of writing from scratch",
                  "Running React Query + React Hook Form correctly",
                  "Generating PDFs with @react-pdf/renderer",
                  "Running a senior-level pre-deploy audit",
                  "Deploying with Vercel + Cloudflare DNS + SSL",
                ].map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[color:var(--accent)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="reveal mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { label: "Total time", value: "~3 hrs" },
              { label: "Modules", value: "8" },
              { label: "Lines of code you write", value: "~0" },
              { label: "Cost (free tiers)", value: "$0" },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-md border border-[color:var(--border)] bg-[color:var(--bg-subtle)] p-4 text-center"
              >
                <div className="font-mono text-[10px] uppercase tracking-wider text-[color:var(--text-tertiary)]">
                  {s.label}
                </div>
                <div className="mt-1 font-mono text-[20px] font-semibold tabular-nums text-[color:var(--text-primary)]">
                  {s.value}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Module index */}
        <Section
          eyebrow="THE 8 MODULES"
          title="The full path."
          description="Click any module to jump in. Modules build on each other — follow them in order on your first run."
          containerClassName="max-w-4xl"
        >
          <ol className="grid gap-3 sm:grid-cols-2">
            {modules.map((m, i) => {
              const slug = `module-${String(i + 1).padStart(2, "0")}`;
              return (
                <li key={slug}>
                  <a
                    href={`#${slug}`}
                    className="group flex items-start gap-4 rounded-md border border-[color:var(--border)] bg-[color:var(--bg-elevated)] p-4 transition-all hover:-translate-y-0.5 hover:border-[color:var(--border-strong)]"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-[color:var(--border)] bg-[color:var(--bg-subtle)] text-[color:var(--text-secondary)] transition-colors group-hover:text-[color:var(--accent)]">
                      <m.Icon className="h-4 w-4" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-3">
                        <span className="font-mono text-[10px] uppercase tracking-wider text-[color:var(--text-tertiary)]">
                          {m.eyebrow}
                        </span>
                        <span className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-[color:var(--text-tertiary)]">
                          <Clock className="h-3 w-3" />
                          {m.time}
                        </span>
                      </div>
                      <h3 className="mt-1 font-mono text-[13.5px] uppercase tracking-tight text-[color:var(--text-primary)]">
                        {m.title}
                      </h3>
                    </div>
                  </a>
                </li>
              );
            })}
          </ol>
        </Section>

        {/* MODULE 01 */}
        <ModuleSection slug="module-01" eyebrow="MODULE 01 · 5 min" title="Set up the accounts you'll need">
          <p>
            All of these have free tiers that cover the entire course. Sign up first so you don't break flow later.
          </p>

          <Checklist
            items={[
              { name: "Anthropic Claude (chat)", url: "https://claude.ai", note: "Free tier works for the planning step" },
              { name: "Claude Code or Cursor", url: "https://www.anthropic.com/claude-code", note: "Pick whichever AI coding agent you prefer" },
              { name: "Neon", url: "https://neon.tech", note: "Postgres database — free tier" },
              { name: "Vercel", url: "https://vercel.com", note: "Deployment — free hobby tier" },
              { name: "Resend", url: "https://resend.com", note: "Transactional email — free tier" },
              { name: "GitHub account", url: "https://github.com", note: "For pushing your code + Vercel auto-deploy" },
            ]}
          />

          <h3>Local tools</h3>
          <ul>
            <li><strong>Node.js 20+</strong> (or 22+) — <code>node -v</code> to check</li>
            <li><strong>pnpm</strong> — <code>npm i -g pnpm</code> if missing</li>
            <li><strong>git</strong> — already installed on most systems</li>
          </ul>

          <Tip>
            Don't have a Resend account? You can skip it for now and add it during Module 04 — auth still works without email verification in dev.
          </Tip>
        </ModuleSection>

        {/* MODULE 02 */}
        <ModuleSection slug="module-02" eyebrow="MODULE 02 · 15 min" title="Plan with Claude (claude.ai)">
          <p>
            VibeKit's planning step turns a one-line idea into 4 production-ready files. You paste a prompt, answer some questions, and Claude does the rest.
          </p>

          <h3>Step 1 — Open the planning prompt</h3>
          <p>
            Go to <a href="/docs/quickstart">/docs/quickstart</a> and copy <code>CLAUDE_PROMPT.md</code> from the first code block (or use the GitHub copy: <a href={`${SITE.github}/blob/main/CLAUDE_PROMPT.md`} target="_blank" rel="noopener noreferrer">CLAUDE_PROMPT.md</a>).
          </p>

          <h3>Step 2 — Open Claude</h3>
          <p>
            Go to <a href="https://claude.ai/new" target="_blank" rel="noopener noreferrer">claude.ai/new</a>. Paste the entire <code>CLAUDE_PROMPT.md</code> as your first message. Then on a new line, paste the TaskFlow brief:
          </p>

          <CopyBlock
            filename="Append after CLAUDE_PROMPT.md content"
            label="TaskFlow brief"
            code={taskFlowIdea}
          />

          <h3>Step 3 — Answer Claude's questions</h3>
          <p>
            Claude will ask 6–10 questions: data model, dark mode, file uploads, etc. Suggested answers for TaskFlow:
          </p>
          <ul>
            <li><strong>Data model:</strong> single Task entity with `title, notes, dueDate, priority (Low/Med/High), status (Open/InProgress/Done), categoryId, userId`. Single Category entity with `name, color, userId`.</li>
            <li><strong>User roles:</strong> single role — every user manages their own tasks. No admin.</li>
            <li><strong>Auth:</strong> Better Auth with Email + Google OAuth.</li>
            <li><strong>Email:</strong> Resend (welcome email + password reset only).</li>
            <li><strong>Payments:</strong> None.</li>
            <li><strong>File uploads:</strong> None.</li>
            <li><strong>Dark mode:</strong> Yes.</li>
            <li><strong>Brand color:</strong> indigo (#4F46E5).</li>
            <li><strong>Typography:</strong> Geist + JetBrains Mono.</li>
            <li><strong>Aesthetic:</strong> "clean, focused, fast" — inspired by Linear and Vercel dashboard.</li>
          </ul>

          <h3>Step 4 — Save the 4 files</h3>
          <p>Claude will output 4 files in code blocks. Create a folder for your project and save each one:</p>

          <CopyBlock
            filename="terminal"
            label="Create the project folder"
            code={`mkdir taskflow && cd taskflow
mkdir -p docs

# Save Claude's output into these 4 files (copy-paste each code block):
# - project-description.md
# - project-phases.md
# - design-style-guide.md
# - prompt.md`}
          />

          <Tip>
            If Claude generates anything with placeholders like <code>[App Name]</code> or <code>[Feature]</code>, ask it to "fill in every placeholder with TaskFlow specifics — no brackets remaining."
          </Tip>
        </ModuleSection>

        {/* MODULE 03 */}
        <ModuleSection slug="module-03" eyebrow="MODULE 03 · 10 min" title="Initialize the project">
          <p>
            Now we scaffold the Next.js 16 project, copy the framework's coding constitution into it, and open Claude Code.
          </p>

          <h3>Step 1 — Scaffold Next.js</h3>
          <CopyBlock
            filename="terminal"
            label="From inside the taskflow folder"
            code={`pnpm create next-app@latest . --typescript --tailwind --app --eslint --import-alias "@/*" --turbopack --no-src-dir`}
          />
          <p>Accept the prompts. When it finishes, you have a base Next.js 16 project.</p>

          <h3>Step 2 — Copy the framework files</h3>
          <p>Clone the VibeKit repo to grab the framework files:</p>
          <CopyBlock
            filename="terminal"
            label="One-time clone (you can delete after copying)"
            code={`git clone https://github.com/MUKE-coder/vibekit.git /tmp/vibekit

cp /tmp/vibekit/master_prompt.md ./master_prompt.md
cp /tmp/vibekit/jb-components.md ./jb-components.md
cp /tmp/vibekit/pre-deploy-review.md ./pre-deploy-review.md`}
          />

          <h3>Step 3 — Verify your project root</h3>
          <p>You should now have these 7 files in your project root:</p>
          <CopyBlock
            filename="ls -la"
            label="Expected files"
            code={`taskflow/
├── master_prompt.md            # framework — coding rules
├── jb-components.md            # framework — component registry
├── pre-deploy-review.md        # framework — security audit prompt
├── project-description.md      # generated by Claude
├── project-phases.md           # generated by Claude
├── design-style-guide.md       # generated by Claude
├── prompt.md                   # generated by Claude — you'll paste this
└── package.json + Next.js scaffold`}
          />

          <h3>Step 4 — Open in your coding agent</h3>
          <p>
            Open the <code>taskflow</code> folder in Claude Code (<code>claude</code> in the project terminal), Cursor, Cline, or whichever agent you chose.
          </p>
        </ModuleSection>

        {/* MODULE 04 */}
        <ModuleSection slug="module-04" eyebrow="MODULE 04 · 30 min" title="Phase 1 — Foundation">
          <p>
            This is the first big build moment. Your agent will read all 7 files, then execute Phase 1 from <code>project-phases.md</code>: Prisma + Neon, Better Auth, layout shell, design tokens, custom 404/error pages.
          </p>

          <h3>Step 1 — Get a Neon database URL</h3>
          <ol>
            <li>Go to <a href="https://console.neon.tech" target="_blank" rel="noopener noreferrer">console.neon.tech</a> and create a new project.</li>
            <li>From the dashboard, copy the connection string (starts with <code>postgres://</code>).</li>
            <li>Make sure it's the direct (non-pooled) connection for migrations.</li>
          </ol>

          <h3>Step 2 — Paste the build prompt</h3>
          <p>In your coding agent, paste the entire contents of <code>prompt.md</code> as your first message. The agent will:</p>
          <ol>
            <li>Read <code>master_prompt.md</code>, <code>design-style-guide.md</code>, <code>jb-components.md</code>, <code>project-description.md</code>, <code>project-phases.md</code></li>
            <li>Plan Phase 1 tasks and start executing</li>
            <li>Stop after Phase 1 for your confirmation</li>
          </ol>

          <h3>Step 3 — Provide secrets when asked</h3>
          <p>The agent will create <code>.env.local</code> and ask for values. Provide:</p>
          <CopyBlock
            filename=".env.local"
            label="Phase 1 minimum env vars"
            code={`DATABASE_URL="postgres://USER:PASS@ep-xxx.neon.tech/neondb?sslmode=require"
BETTER_AUTH_SECRET="<run: openssl rand -base64 32>"
BETTER_AUTH_URL="http://localhost:3000"

# Optional but recommended for dev
RESEND_API_KEY=""
RESEND_FROM_EMAIL="onboarding@resend.dev"

# For Google OAuth
GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""`}
          />

          <h3>Step 4 — Run the migration</h3>
          <CopyBlock
            filename="terminal"
            label="Generate Prisma client + push schema to Neon"
            code={`pnpm db:push
pnpm db:generate`}
          />

          <h3>Step 5 — Start the dev server + verify</h3>
          <CopyBlock filename="terminal" label="Start dev" code={`pnpm dev`} />
          <p>Open <a href="http://localhost:3000" target="_blank" rel="noopener noreferrer">http://localhost:3000</a>. You should see:</p>
          <ul>
            <li>Landing → /auth/sign-in</li>
            <li>Sign up with email or Google works</li>
            <li>You land on /dashboard (currently empty)</li>
            <li>Sidebar layout with theme toggle (light/dark)</li>
          </ul>

          <Tip>
            Stuck? Tell the agent: <em>"Verify all of Phase 1's tasks are complete. Read project-phases.md and check off what's done."</em> If any are unfinished, it will fix them.
          </Tip>
        </ModuleSection>

        {/* MODULE 05 */}
        <ModuleSection slug="module-05" eyebrow="MODULE 05 · 45 min" title="Phase 2 — Tasks CRUD">
          <p>
            The core of the app. The agent will build the Tasks model, API routes, list page, forms, and dashboard cards.
          </p>

          <h3>Step 1 — Confirm Phase 1 done, start Phase 2</h3>
          <p>Tell the agent:</p>
          <CopyBlock
            label="Prompt"
            code={`Phase 1 is verified working. Proceed to Phase 2 — Core Features. Build the Task and Category Prisma models, the API routes (with auth guards + Zod), the /dashboard task list with the JB Data Table, the create/edit forms with React Hook Form + Zod, and the dashboard stat cards. Stop after Phase 2 is complete and ask me to verify.`}
          />

          <h3>Step 2 — Verify the schema</h3>
          <p>The agent should produce a Prisma schema like this. If it differs, ask for these exact fields:</p>
          <CopyBlock
            filename="prisma/schema.prisma"
            label="Tasks + Categories"
            code={`model Category {
  id        String   @id @default(cuid())
  name      String
  color     String   @default("#4F46E5")
  userId    String
  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  tasks     Task[]
  createdAt DateTime @default(now())
}

model Task {
  id          String     @id @default(cuid())
  title       String
  notes       String?
  dueDate     DateTime?
  priority    Priority   @default(MEDIUM)
  status      TaskStatus @default(OPEN)
  categoryId  String?
  category    Category?  @relation(fields: [categoryId], references: [id], onDelete: SetNull)
  userId      String
  user        User       @relation(fields: [userId], references: [id], onDelete: Cascade)
  createdAt   DateTime   @default(now())
  updatedAt   DateTime   @updatedAt
}

enum Priority { LOW MEDIUM HIGH }
enum TaskStatus { OPEN IN_PROGRESS DONE }`}
          />

          <h3>Step 3 — Test the CRUD flow</h3>
          <ol>
            <li>Create 2–3 categories (Work, Personal, Learning)</li>
            <li>Create 5+ tasks across categories with different priorities and due dates</li>
            <li>Mark some as Done, edit one, delete one</li>
            <li>Refresh the dashboard — stat cards should update</li>
            <li>Search by task title — should filter live (React Query)</li>
          </ol>

          <Tip>
            See <code>useEffect</code> for data fetching anywhere? Tell the agent: <em>"Replace useEffect data fetching with useQuery from @tanstack/react-query in [file]. The master_prompt forbids useEffect for data."</em>
          </Tip>
        </ModuleSection>

        {/* MODULE 06 */}
        <ModuleSection slug="module-06" eyebrow="MODULE 06 · 20 min" title="Phase 3 — Polish (PDF export + filters)">
          <p>
            Add the production touches. PDF export shows off <code>@react-pdf/renderer</code>, and filters give the dashboard real utility.
          </p>

          <h3>Step 1 — PDF export</h3>
          <CopyBlock
            label="Prompt"
            code={`Add a "Export Open Tasks to PDF" button on the /dashboard page (top-right of the page header). Use @react-pdf/renderer to build the PDF — page header has the user's name and date, then a table of open tasks with columns: Title, Category, Priority, Due Date. Use the existing design tokens (Inter font, indigo accent for headings). Trigger download client-side. Do not modify any other functionality.`}
          />

          <h3>Step 2 — Category + status filters on the task list</h3>
          <CopyBlock
            label="Prompt"
            code={`On the task list page, add two filter dropdowns above the data table: Category (All / each category) and Status (All / Open / In Progress / Done). The filters should live in the URL as query params (?category=&status=) so they survive page refresh. Use the existing JB Searchable Select component. Wire to the existing /api/tasks route by extending the search params on the server.`}
          />

          <h3>Step 3 — Quick-add input on the dashboard</h3>
          <CopyBlock
            label="Prompt"
            code={`Add a "Quick add task" input at the top of the /dashboard page above the stat cards. Press Enter to create a task with the typed title (defaults: priority MEDIUM, status OPEN, no category). Optimistic update — the task appears immediately, then reconciles with the server response via React Query.`}
          />

          <Tip>
            Test on mobile! Open Chrome devtools → toggle device toolbar → 375px width. Your design-style-guide.md should already make it responsive, but the dashboard cards sometimes need a tweak.
          </Tip>
        </ModuleSection>

        {/* MODULE 07 */}
        <ModuleSection slug="module-07" eyebrow="MODULE 07 · 30 min" title="Pre-deploy review">
          <p>
            This is the highest-value step in the whole framework. Skipping it is how SaaS projects ship with unauthenticated routes.
          </p>

          <h3>Step 1 — Run the audit</h3>
          <p>
            Open <a href="/docs/quickstart#step-7">Step 7 of the quickstart</a> (or grab <code>pre-deploy-review.md</code> from your project root). Paste the entire prompt into your coding agent.
          </p>

          <h3>Step 2 — Review the report</h3>
          <p>The agent writes findings to <code>pre-deploy-review-report.md</code>. Expect to see issues like:</p>
          <ul>
            <li><strong>Critical</strong> — missing rate limiting on auth endpoints, unauthenticated routes (rare with VibeKit but possible)</li>
            <li><strong>High</strong> — N+1 queries on the dashboard stat cards, missing indexes on `dueDate`</li>
            <li><strong>Medium</strong> — verbose console.log in production paths, missing Suspense boundaries</li>
          </ul>

          <h3>Step 3 — Address every Critical</h3>
          <p>For each Critical, paste back to the agent:</p>
          <CopyBlock
            label="Prompt"
            code={`Fix Critical issue #1 from pre-deploy-review-report.md. Apply the suggested fix exactly, run a quick test, and confirm the issue is resolved. Do not introduce new changes outside the scope of this fix.`}
          />

          <h3>Step 4 — Re-run until zero Criticals</h3>
          <p>After fixing, paste the audit prompt again. Iterate until the Critical count is 0. High and Medium can wait until after launch.</p>
        </ModuleSection>

        {/* MODULE 08 */}
        <ModuleSection slug="module-08" eyebrow="MODULE 08 · 20 min" title="Deploy to Vercel">
          <p>The home stretch. Push to GitHub, link to Vercel, set env vars, point a domain.</p>

          <h3>Step 1 — Push to GitHub</h3>
          <CopyBlock
            filename="terminal"
            label="Initial commit + push"
            code={`git init
git add .
git commit -m "Initial commit — TaskFlow built with VibeKit"
gh repo create taskflow --private --source=. --push
# OR manually create a repo on github.com and:
# git remote add origin https://github.com/YOU/taskflow.git
# git push -u origin main`}
          />

          <h3>Step 2 — Import to Vercel</h3>
          <ol>
            <li>Go to <a href="https://vercel.com/new" target="_blank" rel="noopener noreferrer">vercel.com/new</a></li>
            <li>Import the <code>taskflow</code> repo</li>
            <li>Framework preset: <strong>Next.js</strong> (auto-detected)</li>
            <li>Build command: <code>prisma generate &amp;&amp; prisma migrate deploy &amp;&amp; next build</code></li>
            <li>Don't deploy yet — set env vars first</li>
          </ol>

          <h3>Step 3 — Set production env vars</h3>
          <CopyBlock
            filename="Vercel → Project → Settings → Environment Variables"
            label="Production env"
            code={`DATABASE_URL=<your Neon prod connection string>
BETTER_AUTH_SECRET=<a NEW 32+ char string, NOT the dev one>
BETTER_AUTH_URL=https://taskflow.vercel.app
RESEND_API_KEY=<from resend.com>
RESEND_FROM_EMAIL=noreply@taskflow.com
GOOGLE_CLIENT_ID=<from Google Cloud Console>
GOOGLE_CLIENT_SECRET=<from Google Cloud Console>
NEXT_PUBLIC_APP_URL=https://taskflow.vercel.app`}
          />

          <h3>Step 4 — Add OAuth redirect URI</h3>
          <p>In Google Cloud Console → APIs & Services → Credentials → your OAuth client → Authorized redirect URIs, add:</p>
          <CopyBlock
            label="Production redirect"
            code={`https://taskflow.vercel.app/api/auth/callback/google`}
          />

          <h3>Step 5 — Deploy</h3>
          <p>Hit <strong>Deploy</strong>. Wait ~2 minutes. Visit the URL and run through the full flow:</p>
          <ul>
            <li>Sign up with email + verify the welcome email lands</li>
            <li>Sign in with Google</li>
            <li>Create tasks, mark done, export PDF</li>
            <li>Toggle dark mode</li>
            <li>Test on mobile</li>
          </ul>

          <h3>Step 6 — Custom domain (optional)</h3>
          <ol>
            <li>Buy a domain on Cloudflare Registrar (or your provider)</li>
            <li>In Vercel: Settings → Domains → add your domain</li>
            <li>In Cloudflare DNS: add the CNAME / A records Vercel shows you (set to <strong>DNS only</strong>, not proxied)</li>
            <li>Update <code>BETTER_AUTH_URL</code> and <code>NEXT_PUBLIC_APP_URL</code> to the custom domain</li>
            <li>Update Google OAuth redirect URI to the custom domain</li>
            <li>Redeploy</li>
          </ol>

          <div className="my-8 rounded-md border-2 border-[color:var(--accent)]/40 bg-[color:var(--accent-soft)] p-6">
            <h3 className="font-mono text-[12px] uppercase tracking-wider text-[color:var(--accent)] mt-0">
              You shipped it.
            </h3>
            <p className="mt-3 text-[15px] text-[color:var(--text-primary)]">
              That's a real SaaS, deployed to a custom domain, with auth, payments-ready, audited for security. Not a tutorial toy.
            </p>
            <p className="mt-3 text-[14px] text-[color:var(--text-secondary)]">
              Share what you built in the <a href={SITE.community} target="_blank" rel="noopener noreferrer" className="text-[color:var(--accent)] underline">community</a> — and tag it with <code>#shipped-with-vibekit</code>.
            </p>
          </div>
        </ModuleSection>

        {/* Next steps */}
        <Section
          eyebrow="WHAT'S NEXT"
          title="Take it further."
          description="The skills you just learned scale to anything. Some natural next steps:"
          containerClassName="max-w-3xl"
        >
          <ul className="grid gap-3 sm:grid-cols-2">
            {[
              { title: "Add Stripe billing", body: "Install JB Stripe UI + Zustand Cart. Gate features behind subscription status. ~1 hour." },
              { title: "Mobile money checkout", body: "Install JB DGateway Shop for African market payments. ~45 min." },
              { title: "AI features", body: "Add task suggestions or auto-categorization with the Vercel AI SDK. ~1 hour." },
              { title: "File uploads", body: "Add task attachments with JB File Storage UI (R2 or S3). ~30 min." },
              { title: "Build something else", body: "Restart from Module 02 with a new app idea. The flow is repeatable." },
              { title: "Contribute a component", body: "Built something reusable? Add it to the JB Component Registry." },
            ].map((n) => (
              <li
                key={n.title}
                className="rounded-md border border-[color:var(--border)] bg-[color:var(--bg-elevated)] p-5"
              >
                <h3 className="font-mono text-[13px] uppercase tracking-tight text-[color:var(--text-primary)]">
                  {n.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-[color:var(--text-secondary)]">
                  {n.body}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
            <Button href="/components" variant="accent" size="md">
              Browse all components
            </Button>
            <Button href="/contribute" variant="outline" size="md">
              <GitBranch className="h-4 w-4" />
              Contribute a component
            </Button>
            <Button href={SITE.community} variant="outline" size="md">
              Join the community
            </Button>
          </div>
        </Section>
      </main>
      <Footer />

      {/* HowTo + Course schema for AEO */}
      <Script
        id="ld-tutorial"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "Build a SaaS with VibeKit — TaskFlow crash course",
            description:
              "Build and deploy TaskFlow, a personal task manager with auth, dashboard, filters, PDF export, and custom domain — using VibeKit + Claude Code.",
            totalTime: "PT3H",
            tool: [
              { "@type": "HowToTool", name: "Claude (claude.ai)" },
              { "@type": "HowToTool", name: "Claude Code or Cursor" },
              { "@type": "HowToTool", name: "Neon Postgres" },
              { "@type": "HowToTool", name: "Vercel" },
            ],
            step: modules.map((m, i) => ({
              "@type": "HowToStep",
              position: i + 1,
              name: m.title,
              text: m.intro,
              url: `${SITE.url}/tutorial#module-${String(i + 1).padStart(2, "0")}`,
            })),
          }),
        }}
      />
    </>
  );
}

/* ─────────────────────────────────────────────────────────── */
/* Local helpers                                               */
/* ─────────────────────────────────────────────────────────── */

function ModuleSection({
  slug,
  eyebrow,
  title,
  children,
}: {
  slug: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={slug}
      className="relative scroll-mt-24 border-t border-[color:var(--border)] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <header className="border-b border-[color:var(--border)] pb-8">
          <div className="font-mono text-[11px] uppercase tracking-wider text-[color:var(--accent)]">
            {eyebrow}
          </div>
          <h2 className="mt-3 font-mono text-[clamp(1.75rem,4vw,2.5rem)] font-bold uppercase tracking-tight text-[color:var(--text-primary)]">
            {title}
          </h2>
        </header>
        <div
          className="mt-8 space-y-5 text-[15.5px] leading-[1.75] text-[color:var(--text-secondary)]
            [&_h3]:font-mono [&_h3]:text-[14px] [&_h3]:uppercase [&_h3]:tracking-tight [&_h3]:text-[color:var(--text-primary)] [&_h3]:mt-10 [&_h3]:mb-2
            [&_strong]:text-[color:var(--text-primary)] [&_strong]:font-medium
            [&_a]:text-[color:var(--accent)] [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:no-underline
            [&_code]:font-mono [&_code]:text-[13.5px] [&_code]:rounded [&_code]:border [&_code]:border-[color:var(--border)] [&_code]:bg-[color:var(--bg-elevated)] [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:text-[color:var(--text-primary)]
            [&_ol]:list-decimal [&_ol]:pl-6 [&_ol_li]:my-2
            [&_ul]:list-disc [&_ul]:pl-6 [&_ul_li]:my-2"
        >
          {children}
        </div>
      </div>
    </section>
  );
}

function Tip({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-6 rounded-md border-l-2 border-[color:var(--accent)] bg-[color:var(--accent-soft)] p-4">
      <div className="font-mono text-[10px] uppercase tracking-wider text-[color:var(--accent)]">
        Tip
      </div>
      <div className="mt-2 text-[14px] leading-relaxed text-[color:var(--text-primary)] [&_em]:not-italic [&_em]:rounded [&_em]:bg-[color:var(--bg-elevated)] [&_em]:px-1.5 [&_em]:py-0.5 [&_em]:font-mono [&_em]:text-[12.5px]">
        {children}
      </div>
    </div>
  );
}

function Checklist({
  items,
}: {
  items: { name: string; url: string; note?: string }[];
}) {
  return (
    <ul className="not-prose mt-4 grid gap-2 sm:grid-cols-2 list-none pl-0">
      {items.map((item) => (
        <li key={item.name} className="rounded-md border border-[color:var(--border)] bg-[color:var(--bg-elevated)] p-4">
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[14px] font-medium text-[color:var(--text-primary)] hover:text-[color:var(--accent)]"
          >
            {item.name}
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
          {item.note ? (
            <div className="mt-1 text-[12.5px] text-[color:var(--text-tertiary)]">{item.note}</div>
          ) : null}
        </li>
      ))}
    </ul>
  );
}
