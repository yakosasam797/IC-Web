"use client";

import { useState } from "react";

const filters = ["All", "Residential", "Apartments", "Villas"];

export function WorkFilter() {
  const [active, setActive] = useState("All");

  const apply = (f: string) => {
    setActive(f);
    document.querySelectorAll<HTMLElement>(".work-card").forEach((card) => {
      const cat = card.dataset.category ?? "";
      card.style.display = f === "All" || cat === f || (f === "Residential" && cat !== "Commercial") ? "" : "none";
    });
  };

  return (
    <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => apply(f)}
          aria-pressed={active === f}
          className={`border px-5 py-2.5 text-[13px] tracking-[0.06em] transition-colors ${
            active === f
              ? "border-[#3A2016] bg-[#3A2016] text-[#E9E8E8]"
              : "border-[#3A2016]/25 text-[#3A2016] hover:border-[#3A2016]"
          }`}
        >
          {f.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
