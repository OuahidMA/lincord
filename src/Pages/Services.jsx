import { Check, RefreshCw } from "lucide-react";
import { services, methodology } from "@/data/services";

const nodePos = [
  [50, 12],
  [86.14, 38.26],
  [72.34, 80.74],
  [27.66, 80.74],
  [13.86, 38.26],
];

const flowArcs = [
  "M 53.62 24.25 A 26 26 0 0 1 73.37 38.6",
  "M 75.61 45.49 A 26 26 0 0 1 68.06 68.7",
  "M 62.21 72.96 A 26 26 0 0 1 37.79 72.96",
  "M 31.94 68.7 A 26 26 0 0 1 24.39 45.49",
  "M 26.63 38.6 A 26 26 0 0 1 46.38 24.25",
];

export default function Services() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pb-10 pt-44">
        <span className="text-xs font-medium uppercase tracking-wider text-red-400">
          Services
        </span>
        <h1 className="mt-4 max-w-2xl text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl">
          Offensive engagements
        </h1>
        <p className="mt-5 max-w-2xl leading-relaxed text-neutral-400">
          Three offensive security services — each defined below with what it covers,
          what gets tested, and the methodology behind it.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.id}
              className="flex flex-col rounded-lg border border-[#242728] bg-[#0d0d0d] p-6 hover:border-red-500/40"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-red-500/30 bg-red-600/10 text-red-400">
                  <service.icon className="h-5 w-5" />
                </span>
                <h2 className="text-xl font-medium text-white">
                  {service.title}
                </h2>
              </div>

              <p className="mt-4 text-sm italic text-red-400/90">
                {service.tagline}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                {service.summary}
              </p>

              <ul className="mt-6 space-y-2.5 border-t border-[#242728] pt-6">
                {service.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 text-sm text-neutral-300"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-red-400" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="methodology" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
        <div className="text-center">
          <span className="text-xs font-medium uppercase tracking-wider text-red-400">
            Methodology
          </span>
          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            The five-step playbook
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-neutral-400">
            Every engagement runs the same offensive cycle — from a single
            foothold to a fully documented report.
          </p>
        </div>

        <div className="relative mx-auto mt-16 aspect-square w-full max-w-[24rem] sm:max-w-[32rem] md:max-w-[38rem]">
          <svg
            viewBox="0 0 100 100"
            fill="none"
            aria-hidden="true"
            className="absolute inset-0 h-full w-full"
          >
            <defs>
              <marker
                id="method-arrow"
                viewBox="0 0 10 10"
                refX="7"
                refY="5"
                markerWidth="3.5"
                markerHeight="3.5"
                orient="auto-start-reverse"
              >
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#dc2626" />
              </marker>
            </defs>

            <circle
              cx="50"
              cy="50"
              r="44"
              stroke="rgba(220,38,38,0.45)"
              strokeWidth="0.35"
              strokeDasharray="1.6 2.4"
              className="animate-spin-slow"
              style={{ transformOrigin: "50% 50%" }}
            />
            <circle
              cx="50"
              cy="50"
              r="38"
              stroke="#242728"
              strokeWidth="0.4"
            />

            {flowArcs.map((d) => (
              <path
                key={d}
                d={d}
                stroke="#dc2626"
                strokeWidth="1"
                strokeLinecap="round"
                markerEnd="url(#method-arrow)"
              />
            ))}
          </svg>

          <div className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-red-500/40 bg-[#101111] shadow-[0_0_28px_rgba(220,38,38,0.25)] sm:h-24 sm:w-24">
            <RefreshCw className="h-5 w-5 text-red-500 sm:h-6 sm:w-6" />
          </div>

          {methodology.map((m, i) => {
            const [left, top] = nodePos[i];
            return (
              <article
                key={m.step}
                style={{ left: `${left}%`, top: `${top}%` }}
                className="absolute flex aspect-square w-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-[#242728] bg-[#0d0d0d] p-2 text-center shadow-[0_0_0_6px_#07080a] transition-colors hover:border-red-500/40 sm:w-36 md:w-44 md:p-4"
              >
                <span className="font-mono text-[10px] font-semibold text-red-400 sm:text-xs">
                  {m.step}
                </span>
                <h3 className="mt-1 text-[11px] font-medium leading-tight text-white sm:text-sm md:text-base">
                  {m.title}
                </h3>
                <p className="mt-1.5 hidden text-[10px] leading-relaxed text-neutral-400 md:block md:px-3 lg:text-xs">
                  {m.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}