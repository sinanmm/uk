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

export default function Footer() {
  return (
    <footer id="gallery" className="border-t border-slate-100 bg-white">
      <div className="section-shell flex flex-col gap-6 py-9 md:flex-row md:items-center md:justify-between">
        <a href="#home" className="block h-16 w-[160px]" aria-label="Pure Startup Academy home">
          <Logo className="h-16 w-auto" />
        </a>
        <div className="flex flex-wrap gap-x-6 gap-y-3">
          {navItems.map((item) => (
            <a key={item} href={hrefFor(item)} className="text-sm font-bold text-brand-navy transition hover:text-brand-green">
              {item}
            </a>
          ))}
        </div>
        <p className="text-sm font-semibold text-slate-500">© 2026 Pure Startup Academy</p>
      </div>
    </footer>
  );
}


