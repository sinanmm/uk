import { learningFormat } from "./data";

export default function LearningFormatSection() {
  return (
    <section className="section-card slide-up p-7">
      <h2 className="mb-7 text-center text-[19px] font-black text-brand-navy">
        LEARNING FORMAT
      </h2>
      <div className="space-y-5">
        {learningFormat.map(({ label, value, icon: Icon }) => (
          <div key={label} className="flex gap-4">
            <Icon className="mt-0.5 shrink-0 text-brand-navy" size={24} strokeWidth={1.8} />
            <div>
              <p className="text-[19px] font-black text-brand-navy">{label}</p>
              <p className="text-[19px] font-bold leading-tight text-brand-ink">{value}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
