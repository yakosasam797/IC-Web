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
            <div className="bg-[#3A2016] p-8 text-[#E9E8E8] md:p-10">
              <h2 className="text-2xl font-medium md:text-3xl">Not sure what your project needs?</h2>
              <p className="mt-2 max-w-xl text-[15px] text-[#E9E8E8]/70">
                Describe your space in a few lines. We will help you scope it before you commit to anything.
              </p>
              <Link href="/contact" className="mt-5 inline-block bg-[#E9E8E8] px-7 py-3.5 text-[13px] font-medium tracking-[0.06em] text-[#3A2016] hover:bg-white">
                TELL US ABOUT YOUR PROJECT
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
      <CtaBand title="Let's discuss what your project needs." copy="A short enquiry is enough to begin. We read every project note carefully." />
    </>
  );
}
