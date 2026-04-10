import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Free OpenClaw Setup Quickstart Guide (2026)",
  description:
    "Get OpenClaw running on your machine without drowning in docs. Free quickstart guide covering installation, common pitfalls, and your first workflow.",
  openGraph: {
    title: "Free OpenClaw Setup Quickstart Guide (2026)",
    description:
      "Skip the trial and error. A practical quickstart for getting OpenClaw installed and useful.",
    url: "https://jadkins333.github.io/openclaw-setup-service-v2/guide/",
    siteName: "OpenClaw Setup Kit",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "OpenClaw Setup Quickstart (2026)",
    description:
      "Free guide to getting OpenClaw installed and running your first workflow.",
  },
};

const requirements = [
  { item: "macOS 13+, Windows 10+, or Ubuntu 22.04+", category: "OS" },
  { item: "8GB RAM minimum (16GB recommended for larger models)", category: "Hardware" },
  { item: "Node.js 18+ and npm/pnpm", category: "Runtime" },
  { item: "Python 3.10+ (for some plugin integrations)", category: "Runtime" },
  { item: "Git (for cloning and updates)", category: "Tools" },
  { item: "A working terminal you are comfortable with", category: "Tools" },
];

const installSteps = [
  {
    step: 1,
    title: "Clone the repository",
    detail:
      "Pull the latest OpenClaw release from the official repository. Always use a tagged release rather than the main branch for stability.",
    code: "git clone https://github.com/openclaw/openclaw.git\ncd openclaw\ngit checkout $(git describe --tags --abbrev=0)",
  },
  {
    step: 2,
    title: "Install dependencies",
    detail:
      "Run the install command. OpenClaw uses pnpm by default, but npm works too. This step pulls in all required packages.",
    code: "pnpm install\n# or: npm install",
  },
  {
    step: 3,
    title: "Configure your environment",
    detail:
      "Copy the example environment file and fill in your API keys. At minimum you need one LLM provider configured (OpenAI, Anthropic, or a local model endpoint).",
    code: "cp .env.example .env\n# Edit .env with your API keys and preferences",
  },
  {
    step: 4,
    title: "Run the setup wizard",
    detail:
      "OpenClaw includes a setup wizard that walks you through channel configuration (Telegram, Discord, CLI, etc.), model selection, and permission defaults.",
    code: "pnpm run setup\n# Follow the interactive prompts",
  },
  {
    step: 5,
    title: "Start the agent",
    detail:
      "Launch OpenClaw and verify it responds. Start with CLI mode first — add messaging channels after you confirm the base install works.",
    code: "pnpm start\n# You should see: 'OpenClaw ready. Type a message...'",
  },
];

const pitfalls = [
  {
    problem: "Node version mismatch",
    symptom: "Cryptic build errors during install, especially around native modules.",
    fix: "Use nvm or fnm to switch to Node 18 or 20 LTS. Do not use Node 21+ (unstable APIs). Run 'node -v' to check before installing.",
  },
  {
    problem: "Missing API keys",
    symptom: "Agent starts but responds with 'No provider configured' or empty messages.",
    fix: "Check your .env file. At least one LLM provider section needs valid credentials. The setup wizard should catch this, but manual edits can break it.",
  },
  {
    problem: "Port conflicts",
    symptom: "EADDRINUSE error on startup, or the web dashboard will not load.",
    fix: "Another process is using the default port. Either kill it ('lsof -i :3000' to find it) or change the PORT variable in .env.",
  },
  {
    problem: "Permission errors on macOS",
    symptom: "Terminal access denied, or the agent cannot read/write files in your home directory.",
    fix: "Grant Terminal (or your terminal app) Full Disk Access in System Settings > Privacy & Security. OpenClaw needs filesystem access for its workspace.",
  },
  {
    problem: "Telegram/Discord bot not responding",
    symptom: "Agent runs fine in CLI but messaging channels show no activity.",
    fix: "Check that (a) bot token is correct in .env, (b) the bot has been added to your server/chat, and (c) webhook URL is reachable if using webhooks. Start with polling mode for debugging.",
  },
];

export default function GuidePage() {
  return (
    <main className="min-h-screen bg-neutral-950 px-6 pb-20 pt-8 text-neutral-50 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-neutral-400">
          <a
            href="/openclaw-setup-service-v2/"
            className="hover:text-white"
          >
            OpenClaw Setup Kit
          </a>{" "}
          / <span className="text-neutral-200">Free Guide</span>
        </nav>

        {/* Hero */}
        <header className="mb-16">
          <span className="inline-flex rounded-full border border-emerald-400/25 bg-emerald-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-200">
            Free resource
          </span>
          <h1 className="mt-6 text-4xl font-semibold leading-tight text-white md:text-5xl">
            OpenClaw Setup Quickstart Guide
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
            Get OpenClaw installed and running your first workflow without
            drowning in docs. This free guide covers the essentials — the
            paid kit goes deeper.
          </p>
        </header>

        {/* What is OpenClaw */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-white">
            What is OpenClaw?
          </h2>
          <p className="mt-4 text-neutral-300 leading-7">
            OpenClaw is an open-source AI agent framework that connects large
            language models to your tools — terminal, files, messaging
            platforms, APIs, and more. Think of it as a programmable assistant
            that lives on your machine and can actually do things, not just
            answer questions.
          </p>
          <p className="mt-4 text-neutral-300 leading-7">
            It supports multiple LLM providers (OpenAI, Anthropic, local
            models), multiple communication channels (CLI, Telegram, Discord,
            Slack), and a plugin system for extending capabilities. The
            catch: getting from git clone to a useful, well-configured agent
            takes some work. That is what this guide (and the full setup kit)
            is for.
          </p>
        </section>

        {/* Requirements */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-white">
            System requirements
          </h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {requirements.map((req) => (
              <div
                key={req.item}
                className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4"
              >
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                    {req.category}
                  </p>
                  <p className="mt-1 text-sm text-neutral-200">{req.item}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Installation steps */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-white">
            Installation: 5 steps to a running agent
          </h2>
          <p className="mt-4 text-neutral-300 leading-7">
            This is the happy path. If you hit issues, check the pitfalls
            section below.
          </p>
          <div className="mt-8 space-y-6">
            {installSteps.map((is) => (
              <div
                key={is.step}
                className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-400 text-sm font-bold text-neutral-950">
                    {is.step}
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {is.title}
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-7 text-neutral-300">
                  {is.detail}
                </p>
                <pre className="mt-4 overflow-x-auto rounded-xl bg-neutral-900 p-4 text-sm text-emerald-300 font-mono">
                  {is.code}
                </pre>
              </div>
            ))}
          </div>
        </section>

        {/* Pitfalls */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-white">
            Common pitfalls (and how to fix them)
          </h2>
          <p className="mt-4 text-neutral-300 leading-7">
            These are the five issues that trip up most new OpenClaw users.
            The paid setup kit has a full troubleshooting playbook, but
            these fixes cover the most common blockers.
          </p>
          <div className="mt-8 space-y-4">
            {pitfalls.map((p) => (
              <article
                key={p.problem}
                className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6"
              >
                <h3 className="font-semibold text-white">{p.problem}</h3>
                <div className="mt-3 space-y-2">
                  <div className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-red-400/70" />
                    <p className="text-sm text-neutral-300">
                      <span className="font-semibold text-red-300">Symptom:</span>{" "}
                      {p.symptom}
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
                    <p className="text-sm text-neutral-300">
                      <span className="font-semibold text-emerald-300">Fix:</span>{" "}
                      {p.fix}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* First workflow */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-white">
            Your first useful workflow
          </h2>
          <p className="mt-4 text-neutral-300 leading-7">
            Once the agent is running in CLI mode, try something simple but
            practical. Do not start with a complex multi-step automation —
            start with a single task that proves the setup works:
          </p>
          <div className="mt-6 rounded-[28px] border border-white/10 bg-white/[0.04] p-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-300">
              Try this
            </p>
            <pre className="mt-4 overflow-x-auto rounded-xl bg-neutral-900 p-4 text-sm text-emerald-300 font-mono">
              {`> Read the file ~/README.md and summarize it in 3 bullet points`}
            </pre>
            <p className="mt-4 text-sm leading-7 text-neutral-300">
              This tests file access, LLM connection, and response formatting
              in one command. If it works, your base install is solid. If it
              fails, the error message will point you to which part of the
              stack needs attention.
            </p>
          </div>
          <p className="mt-6 text-neutral-300 leading-7">
            From there, try progressively more complex tasks: search files,
            run terminal commands, create files. Each one tests a different
            capability and builds your confidence that the agent is properly
            configured.
          </p>
        </section>

        {/* Upsell to paid kit */}
        <section className="rounded-[36px] border border-emerald-400/25 bg-emerald-400/10 px-6 py-10 text-center lg:px-10">
          <p className="text-xs uppercase tracking-[0.25em] text-emerald-200">
            Go deeper
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white">
            When the free guide is not enough
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-emerald-50/90">
            This quickstart gets you running. The full setup kit gets you
            running well — with workspace templates, daily-use checklists,
            troubleshooting playbooks, and workflow examples that turn a
            working install into a useful tool.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://buy.stripe.com/cNi00la1VakzgyTeyibMQ03"
              className="rounded-full bg-white px-6 py-3 font-semibold text-neutral-950"
            >
              Starter Kit — $29
            </a>
            <a
              href="https://buy.stripe.com/00weVf1vp0JZeqLfCmbMQ04"
              className="rounded-full bg-emerald-400 px-6 py-3 font-semibold text-neutral-950"
            >
              Operator Pack — $59
            </a>
            <a
              href="https://buy.stripe.com/aFa28t1vp50fbez0HsbMQ05"
              className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white"
            >
              Full Setup Kit — $99
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 border-t border-white/10 pt-8 text-center text-sm text-neutral-400">
          <p>
            © {new Date().getFullYear()} OpenClaw Setup Kit. All rights
            reserved.
          </p>
          <a
            href="/openclaw-setup-service-v2/"
            className="mt-2 inline-block transition hover:text-white"
          >
            ← Back to home
          </a>
        </footer>
      </div>
    </main>
  );
}
