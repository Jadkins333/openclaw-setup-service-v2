# First Workflow Ideas for OpenClaw

> You got it running. Now make it useful. These are concrete patterns you can copy and run today.

---

## 1. Ship a simple landing page

**When to use:** You need a basic web page live on the internet in under an hour.

**Steps:**
1. Tell the agent: "Create a single-page site for [your thing]. Tailwind, dark theme, one CTA."
2. Let it scaffold an `index.html` (or Next.js page if you prefer)
3. Review the output, ask for edits ("make the headline shorter", "add a pricing section")
4. Deploy: "Push this to GitHub Pages" or "Deploy to Vercel"
5. Verify the URL loads

**What you learn:** How the agent handles file creation, iterative edits, and deployment.

**Pro tip:** Start with a project folder: `mkdir ~/projects/my-landing && cd ~/projects/my-landing` before asking the agent to build anything. Keeps things clean.

---

## 2. Inspect and understand a codebase

**When to use:** You cloned a repo or inherited a project and need to get oriented fast.

**Steps:**
1. Clone the repo: "Clone https://github.com/org/repo and tell me what this project does"
2. Ask for structure: "Show me the main entry points and what each top-level directory is for"
3. Go deeper: "What does the API layer look like? What routes exist?"
4. Find the pain: "Are there any obvious issues, outdated deps, or missing tests?"

**What you learn:** How to use the agent as a code exploration tool instead of reading docs for an hour.

---

## 3. Fix a specific bug or build error

**When to use:** Something is broken and you know roughly where, but the fix is annoying.

**Steps:**
1. Give the agent context: "This Next.js build is failing. Here's the error: [paste error]"
2. Let it read the relevant files and trace the problem
3. Review the proposed fix before applying
4. Ask it to build/test after the fix
5. Commit if it works: "Commit this with message 'fix: resolve hydration mismatch in layout'"

**What you learn:** The agent's debugging loop — read, hypothesize, fix, verify.

---

## 4. Automate a repetitive admin task

**When to use:** You keep doing the same terminal/browser workflow manually.

**Examples:**
- "Check if my SSL certs expire in the next 30 days"
- "Find all TODO comments across this project and list them with file and line number"
- "Download my latest bank statement PDF and extract the total"
- "Rename all files in this folder from UPPERCASE to lowercase with dashes"

**Steps:**
1. Describe the task plainly
2. Let the agent figure out the tool path (shell, browser, file ops)
3. Verify the result
4. If you'll do this again, ask: "Save this as a skill so we can reuse it"

---

## 5. Create a sellable digital asset

**When to use:** You want to make something you can sell — a template, guide, tool, or dataset.

**Steps:**
1. Pick a topic you know: "Create a [type of guide] for [audience]"
2. Let the agent draft the content in markdown
3. Iterate: "Make section 3 more practical", "Add a checklist at the end"
4. Export: "Convert this to a clean PDF" or package as a zip
5. Set up a payment link (Stripe, Gumroad, Lemon Squeezy)
6. Build a landing page (see workflow #1)

**What you learn:** End-to-end product creation using the agent as a writing and publishing partner.

---

## 6. Research and summarize a topic

**When to use:** You need to get smart on something fast without reading 20 articles.

**Steps:**
1. "Research [topic]. Give me the key facts, current state, and the 3 most important things to know"
2. If you need depth: "Now go deeper on [subtopic]. What are the trade-offs?"
3. Save it: "Write this up as a markdown note in ~/notes/"
4. Optional: "Turn this into a Twitter thread" or "Summarize for a non-technical audience"

---

## 7. Set up monitoring or alerts

**When to use:** You want to know when something changes without manually checking.

**Examples:**
- "Check this URL every hour and alert me if it goes down"
- "Watch this GitHub repo for new releases"
- "Monitor this RSS feed and summarize new posts daily"

**Steps:**
1. Describe what to watch and how often
2. The agent can set up a cron job or scheduled task
3. Configure where alerts go (Telegram, Discord, email, etc.)
4. Test with a dry run first

---

## 8. Clean up and organize files

**When to use:** Your desktop, downloads, or project folder is a mess.

**Steps:**
1. "Show me what's taking up space in ~/Desktop"
2. "Organize these files: move images to photos/, documents to docs/, code to projects/"
3. "Find duplicate files in ~/Downloads"
4. "Archive everything older than 6 months into ~/archive/"

**What you learn:** File operations and how to supervise the agent on potentially destructive tasks.

---

## What makes a good first workflow?

Pick something that:
- **Has a clear done state** — you'll know when it worked
- **Is low-stakes** — if the agent messes up, nothing important breaks
- **Takes you 30+ minutes manually** — that's where the leverage shows up
- **You'll do again** — so you can save it as a repeatable skill

Start with one. Get it working. Then stack the next one.

---

*The point is not to use every feature. The point is to have one workflow that actually saves you time this week.*
