import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { CtaBand, SectionHeading } from "@/components/Ui";
import { styles } from "@/lib/data";

export const metadata: Metadata = {
  title: "Interior Style Catalogue",
  description:
    "A starting vocabulary of interior styles — warm contemporary, quiet minimal, earthy, classic, compact urban and villa living. Find the language for your Bangalore home.",
};

export default function StylesPage() {
  return (
    <>
      <section className="bg-[#E9E8E8] px-5 pt-32 pb-12 md:px-8 md:pt-40 md:pb-16">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              index="Style catalogue"
              title="Find the language for your home."
              copy="Most clients arrive with feelings, not style names. This catalogue is a starting vocabulary — your home will likely blend and bend more than one of these. Final wording reviewed with the studio."
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-[#F4F2EF]">
        <div className="mx-auto max-w-7xl space-y-14 px-5 py-14 md:space-y-20 md:px-8 md:py-20">
          {styles.map((st, i) => (
            <article key={st.slug} className="group grid gap-6 md:grid-cols-12 md:items-start">
              <Reveal image className={`md:col-span-7 ${i % 2 ? "md:order-2" : ""}`}>
                <span className="block overflow-hidden">
                  <Image
                    src={st.image}
                    alt={`${st.title} interior mood`}
                    width={1400}
                    height={1000}
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 60vw"
                    className="img-calm aspect-[4/3] w-full object-cover"
                  />
                </span>
              </Reveal>
              <Reveal delay={140} className={`md:col-span-5 ${i % 2 ? "md:order-1" : ""}`}>
                <div className="md:pt-1">
                  <p className="text-[12px] tracking-[0.14em] text-[#685745]">
                    0{i + 1} — {st.mood}
                  </p>
                  <h2 className="mt-3 text-3xl font-medium text-[#3A2016] md:text-4xl">{st.title}</h2>
                  <p className="mt-3 max-w-md text-[15px] leading-relaxed text-[#3A2016]/75">{st.description}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {st.traits.map((t) => (
                      <li key={t} className="border border-[#3A2016]/20 bg-white/60 px-4 py-2 text-[13px] text-[#3A2016]">
                        {t}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="alink mt-5 inline-block text-[13px] font-medium tracking-[0.08em] text-[#3A2016]"
                  >
                    DISCUSS THIS STYLE <span className="arr" aria-hidden>→</span>
                  </Link>
                </div>
              </Reveal>
            </article>
          ))}
        </div>
      </section>

      <CtaBand
        title="Drawn to more than one?"
        copy="Good — most homes are a blend. Tell us which moods feel like you, and we will shape one coherent language from them."
      />
    </>
  );
}
