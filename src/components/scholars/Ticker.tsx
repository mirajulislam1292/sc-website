import { TICKER_ITEMS } from "@/lib/scholars-data";

export function Ticker() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <div className="relative overflow-hidden border-y border-sky/25 bg-navy py-3.5">
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-12 bg-gradient-to-r from-navy to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-12 bg-gradient-to-l from-navy to-transparent" />
      <div className="flex w-max animate-marquee items-center gap-10">
        {items.map((it, i) => (
          <div key={i} className="flex items-center gap-3 whitespace-nowrap">
            <span className="h-1.5 w-1.5 rounded-full bg-sky shadow-[0_0_10px_2px_rgba(14,165,233,0.7)]" />
            <span className="text-[13px] font-medium tracking-[0.04em] text-sky-light">{it}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
