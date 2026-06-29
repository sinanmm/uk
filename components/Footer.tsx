import Link from "next/link";
import { Facebook, Instagram, MessageCircle } from "lucide-react";
import { navItems } from "./data";
import Logo from "./Logo";

const hrefFor = (item: string) => {
  const map: Record<string, string> = {
    Home: "/",
    Programs: "/programs",
    "Free webinar": "/#webinar",
    Gallery: "/#gallery",
    "About us": "/about",
    "Contact us": "/#contact",
  };

  return map[item] ?? "/";
};

export default function Footer() {
  return (
    <footer id="gallery" className="border-t border-slate-100 bg-white">
      <div className="section-shell py-9">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <Link href="/" className="block h-16 w-[160px]" aria-label="Pure Startup Academy home">
            <Logo className="h-16 w-auto" />
          </Link>
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {navItems.map((item) => (
              <Link key={item} href={hrefFor(item)} className="text-sm font-bold text-brand-navy transition hover:text-brand-green">
                {item}
              </Link>
            ))}
          </div>
          <p className="text-sm font-semibold text-slate-500">© 2026 Pure Startup Academy</p>
        </div>

        <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-[12px] font-extrabold uppercase tracking-[0.16em] text-brand-green">Stay Connected</p>
            <p className="mt-1 text-sm font-semibold text-slate-500">Chat with us or follow Pure Startup Academy across social platforms.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://wa.me/447776636037"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-brand-green px-4 py-2.5 text-sm font-extrabold text-white shadow-[0_10px_24px_rgba(47,148,36,0.18)] transition hover:scale-[1.02]"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
            <a
              href="https://www.instagram.com/purestartupacademy?igsh=MXYxam1wdnNpYWRj"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-extrabold text-brand-navy transition hover:border-brand-green hover:text-brand-green"
            >
              <Instagram size={16} />
              Instagram
            </a>
            <a
              href="https://www.facebook.com/share/1DmpJh5qT5/?mibextid=wwXIfr"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-extrabold text-brand-navy transition hover:border-brand-green hover:text-brand-green"
            >
              <Facebook size={16} />
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
