import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { CtaBand, SectionHeading } from "@/components/Ui";
import { journalPosts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Journal",
  description: "Notes on interiors, materials, light and process from InfinityCrafts, Bangalore.",
};

export default function JournalPage() {
  return (
    <>
      <section className="bg-[#E9E8E8] px-5 pt-32 pb-12 md:px-8 md:pt-40">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading index="Journal" title="Notes on living well." copy="Short, practical pieces on materials, light and process. Published only after studio review." />
          </Reveal>
        </div>
      </section>
      <section className="bg-[#F4F2EF]">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-14 md:grid-cols-3 md:px-8">
          {journalPosts.map((j) => (
            <Reveal key={j.slug}>
              <Link href={`/journal/${j.slug}`} className="group block bg-[#E9E8E8] p-4">
                <span className="block overflow-hidden">
                  <Image src={j.image} alt={j.title} width={900} height={650} loading="lazy" sizes="(max-width: 768px) 100vw, 33vw" className="img-calm aspect-[4/3] w-full object-cover" />
                </span>
                <span className="mt-4 block text-[12px] tracking-[0.12em] text-[#685745]">{j.category}</span>
                <span className="mt-2 block text-xl font-medium text-[#3A2016]">{j.title}</span>
                <span className="mt-2 block text-[14px] text-[#3A2016]/70">{j.excerpt}</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
