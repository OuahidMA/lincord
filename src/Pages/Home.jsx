import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/Components/ui/button";
import { services } from "@/data/services";

const scrollToServices = () => {
  document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
};

const HeroStripe = () => (
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-x-0 top-[-35%] h-[110%]"
  >
    <div className="h-full w-full bg-[repeating-linear-gradient(115deg,_rgba(255,87,87,0.5)_0_28px,_rgba(161,19,26,0.16)_28px_56px)] [mask-image:linear-gradient(180deg,black,transparent_82%)]" />
    <div className="absolute inset-0 bg-[radial-gradient(60%_55%_at_50%_0%,rgba(220,38,38,0.32),transparent_70%)]" />
  </div>
);

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <HeroStripe />

        <div className="relative mx-auto max-w-6xl px-6 pb-28 pt-44 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#242728] bg-[#101111] px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-red-400">
            <ShieldCheck className="h-3.5 w-3.5" />
            Offensive Security · Penetration Testing
          </span>

          <h1 className="mx-auto mt-8 max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl">
            We&nbsp;
            <span className="text-red-500">secure</span>
             &nbsp;your infrastructure before adversaries breach it.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-400">
            Lincord runs disciplined offensive engagements against your
            networks, web applications and Active Directory — proving impact
            with real-world attacker techniques, then giving you a documentation
            to fix it all.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="h-11 rounded-lg bg-red-600 px-7 text-white shadow-[0_0_28px_rgba(220,38,38,0.4)] hover:bg-red-700"
              onClick={scrollToServices}
            >
              Explore Services
            </Button>
            <Link
              to="/contact"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-[#242728] px-7 text-sm font-medium text-neutral-200 transition-colors hover:border-red-500/40 hover:text-white"
            >
              Talk to an auditor <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mx-auto mt-16 flex max-w-2xl items-center justify-center gap-8 border-t border-[#242728] pt-8 text-sm text-neutral-500">
            <span className="font-medium text-neutral-300">3 engagement types</span>
            <span className="h-1 w-1 rounded-full bg-neutral-700" />
            <span className="font-medium text-neutral-300">5-step methodology</span>
            <span className="h-1 w-1 rounded-full bg-neutral-700" />
            <span className="font-medium text-neutral-300">Manual & Automated</span>
          </div>
        </div>
      </section>

      <section id="services" className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="text-center">
            <span className="text-xs font-medium uppercase tracking-wider text-red-400">
              What we do
            </span>
            <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Three engagement types
            </h2>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-neutral-400">
              Every engagement follows the same offensive methodology. Pick the
              surface you want pentested — for more info, check the services
              page.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.id}
                to="/services"
                className="group rounded-lg border border-[#242728] bg-[#0d0d0d] p-6 text-left transition-colors duration-200 hover:border-red-500/40 hover:bg-[#101111]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-md border border-red-500/30 bg-red-600/10 text-red-400">
                  <service.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-xl font-medium text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                  {service.summary}
                </p>
                <span className="mt-5 flex items-center gap-1.5 text-sm font-medium text-red-400">
                  View details
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}