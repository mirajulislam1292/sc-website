import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function FloatingButtons() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={`fixed bottom-4 left-4 z-[9999] flex h-11 w-11 items-center justify-center rounded-full bg-navy text-white shadow-lg transition-all hover:bg-sky md:bottom-7 md:left-7 md:h-12 md:w-12 ${show ? "opacity-100" : "pointer-events-none opacity-0 translate-y-3"}`}
      >
        <ArrowUp className="h-4 w-4 md:h-5 md:w-5" />
      </button>
    </>
  );
}
