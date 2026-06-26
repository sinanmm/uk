import { audienceCards } from "./data";

export default function AudienceSection() {
  return (
    <section id="programs" className="section-shell slide-up py-8">
      <h2 className="section-title">
        IS THIS PROGRAMME <span className="green-word">RIGHT FOR YOU?</span>
      </h2>
      <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-7">
        {audienceCards.map(({ label, icon: Icon }) => (
          <div
            key={label}
            className="section-card flex min-h-[126px] flex-col items-center justify-center px-3 py-5 text-center transition duration-200 hover:-translate-y-1 hover:border-brand-green hover:shadow-soft"
          >
            <Icon className="mb-3 text-brand-green" size={44} strokeWidth={1.7} />
            <p className="text-[13px] font-extrabold leading-tight text-brand-ink">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
