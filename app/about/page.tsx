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
            </Reveal>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="bg-[#3A2016] text-[#E9E8E8]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-12 md:items-start md:px-8 md:py-24">
          <Reveal className="md:col-span-5">
            <div className="grid aspect-[4/5] w-full place-items-center rounded-[4px] border border-dashed border-[#E9E8E8]/30 bg-[#E9E8E8]/5 p-8 text-center">
              <div>
                <p className="text-[48px] leading-none text-[#E9E8E8]/40">○</p>
                <p className="mt-4 text-[13px] tracking-[0.12em] text-[#E9E8E8]/55">FOUNDER PORTRAIT — TO BE ADDED</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={140} className="md:col-span-7">
            <div>
              <p className="text-[12px] tracking-[0.14em] text-[#E9E8E8]/60">THE FOUNDER</p>
              <h2 className="mt-3 text-4xl leading-tight font-medium md:text-[52px]">
                A note from the founder — to be added.
              </h2>
              <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-[#E9E8E8]/75">
                This space is reserved for the founder&apos;s own words — background, what shaped the
                studio&apos;s eye, and how InfinityCrafts likes to work with clients. Nothing here is
                invented; the section goes live once verified copy and a portrait are supplied.
              </p>
              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                {[
                  ["Background", "Practice, training and years behind the work."],
                  ["Philosophy", "What good interiors mean, in the founder's own lines."],
                  ["Way of working", "How clients experience a project, honestly described."],
                ].map(([t, c]) => (
                  <div key={t} className="border-t border-[#E9E8E8]/20 pt-4">
                    <p className="text-[13px] tracking-[0.12em] text-[#E9E8E8]/60">{t}</p>
                    <p className="mt-2 text-[14px] leading-relaxed text-[#E9E8E8]/75">{c}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Team */}
      <section className="bg-[#E9E8E8]">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <Reveal>
            <SectionHeading
              index="The team"
              title="Small studio, close attention."
              copy="Designers and coordinators who stay with a project from first sketch to final walkthrough. Profiles below are placeholders awaiting verified names, roles and portraits."
            />
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {["Design", "Detailing", "Coordination"].map((role, i) => (
              <Reveal key={role} delay={i * 90}>
                <div className="rounded-[4px] border border-dashed border-[#3A2016]/25 bg-white/50 p-6 md:min-h-[260px] md:p-7">
                  <div className="grid h-16 w-16 place-items-center rounded-full bg-[#3A2016]/10 text-[20px] text-[#685745]">
                    {["D", "J", "C"][i]}
                  </div>
                  <p className="mt-5 text-lg font-medium text-[#3A2016]">Name — to be confirmed</p>
                  <p className="mt-1 text-[13px] tracking-[0.1em] text-[#685745]">{role.toUpperCase()} · ROLE TO BE CONFIRMED</p>
                  <p className="mt-3 text-[14px] leading-relaxed text-[#3A2016]/70">
                    A two-line profile goes here once the studio confirms it.
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Meet the studio through its work." copy="The clearest introduction is a project walkthrough — start there, then say hello." />
    </>
  );
}
