import { Reveal, RevealStagger, StaggerItem } from "./Reveal";
import { COUNTRIES } from "@/lib/scholars-data";
import { ArrowRight, Globe, Star } from "lucide-react";
import { WA_LINK } from "@/lib/scholars-data";

export function Destinations() {
  return (
    <section id="destinations" className="bg-sky-soft py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center justify-center gap-1.5 text-xs font-bold uppercase tracking-[0.15em] text-sky">
            <Globe className="h-3.5 w-3.5" strokeWidth={2} aria-hidden />
            Global reach
          </span>
          <h2 className="mt-4 font-display text-[clamp(2rem,3.5vw,3rem)] font-extrabold text-navy">
            Study in Your Dream Country
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-slate-600">
            We provide expert guidance for university admissions in 11+ countries. Our deepest expertise is USA admissions — where we help students land at elite universities with need-based scholarships.
          </p>
        </Reveal>

        <RevealStagger className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {COUNTRIES.map((c) => (
            <StaggerItem key={c.name}>
              <div
                className={`group relative h-full overflow-hidden rounded-3xl border bg-white p-7 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover ${
                  c.featured
                    ? "border-gold/60 ring-1 ring-gold/30"
                    : "border-border hover:border-sky"
                }`}
              >
                {c.featured && (
                  <div className="absolute right-3 top-3 rounded-full bg-gold/15 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-gold-deep">
                    Primary
                  </div>
                )}
                <div className="text-5xl">{c.flag}</div>
                <div className="mt-4 font-display text-base font-bold text-navy">{c.name}</div>
                <div className="mt-2 text-[13px] leading-snug text-slate-500">{c.note}</div>
                <div className="mt-4 inline-flex items-center gap-1 rounded-full bg-sky-tint px-3 py-1 text-[11px] font-semibold text-sky-deep">
                  {c.featured && <Star className="h-3 w-3 fill-gold text-gold-deep" aria-hidden />}
                  {c.tag}
                </div>
              </div>
            </StaggerItem>
          ))}
          <StaggerItem>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-full flex-col items-center justify-center rounded-3xl bg-navy p-7 text-center text-white transition-all hover:-translate-y-2 hover:bg-midnight"
            >
              <Globe className="mx-auto h-12 w-12 text-sky-light" strokeWidth={1.25} aria-hidden />
              <div className="mt-4 font-display text-base font-bold">More on request</div>
              <div className="mt-2 text-[13px] text-white/70">Ask about your preferred destination</div>
              <div className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-sky-light">
                Contact Us <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </a>
          </StaggerItem>
        </RevealStagger>
      </div>
    </section>
  );
}
