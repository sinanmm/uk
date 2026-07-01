import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  Tag,
  Megaphone,
  Rocket,
  Users,
  Target,
  Building2,
  MonitorPlay,
  Briefcase,
  FileText,
  Calendar,
  Clock,
  CalendarDays,
  Bot,
  Award,
  Headphones,
  PlaySquare,
  BookOpen,
  GraduationCap,
  Trophy,
  MousePointer2,
  Handshake,
  Settings,
  Banknote,
  Wrench,
  Check,
  UserRound,
  ClipboardList,
  Package,
  MessageSquareText,
  UserCog,
  MessageCircle,
  Gift,
  Smartphone,
  PoundSterling,
  ShieldCheck
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { programsBySlug } from "@/components/programsData";

const checkoutUrl = programsBySlug["startup-launch-growth"].checkoutUrl;

const features = [
  { label: "6 MONTHS", icon: Calendar },
  { label: "10 MODULES", icon: FileText },
  { label: "EXPERT MENTORSHIP", icon: UserRound },
];

const outcomesLeft = [
  { text: "Build a strong brand and identity", icon: Rocket },
  { text: "Create a winning product or service offer", icon: Package },
  { text: "Find and attract your first customers", icon: Users },
  { text: "Communicate and sell with confidence", icon: MessageSquareText },
];

const outcomesRight = [
  { text: "Learn marketing and lead generation", icon: Megaphone },
  { text: "Create SOPs and business systems", icon: ClipboardList },
  { text: "Build customer follow-up systems", icon: UserCog },
  { text: "Launch with a clear action plan", icon: Rocket },
];

const curriculum = [
  {
    title: "BRANDING & POSITIONING",
    icon: Award,
    color: "text-green-600",
    bg: "bg-green-100",
  },
  {
    title: "BUILD YOUR OFFER",
    icon: Gift,
    color: "text-green-600",
    bg: "bg-green-100",
  },
  {
    title: "FINDING YOUR FIRST CUSTOMERS",
    icon: Target,
    color: "text-green-600",
    bg: "bg-green-100",
  },
  {
    title: "SALES & COMMUNICATION",
    icon: MessageCircle,
    color: "text-green-600",
    bg: "bg-green-100",
  },
  {
    title: "MARKETING & LEAD GENERATION",
    icon: Megaphone,
    color: "text-green-600",
    bg: "bg-green-100",
  },
  {
    title: "SOCIAL MEDIA STRATEGY",
    icon: Smartphone,
    color: "text-blue-600",
    bg: "bg-blue-100",
  },
  {
    title: "CUSTOMER FOLLOW-UP SYSTEM",
    icon: Users,
    color: "text-purple-600",
    bg: "bg-purple-100",
  },
  {
    title: "SOPS & BUSINESS SYSTEMS",
    icon: Settings,
    color: "text-blue-600",
    bg: "bg-blue-100",
  },
  {
    title: "LAUNCH PLANNING & EXECUTION",
    icon: Rocket,
    color: "text-orange-600",
    bg: "bg-orange-100",
  },
  {
    title: "BASIC FINANCE & CASH FLOW",
    icon: PoundSterling,
    color: "text-yellow-600",
    bg: "bg-yellow-100",
  },
];

const whatsIncluded = [
  { title: "Live Interactive Sessions", desc: "Engaging live classes with expert guidance", icon: MonitorPlay, color: "text-green-600", bg: "bg-green-100", border: "border-green-200" },
  { title: "SOP & Sales Templates", desc: "Plug-and-play SOPs and sales templates", icon: FileText, color: "text-green-600", bg: "bg-green-100", border: "border-green-200" },
  { title: "Practical Exercises & Activities", desc: "Hands-on activities to help you apply and grow", icon: ClipboardList, color: "text-blue-600", bg: "bg-blue-100", border: "border-blue-200" },
  { title: "Launch Checklists", desc: "Complete checklists to launch with confidence", icon: Rocket, color: "text-blue-600", bg: "bg-blue-100", border: "border-blue-200" },
  { title: "Business Templates & Frameworks", desc: "Ready-to-use resources to save time and get results", icon: BookOpen, color: "text-purple-600", bg: "bg-purple-100", border: "border-purple-200" },
  { title: "Certificate of Completion", desc: "Official certificate to celebrate your achievement", icon: Award, color: "text-purple-600", bg: "bg-purple-100", border: "border-purple-200" },
  { title: "AI Tool Recommendations", desc: "Curated AI tools to help you work smarter", icon: Bot, color: "text-orange-500", bg: "bg-orange-100", border: "border-orange-200" },
  { title: "Community Access", desc: "Join a community of like-minded learners and entrepreneurs", icon: Users, color: "text-orange-500", bg: "bg-orange-100", border: "border-orange-200" },
  { title: "Action Plans & Checklists", desc: "Step-by-step action plans to keep you on track", icon: CheckCircle2, color: "text-green-600", bg: "bg-green-100", border: "border-green-200" },
  { title: "Session Recordings (Lifetime)", desc: "Lifetime access to all session recordings", icon: PlaySquare, color: "text-green-600", bg: "bg-green-100", border: "border-green-200" },
];

const whyLearn = [
  { text: "LEARN FROM ENTREPRENEURS", icon: UserRound },
  { text: "PERSONAL GUIDANCE", icon: CheckCircle2 },
  { text: "PRACTICAL, REAL-WORLD LEARNING", icon: GraduationCap },
  { text: "AI TOOLS & TEMPLATES", icon: Bot },
  { text: "REAL LIFE BUSINESS CASE STUDIES", icon: BookOpen },
  { text: "PRACTICAL ACTION-ORIENTED STEPS", icon: FileText },
];

export default function Program2Page() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <main className="pb-16 font-sans">
        {/* HERO SECTION */}
        <section className="pt-16 pb-32 px-4 relative bg-white overflow-hidden">
          <div className="max-w-[1300px] mx-auto flex flex-col lg:flex-row items-center gap-12 relative z-10">
            <div className="flex-1 lg:max-w-[650px]">
              <div className="inline-flex items-center border border-brand-green rounded-full px-5 py-1.5 mb-8">
                <span className="text-brand-green font-bold text-[13px] tracking-widest uppercase">PROGRAM 02</span>
              </div>
              <h1 className="text-[52px] sm:text-[64px] lg:text-[76px] font-black uppercase leading-[0.95] text-brand-navy mb-5">
                LAUNCH &<br />
                <span className="text-brand-green">SALES PROGRAMME</span>
              </h1>
              
              <div className="flex items-center gap-6 mb-10">
                <div className="h-[2px] bg-brand-green flex-1 max-w-[60px]"></div>
                <p className="text-[24px] sm:text-[28px] font-medium text-brand-navy tracking-wide">
                  Build. Launch. Sell.
                </p>
                <div className="h-[2px] bg-brand-green flex-1 max-w-[60px]"></div>
              </div>
              
              <div className="flex flex-wrap items-start gap-x-12 gap-y-8 mb-10">
                <div className="flex items-start gap-4">
                  <Calendar className="w-9 h-9 text-brand-navy stroke-[1.5]" />
                  <div>
                    <div className="font-black text-brand-navy uppercase tracking-wider text-[13px] mb-1">DURATION</div>
                    <div className="text-gray-600 font-medium text-[15px]">6 Months</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Target className="w-9 h-9 text-brand-green stroke-[1.5]" />
                  <div>
                    <div className="font-black text-brand-navy uppercase tracking-wider text-[13px] mb-1">BEST FOR</div>
                    <div className="text-gray-600 font-medium text-[15px] leading-snug">Those ready to<br />launch or already<br />starting</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MonitorPlay className="w-9 h-9 text-brand-navy stroke-[1.5]" />
                  <div>
                    <div className="font-black text-brand-navy uppercase tracking-wider text-[13px] mb-1">MODE</div>
                    <div className="text-gray-600 font-medium text-[15px] leading-snug">Live Online +<br />Recorded Sessions</div>
                  </div>
                </div>
              </div>

              <p className="text-[17px] text-brand-navy font-medium max-w-xl leading-relaxed mb-10">
                A complete step-by-step programme to help you build your brand, create your offer, attract your first customers and launch your business with confidence.
              </p>
              
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href={checkoutUrl}
                  target="_blank"
                  className="bg-brand-green text-white px-8 py-4 rounded font-black uppercase tracking-wide hover:bg-green-700 transition flex items-center gap-2"
                >
                  ENROLL NOW &rarr;
                </Link>
                <Link
                  href="#"
                  className="border border-gray-300 text-brand-navy bg-white px-6 py-4 rounded font-bold uppercase tracking-wide hover:bg-gray-50 transition flex items-center gap-2 text-[14px]"
                >
                  <CalendarDays className="w-5 h-5 text-gray-500" /> BOOK CONSULTATION
                </Link>
                <Link
                  href="https://forms.gle/RdmkJVkEP4UD1BJs5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-gray-300 text-brand-navy bg-white px-6 py-4 rounded font-bold uppercase tracking-wide hover:bg-gray-50 transition flex items-center gap-2 text-[14px]"
                >
                  <PlaySquare className="w-5 h-5 text-gray-500" /> JOIN FREE WEBINAR
                </Link>
              </div>
            </div>

            <div className="flex-1 relative aspect-[4/3] w-full max-w-[650px] mx-auto mt-12 lg:mt-0">
              <div className="absolute -top-4 -right-2 sm:-top-8 sm:-right-8 w-36 h-36 rounded-full bg-brand-navy border-[6px] border-brand-green flex flex-col items-center justify-center text-center shadow-xl z-20">
                <Rocket className="w-8 h-8 text-white mb-2" />
                <span className="text-white font-black text-[11px] leading-tight uppercase px-2">FROM IDEA<br />TO LAUNCH<br />TO SALES</span>
              </div>
              <Image
                src="/laptop_analytics.png"
                alt="Launch and Sales Analytics"
                fill
                className="object-contain relative z-10 scale-[1.15]"
                priority
              />
            </div>
          </div>
          
          <div className="absolute bottom-[-2px] left-0 w-full overflow-hidden leading-none z-10">
            <svg className="relative block w-[calc(100%+1.3px)] h-[80px] md:h-[140px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.66,130.83,121.03,194.2,107.5Z" className="fill-brand-navy"></path>
            </svg>
          </div>
        </section>

        {/* OUTCOMES SECTION */}
        <section className="py-16 px-4 bg-brand-navy text-white -mt-[2px] relative z-20">
          <h2 className="text-center text-[18px] sm:text-[22px] font-bold text-white mb-12 uppercase tracking-wide">
            BY THE END OF THIS PROGRAMME, YOU WILL:
          </h2>
          <div className="max-w-[1200px] mx-auto flex flex-wrap lg:flex-nowrap justify-between gap-y-10">
            {[...outcomesLeft, ...outcomesRight].map((item, i) => (
              <div key={i} className={`flex flex-col items-center text-center flex-1 min-w-[120px] ${i < 7 ? 'lg:border-r lg:border-white/10' : ''} px-2 lg:px-4`}>
                <item.icon className="w-10 h-10 text-brand-green mb-4 stroke-[1.5]" />
                <span className="text-[13px] font-medium leading-snug max-w-[130px]">{item.text}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CURRICULUM SECTION */}
        <section className="py-20 px-4 bg-gray-50/30">
          <div className="text-center mb-16 flex items-center justify-center gap-6">
            <div className="hidden md:flex gap-1"><div className="w-12 h-[2px] bg-brand-green opacity-50"></div><div className="w-3 h-[2px] bg-brand-green opacity-50"></div></div>
            <h2 className="text-[32px] sm:text-[42px] font-black uppercase text-brand-navy">
              PROGRAMME <span className="text-brand-green">CURRICULUM</span>
            </h2>
            <div className="hidden md:flex gap-1"><div className="w-3 h-[2px] bg-brand-green opacity-50"></div><div className="w-12 h-[2px] bg-brand-green opacity-50"></div></div>
          </div>
          <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-5 gap-6">
            {curriculum.map((item, i) => (
              <div key={i} className="bg-white rounded-[20px] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col items-center text-center relative h-full">
                <div className="absolute top-4 left-4 bg-brand-green text-white font-black text-[12px] px-2 py-0.5 rounded-sm">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className={`w-20 h-20 rounded-full ${item.bg} flex items-center justify-center mb-6 mt-4`}>
                  <item.icon className={`w-10 h-10 ${item.color} stroke-[1.5]`} />
                </div>
                <h3 className="text-[14px] font-black uppercase text-brand-navy leading-snug tracking-wide">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </section>

        {/* LEARNING FORMAT */}
        <section className="py-16 px-4 bg-white">
          <div className="text-center mb-12">
            <h2 className="text-[28px] sm:text-[36px] font-black uppercase text-brand-green">
              LEARNING FORMAT
            </h2>
            <p className="text-gray-600 font-bold tracking-widest uppercase mt-2 text-sm">
              Flexible. Practical. Results-Driven.
            </p>
          </div>
          <div className="max-w-2xl mx-auto flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="border border-green-200 rounded-[20px] p-5 flex items-center gap-4 bg-green-50/30">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="text-[12px] font-black text-green-600 uppercase tracking-wider">DURATION</div>
                  <div className="font-bold text-brand-navy text-[17px]">6 Months</div>
                </div>
              </div>
              <div className="border border-blue-200 rounded-[20px] p-5 flex items-center gap-4 bg-blue-50/30">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <CalendarDays className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="text-[12px] font-black text-blue-600 uppercase tracking-wider">SCHEDULE</div>
                  <div className="font-bold text-brand-navy text-[17px]">2 Sessions per Week</div>
                </div>
              </div>
            </div>
            <div className="border border-yellow-200 rounded-[20px] p-5 flex items-center gap-4 bg-yellow-50/30">
              <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <div className="text-[12px] font-black text-yellow-600 uppercase tracking-wider">SESSION LENGTH</div>
                <div className="font-bold text-brand-navy text-[17px]">2 Hours per Session</div>
              </div>
            </div>
            <div className="border border-purple-200 rounded-[20px] p-5 flex items-center gap-4 bg-purple-50/30">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                <MonitorPlay className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <div className="text-[12px] font-black text-purple-600 uppercase tracking-wider">MODE</div>
                <div className="font-bold text-brand-navy text-[17px]">Live Online + Recorded Sessions</div>
                <div className="text-gray-500 text-[14px] font-medium mt-0.5">So you never miss a lesson.</div>
              </div>
            </div>
            <div className="border border-teal-200 rounded-[20px] p-5 flex items-center gap-4 bg-teal-50/30">
              <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-teal-600" />
              </div>
              <div>
                <div className="text-[12px] font-black text-teal-600 uppercase tracking-wider">LEARNING STYLE</div>
                <div className="font-bold text-brand-navy text-[17px]">Interactive Workshops & Activities</div>
                <div className="text-gray-500 text-[14px] font-medium mt-0.5">Learn by doing. Apply as you learn.</div>
              </div>
            </div>
          </div>
        </section>

        {/* WHATS INCLUDED */}
        <section className="py-20 px-4 bg-white border-t border-gray-100">
          <div className="text-center mb-16 flex flex-col items-center justify-center">
            <div className="flex items-center gap-4 mb-2">
              <div className="hidden sm:flex gap-1"><div className="w-4 h-1 bg-brand-green rounded-full transform -rotate-45"></div><div className="w-2 h-1 bg-brand-green rounded-full transform -rotate-45"></div></div>
              <h2 className="text-[36px] sm:text-[46px] font-black uppercase text-brand-navy">
                WHAT'S <span className="text-brand-green">INCLUDED?</span>
              </h2>
              <div className="hidden sm:flex gap-1"><div className="w-2 h-1 bg-brand-green rounded-full transform -rotate-45"></div><div className="w-4 h-1 bg-brand-green rounded-full transform -rotate-45"></div></div>
            </div>
            <div className="w-24 h-[3px] bg-brand-green mt-2 rounded-full"></div>
          </div>
          
          <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-12 mb-12">
            <div className="flex-1 grid md:grid-cols-2 gap-x-6 gap-y-4">
              {whatsIncluded.map((item, i) => (
                <div key={i} className="bg-white rounded-[16px] p-4 flex items-center gap-4 border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] transition-all hover:shadow-md">
                  <div className={`w-12 h-12 rounded-full ${item.bg} border ${item.border} flex items-center justify-center flex-shrink-0`}>
                    <item.icon className={`w-6 h-6 ${item.color} stroke-[1.5]`} />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-navy text-[14px] leading-tight mb-1">{item.title}</h3>
                    <p className="text-[12px] text-gray-500 font-medium leading-snug pr-2">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full lg:w-[400px] relative aspect-square mx-auto">
              <Image
                src="/launch_kit_box.png"
                alt="Launch Kit"
                fill
                className="object-contain scale-110"
              />
            </div>
          </div>

          <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-6">
            <div className="flex-1 border border-gray-100 rounded-[20px] p-6 flex items-center gap-5 bg-white shadow-sm">
              <div className="w-14 h-14 bg-green-50 rounded-[14px] flex items-center justify-center flex-shrink-0 border border-green-100">
                <ShieldCheck className="w-8 h-8 text-brand-green stroke-[1.5]" />
              </div>
              <p className="text-brand-navy font-bold text-[15px] sm:text-[17px] leading-snug">
                Everything you need to learn, implement and grow your business — <br className="hidden lg:block"/>
                <span className="text-brand-green">all in one programme!</span>
              </p>
            </div>
            <div className="md:w-[400px] border border-gray-100 rounded-[20px] p-6 flex items-center gap-5 bg-white shadow-sm">
              <div className="w-14 h-14 bg-green-50 rounded-[14px] flex items-center justify-center flex-shrink-0 border border-green-100">
                <Trophy className="w-8 h-8 text-brand-green stroke-[1.5]" />
              </div>
              <div className="font-black text-[18px] sm:text-[20px] leading-tight">
                <div className="text-brand-navy">Learn. Implement.</div>
                <div className="text-brand-green">Launch. Succeed.</div>
              </div>
            </div>
          </div>
        </section>

        {/* PRACTICAL ACTIONABLE RESULTS-DRIVEN */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-[28px] sm:text-[36px] font-black uppercase text-brand-navy mb-10 leading-tight">
                PRACTICAL. ACTIONABLE.<br />
                <span className="text-brand-green">RESULTS-DRIVEN.</span>
              </h2>
              <div className="space-y-6">
                <div className="flex gap-5 items-start">
                  <div className="w-14 h-14 rounded-full bg-green-50 border-2 border-green-200 flex items-center justify-center flex-shrink-0 mt-1">
                    <Briefcase className="w-6 h-6 text-brand-green" />
                  </div>
                  <div>
                    <h3 className="font-black text-brand-navy text-[18px] uppercase">REAL-WORLD LEARNING</h3>
                    <p className="text-gray-600 font-medium text-[15px] mt-1">Real UK business case studies and examples.</p>
                  </div>
                </div>
                <div className="flex gap-5 items-start">
                  <div className="w-14 h-14 rounded-full bg-blue-50 border-2 border-blue-200 flex items-center justify-center flex-shrink-0 mt-1">
                    <Wrench className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-black text-brand-navy text-[18px] uppercase">PRACTICAL TOOLS & RESOURCES</h3>
                    <p className="text-gray-600 font-medium text-[15px] mt-1">Templates and frameworks you can use immediately.</p>
                  </div>
                </div>
                <div className="flex gap-5 items-start">
                  <div className="w-14 h-14 rounded-full bg-orange-50 border-2 border-orange-200 flex items-center justify-center flex-shrink-0 mt-1">
                    <Rocket className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-black text-brand-navy text-[18px] uppercase">LAUNCH WITH CONFIDENCE</h3>
                    <p className="text-gray-600 font-medium text-[15px] mt-1">Finish the programme with a clear plan and the confidence to execute it.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 relative aspect-[4/3] w-full max-w-lg mx-auto">
              <Image
                src="/practical_learning.png"
                alt="Practical Learning Desk"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </section>

        {/* INVESTMENT */}
        <section className="py-16 px-4 bg-gray-50/50">
          <div className="text-center mb-12">
            <h2 className="text-[28px] sm:text-[36px] font-black uppercase text-brand-navy">
              INVESTMENT
            </h2>
            <p className="text-gray-500 font-semibold mt-1 uppercase tracking-widest text-sm">Flexible options. Maximum value.</p>
          </div>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-[24px] border border-gray-200 p-8 shadow-sm relative overflow-hidden flex flex-col h-full">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="text-[13px] font-black text-brand-green uppercase bg-green-50 px-3 py-1 rounded-full inline-block mb-3">
                    PAY IN FULL
                  </div>
                  <div className="text-[42px] font-black text-brand-navy leading-none">£600</div>
                  <div className="text-gray-400 font-semibold text-sm mt-1">+ VAT</div>
                </div>
                <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center border-4 border-white shadow-sm">
                  <CheckCircle2 className="w-8 h-8 text-brand-green" />
                </div>
              </div>
              <div className="space-y-4 mb-8 flex-1">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-brand-green mt-0.5" />
                  <span className="text-gray-700 font-medium text-[15px]">Pay once and get access</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-brand-green mt-0.5" />
                  <span className="text-gray-700 font-medium text-[15px]">All features included</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-brand-green mt-0.5" />
                  <span className="text-gray-700 font-medium text-[15px]">Save by paying in full</span>
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
                  <div className="text-[13px] font-black text-blue-600 uppercase bg-blue-50 px-3 py-1 rounded-full inline-block mb-3">
                    MONTHLY PLAN
                  </div>
                  <div className="text-[42px] font-black text-brand-navy leading-none">£100 <span className="text-xl">/ m</span></div>
                  <div className="text-gray-400 font-semibold text-sm mt-1">+ VAT for 6 months</div>
                </div>
                <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center border-4 border-white shadow-sm">
                  <CalendarDays className="w-8 h-8 text-blue-600" />
                </div>
              </div>
              <div className="space-y-4 mb-8 flex-1">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-600 mt-0.5" />
                  <span className="text-gray-700 font-medium text-[15px]">Pay in 6 easy instalments</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-600 mt-0.5" />
                  <span className="text-gray-700 font-medium text-[15px]">All features included</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-600 mt-0.5" />
                  <span className="text-gray-700 font-medium text-[15px]">Automated payments</span>
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

        {/* WHY LEARN FROM US */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-[28px] sm:text-[36px] font-black uppercase text-brand-navy mb-2">
                WHY LEARN<br />
                <span className="text-brand-green">FROM US?</span>
              </h2>
              <p className="text-gray-600 font-bold mb-10 text-lg">We don't just teach theory. <br className="hidden sm:block" />We guide you to <span className="text-brand-green underline decoration-2 underline-offset-4">real results.</span></p>
              
              <div className="grid grid-cols-2 gap-4">
                {whyLearn.map((item, i) => (
                  <div key={i} className="flex flex-col items-center text-center p-4 border border-gray-100 rounded-xl bg-gray-50 hover:bg-gray-100 transition">
                    <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center mb-3">
                      <item.icon className="w-6 h-6 text-brand-green" />
                    </div>
                    <span className="font-bold text-[11px] sm:text-[12px] uppercase text-brand-navy leading-tight">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex-1 w-full max-w-md mx-auto flex flex-col items-center">
              <div className="relative aspect-square w-full">
                <Image
                  src="/launch_rocket.png"
                  alt="Launch Success"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="bg-brand-navy text-white px-8 py-3 rounded-xl font-black text-xl uppercase tracking-wider transform -translate-y-6 shadow-xl border-4 border-white">
                LAUNCH SUCCESS
              </div>
              
              <div className="w-full border border-gray-200 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-center gap-6 bg-white mt-4">
                <div className="flex items-center gap-3">
                  <Target className="w-8 h-8 text-brand-green" />
                  <div className="text-left">
                    <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">OUR GOAL IS</div>
                    <div className="font-black text-brand-navy text-[14px] uppercase">YOUR SUCCESS</div>
                  </div>
                </div>
                <div className="hidden sm:block w-px h-10 bg-gray-200"></div>
                <div className="flex items-center gap-2 text-[12px] font-black text-gray-600 uppercase tracking-wide">
                  <CheckCircle2 className="w-5 h-5 text-brand-green" />
                  LEARN. IMPLEMENT. GROW. SUCCEED.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA FOOTER */}
        <section className="px-4 pb-8">
          <div className="max-w-5xl mx-auto bg-brand-navy rounded-[30px] p-8 sm:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="absolute top-[-50px] right-[-50px] w-64 h-64 bg-[#112660] rounded-full blur-3xl"></div>
            
            <div className="relative z-10 flex flex-col sm:flex-row items-center gap-6 w-full md:w-auto">
              <div className="w-24 h-24 sm:w-32 sm:h-32 relative flex-shrink-0">
                 <Image
                    src="/laptop_analytics.png"
                    alt="Laptop"
                    fill
                    className="object-contain"
                  />
              </div>
              <div className="text-center sm:text-left">
                <h2 className="text-white text-[24px] sm:text-[32px] font-black leading-tight uppercase">
                  YOUR ENTREPRENEURIAL<br />
                  JOURNEY <span className="text-brand-green">STARTS NOW</span>
                </h2>
              </div>
            </div>
            
            <div className="z-10 flex flex-col gap-3 w-full md:w-auto min-w-[240px]">
              <Link
                href={checkoutUrl}
                target="_blank"
                className="bg-brand-green text-white px-8 py-4 rounded-xl font-black uppercase tracking-wide hover:bg-green-700 transition flex items-center justify-center gap-2"
              >
                ENROLL NOW &gt;
              </Link>
              <Link
                href="#"
                className="bg-transparent border border-white/30 text-white px-8 py-4 rounded-xl font-black uppercase tracking-wide hover:bg-white/10 transition flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5" /> BOOK A CONSULTATION
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
