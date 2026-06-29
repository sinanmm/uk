"use client";

import { ArrowRight, BriefcaseBusiness, Lightbulb, TimerReset, UserRound } from "lucide-react";

const pillars = [
  "Practical entrepreneurship education rooted in real UK business experience.",
  "Guidance that helps future founders avoid costly mistakes before they launch.",
  "Action-focused support designed to build confidence, clarity and momentum.",
];

const outcomes = ["Save time", "Save money", "Reduce frustration", "Take the right first step"];

export default function AboutSection() {
  return (
    <section id="about" className="section-shell pb-10 pt-4">
      <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_24px_60px_rgba(7,22,66,0.09)]">
        <div className="grid gap-0 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="bg-[linear-gradient(160deg,#071642_0%,#0f2b6d_100%)] px-7 py-8 text-white md:px-10 md:py-10">
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.18em] text-white/85">
              About Us
            </span>
            <h2 className="mt-5 text-[30px] font-black uppercase leading-none sm:text-[38px]">
              Helping Future Founders Start Smart
            </h2>
            <p className="mt-5 max-w-xl text-[16px] font-semibold leading-8 text-white/86">
              Pure Startup Academy was created to help aspiring entrepreneurs gain practical knowledge,
              guidance and confidence before taking the leap into business.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {outcomes.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-white/12 bg-white/8 px-4 py-4"
                >
                  <TimerReset className="shrink-0 text-brand-bright" size={20} strokeWidth={2.2} />
                  <span className="text-sm font-extrabold uppercase tracking-[0.08em] text-white">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="px-7 py-8 md:px-10 md:py-10">
            <div className="grid gap-6 xl:grid-cols-[1.02fr_0.98fr]">
              <div>
                <p className="text-[12px] font-extrabold uppercase tracking-[0.2em] text-brand-green">
                  Founder Story
                </p>
                <h3 className="mt-3 text-[26px] font-black leading-tight text-brand-navy">
                  Built by an entrepreneur who started from the ground up
                </h3>
                <div className="mt-5 flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-5">
                  <UserRound className="mt-1 shrink-0 text-brand-green" size={24} strokeWidth={1.9} />
                  <div>
                    <p className="text-[17px] font-black text-brand-navy">Umer Sabah Aslam</p>
                    <p className="mt-1 text-[14px] font-bold leading-7 text-brand-ink">
                      Founder of Pure Catering Supplies Ltd and Pure Care Medical Supplies Ltd.
                    </p>
                  </div>
                </div>
                <p className="mt-5 text-[15px] font-semibold leading-8 text-brand-ink">
                  The academy is designed for students, aspiring entrepreneurs, working professionals and
                  future founders who want expert direction before investing their time, energy and money.
                </p>
              </div>

              <div>
                <p className="text-[12px] font-extrabold uppercase tracking-[0.2em] text-brand-green">
                  What We Stand For
                </p>
                <div className="mt-4 space-y-4">
                  {pillars.map((item, index) => {
                    const Icon = index === 0 ? BriefcaseBusiness : index === 1 ? Lightbulb : ArrowRight;

                    return (
                      <div key={item} className="flex gap-4 rounded-2xl border border-slate-200 px-5 py-4">
                        <Icon className="mt-1 shrink-0 text-brand-green" size={22} strokeWidth={1.9} />
                        <p className="text-[14px] font-bold leading-7 text-brand-ink">{item}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="mt-7 rounded-2xl bg-brand-soft px-5 py-5">
              <p className="text-[12px] font-extrabold uppercase tracking-[0.18em] text-brand-green">
                Core Message
              </p>
              <p className="mt-3 text-[18px] font-black leading-8 text-brand-navy">
                Success is not about having more information. It is about having the right information and
                taking action.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

