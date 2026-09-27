import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-[#E9E8E8] px-5 pt-40 pb-24 text-center md:px-8">
      <p className="text-[12px] tracking-[0.14em] text-[#685745]">Nothing here yet</p>
      <h1 className="mx-auto mt-3 max-w-xl text-4xl font-medium text-[#3A2016] md:text-5xl">
        This space is still being composed.
      </h1>
      <div className="mt-7 flex justify-center gap-3">
        <Link href="/" className="bg-[#3A2016] px-7 py-3.5 text-[13px] font-medium tracking-[0.06em] text-[#E9E8E8]">
          BACK HOME
        </Link>
        <Link href="/work" className="border border-[#3A2016]/30 px-7 py-3.5 text-[13px] tracking-[0.06em] text-[#3A2016]">
          VIEW WORK
        </Link>
      </div>
    </section>
  );
}
