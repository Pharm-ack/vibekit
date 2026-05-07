# VibeKit OG Image — Gemini Prompt

> Paste this into Gemini (or Imagen, Midjourney, ChatGPT image gen). Output dimensions: **1200 × 630**. Save as `web/public/og.png`.

---

## Primary prompt (recommended)

```
Create a 1200x630 social media OG image for "VibeKit" — a developer framework for building Next.js applications with Claude Code AI.

Composition:
- Wide cinematic 1200x630 ratio, dark mode aesthetic.
- Background: deep near-black (#0A0A09) with a very subtle warm gradient and faint noise texture (like Vercel's marketing pages).
- A soft, blurred radial glow in indigo/violet (#818CF8) emanating from the upper-center, fading to transparent.
- A faint geometric grid pattern in the background (like a subtle blueprint), masked by the radial glow so it fades at the edges.
- A 3D wireframe icosahedron (geodesic sphere) floating in the center-left, rendered in glowing white wireframe lines (#FAFAF9) with a hint of indigo inner glow. Slight isometric perspective. Modern, clean, no decorative complexity.

Foreground typography (right side, vertically centered):
- Top eyebrow: small uppercase monospace text "THE FRAMEWORK FOR VIBE CODERS" in muted gray (#6E6E68), letter-spacing wide.
- Main headline: large elegant serif (Instrument Serif or Spectral style), 2 lines:
  Line 1: "Ship production apps" — in warm white (#FAFAF9), weight 400, italic optional.
  Line 2: "with Claude Code" — same font, but the word "Claude Code" has a subtle indigo gradient (#FAFAF9 → #818CF8).
- Below the headline: small monospace pill-shaped chips reading "Next.js 16", "Prisma v7", "Better Auth", "React Query" — in muted gray with thin borders.
- Bottom-left corner: small "VK" logo (rounded square, #FAFAF9 background, #0A0A09 text) and "VibeKit" wordmark in serif beside it.
- Bottom-right corner: tiny "vibekit.desishub.com" in monospace gray.

Aesthetic references: Linear marketing site, Vercel OG images, agent.ai cream/black contrast, skills.dev typographic boldness. Clean, premium, tech-editorial. No emoji, no clipart, no gradients on text except the controlled one mentioned. Keep it minimal — let typography and the 3D shape carry the design.

Output: 1200x630 PNG, sharp, no text artifacts.
```

---

## Light mode variant (optional — for Twitter card variations)

```
Same composition as the dark version above, but inverted:
- Background: warm cream (#FAF8F5) with a very subtle violet glow (#4F46E5 at low opacity).
- Wireframe icosahedron in dark line color (#0F0F0E) with violet inner glow.
- Headline text in near-black (#0F0F0E), with "Claude Code" using the violet gradient (#0F0F0E → #4F46E5).
- Chips: thin gray borders, light gray text.
- VK logo: #0F0F0E square with #FAF8F5 text.
- Same typographic hierarchy, same fonts, 1200x630.
```

---

## Iteration tips

- If the icosahedron looks too busy, ask for "fewer triangle subdivisions, just the primary 20 faces."
- If the headline reads as flat, ask for "subtle text shadow at 0.04 opacity, no colored shadow."
- If the image feels generic, request: "add a single thin horizontal line above the eyebrow text, like an editorial tag rule."
- If colors clash, lock with: "use exactly #0A0A09 background, #FAFAF9 text, #818CF8 accent — no other colors except gray neutrals."

After generating, save as `web/public/og.png` (1200×630 PNG).
