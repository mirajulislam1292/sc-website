import { motion } from "motion/react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { WA_LINK } from "@/lib/scholars-data";

const TICKER = [
  "Harvard",
  "MIT",
  "Stanford",
  "UCL",
  "TU Munich",
  "Yonsei",
  "U of Toronto",
  "Imperial",
  "Amherst",
  "KAIST",
  "Williams",
  "Heidelberg",
  "Edinburgh",
  "KTH",
  "McGill",
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-[var(--navy-deep)] pt-28"
    >
      {/* atmospheric background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(14,165,233,0.22),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(125,211,252,0.12),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      </div>

      <div className="mx-auto max-w-[1320px] px-5 md:px-10">
        {/* eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-light"
        >
          <span className="h-px w-10 bg-sky-light/60" />
          <Sparkles className="h-3 w-3" />
          Bangladesh · Est. 2020 · Trusted by 100+ Students
        </motion.div>

        {/* editorial headline */}
        <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          <div>
            <h1 className="font-display text-[clamp(2.75rem,8vw,7rem)] font-extrabold leading-[0.92] tracking-[-0.035em] text-white">
              {["Where", "ambition", "meets"].map((word, i) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 80 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.08, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="block"
                >
                  {word}
                </motion.span>
              ))}
              <motion.span
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="block italic font-light text-sky-light"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                acceptance.
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="mt-10 max-w-xl text-[17px] leading-[1.7] text-white/70"
            >
              We mentor ambitious Bangladeshi students from a first conversation to an
              acceptance letter — covering applications, scholarships, and the entire
              admissions journey across 11+ countries.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.5 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-sky px-7 py-4 text-[15px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#0284c7] hover:shadow-button"
              >
                Book a free strategy call
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
              </a>
              <a
                href="#programs"
                className="group inline-flex items-center gap-2 px-2 py-4 text-[15px] font-semibold text-white"
              >
                <span className="border-b border-white/40 pb-0.5 transition-colors group-hover:border-white">
                  Explore programs
                </span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </motion.div>
          </div>

          {/* right column — editorial stat block */}
          <motion.aside
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="flex flex-col justify-end gap-8 border-l border-white/10 pl-8 lg:pl-12"
          >
            <div>
              <div className="font-display text-7xl font-extrabold leading-none text-white">
                100<span className="text-sky">+</span>
              </div>
              <div className="mt-3 text-sm uppercase tracking-[0.18em] text-white/55">
                Students placed worldwide
              </div>
            </div>
            <div className="border-t border-white/10 pt-8">
              <div className="font-display text-7xl font-extrabold leading-none text-white">
                11<span className="text-sky">+</span>
              </div>
              <div className="mt-3 text-sm uppercase tracking-[0.18em] text-white/55">
                Countries · USA · UK · DE
              </div>
            </div>
            <p className="border-t border-white/10 pt-8 text-[15px] leading-relaxed text-white/65">
              <span className="font-display text-2xl text-white">"</span>
              Real mentors. Honest advice. The forms, essays, and quiet 1 a.m. WhatsApp
              messages — all of it, together.
            </p>
          </motion.aside>
        </div>

        {/* university ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-24 border-t border-white/10 pb-10 pt-8"
        >
          <div className="mb-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/45">
            <span className="h-px w-10 bg-white/30" />
            Where our students are heading
          </div>
          <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
            <div className="flex w-max animate-marquee gap-12">
              {[...TICKER, ...TICKER].map((u, i) => (
                <span
                  key={i}
                  className="font-display whitespace-nowrap text-2xl font-bold text-white/30 hover:text-white/80 md:text-3xl"
                >
                  {u}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
