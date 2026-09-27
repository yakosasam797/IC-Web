import Image from "next/image";
import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { CtaBand, SectionHeading } from "@/components/Ui";
import { IMAGES } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description: "InfinityCrafts — an interior design studio in Bangalore. What we believe, how we work, and who we design for.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-[#E9E8E8] px-5 pt-32 pb-12 md:px-8 md:pt-40">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-end">
          <Reveal>
            <SectionHeading
              index="About"
              title="A studio shaped by continuity and craft."
              copy="InfinityCrafts is an interior design studio based in Bangalore, working on homes across the city. We design slowly enough to get the details right."
            />
          </Reveal>
          <Reveal>
            <p className="max-w-xl text-[16px] leading-relaxed text-[#3A2016]/78">
              Our mark — a continuous outer form holding architectural verticals — sets the way we
              think: continuity between people and spaces, structure beneath warmth, and craft in
              every junction.
            </p>
          </Reveal>
        </div>
      </section>
      <section className="bg-[#F4F2EF]">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 md:grid-cols-12 md:px-8">
          <div className="md:col-span-7">
            <Reveal image>
              <Image src={IMAGES.about} alt="Studio interior with layered textures" width={1400} height={1000} sizes="(max-width: 768px) 100vw, 60vw" loading="lazy" className="aspect-[4/3] w-full object-cover" />
            </Reveal>
          </div>
          <div className="md:col-span-5">
            <Reveal>
              <h2 className="text-[13px] tracking-[0.14em] text-[#685745]">WHAT WE BELIEVE</h2>
              <ul className="mt-4 space-y-4 text-[15px] leading-relaxed text-[#3A2016]/85">
                <li>Rooms should support daily life first, and photograph well second.</li>
                <li>Materials should be honest, tactile and allowed to age.</li>
                <li>Proportion and light matter more than decoration.</li>
                <li>Every home should feel personal, not styled.</li>
              </ul>
              <h2 className="mt-8 text-[13px] tracking-[0.14em] text-[#685745]">WHO WE WORK WITH</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-[#3A2016]/85">
                Homeowners across Bangalore — apartments, villas and independent homes — who value
                clarity, warmth and a structured process over quick styling.
              </p>
              <div className="mt-8 border border-dashed border-[#3A2016]/30 bg-white/50 p-5 text-[14px] text-[#3A2016]/75">
                Founder and team profiles are placeholders. Replace with verified biographies and
                studio photography before launch. No invented names or histories are published.
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      <CtaBand title="Meet the studio through its work." copy="The clearest introduction is a project walkthrough — start there, then say hello." />
    </>
  );
}
