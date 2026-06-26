import { Check } from "lucide-react";
import { EnrollButton } from "./Buttons";

const planPoints = {
  full: ["Full programme access", "All bonuses included", "Certificate of completion"],
  monthly: ["Pay in 3 easy installments", "All bonuses included", "Certificate of completion"],
};

function PricingCard({
  title,
  price,
  suffix,
  points,
  blue = false,
}: {
  title: string;
  price: string;
  suffix: string;
  points: string[];
  blue?: boolean;
}) {
  return (
    <div className="section-card flex min-h-[306px] flex-1 flex-col items-center px-6 py-6 text-center transition duration-200 hover:-translate-y-1 hover:shadow-soft">
      <p className={`mb-5 rounded-md px-3 py-1 text-[13px] font-black ${blue ? "bg-blue-100 text-blue-700" : "text-brand-green"}`}>
        {title}
      </p>
      <p className="text-[50px] font-black leading-none text-brand-navy">{price}</p>
      <p className="mt-2 text-[13px] font-extrabold text-brand-navy">{suffix}</p>
      <ul className="my-6 w-full space-y-3 text-left">
        {points.map((point) => (
          <li key={point} className="flex items-start gap-2 text-[13px] font-bold text-brand-ink">
            <Check className="mt-0.5 shrink-0 text-brand-green" size={15} />
            {point}
          </li>
        ))}
      </ul>
      <div className="mt-auto w-full">
        {blue ? (
          <a
            href="#investment"
            className="inline-flex w-full items-center justify-center rounded-md bg-blue-700 px-6 py-3 text-[13px] font-extrabold uppercase text-white shadow-[0_12px_24px_rgba(29,78,216,0.22)] transition hover:scale-[1.03] hover:bg-blue-800"
          >
            ENROLL NOW
          </a>
        ) : (
          <a href="#investment" className="btn-primary w-full px-6 py-3">ENROLL NOW</a>
        )}
      </div>
    </div>
  );
}

export default function InvestmentSection() {
  return (
    <section id="investment" className="section-card slide-up p-7">
      <h2 className="mb-7 text-center text-[19px] font-black text-brand-navy">INVESTMENT</h2>
      <div className="relative flex flex-col gap-5 sm:flex-row sm:items-stretch">
        <PricingCard title="PAY IN FULL" price="Â£300" suffix="+ VAT" points={planPoints.full} />
        <div className="absolute left-1/2 top-1/2 z-10 hidden size-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-slate-300 text-[11px] font-black text-brand-navy sm:flex">
          OR
        </div>
        <div className="flex justify-center text-xs font-black text-slate-500 sm:hidden">OR</div>
        <PricingCard title="MONTHLY PLAN" price="Â£100" suffix="+ VAT / month" points={planPoints.monthly} blue />
      </div>
    </section>
  );
}

