import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Layers3, Sparkles } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { programs } from "@/components/programsData";

export const metadata = {
  title: "Programs | Pure Startup Academy",
  description: "Explore Pure Startup Academy's three entrepreneurship programmes for launch, growth, and leadership.",
};

export default function ProgramsPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="overflow-hidden pb-10 pt-4">
          <div className="section-shell">
            <div className="relative overflow-hidden rounded-[34px] border border-slate-200 bg-[linear-gradient(135deg,#071642_0%,#123164_48%,#2f9424_100%)] px-7 py-10 text-white shadow-[0_30px_70px_rgba(7,22,66,0.16)] md:px-10 lg:px-14 lg:py-14">
              <div className="absolute inset-y-0 right-0 w-full overflow-hidden lg:w-[48%]">
                <Image
                  src="/programs-hero-ai.png"
                  alt="Entrepreneur growth background"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-center mix-blend-screen"
                  style={{ opacity: 0.24 }}
                />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,22,66,0.96)_0%,rgba(7,22,66,0.78)_32%,rgba(7,22,66,0.42)_62%,rgba(47,148,36,0.24)_100%)]" />
              </div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.16),transparent_24rem)]" />
              <div className="absolute -left-14 top-10 h-40 w-40 rounded-full bg-white/8 blur-3xl" />
              <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-brand-bright/15 blur-3xl" />
              <div className="absolute bottom-[-48px] right-[12%] h-44 w-44 rounded-full bg-white/10 blur-3xl" />

              <div className="relative z-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
                <div className="max-w-4xl">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.2em] text-white/88">
                      Programmes
                    </span>
                    <span className="inline-flex rounded-full border border-white/12 bg-white/8 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-white/72">
                      Launch, grow, lead
                    </span>
                  </div>

                  <h1 className="mt-6 max-w-5xl text-[36px] font-black uppercase leading-[0.92] sm:text-[54px] lg:text-[72px]">
                    Choose the path that matches your stage and builds your next move.
                  </h1>

                  <p className="mt-6 max-w-3xl text-[19px] font-semibold leading-8 text-white/84 sm:text-[19px]">
                    Start with validation, move into real-world growth, and step up into long-term business
                    leadership. Each programme is built around implementation, not just theory.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link href="#programme-grid" className="btn-primary bg-white text-brand-navy hover:bg-slate-100">
                      Explore Programmes <ArrowRight size={16} />
                    </Link>
                    <Link href="/#contact" className="btn-secondary border-white/40 bg-transparent text-white hover:border-white hover:bg-white/10 hover:text-white">
                      Book Free Consultation
                    </Link>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                  <div className="rounded-[26px] border border-white/12 bg-white/10 p-5 backdrop-blur-sm">
                    <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-white/68">Programme map</p>
                    <div className="mt-4 grid gap-3">
                      <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/6 px-4 py-3">
                        <CalendarDays size={20} className="text-white" />
                        <div>
                          <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-white/58">Timeline</p>
                          <p className="mt-1 text-[19px] font-black text-white">3, 6 and 12 month pathways</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/6 px-4 py-3">
                        <Layers3 size={20} className="text-white" />
                        <div>
                          <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-white/58">Structure</p>
                          <p className="mt-1 text-[19px] font-black text-white">Clear training, tools and action steps</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/6 px-4 py-3">
                        <Sparkles size={20} className="text-white" />
                        <div>
                          <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-white/58">Outcome</p>
                          <p className="mt-1 text-[19px] font-black text-white">Progress you can use immediately</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div className="rounded-2xl border border-white/12 bg-white/10 px-4 py-4 text-center backdrop-blur-sm">
                      <p className="text-[28px] font-black text-white">3</p>
                      <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-white/68">Programmes</p>
                    </div>
                    <div className="rounded-2xl border border-white/12 bg-white/10 px-4 py-4 text-center backdrop-blur-sm">
                      <p className="text-[28px] font-black text-white">12</p>
                      <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-white/68">Modules each</p>
                    </div>
                    <div className="rounded-2xl border border-white/12 bg-white/10 px-4 py-4 text-center backdrop-blur-sm">
                      <p className="text-[28px] font-black text-white">1</p>
                      <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-white/68">Clear next step</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="programme-grid" className="section-shell pb-12 pt-2">
          <div className="grid gap-6 xl:grid-cols-3">
            {programs.map((program) => (
              <article
                key={program.slug}
                className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_24px_50px_rgba(7,22,66,0.08)]"
              >
                <div className="h-2" style={{ background: program.theme.gradient }} />
                <div className="p-7">
                  <div className="flex items-center justify-between gap-4">
                    <span
                      className="inline-flex rounded-full px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.18em]"
                      style={{ backgroundColor: program.theme.soft, color: program.theme.accent }}
                    >
                      {program.label}
                    </span>
                    <span className="text-base font-extrabold text-slate-500">{program.duration}</span>
                  </div>

                  <h2 className="mt-5 text-[28px] font-black uppercase leading-[1.02] text-brand-navy">
                    {program.title}
                  </h2>
                  <p className="mt-3 text-[19px] font-extrabold uppercase tracking-[0.04em] text-slate-500">
                    {program.strapline}
                  </p>
                  <p className="mt-5 text-[19px] font-semibold leading-8 text-brand-ink">{program.summary}</p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-3 xl:grid-cols-1">
                    {program.transformation.map((step, index) => (
                      <div
                        key={step}
                        className="rounded-2xl border border-slate-200 px-4 py-4 text-base font-extrabold uppercase tracking-[0.08em] text-brand-navy"
                      >
                        <span className="block text-[11px] text-slate-400">Stage {index + 1}</span>
                        <span className="mt-2 block">{step}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {program.audience.slice(0, 4).map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-slate-200 px-3 py-1.5 text-[12px] font-bold text-slate-600"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 grid gap-3 rounded-[22px] bg-slate-50 p-4 sm:grid-cols-2">
                    <div>
                      <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-slate-400">
                        Launch Offer
                      </p>
                      <p className="mt-2 text-[23px] font-black text-brand-navy">{program.investment.offer}</p>
                    </div>
                    <div>
                      <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-slate-400">
                        Installment
                      </p>
                      <p className="mt-2 text-[19px] font-black text-brand-navy">{program.investment.installment}</p>
                    </div>
                  </div>

                  <Link
                    href={`/programs/${program.slug}`}
                    className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand-navy px-5 py-3 text-base font-extrabold uppercase tracking-[0.08em] text-white transition hover:translate-y-[-1px]"
                  >
                    View Full Programme <ArrowRight size={16} />
                  </Link>
                  <Link
                    href={program.checkoutUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-base font-extrabold uppercase tracking-[0.08em]"
                    style={{ color: program.theme.accent }}
                  >
                    Secure Checkout <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell pb-12 pt-2">
          <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-[0_20px_45px_rgba(7,22,66,0.06)] md:p-8">
              <div className="flex items-center gap-3 text-brand-green">
                <Sparkles size={22} />
                <p className="text-[12px] font-extrabold uppercase tracking-[0.18em]">How To Choose</p>
              </div>
              <h2 className="mt-4 text-[30px] font-black uppercase leading-tight text-brand-navy">
                Pick the programme that matches your stage, not just your ambition.
              </h2>
              <div className="mt-6 space-y-4">
                <div className="rounded-2xl bg-brand-soft px-5 py-4">
                  <p className="text-base font-extrabold uppercase tracking-[0.1em] text-brand-green">Start here</p>
                  <p className="mt-2 text-[19px] font-semibold leading-7 text-brand-ink">
                    Choose <strong>Startup Foundations</strong> if you need clarity, validation, and a proper
                    launch plan.
                  </p>
                </div>
                <div className="rounded-2xl bg-[#fff5eb] px-5 py-4">
                  <p className="text-base font-extrabold uppercase tracking-[0.1em] text-[#ff8b2b]">Build traction</p>
                  <p className="mt-2 text-[19px] font-semibold leading-7 text-brand-ink">
                    Choose <strong>Startup Launch & Growth</strong> if you already have momentum and now need
                    customers, systems, and consistent growth.
                  </p>
                </div>
                <div className="rounded-2xl bg-[#eaf8f8] px-5 py-4">
                  <p className="text-base font-extrabold uppercase tracking-[0.1em] text-[#0f8b8d]">Lead long term</p>
                  <p className="mt-2 text-[19px] font-semibold leading-7 text-brand-ink">
                    Choose <strong>Entrepreneur Development</strong> if you want to scale sustainably and grow as a
                    business leader.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-[0_20px_45px_rgba(7,22,66,0.06)] md:p-8">
              <div className="grid gap-5 md:grid-cols-3">
                <div className="rounded-2xl border border-slate-200 p-5">
                  <CalendarDays className="text-brand-green" size={24} />
                  <p className="mt-4 text-[12px] font-extrabold uppercase tracking-[0.16em] text-slate-400">Timeline</p>
                  <p className="mt-2 text-[19px] font-bold leading-7 text-brand-ink">
                    3 months to validate and prepare.
                    6 months to build traction.
                    12 months to develop leadership and scale.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 p-5">
                  <Layers3 className="text-brand-green" size={24} />
                  <p className="mt-4 text-[12px] font-extrabold uppercase tracking-[0.16em] text-slate-400">Delivery</p>
                  <p className="mt-2 text-[19px] font-bold leading-7 text-brand-ink">
                    Each programme combines live training, practical tools, real business examples, and clear action steps.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 p-5">
                  <Sparkles className="text-brand-green" size={24} />
                  <p className="mt-4 text-[12px] font-extrabold uppercase tracking-[0.16em] text-slate-400">Outcome</p>
                  <p className="mt-2 text-[19px] font-bold leading-7 text-brand-ink">
                    The goal is progress you can use immediately, not notes that sit untouched after the session ends.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}


