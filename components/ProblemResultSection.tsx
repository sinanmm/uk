import { ArrowRight, CheckCircle2, XCircle } from "lucide-react";
import { problemPoints, resultPoints } from "./data";

export default function ProblemResultSection() {
  return (
    <section className="section-shell slide-up py-4">
      <div className="grid items-center gap-6 lg:grid-cols-[1fr_72px_1fr]">
        <div className="section-card border-red-100 p-7">
          <h2 className="mb-5 text-[20px] font-black text-red-600">
            ARE YOU FACING ANY OF THESE?
          </h2>
          <ul className="space-y-3">
            {problemPoints.map((point) => (
              <li key={point} className="flex items-start gap-3 text-[14px] font-bold text-brand-ink">
                <XCircle className="mt-0.5 shrink-0 text-red-500" size={18} fill="#ef4444" stroke="white" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden justify-center lg:flex">
          <div className="flex size-16 items-center justify-center rounded-full bg-gradient-to-r from-brand-green/15 to-brand-green text-white">
            <ArrowRight size={42} strokeWidth={3} />
          </div>
        </div>

        <div className="section-card border-green-100 p-7">
          <h2 className="mb-5 text-[20px] font-black text-brand-green">
            BY THE END OF THIS PROGRAMME, YOU WILL:
          </h2>
          <ul className="space-y-3">
            {resultPoints.map((point) => (
              <li key={point} className="flex items-start gap-3 text-[14px] font-bold text-brand-ink">
                <CheckCircle2 className="mt-0.5 shrink-0 text-brand-green" size={18} fill="#2f9424" stroke="white" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
