import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/data";

export function SiteFooter() {
  return (
    <footer className="bg-[#3A2016] text-[#E9E8E8]">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
          <div>
            {/* Supplied white logo asset, used exactly as provided */}
            <Image
              src="/infinitycrafts-logo-white.svg"
              alt="InfinityCrafts"
              width={208}
              height={47}
              loading="lazy"
              className="h-9 w-auto"
            />
            <p className="mt-4 max-w-xs text-[15px] leading-relaxed text-[#E9E8E8]/75">
              Interior spaces, thoughtfully crafted.
            </p>
            <p className="mt-4 text-[13px] text-[#E9E8E8]/60">{site.location}</p>
          </div>
          <nav aria-label="Footer">
            <p className="text-[12px] tracking-[0.12em] text-[#E9E8E8]/55">Studio</p>
            <ul className="mt-4 space-y-2.5 text-[14px]">
              {[
                ["/work", "Work"],
                ["/services", "Services"],
                ["/approach", "Approach"],
                ["/about", "About"],
                ["/journal", "Journal"],
                ["/contact", "Contact"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="text-[#E9E8E8]/85 hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="text-[12px] tracking-[0.12em] text-[#E9E8E8]/55">Contact</p>
            <ul className="mt-4 space-y-2.5 text-[14px] text-[#E9E8E8]/85">
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-white">
                  {site.email}
                </a>
              </li>
              <li>{site.phone} — placeholder, replace with verified number</li>
              <li className="flex gap-4 pt-1">
                <a href={site.instagram} className="underline underline-offset-4 hover:text-white">
                  Instagram
                </a>
                <a href={site.pinterest} className="underline underline-offset-4 hover:text-white">
                  Pinterest
                </a>
              </li>
            </ul>
          </div>
          <div className="bg-[#E9E8E8]/8 p-6 md:p-7">
            <p className="text-[22px] leading-snug">Have a space in mind?</p>
            <p className="mt-2 text-[14px] leading-relaxed text-[#E9E8E8]/70">
              Tell us a little about your project, and let&apos;s begin the conversation.
            </p>
            <Link
              href="/contact"
              className="mt-5 inline-block bg-[#E9E8E8] px-6 py-3 text-[13px] font-medium tracking-[0.06em] text-[#3A2016] hover:bg-white"
            >
              START A PROJECT →
            </Link>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-white/15 pt-6 text-[12px] text-[#E9E8E8]/55 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} InfinityCrafts, Bangalore. All rights reserved.</p>
          <p className="flex gap-5">
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
            <Link href="/terms" className="hover:text-white">Terms</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
