import { CheckCircle2, Gift } from "lucide-react";
import { included } from "./data";

export default function IncludedSection() {
  return (
    <section className="section-card slide-up bg-brand-soft/70 p-7">
      <div className="mb-5 flex items-center gap-3">
        <Gift className="text-brand-green" size={25} />
        <h2 className="text-[20px] font-black text-brand-navy">WHAT’S INCLUDED?</h2>
      </div>
      <ul className="space-y-3">
        {included.map((point) => (
          <li key={point} className="flex items-start gap-3 text-[14px] font-bold text-brand-ink">
            <CheckCircle2 className="mt-0.5 shrink-0 text-brand-green" size={18} fill="#2f9424" stroke="white" />
            {point}
          </li>
        ))}
      </ul>
    </section>
  );
}
