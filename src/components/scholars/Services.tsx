import { Reveal, RevealStagger, StaggerItem } from "./Reveal";
import { SERVICES } from "@/lib/scholars-data";
import { ScholarIcon } from "./ScholarIcon";

export function Services() {
  return (
    <section id="services" className="bg-[#F8FAFC] py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.15em] text-sky">Individual Services</span>
          <h2 className="mt-4 font-display text-[clamp(2rem,3.5vw,3rem)] font-extrabold text-navy">
            Every piece of the journey, handled.
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-slate-600">
            Pick exactly the support you need. Our individual services let you plug expert help in wherever the road feels uncertain.
          </p>
        </Reveal>

        <RevealStagger className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => (
            <StaggerItem key={s.title}>
              <div className="group h-full rounded-2xl border border-border bg-white p-6 transition-all hover:-translate-y-1.5 hover:border-sky hover:shadow-card-hover">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-tint text-sky-deep transition-transform group-hover:scale-110">
                  <ScholarIcon name={s.icon} className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-navy">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
