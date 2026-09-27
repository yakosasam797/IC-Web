import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/Ui";
import { projects } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) return { title: "Project not found" };
  return {
    title: `${p.title} — ${p.location}`,
    description: p.description,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) notFound();

  return (
    <>
      <section className="bg-[#E9E8E8] px-5 pt-32 pb-10 md:px-8 md:pt-40">
        <div className="mx-auto max-w-7xl">
          <p className="text-[12px] tracking-[0.14em] text-[#685745]">
            {p.category} — {p.location} — {p.year}
          </p>
          <h1 className="mt-3 max-w-4xl text-5xl leading-[1.02] font-medium tracking-tight text-[#3A2016] md:text-[72px]">
            {p.title}
          </h1>
          <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-[#3A2016]/75">“{p.description}”</p>
        </div>
      </section>

      <section className="bg-[#241610]">
        <div className="mx-auto max-w-7xl px-5 py-8 md:px-8">
          <Reveal image>
            <Image
              src={p.heroImage}
              alt={`${p.title} hero view`}
              width={2000}
              height={1100}
              priority
              sizes="100vw"
              className="aspect-[16/9] w-full object-cover"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-[#F4F2EF]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-2 md:px-8 md:py-20">
          <Reveal>
            <h2 className="text-[13px] tracking-[0.14em] text-[#685745]">THE BRIEF</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-[#3A2016]/85">{p.brief}</p>
            <h2 className="mt-8 text-[13px] tracking-[0.14em] text-[#685745]">THE IDEA</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-[#3A2016]/85">{p.idea}</p>
          </Reveal>
          <Reveal>
            <h2 className="text-[13px] tracking-[0.14em] text-[#685745]">THE RESPONSE</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-[#3A2016]/85">{p.response}</p>
            <h2 className="mt-8 text-[13px] tracking-[0.14em] text-[#685745]">MATERIAL PALETTE</h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {p.materials.map((m) => (
                <li key={m} className="border border-[#3A2016]/20 bg-white/60 px-4 py-2 text-[13.5px] text-[#3A2016]">
                  {m}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="mx-auto max-w-7xl space-y-4 px-5 pb-16 md:px-8 md:pb-24">
          {p.gallery.map((g, i) => (
            <Reveal image key={g}>
              <Image
                src={g}
                alt={`${p.title} view ${i + 1}`}
                width={1600}
                height={1000}
                loading="lazy"
                sizes="100vw"
                className={i === 1 ? "aspect-[16/10] w-full object-cover" : "aspect-[16/9] w-full object-cover"}
              />
            </Reveal>
          ))}
          <p className="pt-2 text-[13px] text-[#685745]">
            Photography placeholders — replace with verified InfinityCrafts project photography before launch.
          </p>
          <Link href="/work" className="inline-block pt-2 text-[13px] font-medium tracking-[0.08em] text-[#3A2016]">
            ← BACK TO ALL WORK
          </Link>
        </div>
      </section>
      <CtaBand title="Interested in creating a space of your own?" copy="Tell us about your home and how you live. We will take it from there." />
    </>
  );
}
