# /vibekit Claude Code Skill

A Claude Code skill that auto-loads the VibeKit framework rules whenever Claude Code (or Cursor / Cline / any agent that supports skills) starts in a VibeKit project. The skill reinforces the form rules, JB component conventions, env-file requirements, and phase-by-phase build discipline.

When installed, you can trigger it explicitly by typing `/vibekit` in the agent, OR it loads automatically when the agent detects VibeKit framework files (`master_prompt.md`, `project-phases.md`, etc.) in the project root.

---

## Two install options

### Option A — Project-local (recommended)

Installs the skill inside your project's `.claude/skills/vibekit/` folder. The skill travels with the project — anyone who clones the repo gets it automatically.

```bash
# From your project root, after copying master_prompt.md / jb-components.md / pre-deploy-review.md
mkdir -p .claude/skills/vibekit
curl -fsSL https://raw.githubusercontent.com/MUKE-coder/vibekit/main/skill/SKILL.md \
  -o .claude/skills/vibekit/SKILL.md
```

**Or** if you've already cloned the VibeKit repo:

```bash
mkdir -p .claude/skills/vibekit
cp /tmp/vibekit/skill/SKILL.md .claude/skills/vibekit/SKILL.md
```

Commit it with the rest of your project so collaborators get the skill on `git clone`.

### Option B — Global (every Claude Code session)

Installs the skill at `~/.claude/skills/vibekit/`. It loads in every Claude Code session you start anywhere on your machine — useful if you build VibeKit projects often.

```bash
mkdir -p ~/.claude/skills/vibekit
curl -fsSL https://raw.githubusercontent.com/MUKE-coder/vibekit/main/skill/SKILL.md \
  -o ~/.claude/skills/vibekit/SKILL.md
```

You can have BOTH installed — project-local takes precedence over global if both exist.

---

## Verify it's loaded

After installing, restart Claude Code in your project. Type `/help` — you should see `vibekit` listed under available skills. Or just type `/vibekit` and it should activate.

---

## Updating the skill

The skill's content lives in [`skill/SKILL.md`](./SKILL.md) in this repo. To pull updates:

```bash
# Project-local
curl -fsSL https://raw.githubusercontent.com/MUKE-coder/vibekit/main/skill/SKILL.md \
  -o .claude/skills/vibekit/SKILL.md

# Global
curl -fsSL https://raw.githubusercontent.com/MUKE-coder/vibekit/main/skill/SKILL.md \
  -o ~/.claude/skills/vibekit/SKILL.md
```

---

## Where this fits in the VibeKit workflow

Install the skill in **Module 03 — Initialize the project** of the [tutorial](https://vibekit.desishub.com/tutorial), right after copying `master_prompt.md` and the other framework files into your project root. It's a one-line `curl` you run once per project.

If you skip the skill, VibeKit still works — the agent reads the framework files manually when you paste `prompt.md`. The skill just makes the rules fire automatically without a long paste.

---

## Other AI coding agents

The skill format is Claude Code-specific, but the patterns it enforces work anywhere. For other agents:

| Agent | What to do instead |
|---|---|
| **Cursor** | Save `SKILL.md` as `.cursorrules` (or in `.cursor/rules/` for newer versions) |
| **Cline** | Reference `master_prompt.md` in your custom instructions |
| **Windsurf** | Add `master_prompt.md` to the project context |
| **Aider** | Add `master_prompt.md` and `jb-components.md` to `.aider.conf.yml` aider files list |

The point is the same — get the rules into the agent's permanent context for the project so it doesn't drift mid-build.
