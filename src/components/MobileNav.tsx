
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#security", label: "Security" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#pricing", label: "Pricing" },
];

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="md:hidden flex items-center px-2 py-2 rounded focus:outline-none focus:ring-2 focus:ring-mint-500"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-controls="mobile-nav-menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        type="button"
      >
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>
      <nav
        id="mobile-nav-menu"
        aria-label="Mobile main menu"
        className={`fixed top-0 right-0 w-64 h-full z-50 bg-white shadow-2xl px-8 py-8 transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        } md:hidden flex flex-col gap-7`}
        style={{
          pointerEvents: open ? "auto" : "none",
        }}
        role="menu"
      >
        <button
          className="absolute top-5 right-6"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
        >
          <X size={32} />
        </button>
        <ul className="flex flex-col gap-6 mt-12" role="menu">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block font-semibold text-lg text-slate-700 hover:text-mint-600 transition-colors"
                role="menuitem"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#get-started"
          className="mt-8 inline-block bg-mint-500 text-white font-semibold px-7 py-3 rounded-full shadow-md hover:scale-105 transition-transform duration-150 text-lg w-full text-center"
          onClick={() => setOpen(false)}
          role="menuitem"
        >
          Try It Free
        </a>
      </nav>
      {/* Overlay */}
      {open && (
        <div
          aria-hidden="true"
          className="fixed inset-0 bg-black/30 z-40"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
};

export default MobileNav;
