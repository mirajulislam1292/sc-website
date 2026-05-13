import { Reveal, RevealStagger, StaggerItem } from "./Reveal";
import { RESOURCES } from "@/lib/scholars-data";
import { ArrowRight } from "lucide-react";
import { ScholarIcon } from "./ScholarIcon";

export function Resources() {
  return (
    <section id="resources" className="bg-[#F8FAFC] py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.15em] text-sky">Knowledge Hub</span>
          <h2 className="mt-4 font-display text-[clamp(2rem,3.5vw,3rem)] font-extrabold text-navy">
            Free Resources for Every Student
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-slate-600">
            We believe information should be free. Every guide, checklist, and article below costs you nothing. Start learning today.
          </p>
        </Reveal>

        <RevealStagger className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {RESOURCES.map((r) => (
            <StaggerItem key={r.title}>
              <article className="group flex h-full flex-col rounded-3xl border border-border bg-white p-7 transition-all hover:-translate-y-1.5 hover:border-sky hover:shadow-card-hover">
                <span className="inline-flex w-fit rounded-full bg-sky-tint px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-sky-deep">
                  {r.tag}
                </span>
                <div className="mt-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-tint text-sky-deep">
                  <ScholarIcon name={r.icon} className="h-7 w-7" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-navy">{r.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{r.teaser}</p>
                <a href="#newsletter" className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-sky-deep">
                  Read <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </article>
            </StaggerItem>
          ))}
        </RevealStagger>

        <Reveal className="mt-12 text-center text-sm text-slate-500">
          More guides coming soon ·{" "}
          <a className="font-semibold text-sky-deep hover:underline" href="https://www.instagram.com/scholars_cafe_/" target="_blank" rel="noopener noreferrer">
            Follow @scholars_cafe_ for weekly tips
          </a>
        </Reveal>
      </div>
    </section>
  );
}
