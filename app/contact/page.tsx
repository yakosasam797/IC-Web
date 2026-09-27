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
    <section className="bg-[#E9E8E8] px-5 pt-28 pb-16 md:px-8 md:pt-36 md:pb-24">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-4">
          <div className="md:sticky md:top-28">
            <Reveal>
              <p className="text-[12px] tracking-[0.14em] text-[#685745]">START A PROJECT</p>
              <h1 className="mt-3 text-5xl leading-[1.02] font-medium tracking-tight text-[#3A2016]">
                Tell us about your space.
              </h1>
              <p className="mt-4 max-w-md text-[15.5px] leading-relaxed text-[#3A2016]/75">
                Whether you are planning a new home, reworking an existing space or simply beginning
                to explore possibilities, tell us a little about your project.
              </p>
              <div className="mt-8 rounded-[4px] bg-[#3A2016] p-6 text-[14px] leading-relaxed text-[#E9E8E8]/85">
                <p className="text-[12px] tracking-[0.14em] text-[#E9E8E8]/55">STUDIO</p>
                <p className="mt-3">{site.location}</p>
                <p className="mt-1">
                  <a className="underline underline-offset-4 hover:text-white" href={`mailto:${site.email}`}>
                    {site.email}
                  </a>
                </p>
                <p className="mt-1 text-[#E9E8E8]/60">{site.phone} — placeholder</p>
              </div>
            </Reveal>
          </div>
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
