import Link from "next/link";
import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { CtaBand, SectionHeading } from "@/components/Ui";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description: "Interior design, space planning, material selection, custom joinery and design coordination in Bangalore.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-[#E9E8E8] px-5 pt-32 pb-12 md:px-8 md:pt-40 md:pb-16">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              index="Services"
              title="What InfinityCrafts actually does."
              copy="Each service is scoped clearly — what it is, who it is for, and what you receive. Nothing decorative, nothing vague."
            />
          </Reveal>
        </div>
      </section>
      <section className="bg-[#F4F2EF]">
        <div className="mx-auto max-w-7xl space-y-px px-5 py-12 md:px-8 md:py-16">
          {services.map((s, i) => (
            <Reveal key={s.slug}>
              <article className="grid gap-6 bg-[#E9E8E8] p-6 md:grid-cols-12 md:p-10">
                <div className="md:col-span-5">
                  <p className="text-[12px] tracking-[0.14em] text-[#685745]">0{i + 1}</p>
                  <h2 className="mt-2 text-3xl font-medium text-[#3A2016]">{s.title}</h2>
                  <p className="mt-3 text-[15px] leading-relaxed text-[#3A2016]/75">{s.statement}</p>
                  <Link href={`/services/${s.slug}`} className="alink mt-5 inline-block text-[13px] font-medium tracking-[0.08em] text-[#3A2016]">
                    ABOUT THIS SERVICE <span className="arr" aria-hidden>→</span>
                  </Link>
                </div>
                <div className="md:col-span-4">
                  <p className="text-[12px] tracking-[0.12em] text-[#685745]">WHAT IS INCLUDED</p>
                  <ul className="mt-3 space-y-2 text-[14px] text-[#3A2016]/85">
                    {s.includes.map((x) => (
                      <li key={x} className="border-b border-[#3A2016]/10 pb-2">{x}</li>
                    ))}
                  </ul>
                </div>
                <div className="md:col-span-3">
                  <p className="text-[12px] tracking-[0.12em] text-[#685745]">WHO IT IS FOR</p>
                  <p className="mt-3 text-[14px] leading-relaxed text-[#3A2016]/85">{s.forWhom}</p>
                </div>
              </article>
            </Reveal>
          ))}
          <Reveal>
            <div className="grid gap-px bg-[#3A2016]/12 md:grid-cols-2">
              <div className="bg-[#3A2016] p-8 text-[#E9E8E8] md:p-10">
                <p className="text-[12px] tracking-[0.14em] text-[#E9E8E8]/60">ENGAGEMENT — 01</p>
                <h2 className="mt-3 text-3xl font-medium">Design</h2>
                <p className="mt-3 max-w-md text-[15px] leading-relaxed text-[#E9E8E8]/75">
                  The complete interior on paper — plans, palette, joinery details, furniture and
                  light — handed over as a resolved set you can execute with your own contractor.
                </p>
                <ul className="mt-6 space-y-2.5 text-[14px] text-[#E9E8E8]/85">
                  {["Full drawing set", "Material and finish schedule", "Furniture specification", "Execution guidance notes"].map((x) => (
                    <li key={x} className="border-b border-white/12 pb-2.5">{x}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#E9E8E8] p-8 md:p-10">
                <p className="text-[12px] tracking-[0.14em] text-[#685745]">ENGAGEMENT — 02</p>
                <h2 className="mt-3 text-3xl font-medium text-[#3A2016]">Design + Execution</h2>
                <p className="mt-3 max-w-md text-[15px] leading-relaxed text-[#3A2016]/75">
                  Everything in Design, carried onto site — reviews, finish checks and joinery
                  alignment so the finished rooms match the drawings.
                </p>
                <ul className="mt-6 space-y-2.5 text-[14px] text-[#3A2016]/85">
                  {["Everything in Design", "Scheduled site reviews", "Finish and sample sign-offs", "Snag review before handover"].map((x) => (
                    <li key={x} className="border-b border-[#3A2016]/12 pb-2.5">{x}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="flex flex-col gap-4 bg-white/60 p-8 md:flex-row md:items-center md:justify-between md:p-10">
              <div>
                <h2 className="text-2xl font-medium text-[#3A2016]">Not sure which language suits you?</h2>
                <p className="mt-2 max-w-xl text-[15px] text-[#3A2016]/70">
                  Browse the style catalogue — six starting moods to help you describe what home feels like.
                </p>
              </div>
              <Link href="/styles" className="alink inline-block shrink-0 border border-[#3A2016]/30 px-7 py-3.5 text-[13px] font-medium tracking-[0.06em] text-[#3A2016] hover:border-[#3A2016]">
                VIEW STYLE CATALOGUE <span className="arr" aria-hidden>→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
      <CtaBand title="Let's discuss what your project needs." copy="A short enquiry is enough to begin. We read every project note carefully." />
    </>
  );
}
