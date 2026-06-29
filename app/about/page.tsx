import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Bot,
  BriefcaseBusiness,
  Compass,
  Lightbulb,
  MessageSquareQuote,
  Rocket,
  ShieldCheck,
  Target,
  UsersRound,
} from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const motivations = [
  "More freedom and control over your future",
  "A clearer route to income and financial independence",
  "The chance to build something meaningful and lasting",
  "A smarter first step without costly mistakes",
];

const promises = [
  "Understand entrepreneurship in a practical UK context",
  "Avoid common mistakes that waste time and money",
  "Identify stronger opportunities before you commit",
  "Take confident action with a clear next step",
];

const resources = [
  "Business plan and DPR templates",
  "Business model canvas and idea validation tools",
  "Customer interview and market research frameworks",
  "Startup financial planning and cash flow resources",
  "Sales scripts, outreach templates and follow-up guides",
  "Social media planners, AI tools and practical startup support",
];

const values = [
  {
    title: "Practical before theoretical",
    text: "We focus on what founders can actually apply, not information that stays on paper.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Confidence through clarity",
    text: "Our goal is to help people move from uncertainty into informed action.",
    icon: Compass,
  },
  {
    title: "Support for real beginnings",
    text: "We serve students, aspiring entrepreneurs, professionals and future founders at the earliest stage.",
    icon: UsersRound,
  },
];

export const metadata = {
  title: "About Us | Pure Startup Academy",
  description:
    "Learn how Pure Startup Academy helps future founders start smart with practical entrepreneurship guidance, tools and support.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="overflow-hidden pb-10 pt-4">
          <div className="section-shell">
            <div className="relative overflow-hidden rounded-[34px] border border-slate-200 bg-[linear-gradient(145deg,#071642_0%,#123164_52%,#2f9424_100%)] px-7 py-10 text-white shadow-[0_30px_70px_rgba(7,22,66,0.16)] md:px-10 lg:px-14 lg:py-14">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.14),transparent_24rem)]" />
              <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-white/8 blur-3xl" />
              <div className="absolute bottom-[-36px] right-[10%] h-44 w-44 rounded-full bg-brand-bright/18 blur-3xl" />

              <div className="relative z-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
                <div className="max-w-4xl">
                  <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.2em] text-white/86">
                    About Us
                  </span>
                  <h1 className="mt-6 max-w-4xl text-[36px] font-black uppercase leading-[0.92] sm:text-[54px] lg:text-[72px]">
                    Helping future founders start smart and move with confidence.
                  </h1>
                  <p className="mt-6 max-w-3xl text-[17px] font-semibold leading-8 text-white/84 sm:text-[19px]">
                    Pure Startup Academy exists to help aspiring entrepreneurs understand the path into business,
                    avoid costly mistakes, spot real opportunities and take the first step with clarity.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link href="/#contact" className="btn-primary bg-white text-brand-navy hover:bg-slate-100">
                      Book Free Consultation <ArrowRight size={16} />
                    </Link>
                    <Link href="/programs" className="btn-secondary border-white/40 bg-transparent text-white hover:border-white hover:bg-white/10 hover:text-white">
                      Explore Programmes
                    </Link>
                  </div>
                </div>

                <div className="rounded-[28px] border border-white/12 bg-white/10 p-6 backdrop-blur-sm">
                  <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-white/66">Our mission</p>
                  <div className="mt-4 grid gap-3">
                    {promises.map((item) => (
                      <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/6 px-4 py-4">
                        <BadgeCheck className="mt-0.5 shrink-0 text-white" size={18} />
                        <p className="text-[15px] font-bold leading-7 text-white">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell pb-12 pt-2">
          <div className="grid gap-6 lg:grid-cols-[0.96fr_1.04fr]">
            <div className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-[0_20px_45px_rgba(7,22,66,0.06)] md:p-8">
              <div className="flex items-center gap-3 text-brand-green">
                <MessageSquareQuote size={22} />
                <p className="text-[12px] font-extrabold uppercase tracking-[0.18em]">Why People Come To Us</p>
              </div>
              <h2 className="mt-4 text-[30px] font-black uppercase leading-tight text-brand-navy">
                Most people do not need more noise. They need the right direction.
              </h2>
              <div className="mt-6 grid gap-4">
                {motivations.map((item) => (
                  <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4">
                    <p className="text-[15px] font-bold leading-7 text-brand-ink">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-[0_20px_45px_rgba(7,22,66,0.06)] md:p-8">
              <div className="grid gap-5 md:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 p-5">
                  <Target className="text-brand-green" size={24} />
                  <p className="mt-4 text-[12px] font-extrabold uppercase tracking-[0.16em] text-slate-400">Today&apos;s focus</p>
                  <p className="mt-2 text-[15px] font-bold leading-7 text-brand-ink">
                    Helping people understand entrepreneurship, identify opportunity and take the first practical step.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 p-5">
                  <ShieldCheck className="text-brand-green" size={24} />
                  <p className="mt-4 text-[12px] font-extrabold uppercase tracking-[0.16em] text-slate-400">Our approach</p>
                  <p className="mt-2 text-[15px] font-bold leading-7 text-brand-ink">
                    Clear guidance, realistic examples, useful tools and action-led support instead of vague motivation.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 p-5">
                  <Rocket className="text-brand-green" size={24} />
                  <p className="mt-4 text-[12px] font-extrabold uppercase tracking-[0.16em] text-slate-400">Who it is for</p>
                  <p className="mt-2 text-[15px] font-bold leading-7 text-brand-ink">
                    Students, aspiring entrepreneurs, working professionals and future founders preparing to start smart.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 p-5">
                  <Lightbulb className="text-brand-green" size={24} />
                  <p className="mt-4 text-[12px] font-extrabold uppercase tracking-[0.16em] text-slate-400">Core belief</p>
                  <p className="mt-2 text-[15px] font-bold leading-7 text-brand-ink">
                    Success starts with the right information, the right mindset and the courage to act on both.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell pb-12 pt-2">
          <div className="grid gap-6 xl:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <article key={value.title} className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-[0_20px_45px_rgba(7,22,66,0.06)]">
                  <div className="icon-ring text-brand-green">
                    <Icon size={28} strokeWidth={1.9} />
                  </div>
                  <h3 className="mt-6 text-[24px] font-black uppercase leading-tight text-brand-navy">{value.title}</h3>
                  <p className="mt-4 text-[15px] font-semibold leading-8 text-brand-ink">{value.text}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="section-shell pb-12 pt-2">
          <div className="overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_24px_55px_rgba(7,22,66,0.07)]">
            <div className="grid gap-0 lg:grid-cols-[0.92fr_1.08fr]">
              <div className="bg-[linear-gradient(160deg,#071642_0%,#0f2b6d_100%)] px-7 py-8 text-white md:px-10 md:py-10">
                <p className="text-[12px] font-extrabold uppercase tracking-[0.18em] text-white/76">What We Provide</p>
                <h2 className="mt-4 text-[32px] font-black uppercase leading-tight">
                  Tools, structure and support that help people move from idea to action.
                </h2>
                <p className="mt-5 max-w-xl text-[16px] font-semibold leading-8 text-white/82">
                  The document highlights the kind of practical support founders need most at the beginning:
                  planning tools, validation frameworks, financial templates, outreach guidance and modern AI-assisted workflows.
                </p>
              </div>
              <div className="px-7 py-8 md:px-10 md:py-10">
                <div className="grid gap-3 sm:grid-cols-2">
                  {resources.map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-200 px-4 py-4">
                      <Bot className="mt-0.5 shrink-0 text-brand-green" size={18} />
                      <p className="text-[14px] font-bold leading-7 text-brand-ink">{item}</p>
                    </div>
                  ))}
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
