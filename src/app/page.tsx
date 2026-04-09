const productTiers = [
  {
    name: "Starter Kit",
    price: "$29",
    summary: "A clean setup guide for getting OpenClaw running without drowning in docs.",
    bullets: [
      "Step-by-step setup guide",
      "Core config checklist",
      "Common failure fixes",
    ],
  },
  {
    name: "Operator Pack",
    price: "$59",
    summary: "The setup guide plus templates, workflow examples, and troubleshooting assets.",
    bullets: [
      "Everything in Starter",
      "Starter templates and examples",
      "Troubleshooting cheat sheets",
    ],
  },
  {
    name: "Full Setup Kit",
    price: "$99",
    summary: "The complete async package for people who want a serious running start with less trial and error.",
    bullets: [
      "Everything in Operator Pack",
      "Workspace / memory structure examples",
      "Launch and daily-use checklists",
    ],
  },
];

const contents = [
  "Step-by-step setup guide from zero to usable",
  "Routing, permissions, and guardrail defaults explained plainly",
  "Pairing and connectivity troubleshooting fixes",
  "Starter workspace and memory structure examples",
  "First useful workflow ideas so the install actually leads somewhere",
  "A practical checklist for what to do after setup is complete",
];

const steps = [
  "Buy the kit and download the materials.",
  "Follow the setup path that matches your machine and goals.",
  "Use the troubleshooting sections when something inevitably gets weird.",
  "End up with a cleaner, more usable OpenClaw setup instead of a half-finished experiment.",
];

const faqs = [
  {
    question: "Who is this for?",
    answer:
      "People who want OpenClaw working on a real machine with real channels, not people looking for vague AI inspiration.",
  },
  {
    question: "Is this a PDF only?",
    answer:
      "No. The better version is a setup kit: guide, templates, checklists, examples, and troubleshooting notes. The PDF is only one part of it.",
  },
  {
    question: "Do I need to be technical?",
    answer:
      "You do not need to be deeply technical, but you do need to be willing to follow instructions and poke around your machine a little.",
  },
  {
    question: "Will this fix every possible setup problem?",
    answer:
      "No guide can promise that, but the point is to eliminate the common failure modes and give you a much better chance of getting to a working setup quickly.",
  },
];

const outcomes = [
  "A cleaner path from install to a usable OpenClaw setup",
  "Less wasted time bouncing between docs and terminals",
  "Better defaults for routing, permissions, and structure",
  "A reusable operator checklist instead of random notes scattered everywhere",
];

const reasons = [
  {
    title: "You do not need another giant course.",
    copy: "You need the shortest path to a working setup, the common gotchas, and the right defaults in one place.",
  },
  {
    title: "This is built for practical setup friction.",
    copy: "The goal is not theory. The goal is getting OpenClaw from confusing to usable with fewer dead ends.",
  },
  {
    title: "It is designed to be bought and used asynchronously.",
    copy: "No calendar, no back-and-forth consulting requirement, no waiting for a live session just to move forward.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50">
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-6 py-16 sm:px-10 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-zinc-300">
              OpenClaw Setup Kit
            </p>
            <h1 className="text-5xl font-semibold tracking-tight text-balance sm:text-6xl">
              Get your OpenClaw setup working without paying for another live consultation.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
              A productized setup kit for builders and operators who want the shortest path
              from “this looks cool” to a working OpenClaw environment they can actually use.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 font-medium text-zinc-950 transition hover:bg-zinc-200"
              >
                See pricing
              </a>
              <a
                href="#buy"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 font-medium text-white transition hover:bg-white/5"
              >
                Get the kit
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                "Setup guide",
                "Troubleshooting fixes",
                "Templates + checklists",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-zinc-300">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <aside className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20">
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">Inside the kit</p>
            <ul className="mt-5 space-y-4 text-zinc-200">
              {contents.slice(0, 4).map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl border border-emerald-300/20 bg-emerald-300/10 p-4">
              <p className="text-sm font-medium text-emerald-200">Built for async buyers</p>
              <p className="mt-2 text-sm leading-6 text-zinc-200">
                This is for people who want a useful resource they can buy once, use on their own time, and keep nearby when the setup starts acting weird.
              </p>
            </div>
          </aside>
        </div>

        <section id="pricing" className="mt-20">
          <h2 className="text-3xl font-semibold tracking-tight">Pricing</h2>
          <p className="mt-3 max-w-2xl text-zinc-300">
            Start cheap, prove the demand, and make the async product good enough that it actually saves people time.
          </p>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {productTiers.map((tier) => (
              <article key={tier.name} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm text-zinc-400">{tier.name}</p>
                <div className="mt-3 flex items-end gap-3">
                  <span className="text-4xl font-semibold">{tier.price}</span>
                </div>
                <p className="mt-4 text-zinc-300">{tier.summary}</p>
                <ul className="mt-5 space-y-2 text-sm text-zinc-300">
                  {tier.bullets.map((bullet) => (
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
              The point is to help people get unstuck without requiring a live call every time they hit setup friction.
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
            <h2 className="text-3xl font-semibold tracking-tight">Why people would buy this</h2>
            <p className="mt-3 max-w-xl text-zinc-300">
              Because setup friction kills momentum, and most people do not want to schedule a human just to get their tools working.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "No more bouncing between docs, terminals, and half-finished config.",
              "Get a cleaner path from install to actual use.",
              "Reduce pairing, routing, and permission confusion earlier.",
              "Keep a reusable setup reference instead of starting from scratch every time.",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-zinc-200">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-3xl font-semibold tracking-tight">What success looks like</h2>
            <ul className="mt-6 space-y-3 text-zinc-200">
              {outcomes.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-3xl font-semibold tracking-tight">Why this product is different</h2>
            <div className="mt-6 space-y-4">
              {reasons.map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <h3 className="font-medium text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-300">{item.copy}</p>
                </div>
              ))}
            </div>
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

        <section id="buy" className="mt-20 rounded-3xl border border-white/10 bg-emerald-400/10 p-8">
          <h2 className="text-3xl font-semibold tracking-tight">Get the OpenClaw Setup Kit</h2>
          <p className="mt-3 max-w-2xl text-zinc-200">
            This is the product-first version of the offer: a live page, a clear async product, and a direct path to purchase once checkout is wired in.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href="mailto:hello@example.com?subject=OpenClaw%20Setup%20Kit"
              className="inline-flex items-center justify-center rounded-full bg-emerald-300 px-6 py-3 font-medium text-zinc-950 transition hover:bg-emerald-200"
            >
              Request early access
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 font-medium text-white transition hover:bg-white/5"
            >
              Compare tiers
            </a>
          </div>
          <p className="mt-4 text-sm text-zinc-300">
            Next layer is wiring this into a real checkout + delivery flow so the kit can be bought without needing a live conversation.
          </p>
        </section>
      </section>
    </main>
  );
}
