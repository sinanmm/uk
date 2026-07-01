import { ChevronDown } from "lucide-react";
import { modules } from "./data";

export default function CurriculumSection() {
  return (
    <section className="section-card slide-up p-6">
      <h2 className="mb-6 text-center text-[20px] font-black text-brand-green">
        PROGRAMME CURRICULUM
      </h2>
      <div className="space-y-2">
        {modules.map(({ badge, title, icon: Icon }) => (
          <details key={badge} className="group rounded-lg border border-slate-200 bg-white">
            <summary className="grid cursor-pointer grid-cols-[82px_58px_1fr_28px] items-center gap-2 px-3 py-2.5 text-brand-navy transition hover:bg-brand-soft max-sm:grid-cols-[72px_42px_1fr_24px]">
              <span className="rounded-md bg-brand-green px-2 py-2 text-center text-[10px] font-black text-white">
                {badge}
              </span>
              <span className="flex size-10 items-center justify-center rounded-md border border-slate-200 text-brand-green">
                <Icon size={22} strokeWidth={1.8} />
              </span>
              <span className="text-[19px] font-extrabold leading-tight">{title}</span>
              <ChevronDown className="details-chevron transition" size={18} />
            </summary>
            <div className="px-28 pb-4 text-base font-semibold leading-7 text-slate-600 max-sm:px-4">
              {title}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
