import { ArrowRight } from "lucide-react";
import { journeySteps } from "./data";

export default function JourneySection() {
  return (
    <section className="section-shell slide-up py-7">
      <h2 className="section-title">
        YOUR <span className="green-word">TRANSFORMATION</span> JOURNEY
      </h2>
      <div className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-4 lg:flex lg:items-start lg:justify-between lg:gap-2">
        {journeySteps.map(({ label, icon: Icon }, index) => (
          <div key={label} className="flex items-center gap-3 lg:flex-1">
            <div className="flex flex-1 flex-col items-center text-center">
              <div className={`icon-ring ${index === journeySteps.length - 1 ? "bg-brand-navy text-white" : ""}`}>
                <Icon size={34} className={index === 0 ? "text-brand-green" : ""} strokeWidth={1.9} />
              </div>
              <p className="mt-3 text-[20px] font-black text-brand-navy">{label}</p>
            </div>
            {index < journeySteps.length - 1 && (
              <ArrowRight className="hidden shrink-0 text-brand-navy lg:block" size={36} strokeWidth={2} />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
