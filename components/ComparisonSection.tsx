import { CheckCircle2, XCircle } from "lucide-react";
import { psa, traditional } from "./data";

export default function ComparisonSection() {
  return (
    <section className="slide-up">
      <h2 className="section-title mb-6">
        WHAT MAKES THIS PROGRAMME <span className="green-word">DIFFERENT?</span>
      </h2>
      <div className="relative grid gap-0 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-card md:grid-cols-[1fr_74px_1fr]">
        <div className="p-7">
          <h3 className="mb-5 inline-flex rounded-full bg-red-100 px-6 py-2 text-[13px] font-black text-red-600">
            TRADITIONAL COURSES
          </h3>
          <ul className="space-y-3">
            {traditional.map((point) => (
              <li key={point} className="flex items-start gap-3 text-[13px] font-bold text-brand-ink">
                <XCircle className="mt-0.5 shrink-0 text-red-500" size={17} fill="#ef4444" stroke="white" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-center bg-white">
          <span className="flex size-16 items-center justify-center rounded-full bg-brand-navy text-[24px] font-black text-white">
            VS
          </span>
        </div>

        <div className="border-t border-slate-200 p-7 md:border-l md:border-t-0">
          <h3 className="mb-5 inline-flex rounded-full bg-green-100 px-6 py-2 text-[13px] font-black text-brand-green">
            PURE STARTUP ACADEMY
          </h3>
          <ul className="space-y-3">
            {psa.map((point) => (
              <li key={point} className="flex items-start gap-3 text-[13px] font-bold text-brand-ink">
                <CheckCircle2 className="mt-0.5 shrink-0 text-brand-green" size={17} fill="#2f9424" stroke="white" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
