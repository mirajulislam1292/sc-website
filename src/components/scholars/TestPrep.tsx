import { Reveal, RevealStagger, StaggerItem } from "./Reveal";
import { TESTS, WA_LINK } from "@/lib/scholars-data";
import { Check } from "lucide-react";

export function TestPrep() {
  return (
    <section id="test-prep" className="bg-sky-soft py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.15em] text-sky">Test Preparation</span>
          <h2 className="mt-4 font-display text-[clamp(2rem,3.5vw,3rem)] font-extrabold text-navy">
            English Proficiency & Standardized Tests
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-slate-600">
            Strong test scores open doors. We mentor students for every major exam required for international university admissions.
          </p>
        </Reveal>

        <RevealStagger className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {TESTS.map((t) => (
            <StaggerItem key={t.abbr}>
              <div
                className="group relative h-full overflow-hidden rounded-3xl border-[1.5px] border-border bg-white p-9 transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover"
                style={{ borderTopColor: t.accent, borderTopWidth: "5px" }}
              >
                <div className="flex items-baseline justify-between gap-4">
                  <div>
                    <div className="font-display text-4xl font-extrabold text-navy">{t.abbr}</div>
                    <div className="mt-1 text-[13px] text-slate-500">{t.full}</div>
                  </div>
                  <span
                    className="rounded-full px-3 py-1 text-[11px] font-semibold"
                    style={{ background: `${t.accent}1A`, color: t.accent }}
                  >
                    {t.badge}
                  </span>
                </div>
                <p className="mt-5 text-[15px] leading-relaxed text-slate-600">{t.description}</p>
                <ul className="mt-6 space-y-2.5">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[14px] text-slate-700">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0" style={{ color: t.accent }} strokeWidth={3} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-7 inline-flex items-center gap-2 rounded-full bg-gold/15 px-4 py-2 text-[13px] font-bold text-gold-deep">
                  ⭐ {t.target}
                </div>
              </div>
            </StaggerItem>
          ))}
        </RevealStagger>

        <Reveal className="mt-12 text-center">
          <p className="text-slate-600">Not sure which test to take? Let us help you choose.</p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-sky px-7 py-3.5 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#0284c7] hover:shadow-button"
          >
            💬 Talk to a Test Mentor
          </a>
        </Reveal>
      </div>
    </section>
  );
}
