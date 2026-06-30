"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { EnrollButton } from "./Buttons";
import { navItems } from "./data";
import Logo from "./Logo";

const hrefFor = (item: string) => {
  const map: Record<string, string> = {
    Home: "/#home",
    Programs: "/#programmes",
    "About Us": "/about",
    "Free Downloads": "/#free-downloads",
    Contact: "/#contact",
  };

  return map[item] ?? "/";
};

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
      <nav className="section-shell flex h-[120px] items-center justify-between gap-5">
        <Link
          href="/"
          className="group flex h-32 w-[320px] items-center transition duration-300 hover:scale-[1.02]"
          aria-label="Pure Startup Academy home"
        >
          <Logo className="h-32 w-auto" />
        </Link>

        <div className="hidden items-center gap-10 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item}
              href={hrefFor(item)}
              className="nav-link group relative py-3 text-[17px] font-semibold text-brand-navy transition duration-300 hover:text-brand-navy"
            >
              {item}
              <span className="absolute inset-x-0 bottom-0 h-[4px] origin-left scale-x-0 rounded-full bg-brand-green transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
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
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="section-shell flex flex-col gap-2 py-4">
            {navItems.map((item) => (
              <Link
                key={item}
                href={hrefFor(item)}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base font-semibold text-brand-navy transition duration-200 hover:bg-brand-soft hover:text-brand-green"
              >
                {item}
              </Link>
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
