import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { WA_LINK } from "@/lib/scholars-data";
import { ThemeToggle } from "./ThemeToggle";

const NAV = [
  { label: "Home", href: "#top" },
  { label: "Programs", href: "#programs" },
  { label: "Destinations", href: "#destinations" },
  { label: "Services", href: "#services" },
  { label: "Test Prep", href: "#test-prep" },
  { label: "Resources", href: "#resources" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[1000] transition-all duration-300 ${
          scrolled ? "glass-nav shadow-nav h-[64px]" : "bg-transparent h-[72px]"
        }`}
      >
        <div className="mx-auto flex h-full max-w-[1280px] items-center justify-between px-5 md:px-8">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-navy text-white">
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                <path d="M12 2L3 7v6c0 5 4 8 9 9 5-1 9-4 9-9V7l-9-5z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                <path d="M8 11l3 3 5-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="font-display text-xl font-extrabold">
              <span className={scrolled ? "text-navy" : "text-white"}>Scholars</span>
              <span className="text-sky"> Cafe</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`group relative text-[15px] font-medium transition-colors ${
                  scrolled ? "text-slate-600 hover:text-navy" : "text-white/85 hover:text-white"
                }`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 bg-sky transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle scrolled={scrolled} />
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="hidden h-10 w-10 items-center justify-center rounded-full text-whatsapp transition-transform hover:scale-110 md:flex"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-full bg-sky px-5 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#0284c7] hover:shadow-button md:inline-flex"
            >
              <Phone className="h-4 w-4" /> Book a Free Call
            </a>
            <button
              onClick={() => setOpen(true)}
              aria-label="Menu"
              className={`lg:hidden ${scrolled ? "text-navy" : "text-white"}`}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[2000] bg-navy-deep p-6 lg:hidden"
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-2xl text-white">Scholars <span className="text-sky">Cafe</span></span>
              <button onClick={() => setOpen(false)} aria-label="Close" className="text-white"><X className="h-7 w-7" /></button>
            </div>
            <nav className="mt-12 flex flex-col gap-6">
              {NAV.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 * i }}
                  className="text-2xl font-semibold text-white"
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
            <div className="absolute inset-x-6 bottom-10 flex gap-3">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="flex-1 rounded-full bg-whatsapp py-3 text-center font-semibold text-white">WhatsApp</a>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="flex-1 rounded-full bg-sky py-3 text-center font-semibold text-white">Book Call</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
