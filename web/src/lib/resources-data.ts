export type ResourceCategory =
  | "registries"
  | "blocks"
  | "templates"
  | "themes"
  | "components"
  | "animation"
  | "forms"
  | "tables"
  | "ai"
  | "auth"
  | "tools"
  | "docs"
  | "icons"
  | "blog"
  | "platforms"
  | "showcase";

export type Resource = {
  slug: string;
  name: string;
  description: string;
  url: string;
  category: ResourceCategory;
  categoryLabel: string;
  tags: string[];
  author?: string;
};

export const resourceCategories: { value: ResourceCategory | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "registries", label: "Registries" },
  { value: "blocks", label: "Blocks" },
  { value: "templates", label: "Templates" },
  { value: "themes", label: "Themes" },
  { value: "components", label: "Components" },
  { value: "animation", label: "Animation" },
  { value: "forms", label: "Forms" },
  { value: "tables", label: "Tables" },
  { value: "ai", label: "AI" },
  { value: "auth", label: "Auth" },
  { value: "tools", label: "Tools" },
  { value: "docs", label: "Docs" },
  { value: "icons", label: "Icons" },
  { value: "blog", label: "Blog" },
  { value: "platforms", label: "Platforms" },
  { value: "showcase", label: "Showcase" },
];

/**
 * Curated from https://github.com/birobirobiro/awesome-shadcn-ui
 * Picked for production usefulness rather than exhaustive coverage.
 */
export const resources: Resource[] = [
  /* ─── Registries ─── */
  {
    slug: "shadcn-ui",
    name: "shadcn/ui",
    description: "The original component collection. Beautifully designed, accessible components you copy into your project.",
    url: "https://ui.shadcn.com",
    category: "registries",
    categoryLabel: "Registry",
    tags: ["official", "components", "tailwind", "radix"],
    author: "shadcn",
  },
  {
    slug: "21st-dev",
    name: "21st.dev",
    description: "The Npm for Design Engineers — a registry of community-built shadcn-compatible components, blocks, and animations.",
    url: "https://21st.dev",
    category: "registries",
    categoryLabel: "Registry",
    tags: ["community", "blocks", "animations"],
  },
  {
    slug: "magic-ui",
    name: "Magic UI",
    description: "150+ animated React components, blocks, and templates built with React, TypeScript, and Tailwind.",
    url: "https://magicui.design",
    category: "registries",
    categoryLabel: "Registry",
    tags: ["animations", "components", "tailwind"],
  },
  {
    slug: "aceternity-ui",
    name: "Aceternity UI",
    description: "Visually stunning, animated React components — landing-page heroes, hover effects, scroll animations.",
    url: "https://ui.aceternity.com",
    category: "registries",
    categoryLabel: "Registry",
    tags: ["animations", "marketing"],
  },
  {
    slug: "originui",
    name: "Origin UI",
    description: "An extensive collection of copy-and-paste components — buttons, forms, navigation, payment widgets.",
    url: "https://originui.com",
    category: "registries",
    categoryLabel: "Registry",
    tags: ["components", "forms", "navigation"],
  },
  {
    slug: "tweakcn",
    name: "TweakCN",
    description: "Visual theme editor for shadcn/ui. Tweak colors, fonts, radii live and export the CSS variables.",
    url: "https://tweakcn.com",
    category: "registries",
    categoryLabel: "Tool",
    tags: ["theme", "editor", "live"],
  },
  {
    slug: "shadcn-blocks",
    name: "shadcnblocks",
    description: "600+ premium and free shadcn-style blocks — heroes, features, pricing, footers, more.",
    url: "https://www.shadcnblocks.com",
    category: "blocks",
    categoryLabel: "Blocks",
    tags: ["blocks", "marketing", "heroes"],
  },
  {
    slug: "kibo-ui",
    name: "Kibo UI",
    description: "Themed component library extending shadcn/ui — tables, status, kanban, AI patterns.",
    url: "https://www.kibo-ui.com",
    category: "components",
    categoryLabel: "Components",
    tags: ["extensions", "ai", "kanban"],
  },
  {
    slug: "indie-ui",
    name: "Indie UI",
    description: "Beautifully crafted UI components for indie hackers and SaaS builders.",
    url: "https://ui.indie-starter.dev",
    category: "components",
    categoryLabel: "Components",
    tags: ["saas", "indie"],
  },
  {
    slug: "kokonut-ui",
    name: "Kokonut UI",
    description: "300+ free open-source components and blocks for shadcn/ui.",
    url: "https://kokonutui.com",
    category: "components",
    categoryLabel: "Components",
    tags: ["free", "open-source"],
  },
  {
    slug: "tailark",
    name: "Tailark",
    description: "Modern, responsive, pre-built marketing UI blocks — heroes, pricing, testimonials, CTA.",
    url: "https://tailark.com",
    category: "blocks",
    categoryLabel: "Blocks",
    tags: ["marketing", "blocks"],
  },
  {
    slug: "shsfui",
    name: "shsf UI",
    description: "Pre-styled, animated components and elements for Next.js + shadcn/ui projects.",
    url: "https://shsfui.com",
    category: "animation",
    categoryLabel: "Animation",
    tags: ["animations", "next.js"],
  },

  /* ─── Templates / Boilerplates ─── */
  {
    slug: "next-shadcn-dashboard",
    name: "Next Shadcn Dashboard Starter",
    description: "Production-ready Next.js admin dashboard with shadcn/ui, auth, and Kanban — solid starting point.",
    url: "https://github.com/Kiranism/next-shadcn-dashboard-starter",
    category: "templates",
    categoryLabel: "Template",
    tags: ["dashboard", "admin", "starter"],
  },
  {
    slug: "shadcn-landing-page",
    name: "Shadcn Landing Page",
    description: "Free open-source landing page template built with shadcn/ui, React, TypeScript, and Tailwind.",
    url: "https://github.com/leoMirandaa/shadcn-landing-page",
    category: "templates",
    categoryLabel: "Template",
    tags: ["landing", "marketing", "free"],
  },
  {
    slug: "shadcn-admin",
    name: "Shadcn Admin Dashboard",
    description: "Admin Dashboard UI crafted with Shadcn and Vite. Built for SaaS dashboards and back-office tools.",
    url: "https://github.com/satnaing/shadcn-admin",
    category: "templates",
    categoryLabel: "Template",
    tags: ["admin", "vite", "dashboard"],
  },
  {
    slug: "magicui-portfolio",
    name: "MagicUI Portfolio",
    description: "Personal developer portfolio template — single config file, blog support, Vercel-deployable in one click.",
    url: "https://github.com/dillionverma/portfolio",
    category: "templates",
    categoryLabel: "Template",
    tags: ["portfolio", "developer", "magic-ui"],
  },
  {
    slug: "horizon-ai-template",
    name: "Horizon AI Boilerplate",
    description: "Trendiest open-source AI ChatGPT Boilerplate built with Next.js + Shadcn UI + Chakra UI.",
    url: "https://horizon-ai-template.vercel.app",
    category: "templates",
    categoryLabel: "Template",
    tags: ["ai", "chatgpt", "boilerplate"],
  },
  {
    slug: "saas-fly",
    name: "SaaS Fly",
    description: "Enterprise-grade SaaS starter with Next.js 14, Auth.js, Stripe, Vercel AI SDK, Drizzle.",
    url: "https://github.com/saasfly/saasfly",
    category: "templates",
    categoryLabel: "Template",
    tags: ["saas", "starter", "stripe"],
  },
  {
    slug: "supastarter",
    name: "Supastarter",
    description: "Production-ready Next.js starter with auth, billing, multi-tenant teams, and i18n.",
    url: "https://supastarter.dev",
    category: "templates",
    categoryLabel: "Template",
    tags: ["saas", "billing", "i18n"],
  },

  /* ─── Themes ─── */
  {
    slug: "tweakcn-themes",
    name: "TweakCN Themes",
    description: "Browse and import community-made themes for shadcn/ui — copy CSS vars, drop into your globals.css.",
    url: "https://tweakcn.com/themes",
    category: "themes",
    categoryLabel: "Themes",
    tags: ["theme", "colors", "tokens"],
  },
  {
    slug: "ui-colors",
    name: "ui colors",
    description: "Generate Tailwind-compatible color scales from a base hex. Outputs shadcn-ready CSS variables.",
    url: "https://uicolors.app/create",
    category: "themes",
    categoryLabel: "Themes",
    tags: ["colors", "tokens", "tailwind"],
  },
  {
    slug: "shadcn-themes",
    name: "shadcn themes",
    description: "Community-curated theme directory with one-click copy.",
    url: "https://shadcn-themes.vercel.app",
    category: "themes",
    categoryLabel: "Themes",
    tags: ["theme", "directory"],
  },

  /* ─── Animation ─── */
  {
    slug: "motion-primitives",
    name: "Motion Primitives",
    description: "UI kit of animated React components — built with Motion (Framer Motion), Tailwind, and shadcn/ui patterns.",
    url: "https://motion-primitives.com",
    category: "animation",
    categoryLabel: "Animation",
    tags: ["motion", "framer-motion", "components"],
  },
  {
    slug: "react-bits",
    name: "React Bits",
    description: "Animated, interactive UI components — drop-in for React projects.",
    url: "https://reactbits.dev",
    category: "animation",
    categoryLabel: "Animation",
    tags: ["interactive", "react"],
  },
  {
    slug: "anim-ui",
    name: "Anim UI",
    description: "Beautifully animated shadcn/ui components — compatible with Aceternity, Magic UI, and others.",
    url: "https://animui.dev",
    category: "animation",
    categoryLabel: "Animation",
    tags: ["animations"],
  },

  /* ─── Forms ─── */
  {
    slug: "react-hook-form",
    name: "React Hook Form",
    description: "Performant, flexible, extensible forms with easy-to-use validation. The form library shadcn forms wrap.",
    url: "https://react-hook-form.com",
    category: "forms",
    categoryLabel: "Forms",
    tags: ["forms", "validation"],
  },
  {
    slug: "zod",
    name: "Zod",
    description: "TypeScript-first schema validation. Use it for form validation, API request bodies, and parsing.",
    url: "https://zod.dev",
    category: "forms",
    categoryLabel: "Validation",
    tags: ["validation", "typescript", "schema"],
  },
  {
    slug: "shadcn-form-build",
    name: "shadcn/ui Form Build",
    description: "Visual form builder for shadcn/ui — drag fields, get the React Hook Form + Zod code.",
    url: "https://www.shadcn-form.com",
    category: "forms",
    categoryLabel: "Forms",
    tags: ["builder", "no-code", "rhf"],
  },

  /* ─── Tables ─── */
  {
    slug: "tanstack-table",
    name: "TanStack Table",
    description: "Headless table library powering most shadcn/ui data tables — sorting, filtering, pagination, server-side everything.",
    url: "https://tanstack.com/table/latest",
    category: "tables",
    categoryLabel: "Tables",
    tags: ["table", "headless"],
  },
  {
    slug: "shadcn-table",
    name: "shadcn-table",
    description: "Production-ready data table example for shadcn/ui — server-side pagination, filters, search, columns.",
    url: "https://github.com/sadmann7/shadcn-table",
    category: "tables",
    categoryLabel: "Tables",
    tags: ["table", "tanstack", "pagination"],
  },

  /* ─── AI ─── */
  {
    slug: "vercel-ai-sdk",
    name: "Vercel AI SDK",
    description: "TypeScript toolkit for building AI-powered apps — streaming, tool calls, RAG, multi-provider.",
    url: "https://sdk.vercel.ai",
    category: "ai",
    categoryLabel: "AI",
    tags: ["ai", "streaming", "vercel"],
  },
  {
    slug: "shadcn-chat",
    name: "shadcn-chat",
    description: "Customizable, reusable chat components for shadcn/ui — message bubbles, threads, input bars.",
    url: "https://github.com/jakobhoeg/shadcn-chat",
    category: "ai",
    categoryLabel: "AI / Chat",
    tags: ["chat", "ai", "messaging"],
  },
  {
    slug: "ai-elements",
    name: "AI Elements",
    description: "shadcn-style AI UI primitives — message lists, suggestions, citation chips, code blocks with streaming.",
    url: "https://ai-sdk.dev/elements",
    category: "ai",
    categoryLabel: "AI / UI",
    tags: ["ai", "ui", "primitives"],
  },

  /* ─── Auth ─── */
  {
    slug: "better-auth",
    name: "Better Auth",
    description: "The most comprehensive auth library for TypeScript — used by VibeKit. Email, OAuth, OTP, magic links, MFA.",
    url: "https://www.better-auth.com",
    category: "auth",
    categoryLabel: "Auth",
    tags: ["auth", "typescript", "oauth"],
  },
  {
    slug: "clerk",
    name: "Clerk",
    description: "Hosted authentication with prebuilt React components — sign-in, sign-up, user profile, organizations.",
    url: "https://clerk.com",
    category: "auth",
    categoryLabel: "Auth",
    tags: ["auth", "hosted", "saas"],
  },

  /* ─── Tools ─── */
  {
    slug: "shadcn-cli",
    name: "shadcn CLI",
    description: "The official shadcn CLI — `npx shadcn add` to install components from any compatible registry.",
    url: "https://ui.shadcn.com/docs/cli",
    category: "tools",
    categoryLabel: "Tool",
    tags: ["cli", "official", "install"],
  },
  {
    slug: "v0-dev",
    name: "v0",
    description: "Vercel's AI UI generator — describe your component, get shadcn/ui code.",
    url: "https://v0.dev",
    category: "tools",
    categoryLabel: "Tool",
    tags: ["ai", "generator", "vercel"],
  },
  {
    slug: "shadcn-registry-template",
    name: "shadcn Registry Template",
    description: "Starter template for building your own shadcn-compatible component registry.",
    url: "https://github.com/shadcn-ui/registry-template",
    category: "tools",
    categoryLabel: "Tool",
    tags: ["registry", "template", "official"],
  },

  /* ─── Docs ─── */
  {
    slug: "fumadocs",
    name: "Fumadocs",
    description: "The beautiful Next.js docs framework — used by shadcn, Better Auth, and many others.",
    url: "https://fumadocs.dev",
    category: "docs",
    categoryLabel: "Docs",
    tags: ["docs", "next.js", "mdx"],
  },
  {
    slug: "nextra",
    name: "Nextra",
    description: "Next.js-based static site generator for documentation and blogs.",
    url: "https://nextra.site",
    category: "docs",
    categoryLabel: "Docs",
    tags: ["docs", "next.js", "ssg"],
  },

  /* ─── Icons ─── */
  {
    slug: "lucide",
    name: "Lucide Icons",
    description: "Beautiful, consistent icon set — the default icon library for shadcn/ui projects.",
    url: "https://lucide.dev",
    category: "icons",
    categoryLabel: "Icons",
    tags: ["icons", "default"],
  },
  {
    slug: "tabler-icons",
    name: "Tabler Icons",
    description: "5,000+ free open-source SVG icons — pixel-perfect at small sizes.",
    url: "https://tabler.io/icons",
    category: "icons",
    categoryLabel: "Icons",
    tags: ["icons", "free"],
  },
  {
    slug: "phosphor-icons",
    name: "Phosphor Icons",
    description: "Flexible icon family with six weights — Thin, Light, Regular, Bold, Fill, Duotone.",
    url: "https://phosphoricons.com",
    category: "icons",
    categoryLabel: "Icons",
    tags: ["icons", "weights"],
  },

  /* ─── Blog / Article platforms ─── */
  {
    slug: "fumadocs-blog",
    name: "Fumadocs Blog Template",
    description: "MDX-powered blog template using Fumadocs — what we use in the VibeKit blog template.",
    url: "https://github.com/fuma-nama/fumadocs",
    category: "blog",
    categoryLabel: "Blog",
    tags: ["mdx", "blog", "fumadocs"],
  },
  {
    slug: "contentlayer",
    name: "Contentlayer",
    description: "Type-safe content for Next.js — turns Markdown/MDX into typed data you import.",
    url: "https://contentlayer.dev",
    category: "blog",
    categoryLabel: "Content",
    tags: ["mdx", "content", "typed"],
  },

  /* ─── Platforms ─── */
  {
    slug: "vercel",
    name: "Vercel",
    description: "Deployment platform built for Next.js — preview URLs, edge functions, zero-config Postgres.",
    url: "https://vercel.com",
    category: "platforms",
    categoryLabel: "Hosting",
    tags: ["deploy", "next.js"],
  },
  {
    slug: "neon",
    name: "Neon",
    description: "Serverless Postgres with branching — free tier, instant cold starts, the database VibeKit defaults to.",
    url: "https://neon.tech",
    category: "platforms",
    categoryLabel: "Database",
    tags: ["postgres", "serverless"],
  },
  {
    slug: "resend",
    name: "Resend",
    description: "Email API for developers — React Email components, great deliverability, generous free tier.",
    url: "https://resend.com",
    category: "platforms",
    categoryLabel: "Email",
    tags: ["email", "transactional"],
  },
  {
    slug: "uploadthing",
    name: "UploadThing",
    description: "File uploads for Next.js — drop-in components, signed URLs, generous free tier.",
    url: "https://uploadthing.com",
    category: "platforms",
    categoryLabel: "Files",
    tags: ["uploads", "files"],
  },
  {
    slug: "cloudflare-r2",
    name: "Cloudflare R2",
    description: "S3-compatible object storage with zero egress fees. The other option for VibeKit file uploads.",
    url: "https://www.cloudflare.com/developer-platform/products/r2",
    category: "platforms",
    categoryLabel: "Files",
    tags: ["s3", "storage", "cloudflare"],
  },
  {
    slug: "stripe",
    name: "Stripe",
    description: "Payment infrastructure for the internet — checkout, subscriptions, webhooks, invoicing.",
    url: "https://stripe.com",
    category: "platforms",
    categoryLabel: "Payments",
    tags: ["payments", "stripe"],
  },

  /* ─── Showcase ─── */
  {
    slug: "shadcn-showcase",
    name: "shadcn/ui Showcase",
    description: "Curated gallery of real apps built with shadcn/ui — for inspiration when designing your own.",
    url: "https://ui.shadcn.com/examples",
    category: "showcase",
    categoryLabel: "Showcase",
    tags: ["examples", "official"],
  },
  {
    slug: "awesome-shadcn-ui",
    name: "awesome-shadcn-ui",
    description: "The mother list. Hundreds of community-curated shadcn/ui resources, libraries, examples, and tools.",
    url: "https://github.com/birobirobiro/awesome-shadcn-ui",
    category: "showcase",
    categoryLabel: "Showcase",
    tags: ["awesome", "list", "github"],
    author: "birobirobiro",
  },
];
