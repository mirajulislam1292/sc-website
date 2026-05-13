import { Reveal } from "./Reveal";
import { CountUp } from "./CountUp";
import { STATS } from "@/lib/scholars-data";

export function Stats() {
  return (
    <section className="border-b border-border bg-white py-16 md:py-20">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <Reveal>
          <div className="grid grid-cols-2 divide-x divide-border md:grid-cols-4">
            {STATS.map((s, i) => (
              <div key={i} className="px-4 text-center">
                <div className="font-display text-[clamp(2.5rem,5vw,3.5rem)] font-extrabold leading-none text-navy">
                  <CountUp end={s.value} suffix={s.suffix} text={s.text} />
                </div>
                <div className="mt-3 text-[12px] font-medium uppercase tracking-[0.08em] text-slate-600">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
