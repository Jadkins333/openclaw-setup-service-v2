const packages = [
  {
    name: "Quickstart Audit",
    price: "$149",
    summary: "A 45-minute teardown of your current setup, bottlenecks, and next steps.",
    bullets: [
      "Current-state review",
      "Model / routing recommendations",
      "Risk and permissions check",
    ],
  },
  {
    name: "Done-With-You Setup",
    price: "$499",
    summary: "Live setup session with a working OpenClaw environment by the end of the call.",
    bullets: [
      "Install + config",
      "Core integrations",
      "Starter workflow templates",
    ],
  },
  {
    name: "Done-For-You Build",
    price: "$1,250",
    summary: "I set up the environment, workflows, and handoff docs for you.",
    bullets: [
      "Full environment setup",
      "Discord / mobile routing",
      "7 days of follow-up support",
    ],
  },
];

const steps = [
  "Book the audit or setup session.",
  "Fill out the intake so I know your machine, goals, and blockers.",
  "Show up with the credentials and I’ll get the thing working.",
  "Leave with a real setup, checklist, and next actions.",
];

const faqs = [
  {
    question: "Who is this for?",
    answer:
      "People who want OpenClaw working on a real machine with real channels, not people looking for a vague AI strategy deck.",
  },
  {
    question: "What can you help set up?",
    answer:
      "Local installs, routing, node pairing, Discord/mobile access, memory basics, guardrails, starter workflows, and the first useful skills/templates.",
  },
  {
    question: "Do I need to be technical?",
    answer:
      "Not especially. It helps if you’re comfortable sharing screens and following a checklist, but the service is designed to reduce setup friction, not add to it.",
  },
  {
    question: "What happens after the session?",
    answer:
      "You leave with a working environment, handoff notes, and a clear next-step list so you’re not stuck the next day wondering what broke.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50">
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-6 py-16 sm:px-10 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-zinc-300">
              OpenClaw Setup Service
            </p>
            <h1 className="text-5xl font-semibold tracking-tight text-balance sm:text-6xl">
              Get your OpenClaw setup working without losing a weekend to config hell.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
              White-glove setup and training for builders, operators, and small teams
              who want a usable OpenClaw environment, not a pile of docs and half-finished
              terminals.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#packages"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 font-medium text-zinc-950 transition hover:bg-zinc-200"
              >
                See packages
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 font-medium text-white transition hover:bg-white/5"
              >
                Book a setup call
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                "Fast audit",
                "Done-with-you install",
                "Done-for-you setup",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-zinc-300">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <aside className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20">
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">What you get</p>
            <ul className="mt-5 space-y-4 text-zinc-200">
              {[
                "A working setup, not setup advice",
                "Model, routing, and permissions guidance",
                "Starter templates and a handoff checklist",
                "Clear next steps for using the system daily",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>

        <section id="packages" className="mt-20">
          <h2 className="text-3xl font-semibold tracking-tight">Packages</h2>
          <p className="mt-3 max-w-2xl text-zinc-300">
            Start with the smallest thing that gets you moving. No giant platform, no weird commitments.
          </p>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {packages.map((pkg) => (
              <article key={pkg.name} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm text-zinc-400">{pkg.name}</p>
                <div className="mt-3 flex items-end gap-3">
                  <span className="text-4xl font-semibold">{pkg.price}</span>
                </div>
                <p className="mt-4 text-zinc-300">{pkg.summary}</p>
                <ul className="mt-5 space-y-2 text-sm text-zinc-300">
                  {pkg.bullets.map((bullet) => (
                    <li key={bullet}>• {bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-20 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">How it works</h2>
            <p className="mt-3 text-zinc-300">
              The point is to get you from “this is annoying” to “it works” in one session or one sprint.
            </p>
          </div>
          <div className="space-y-4">
            {steps.map((step, index) => (
              <div key={step} className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-sm font-semibold text-zinc-950">
                  {index + 1}
                </div>
                <p className="text-zinc-200">{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">Why people buy this</h2>
            <p className="mt-3 max-w-xl text-zinc-300">
              Because setup friction kills momentum. Most people don’t need more AI hype. They need the stack to actually work on their machine, with their accounts, without breaking every time they touch it.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "No more bouncing between docs, terminals, and half-finished config.",
              "Get a clean starting point for daily use, not just installation.",
              "Reduce pairing, routing, and permissions confusion early.",
              "Leave with a setup you can actually operate next week.",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-zinc-200">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <h2 className="text-3xl font-semibold tracking-tight">FAQ</h2>
          <div className="mt-8 grid gap-4">
            {faqs.map((faq) => (
              <article key={faq.question} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-medium text-white">{faq.question}</h3>
                <p className="mt-2 text-zinc-300">{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="mt-20 rounded-3xl border border-white/10 bg-emerald-400/10 p-8">
          <h2 className="text-3xl font-semibold tracking-tight">Want help getting your setup live?</h2>
          <p className="mt-3 max-w-2xl text-zinc-200">
            This is the first-dollar version: short sales page, clear packages, Stripe checkout, and a simple intake flow. Next step is swapping these placeholders for a real booking link and payment flow.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href="mailto:hello@example.com?subject=OpenClaw%20Setup%20Inquiry"
              className="inline-flex items-center justify-center rounded-full bg-emerald-300 px-6 py-3 font-medium text-zinc-950 transition hover:bg-emerald-200"
            >
              Email to book
            </a>
            <a
              href="#packages"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 font-medium text-white transition hover:bg-white/5"
            >
              Compare packages
            </a>
          </div>
        </section>
      </section>
    </main>
  );
}
