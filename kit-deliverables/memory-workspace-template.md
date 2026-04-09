# Memory + Workspace Template for OpenClaw

> How to organize your agent's memory and your working files so future sessions don't start blind.

---

## Why this matters

Every time you start a new session with OpenClaw, the agent wakes up fresh. It doesn't remember what you worked on yesterday unless:
1. It saved something to persistent memory
2. You have notes/files it can read
3. Your workspace is organized enough for it to pick up context

This template gives you a simple, repeatable structure that prevents the "who are you and what were we doing?" problem.

---

## Workspace structure

```
~/openclaw-workspace/
├── memory/               ← agent's persistent memory (auto-managed)
├── notes/                ← your notes and the agent's notes
│   ├── daily/            ← daily session logs
│   │   ├── 2026-04-09.md
│   │   └── 2026-04-10.md
│   └── durable/          ← things that should survive months
│       ├── preferences.md
│       ├── conventions.md
│       └── lessons.md
├── projects/             ← active project folders
│   ├── landing-page/
│   └── setup-kit/
├── templates/            ← reusable templates
│   ├── daily-note.md
│   └── launch-checklist.md
└── archive/              ← completed or paused work
```

**Key principle:** One place for active work, one place for memory, one place for done stuff. Don't mix them.

---

## Daily note template

Create one of these per working session. Save it to `notes/daily/YYYY-MM-DD.md`.

```markdown
# [DATE]

## What happened
- [What you and the agent worked on]
- [Decisions made]
- [Things deployed or shipped]

## What changed
- [Files modified]
- [Configs updated]
- [New tools or integrations set up]

## Blockers
- [Anything that stopped progress]
- [Things that need follow-up]

## Carry forward
- [Tasks for next session]
- [Context the next session needs to know]
```

**Tip:** At the end of each session, tell the agent: "Write a handoff note for next session." It will create a summary with enough context for a fresh session to pick up.

---

## Durable memory notes

These are facts that should survive across many sessions. Keep them in `notes/durable/`.

### preferences.md
```markdown
# Preferences

## Communication
- I prefer direct answers, no filler
- Show me the command before running it on anything important
- Don't apologize for errors, just fix them

## Technical
- I use macOS with Homebrew
- Default to TypeScript for web projects
- Deploy to GitHub Pages unless I say otherwise
- Use Tailwind for styling

## Projects
- Main project: [name] in ~/projects/[name]
- Side project: [name] in ~/projects/[name]

## Off limits
- Don't touch ~/Documents/personal/
- Don't send emails without showing me the draft first
```

### conventions.md
```markdown
# Conventions

## Git
- Branch naming: feature/[short-description]
- Commit messages: conventional commits (feat:, fix:, docs:)
- Always push to a branch, never force-push main

## File naming
- Lowercase with dashes: my-project-name
- Markdown for docs, TypeScript for code
- Keep READMEs updated

## Deployment
- GitHub Pages for static sites
- Vercel for Next.js apps that need SSR
- Always verify the live URL after deploy
```

### lessons.md
```markdown
# Lessons learned

## [Date] — [What happened]
- [What went wrong or what was discovered]
- [How it was fixed]
- [What to do differently next time]

## Examples:
## 2026-04-09 — Vercel build failed for static export
- Vercel Analytics component doesn't work on GitHub Pages
- Fix: remove @vercel/analytics, use Plausible or GA4 instead
- Lesson: check if dependencies are platform-specific before adding them

## 2026-04-09 — Stripe Payment Links vs Checkout Sessions
- Payment Links are the fastest path to live checkout (no code needed)
- Checkout Sessions give more control but require a server
- Lesson: start with Payment Links, upgrade to Checkout Sessions when you need post-purchase automation
```

---

## Agent memory vs your notes

| | Agent memory | Your notes |
|--|-------------|------------|
| **Who writes it** | The agent (via memory tool) | You or the agent |
| **Where it lives** | `~/.openclaw/memory/` or similar | `~/openclaw-workspace/notes/` |
| **When it's read** | Automatically every session | When the agent reads the file |
| **Best for** | Compact facts, preferences, corrections | Detailed context, session logs, project state |
| **Size** | Keep small (< 2KB total) | As long as needed |

**Rule of thumb:** Agent memory = facts that fit in a sentence. Notes = everything else.

---

## Session startup ritual

When you start a new session, give the agent orientation:

```
Read ~/openclaw-workspace/notes/daily/ and tell me what we 
were working on last. Then check the carry-forward items.
```

Or even simpler:

```
Pick up where we left off.
```

If your daily notes are organized, the agent can reconstruct context in seconds.

---

## Launch checklist template

Save this to `templates/launch-checklist.md` and copy it for each new project:

```markdown
# Launch checklist: [Project name]

## Pre-launch
- [ ] Landing page copy finalized
- [ ] Pricing set and payment links working
- [ ] OG image created (1200x630)
- [ ] Analytics installed
- [ ] Contact email visible
- [ ] Mobile responsive check
- [ ] All links tested (especially checkout)

## Launch
- [ ] Deployed to production URL
- [ ] Verified live URL loads correctly
- [ ] Tested checkout flow end-to-end
- [ ] Social sharing preview checked (use https://opengraph.xyz)

## Post-launch
- [ ] Launch post written and published
- [ ] Shared in 2-3 relevant communities
- [ ] Analytics verified (events coming in)
- [ ] First feedback collected
- [ ] Follow-up tasks documented
```

---

## Quick setup

Run these to create the structure:

```bash
mkdir -p ~/openclaw-workspace/{memory,notes/daily,notes/durable,projects,templates,archive}
```

Then tell your agent:

```
My workspace is at ~/openclaw-workspace. 
Read notes/durable/preferences.md for my setup preferences.
Write daily session notes to notes/daily/.
```

---

*Organization is not overhead. It's the difference between an agent that remembers and one that starts from zero every time.*
