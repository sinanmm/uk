import { ConsultationButton, EnrollButton, WebinarButton } from "./Buttons";
import { Rocket } from "lucide-react";

export default function CTASection() {
  return (
    <section id="contact" className="section-shell slide-up pb-10 pt-2">
      <div className="relative overflow-hidden rounded-xl bg-brand-navy px-7 py-8 text-white shadow-soft md:px-14">
        <div className="absolute right-10 top-7 hidden h-28 w-28 grid-cols-5 gap-3 opacity-20 md:grid">
          {Array.from({ length: 25 }).map((_, index) => (
            <span key={index} className="size-1 rounded-full bg-white" />
          ))}
        </div>
        <div className="absolute bottom-0 right-12 hidden h-32 w-32 rotate-[-18deg] rounded-full border-r-[18px] border-brand-green md:block" />
        <Rocket className="absolute bottom-8 right-16 hidden text-white md:block" size={86} strokeWidth={1.4} />
        <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center">
          <div className="flex size-24 shrink-0 items-center justify-center rounded-full bg-white text-brand-green">
            <Rocket size={50} strokeWidth={1.8} />
          </div>
          <div className="max-w-3xl">
            <h2 className="text-[28px] font-black leading-tight md:text-[32px]">
              YOUR ENTREPRENEURIAL JOURNEY <span className="text-brand-bright">STARTS TODAY</span>
            </h2>
            <p className="mt-2 text-[17px] font-semibold text-white/90">
              Stop waiting for the perfect time. Start building the future you want.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <EnrollButton compact />
              <ConsultationButton />
              <WebinarButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
