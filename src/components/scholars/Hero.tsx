import { motion } from "motion/react";
import { Phone, ArrowRight, Star, Trophy, Globe } from "lucide-react";
import { WA_LINK } from "@/lib/scholars-data";

export function Hero() {
  return (
    <section id="top" className="relative isolate min-h-screen overflow-hidden bg-hero-gradient pt-24">
      {/* Particle / star field */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(14,165,233,0.18),transparent_50%),radial-gradient(circle_at_80%_60%,rgba(125,211,252,0.12),transparent_55%)]" />
        {Array.from({ length: 60 }).map((_, i) => (
          <span
            key={i}
            className="absolute block h-1 w-1 rounded-full bg-sky-light/60 animate-pulse-dot"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${2 + Math.random() * 4}s`,
              opacity: 0.2 + Math.random() * 0.7,
            }}
          />
        ))}
      </div>

      {/* Grid lines for depth */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]" />

      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-12 px-5 pb-24 pt-16 md:px-8 lg:grid-cols-[1.2fr_1fr]">
        {/* LEFT */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-sky/40 bg-sky/15 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[0.06em] text-sky-light"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Bangladesh's #1 Study Abroad Consultancy
          </motion.div>

          <h1 className="mt-6 font-display text-balance text-[clamp(3rem,6.5vw,5.5rem)] font-extrabold leading-[1.05] text-white">
            {["Your Dream", "University", "Starts Here."].map((line, i) => (
              <motion.span
                key={line}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 + i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="block"
              >
                {line === "Starts Here." ? (
                  <>
                    Starts Here<span className="text-sky">.</span>
                  </>
                ) : line === "University" ? (
                  <span className="relative inline-block">
                    {line}
                    <motion.svg
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
                      viewBox="0 0 280 12"
                      className="absolute -bottom-2 left-0 h-3 w-full"
                      fill="none"
                    >
                      <motion.path
                        d="M2 8 Q70 2 140 6 T278 4"
                        stroke="#0EA5E9"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </motion.svg>
                  </span>
                ) : (
                  line
                )}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mt-7 max-w-[540px] text-lg leading-[1.75] text-white/80"
          >
            We guide ambitious Bangladeshi students from application to acceptance at top universities worldwide — with expert mentorship, scholarship strategies, and real human support. USA-focused. Globally trusted.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-sky px-8 py-4 text-base font-bold text-white transition-all hover:-translate-y-1 hover:bg-[#0284c7] hover:shadow-button"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <Phone className="h-5 w-5" /> Book a Free Call
            </a>
            <a
              href="#programs"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 px-8 py-4 text-base font-semibold text-white transition-all hover:border-white/80 hover:bg-white/10"
            >
              Explore Programs <ArrowRight className="h-5 w-5" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
            className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-white/60"
          >
            <div className="flex items-center gap-1 text-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <span>Trusted by 100+ Students</span>
            <span className="opacity-50">·</span>
            <span>11+ Countries</span>
            <span className="opacity-50">·</span>
            <span>Scholarship Track</span>
          </motion.div>
        </div>

        {/* RIGHT — floating cards */}
        <div className="relative hidden h-[520px] lg:block">
          <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 animate-glow-pulse rounded-full bg-[radial-gradient(circle,rgba(14,165,233,0.35)_0%,transparent_70%)]" />

          <FloatCard
            className="absolute right-4 top-6 animate-float"
            initial={{ opacity: 0, x: 60 }}
            delay={0.6}
          >
            <Trophy className="h-8 w-8 text-gold" strokeWidth={1.5} aria-hidden />
            <div className="mt-2">
              <div className="font-display text-base font-bold text-white">Scholarship Track</div>
              <div className="mt-1 text-xs text-white/70">Fully funded pathways available</div>
            </div>
          </FloatCard>

          <FloatCard
            className="absolute left-2 top-1/2 -translate-y-1/2 animate-float-delay-2"
            initial={{ opacity: 0, x: -60 }}
            delay={0.9}
          >
            <div className="flex items-center gap-2 text-sm font-semibold text-white">
              <span className="h-2 w-2 rounded-full bg-emerald-400" /> Free Consultation
            </div>
            <div className="mt-1 text-xs text-white/70">No commitment needed</div>
          </FloatCard>

          <FloatCard
            className="absolute bottom-6 right-12 animate-float-delay-1"
            initial={{ opacity: 0, x: 60 }}
            delay={1.2}
          >
            <Globe className="h-8 w-8 text-sky-light" strokeWidth={1.5} aria-hidden />
            <div className="mt-2">
              <div className="font-display text-base font-bold text-white">11+ Countries</div>
              <div className="mt-1 text-xs text-white/70">Worldwide university network</div>
            </div>
          </FloatCard>
        </div>
      </div>

    </section>
  );
}

function FloatCard({
  children,
  className = "",
  initial,
  delay,
}: {
  children: React.ReactNode;
  className?: string;
  initial: { opacity: number; x: number };
  delay: number;
}) {
  return (
    <motion.div
      initial={initial}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.6 }}
      className={className}
    >
      <div className="glass rounded-2xl px-5 py-4 shadow-2xl shadow-black/30">{children}</div>
    </motion.div>
  );
}
