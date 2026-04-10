import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "5 Common OpenClaw Setup Mistakes and How to Fix Them (2026)",
  description:
    "Avoid the most common OpenClaw setup pitfalls. Covers Node version issues, API key misconfiguration, channel setup order, memory structure, and the setup wizard.",
  openGraph: {
    title: "5 Common OpenClaw Setup Mistakes (2026)",
    description:
      "Fix the setup issues that trip up most OpenClaw users. Node versions, API keys, channel config, and more.",
    url: "https://jadkins333.github.io/openclaw-setup-service-v2/blog/",
    siteName: "OpenClaw Setup Kit",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "5 OpenClaw Setup Mistakes (2026)",
    description:
      "The pitfalls that trip up most OpenClaw users and how to fix each one.",
  },
};

const mistakes = [
  {
    number: 1,
    title: "Using the wrong Node.js version",
    symptom:
      "Cryptic build errors during install, native module compilation failures, or the agent crashing on startup with V8-related errors.",
    explanation:
      "OpenClaw requires Node.js 18 or 20 LTS. Node 21+ uses unstable APIs that break native dependencies. Node 16 and below lack required features like the Fetch API and structuredClone.",
    fix: [
      "Check your current version: node -v",
      "Install nvm if you do not have it: curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash",
      "Install and use Node 20 LTS: nvm install 20 && nvm use 20",
      "Verify: node -v should show v20.x.x",
      "Delete node_modules and reinstall: rm -rf node_modules && pnpm install",
    ],
    prevention:
      "Add a .nvmrc file to your OpenClaw directory with just '20' in it. Then nvm use will always pick the right version.",
  },
  {
    number: 2,
    title: "Missing or misconfigured API keys",
    symptom:
      "Agent starts but responds with 'No provider configured', returns empty messages, or throws authentication errors when you send it a task.",
    explanation:
      "OpenClaw needs at least one LLM provider configured (OpenAI, Anthropic, Google, or a local model endpoint). The .env file must have valid credentials. Common issues: extra whitespace around the key, using a project-scoped key instead of a user key, or the key being from a different account than you think.",
    fix: [
      "Open your .env file and find the provider section",
      "For OpenAI: ensure OPENAI_API_KEY=sk-... with no spaces or quotes around the value",
      "For Anthropic: ensure ANTHROPIC_API_KEY=sk-ant-... same rules",
      "Test the key directly: curl https://api.openai.com/v1/models -H 'Authorization: Bearer YOUR_KEY'",
      "If using Anthropic: curl https://api.anthropic.com/v1/messages -H 'x-api-key: YOUR_KEY' -H 'anthropic-version: 2023-06-01' -d '{\"model\":\"claude-sonnet-4-20250514\",\"max_tokens\":10,\"messages\":[{\"role\":\"user\",\"content\":\"hi\"}]}'",
      "Restart OpenClaw after any .env changes",
    ],
    prevention:
      "Use the setup wizard (pnpm run setup) instead of manually editing .env. It validates keys before saving them.",
  },
  {
    number: 3,
    title: "Skipping the setup wizard",
    symptom:
      "Config file has default/placeholder values. Channels do not connect. Model selection is wrong. Permission system is not configured.",
    explanation:
      "The setup wizard is not optional. It configures your model routing, channel bindings, permission defaults, and memory system. Editing the config manually works but you will miss settings you did not know existed — and OpenClaw has a lot of them.",
    fix: [
      "Run the setup wizard: pnpm run setup",
      "Follow the interactive prompts for each section",
      "Choose your primary model (this is what the agent uses for most tasks)",
      "Configure at least CLI as a channel for testing",
      "Set permission defaults (recommended: start restrictive, loosen as needed)",
      "Verify after setup: pnpm start should show ready status with your chosen model",
    ],
    prevention:
      "Always run the setup wizard on first install and after major version upgrades. It detects new config options and migrates old settings.",
  },
  {
    number: 4,
    title: "Configuring messaging channels before the base install works",
    symptom:
      "Telegram or Discord bot does not respond, webhook errors, confused debugging because you do not know if the problem is the agent or the channel.",
    explanation:
      "Messaging channels (Telegram, Discord, Slack, etc.) add their own layer of complexity — webhooks, bot tokens, network configuration. If the base agent is not working, you cannot tell whether the problem is the channel or the core install. Always verify CLI mode first.",
    fix: [
      "Start OpenClaw in CLI mode only: pnpm start",
      "Send it a simple message and verify it responds",
      "Try a tool call (ask it to read a file or run a command)",
      "Only after CLI works, add one channel at a time",
      "For Telegram: create a bot via @BotFather, add the token, set the webhook URL",
      "For Discord: create an application, add the bot token, invite to your server",
      "Test each channel individually before adding another",
    ],
    prevention:
      "Treat channel setup as a separate phase. Base install → CLI verification → first channel → second channel. Never skip a step.",
  },
  {
    number: 5,
    title: "Not setting up memory and workspace structure",
    symptom:
      "Agent forgets everything between sessions, gives generic responses, does not learn your preferences, and feels like talking to a stranger every time.",
    explanation:
      "OpenClaw has a memory system but it needs a workspace structure to use it effectively. Without configured memory, the agent starts fresh every session. Without a workspace, file operations have no sensible default directory. This is the difference between a useful assistant and a novelty.",
    fix: [
      "Create a workspace directory: mkdir -p ~/openclaw-workspace",
      "Set it in your config: workspace_dir: ~/openclaw-workspace",
      "Enable persistent memory in your config (the setup wizard does this)",
      "Create initial memory notes about your preferences and environment",
      "Tell the agent about yourself in the first session — it will remember",
      "Check that memory files are being created in your workspace after a session",
    ],
    prevention:
      "The Operator Pack and Full Setup Kit include workspace templates with a pre-built directory structure and example memory files. Saves the trial-and-error of figuring out what to put where.",
  },
];

export default function SetupMistakesBlogPage() {
  return (
    <main className="min-h-screen bg-neutral-950 px-6 pb-20 pt-8 text-neutral-50 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-neutral-400">
          <a href="/openclaw-setup-service-v2/" className="hover:text-white">
            OpenClaw Setup Kit
          </a>{" "}
          /{" "}
          <a href="/openclaw-setup-service-v2/guide/" className="hover:text-white">
            Guide
          </a>{" "}
          / <span className="text-neutral-200">Setup Mistakes</span>
        </nav>

        {/* Hero */}
        <header className="mb-16">
          <span className="inline-flex rounded-full border border-sky-400/25 bg-sky-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-sky-200">
            Blog
          </span>
          <h1 className="mt-6 text-4xl font-semibold leading-tight text-white md:text-5xl">
            5 Common OpenClaw Setup Mistakes and How to Fix Them
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
            Most OpenClaw installs fail for the same five reasons. Here is what
            goes wrong, how to spot each issue, and the exact commands to fix
            it.
          </p>
        </header>

        {/* Intro */}
        <section className="mb-16">
          <p className="text-neutral-300 leading-7">
            OpenClaw is powerful but the setup is not trivial. The documentation
            covers everything, but it also covers <em>everything</em> — which
            means new users spend hours reading when they should be installing.
          </p>
          <p className="mt-4 text-neutral-300 leading-7">
            After helping dozens of people get their installs working, the same
            five mistakes come up repeatedly. Fix these and you skip the
            frustrating first week most people go through.
          </p>
        </section>

        {/* Mistakes */}
        <div className="space-y-12">
          {mistakes.map((m) => (
            <section
              key={m.number}
              className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 lg:p-8"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sky-400 text-lg font-bold text-neutral-950">
                  {m.number}
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold text-white">
                    {m.title}
                  </h2>

                  <div className="mt-6 rounded-2xl border border-amber-400/20 bg-amber-400/5 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-amber-200">
                      Symptom
                    </p>
                    <p className="mt-2 text-sm leading-7 text-neutral-300">
                      {m.symptom}
                    </p>
                  </div>

                  <div className="mt-4">
                    <p className="text-sm leading-7 text-neutral-300">
                      {m.explanation}
                    </p>
                  </div>

                  <div className="mt-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-emerald-200">
                      How to fix it
                    </p>
                    <div className="mt-3 space-y-2">
                      {m.fix.map((step, i) => (
                        <div
                          key={step}
                          className="flex gap-3 rounded-xl border border-white/8 bg-neutral-900/60 px-4 py-3 text-sm text-neutral-200"
                        >
                          <span className="shrink-0 font-mono text-sky-300">
                            {i + 1}.
                          </span>
                          <code className="font-mono text-xs leading-6 text-neutral-100 break-all">
                            {step}
                          </code>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 rounded-xl border border-emerald-400/15 bg-emerald-400/5 px-4 py-3">
                    <p className="text-xs font-semibold text-emerald-300">
                      Prevention
                    </p>
                    <p className="mt-1 text-sm leading-6 text-neutral-300">
                      {m.prevention}
                    </p>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* CTA */}
        <section className="mt-16 rounded-[36px] border border-emerald-400/25 bg-emerald-400/10 px-6 py-10 text-center lg:px-10">
          <p className="text-xs uppercase tracking-[0.25em] text-emerald-200">
            Skip the pitfalls entirely
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white">
            The setup kit covers all of this and more
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-emerald-50/90">
            Step-by-step guides, workspace templates, troubleshooting
            playbooks, and daily-use checklists. Get a working OpenClaw install
            in one afternoon instead of one week.
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
