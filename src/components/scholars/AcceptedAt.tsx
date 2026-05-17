import allegheny from "@/assets/uni-logos/allegheny.png";

type Uni = { name: string; founded?: string; logo: string };

// Add more entries as logos are uploaded.
const UNIVERSITIES: Uni[] = [
  { name: "Allegheny College", founded: "Est. 1815", logo: allegheny },
];

export function AcceptedAt() {
  // Duplicate for seamless marquee
  const row = [...UNIVERSITIES, ...UNIVERSITIES, ...UNIVERSITIES, ...UNIVERSITIES];

  return (
    <section
      id="accepted-at"
      className="relative border-y border-black/10 bg-[var(--paper,#f7f5f0)] py-20 md:py-28 dark:border-white/10 dark:bg-[var(--navy-deep)]"
    >
      <div className="mx-auto max-w-[1320px] px-5 md:px-10">
        <div className="mb-12 flex flex-col items-start gap-3 md:mb-16">
          <span className="kicker text-[11px] font-semibold uppercase tracking-[0.22em] text-sky">
            <span className="mr-2 inline-block h-px w-8 align-middle bg-sky" />
            Acceptance letters
          </span>
          <h2 className="font-display text-[clamp(2rem,5vw,3.75rem)] font-extrabold leading-[1.02] tracking-[-0.02em] text-[var(--navy-deep)] dark:text-white">
            Where our students <span className="italic font-light text-sky" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>got in.</span>
          </h2>
          <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-black/65 dark:text-white/65">
            Real admits from Scholars Café mentees — from liberal-arts gems to research powerhouses across the world.
          </p>
        </div>

        {UNIVERSITIES.length <= 4 ? (
          // Static grid for small lists (looks more elegant than a marquee with one logo)
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-black/10 bg-black/10 sm:grid-cols-2 lg:grid-cols-3 dark:border-white/15 dark:bg-white/15">
            {UNIVERSITIES.map((u) => (
              <LogoCard key={u.name} uni={u} />
            ))}
          </div>
        ) : (
          <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_6%,black_94%,transparent)]">
            <div className="flex w-max animate-marquee gap-12 md:gap-20">
              {row.map((u, i) => (
                <LogoRow key={i} uni={u} />
              ))}
            </div>
          </div>
        )}

        <p className="mt-10 text-[12px] uppercase tracking-[0.18em] text-black/45 dark:text-white/45">
          More logos joining soon · {UNIVERSITIES.length}+ partner institutions
        </p>
      </div>
    </section>
  );
}

function LogoCard({ uni }: { uni: Uni }) {
  return (
    <div className="group flex items-center gap-6 bg-[var(--paper,#f7f5f0)] p-8 transition-colors hover:bg-white md:gap-8 md:p-10 dark:bg-[var(--navy-deep)] dark:hover:bg-[#0c1b3a]">
      <img
        src={uni.logo}
        alt={`${uni.name} logo`}
        width={120}
        height={120}
        loading="lazy"
        className="h-20 w-20 flex-none object-contain opacity-80 grayscale transition-all duration-500 group-hover:scale-105 group-hover:opacity-100 md:h-24 md:w-24 dark:invert dark:opacity-70 dark:group-hover:opacity-100"
      />
      <div className="min-w-0">
        <div className="font-display text-xl font-bold leading-tight tracking-[-0.01em] text-[var(--navy-deep)] md:text-2xl dark:text-white">
          {uni.name}
        </div>
        {uni.founded && (
          <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-black/50 dark:text-white/50">
            {uni.founded}
          </div>
        )}
      </div>
    </div>
  );
}

function LogoRow({ uni }: { uni: Uni }) {
  return (
    <div className="flex flex-none items-center gap-5">
      <img
        src={uni.logo}
        alt={`${uni.name} logo`}
        width={80}
        height={80}
        loading="lazy"
        className="h-16 w-16 object-contain opacity-70 grayscale md:h-20 md:w-20 dark:invert dark:opacity-60"
      />
      <span className="font-display whitespace-nowrap text-2xl font-bold tracking-[-0.01em] text-black/70 md:text-3xl dark:text-white/70">
        {uni.name}
      </span>
    </div>
  );
}
