import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/Ui";
import { journalPosts } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return journalPosts.map((j) => ({ slug: j.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const j = journalPosts.find((x) => x.slug === slug);
  if (!j) return { title: "Article not found" };
  return { title: j.title, description: j.excerpt };
}

export default async function JournalArticle({ params }: Props) {
  const { slug } = await params;
  const j = journalPosts.find((x) => x.slug === slug);
  if (!j) notFound();

  return (
    <>
      <article className="bg-[#E9E8E8] px-5 pt-32 pb-12 md:px-8 md:pt-40">
        <div className="mx-auto max-w-3xl">
          <p className="text-[12px] tracking-[0.14em] text-[#685745]">{j.category} — {j.date}</p>
          <h1 className="mt-3 text-4xl leading-[1.05] font-medium tracking-tight text-[#3A2016] md:text-[56px]">{j.title}</h1>
          <p className="mt-4 text-[16px] leading-relaxed text-[#3A2016]/75">{j.excerpt}</p>
        </div>
      </article>
      <div className="bg-[#F4F2EF]">
        <div className="mx-auto max-w-4xl px-5 py-10 md:px-8">
          <Reveal image>
            <Image src={j.image} alt={j.title} width={1400} height={900} sizes="100vw" className="aspect-[16/10] w-full object-cover" />
          </Reveal>
          <div className="mx-auto mt-8 max-w-2xl space-y-5 text-[16px] leading-relaxed text-[#3A2016]/85">
            <p>This article structure is ready for the studio&apos;s verified copy. The outline below shows the intended shape — no expertise is fabricated here.</p>
            <p>Planned sections: the question behind the piece, what to observe in your own home, material and light considerations specific to Bangalore, and when to ask a designer.</p>
            <p>Final copy will be added by the studio before publishing.</p>
          </div>
          <Link href="/journal" className="alink mt-8 inline-block text-[13px] font-medium tracking-[0.08em] text-[#3A2016]"><span className="arr-l" aria-hidden>←</span> BACK TO JOURNAL</Link>
        </div>
      </div>
      <CtaBand />
    </>
  );
}
