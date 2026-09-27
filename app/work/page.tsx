import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/Ui";
import { projects } from "@/lib/data";
import { WorkFilter } from "./WorkFilter";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected residential interiors by InfinityCrafts in Bangalore — apartments, villas and homes.",
};

export default function WorkPage() {
  return (
    <>
      <section className="bg-[#E9E8E8] px-5 pt-32 pb-10 md:px-8 md:pt-40">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-[12px] tracking-[0.14em] text-[#685745]">Portfolio</p>
            <h1 className="mt-3 max-w-3xl text-5xl leading-[1.02] font-medium tracking-tight text-[#3A2016] md:text-[68px]">
              Work that lives well.
            </h1>
            <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-[#3A2016]/75">
              An editorial selection of residences. Filter by type, then open a project to read the
              brief, the idea and the material decisions.
            </p>
          </Reveal>
          <WorkFilter />
        </div>
      </section>

      <section className="bg-[#F4F2EF]">
        <div className="mx-auto max-w-7xl space-y-14 px-5 py-14 md:px-8 md:py-20">
          {projects.map((p, i) => (
            <article key={p.slug} data-category={p.category} className="work-card group grid gap-6 md:grid-cols-12 md:items-end">
              <Reveal image className="md:col-span-9">
                <Link href={`/work/${p.slug}`} className="block overflow-hidden">
                  <Image
                    src={p.heroImage}
                    alt={`${p.title}, ${p.location}`}
                    width={1600}
                    height={900}
                    loading={i === 0 ? undefined : "lazy"}
                    priority={i === 0}
                    sizes="(max-width: 768px) 100vw, 75vw"
                    className="img-calm aspect-[16/9] w-full object-cover"
                  />
                </Link>
              </Reveal>
              <Reveal delay={140} className="md:col-span-3">
                <div>
                  <p className="text-[12px] tracking-[0.12em] text-[#685745]">
                    {p.category} — {p.year}
                  </p>
                  <h2 className="mt-2 text-2xl font-medium text-[#3A2016] md:text-[28px]">{p.title}</h2>
                  <p className="mt-1 text-[14px] text-[#3A2016]/70">{p.location}</p>
                  <Link href={`/work/${p.slug}`} className="alink mt-4 inline-block text-[13px] font-medium tracking-[0.08em] text-[#3A2016]">
                    VIEW PROJECT <span className="arr" aria-hidden>→</span>
                  </Link>
                </div>
              </Reveal>
            </article>
          ))}
        </div>
      </section>
      <CtaBand title="Have a space in mind?" copy="If a project here feels close to what you imagine, tell us about yours." />
    </>
  );
}
