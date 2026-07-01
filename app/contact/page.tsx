import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Send,
  Facebook,
  Instagram,
  Linkedin,
  MessageCircle
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact Us | Pure Startup Academy",
  description: "Get in touch with us for inquiries, partnerships, or support.",
};

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen font-sans">
      <Navbar />
      <main className="pb-0 pt-[96px]">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden bg-brand-navy py-20 text-white">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
          <div className="max-w-[1200px] mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase mb-6 tracking-wide">
              Get in <span className="text-brand-green">Touch</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-medium">
              We're here to help you. Reach out for any questions, support, or to learn more about how we can work together.
            </p>
          </div>
        </section>

        {/* CONTACT CONTENT */}
        <section className="py-20 bg-gray-50/50">
          <div className="max-w-[1200px] mx-auto px-4 grid lg:grid-cols-2 gap-12 lg:gap-20">
            
            {/* LEFT COLUMN - INFO & WHY US */}
            <div className="flex flex-col gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-black text-brand-navy uppercase mb-8">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0 border border-green-100">
                      <Phone className="w-6 h-6 text-brand-green" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 uppercase text-sm tracking-wide mb-1">Call Us</h3>
                      <div className="flex flex-col gap-1">
                        <a href="tel:07407048979" className="text-brand-navy font-bold text-lg hover:text-brand-green transition">07407048979</a>
                        <a href="tel:07776636037" className="text-brand-navy font-bold text-lg hover:text-brand-green transition">07776636037</a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 border border-blue-100">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 uppercase text-sm tracking-wide mb-1">Email</h3>
                      <a href="mailto:sales@purecateringsupplies.co.uk" className="text-brand-navy font-bold text-lg hover:text-blue-600 transition break-all">
                        sales@purecateringsupplies.co.uk
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center flex-shrink-0 border border-purple-100">
                      <MapPin className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 uppercase text-sm tracking-wide mb-1">Our Location</h3>
                      <p className="text-brand-navy font-bold text-lg">Manchester, UK</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="font-black text-brand-navy uppercase mb-6">Connect With Us</h3>
                <div className="flex gap-4">
                  <a href="#" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-brand-navy hover:bg-blue-600 hover:text-white hover:border-transparent transition-all shadow-sm">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-brand-navy hover:bg-pink-600 hover:text-white hover:border-transparent transition-all shadow-sm">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-brand-navy hover:bg-blue-700 hover:text-white hover:border-transparent transition-all shadow-sm">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="https://wa.me/447407048979" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-brand-navy hover:bg-green-500 hover:text-white hover:border-transparent transition-all shadow-sm">
                    <MessageCircle className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Why Businesses Choose Us */}
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                <h3 className="text-2xl font-black text-brand-navy uppercase mb-6">Why Businesses Choose Us</h3>
                <ul className="space-y-4">
                  {[
                    "Trusted by 100+ Takeaways",
                    "Orders delivered in 2 working days",
                    "Low Minimum Orders",
                    "Trade Prices"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-brand-navy font-bold text-lg">
                      <CheckCircle2 className="w-6 h-6 text-brand-green flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* RIGHT COLUMN - FORM */}
            <div className="bg-white rounded-[24px] p-8 md:p-10 border border-gray-100 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-brand-green"></div>
              <h2 className="text-3xl font-black text-brand-navy uppercase mb-2">Send a Message</h2>
              <p className="text-gray-500 font-medium mb-8">Fill out the form below and we'll get back to you shortly.</p>
              
              <form action="https://formsubmit.co/sales@purecateringsupplies.co.uk" method="POST" className="space-y-6">
                {/* Honeypot for spam protection */}
                <input type="text" name="_honey" style={{ display: "none" }} />
                {/* Disable Captcha for smoother UX (optional) */}
                <input type="hidden" name="_captcha" value="false" />
                {/* Success page (can set to window.location.href to stay on page) */}
                <input type="hidden" name="_next" value="https://purecateringsupplies.co.uk" />
                <input type="hidden" name="_subject" value="New Contact Form Submission" />

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-bold text-brand-navy uppercase tracking-wide">Full Name</label>
                    <input type="text" id="name" name="name" required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-bold text-brand-navy uppercase tracking-wide">Phone Number</label>
                    <input type="tel" id="phone" name="phone" required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition" placeholder="+44 123 456 7890" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold text-brand-navy uppercase tracking-wide">Email Address</label>
                  <input type="email" id="email" name="email" required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition" placeholder="john@example.com" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-bold text-brand-navy uppercase tracking-wide">Your Message</label>
                  <textarea id="message" name="message" required rows={5} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition resize-none" placeholder="How can we help you?"></textarea>
                </div>

                <button type="submit" className="w-full bg-brand-green text-white font-black uppercase tracking-widest py-4 rounded-xl hover:bg-green-700 transition flex items-center justify-center gap-2 shadow-md">
                  Send Message <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* GOOGLE MAPS SECTION */}
        <section className="h-[400px] md:h-[500px] w-full bg-gray-200 relative">
          <iframe
            src="https://maps.google.com/maps?q=Manchester,%20UK&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps - Manchester, UK"
            className="absolute inset-0"
          ></iframe>
        </section>
      </main>
      <Footer />
    </div>
  );
}
