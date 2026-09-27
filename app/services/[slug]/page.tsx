import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/Ui";
import { projects, services } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) return { title: "Service not found" };
  return { title: s.title, description: s.statement };
}

export default async function ServiceDetail({ params }: Props) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) notFound();

  return (
    <>
      <section className="bg-[#3A2016] px-5 pt-32 pb-12 text-[#E9E8E8] md:px-8 md:pt-40 md:pb-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-[12px] tracking-[0.14em] text-[#E9E8E8]/60">Services — {s.title}</p>
          <h1 className="mt-3 max-w-3xl text-5xl leading-[1.02] font-medium tracking-tight md:text-[64px]">{s.title}</h1>
          <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-[#E9E8E8]/75">{s.statement}</p>
        </div>
      </section>
      <section className="bg-[#E9E8E8]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-3 md:px-8 md:py-20">
          <Reveal>
            <h2 className="text-[13px] tracking-[0.14em] text-[#685745]">WHAT WE SOLVE</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-[#3A2016]/85">{s.forWhom}</p>
          </Reveal>
          <Reveal>
            <h2 className="text-[13px] tracking-[0.14em] text-[#685745]">DELIVERABLES</h2>
            <ul className="mt-3 space-y-2 text-[15px] text-[#3A2016]/85">
              {s.deliverables.map((d) => (
                <li key={d} className="border-b border-[#3A2016]/10 pb-2">{d}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal>
            <h2 className="text-[13px] tracking-[0.14em] text-[#685745]">TYPICAL JOURNEY</h2>
            <ol className="mt-3 space-y-2 text-[15px] text-[#3A2016]/85">
              {["Understand your space and needs", "Define direction and palette", "Design and detail", "Refine before execution"].map((t) => (
                <li key={t} className="border-b border-[#3A2016]/10 pb-2">{t}</li>
              ))}
            </ol>
          </Reveal>
        </div>
        <div className="mx-auto max-w-7xl px-5 pb-16 md:px-8">
          <h2 className="text-[13px] tracking-[0.14em] text-[#685745]">RELATED PROJECTS</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {projects.slice(0, 3).map((p) => (
              <Link key={p.slug} href={`/work/${p.slug}`} className="border border-[#3A2016]/25 px-5 py-2.5 text-[13.5px] text-[#3A2016] hover:border-[#3A2016]">
                {p.title} — {p.location}
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaBand title="Tell us about your project." copy="We will confirm whether this service fits, and what the next step looks like." />
    </>
  );
}
