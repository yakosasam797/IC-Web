import Image from "next/image";
import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { CtaBand, SectionHeading } from "@/components/Ui";
import { IMAGES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Approach",
  description: "The InfinityCrafts process — from listening and planning to design, refinement and realisation.",
};

const steps = [
  ["Listen", "Every project starts with attention. How you live, gather, work and rest — before any drawing."],
  ["Understand", "Site, light, constraints and priorities are mapped honestly so decisions rest on facts."],
  ["Plan", "Zoning, circulation, storage and proportion are resolved on plan first, where changes are cheapest."],
  ["Design", "Materials, joinery, furniture and light are composed as one language, not a set of selections."],
  ["Refine", "Details, junctions and finishes are reviewed and resolved before anything is built."],
  ["Realise", "Drawings and selections move into the finished environment with coordination and care."],
];

export default function ApproachPage() {
  return (
    <>
      <section className="bg-[#E9E8E8] px-5 pt-32 pb-12 md:px-8 md:pt-40">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              index="Approach"
              title="Good design begins with understanding."
              copy="A clear process protects both the design and the client. No theatre, no jargon — just a sequence that keeps decisions calm and traceable."
            />
          </Reveal>
        </div>
      </section>
      <section className="bg-[#F4F2EF]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-12 md:px-8">
          <div className="md:col-span-5">
            <Reveal image>
              <Image src={IMAGES.process} alt="Design process — drawings and material samples" width={1000} height={1200} sizes="(max-width: 768px) 100vw, 40vw" className="aspect-[4/5] w-full object-cover" />
            </Reveal>
          </div>
          <ol className="md:col-span-7">
            {steps.map(([t, c], i) => (
              <Reveal key={t} delay={i * 80}>
                <li className="grid grid-cols-[56px_1fr] gap-4 border-t border-[#3A2016]/15 py-6">
                  <span className="text-[13px] text-[#685745]">0{i + 1}</span>
                  <span>
                    <span className="block text-2xl font-medium text-[#3A2016]">{t}</span>
                    <span className="mt-1 block max-w-xl text-[15px] leading-relaxed text-[#3A2016]/75">{c}</span>
                  </span>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
      <CtaBand title="Ready to begin a conversation?" copy="Tell us where you are in the process — exploring, planning or ready to begin." />
    </>
  );
}
