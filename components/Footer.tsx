import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";
import Logo from "./Logo";

const quickLinks = [
  { label: "Home", href: "/#home" },
  { label: "Programmes", href: "/#programmes" },
  { label: "About Us", href: "/#about-us" },
  { label: "Contact Us", href: "/#contact" },
];

const programmeLinks = [
  { label: "Idea to Launch", href: "/programs/startup-foundations" },
  { label: "Launch to Growth", href: "/programs/startup-launch-growth" },
  { label: "Growth to Scale", href: "/programs/entrepreneur-development" },
];

export default function Footer() {
  return (
    <footer id="contact" className="mt-10 bg-brand-navy text-white">
      <div className="section-shell grid gap-8 py-8 md:grid-cols-[1.1fr_1fr_1fr_0.8fr] md:items-start">
        <div>
          <Link href="/" className="block h-28 w-[280px]" aria-label="Pure Startup Academy home">
            <Logo className="h-28 w-auto brightness-[1.05] contrast-100" />
          </Link>
        </div>

        <div>
          <p className="text-[20px] font-semibold uppercase text-white/90">QUICK LINKS</p>
          <div className="mt-4 space-y-2">
            {quickLinks.map((item) => (
              <Link key={item.label} href={item.href} className="block text-[19px] text-white/78 transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-[20px] font-semibold uppercase text-white/90">PROGRAMMES</p>
          <div className="mt-4 space-y-2">
            {programmeLinks.map((item) => (
              <Link key={item.label} href={item.href} className="block text-[19px] text-white/78 transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>


        <div>
          <p className="text-[20px] font-semibold uppercase text-white/90">FOLLOW US</p>
          <div className="mt-4 flex gap-3">
            <a
              href="https://www.instagram.com/purestartupacademy?igsh=MXYxam1wdnNpYWRj"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/12 text-white transition hover:bg-white/20"
              aria-label="Visit Pure Startup Academy on Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://www.facebook.com/share/1DmpJh5qT5/?mibextid=wwXIfr"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/12 text-white transition hover:bg-white/20"
              aria-label="Visit Pure Startup Academy on Facebook"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://wa.me/447776636037"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/12 text-white transition hover:bg-white/20"
              aria-label="Contact Pure Startup Academy on WhatsApp"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="section-shell border-t border-white/10 py-4 text-center text-[20px] text-white/70">
        &copy; 2026 Pure Startup Academy. All Rights Reserved.
      </div>
    </footer>
  );
}
