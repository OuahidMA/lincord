import { Link } from "react-router-dom";
import { ArrowRight, Crosshair, Eye, FileWarning } from "lucide-react";

const pillars = [
  {
    icon: Eye,
    title: "See it the way attackers do",
    text: "We think in attack paths, not checklists. Every engagement starts from the perspective of a motivated adversary with hours, not days.",
  },
  {
    icon: Crosshair,
    title: "Prove impact, not presence",
    text: "Finding a vulnerability is the easy part. We chain weaknesses into demonstrated business impact, making your real-world risk completely measurable.",
  },
  {
    icon: FileWarning,
    title: "Leave you better defended",
    text: "Every report ships with reproducible evidence, business-risk ratings and concrete remediation steps developers can action.",
  },
];

export default function AboutUs() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pb-10 pt-44">
        <span className="text-xs font-medium uppercase tracking-wider text-red-400">
          About Lincord
        </span>
        <h1 className="mt-4 max-w-2xl text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl">
          An offensive security team dedicated to defending your enterprise.
        </h1>
        <p className="mt-5 max-w-2xl leading-relaxed text-neutral-400">
          Lincord is an offensive security collective running manual,
          human-led penetration tests against the networks, applications and
          identities your business depends on. We operate under strict rules of
          engagement and leave every client with a picture
          of their exposure and the steps to remediate it.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="rounded-lg border border-[#242728] bg-[#0d0d0d] p-6 hover:border-red-500/40"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-md border border-red-500/30 bg-red-600/10 text-red-400">
                <pillar.icon className="h-5 w-5" />
              </span>
              <h2 className="mt-5 text-lg font-medium text-white">
                {pillar.title}
              </h2>
              <p className="mt-2.5 text-sm leading-relaxed text-neutral-400">
                {pillar.text}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-6 rounded-lg border border-[#242728] bg-[#0d0d0d] p-8 sm:flex-row">
          <div>
            <h2 className="text-xl font-medium text-white">
              Ready to test your defenses?
            </h2>
            <p className="mt-1.5 text-sm text-neutral-400">
              Start with a scoping call — pick the service that matches your
              risk.
            </p>
          </div>
          <Link
            to="/services"
            className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-lg bg-red-600 px-6 text-sm font-medium text-white shadow-[0_0_28px_rgba(220,38,38,0.35)] transition-colors hover:bg-red-700"
          >
            View services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}