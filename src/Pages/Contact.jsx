import { useState } from "react";
import { ShieldCheck } from "lucide-react";
import { Button } from "@/Components/ui/button";
import { services } from "@/data/services";

const inputClass =
  "w-full rounded-lg border border-[#242728] bg-[#101111] px-4 py-2.5 text-sm text-neutral-200 placeholder:text-neutral-600 outline-none transition-colors focus:border-red-500/60 focus:ring-2 focus:ring-red-500/20";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: services[0].title,
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="mx-auto max-w-6xl px-6 pb-28 pt-44">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <span className="text-xs font-medium uppercase tracking-wider text-red-400">
            Contact
          </span>
          <h1 className="mt-4 text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl">
            Tell us what to attack
          </h1>
          <p className="mt-5 max-w-md leading-relaxed text-neutral-400">
            Request a quote or scope an engagement. An auditor gets back to you
            within one business day.
          </p>

          <div className="mt-10 flex items-center gap-2.5 rounded-lg border border-[#242728] bg-[#0d0d0d] p-4 text-sm text-neutral-400">
            <ShieldCheck className="h-4 w-4 shrink-0 text-red-400" />
            Authorized testing only. A signed statement of work and scope
            boundaries are agreed before any engagement begins.
          </div>
        </div>

        <div className="rounded-lg border border-[#242728] bg-[#0d0d0d] p-6 sm:p-8">
          {submitted ? (
            <div className="flex h-full min-h-72 flex-col items-center justify-center text-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600/15 text-red-400">
                <ShieldCheck className="h-6 w-6" />
              </span>
              <h2 className="mt-5 text-xl font-medium text-white">
                Request received
              </h2>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-neutral-400">
                Thanks, {form.name || "there"}. We'll be in touch at{" "}
                {form.email || "your email"} shortly — with scope and pricing.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium text-neutral-300">
                    Name
                  </span>
                  <input
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jane Doe"
                    className={inputClass}
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium text-neutral-300">
                    Work email
                  </span>
                  <input
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@company.com"
                    className={inputClass}
                  />
                </label>
              </div>

              <label className="block">
                <span className="mb-1.5 block text-sm font-medium text-neutral-300">
                  Service
                </span>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className={inputClass}
                >
                  {services.map((service) => (
                    <option key={service.id} value={service.title}>
                      {service.title}
                    </option>
                  ))}
                  <option value="Custom Scope">Custom Scope</option>
                </select>
              </label>

              <label className="block">
                <span className="mb-1.5 block text-sm font-medium text-neutral-300">
                  What should we attack?
                </span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Targets, scope, compliance drivers, timelines…"
                  className={`${inputClass} resize-none`}
                />
              </label>

              <Button
                type="submit"
                size="lg"
                className="h-11 w-full rounded-lg bg-red-600 text-white shadow-[0_0_28px_rgba(220,38,38,0.35)] hover:bg-red-700"
              >
                Request a Quote
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}