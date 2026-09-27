import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { CtaBand, SectionHeading } from "@/components/Ui";
import { IMAGES, journalPosts, projects, services } from "@/lib/data";

export default function Home() {
  return (
    <>
      {/* 01 — Hero */}
      <section className="relative flex min-h-[96svh] items-end overflow-hidden bg-[#241610]">
        <Image
          src={IMAGES.hero}
          alt="Warm contemporary living room designed by InfinityCrafts"
          fill
          priority
          sizes="100vw"
          className="hero-img object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-black/25" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-14 pt-32 md:px-8 md:pb-20">
          <p className="hero-line hero-line-1 text-[12px] tracking-[0.16em] text-white/70">INTERIOR DESIGN STUDIO — BANGALORE</p>
          <h1 className="mt-4 max-w-3xl text-5xl leading-[1.02] font-medium tracking-tight text-white md:text-[84px]">
            <span className="hero-line hero-line-2">Spaces, thoughtfully</span>
            <span className="hero-line hero-line-3">crafted.</span>
          </h1>
          <p className="hero-line hero-line-3 mt-4 max-w-xl text-[16px] leading-relaxed text-white/80 md:text-lg">
            Interior design shaped around the way you live. Residential interiors designed with
            clarity, warmth and attention to every detail.
          </p>
          <div className="hero-line hero-line-4 mt-7 flex flex-wrap gap-3">
              <Link
                href="/work"
                className="bg-[#E9E8E8] px-7 py-3.5 text-[13px] font-medium tracking-[0.06em] text-[#3A2016] hover:bg-white"
              >
                EXPLORE OUR WORK
              </Link>
              <Link
                href="/contact"
                className="border border-white/50 px-7 py-3.5 text-[13px] tracking-[0.06em] text-white hover:border-white hover:bg-white/10"
              >
                START A PROJECT
              </Link>
            </div>
        </div>
      </section>

      {/* 02 — Studio introduction */}
      <section className="bg-[#E9E8E8]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-2 md:items-center md:px-8 md:py-28">
          <Reveal>
            <SectionHeading index="The studio" title="Interiors with a sense of place." />
            <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-[#3A2016]/78 md:text-[17px]">
              We believe a considered interior is more than how a space looks. It is how it feels,
              how it functions and how naturally it becomes part of everyday life.
            </p>
            <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-[#3A2016]/78">
              At InfinityCrafts, we bring together spatial thinking, materiality, detail and
              personal expression to create interiors that feel both distinctive and enduring.
            </p>
            <Link
              href="/about"
              className="alink mt-7 inline-block border-b border-[#3A2016] pb-1 text-[13px] font-medium tracking-[0.08em] text-[#3A2016]"
            >
              DISCOVER INFINITYCRAFTS <span className="arr" aria-hidden>→</span>
            </Link>
          </Reveal>
          <Reveal image>
            <div className="overflow-hidden">
              <Image
                src={IMAGES.intro}
                alt="Architectural interior detail with natural light"
                width={1200}
                height={1400}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="img-calm aspect-[4/5] w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 03 — Selected work, editorial sequence */}
      <section className="bg-[#F4F2EF]">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-28">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionHeading
                index="Selected work"
                title="Work that lives well."
                copy="A short sequence from recent residences. Each project is planned around light, proportion and daily use."
              />
              <Link
                href="/work"
                className="border border-[#3A2016]/25 px-6 py-3 text-[13px] tracking-[0.06em] text-[#3A2016] hover:border-[#3A2016]"
              >
                VIEW ALL PROJECTS
              </Link>
            </div>
          </Reveal>
          <Reveal className="mt-10">
            <div className="continuity-line line-grow" aria-hidden />
          </Reveal>

          <div className="mt-12 space-y-16 md:space-y-24">
            {/* Variant A — image left, text top-right */}
            <article className="group grid gap-6 md:grid-cols-12 md:items-start">
              <Reveal image className="md:col-span-8">
                <Link
                  href={`/work/${projects[0].slug}`}
                  className="block overflow-hidden"
                  aria-label={`View ${projects[0].title}`}
                >
                  <Image
                    src={projects[0].heroImage}
                    alt={`${projects[0].title}, ${projects[0].location}`}
                    width={1600}
                    height={900}
                    sizes="(max-width: 768px) 100vw, 70vw"
                    loading="lazy"
                    className="img-calm aspect-[16/9] w-full object-cover"
                  />
                </Link>
              </Reveal>
              <Reveal delay={150} className="md:col-span-4">
                <div className="md:pt-1">
                  <p className="text-[12px] tracking-[0.14em] text-[#685745]">
                    01 — {projects[0].category} / {projects[0].location}
                  </p>
                  <h3 className="mt-3 text-3xl font-medium text-[#3A2016] md:text-4xl">{projects[0].title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-[#3A2016]/75">“{projects[0].description}”</p>
                  <Link
                    href={`/work/${projects[0].slug}`}
                    className="alink mt-5 inline-block text-[13px] font-medium tracking-[0.08em] text-[#3A2016]"
                  >
                    VIEW PROJECT <span className="arr" aria-hidden>→</span>
                  </Link>
                </div>
              </Reveal>
            </article>

            {/* Variant B — text top-left, portrait image right */}
            <article className="group grid gap-6 md:grid-cols-12 md:items-start">
              <Reveal delay={150} className="md:order-1 md:col-span-4">
                <div className="md:pt-1">
                  <p className="text-[12px] tracking-[0.14em] text-[#685745]">
                    02 — {projects[1].category} / {projects[1].location}
                  </p>
                  <h3 className="mt-3 text-3xl font-medium text-[#3A2016] md:text-4xl">{projects[1].title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-[#3A2016]/75">“{projects[1].description}”</p>
                  <Link
                    href={`/work/${projects[1].slug}`}
                    className="alink mt-5 inline-block text-[13px] font-medium tracking-[0.08em] text-[#3A2016]"
                  >
                    VIEW PROJECT <span className="arr" aria-hidden>→</span>
                  </Link>
                </div>
              </Reveal>
              <Reveal image className="md:order-2 md:col-span-8">
                <Link
                  href={`/work/${projects[1].slug}`}
                  className="block overflow-hidden"
                  aria-label={`View ${projects[1].title}`}
                >
                  <Image
                    src={projects[1].heroImage}
                    alt={`${projects[1].title}, ${projects[1].location}`}
                    width={1600}
                    height={1100}
                    sizes="(max-width: 768px) 100vw, 70vw"
                    loading="lazy"
                    className="img-calm aspect-[4/3] w-full object-cover"
                  />
                </Link>
              </Reveal>
            </article>

            {/* Variant C — editorial header row on top, full-width image below */}
            <article className="group">
              <Reveal>
                <div className="grid gap-6 md:grid-cols-12 md:items-end">
                  <div className="md:col-span-7">
                    <p className="text-[12px] tracking-[0.14em] text-[#685745]">
                      03 — {projects[2].category} / {projects[2].location}
                    </p>
                    <h3 className="mt-3 text-3xl font-medium text-[#3A2016] md:text-4xl">{projects[2].title}</h3>
                  </div>
                  <div className="md:col-span-5">
                    <p className="text-[15px] leading-relaxed text-[#3A2016]/75">“{projects[2].description}”</p>
                    <Link
                      href={`/work/${projects[2].slug}`}
                      className="alink mt-4 inline-block text-[13px] font-medium tracking-[0.08em] text-[#3A2016]"
                    >
                      VIEW PROJECT <span className="arr" aria-hidden>→</span>
                    </Link>
                  </div>
                </div>
              </Reveal>
              <Reveal image delay={120} className="mt-7">
                <Link
                  href={`/work/${projects[2].slug}`}
                  className="block overflow-hidden"
                  aria-label={`View ${projects[2].title}`}
                >
                  <Image
                    src={projects[2].heroImage}
                    alt={`${projects[2].title}, ${projects[2].location}`}
                    width={2000}
                    height={900}
                    sizes="100vw"
                    loading="lazy"
                    className="img-calm aspect-[16/8] w-full object-cover"
                  />
                </Link>
              </Reveal>
            </article>
          </div>
        </div>
      </section>

      {/* 04 — Services */}
      <section className="bg-[#3A2016] text-[#E9E8E8]">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-28">
          <Reveal>
            <SectionHeading
              dark
              index="What we do"
              title="Clear services, one coherent interior."
              copy="Everything is structured so you always know what is included and what happens next."
            />
          </Reveal>
          <div className="mt-10 divide-y divide-white/12 border-y border-white/12">
            {services.slice(0, 5).map((s, i) => (
              <Reveal key={s.slug}>
                <Link href={`/services/${s.slug}`} className="service-row group grid gap-3 py-6 md:grid-cols-12 md:items-baseline md:py-7">
                  <span className="text-[13px] text-[#E9E8E8]/55 md:col-span-1">0{i + 1}</span>
                  <span className="text-xl font-medium md:col-span-4 md:text-2xl"><span className="srv-title">{s.title}</span></span>
                  <span className="text-[14px] leading-relaxed text-[#E9E8E8]/70 md:col-span-6">{s.statement}</span>
                  <span className="text-[13px] tracking-[0.08em] md:col-span-1 md:text-right"><span className="srv-arrow" aria-hidden>→</span></span>
                </Link>
              </Reveal>
            ))}
          </div>
          <Link
            href="/services"
            className="mt-8 inline-block bg-[#E9E8E8] px-7 py-3.5 text-[13px] font-medium tracking-[0.06em] text-[#3A2016] hover:bg-white"
          >
            EXPLORE OUR SERVICES
          </Link>
        </div>
      </section>

      {/* 05 — Approach */}
      <section className="bg-[#E9E8E8]">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-28">
          <Reveal>
            <SectionHeading
              index="How we work"
              title="From first conversation to finished space."
            />
          </Reveal>
          <ol className="mt-10 grid gap-px bg-[#3A2016]/12 md:grid-cols-5">
            {[
              ["Understand", "We begin by understanding how you live, what matters to you and what the space needs to become."],
              ["Define", "We establish the spatial direction, design language, materials and priorities."],
              ["Design", "Plans, details, finishes and furniture come together into one coherent scheme."],
              ["Refine", "Every element is reviewed, adjusted and resolved before execution."],
              ["Realise", "The design moves from drawings and selections into the finished environment."],
            ].map(([t, c], i) => (
              <li key={t} className="bg-[#E9E8E8] p-6 md:min-h-[240px] md:p-7">
                <p className="text-[13px] text-[#685745]">0{i + 1}</p>
                <p className="mt-3 text-lg font-medium text-[#3A2016]">{t}</p>
                <p className="mt-2 text-[14px] leading-relaxed text-[#3A2016]/72">{c}</p>
              </li>
            ))}
          </ol>
          <Link
            href="/approach"
            className="alink mt-8 inline-block border-b border-[#3A2016] pb-1 text-[13px] font-medium tracking-[0.08em] text-[#3A2016]"
          >
            HOW WE WORK <span className="arr" aria-hidden>→</span>
          </Link>
        </div>
      </section>

      {/* 06 — Material story */}
      <section className="bg-[#241610] text-[#E9E8E8]">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-28">
          <Reveal>
            <SectionHeading
              dark
              index="Material and detail"
              title="Details create the atmosphere."
              copy="Material, proportion, light and detail are considered together. The smallest decisions often shape the feeling of the whole."
            />
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {[
              [IMAGES.materialTimber, "Timber and joinery"],
              [IMAGES.materialStone, "Stone and surface"],
              [IMAGES.materialFabric, "Fabric and softness"],
              [IMAGES.materialLight, "Light and hardware"],
            ].map(([src, alt], i) => (
              <Reveal image key={alt as string} delay={i * 90}>
                <figure className="overflow-hidden bg-white/5">
                  <Image
                    src={src as string}
                    alt={alt as string}
                    width={800}
                    height={1000}
                    loading="lazy"
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="img-calm aspect-[4/5] w-full object-cover"
                  />
                  <figcaption className="px-4 py-3 text-[12.5px] tracking-wide text-[#E9E8E8]/70">{alt}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 07 — Why */}
      <section className="bg-[#F4F2EF]">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-28">
          <Reveal>
            <SectionHeading index="Why InfinityCrafts" title="Principles you can feel in the rooms." />
          </Reveal>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {[
              ["Personal", "Every project begins with the people who will live in it."],
              ["Considered", "Every material, proportion and detail has a reason."],
              ["Functional", "Beauty supports the way a space is actually lived in."],
              ["Cohesive", "Every decision contributes to one complete environment."],
              ["Adaptable", "No fixed house style. Every project responds to its architecture and people."],
              ["Enduring", "We design for years of use, not for a single photograph."],
            ].map(([t, c]) => (
              <Reveal key={t}>
                <div className="border-t border-[#3A2016]/20 pt-5">
                  <p className="text-[13px] tracking-[0.12em] text-[#685745]">{t}</p>
                  <p className="mt-2 text-[15px] leading-relaxed text-[#3A2016]/80">“{c}”</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 08 — Featured project story */}
      <section className="bg-[#E9E8E8]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-12 md:px-8 md:py-28">
          <div className="md:col-span-7">
            <Reveal image>
              <Image
                src={IMAGES.detail}
                alt="Featured project living space with layered materials"
                width={1400}
                height={1000}
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 60vw"
                className="aspect-[4/3] w-full object-cover"
              />
            </Reveal>
          </div>
          <div className="md:col-span-5">
            <Reveal>
              <p className="text-[12px] tracking-[0.14em] text-[#685745]">Featured story — Serene Residence</p>
              <h2 className="mt-3 text-4xl leading-tight font-medium text-[#3A2016]">Light first, then material.</h2>
              <p className="mt-4 text-[15.5px] leading-relaxed text-[#3A2016]/78">
                A Bangalore family home where daylight does the composing. Timber stays low and
                continuous, stone anchors the thresholds, and textiles soften everything the sun touches.
              </p>
              <dl className="mt-6 space-y-3 border-t border-[#3A2016]/15 pt-5 text-[14px]">
                <div className="grid grid-cols-[110px_1fr] gap-3">
                  <dt className="text-[#685745]">Brief</dt>
                  <dd className="text-[#3A2016]/85">Calm, open family living with room to work and rest.</dd>
                </div>
                <div className="grid grid-cols-[110px_1fr] gap-3">
                  <dt className="text-[#685745]">Direction</dt>
                  <dd className="text-[#3A2016]/85">Daylight-led plan, quiet material palette.</dd>
                </div>
                <div className="grid grid-cols-[110px_1fr] gap-3">
                  <dt className="text-[#685745]">Materials</dt>
                  <dd className="text-[#3A2016]/85">White oak, limestone, linen, brushed brass.</dd>
                </div>
              </dl>
              <Link
                href="/work/serene-residence-jp-nagar"
                className="mt-6 inline-block bg-[#3A2016] px-7 py-3.5 text-[13px] font-medium tracking-[0.06em] text-[#E9E8E8] hover:bg-[#685745]"
              >
                EXPLORE THE PROJECT
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 10 — Journal */}
      <section className="bg-[#F4F2EF]">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-28">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionHeading index="Journal" title="Notes on living well." />
              <Link href="/journal" className="alink border-b border-[#3A2016] pb-1 text-[13px] font-medium tracking-[0.08em] text-[#3A2016]">
                ALL ARTICLES <span className="arr" aria-hidden>→</span>
              </Link>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {journalPosts.map((j, i) => (
              <Reveal key={j.slug} delay={i * 90}>
                <Link href={`/journal/${j.slug}`} className="group block">
                  <span className="block overflow-hidden">
                    <Image
                      src={j.image}
                      alt={j.title}
                      width={900}
                      height={650}
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="img-calm aspect-[4/3] w-full object-cover"
                    />
                  </span>
                  <span className="mt-4 block text-[12px] tracking-[0.12em] text-[#685745]">{j.category}</span>
                  <span className="mt-2 block text-xl leading-snug font-medium text-[#3A2016]">{j.title}</span>
                  <span className="mt-2 block text-[14px] leading-relaxed text-[#3A2016]/70">{j.excerpt}</span>
                </Link>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-[13px] text-[#685745]">
            Journal entries are structured as editable drafts. Final articles will be published after studio review.
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
