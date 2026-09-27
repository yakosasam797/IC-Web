"use client";

import { useState } from "react";

const projectTypes = ["Apartment", "Villa", "Independent Home", "Office", "Retail", "Hospitality", "Other"];
const statuses = ["Exploring ideas", "Property purchased", "Under construction", "Renovation planned", "Ready to begin"];
const scopes = ["Interior design", "Space planning", "Furniture / joinery", "Complete interior", "Consultation", "Other"];
const timelines = ["Exploring", "1–3 months", "3–6 months", "6–12 months", "More than 12 months"];

function Step({
  index,
  title,
  hint,
  children,
}: {
  index: string;
  title: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <section aria-label={title} className="rounded-[4px] border border-[#3A2016]/12 bg-white p-6 md:p-8">
      <header className="flex items-baseline justify-between gap-4 border-b border-[#3A2016]/10 pb-4">
        <h2 className="text-[13px] font-medium tracking-[0.14em] text-[#685745]">
          {index} — {title.toUpperCase()}
        </h2>
      </header>
      <div className="pt-5">
        {hint ? <p className="pb-4 text-[13.5px] leading-relaxed text-[#685745]">{hint}</p> : null}
        {children}
      </div>
    </section>
  );
}

function Field({ label, children, required = false }: { label: string; children: React.ReactNode; required?: boolean }) {
  return (
    <label className="block">
      <span className="mb-2 block text-[13px] font-medium tracking-[0.04em] text-[#3A2016]">
        {label} {required ? <span aria-hidden className="text-[#685745]">*</span> : null}
      </span>
      {children}
    </label>
  );
}

const inputCls =
  "h-12 w-full rounded-[3px] border border-[#3A2016]/20 bg-[#F4F2EF]/60 px-4 text-[15px] text-[#241610] placeholder:text-[#8A7C69]/70 transition-colors focus:border-[#3A2016] focus:bg-white focus:outline-none";

const pillCls =
  "cursor-pointer rounded-[3px] border border-[#3A2016]/20 px-4 py-2.5 text-[14px] leading-none text-[#3A2016] transition-all duration-300 hover:border-[#3A2016]/60 has-checked:border-[#3A2016] has-checked:bg-[#3A2016] has-checked:text-[#E9E8E8]";

export function EnquiryForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="rounded-[4px] bg-[#3A2016] p-8 text-[#E9E8E8] md:p-12" role="status">
        <p className="text-[12px] tracking-[0.14em] text-[#E9E8E8]/60">ENQUIRY RECEIVED</p>
        <h2 className="mt-3 text-2xl leading-snug font-medium md:text-3xl">
          Thank you. Your project enquiry has been received.
        </h2>
        <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-[#E9E8E8]/75">
          We will review the details and get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      className="space-y-5"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <Step index="01" title="Your details">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Name" required>
            <input required name="name" autoComplete="name" placeholder="Your full name" className={inputCls} />
          </Field>
          <Field label="Email" required>
            <input required type="email" name="email" autoComplete="email" placeholder="you@example.com" className={inputCls} />
          </Field>
          <Field label="Phone" required>
            <input required type="tel" name="phone" autoComplete="tel" placeholder="+91 ·····" className={inputCls} />
          </Field>
          <Field label="Preferred contact method">
            <select name="contact-method" className={inputCls} defaultValue="Phone">
              <option>Phone</option>
              <option>Email</option>
              <option>WhatsApp</option>
            </select>
          </Field>
        </div>
      </Step>

      <Step index="02" title="Your project">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Project type" required>
            <select name="project-type" required className={inputCls} defaultValue="">
              <option value="" disabled>
                Select a type
              </option>
              {projectTypes.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </Field>
          <Field label="Location" required>
            <input required name="location" autoComplete="address-level2" placeholder="Area, City" className={inputCls} />
          </Field>
        </div>
      </Step>

      <Step index="03" title="Project status">
        <div className="flex flex-wrap gap-2.5">
          {statuses.map((s, i) => (
            <label key={s} className={pillCls}>
              <input type="radio" name="status" value={s} defaultChecked={i === 0} className="sr-only" />
              {s}
            </label>
          ))}
        </div>
      </Step>

      <Step
        index="04"
        title="Scope"
        hint="Select all that apply. Budget ranges are intentionally omitted until the studio confirms approved figures."
      >
        <div className="flex flex-wrap gap-2.5">
          {scopes.map((s) => (
            <label key={s} className={pillCls}>
              <input type="checkbox" name="scope" value={s} className="sr-only" />
              {s}
            </label>
          ))}
        </div>
      </Step>

      <Step index="05" title="Timeline">
        <div className="flex flex-wrap gap-2.5">
          {timelines.map((t, i) => (
            <label key={t} className={pillCls}>
              <input type="radio" name="timeline" value={t} defaultChecked={i === 0} className="sr-only" />
              {t}
            </label>
          ))}
        </div>
      </Step>

      <Step index="06" title="Project description">
        <div className="space-y-5">
          <Field label="Tell us about your space" required>
            <textarea
              required
              name="description"
              rows={6}
              placeholder="Size, rooms, how you live, what matters most…"
              className="min-h-[150px] w-full rounded-[3px] border border-[#3A2016]/20 bg-[#F4F2EF]/60 px-4 py-3 text-[15px] leading-relaxed text-[#241610] placeholder:text-[#8A7C69]/70 transition-colors focus:border-[#3A2016] focus:bg-white focus:outline-none"
            />
          </Field>
          <Field label="Plans or reference images — PDF, JPG, PNG">
            <input
              type="file"
              name="files"
              multiple
              accept=".pdf,.jpg,.jpeg,.png"
              className="w-full rounded-[3px] border border-dashed border-[#3A2016]/25 bg-[#F4F2EF]/60 px-4 py-3.5 text-[14px] text-[#3A2016]/80 file:mr-4 file:rounded-[3px] file:border-0 file:bg-[#3A2016] file:px-4 file:py-2 file:text-[13px] file:font-medium file:text-[#E9E8E8]"
            />
          </Field>
        </div>
      </Step>

      <button
        type="submit"
        className="group flex h-14 w-full items-center justify-center gap-3 rounded-[3px] bg-[#3A2016] px-7 text-[13px] font-medium tracking-[0.08em] text-[#E9E8E8] transition-colors duration-300 hover:bg-[#685745] sm:w-auto sm:min-w-[340px]"
      >
        SEND PROJECT ENQUIRY
        <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
      </button>
    </form>
  );
}
