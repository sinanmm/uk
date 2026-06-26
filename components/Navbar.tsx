"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { EnrollButton } from "./Buttons";
import { navItems } from "./data";
import Logo from "./Logo";

const hrefFor = (item: string) => {
  const map: Record<string, string> = {
    Home: "#home",
    Programs: "#programs",
    "Free webinar": "#webinar",
    Gallery: "#gallery",
    "About us": "#about",
    "Contact us": "#contact",
  };

  return map[item] ?? "#home";
};

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/96 shadow-[0_10px_35px_rgba(7,22,66,0.06)] backdrop-blur-xl">
      <nav className="section-shell flex h-[86px] items-center justify-between gap-5">
        <a
          href="#home"
          className="group flex h-16 w-[160px] items-center transition duration-300 hover:scale-[1.025]"
          aria-label="Pure Startup Academy home"
        >
          <Logo className="h-16 w-auto" />
        </a>

        <div className="hidden items-center gap-9 lg:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={hrefFor(item)}
              className="nav-link group relative py-3 text-[14px] font-bold text-brand-ink transition duration-300 hover:-translate-y-0.5 hover:text-brand-green"
            >
              {item}
              <span className="absolute inset-x-0 bottom-1 h-[2px] origin-left scale-x-0 rounded-full bg-brand-green transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <EnrollButton compact />
        </div>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-md border border-slate-200 text-brand-navy transition hover:border-brand-green hover:text-brand-green lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-slate-100 bg-white lg:hidden">
          <div className="section-shell flex flex-col gap-2 py-4">
            {navItems.map((item) => (
              <a
                key={item}
                href={hrefFor(item)}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-bold text-brand-navy transition duration-200 hover:bg-brand-soft hover:pl-5 hover:text-brand-green"
              >
                {item}
              </a>
            ))}
            <div className="px-3 pt-2">
              <EnrollButton compact />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}


