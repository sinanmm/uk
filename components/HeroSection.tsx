import Image from "next/image";
import { ClipboardList } from "lucide-react";
import { ConsultationButton, EnrollButton, WebinarButton } from "./Buttons";

export default function HeroSection() {
  return (
    <section id="home" className="page-fade overflow-hidden">
      <div className="section-shell grid min-h-[540px] items-center gap-8 pb-8 pt-7 lg:grid-cols-[0.98fr_1.05fr]">
        <div className="relative z-10 py-6">
          <div className="mb-7 flex items-center gap-2 text-[12px] font-semibold text-slate-500">
            <span>Home</span>
            <span>&gt;</span>
            <span>Programs</span>
            <span>&gt;</span>
            <span className="text-brand-navy">Idea to Launch</span>
          </div>
          <span className="mb-4 inline-flex rounded-full bg-brand-green px-4 py-1.5 text-[13px] font-extrabold text-white">
            PROGRAM 01
          </span>
          <h1 className="text-[52px] font-black uppercase leading-[0.95] tracking-normal text-brand-navy sm:text-[70px] lg:text-[78px]">
            IDEA TO <span className="text-brand-green">LAUNCH</span>
          </h1>
          <p className="mt-5 text-[22px] font-extrabold leading-snug text-brand-navy">
            Turn Your Business Idea into a Launch-Ready Business
          </p>
          <div className="mt-4 flex items-center gap-3 text-[17px] font-extrabold text-brand-navy">
            <ClipboardList className="text-brand-navy" size={22} />
            3-Month Practical Entrepreneurship Programme
          </div>
          <p className="mt-7 max-w-[610px] text-[18px] font-semibold leading-9 text-brand-ink">
            Designed for aspiring entrepreneurs who want to go from idea to first customer with expert guidance and real-world experience.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <EnrollButton />
            <ConsultationButton />
            <WebinarButton />
          </div>
        </div>

        <div className="relative min-h-[455px] lg:min-h-[560px]">
          <div className="hero-arc absolute inset-0 -right-12 overflow-hidden rounded-bl-[120px] bg-white">
            <Image
              src="/growth.png"
              alt="Idea to Launch growth visual"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
