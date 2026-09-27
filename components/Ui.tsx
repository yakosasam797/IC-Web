import Link from "next/link";

export function CtaBand({
  title = "Have a space in mind?",
  copy = "Tell us a little about your project, and let's begin the conversation.",
}: {
  title?: string;
  copy?: string;
}) {
  return (
    <section className="bg-[#3A2016] text-[#E9E8E8]">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-14 md:flex-row md:items-end md:justify-between md:px-8 md:py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl leading-tight font-medium md:text-5xl">{title}</h2>
          <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-[#E9E8E8]/70 md:text-base">{copy}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="group bg-[#E9E8E8] px-7 py-3.5 text-[13px] font-medium tracking-[0.06em] text-[#3A2016] hover:bg-white"
          >
            START A PROJECT <span className="arr" aria-hidden>→</span>
          </Link>
          <Link
            href="/work"
            className="border border-[#E9E8E8]/40 px-7 py-3.5 text-[13px] tracking-[0.06em] text-[#E9E8E8] hover:border-[#E9E8E8]"
          >
            VIEW OUR WORK
          </Link>
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({
  index,
  title,
  copy,
  dark = false,
}: {
  index: string;
  title: string;
  copy?: string;
  dark?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      <p className={`text-[12px] tracking-[0.14em] ${dark ? "text-[#E9E8E8]/60" : "text-[#685745]"}`}>{index}</p>
      <h2
        className={`mt-3 text-4xl leading-[1.05] font-medium tracking-tight md:text-[52px] ${
          dark ? "text-[#E9E8E8]" : "text-[#3A2016]"
        }`}
      >
        {title}
      </h2>
      {copy ? (
        <p className={`mt-4 max-w-2xl text-[16px] leading-relaxed md:text-[17px] ${dark ? "text-[#E9E8E8]/70" : "text-[#3A2016]/75"}`}>
          {copy}
        </p>
      ) : null}
    </div>
  );
}
