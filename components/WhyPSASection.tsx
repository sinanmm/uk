import { whyPSA } from "./data";

export default function WhyPSASection() {
  return (
    <section id="about" className="section-card slide-up p-7">
      <h2 className="mb-7 text-center text-[19px] font-black text-brand-navy">
        WHY LEARN FROM PSA?
      </h2>
      <div className="space-y-5">
        {whyPSA.map(({ text, icon: Icon }) => (
          <div key={text} className="flex gap-4">
            <Icon className="mt-0.5 shrink-0 text-brand-green" size={26} strokeWidth={1.6} />
            <p className="text-[13px] font-bold leading-snug text-brand-ink">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
