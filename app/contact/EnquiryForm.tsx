"use client";

import { useState } from "react";

const projectTypes = ["Apartment", "Villa", "Independent Home", "Office", "Retail", "Hospitality", "Other"];
const statuses = ["Exploring ideas", "Property purchased", "Under construction", "Renovation planned", "Ready to begin"];
const scopes = ["Interior design", "Space planning", "Furniture / joinery", "Complete interior", "Consultation", "Other"];
const timelines = ["Exploring", "1–3 months", "3–6 months", "6–12 months", "More than 12 months"];

function Field({ label, children, required = false }: { label: string; children: React.ReactNode; required?: boolean }) {
  return (
    <label className="block">
      <span className="mb-2 block text-[13px] tracking-[0.06em] text-[#3A2016]/80">
        {label} {required ? <span aria-hidden>*</span> : null}
      </span>
      {children}
    </label>
  );
}

const inputCls =
  "w-full border border-[#3A2016]/25 bg-white/80 px-4 py-3 text-[15px] text-[#241610] placeholder:text-[#8A7C69]/70 focus:border-[#3A2016] focus:outline-none";

export function EnquiryForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="bg-[#3A2016] p-8 text-[#E9E8E8] md:p-10" role="status">
        <h2 className="text-2xl font-medium md:text-3xl">Thank you. Your project enquiry has been received.</h2>
        <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-[#E9E8E8]/75">
          We will review the details and get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      className="space-y-10"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <fieldset className="bg-white/60 p-6 md:p-8">
        <legend className="px-2 text-[13px] tracking-[0.12em] text-[#685745]">01 — YOUR DETAILS</legend>
        <div className="grid gap-5 md:grid-cols-2">
          <Field label="Name" required>
            <input required name="name" autoComplete="name" placeholder="Your full name" className={inputCls} />
          </Field>
          <Field label="Email" required>
            <input required type="email" name="email" autoComplete="email" placeholder="you@example.com" className={inputCls} />
          </Field>
          <Field label="Phone" required>
            <input required type="tel" name="phone" autoComplete="tel" placeholder="+91" className={inputCls} />
          </Field>
          <Field label="Preferred contact method">
            <select name="contact-method" className={inputCls} defaultValue="Phone">
              <option>Phone</option>
              <option>Email</option>
              <option>WhatsApp</option>
            </select>
          </Field>
        </div>
      </fieldset>

      <fieldset className="bg-white/60 p-6 md:p-8">
        <legend className="px-2 text-[13px] tracking-[0.12em] text-[#685745]">02 — YOUR PROJECT</legend>
        <div className="grid gap-5 md:grid-cols-2">
          <Field label="Project type" required>
            <select name="project-type" required className={inputCls} defaultValue="">
              <option value="" disabled>Select a type</option>
              {projectTypes.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </Field>
          <Field label="Location" required>
            <input required name="location" placeholder="Area, City" className={inputCls} />
          </Field>
        </div>
      </fieldset>

      <fieldset className="bg-white/60 p-6 md:p-8">
        <legend className="px-2 text-[13px] tracking-[0.12em] text-[#685745]">03 — PROJECT STATUS</legend>
        <div className="flex flex-wrap gap-2">
          {statuses.map((s, i) => (
            <label key={s} className="cursor-pointer border border-[#3A2016]/25 px-4 py-2.5 text-[14px] text-[#3A2016] has-checked:border-[#3A2016] has-checked:bg-[#3A2016] has-checked:text-white">
              <input type="radio" name="status" value={s} defaultChecked={i === 0} className="sr-only" />
              {s}
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className="bg-white/60 p-6 md:p-8">
        <legend className="px-2 text-[13px] tracking-[0.12em] text-[#685745]">04 — SCOPE</legend>
        <div className="flex flex-wrap gap-2">
          {scopes.map((s) => (
            <label key={s} className="cursor-pointer border border-[#3A2016]/25 px-4 py-2.5 text-[14px] text-[#3A2016] has-checked:border-[#3A2016] has-checked:bg-[#3A2016] has-checked:text-white">
              <input type="checkbox" name="scope" value={s} className="sr-only" />
              {s}
            </label>
          ))}
        </div>
        <p className="mt-3 text-[13px] text-[#685745]">Budget ranges are intentionally omitted until the studio confirms approved figures.</p>
      </fieldset>

      <fieldset className="bg-white/60 p-6 md:p-8">
        <legend className="px-2 text-[13px] tracking-[0.12em] text-[#685745]">05 — TIMELINE</legend>
        <div className="flex flex-wrap gap-2">
          {timelines.map((t, i) => (
            <label key={t} className="cursor-pointer border border-[#3A2016]/25 px-4 py-2.5 text-[14px] text-[#3A2016] has-checked:border-[#3A2016] has-checked:bg-[#3A2016] has-checked:text-white">
              <input type="radio" name="timeline" value={t} defaultChecked={i === 0} className="sr-only" />
              {t}
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className="bg-white/60 p-6 md:p-8">
        <legend className="px-2 text-[13px] tracking-[0.12em] text-[#685745]">06 — PROJECT DESCRIPTION</legend>
        <Field label="Tell us about your space" required>
          <textarea required name="description" rows={6} placeholder="Size, rooms, how you live, what matters most…" className={inputCls} />
        </Field>
        <div className="mt-5">
          <Field label="Upload plans or references (PDF, JPG, PNG)">
            <input type="file" name="files" multiple accept=".pdf,.jpg,.jpeg,.png" className="w-full text-[14px] text-[#3A2016]/80" />
          </Field>
        </div>
      </fieldset>

      <button type="submit" className="w-full bg-[#3A2016] px-7 py-4 text-[13px] font-medium tracking-[0.08em] text-[#E9E8E8] hover:bg-[#685745] md:w-auto md:min-w-[320px]">
        SEND PROJECT ENQUIRY →
      </button>
    </form>
  );
}
