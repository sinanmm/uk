import Link from "next/link";
import { ArrowRight, CalendarDays, Facebook, Instagram, MessageCircle } from "lucide-react";

const registrationFormUrl =
  "https://forms.zohopublic.eu/infopsac1/form/PureStartupAcademyRegistrationForm/formperma/QCaZ07UK0TadmpgM_-3X9o1xBPvaI6eodbpznGjBgyM?utm_source=ig&utm_medium=social&utm_content=link_in_bio&utm_id=97760_v0_s00_e0_tv3";

export function EnrollButton({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      href={registrationFormUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-primary ${compact ? "px-5 py-2.5" : ""}`}
    >
      BOOK FREE CONSULTATION <ArrowRight size={16} strokeWidth={2.8} />
    </Link>
  );
}

export function ConsultationButton() {
  return (
    <Link href={registrationFormUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
      BOOK FREE CONSULTATION
    </Link>
  );
}

export function WebinarButton() {
  return (
    <Link href={registrationFormUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
      <CalendarDays size={16} />
      JOIN FREE WEBINAR
    </Link>
  );
}

const socialButtonClass =
  "inline-flex items-center gap-2 rounded-md border border-white/18 bg-white/10 px-4 py-3 text-[12px] font-extrabold uppercase tracking-[0.04em] text-white transition duration-200 hover:-translate-y-0.5 hover:bg-white/18";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/447776636037"
      target="_blank"
      rel="noreferrer"
      className={socialButtonClass}
      aria-label="Chat with Pure Startup Academy on WhatsApp"
    >
      <MessageCircle size={16} />
      WhatsApp
    </a>
  );
}

export function InstagramButton() {
  return (
    <a
      href="https://www.instagram.com/purestartupacademy?igsh=MXYxam1wdnNpYWRj"
      target="_blank"
      rel="noreferrer"
      className={socialButtonClass}
      aria-label="Visit Pure Startup Academy on Instagram"
    >
      <Instagram size={16} />
      Instagram
    </a>
  );
}

export function FacebookButton() {
  return (
    <a
      href="https://www.facebook.com/share/1DmpJh5qT5/?mibextid=wwXIfr"
      target="_blank"
      rel="noreferrer"
      className={socialButtonClass}
      aria-label="Visit Pure Startup Academy on Facebook"
    >
      <Facebook size={16} />
      Facebook
    </a>
  );
}
