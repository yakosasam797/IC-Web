"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/approach", label: "Approach" },
  { href: "/about", label: "About" },
  { href: "/journal", label: "Journal" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#E9E8E8]/92 shadow-[0_1px_0_rgba(58,32,22,0.12)] backdrop-blur-md"
          : "bg-gradient-to-b from-black/35 to-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-[72px] md:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="InfinityCrafts home">
          <span
            aria-hidden
            className={`grid h-9 w-9 place-items-center rounded-[4px] ${scrolled ? "bg-[#3A2016] text-[#E9E8E8]" : "bg-[#E9E8E8]/95 text-[#3A2016]"}`}
          >
            <svg width="22" height="14" viewBox="0 0 32 20" fill="none">
              <path
                d="M16 2 C10 2 4 6 4 10 C4 14 10 18 16 18 C18.5 18 20 15.5 20 13 V7 C20 4.5 21.5 2 24 2"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M16 18 C22 18 28 14 28 10 C28 6 22 2 16 2"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.55"
              />
              <path d="M13 5v10M16 4v12M19 6v8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
          </span>
          <span className={`leading-none ${scrolled ? "text-[#3A2016]" : "text-white"}`}>
            <span className="block text-[15px] font-medium tracking-[0.08em]">INFINITYCRAFTS</span>
            <span className="mt-1 block text-[11px] tracking-[0.14em] opacity-70">BANGALORE</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-[13.5px] tracking-wide transition-colors ${
                scrolled ? "text-[#3A2016]/85 hover:text-[#3A2016]" : "text-white/85 hover:text-white"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-[#3A2016] px-5 py-2.5 text-[13px] font-medium tracking-[0.06em] text-[#E9E8E8] transition-colors hover:bg-[#685745]"
          >
            START A PROJECT
          </Link>
        </nav>

        <div className="flex items-center gap-3 lg:hidden">
          <Link
            href="/contact"
            className="bg-[#3A2016] px-4 py-2 text-[12px] font-medium tracking-wide text-white"
          >
            START A PROJECT
          </Link>
          <button
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label="Toggle menu"
            className={`grid h-10 w-10 place-items-center ${scrolled ? "text-[#3A2016]" : "text-white"}`}
          >
            <span className="block w-5">
              <span className={`block h-px bg-current transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`} />
              <span className={`mt-[5px] block h-px bg-current transition-transform ${open ? "-translate-y-[3px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <nav className="border-t border-[#3A2016]/10 bg-[#E9E8E8] px-5 py-4 lg:hidden" aria-label="Mobile">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-[#3A2016]/8 py-3 text-[15px] text-[#3A2016]"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
