import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, BadgeCheck, BookOpen, BriefcaseBusiness, CalendarDays, CheckCircle2, Gem, Target, UsersRound } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { programs, programsBySlug } from "@/components/programsData";

export function generateStaticParams() {
  return programs.map((program) => ({ slug: program.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const program = programsBySlug[slug];

  if (!program) {
    return {
      title: "Programme Not Found | Pure Startup Academy",
    };
  }

  return {
    title: `${program.title} | Pure Startup Academy`,
    description: program.summary,
  };
}

export default async function ProgramDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const program = programsBySlug[slug];

  if (!program) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main>
        <section className="overflow-hidden pb-8 pt-4">
          <div className="section-shell">
            <div
              className="relative overflow-hidden rounded-[34px] px-7 py-9 text-white shadow-[0_30px_70px_rgba(7,22,66,0.18)] md:px-10 lg:px-14 lg:py-14"
              style={{ background: program.theme.gradient }}
            >
              <div className="absolute -right-12 top-8 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute bottom-[-36px] left-[42%] h-40 w-40 rounded-full bg-white/10 blur-2xl" />
              <div className="relative z-10">
                <Link href="/programs" className="inline-flex items-center gap-2 text-sm font-bold text-white/82 transition hover:text-white">
                  <ArrowLeft size={15} /> Back to programs
                </Link>
                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.18em] text-white/85">
                    {program.label}
                  </span>
                  <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.18em] text-white/85">
                    {program.duration}
                  </span>
                </div>
                <h1 className="mt-5 max-w-5xl text-[34px] font-black uppercase leading-[0.96] sm:text-[52px] lg:text-[68px]">
                  {program.title}
                </h1>
                <p className="mt-4 text-[15px] font-extrabold uppercase tracking-[0.08em] text-white/72 sm:text-[17px]">
                  {program.strapline}
                </p>
                <p className="mt-6 max-w-4xl text-[18px] font-semibold leading-8 text-white/88">{program.headline}</p>
                <p className="mt-4 max-w-3xl text-[16px] font-medium leading-8 text-white/76">{program.summary}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href={program.checkoutUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary bg-white text-brand-navy hover:bg-slate-100"
                  >
                    Enroll Securely <ArrowRight size={16} />
                  </Link>
                  <Link href="/programs" className="btn-secondary border-white/40 bg-transparent text-white hover:border-white hover:bg-white/10 hover:text-white">
                    Compare Programmes
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell pb-10 pt-2">
          <div className="grid gap-6 lg:grid-cols-[1.04fr_0.96fr]">
            <div className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-[0_22px_48px_rgba(7,22,66,0.06)] md:p-8">
              <div className="flex items-center gap-3 text-brand-green">
                <Target size={22} />
                <p className="text-[12px] font-extrabold uppercase tracking-[0.18em]">Designed For</p>
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                {program.audience.map((item) => (
                  <span key={item} className="rounded-full border border-slate-200 px-4 py-2 text-[13px] font-bold text-brand-ink">
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {program.transformation.map((item, index) => (
                  <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-5">
                    <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-slate-400">Stage {index + 1}</p>
                    <p className="mt-3 text-[17px] font-black text-brand-navy">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-[0_22px_48px_rgba(7,22,66,0.06)] md:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl px-5 py-5" style={{ backgroundColor: program.theme.soft }}>
                  <CalendarDays size={22} color={program.theme.accent} />
                  <p className="mt-4 text-[11px] font-extrabold uppercase tracking-[0.16em] text-slate-500">Duration</p>
                  <p className="mt-2 text-[22px] font-black text-brand-navy">{program.duration}</p>
                </div>
                <div className="rounded-2xl bg-slate-50 px-5 py-5">
                  <Gem size={22} color={program.theme.accent} />
                  <p className="mt-4 text-[11px] font-extrabold uppercase tracking-[0.16em] text-slate-500">Launch Offer</p>
                  <p className="mt-2 text-[22px] font-black text-brand-navy">{program.investment.offer}</p>
                </div>
                <div className="rounded-2xl bg-slate-50 px-5 py-5">
                  <BriefcaseBusiness size={22} color={program.theme.accent} />
                  <p className="mt-4 text-[11px] font-extrabold uppercase tracking-[0.16em] text-slate-500">Standard Investment</p>
                  <p className="mt-2 text-[19px] font-black text-brand-navy">{program.investment.standard}</p>
                </div>
                <div className="rounded-2xl bg-slate-50 px-5 py-5">
                  <UsersRound size={22} color={program.theme.accent} />
                  <p className="mt-4 text-[11px] font-extrabold uppercase tracking-[0.16em] text-slate-500">Installment</p>
                  <p className="mt-2 text-[19px] font-black text-brand-navy">{program.investment.installment}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {program.purpose ? (
          <section className="section-shell pb-10 pt-1">
            <div className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-[0_22px_48px_rgba(7,22,66,0.06)] md:p-8">
              <div className="flex items-center gap-3 text-brand-green">
                <BookOpen size={22} />
                <p className="text-[12px] font-extrabold uppercase tracking-[0.18em]">Purpose</p>
              </div>
              <div className="mt-5 grid gap-4 lg:grid-cols-2">
                {program.purpose.map((item) => (
                  <div key={item} className="rounded-2xl border border-slate-200 px-5 py-4 text-[15px] font-semibold leading-7 text-brand-ink">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {program.modules ? (
          <section className="section-shell pb-10 pt-1">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-[12px] font-extrabold uppercase tracking-[0.18em] text-brand-green">Curriculum</p>
                <h2 className="mt-3 text-[32px] font-black uppercase leading-tight text-brand-navy">
                  {program.modulesHeading}
                </h2>
              </div>
            </div>
            <div className="mt-6 grid gap-5 xl:grid-cols-2">
              {program.modules.map((module) => (
                <article key={module.title} className="rounded-[26px] border border-slate-200 bg-white p-6 shadow-[0_18px_42px_rgba(7,22,66,0.06)]">
                  <h3 className="text-[22px] font-black uppercase leading-tight text-brand-navy">{module.title}</h3>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {module.items.map((item) => (
                      <div key={item} className="flex items-start gap-3 rounded-2xl bg-slate-50 px-4 py-3">
                        <CheckCircle2 className="mt-0.5 shrink-0" size={18} color={program.theme.accent} />
                        <p className="text-[14px] font-bold leading-6 text-brand-ink">{item}</p>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>
        ) : null}

        {program.learningPoints ? (
          <section className="section-shell pb-10 pt-1">
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-[0_22px_48px_rgba(7,22,66,0.06)] md:p-8">
                <p className="text-[12px] font-extrabold uppercase tracking-[0.18em] text-brand-green">What You Will Learn</p>
                <div className="mt-5 grid gap-3">
                  {program.learningPoints.map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-2xl bg-slate-50 px-4 py-3">
                      <BadgeCheck className="mt-0.5 shrink-0" size={18} color={program.theme.accent} />
                      <p className="text-[15px] font-bold leading-7 text-brand-ink">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-[0_22px_48px_rgba(7,22,66,0.06)] md:p-8">
                <p className="text-[12px] font-extrabold uppercase tracking-[0.18em] text-brand-green">What You Will Receive</p>
                <div className="mt-5 grid gap-3">
                  {program.receivePoints?.map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-2xl bg-slate-50 px-4 py-3">
                      <BadgeCheck className="mt-0.5 shrink-0" size={18} color={program.theme.accent} />
                      <p className="text-[15px] font-bold leading-7 text-brand-ink">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ) : null}

        <section className="section-shell pb-10 pt-1">
          <div className="grid gap-6 lg:grid-cols-[1.04fr_0.96fr]">
            <div className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-[0_22px_48px_rgba(7,22,66,0.06)] md:p-8">
              <p className="text-[12px] font-extrabold uppercase tracking-[0.18em] text-brand-green">Bonuses & Resources</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {program.bonusResources?.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-200 px-4 py-3">
                    <CheckCircle2 className="mt-0.5 shrink-0" size={18} color={program.theme.accent} />
                    <p className="text-[14px] font-bold leading-6 text-brand-ink">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-[0_22px_48px_rgba(7,22,66,0.06)] md:p-8">
              <p className="text-[12px] font-extrabold uppercase tracking-[0.18em] text-brand-green">By The End</p>
              <div className="mt-5 grid gap-3">
                {program.completionOutcomes.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl bg-slate-50 px-4 py-3">
                    <CheckCircle2 className="mt-0.5 shrink-0" size={18} color={program.theme.accent} />
                    <p className="text-[15px] font-bold leading-7 text-brand-ink">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell pb-12 pt-1">
          <div className="overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_26px_56px_rgba(7,22,66,0.08)]">
            <div className="grid gap-0 lg:grid-cols-[0.92fr_1.08fr]">
              <div className="px-7 py-8 text-white md:px-10 md:py-10" style={{ background: program.theme.gradient }}>
                <p className="text-[12px] font-extrabold uppercase tracking-[0.18em] text-white/78">Outcome</p>
                <h2 className="mt-4 text-[32px] font-black uppercase leading-tight">{program.outcomeStatement}</h2>
                {program.vision ? <p className="mt-5 max-w-xl text-[16px] font-semibold leading-8 text-white/82">{program.vision}</p> : null}
              </div>
              <div className="px-7 py-8 md:px-10 md:py-10">
                <p className="text-[12px] font-extrabold uppercase tracking-[0.18em] text-brand-green">Reserve Your Place</p>
                <p className="mt-3 max-w-2xl text-[15px] font-semibold leading-7 text-slate-600">
                  Complete your enrollment through our secure Stripe checkout for this programme.
                </p>
                <div className="mt-5 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl border border-slate-200 px-4 py-4">
                    <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-slate-400">Standard</p>
                    <p className="mt-2 text-[20px] font-black text-brand-navy">{program.investment.standard}</p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 px-4 py-4">
                    <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-slate-400">Launch Offer</p>
                    <p className="mt-2 text-[20px] font-black text-brand-navy">{program.investment.offer}</p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 px-4 py-4">
                    <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-slate-400">Installment</p>
                    <p className="mt-2 text-[20px] font-black text-brand-navy">{program.investment.installment}</p>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href={program.checkoutUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                    Proceed to Payment <ArrowRight size={16} />
                  </Link>
                  <Link href="/programs" className="btn-secondary">
                    See All Programs
                  </Link>
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
