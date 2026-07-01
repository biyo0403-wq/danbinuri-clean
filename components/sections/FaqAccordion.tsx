"use client";

import { useState } from "react";
import { faqs } from "@/lib/data";
import { ChevronDown } from "lucide-react";

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="max-w-3xl mx-auto divide-y divide-slate-200 border-t border-b border-slate-200">
      {faqs.map((faq, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center gap-4 py-5 text-left"
            >
              <span className="inline-flex shrink-0 items-center rounded-full bg-blue-50 px-2.5 py-1 text-xs font-bold text-blue-600">
                {faq.category}
              </span>
              <span className="flex-1 font-semibold text-slate-900">{faq.q}</span>
              <ChevronDown
                className={`w-5 h-5 shrink-0 text-slate-400 transition-transform ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isOpen && (
              <p className="pb-5 pl-[4.5rem] pr-8 text-slate-600 leading-relaxed">{faq.a}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}
