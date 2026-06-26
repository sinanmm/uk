import { CalendarDays, ArrowRight } from "lucide-react";

export function EnrollButton({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#investment" className={`btn-primary ${compact ? "px-5 py-2.5" : ""}`}>
      ENROLL NOW <ArrowRight size={16} strokeWidth={2.8} />
    </a>
  );
}

export function ConsultationButton() {
  return (
    <a href="#contact" className="btn-secondary">
      BOOK FREE CONSULTATION
    </a>
  );
}

export function WebinarButton() {
  return (
    <a href="#webinar" className="btn-secondary">
      <CalendarDays size={16} />
      JOIN FREE WEBINAR
    </a>
  );
}
