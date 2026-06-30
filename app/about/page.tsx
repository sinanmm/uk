import Image from "next/image";
import Link from "next/link";
import {
  Rocket, Target, Users, BookOpen, Lightbulb, Map, TrendingUp, ShieldCheck,
  CheckCircle2, AlertTriangle, Crosshair, Award, MapPin, Compass, Briefcase,
  Layers, Check, Zap, PlaySquare, Calendar, Clock, MonitorPlay, ArrowRight, Star, FileText, CalendarDays, Settings, Gift
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About Us | Pure Startup Academy",
  description: "Pure Startup Academy is a practical entrepreneurship education platform designed to help future founders understand business and avoid costly mistakes.",
};

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen font-sans">
      <Navbar />
      <main className="pb-0 pt-[96px]">
        
        {/* HERO SECTION */}
        <section className="relative overflow-hidden bg-white pb-20 pt-12">
          <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-50 via-white to-white opacity-70"></div>
          <div className="max-w-[1200px] mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-soft text-brand-green font-bold text-sm mb-6 border border-brand-green/20">
                <Target size={16} />
                <span>ABOUT PURE STARTUP ACADEMY</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-brand-navy leading-tight mb-4 uppercase">
                Helping Future Founders <span className="text-brand-green">Start Smart</span>
              </h1>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-700 mb-6 uppercase tracking-wide">
                From Idea to First Customer
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
                Pure Startup Academy is a practical entrepreneurship education platform designed to help students, graduates, aspiring entrepreneurs, working professionals, side hustlers, and future founders understand business, avoid costly mistakes, validate ideas, and take confident steps towards launching and growing a business.
              </p>

              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 text-left mb-10 shadow-sm max-w-2xl mx-auto lg:mx-0">
                <p className="font-black text-brand-navy mb-4 text-sm uppercase tracking-wide">The academy exists for people who have ever thought:</p>
                <ul className="space-y-3">
                  <li className="flex gap-3 text-gray-700 font-medium"><CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0" /> I want to start a business but I don't know where to begin.</li>
                  <li className="flex gap-3 text-gray-700 font-medium"><CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0" /> I have an idea but I'm not sure if it will work.</li>
                  <li className="flex gap-3 text-gray-700 font-medium"><CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0" /> I want more freedom, income, purpose, and growth.</li>
                  <li className="flex gap-3 text-gray-700 font-medium"><CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0" /> I want to build something meaningful.</li>
                  <li className="flex gap-3 text-gray-700 font-medium"><CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0" /> I need practical guidance before investing time and money.</li>
                </ul>
              </div>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <Link href="/#programmes" className="bg-brand-green text-white px-8 py-3 rounded-full font-black uppercase tracking-wide hover:bg-green-700 transition flex items-center gap-2">
                  Explore Programs <ArrowRight size={18} />
                </Link>
                <Link href="#" className="bg-brand-navy text-white px-8 py-3 rounded-full font-black uppercase tracking-wide hover:bg-[#1a2f6c] transition flex items-center gap-2">
                  Join Free Webinar
                </Link>
                <Link href="/#contact" className="bg-white text-brand-navy border-2 border-brand-navy px-8 py-3 rounded-full font-black uppercase tracking-wide hover:bg-gray-50 transition">
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="flex-1 w-full relative max-w-lg mx-auto lg:max-w-none">
              <div className="aspect-square relative">
                <Image src="/about_hero.png" alt="Startup Innovation" fill className="object-contain drop-shadow-xl hover:-translate-y-2 transition-transform duration-500 scale-[1.1]" priority />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 1: WHO WE ARE */}
        <section className="py-20 bg-gray-50/50">
          <div className="max-w-[1200px] mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
              <div className="flex items-center gap-4 mb-4">
                <div className="hidden sm:flex gap-1"><div className="w-4 h-1 bg-brand-green rounded-full transform -rotate-45"></div><div className="w-2 h-1 bg-brand-green rounded-full transform -rotate-45"></div></div>
                <h2 className="text-3xl md:text-4xl font-black text-brand-navy uppercase">Who We Are</h2>
                <div className="hidden sm:flex gap-1"><div className="w-2 h-1 bg-brand-green rounded-full transform -rotate-45"></div><div className="w-4 h-1 bg-brand-green rounded-full transform -rotate-45"></div></div>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed font-medium">
                Pure Startup Academy is built to bridge the gap between education and entrepreneurship. Most people receive training before starting a job, but very few receive practical training before starting a business. Yet the risks and responsibilities of business are often far greater.
                <br/><br/>
                Pure Startup Academy helps aspiring entrepreneurs gain the knowledge, guidance, tools, structure, and confidence they need before taking the leap into business.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Practical entrepreneurship education", icon: BookOpen },
                { title: "Startup guidance and mentorship", icon: Users },
                { title: "Business idea validation", icon: Lightbulb },
                { title: "Market research and planning", icon: Map },
                { title: "Sales and marketing fundamentals", icon: Target },
                { title: "Confidence-building for future founders", icon: ShieldCheck }
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition">
                  <div className="bg-green-50 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 border border-green-100">
                    <item.icon className="w-6 h-6 text-brand-green stroke-[1.5]" />
                  </div>
                  <h3 className="font-bold text-brand-navy leading-tight">{item.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 2: THE PROBLEM WE SOLVE */}
        <section className="py-20 bg-white">
          <div className="max-w-[1200px] mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-16 items-start">
              <div className="lg:w-1/3 lg:sticky lg:top-32">
                <div className="flex items-center gap-3 mb-6">
                  <AlertTriangle className="w-8 h-8 text-brand-navy" />
                  <h2 className="text-3xl md:text-4xl font-black text-brand-navy uppercase">The Problem We Solve</h2>
                </div>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed font-medium">
                  Many people want to start businesses but lack knowledge, guidance, confidence, and a clear roadmap. Some start by focusing on logos, websites, business cards, or social media pages before understanding customers, market demand, cash flow, sales, systems, and validation.
                </p>
                <div className="bg-green-50 border border-brand-green/20 p-6 rounded-2xl border-l-4 border-l-brand-green shadow-sm">
                  <p className="font-black text-brand-green text-sm uppercase tracking-wider mb-2">Our Solution</p>
                  <p className="text-brand-navy font-bold leading-relaxed">Pure Startup Academy helps future founders avoid common startup mistakes by learning the right steps before investing heavily.</p>
                </div>
              </div>
              <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6">
                {[
                  { title: "1. Lack of Direction", desc: "Many aspiring entrepreneurs have ideas but do not know where to begin.", icon: Compass },
                  { title: "2. Fear of Failure", desc: "Many people hesitate because they are worried about making costly mistakes.", icon: AlertTriangle },
                  { title: "3. No Practical Roadmap", desc: "Most education systems prepare people for employment, but not for entrepreneurship.", icon: MapPin },
                  { title: "4. Weak Business Knowledge", desc: "Founders often struggle with sales, marketing, finance, customer research, leadership, and operations.", icon: BookOpen },
                  { title: "5. Poor Validation", desc: "Many businesses fail because they build products or services customers do not want.", icon: Lightbulb },
                  { title: "6. No Mentorship", desc: "Many entrepreneurs try to build businesses alone without guidance, feedback, or accountability.", icon: Users }
                ].map((item, i) => (
                  <div key={i} className="bg-gray-50 border border-gray-100 p-6 rounded-2xl hover:bg-white hover:shadow-lg transition duration-300">
                    <item.icon className="w-8 h-8 text-brand-navy mb-4 opacity-70 stroke-[1.5]" />
                    <h3 className="text-lg font-black text-brand-navy mb-2 uppercase">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed font-medium">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3 & 4: MISSION AND VISION */}
        <section className="py-24 bg-brand-navy text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-green blur-[200px] opacity-20 rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600 blur-[200px] opacity-20 rounded-full"></div>
          
          <div className="max-w-[1200px] mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-16">
            <div className="flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-8 h-8 text-brand-green" />
                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-widest text-white">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed font-medium">
                Our mission is not just to teach entrepreneurship, but to help future founders:
              </p>
              <ul className="grid grid-cols-2 gap-y-4 gap-x-2 mb-10">
                {["Start smarter", "Avoid costly mistakes", "Build confidence", "Take action", "Validate business ideas", "Create practical business plans", "Find their first customers", "Build sustainable businesses"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-200">
                    <Check className="w-5 h-5 text-brand-green flex-shrink-0" /> <span className="text-[13px] font-bold uppercase tracking-wide leading-tight mt-0.5">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm shadow-xl mt-auto relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-brand-green"></div>
                <p className="font-bold text-white text-[17px] leading-relaxed relative z-10">
                  "Helping aspiring entrepreneurs understand entrepreneurship, validate ideas, build confidence, and move from idea to first customer with practical guidance."
                </p>
                <div className="absolute -right-6 -bottom-6 opacity-10 transform rotate-12 group-hover:rotate-0 transition duration-500">
                  <Target className="w-32 h-32 text-brand-green" />
                </div>
              </div>
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <Lightbulb className="w-8 h-8 text-brand-green" />
                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-widest text-white">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-300 mb-10 leading-relaxed font-medium">
                Our vision is to become a leading entrepreneurship education platform that helps thousands of future founders launch successful, practical, and sustainable businesses.
              </p>
              <p className="text-md text-white font-black uppercase tracking-wider mb-6">
                We aim to support people at different stages of their entrepreneurial journey:
              </p>
              <div className="space-y-4">
                {[
                  "Thinking about starting a business",
                  "Ready to launch a business",
                  "Looking to grow an existing business",
                  "Wanting to become stronger business leaders"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 bg-white/5 border border-white/10 p-5 rounded-xl hover:bg-white/10 transition">
                    <div className="w-10 h-10 rounded-full bg-brand-green/20 flex items-center justify-center flex-shrink-0 border border-brand-green/30">
                      <span className="text-brand-green font-black">{i+1}</span>
                    </div>
                    <span className="font-bold uppercase tracking-wide text-[13px]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: WHAT WE BELIEVE */}
        <section className="py-20 bg-gray-50/50">
          <div className="max-w-[1200px] mx-auto px-4">
            <div className="text-center mb-16 flex flex-col items-center">
              <h2 className="text-3xl md:text-4xl font-black text-brand-navy uppercase mb-4">What We Believe</h2>
              <div className="w-16 h-[3px] bg-brand-green rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Problems Create Opportunities", desc: "The best businesses do not begin with products. They begin with problems. The bigger the problem you solve, the bigger the opportunity you create.", icon: Zap },
                { title: "Research Is Cheaper Than Failure", desc: "Before investing money, entrepreneurs should research customers, competitors, demand, feasibility, and return on investment.", icon: Map },
                { title: "Customers Come Before Perfection", desc: "Your first customer is more important than your logo, website, office, or business card. Business begins when someone is willing to pay for the value you create.", icon: Users },
                { title: "Focus Creates Growth", desc: "Many entrepreneurs fail because they chase too many ideas. Growth comes from focus, consistency, and execution.", icon: Target },
                { title: "Systems Create Freedom", desc: "The goal is not to build another job. The goal is to build a business that can grow through systems, people, processes, and leadership.", icon: Settings },
                { title: "Skills Can Be Learned", desc: "Entrepreneurship is not only talent. Sales, marketing, finance, leadership, communication, networking, and business planning are skills that can be learned.", icon: BookOpen }
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-[20px] shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                  <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-green transition-colors border border-green-100 group-hover:border-transparent">
                    <item.icon className="w-7 h-7 text-brand-green group-hover:text-white transition-colors stroke-[1.5]" />
                  </div>
                  <h3 className="text-[17px] font-black text-brand-navy mb-4 uppercase leading-snug">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-[14px] font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 6: WHY PSA EXISTS */}
        <section className="py-24 bg-white">
          <div className="max-w-[1200px] mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-brand-navy uppercase mb-6">Why Pure Startup Academy Exists</h2>
              <p className="text-[17px] text-gray-600 leading-relaxed font-medium">
                Starting a business can feel exciting, but keeping it alive requires knowledge, planning, guidance, and consistent action. Many entrepreneurs learn through expensive mistakes, trial and error, stress, and frustration.
                <br/><br/>
                Pure Startup Academy was created to provide a practical bridge between education and entrepreneurship. It helps future founders understand what to do, how to do it, and how to move forward with confidence.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-gray-50 border border-gray-200 rounded-[24px] p-8 lg:p-10 relative overflow-hidden shadow-sm">
                <div className="absolute top-0 left-0 w-full h-2 bg-gray-300"></div>
                <div className="flex items-center gap-3 mb-8">
                  <AlertTriangle className="w-8 h-8 text-gray-400" />
                  <h3 className="text-2xl font-black text-gray-500 uppercase tracking-wide mt-1">Without Guidance</h3>
                </div>
                <ul className="space-y-5">
                  {[
                    "No clear roadmap",
                    "No business training",
                    "No mentor",
                    "No customer strategy",
                    "No sales system",
                    "No financial planning",
                    "Higher chance of costly mistakes"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-gray-600 font-bold uppercase text-[13px] tracking-wide">
                      <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0"><span className="w-1.5 h-1.5 rounded-full bg-gray-500"></span></div> {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-brand-navy border border-brand-navy rounded-[24px] p-8 lg:p-10 relative overflow-hidden shadow-2xl transform md:-translate-y-4">
                <div className="absolute top-0 left-0 w-full h-2 bg-brand-green"></div>
                <div className="flex items-center gap-3 mb-8">
                  <ShieldCheck className="w-8 h-8 text-brand-green" />
                  <h3 className="text-2xl font-black text-white uppercase tracking-wide mt-1">With Pure Startup Academy</h3>
                </div>
                <ul className="space-y-5">
                  {[
                    "Practical learning",
                    "Clear startup roadmap",
                    "Business idea validation",
                    "Customer research",
                    "Sales and marketing guidance",
                    "Templates and tools",
                    "Confidence to launch"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-white font-bold uppercase text-[13px] tracking-wide">
                      <CheckCircle2 className="w-6 h-6 text-brand-green flex-shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7: WHO WE HELP */}
        <section className="py-20 bg-gray-50/50">
          <div className="max-w-[1200px] mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-brand-navy uppercase mb-4">Who We Help</h2>
              <div className="w-16 h-[3px] bg-brand-green mx-auto rounded-full"></div>
            </div>
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {[
                "Students", "Graduates", "Aspiring Entrepreneurs", "Working Professionals",
                "Side Hustlers", "Employees considering self-employment", "Startup Founders",
                "Early-stage Business Owners", "Future Business Leaders", "Anyone with a Business Idea"
              ].map((item, i) => (
                <div key={i} className="bg-white border border-gray-200 px-6 py-3 rounded-full shadow-sm text-brand-navy font-black uppercase text-[12px] tracking-widest flex items-center gap-2 hover:border-brand-green hover:text-brand-green transition cursor-default">
                  <Users className="w-4 h-4 opacity-70 stroke-[2]" /> {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 8: WHAT YOU LEARN WITH US */}
        <section className="py-24 bg-white border-y border-gray-100">
          <div className="max-w-[1200px] mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-brand-navy uppercase mb-4">What You Learn With Us</h2>
              <p className="text-gray-500 font-bold tracking-wide">A comprehensive curriculum covering every aspect of building a successful business.</p>
            </div>
            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-4">
              {[
                "Entrepreneurial Thinking", "Goal Setting", "Productivity", "Confidence Building", "Public Speaking Fundamentals", "Business Idea Generation", "Hero Idea Concept", "Identifying Problems Worth Solving", "Market Gap Analysis", "Scalability Assessment", "Customer Research", "Competitor Analysis", "SWOT Analysis", "Feasibility Studies", "Product-Market Fit", "Business Model Canvas", "Revenue Streams", "Cost Structures", "Value Proposition", "Business Planning", "Business Structures in the UK", "Sole Trader", "Limited Company", "Partnerships", "HMRC Basics", "VAT Basics", "Business Banking", "Intellectual Property", "Trademark Awareness", "Business Naming", "Mission, Vision and Core Values", "Personal Branding", "LinkedIn Optimisation", "Professional Business Profiles", "Sales Fundamentals", "Prospecting", "Building Relationships", "Objection Handling", "Networking", "Follow-Up Systems", "Referral Generation", "Instagram Strategy", "Facebook Strategy", "LinkedIn Strategy", "WhatsApp Marketing", "Content Creation", "Reels and Short Form Content", "Revenue vs Profit", "Cash Flow Management", "Pricing Strategies", "Budgeting", "ROI Calculations", "Financial Forecasting", "ChatGPT", "Canva", "CRM Systems", "Automation Tools", "Productivity Systems", "AI for Research and Content Creation", "Business Plans", "DPR Preparation", "Investor Pitch Decks", "Elevator Pitches", "Presentation Skills", "Launch Checklist", "First Customer Strategy", "90-Day Action Plan", "Business Readiness Assessment"
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 break-inside-avoid border border-gray-100 rounded-lg p-3 text-[13px] font-bold text-brand-navy flex items-start gap-3 hover:bg-green-50 hover:border-green-100 transition shadow-sm">
                  <Check className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0 stroke-[2.5]" /> {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 9: LEARNING PATHWAYS */}
        <section className="py-24 bg-brand-navy text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
          <div className="max-w-[1300px] mx-auto px-4 relative z-10">
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-black uppercase mb-6 text-white tracking-widest">Structured Learning Pathways</h2>
              <p className="text-gray-300 text-lg font-medium">Pure Startup Academy offers structured learning pathways designed to support entrepreneurs at different stages of their journey.</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Program 1 */}
              <div className="bg-white text-brand-navy rounded-[24px] p-8 flex flex-col relative overflow-hidden shadow-2xl hover:-translate-y-2 transition-transform duration-300">
                <div className="absolute top-0 left-0 w-full h-2 bg-brand-green"></div>
                <div className="text-[11px] font-black bg-green-100 text-green-700 px-4 py-1.5 rounded-full inline-block self-start mb-6 uppercase tracking-widest shadow-sm">3 Months / 12 Weeks</div>
                <h3 className="text-2xl font-black uppercase mb-2 leading-tight">Startup Foundations Programme</h3>
                <p className="text-brand-green font-black text-[13px] mb-8 uppercase tracking-widest">From Business Idea to Launch-Ready Plan</p>
                
                <div className="mb-6">
                  <h4 className="font-black text-[11px] text-gray-400 uppercase mb-3 tracking-widest">Who it is for</h4>
                  <ul className="text-[13px] font-bold text-gray-700 space-y-1.5 uppercase">
                    <li>• Students & Graduates</li>
                    <li>• Aspiring Entrepreneurs</li>
                    <li>• Employees considering self-employment</li>
                    <li>• Individuals with business ideas</li>
                  </ul>
                </div>
                
                <div className="mb-8 flex-1">
                  <h4 className="font-black text-[11px] text-gray-400 uppercase mb-3 tracking-widest">Outcome</h4>
                  <ul className="text-[14px] font-black space-y-3 uppercase text-brand-navy">
                    <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0" /> Validated business idea</li>
                    <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0" /> Launch roadmap</li>
                    <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0" /> Greater confidence</li>
                  </ul>
                </div>

                <Link href="/programs/startup-foundations" className="block text-center bg-brand-navy text-white py-4 rounded-full font-black uppercase text-[13px] tracking-widest hover:bg-brand-green transition mt-auto w-full shadow-md">
                  View Programme
                </Link>
              </div>

              {/* Program 2 */}
              <div className="bg-white text-brand-navy rounded-[24px] p-8 flex flex-col relative overflow-hidden shadow-2xl hover:-translate-y-2 transition-transform duration-300">
                <div className="absolute top-0 left-0 w-full h-2 bg-blue-500"></div>
                <div className="text-[11px] font-black bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full inline-block self-start mb-6 uppercase tracking-widest shadow-sm">6 Months</div>
                <h3 className="text-2xl font-black uppercase mb-2 leading-tight">Startup Launch & Growth Programme</h3>
                <p className="text-blue-500 font-black text-[13px] mb-8 uppercase tracking-widest">From Launch to Consistent Growth</p>
                
                <div className="mb-6">
                  <h4 className="font-black text-[11px] text-gray-400 uppercase mb-3 tracking-widest">Who it is for</h4>
                  <ul className="text-[13px] font-bold text-gray-700 space-y-1.5 uppercase">
                    <li>• New business owners</li>
                    <li>• Side hustle founders</li>
                    <li>• Recently launched startups</li>
                    <li>• Businesses looking to grow</li>
                  </ul>
                </div>
                
                <div className="mb-8 flex-1">
                  <h4 className="font-black text-[11px] text-gray-400 uppercase mb-3 tracking-widest">Outcome</h4>
                  <ul className="text-[14px] font-black space-y-3 uppercase text-brand-navy">
                    <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" /> Launch with confidence</li>
                    <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" /> Generate customers</li>
                    <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" /> Build systems</li>
                  </ul>
                </div>

                <Link href="/programs/startup-launch-growth" className="block text-center bg-brand-navy text-white py-4 rounded-full font-black uppercase text-[13px] tracking-widest hover:bg-blue-600 transition mt-auto w-full shadow-md">
                  View Programme
                </Link>
              </div>

              {/* Program 3 */}
              <div className="bg-white text-brand-navy rounded-[24px] p-8 flex flex-col relative overflow-hidden shadow-2xl hover:-translate-y-2 transition-transform duration-300">
                <div className="absolute top-0 left-0 w-full h-2 bg-purple-500"></div>
                <div className="text-[11px] font-black bg-purple-100 text-purple-700 px-4 py-1.5 rounded-full inline-block self-start mb-6 uppercase tracking-widest shadow-sm">12 Months</div>
                <h3 className="text-2xl font-black uppercase mb-2 leading-tight">Entrepreneur Development Programme</h3>
                <p className="text-purple-600 font-black text-[13px] mb-8 uppercase tracking-widest">From Business Owner to Business Leader</p>
                
                <div className="mb-6">
                  <h4 className="font-black text-[11px] text-gray-400 uppercase mb-3 tracking-widest">Who it is for</h4>
                  <ul className="text-[13px] font-bold text-gray-700 space-y-1.5 uppercase">
                    <li>• Serious entrepreneurs</li>
                    <li>• Startup founders</li>
                    <li>• Future business leaders</li>
                    <li>• Those building sustainable businesses</li>
                  </ul>
                </div>
                
                <div className="mb-8 flex-1">
                  <h4 className="font-black text-[11px] text-gray-400 uppercase mb-3 tracking-widest">Outcome</h4>
                  <ul className="text-[14px] font-black space-y-3 uppercase text-brand-navy">
                    <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0" /> Stronger leadership skills</li>
                    <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0" /> Scalable business framework</li>
                    <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0" /> Long-term business vision</li>
                  </ul>
                </div>

                <Link href="/programs/entrepreneur-development" className="block text-center bg-brand-navy text-white py-4 rounded-full font-black uppercase text-[13px] tracking-widest hover:bg-purple-600 transition mt-auto w-full shadow-md">
                  View Programme
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 10 & 11: FORMAT & RESOURCES */}
        <section className="py-24 bg-gray-50/50">
          <div className="max-w-[1300px] mx-auto px-4 grid lg:grid-cols-2 gap-16">
            
            <div>
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 rounded-full bg-brand-green flex items-center justify-center shadow-sm">
                  <CalendarDays className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-black text-brand-navy uppercase">Programme Format</h2>
              </div>
              
              <div className="space-y-4">
                {[
                  { title: "Duration", desc: "3 Months / 6 Months / 12 Months", icon: Calendar },
                  { title: "Delivery", desc: "Live Online Interactive Sessions", icon: MonitorPlay },
                  { title: "Live Classes", desc: "2 Sessions Per Week", icon: CalendarDays },
                  { title: "Duration Per Session", desc: "1 Hour", icon: Clock },
                  { title: "Total Learning Time", desc: "Approximately 8 Hours Per Month", icon: Clock },
                  { title: "Batch Options", desc: "Weekday Batch and Weekend Batch", icon: Users },
                  { title: "Includes", desc: "Q&A, assignments, tools, templates, worksheets, community support and accountability guidance", icon: Gift }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-5 rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 flex items-center gap-5 hover:-translate-y-1 transition-transform">
                    <div className="w-12 h-12 rounded-full bg-green-50 border border-green-100 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-brand-green stroke-[1.5]" />
                    </div>
                    <div>
                      <h4 className="text-[11px] font-black text-brand-green uppercase tracking-widest mb-1">{item.title}</h4>
                      <p className="font-bold text-brand-navy text-[15px] leading-snug">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-brand-navy flex items-center justify-center shadow-sm">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-black text-brand-navy uppercase">Tools & Resources</h2>
              </div>
              <p className="text-gray-600 mb-10 font-medium text-lg leading-relaxed">
                Pure Startup Academy gives participants access to practical tools and templates that save time, money, and frustration.
              </p>
              
              <div className="flex flex-wrap gap-3">
                {[
                  "Startup Business Checklist", "SWOT Analysis Template", "Business Plan Template",
                  "DPR Template", "Business Model Canvas", "Customer Interview Templates",
                  "Startup Financial Planning Templates", "Revenue Forecast", "Expense Forecast",
                  "Break-Even Analysis", "Cash Flow Planning", "Sales Scripts", "Email Templates",
                  "LinkedIn Message Templates", "Follow-Up Templates", "Social Media Content Planner",
                  "AI Toolkit for Entrepreneurs", "LinkedIn Optimisation Guide", "Public Speaking Resources",
                  "Community and Networking"
                ].map((item, i) => (
                  <div key={i} className="bg-white border border-gray-200 text-brand-navy text-[13px] font-black px-5 py-3 rounded-xl flex items-center gap-3 shadow-sm hover:border-brand-green hover:bg-green-50 transition cursor-default">
                    <FileText className="w-4 h-4 text-brand-green stroke-[2.5]" /> {item}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 12: WHAT MAKES US DIFFERENT */}
        <section className="py-24 bg-white border-y border-gray-100">
          <div className="max-w-[1200px] mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-brand-navy uppercase">What Makes Us Different?</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-gray-50 border border-gray-200 rounded-[24px] p-8 lg:p-12 text-center shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gray-300"></div>
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-8 border border-gray-200 shadow-sm">
                  <BookOpen className="w-8 h-8 text-gray-400 stroke-[1.5]" />
                </div>
                <h3 className="text-2xl font-black text-gray-500 mb-8 uppercase tracking-widest">Traditional Learning</h3>
                <ul className="space-y-5 text-left inline-block">
                  {[
                    "Mostly theory",
                    "Generic examples",
                    "Little practical implementation",
                    "Limited feedback",
                    "No clear launch roadmap",
                    "Focuses mainly on information"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-gray-500 font-bold uppercase text-[14px] tracking-wide">
                      <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0"><span className="w-1.5 h-1.5 rounded-full bg-gray-500"></span></div> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-brand-navy border border-brand-navy rounded-[24px] p-8 lg:p-12 text-center shadow-2xl relative overflow-hidden transform md:-translate-y-4">
                <div className="absolute top-0 left-0 w-full h-2 bg-brand-green"></div>
                <div className="w-20 h-20 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-brand-green/30">
                  <Rocket className="w-10 h-10 text-white stroke-[1.5]" />
                </div>
                <h3 className="text-2xl font-black text-white mb-8 uppercase tracking-widest">Pure Startup Academy</h3>
                <ul className="space-y-5 text-left inline-block">
                  {[
                    "Practical, hands-on learning",
                    "Real startup guidance",
                    "Business idea validation",
                    "Customer and market research",
                    "Sales and marketing focus",
                    "Templates, tools and checklists",
                    "AI and digital tools included",
                    "Accountability and guidance",
                    "Finish with a launch-ready action plan"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-white font-bold uppercase text-[14px] tracking-wide">
                      <CheckCircle2 className="w-6 h-6 text-brand-green flex-shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 13: CORE VALUES */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-[1200px] mx-auto px-4">
            <div className="text-center mb-16 flex flex-col items-center">
              <h2 className="text-3xl md:text-4xl font-black text-brand-navy uppercase mb-6">Our Core Values</h2>
              <div className="w-16 h-[3px] bg-brand-green rounded-full"></div>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Integrity", desc: "We believe in honest guidance, practical knowledge, and responsible entrepreneurship.", icon: ShieldCheck },
                { title: "Continuous Learning", desc: "Entrepreneurs must keep learning, improving, adapting, and taking action.", icon: BookOpen },
                { title: "Action Over Perfection", desc: "Progress begins when you take the first step. Customers teach more than endless planning.", icon: Zap },
                { title: "Accountability", desc: "A successful business requires ownership, discipline, consistency, and execution.", icon: Target },
                { title: "Innovation", desc: "Entrepreneurs create value by improving service, quality, convenience, speed, accessibility, pricing, delivery, and customer experience.", icon: Lightbulb },
                { title: "Customer Focus", desc: "Businesses grow when they understand customers, solve real problems, and create real value.", icon: Users }
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-[20px] shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
                  <div className="flex items-center gap-5 mb-6">
                    <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center border border-green-100">
                      <item.icon className="w-7 h-7 text-brand-green stroke-[1.5]" />
                    </div>
                    <h3 className="font-black text-brand-navy text-[18px] uppercase">{item.title}</h3>
                  </div>
                  <p className="text-gray-600 text-[15px] leading-relaxed font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 14: IMPACT STATEMENT (JOURNEY) */}
        <section className="py-24 bg-white overflow-hidden border-t border-gray-100">
          <div className="max-w-[1200px] mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-brand-navy uppercase mb-6">Building Confident Entrepreneurs</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16 font-medium leading-relaxed">
              Pure Startup Academy helps future founders move from confusion to clarity, from idea to validation, from planning to action, and from uncertainty to confidence.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-6xl mx-auto">
              {[
                "Idea", "Research", "Validation", "Business Model", "Brand", "Sales", "First Customer", "Launch", "Growth"
              ].map((step, i, arr) => (
                <div key={i} className="flex items-center gap-3 sm:gap-4">
                  <div className="bg-brand-navy text-white font-black text-[13px] sm:text-[15px] px-6 py-3 rounded-full uppercase tracking-widest whitespace-nowrap shadow-md hover:bg-brand-green transition-colors cursor-default">
                    {step}
                  </div>
                  {i < arr.length - 1 && (
                    <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-brand-green" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 15: CTA */}
        <section className="py-24 bg-brand-green relative overflow-hidden text-center">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
          <div className="max-w-4xl mx-auto px-4 relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase mb-8 leading-tight tracking-wide">
              Start Your Entrepreneurial Journey Today
            </h2>
            <p className="text-xl text-green-100 font-bold mb-12 leading-relaxed">
              Every successful entrepreneur was once a beginner. Every successful business started as an idea. Every great journey starts with a decision.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6">
              <Link href="/#programmes" className="bg-white text-brand-green px-10 py-5 rounded-full font-black uppercase tracking-widest hover:bg-gray-50 transition shadow-xl flex items-center gap-2">
                Explore Programs <ArrowRight size={20} />
              </Link>
              <Link href="#" className="bg-brand-navy text-white px-10 py-5 rounded-full font-black uppercase tracking-widest hover:bg-[#15357e] transition shadow-xl">
                Join Free Webinar
              </Link>
              <Link href="/#contact" className="bg-transparent text-white border-[3px] border-white px-10 py-5 rounded-full font-black uppercase tracking-widest hover:bg-white/10 transition">
                Contact Us
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
