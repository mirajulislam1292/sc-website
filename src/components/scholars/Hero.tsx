import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { useEffect } from "react";
import { WA_LINK } from "@/lib/scholars-data";
import heroCampus from "@/assets/hero-campus.jpg";

const TICKER = [
  "Harvard", "MIT", "Stanford", "UCL", "TU Munich", "Yonsei",
  "U of Toronto", "Imperial", "Amherst", "KAIST", "Williams",
  "Heidelberg", "Edinburgh", "KTH", "McGill",
];

export function Hero() {
  // mouse-driven parallax for cinematic "3D" feel
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 60, damping: 20, mass: 0.6 });
  const bgX = useTransform(sx, [-1, 1], ["-2%", "2%"]);
  const bgY = useTransform(sy, [-1, 1], ["-2%", "2%"]);
  const bgScale = useTransform(sy, [-1, 1], [1.08, 1.12]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      mx.set(x);
      my.set(y);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-[var(--navy-deep)] pt-28"
    >
      {/* full-bleed cinematic campus photo */}
      <motion.div
        className="absolute inset-0 -z-20"
        style={{ x: bgX, y: bgY, scale: bgScale }}
      >
        <img
          src={heroCampus}
          alt="Historic university campus at golden hour"
          width={1920}
          height={1280}
          className="h-full w-full object-cover"
        />
      </motion.div>

      {/* dramatic gradient + vignette overlays (Crimson-style shadow) */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(7,18,42,0.96)_0%,rgba(7,18,42,0.78)_38%,rgba(7,18,42,0.35)_70%,rgba(7,18,42,0.55)_100%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_30%_40%,transparent_0%,rgba(7,18,42,0.55)_70%,rgba(7,18,42,0.95)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-b from-transparent to-[var(--navy-deep)]" />
      {/* subtle grid */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

      <div className="relative mx-auto max-w-[1320px] px-5 md:px-10">
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
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mb-4 italic text-xl text-sky-light/90"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              Thousands Apply. Few Stand Out.
            </motion.p>
            <h1 className="font-display text-[clamp(2.75rem,8vw,7rem)] font-extrabold leading-[0.92] tracking-[-0.035em] text-white [text-shadow:0_2px_30px_rgba(0,0,0,0.45)]">
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
              className="mt-10 max-w-xl text-[17px] leading-[1.7] text-white/80 [text-shadow:0_1px_12px_rgba(0,0,0,0.35)]"
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
            className="flex flex-col justify-end gap-8 border-l border-white/15 pl-8 backdrop-blur-[2px] lg:pl-12"
          >
            <div>
              <div className="font-display text-7xl font-extrabold leading-none text-white [text-shadow:0_2px_20px_rgba(0,0,0,0.5)]">
                100<span className="text-sky">+</span>
              </div>
              <div className="mt-3 text-sm uppercase tracking-[0.18em] text-white/65">
                Students placed worldwide
              </div>
            </div>
            <div className="border-t border-white/15 pt-8">
              <div className="font-display text-7xl font-extrabold leading-none text-white [text-shadow:0_2px_20px_rgba(0,0,0,0.5)]">
                11<span className="text-sky">+</span>
              </div>
              <div className="mt-3 text-sm uppercase tracking-[0.18em] text-white/65">
                Countries · USA · UK · DE
              </div>
            </div>
            <p className="border-t border-white/15 pt-8 text-[15px] leading-relaxed text-white/75">
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
          className="mt-24 border-t border-white/15 pb-10 pt-8"
        >
          <div className="mb-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/55">
            <span className="h-px w-10 bg-white/30" />
            Where our students are heading
          </div>
          <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
            <div className="flex w-max animate-marquee gap-12">
              {[...TICKER, ...TICKER].map((u, i) => (
                <span
                  key={i}
                  className="font-display whitespace-nowrap text-2xl font-bold text-white/40 hover:text-white/90 md:text-3xl"
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
