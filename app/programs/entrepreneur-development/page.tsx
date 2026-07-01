import Image from "next/image";
import Link from "next/link";
import {
  Target,
  Users,
  Trophy,
  Settings,
  PoundSterling,
  Globe,
  HandCoins,
  Handshake,
  Building2,
  Briefcase,
  TrendingUp,
  Rocket,
  Calendar,
  CalendarDays,
  Clock,
  MonitorPlay,
  Award,
  Gift,
  FileText,
  ShieldCheck,
  ArrowRight,
  Check
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { programsBySlug } from "@/components/programsData";

const checkoutUrl = programsBySlug["entrepreneur-development"].checkoutUrl;

const curriculum = [
  { title: "BUSINESS STRATEGY & SCALABLE GROWTH PLANNING", icon: Target, color: "text-green-600", bg: "bg-green-100", numBg: "bg-green-600" },
  { title: "ADVANCED SALES, CUSTOMER ACQUISITION & MARKETING", icon: Users, color: "text-blue-600", bg: "bg-blue-100", numBg: "bg-brand-navy" },
  { title: "OPERATIONS, SOPS & BUSINESS SYSTEMS", icon: Settings, color: "text-green-600", bg: "bg-green-100", numBg: "bg-green-600" },
  { title: "FINANCIAL PLANNING & PROFIT OPTIMISATION", icon: PoundSterling, color: "text-blue-600", bg: "bg-blue-100", numBg: "bg-brand-navy" },
  { title: "CUSTOMER EXPERIENCE, RETENTION & UPSELLING", icon: Users, color: "text-green-600", bg: "bg-green-100", numBg: "bg-green-600" },
  { title: "LEADERSHIP, TEAM BUILDING & HIRING", icon: Users, color: "text-blue-600", bg: "bg-blue-100", numBg: "bg-brand-navy" },
  { title: "EXPANSION & SCALING", icon: Globe, color: "text-green-600", bg: "bg-green-100", numBg: "bg-green-600" },
  { title: "FUNDING, INVESTOR READINESS & BUSINESS VALUATION", icon: HandCoins, color: "text-blue-600", bg: "bg-blue-100", numBg: "bg-brand-navy" },
  { title: "EXIT STRATEGIES, MERGERS & ACQUISITIONS", icon: Handshake, color: "text-green-600", bg: "bg-green-100", numBg: "bg-green-600" },
  { title: "CORPORATE GROWTH, IPO ROADMAP & LEGACY BUILDING", icon: Building2, color: "text-blue-600", bg: "bg-blue-100", numBg: "bg-brand-navy" },
];

const whoIsThisFor = [
  { text: "Business owners ready to scale", icon: Briefcase },
  { text: "Founders seeking long-term growth", icon: TrendingUp },
  { text: "Entrepreneurs aiming for higher profits", icon: Target },
  { text: "Leaders building a sustainable and sellable business", icon: Users },
  { text: "Visionaries with goals to expand, attract investment or go global", icon: Globe },
];

export default function Program3Page() {
  return (
    <div className="bg-white min-h-screen font-sans">
      <Navbar />
      <main className="pb-16 pt-[80px]">
        
        {/* HERO SECTION */}
        <section className="bg-prog3-pattern overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center gap-12 max-w-[1300px] mx-auto pt-12 pb-16 px-4 relative z-10">
            <div className="flex-1 lg:max-w-[650px]">
              <div className="inline-flex items-center rounded-full mb-6 border border-gray-200 bg-gray-50 p-1 shadow-sm">
                <span className="bg-brand-navy text-white font-black text-[19px] px-3 py-1 rounded-full uppercase">03</span>
                <span className="text-brand-green font-black text-[15px] px-3 uppercase tracking-wider">PROGRAM 3</span>
              </div>
              
              <div className="mb-6">
                <h1 className="text-[52px] sm:text-[68px] lg:text-[76px] font-black uppercase leading-[0.9] text-brand-navy">
                  BUSINESS<br />
                  <span className="text-brand-green">GROWTH</span>
                </h1>
                <div className="flex items-center gap-4 mt-2">
                  <div className="h-[2px] bg-brand-green flex-1 max-w-[40px]"></div>
                  <div className="text-[28px] sm:text-[36px] font-black uppercase tracking-widest text-brand-navy leading-none">
                    PROGRAM
                  </div>
                  <div className="h-[2px] bg-brand-green flex-1 max-w-[40px]"></div>
                </div>
              </div>
              
              <div className="bg-brand-navy rounded-sm px-4 py-2 mb-8 inline-block shadow-md">
                <span className="text-[20px] sm:text-[20px] font-black uppercase tracking-wider text-white">
                  12 MONTHS TO <span className="text-brand-green">SCALE. GROW. SUCCEED.</span>
                </span>
              </div>

              <p className="text-[19px] text-gray-700 font-medium max-w-lg leading-relaxed mb-10">
                <span className="font-bold text-brand-navy">A practical, results-driven program</span> for serious founders who want long-term support, <span className="text-brand-green font-bold">exponential growth</span> and lasting impact.
              </p>
              
              <div className="flex flex-wrap items-start gap-x-10 gap-y-6 pt-6 border-t border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full border border-green-200 flex items-center justify-center bg-white shadow-sm">
                    <Target className="w-6 h-6 text-brand-green stroke-[1.5]" />
                  </div>
                  <div className="font-black text-[15px] uppercase leading-tight text-brand-navy max-w-[100px]">
                    PRACTICAL STRATEGIES
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full border border-green-200 flex items-center justify-center bg-white shadow-sm">
                    <Users className="w-6 h-6 text-brand-green stroke-[1.5]" />
                  </div>
                  <div className="font-black text-[15px] uppercase leading-tight text-brand-navy max-w-[100px]">
                    EXPERT MENTORSHIP
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full border border-green-200 flex items-center justify-center bg-white shadow-sm">
                    <Trophy className="w-6 h-6 text-brand-green stroke-[1.5]" />
                  </div>
                  <div className="font-black text-[15px] uppercase leading-tight text-brand-navy max-w-[100px]">
                    SCALE WITH CONFIDENCE
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex-1 relative aspect-[4/3] w-full max-w-[650px] mx-auto mt-12 lg:mt-0">
               <Image
                 src="/rocket_growth.png"
                 alt="Business Growth Rocket"
                 fill
                 className="object-contain relative z-10 scale-[1.15]"
                 priority
               />
            </div>
          </div>
        </section>

        {/* CURRICULUM */}
        <section className="py-20 px-4 bg-white-pattern border-t border-gray-100">
          <div className="text-center mb-16 flex items-center justify-center gap-6">
            <div className="hidden md:flex gap-1"><div className="w-12 h-[2px] bg-brand-green opacity-50"></div><div className="w-3 h-[2px] bg-brand-green opacity-50"></div></div>
            <h2 className="text-[28px] sm:text-[36px] font-black uppercase text-brand-navy tracking-wide">
              10 POWERFUL <span className="text-brand-green">MODULES</span>
            </h2>
            <div className="hidden md:flex gap-1"><div className="w-3 h-[2px] bg-brand-green opacity-50"></div><div className="w-12 h-[2px] bg-brand-green opacity-50"></div></div>
          </div>
          <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-5 gap-6">
            {curriculum.map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-[0_4px_20px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col items-center text-center relative h-full transition-transform hover:-translate-y-1">
                <div className={`absolute top-0 left-4 ${item.numBg} text-white font-black text-[15px] px-3 py-1 rounded-b-md`}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 mt-4">
                  <item.icon className={`w-10 h-10 ${item.color} stroke-[1.5]`} />
                </div>
                <h3 className="text-[15px] font-black uppercase text-brand-navy leading-snug tracking-wider">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </section>

        {/* WHO IS THIS PROGRAM FOR */}
        <section className="py-20 px-4 bg-grid-pattern/50 overflow-hidden">
          <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-16 items-center">
            
            <div className="w-full lg:w-[450px]">
              <div className="bg-brand-navy rounded-[24px] overflow-hidden shadow-xl">
                <div className="bg-brand-navy p-6 border-b border-white/10 flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-green rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-[22px] font-black text-white uppercase leading-tight">
                    WHO IS THIS<br />PROGRAM <span className="text-brand-green">FOR?</span>
                  </h2>
                </div>
                <div className="bg-white px-6 py-2">
                  {whoIsThisFor.map((item, i) => (
                    <div key={i} className="flex items-center gap-4 py-5 border-b border-gray-100 last:border-0">
                      <div className={`w-12 h-12 rounded-full ${i % 2 === 0 ? 'bg-brand-green' : 'bg-[#15357e]'} flex items-center justify-center flex-shrink-0 shadow-md`}>
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="font-bold text-brand-navy text-[19px] leading-snug">
                        {item.text}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex-1 w-full">
              <div className="text-center mb-10 flex items-center justify-center gap-6">
                 <div className="hidden md:flex gap-1"><div className="w-12 h-[2px] bg-brand-green opacity-50"></div></div>
                 <h2 className="text-[24px] sm:text-[28px] font-black uppercase text-brand-navy">
                   YOUR <span className="text-brand-green">12-MONTH</span> LEARNING JOURNEY
                 </h2>
                 <div className="hidden md:flex gap-1"><div className="w-12 h-[2px] bg-brand-green opacity-50"></div></div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                
                {/* Q1 */}
                <div className="bg-green-50 border border-green-200 rounded-xl overflow-hidden shadow-sm flex flex-col">
                  <div className="bg-brand-green text-white text-center py-2 font-black text-[15px] uppercase tracking-wider relative">
                    QUARTER 1
                    <div className="absolute right-[-10px] top-0 bottom-0 w-6 bg-brand-green transform skew-x-12 hidden lg:block z-10"></div>
                  </div>
                  <div className="p-4 flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-green-200">
                         <Rocket className="w-5 h-5 text-brand-green" />
                      </div>
                      <h3 className="font-black text-brand-green text-[19px] uppercase leading-tight">BUILD STRONG FOUNDATIONS</h3>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex gap-2 items-start"><span className="text-brand-green font-black text-[13px] mt-0.5">01</span><span className="text-[13px] font-black uppercase text-brand-navy leading-tight">BUSINESS STRATEGY & GROWTH PLANNING</span></li>
                      <li className="flex gap-2 items-start"><span className="text-brand-green font-black text-[13px] mt-0.5">02</span><span className="text-[13px] font-black uppercase text-brand-navy leading-tight">ADVANCED SALES, ACQUISITION & MARKETING</span></li>
                      <li className="flex gap-2 items-start"><span className="text-brand-green font-black text-[13px] mt-0.5">03</span><span className="text-[13px] font-black uppercase text-brand-navy leading-tight">OPERATIONS, SOPS & BUSINESS SYSTEMS</span></li>
                    </ul>
                  </div>
                </div>

                {/* Q2 */}
                <div className="bg-blue-50 border border-blue-200 rounded-xl overflow-hidden shadow-sm flex flex-col">
                  <div className="bg-blue-600 text-white text-center py-2 font-black text-[15px] uppercase tracking-wider relative">
                    QUARTER 2
                    <div className="absolute right-[-10px] top-0 bottom-0 w-6 bg-blue-600 transform skew-x-12 hidden lg:block z-10"></div>
                  </div>
                  <div className="p-4 flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-blue-200">
                         <TrendingUp className="w-5 h-5 text-blue-600" />
                      </div>
                      <h3 className="font-black text-blue-600 text-[19px] uppercase leading-tight">OPTIMISE PERFORMANCE</h3>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex gap-2 items-start"><span className="text-blue-600 font-black text-[13px] mt-0.5">04</span><span className="text-[13px] font-black uppercase text-brand-navy leading-tight">FINANCIAL PLANNING & PROFIT OPTIMISATION</span></li>
                      <li className="flex gap-2 items-start"><span className="text-blue-600 font-black text-[13px] mt-0.5">05</span><span className="text-[13px] font-black uppercase text-brand-navy leading-tight">CUSTOMER EXPERIENCE, RETENTION & UPSELLING</span></li>
                      <li className="flex gap-2 items-start"><span className="text-blue-600 font-black text-[13px] mt-0.5">06</span><span className="text-[13px] font-black uppercase text-brand-navy leading-tight">LEADERSHIP, TEAM BUILDING & HIRING</span></li>
                    </ul>
                  </div>
                </div>

                {/* Q3 */}
                <div className="bg-green-50 border border-green-200 rounded-xl overflow-hidden shadow-sm flex flex-col">
                  <div className="bg-brand-green text-white text-center py-2 font-black text-[15px] uppercase tracking-wider relative">
                    QUARTER 3
                    <div className="absolute right-[-10px] top-0 bottom-0 w-6 bg-brand-green transform skew-x-12 hidden lg:block z-10"></div>
                  </div>
                  <div className="p-4 flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-green-200">
                         <Globe className="w-5 h-5 text-brand-green" />
                      </div>
                      <h3 className="font-black text-brand-green text-[19px] uppercase leading-tight">SCALE THE BUSINESS</h3>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex gap-2 items-start"><span className="text-brand-green font-black text-[13px] mt-0.5">07</span><span className="text-[13px] font-black uppercase text-brand-navy leading-tight">EXPANSION & SCALING</span></li>
                      <li className="flex gap-2 items-start"><span className="text-brand-green font-black text-[13px] mt-0.5">08</span><span className="text-[13px] font-black uppercase text-brand-navy leading-tight">FUNDING, INVESTOR READINESS & BUSINESS VALUATION</span></li>
                    </ul>
                  </div>
                </div>

                {/* Q4 */}
                <div className="bg-purple-50 border border-purple-200 rounded-xl overflow-hidden shadow-sm flex flex-col">
                  <div className="bg-purple-600 text-white text-center py-2 font-black text-[15px] uppercase tracking-wider">
                    QUARTER 4
                  </div>
                  <div className="p-4 flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-purple-200">
                         <Trophy className="w-5 h-5 text-purple-600" />
                      </div>
                      <h3 className="font-black text-purple-600 text-[19px] uppercase leading-tight">BUILD ENTERPRISE VALUE</h3>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex gap-2 items-start"><span className="text-purple-600 font-black text-[13px] mt-0.5">09</span><span className="text-[13px] font-black uppercase text-brand-navy leading-tight">EXIT STRATEGIES, MERGERS & ACQUISITIONS</span></li>
                      <li className="flex gap-2 items-start"><span className="text-purple-600 font-black text-[13px] mt-0.5">10</span><span className="text-[13px] font-black uppercase text-brand-navy leading-tight">CORPORATE GROWTH, IPO ROADMAP & LEGACY BUILDING</span></li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* LEARNING FORMAT */}
        <section className="py-20 px-4 bg-white-pattern">
          <div className="text-center mb-12">
            <h2 className="text-[32px] sm:text-[40px] font-black uppercase text-brand-navy">
              LEARNING <span className="text-brand-green">FORMAT</span>
            </h2>
            <div className="flex items-center justify-center gap-4 mt-2">
               <div className="w-12 h-px bg-brand-green"></div>
               <p className="text-gray-600 font-bold tracking-widest text-[19px]">
                 Flexible. Practical. Results-Driven.
               </p>
               <div className="w-12 h-px bg-brand-green"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-4 max-w-xl mx-auto">
            <div className="border border-green-100 bg-white rounded-[16px] p-5 flex items-center gap-6 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:-translate-y-1 transition-transform">
              <div className="w-14 h-14 rounded-full border border-green-100 flex items-center justify-center flex-shrink-0 bg-green-50">
                <Calendar className="w-7 h-7 text-green-600 stroke-[1.5]" />
              </div>
              <div>
                <div className="text-[19px] font-black text-green-600 uppercase tracking-widest mb-1">DURATION</div>
                <div className="font-bold text-brand-navy text-[19px]">3 Months</div>
              </div>
            </div>
            
            <div className="border border-blue-100 bg-white rounded-[16px] p-5 flex items-center gap-6 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:-translate-y-1 transition-transform">
              <div className="w-14 h-14 rounded-full border border-blue-100 flex items-center justify-center flex-shrink-0 bg-blue-50">
                <CalendarDays className="w-7 h-7 text-blue-600 stroke-[1.5]" />
              </div>
              <div>
                <div className="text-[19px] font-black text-blue-600 uppercase tracking-widest mb-1">SCHEDULE</div>
                <div className="font-bold text-brand-navy text-[19px]">2 Sessions per Week</div>
              </div>
            </div>
            
            <div className="border border-yellow-100 bg-white rounded-[16px] p-5 flex items-center gap-6 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:-translate-y-1 transition-transform">
              <div className="w-14 h-14 rounded-full border border-yellow-100 flex items-center justify-center flex-shrink-0 bg-yellow-50">
                <Clock className="w-7 h-7 text-yellow-500 stroke-[1.5]" />
              </div>
              <div>
                <div className="text-[19px] font-black text-yellow-500 uppercase tracking-widest mb-1">SESSION LENGTH</div>
                <div className="font-bold text-brand-navy text-[19px]">2 Hours per Session</div>
              </div>
            </div>
            
            <div className="border border-purple-100 bg-white rounded-[16px] p-5 flex items-center gap-6 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:-translate-y-1 transition-transform">
              <div className="w-14 h-14 rounded-full border border-purple-100 flex items-center justify-center flex-shrink-0 bg-purple-50">
                <MonitorPlay className="w-7 h-7 text-purple-600 stroke-[1.5]" />
              </div>
              <div>
                <div className="text-[19px] font-black text-purple-600 uppercase tracking-widest mb-1">MODE</div>
                <div className="font-bold text-brand-navy text-[19px]">Live Online + Recorded Sessions</div>
                <div className="text-gray-500 text-[19px] font-medium mt-1">So you never miss a lesson.</div>
              </div>
            </div>
            
            <div className="border border-teal-100 bg-white rounded-[16px] p-5 flex items-center gap-6 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:-translate-y-1 transition-transform">
              <div className="w-14 h-14 rounded-full border border-teal-100 flex items-center justify-center flex-shrink-0 bg-teal-50">
                <Users className="w-7 h-7 text-teal-600 stroke-[1.5]" />
              </div>
              <div>
                <div className="text-[19px] font-black text-teal-600 uppercase tracking-widest mb-1">LEARNING STYLE</div>
                <div className="font-bold text-brand-navy text-[19px]">Interactive Workshops & Activities</div>
                <div className="text-gray-500 text-[19px] font-medium mt-1">Learn by doing. Apply in real life.</div>
              </div>
            </div>
          </div>
        </section>

        {/* INVESTMENT */}
        <section className="py-20 px-4 bg-grid-pattern/50">
          <div className="text-center mb-16 flex items-center justify-center gap-6">
            <div className="hidden md:flex gap-1"><div className="w-12 h-px bg-brand-green"></div></div>
            <h2 className="text-[32px] sm:text-[40px] font-black uppercase text-brand-navy">
              INVESTMENT
            </h2>
            <div className="hidden md:flex gap-1"><div className="w-12 h-px bg-brand-green"></div></div>
          </div>
          <div className="text-center -mt-12 mb-12">
             <p className="text-gray-600 font-bold tracking-wider text-[20px]">
               <Check className="w-4 h-4 text-brand-green inline mr-1 -mt-1"/> Flexible options. <span className="text-brand-green">Maximum value.</span>
             </p>
          </div>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 relative">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center font-bold text-[15px] text-gray-500 z-10 hidden md:flex border border-gray-200 shadow-sm">
               OR
            </div>
            
            {/* ONE-TIME PAYMENT */}
            <div className="bg-white rounded-[32px] border-2 border-green-600 p-8 shadow-sm relative overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow">
              <div className="absolute top-6 left-6 w-14 h-14 rounded-[16px] bg-brand-green flex items-center justify-center z-10 shadow-sm">
                <Award className="w-7 h-7 text-white stroke-[1.5]" />
              </div>
              <div className="text-center mb-8 pt-8">
                <div className="text-[19px] font-black text-white bg-brand-green px-5 py-2 rounded-full inline-block mb-4 uppercase tracking-widest shadow-sm">
                  ONE-TIME PAYMENT
                </div>
                <div className="text-[56px] font-black text-brand-navy leading-none">£1200</div>
                <div className="text-gray-400 font-bold text-[20px] mt-2 uppercase tracking-wide">+ VAT</div>
              </div>
              <div className="bg-green-50 border border-green-100 text-center py-3 rounded-[12px] mb-8 flex items-center justify-center gap-2">
                 <Calendar className="w-4 h-4 text-green-700 stroke-[2]" />
                 <span className="font-bold text-[19px] text-green-800 tracking-wide">DURATION: 12 MONTHS COURSE</span>
              </div>
              <div className="space-y-5 mb-10 flex-1 pl-4">
                <div className="flex items-center gap-4">
                  <Users className="w-5 h-5 text-brand-green stroke-[2]" />
                  <span className="text-brand-navy font-bold text-[20px] uppercase tracking-wide">FULL PROGRAMME ACCESS</span>
                </div>
                <div className="flex items-center gap-4">
                  <Gift className="w-5 h-5 text-brand-green stroke-[2]" />
                  <span className="text-brand-navy font-bold text-[20px] uppercase tracking-wide">ALL BONUSES INCLUDED</span>
                </div>
                <div className="flex items-center gap-4">
                  <FileText className="w-5 h-5 text-brand-green stroke-[2]" />
                  <span className="text-brand-navy font-bold text-[20px] uppercase tracking-wide">CERTIFICATE OF COMPLETION</span>
                </div>
              </div>
              <Link href={checkoutUrl} target="_blank" className="w-full bg-brand-green text-white py-4 rounded-full font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-green-700 transition">
                ENROLL NOW &rarr;
              </Link>
              <div className="text-center mt-5">
                 <div className="text-[11px] font-black text-white bg-green-800 px-4 py-1.5 rounded-full inline-block uppercase tracking-widest">
                   ★ ONE-TIME PAYMENT - BEST VALUE
                 </div>
              </div>
            </div>

            {/* MONTHLY PLAN */}
            <div className="bg-white rounded-[32px] border-2 border-blue-600 p-8 shadow-sm relative overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow">
              <div className="absolute top-6 left-6 w-14 h-14 rounded-[16px] bg-blue-600 flex items-center justify-center z-10 shadow-sm">
                <CalendarDays className="w-7 h-7 text-white stroke-[1.5]" />
              </div>
              <div className="text-center mb-8 pt-8">
                <div className="text-[19px] font-black text-white bg-blue-600 px-5 py-2 rounded-full inline-block mb-4 uppercase tracking-widest shadow-sm">
                  MONTHLY PLAN
                </div>
                <div className="text-[56px] font-black text-brand-navy leading-none">£100</div>
                <div className="text-gray-400 font-bold text-[20px] mt-2 uppercase tracking-wide">+ VAT / MONTH</div>
              </div>
              <div className="bg-blue-50 border border-blue-100 text-center py-3 rounded-[12px] mb-8 flex items-center justify-center gap-2">
                 <Calendar className="w-4 h-4 text-blue-700 stroke-[2]" />
                 <span className="font-bold text-[19px] text-blue-800 tracking-wide">DURATION: 12 MONTHS COURSE</span>
              </div>
              <div className="space-y-5 mb-10 flex-1 pl-4">
                <div className="flex items-center gap-4">
                  <Clock className="w-5 h-5 text-blue-600 stroke-[2]" />
                  <span className="text-brand-navy font-bold text-[20px] uppercase tracking-wide">PAY IN EASY MONTHLY INSTALMENTS</span>
                </div>
                <div className="flex items-center gap-4">
                  <Gift className="w-5 h-5 text-blue-600 stroke-[2]" />
                  <span className="text-brand-navy font-bold text-[20px] uppercase tracking-wide">ALL BONUSES INCLUDED</span>
                </div>
                <div className="flex items-center gap-4">
                  <FileText className="w-5 h-5 text-blue-600 stroke-[2]" />
                  <span className="text-brand-navy font-bold text-[20px] uppercase tracking-wide">CERTIFICATE OF COMPLETION</span>
                </div>
              </div>
              <Link href={checkoutUrl} target="_blank" className="w-full bg-blue-600 text-white py-4 rounded-full font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-blue-700 transition">
                ENROLL NOW &rarr;
              </Link>
              <div className="text-center mt-5">
                 <div className="text-[11px] font-black text-white bg-blue-800 px-4 py-1.5 rounded-full inline-block uppercase tracking-widest">
                   ★ FLEXIBLE - AFFORDABLE - CONVENIENT
                 </div>
              </div>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto mt-16">
            <div className="bg-brand-navy rounded-xl p-4 flex flex-col md:flex-row items-center justify-between gap-6 border-b-[6px] border-brand-green shadow-xl">
              <div className="flex items-center gap-6 w-full justify-between lg:justify-start px-2">
                 <div className="flex items-center gap-4">
                   <div className="w-12 h-12 rounded-full border-2 border-brand-green flex items-center justify-center">
                     <Target className="w-6 h-6 text-brand-green" />
                   </div>
                   <div className="leading-tight">
                      <div className="text-[11px] text-gray-400 uppercase tracking-widest font-bold mb-0.5">OUR GOAL IS</div>
                      <div className="text-[20px] text-brand-green uppercase tracking-wide font-black">YOUR SUCCESS</div>
                   </div>
                 </div>
                 <div className="h-12 w-px bg-white/20 hidden md:block"></div>
                 <div className="hidden md:flex items-center gap-8 text-[11px] font-bold text-white uppercase tracking-wider text-center">
                    <div className="flex flex-col items-center"><TrendingUp className="w-5 h-5 text-brand-green mb-1.5"/> MULTIPLY<br/>YOUR GROWTH</div>
                    <div className="flex flex-col items-center"><ShieldCheck className="w-5 h-5 text-brand-green mb-1.5"/> BUILD A VALUABLE<br/>BUSINESS</div>
                    <div className="flex flex-col items-center"><Trophy className="w-5 h-5 text-brand-green mb-1.5"/> ACHIEVE LONG-TERM<br/>SUCCESS</div>
                 </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mt-8 px-4">
               <div className="flex items-center gap-4">
                  <div className="w-7 h-7 rounded-full bg-brand-green flex items-center justify-center flex-shrink-0">
                    <ArrowRight className="w-4 h-4 text-white stroke-[3]" />
                  </div>
                  <div className="font-black text-[19px] sm:text-[19px] uppercase text-brand-navy leading-snug tracking-wide">
                    THINK BIG. SCALE SMART.<br className="hidden sm:block"/>
                    <span className="text-brand-green">BUILD A BUSINESS THAT LASTS.</span>
                  </div>
               </div>
               <Link href={checkoutUrl} target="_blank" className="bg-brand-green text-white px-8 py-3 rounded font-black uppercase text-base tracking-widest hover:bg-green-700 transition flex items-center gap-2 flex-shrink-0">
                  ENROLL NOW &rarr;
               </Link>
            </div>
          </div>
          
        </section>

      </main>
      <Footer />
    </div>
  );
}
