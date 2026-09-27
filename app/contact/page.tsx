import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { EnquiryForm } from "./EnquiryForm";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Start a Project",
  description: "Tell InfinityCrafts about your space — a structured project enquiry for homes in Bangalore.",
};

export default function ContactPage() {
  return (
    <section className="bg-[#E9E8E8] px-5 pt-32 pb-16 md:px-8 md:pt-40 md:pb-24">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <Reveal>
            <p className="text-[12px] tracking-[0.14em] text-[#685745]">Start a project</p>
            <h1 className="mt-3 text-5xl leading-[1.02] font-medium tracking-tight text-[#3A2016]">Tell us about your space.</h1>
            <p className="mt-4 text-[15.5px] leading-relaxed text-[#3A2016]/75">
              Whether you are planning a new home, reworking an existing space or simply beginning
              to explore possibilities, tell us a little about your project.
            </p>
            <div className="mt-8 border-t border-[#3A2016]/15 pt-6 text-[14px] text-[#3A2016]/80">
              <p>{site.location}</p>
              <p className="mt-1"><a className="underline underline-offset-4" href={`mailto:${site.email}`}>{site.email}</a></p>
              <p className="mt-1">{site.phone} — placeholder</p>
            </div>
          </Reveal>
        </div>
        <div className="md:col-span-8">
          <Reveal>
            <EnquiryForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
