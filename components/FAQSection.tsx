import { ChevronDown } from "lucide-react";
import { faqs } from "./data";

export default function FAQSection() {
  return (
    <section id="webinar" className="slide-up">
      <h2 className="section-title mb-6">FREQUENTLY ASKED QUESTIONS</h2>
      <div className="space-y-3">
        {faqs.map((question) => (
          <details key={question} className="rounded-lg border border-slate-200 bg-white shadow-[0_8px_20px_rgba(7,22,66,0.04)]">
            <summary className="flex cursor-pointer items-center justify-between gap-4 px-5 py-4 text-[20px] font-extrabold text-brand-navy">
              {question}
              <ChevronDown className="details-chevron shrink-0 transition" size={18} />
            </summary>
            <p className="border-t border-slate-100 px-5 py-4 text-base font-semibold leading-7 text-slate-600">
              {question}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
