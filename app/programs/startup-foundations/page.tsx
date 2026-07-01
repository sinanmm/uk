import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  Lightbulb,
  ClipboardList,
  Target,
  Tag,
  Megaphone,
  Rocket,
  Users,
  Calendar,
  Clock,
  MonitorPlay,
  Award,
  Headphones,
  PlaySquare,
  GraduationCap,
  BookOpen,
  Bot,
  Box,
  UserRound,
  Check,
  PieChart,
  FileText,
  Building2,
  CalendarDays,
  UsersRound,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { programsBySlug } from "@/components/programsData";

const checkoutUrl = programsBySlug["startup-foundations"].checkoutUrl;

const features = [
  { label: "Weekly", icon: Calendar },
  { label: "8 Modules", icon: Box },
  { label: "Expert Feedback", icon: Headphones },
  { label: "Certificate", icon: Award },
  { label: "Community Access", icon: Users },
  { label: "Lifetime Access", icon: PlaySquare },
];

const outcomesLeft = [
  { text: "Validate a real business idea", icon: Lightbulb },
  { text: "Build a practical business plan", icon: ClipboardList },
  { text: "Understand your target customers", icon: Target },
  { text: "Develop a professional brand", icon: Tag },
];

const outcomesRight = [
  { text: "Learn sales and marketing fundamentals", icon: Megaphone },
  { text: "Gain confidence to launch", icon: Rocket },
  { text: "Pitch your business professionally", icon: UserRound },
  { text: "Have a personalised action plan", icon: FileText },
];

const curriculum = [
  {
    title: "ENTREPRENEURIAL MINDSET",
    text: "Develop the right mindset and habits to start and run a business successfully.",
    icon: Lightbulb,
    color: "text-green-500",
    bg: "bg-green-50",
    border: "border-green-200",
  },
  {
    title: "IDENTIFY A PROFITABLE BUSINESS IDEA",
    text: "Find a problem worth solving and define your target audience.",
    icon: Target,
    color: "text-blue-500",
    bg: "bg-blue-50",
    border: "border-blue-200",
  },
  {
    title: "IDEA VALIDATION",
    text: "Validate your idea with real customers before investing time and money.",
    icon: CheckCircle2,
    color: "text-yellow-500",
    bg: "bg-yellow-50",
    border: "border-yellow-200",
  },
  {
    title: "MARKET RESEARCH & COMPETITOR ANALYSIS",
    text: "Research your market, understand your competitors and identify your competitive advantage.",
    icon: PieChart,
    color: "text-purple-500",
    bg: "bg-purple-50",
    border: "border-purple-200",
  },
  {
    title: "BUSINESS MODEL & PRICING BASICS",
    text: "Build a strong business model and set the right pricing for your product or service.",
    icon: Tag,
    color: "text-indigo-500",
    bg: "bg-indigo-50",
    border: "border-indigo-200",
  },
  {
    title: "CREATE YOUR FIRST BUSINESS PLAN",
    text: "Create a simple, practical business plan that guides your startup journey.",
    icon: FileText,
    color: "text-orange-500",
    bg: "bg-orange-50",
    border: "border-orange-200",
  },
  {
    title: "COMPANY SETUP & FINANCES",
    text: "Understand company structures, accounting basics and how to manage your finances.",
    icon: Building2,
    color: "text-red-500",
    bg: "bg-red-50",
    border: "border-red-200",
  },
  {
    title: "PREPARE FOR YOUR FIRST CUSTOMERS",
    text: "Build your online presence and create a strategy to get your first customers.",
    icon: Rocket,
    color: "text-cyan-500",
    bg: "bg-cyan-50",
    border: "border-cyan-200",
  },
];

const whatsIncludedLeft = [
  {
    title: "LIVE INTERACTIVE SESSIONS",
    text: "12 weeks of online live interactive sessions with your tutor.",
    icon: MonitorPlay,
    color: "text-green-500",
    bg: "bg-green-100",
  },
  {
    title: "PRACTICAL EXERCISES & ACTIVITIES",
    text: "Hands-on exercises during each session to build your business.",
    icon: FileText,
    color: "text-blue-500",
    bg: "bg-blue-100",
  },
  {
    title: "BUSINESS TEMPLATES & FRAMEWORKS",
    text: "Ready to use templates such as financial plans, SWOT analysis, and more.",
    icon: ClipboardList,
    color: "text-orange-500",
    bg: "bg-orange-100",
  },
  {
    title: "AI TOOL RECOMMENDATIONS",
    text: "Introduction to AI tools that can save time, improve efficiency and help your business grow.",
    icon: Bot,
    color: "text-purple-500",
    bg: "bg-purple-100",
  },
  {
    title: "ACTION PLANS & CHECKLISTS",
    text: "Step-by-step checklists to guide you through your business setup and launch.",
    icon: CheckCircle2,
    color: "text-cyan-500",
    bg: "bg-cyan-100",
  },
];

const whatsIncludedRight = [
  {
    title: "BUSINESS PLANNING WORKBOOK",
    text: "A dedicated workbook to structure your ideas and build a comprehensive business plan.",
    icon: BookOpen,
    color: "text-yellow-500",
    bg: "bg-yellow-100",
  },
  {
    title: "CERTIFICATE OF COMPLETION",
    text: "Receive a certificate upon successful completion of the programme.",
    icon: Award,
    color: "text-indigo-500",
    bg: "bg-indigo-100",
  },
  {
    title: "COMMUNITY ACCESS",
    text: "Join a private community of aspiring entrepreneurs.",
    icon: Users,
    color: "text-pink-500",
    bg: "bg-pink-100",
  },
  {
    title: "Q&A & EXPERT SUPPORT",
    text: "Get your questions answered during live sessions and dedicated Q&A slots.",
    icon: Headphones,
    color: "text-red-500",
    bg: "bg-red-100",
  },
  {
    title: "SESSION RECORDINGS (LIFETIME ACCESS)",
    text: "Missed a session? Don't worry. All sessions are recorded and available for lifetime access.",
    icon: PlaySquare,
    color: "text-emerald-500",
    bg: "bg-emerald-100",
  },
];

const whyLearnLeft = [
  { text: "Learn from entrepreneurs who have built successful businesses", icon: UserRound },
  { text: "Practical, real-world learning not just theory", icon: GraduationCap },
  { text: "Real UK business case studies and examples", icon: BookOpen },
];

const whyLearnRight = [
  { text: "Personal guidance and feedback", icon: UserRound },
  { text: "AI tools integrated throughout the programme", icon: Bot },
  { text: "Finish with a launch-ready action plan", icon: CheckCircle2 },
];

export default function Program1Page() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <main className="pb-16 font-sans">
        {/* HERO SECTION */}
        <section className="pt-12 pb-16 px-4">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1">
              <div className="text-base font-bold text-gray-500 mb-2">HOME &gt; PROGRAMS &gt; <span className="text-gray-900">FOUNDERS</span></div>
              <h1 className="text-[54px] sm:text-[68px] font-black uppercase leading-[1.1] text-brand-navy">
                IDEA TO <span className="text-brand-green">LAUNCH</span>
              </h1>
              <p className="mt-4 text-[22px] font-semibold text-gray-700 max-w-lg leading-snug">
                Turn your business idea into a reality. Ready to launch?
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href={checkoutUrl}
                  target="_blank"
                  className="bg-brand-green text-white px-8 py-4 rounded-full font-black uppercase tracking-wide hover:bg-green-700 transition"
                >
                  ENROLL NOW
                </Link>
                <Link
                  href="#"
                  className="border-2 border-brand-green text-brand-green px-8 py-4 rounded-full font-black uppercase tracking-wide hover:bg-green-50 transition"
                >
                  GET A PROSPECTUS
                </Link>
              </div>
            </div>
            <div className="flex-1 relative aspect-[4/3] w-full max-w-lg mx-auto">
              <Image
                src="/notebook_launch.png"
                alt="Idea to Launch Notebook"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <div className="max-w-5xl mx-auto mt-16 grid grid-cols-2 md:grid-cols-6 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-3">
                <div className="w-14 h-14 rounded-full bg-[#eef8ec] flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-brand-green" />
                </div>
                <span className="text-base font-bold text-gray-700">{feature.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* OUTCOMES SECTION */}
        <section className="py-16 px-4 bg-prog1-pattern">
          <h2 className="text-center text-[28px] sm:text-[36px] font-black uppercase text-brand-green mb-12">
            BY THE END OF THIS PROGRAMME, YOU WILL:
          </h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-x-12 gap-y-8">
            <div className="space-y-8">
              {outcomesLeft.map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-12 h-12 flex-shrink-0 rounded-full bg-green-50 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-brand-green" />
                  </div>
                  <span className="text-[19px] font-bold text-brand-navy">{item.text}</span>
                </div>
              ))}
            </div>
            <div className="space-y-8">
              {outcomesRight.map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-12 h-12 flex-shrink-0 rounded-full bg-green-50 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-brand-green" />
                  </div>
                  <span className="text-[19px] font-bold text-brand-navy">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CURRICULUM SECTION */}
        <section className="py-16 px-4 bg-grid-pattern/50">
          <div className="text-center mb-12">
            <h2 className="text-[28px] sm:text-[36px] font-black uppercase text-brand-green">
              PROGRAMME CURRICULUM
            </h2>
            <p className="text-gray-600 font-semibold mt-2 text-lg">
              8 powerful modules designed to take you from idea to launch.
            </p>
          </div>
          <div className="max-w-2xl mx-auto space-y-6">
            {curriculum.map((item, i) => (
              <div key={i} className="flex items-start gap-5">
                <div className={`w-14 h-14 flex-shrink-0 rounded-full border-2 ${item.border} ${item.bg} flex items-center justify-center`}>
                  <item.icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <div className="pt-1">
                  <div className="flex items-center gap-2">
                    <span className={`w-6 h-6 rounded-full ${item.bg} ${item.color} flex items-center justify-center text-xs font-bold`}>{i + 1}</span>
                    <h3 className="text-lg font-black uppercase text-brand-navy">{item.title}</h3>
                  </div>
                  <p className="text-gray-600 font-medium mt-1 pl-8 text-[19px]">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* LEARNING FORMAT */}
        <section className="py-16 px-4 bg-white-pattern">
          <h2 className="text-center text-[28px] sm:text-[36px] font-black uppercase text-brand-green mb-12">
            LEARNING FORMAT
          </h2>
          <div className="max-w-2xl mx-auto flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="border border-green-200 rounded-[20px] p-5 flex items-center gap-4 bg-green-50/30">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="text-[12px] font-black text-green-600 uppercase tracking-wider">DURATION</div>
                  <div className="font-bold text-brand-navy text-[19px]">12 Weeks</div>
                </div>
              </div>
              <div className="border border-blue-200 rounded-[20px] p-5 flex items-center gap-4 bg-blue-50/30">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <CalendarDays className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="text-[12px] font-black text-blue-600 uppercase tracking-wider">SCHEDULE</div>
                  <div className="font-bold text-brand-navy text-[19px]">2 Sessions per Week</div>
                </div>
              </div>
            </div>
            <div className="border border-yellow-200 rounded-[20px] p-5 flex items-center gap-4 bg-yellow-50/30">
              <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <div className="text-[12px] font-black text-yellow-600 uppercase tracking-wider">SESSION LENGTH</div>
                <div className="font-bold text-brand-navy text-[19px]">2 Hours per Session</div>
              </div>
            </div>
            <div className="border border-purple-200 rounded-[20px] p-5 flex items-center gap-4 bg-purple-50/30">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                <MonitorPlay className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <div className="text-[12px] font-black text-purple-600 uppercase tracking-wider">MODE</div>
                <div className="font-bold text-brand-navy text-[19px]">Live Online + Recorded Sessions</div>
                <div className="text-gray-500 text-[20px] font-medium mt-0.5">Do your tasks at your pace.</div>
              </div>
            </div>
            <div className="border border-teal-200 rounded-[20px] p-5 flex items-center gap-4 bg-teal-50/30">
              <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                <UsersRound className="w-6 h-6 text-teal-600" />
              </div>
              <div>
                <div className="text-[12px] font-black text-teal-600 uppercase tracking-wider">LEARNING STYLE</div>
                <div className="font-bold text-brand-navy text-[19px]">Interactive Workshops & Activities</div>
                <div className="text-gray-500 text-[20px] font-medium mt-0.5">Learn by doing, not just listening.</div>
              </div>
            </div>
          </div>
        </section>

        {/* INVESTMENT */}
        <section className="py-16 px-4 bg-grid-pattern/50">
          <div className="text-center mb-12">
            <h2 className="text-[28px] sm:text-[36px] font-black uppercase text-brand-navy">
              INVESTMENT
            </h2>
            <p className="text-gray-500 font-semibold mt-1">Secure your place on the programme.</p>
          </div>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-[24px] border border-gray-200 p-8 shadow-sm relative overflow-hidden flex flex-col h-full">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="text-[19px] font-black text-brand-green uppercase bg-green-50 px-3 py-1 rounded-full inline-block mb-3">
                    PAY IN FULL
                  </div>
                  <div className="text-[42px] font-black text-brand-navy leading-none">£300</div>
                  <div className="text-gray-400 font-semibold text-base mt-1">+ VAT</div>
                </div>
                <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center border-4 border-white shadow-sm">
                  <CheckCircle2 className="w-8 h-8 text-brand-green" />
                </div>
              </div>
              <div className="space-y-4 mb-8 flex-1">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-brand-green mt-0.5" />
                  <span className="text-gray-700 font-medium text-[19px]">Pay once and get access</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-brand-green mt-0.5" />
                  <span className="text-gray-700 font-medium text-[19px]">All features included</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-brand-green mt-0.5" />
                  <span className="text-gray-700 font-medium text-[19px]">Save £100 by paying in full</span>
                </div>
              </div>
              <Link
                href={checkoutUrl}
                target="_blank"
                className="w-full bg-brand-green text-white py-4 rounded-full font-black uppercase tracking-wide flex items-center justify-center gap-2 hover:bg-green-700 transition mt-auto"
              >
                ENROLL NOW &gt;
              </Link>
            </div>

            <div className="bg-white rounded-[24px] border border-gray-200 p-8 shadow-sm relative overflow-hidden flex flex-col h-full">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="text-[19px] font-black text-blue-600 uppercase bg-blue-50 px-3 py-1 rounded-full inline-block mb-3">
                    PAY IN 3 INSTALMENTS
                  </div>
                  <div className="text-[42px] font-black text-brand-navy leading-none">£100 <span className="text-xl">/ m</span></div>
                  <div className="text-gray-400 font-semibold text-base mt-1">+ VAT for 3 months</div>
                </div>
                <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center border-4 border-white shadow-sm">
                  <CalendarDays className="w-8 h-8 text-blue-600" />
                </div>
              </div>
              <div className="space-y-4 mb-8 flex-1">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-600 mt-0.5" />
                  <span className="text-gray-700 font-medium text-[19px]">Pay over 3 months</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-600 mt-0.5" />
                  <span className="text-gray-700 font-medium text-[19px]">All features included</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-600 mt-0.5" />
                  <span className="text-gray-700 font-medium text-[19px]">Automated payments</span>
                </div>
              </div>
              <Link
                href={checkoutUrl}
                target="_blank"
                className="w-full bg-blue-600 text-white py-4 rounded-full font-black uppercase tracking-wide flex items-center justify-center gap-2 hover:bg-blue-700 transition mt-auto"
              >
                ENROLL NOW &gt;
              </Link>
            </div>
          </div>
        </section>

        {/* WHATS INCLUDED */}
        <section className="py-16 px-4 bg-white-pattern">
          <div className="text-center mb-12">
            <h2 className="text-[28px] sm:text-[36px] font-black uppercase text-brand-green">
              WHAT'S INCLUDED?
            </h2>
            <p className="text-gray-500 font-semibold mt-1">Everything you need to launch and grow your business.</p>
          </div>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-x-12 gap-y-6">
            <div className="space-y-6">
              {whatsIncludedLeft.map((item, i) => (
                <div key={i} className="bg-gray-50/70 rounded-[20px] p-5 flex items-center gap-5">
                  <div className={`w-14 h-14 rounded-full ${item.bg} flex items-center justify-center flex-shrink-0`}>
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <div>
                    <h3 className="font-black text-brand-navy text-[19px]">{item.title}</h3>
                    <p className="text-gray-500 text-[19px] font-medium leading-tight mt-1">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-6">
              {whatsIncludedRight.map((item, i) => (
                <div key={i} className="bg-gray-50/70 rounded-[20px] p-5 flex items-center gap-5">
                  <div className={`w-14 h-14 rounded-full ${item.bg} flex items-center justify-center flex-shrink-0`}>
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <div>
                    <h3 className="font-black text-brand-navy text-[19px]">{item.title}</h3>
                    <p className="text-gray-500 text-[19px] font-medium leading-tight mt-1">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY LEARN FROM US */}
        <section className="py-16 px-4 bg-grid-pattern/50">
          <div className="text-center mb-12">
            <h2 className="text-[28px] sm:text-[36px] font-black uppercase text-brand-navy">
              WHY LEARN <span className="text-brand-green">FROM US?</span>
            </h2>
            <p className="text-gray-500 font-semibold mt-1">We want you to succeed. Here is why you should join us:</p>
          </div>
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 items-center">
            <div className="space-y-6">
              {whyLearnLeft.map((item, i) => (
                <div key={i} className="group bg-white border border-gray-100 rounded-[20px] p-6 flex items-center gap-5 shadow-[0_4px_15px_rgb(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgba(47,148,36,0.12)] hover:-translate-y-1.5 hover:border-brand-green/30 transition-all duration-300">
                  <div className="w-14 h-14 rounded-full bg-green-50/80 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-green transition-colors duration-300">
                    <item.icon className="w-7 h-7 text-brand-green group-hover:text-white transition-colors duration-300 stroke-[1.5]" />
                  </div>
                  <span className="text-brand-navy font-black text-[19px] md:text-[20px] leading-snug">{item.text}</span>
                </div>
              ))}
            </div>
            <div className="space-y-6">
              {whyLearnRight.map((item, i) => (
                <div key={i} className="group bg-white border border-gray-100 rounded-[20px] p-6 flex items-center gap-5 shadow-[0_4px_15px_rgb(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgba(47,148,36,0.12)] hover:-translate-y-1.5 hover:border-brand-green/30 transition-all duration-300">
                  <div className="w-14 h-14 rounded-full bg-green-50/80 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-green transition-colors duration-300">
                    <item.icon className="w-7 h-7 text-brand-green group-hover:text-white transition-colors duration-300 stroke-[1.5]" />
                  </div>
                  <span className="text-brand-navy font-black text-[19px] md:text-[20px] leading-snug">{item.text}</span>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-br from-green-50 via-white to-white border border-green-100 rounded-[28px] p-8 text-center flex flex-col items-center justify-center shadow-[0_8px_30px_rgba(47,148,36,0.08)] hover:shadow-[0_15px_40px_rgba(47,148,36,0.15)] hover:-translate-y-1 transition-all duration-300 h-full min-h-[340px] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/5 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-navy/5 rounded-full blur-2xl"></div>
              
              <div className="relative w-36 h-36 mb-8 transform hover:scale-110 transition-transform duration-500">
                <Image
                  src="/golden_trophy.png"
                  alt="Trophy"
                  fill
                  className="object-contain drop-shadow-xl"
                />
              </div>
              <div className="bg-white border border-green-200 rounded-full px-5 py-2.5 flex items-center gap-2 mb-4 shadow-sm z-10">
                <Target className="w-5 h-5 text-brand-green stroke-[2.5]" />
                <span className="font-black text-brand-navy text-[20px] uppercase tracking-wide">OUR GOAL IS YOUR SUCCESS</span>
              </div>
              <div className="flex items-center gap-2 text-[19px] font-black text-gray-500 uppercase tracking-widest z-10">
                <CheckCircle2 className="w-4 h-4 text-brand-green" />
                LEARN. IMPLEMENT. GROW. SUCCEED.
              </div>
            </div>
          </div>
        </section>

        {/* CTA FOOTER */}
        <section className="px-4">
          <div className="max-w-5xl mx-auto bg-brand-navy rounded-[30px] p-10 md:p-14 relative overflow-hidden flex flex-col md:flex-row items-center gap-10">
            {/* Background elements */}
            <div className="absolute top-[-50px] right-[-50px] w-64 h-64 bg-[#112660] rounded-full blur-3xl"></div>
            
            <div className="w-full md:w-1/3 relative h-48 md:h-64 flex-shrink-0 z-10">
              {/* Added a generic space/rocket image placeholder if one isn't available, but using the notebook for now or a lucide icon large */}
              <div className="absolute inset-0 flex items-center justify-center">
                 <Rocket className="w-40 h-40 text-brand-green opacity-80 animate-pulse" />
              </div>
            </div>
            
            <div className="flex-1 z-10 text-center md:text-left">
              <h2 className="text-white text-[32px] sm:text-[42px] font-black leading-[1.1]">
                Your entrepreneurial<br />
                <span className="text-brand-green">journey starts today.</span>
              </h2>
              <p className="text-white/80 font-medium text-[20px] mt-4 mb-2">
                Enroll today to turn your business idea into reality.
              </p>
              <p className="text-white font-bold text-[20px] mb-8">
                Ready to launch? <span className="text-brand-green">Join us.</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link
                  href={checkoutUrl}
                  target="_blank"
                  className="bg-brand-green text-white px-8 py-4 rounded-lg font-black uppercase tracking-wide hover:bg-green-700 transition text-center"
                >
                  ENROLL NOW &gt;
                </Link>
                <Link
                  href="#"
                  className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-lg font-black uppercase tracking-wide hover:bg-white/20 transition text-center"
                >
                  BOOK A WEBINAR &gt;
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
