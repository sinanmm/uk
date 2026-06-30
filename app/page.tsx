import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  CircleCheckBig,
  CircleX,
  Compass,
  GraduationCap,
  Lightbulb,
  Monitor,
  Presentation,
  Store,
  Target,
  TrendingUp,
  UserRound,
  Users,
  MonitorPlay,
  Rocket,
} from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const consultationUrl =
  "https://forms.zohopublic.eu/infopsac1/form/PureStartupAcademyRegistrationForm/formperma/QCaZ07UK0TadmpgM_-3X9o1xBPvaI6eodbpznGjBgyM?utm_source=ig&utm_medium=social&utm_content=link_in_bio&utm_id=97760_v0_s00_e0_tv3";

const webinarUrl = consultationUrl;

const journeySteps = [
  {
    title: "IDEA",
    text: "You have a vision",
    icon: Lightbulb,
    accent: "text-brand-green",
    ring: "border-brand-green",
  },
  {
    title: "LAUNCH",
    text: "You build it",
    icon: Compass,
    accent: "text-brand-green",
    ring: "border-brand-green",
  },
  {
    title: "GROWTH",
    text: "You gain traction",
    icon: TrendingUp,
    accent: "text-[#2166d1]",
    ring: "border-[#2166d1]",
  },
  {
    title: "SCALE",
    text: "You create impact",
    icon: Presentation,
    accent: "text-brand-navy",
    ring: "border-brand-navy",
  },
] as const;

const programmes = [
  {
    number: "01",
    title: "IDEA TO LAUNCH",
    duration: "3-Month Programme",
    points: [
      "Turn your business idea into a launch-ready plan",
      "Build your foundation step by step",
      "Prepare your idea for the market",
    ],
    href: "/programs/startup-foundations",
    accent: "#2f9424",
    soft: "#eef8ec",
    icon: Lightbulb,
  },
  {
    number: "02",
    title: "LAUNCH TO GROWTH",
    duration: "6-Month Programme",
    points: [
      "Build momentum after launch",
      "Learn how to attract customers",
      "Grow your business with confidence",
    ],
    href: "/programs/startup-launch-growth",
    accent: "#2166d1",
    soft: "#eef4ff",
    icon: TrendingUp,
  },
  {
    number: "03",
    title: "GROWTH TO SCALE",
    duration: "12-Month Programme",
    points: [
      "Improve systems and strategy",
      "Scale with expert mentorship",
      "Create stronger business growth",
    ],
    href: "/programs/entrepreneur-development",
    accent: "#2f9424",
    soft: "#eef8ec",
    icon: Presentation,
  },
] as const;

const audience = [
  { label: "Students & Graduates", icon: GraduationCap },
  { label: "Aspiring Entrepreneurs", icon: UserRound },
  { label: "Working Professionals", icon: BriefcaseBusiness },
  { label: "Small Business Owners", icon: Store },
  { label: "Freelancers & Creators", icon: Users },
] as const;

const painPoints = [
  "Have an idea but not sure where to start",
  "Lack of practical knowledge",
  "Do not know how to find customers",
  "Struggle with marketing and visibility",
  "Cash flow and financial uncertainty",
  "No roadmap for sustainable growth",
] as const;

const solutionPoints = [
  "Step-by-step practical training",
  "Proven frameworks and real-world strategies",
  "Mentorship from experienced entrepreneurs",
  "Tools, templates & AI powered resources",
  "Growth strategies that actually work",
  "A clear roadmap from start to scale",
] as const;

const outputPoints = [
  "Launch-ready or growing business",
  "More customers and consistent sales",
  "Stronger brand and online presence",
  "Better systems and financial control",
  "Measurable growth and profitability",
  "Confidence to scale and create impact",
] as const;

const whyItems = [
  { label: "PRACTICAL & ACTIONABLE", icon: Lightbulb },
  { label: "EXPERT MENTORSHIP", icon: UserRound },
  { label: "TOOLS & RESOURCES", icon: BriefcaseBusiness },
  { label: "COMMUNITY & NETWORK", icon: Monitor },
  { label: "RESULTS DRIVEN", icon: Target },
] as const;

function TitleBlock({ prefix, suffix }: { prefix: string; suffix: string }) {
  return (
    <h2 className="text-center text-[32px] font-black uppercase leading-none text-brand-navy sm:text-[42px]">
      {prefix} <span className="text-brand-green">{suffix}</span>
    </h2>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pb-8">
        <section id="home" className="page-fade overflow-hidden border-b border-slate-200/80 bg-white">
          <div className="section-shell grid items-center gap-10 pb-10 pt-7 lg:grid-cols-[0.95fr_1.05fr] lg:pb-14 lg:pt-10">
            <div className="relative z-10 py-4">
              <h1 className="text-[56px] font-black uppercase leading-[0.92] tracking-[-0.04em] text-brand-navy sm:text-[78px] lg:text-[90px]">
                FROM IDEA
                <br />
                TO FIRST
                <br />
                <span className="text-brand-green">CUSTOMER</span>
              </h1>
              <p className="mt-5 text-[25px] leading-tight text-brand-navy sm:text-[31px]">
                Your Transformation Journey Starts Here.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="#programmes" className="btn-primary rounded-[10px] px-6 py-4 text-[16px] normal-case tracking-normal">
                  EXPLORE PROGRAMS <ArrowRight size={18} />
                </Link>
                <Link href="#webinar" className="btn-secondary rounded-[10px] px-7 py-4 text-[16px] normal-case tracking-normal">
                  BOOK A FREE WEBINAR
                </Link>
              </div>
            </div>

            <div className="relative min-h-[360px] lg:min-h-[520px]">
              <div className="absolute inset-0">
                <Image
                  src="/growth.png"
                  alt="Pure Startup Academy hero visual"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 54vw"
                  className="object-contain object-center"
                />
              </div>

            </div>
          </div>
        </section>

        <section className="section-shell pt-14 sm:pt-20">
          <TitleBlock prefix="ONE JOURNEY." suffix="FOUR TRANSFORMATIONS." />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {journeySteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div key={step.title} className="flex items-center justify-center gap-4 xl:justify-start">
                  <div className={`flex h-[86px] w-[86px] shrink-0 items-center justify-center rounded-full border-[3px] bg-white ${step.ring}`}>
                    <Icon size={34} className={step.accent} strokeWidth={1.8} />
                  </div>
                  <div>
                    <p className={`text-[18px] font-black uppercase leading-none ${step.accent}`}>{step.title}</p>
                    <p className="mt-2 max-w-[130px] text-[17px] leading-tight text-brand-navy">{step.text}</p>
                  </div>
                  {index < journeySteps.length - 1 ? <span className="hidden text-[28px] font-black text-brand-navy xl:inline">&gt;</span> : null}
                </div>
              );
            })}
          </div>
        </section>

        <section id="programmes" className="section-shell pt-14 sm:pt-16">
          <TitleBlock prefix="THREE PROGRAMMES." suffix="ONE ENTREPRENEURIAL JOURNEY." />
          <div className="mt-8 grid gap-6 xl:grid-cols-3">
            {programmes.map((programme) => {
              const Icon = programme.icon;

              return (
                <article
                  key={programme.number}
                  className="rounded-[24px] border border-slate-200 bg-white px-7 pb-6 pt-8 shadow-[0_22px_46px_rgba(7,22,66,0.08)]"
                >
                  <div
                    className="inline-flex rounded-[10px] px-5 py-2 text-[18px] font-black text-white"
                    style={{ backgroundColor: programme.accent }}
                  >
                    {programme.number}
                  </div>
                  <div
                    className="mx-auto mt-6 flex h-20 w-20 items-center justify-center rounded-full"
                    style={{ backgroundColor: programme.soft }}
                  >
                    <Icon size={32} color={programme.accent} strokeWidth={1.8} />
                  </div>
                  <h3 className="mt-7 text-[26px] font-black uppercase leading-tight text-brand-navy">{programme.title}</h3>
                  <p className="mt-2 text-[18px] font-semibold" style={{ color: programme.accent }}>
                    {programme.duration}
                  </p>
                  <div className="mt-6 space-y-4">
                    {programme.points.map((point) => (
                      <div key={point} className="flex items-start gap-3">
                        <span
                          className="mt-2 h-3.5 w-3.5 shrink-0 rounded-full"
                          style={{ backgroundColor: programme.accent }}
                        />
                        <p className="text-[17px] leading-tight text-brand-navy">{point}</p>
                      </div>
                    ))}
                  </div>
                  <Link
                    href={programme.href}
                    className="mt-7 inline-flex w-full items-center justify-center rounded-[10px] border-2 px-5 py-3 text-[16px] font-black uppercase"
                    style={{ borderColor: programme.accent, color: programme.accent }}
                  >
                    LEARN MORE &gt;
                  </Link>
                </article>
              );
            })}
          </div>
        </section>

        <section id="about-us" className="section-shell pt-16 sm:pt-20">
          <TitleBlock prefix="WHO" suffix="ARE OUR PROGRAMMES FOR?" />
          <div className="mt-10 grid gap-8 border-y border-slate-200 py-8 md:grid-cols-3 xl:grid-cols-5 xl:divide-x xl:divide-slate-200">
            {audience.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.label} className="flex flex-col items-center px-5 text-center">
                  <Icon size={34} className="text-brand-green" strokeWidth={1.8} />
                  <p className="mt-4 text-[18px] font-black leading-tight text-brand-navy">{item.label}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="section-shell pt-12 sm:pt-14">
          <div className="grid gap-8 xl:grid-cols-3 xl:gap-10">
            <div>
              <h3 className="text-[30px] font-black uppercase leading-none text-brand-navy">
                THE <span className="text-[#ef534f]">PAIN</span> YOU FACE
              </h3>
              <div className="mt-6 space-y-4">
                {painPoints.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CircleX size={20} className="mt-1 shrink-0 text-[#ef534f]" />
                    <p className="text-[17px] font-semibold leading-tight text-brand-navy">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="xl:border-l xl:border-r xl:border-slate-200 xl:px-8">
              <h3 className="text-[30px] font-black uppercase leading-none text-brand-navy">THE SOLUTION WE PROVIDE</h3>
              <div className="mt-6 space-y-4">
                {solutionPoints.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CircleCheckBig size={20} className="mt-1 shrink-0 text-brand-green" />
                    <p className="text-[17px] font-semibold leading-tight text-brand-navy">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-[30px] font-black uppercase leading-none text-brand-navy">
                THE <span className="text-[#2166d1]">OUTPUT</span> YOU RECEIVE
              </h3>
              <div className="mt-6 space-y-4">
                {outputPoints.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CircleCheckBig size={20} className="mt-1 shrink-0 text-[#2166d1]" />
                    <p className="text-[17px] font-semibold leading-tight text-brand-navy">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="success-stories" className="section-shell pt-16 sm:pt-20">
          <TitleBlock prefix="WHY" suffix="PURE STARTUP ACADEMY?" />
          <div className="mt-10 grid gap-8 border-y border-slate-200 py-8 md:grid-cols-3 xl:grid-cols-5 xl:divide-x xl:divide-slate-200">
            {whyItems.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.label} className="flex flex-col items-center px-5 text-center">
                  <Icon size={34} className="text-brand-green" strokeWidth={1.8} />
                  <p className="mt-4 text-[18px] font-black leading-tight text-brand-navy">{item.label}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section id="webinar" className="section-shell pt-10 sm:pt-12">
          <div className="overflow-hidden rounded-[22px] bg-brand-navy text-white shadow-[0_22px_50px_rgba(7,22,66,0.16)]">
            <div className="grid gap-0 lg:grid-cols-[1.15fr_0.55fr_0.8fr]">
              <div className="px-6 py-7 sm:px-8 md:px-10 md:py-9">
                <div className="inline-flex rounded-[8px] bg-brand-green px-4 py-2 text-[16px] font-black uppercase">LIVE</div>
                <p className="mt-4 text-[18px] font-semibold text-white/90">Monthly Free Live Webinar</p>
                <h3 className="mt-4 text-[36px] font-black leading-[1.04] sm:text-[44px]">From Idea to First Customer</h3>
                <p className="mt-4 max-w-[520px] text-[18px] leading-tight text-white/86">
                  Join our free webinar and take the first step in your entrepreneurial journey.
                </p>
              </div>
              <div className="hidden items-center justify-center bg-[#17346f] lg:flex relative overflow-hidden min-h-[350px]">
                {/* Background decorative rings */}
                <div className="absolute w-[300px] h-[300px] rounded-full border border-white/5" />
                <div className="absolute w-[220px] h-[220px] rounded-full border border-white/10" />
                
                {/* Floating Icons */}
                <div className="absolute top-[20%] left-[20%] text-brand-green/70 animate-pulse">
                  <Lightbulb size={28} />
                </div>
                <div className="absolute bottom-[25%] right-[20%] text-brand-green/70 animate-pulse" style={{ animationDelay: '150ms' }}>
                  <Target size={28} />
                </div>
                <div className="absolute top-[30%] right-[25%] text-[#2166d1]/70 animate-[bounce_3s_infinite]">
                  <Rocket size={24} />
                </div>

                {/* Central element */}
                <div className="relative z-10 w-28 h-28 rounded-full bg-brand-green flex items-center justify-center shadow-[0_0_40px_rgba(47,148,36,0.4)] animate-[pulse_3s_infinite]">
                  <div className="w-20 h-20 rounded-full border-[3px] border-white/40 flex items-center justify-center">
                    <MonitorPlay size={36} className="text-white translate-x-0.5" />
                  </div>
                </div>
              </div>
              <div className="bg-[#122a5a] px-6 py-7 sm:px-8 md:px-10 md:py-9">
                <p className="text-[18px] font-semibold text-white/90">During the webinar you&apos;ll learn:</p>
                <div className="mt-5 space-y-4">
                  {["First customer strategy", "Avoid startup mistakes", "Practical launch steps"].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CircleCheckBig size={20} className="shrink-0 text-brand-green" />
                      <p className="text-[17px] text-white/90">{item}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-[18px] bg-white p-5 text-center text-brand-navy">
                  <p className="text-[18px] font-semibold text-brand-green">Next Webinar</p>
                  <p className="mt-2 text-[34px] font-black uppercase leading-none">5 JULY 2026</p>
                  <p className="mt-2 text-[18px] font-semibold uppercase text-slate-500">Saturday</p>
                  <p className="mt-3 text-[18px] font-black uppercase">6:00 PM UK Time</p>
                </div>
                <Link
                  href={webinarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary mt-5 w-full rounded-[10px] py-4 text-[17px] normal-case tracking-normal"
                >
                  REGISTER FREE
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
