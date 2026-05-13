import { Reveal, RevealStagger, StaggerItem } from "./Reveal";
import { TESTIMONIALS, WA_LINK } from "@/lib/scholars-data";
import { Star } from "lucide-react";

export function SuccessStories() {
  return (
    <section id="success" className="bg-sky-soft py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.15em] text-sky">Student Wins</span>
          <h2 className="mt-4 font-display text-[clamp(2rem,3.5vw,3rem)] font-extrabold text-navy">
            Real Students. Real Results.
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-slate-600">
            Every success story started with a conversation. Here's what happens when preparation meets opportunity — and the right guidance.
          </p>
        </Reveal>

        <RevealStagger className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
          {TESTIMONIALS.map((t) => (
            <StaggerItem key={t.name}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-white pt-9 transition-all hover:-translate-y-1.5 hover:border-sky hover:shadow-card-hover">
                <div className="px-9">
                  <div className="font-display text-6xl leading-none text-sky/15">"</div>
                  <p className="mt-2 text-[15px] italic leading-[1.85] text-slate-600">{t.quote}</p>
                  <div className="mt-7 flex items-center gap-4">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${t.color} font-display text-base font-extrabold text-white`}>
                      {t.initials}
                    </div>
                    <div>
                      <div className="font-display text-base font-bold text-navy">{t.name}</div>
                      <div className="text-[13px] font-semibold text-sky-deep">{t.destination}</div>
                      <div className="text-[12px] text-slate-500">{t.year}</div>
                    </div>
                    <div className="ml-auto flex gap-0.5 text-gold">
                      {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}
                    </div>
                  </div>
                </div>
                <div className="mt-7 bg-gradient-to-r from-sky to-navy px-9 py-4 text-center text-sm font-bold text-white">
                  {t.outcome}
                </div>
              </article>
            </StaggerItem>
          ))}
        </RevealStagger>

        <Reveal className="mt-12 text-center">
          <p className="text-slate-600">Your success story is next.</p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-sky px-7 py-3.5 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#0284c7] hover:shadow-button"
          >
            Book a Free Consultation →
          </a>
        </Reveal>
      </div>

      {/* Results ticker */}
      <div className="mt-16 overflow-hidden border-y border-sky/25 bg-navy py-3">
        <div className="flex w-max animate-marquee items-center gap-12 text-sm text-sky-light">
          {[
            "🏆 Dhaka student admitted to Amherst College · 100% Aid — 2024",
            "💵 Chittagong student receives GKS Full Scholarship — 2024",
            "✅ 3 students admitted to top-30 US universities in 2024",
            "🎓 Sylhet student wins Stipendium Hungaricum — 2024",
            "✨ Dhaka student admitted to UCL with merit — 2024",
            "🏆 Dhaka student admitted to Amherst College · 100% Aid — 2024",
            "💵 Chittagong student receives GKS Full Scholarship — 2024",
            "✅ 3 students admitted to top-30 US universities in 2024",
            "🎓 Sylhet student wins Stipendium Hungaricum — 2024",
            "✨ Dhaka student admitted to UCL with merit — 2024",
          ].map((line, i) => (
            <span key={i} className="whitespace-nowrap">{line}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
