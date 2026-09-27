"use client";

import Image from "next/image";
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
      className={`site-header fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#E9E8E8]/92 shadow-[0_1px_0_rgba(58,32,22,0.12)] backdrop-blur-md"
          : "bg-gradient-to-b from-black/35 to-transparent"
      }`}
    >
      <div className={`mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-500 md:px-8 ${scrolled ? "h-14 md:h-16" : "h-16 md:h-[72px]"}`}>
        <Link href="/" className="flex min-w-0 flex-1 items-center" aria-label="InfinityCrafts home">
          {/* Supplied logo assets, used exactly as provided — white over imagery, brown on the light bar */}
          <Image
            src={scrolled ? "/infinitycrafts-logo.svg" : "/infinitycrafts-logo-white.svg"}
            alt="InfinityCrafts"
            width={208}
            height={47}
            priority
            className="h-7 w-auto sm:h-8 md:h-9"
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`nav-link text-[13.5px] tracking-wide transition-colors ${
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

        <div className="flex shrink-0 items-center gap-2 sm:gap-3 lg:hidden">
          <Link
            href="/contact"
            className="bg-[#3A2016] px-3 py-2.5 text-[11px] font-medium tracking-[0.06em] whitespace-nowrap text-white"
          >
            START A PROJECT
          </Link>
          <button
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label="Toggle menu"
            className={`grid h-11 w-11 place-items-center ${scrolled ? "text-[#3A2016]" : "text-white"}`}
          >
            <span className="block w-5">
              <span className={`block h-px bg-current transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`} />
              <span className={`mt-[5px] block h-px bg-current transition-transform ${open ? "-translate-y-[3px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <nav className="border-t border-[#3A2016]/10 bg-[#E9E8E8] px-5 pt-2 pb-5 lg:hidden" aria-label="Mobile">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-[#3A2016]/8 py-4 text-[16px] text-[#3A2016]"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-4 flex min-h-[52px] items-center justify-center bg-[#3A2016] px-6 text-[13px] font-medium tracking-[0.08em] text-[#E9E8E8]"
          >
            START A PROJECT →
          </Link>
        </nav>
      ) : null}
    </header>
  );
}
