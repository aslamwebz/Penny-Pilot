
import React from "react";
import { Link } from "react-router-dom";
import DashboardDemo from "../sections/DashboardDemo";
import Features from "../sections/Features";
import SecurityAssurance from "../sections/SecurityAssurance";
import Testimonials from "../sections/Testimonials";
import Pricing from "../sections/Pricing";
import Footer from "../sections/Footer";
import type { Expense } from "../sections/AddExpenseModal";
import MobileNav from "../components/MobileNav";

const scrollToAnchor = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
  e.preventDefault();
  const target = document.querySelector(id);
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
    // Update hash without jumping
    history.replaceState(null, "", id);
  }
};

// Demo starting data
const DEMO_EXPENSES: Expense[] = [
  { category: "Food", amount: 420, note: "Groceries and dinner", date: new Date().toISOString().slice(0, 10) },
  { category: "Transport", amount: 175, note: "Subway + Uber", date: new Date().toISOString().slice(0, 10) },
  { category: "Utilities", amount: 120, note: "Electricity", date: new Date().toISOString().slice(0, 10) },
  { category: "Leisure", amount: 110, note: "Movies & books", date: new Date().toISOString().slice(0, 10) },
];

const Index = () => {
  const hash = typeof window !== "undefined" ? window.location.hash : "";

  return (
    <div className="bg-gradient-to-br from-blue-50 via-mint-50 to-white min-h-screen font-inter">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center py-4 px-4 md:py-6 md:px-12 border-b bg-white shadow-sm" role="banner">
        <div className="flex items-center gap-2">
          <span className="bg-mint-500 text-white font-bold rounded-lg px-3 py-1 text-lg tracking-tight shadow-sm">PennyPilot</span>
        </div>
        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-slate-700" aria-label="Main menu">
          <Link to="/expense-tracker" className="text-mint-600 font-semibold hover:text-mint-700 transition-colors">
            Live Demo
          </Link>
          {[
            { href: "#features", label: "Features" },
            { href: "#security", label: "Security" },
            { href: "#testimonials", label: "Testimonials" },
            { href: "#pricing", label: "Pricing" },
          ].map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={e => scrollToAnchor(e, l.href)}
              className={`hover:text-mint-600 transition-colors ${hash === l.href ? "text-mint-600 font-semibold" : ""}`}
              aria-current={hash === l.href ? "page" : undefined}
            >
              {l.label}
            </a>
          ))}
        </nav>
        {/* Desktop CTA */}
        <Link
          to="/expense-tracker"
          className="hidden md:inline-block bg-mint-500 text-white font-semibold px-6 py-2 rounded-full shadow-md hover:scale-105 transform transition-all duration-150 hover:bg-mint-600"
        >
          Try It Free
        </Link>
        {/* Mobile nav button */}
        <MobileNav />
      </header>

      {/* Add padding top to account for fixed header */}
      <div className="h-20 md:h-24"></div>
      
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center gap-12 px-6 md:px-12 py-8 md:py-16 max-w-7xl mx-auto">
        <div className="md:w-1/2 flex flex-col gap-5">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight mb-2">
            Take Control of Your <span className="text-mint-600">Spending</span>
          </h1>
          <p className="text-lg text-slate-700 mb-4">
            Organize your finances, track expenses easily, and make budgeting effortless.
            PennyPilot helps you build financial clarity — securely and beautifully.
          </p>
          <Link
            to="/expense-tracker"
            className="inline-block bg-mint-500 text-white font-semibold px-7 py-3 rounded-full shadow-md hover:scale-105 transition-transform duration-150 text-lg w-[200px] text-center"
          >
            Start Tracking
          </Link>
          <div className="mt-6 text-slate-400 text-xs">
            14-day free trial • No credit card required
          </div>
        </div>
        <div className="md:w-1/2 w-full flex items-center justify-center">
          {/* Pass expenses to dashboard */}
          <DashboardDemo expenses={DEMO_EXPENSES} />
        </div>
      </section>

      {/* Main Sections */}
      <section id="features" className="py-14 bg-white/80">
        <Features />
      </section>
      <section id="security" className="py-14 bg-mint-50/50">
        <SecurityAssurance />
      </section>
      <section id="testimonials" className="py-14 bg-white/80">
        <Testimonials />
      </section>
      <section id="pricing" className="py-14 bg-blue-50/60">
        <Pricing />
      </section>

      <Footer />

    </div>
  );
};

export default Index;
