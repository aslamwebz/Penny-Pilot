
import { CreditCard, Utensils, Car, Home, Repeat, PieChart, Clock3, Pencil, Trash2, Plus } from "lucide-react";

const features = [
  {
    icon: <Plus size={22} className="text-mint-500" />,
    title: "Add Expenses",
    desc: "Log expenses in seconds, wherever you are."
  },
  {
    icon: <Pencil size={22} className="text-mint-500" />,
    title: "Edit & Delete",
    desc: "Easily adjust or remove transactions anytime."
  },
  {
    icon: <PieChart size={22} className="text-mint-500" />,
    title: "Categorize Spending",
    desc: "Group expenses into categories for clear insights."
  },
  {
    icon: <CreditCard size={22} className="text-mint-500" />,
    title: "Budget Setting",
    desc: "Set monthly budgets and track progress visually."
  },
  {
    icon: <Repeat size={22} className="text-mint-500" />,
    title: "Recurring Payments",
    desc: "Automate bills, subscriptions, and regular expenses."
  },
  {
    icon: <Clock3 size={22} className="text-mint-500" />,
    title: "Quick Trends",
    desc: "Spot patterns and trends in your spending over time."
  },
];

const Features = () => (
  <div className="max-w-5xl mx-auto px-2">
    <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-4">
      Features that Empower
    </h2>
    <p className="text-center text-lg text-slate-600 mb-10">PennyPilot makes tracking your spending seamless and smart.</p>
    <div className="grid gap-7 md:grid-cols-3 sm:grid-cols-2">
      {features.map((f, idx) => (
        <div
          key={f.title}
          className="bg-white border rounded-xl p-6 flex flex-col items-center text-center shadow-lg hover:shadow-2xl transition hover:scale-105 animate-fade-in"
          style={{ animationDelay: `${idx * 80}ms`, animationFillMode: "both" }}
        >
          <div className="p-3 mb-3 bg-mint-100 rounded-full">{f.icon}</div>
          <div className="font-semibold text-lg text-slate-700 mb-2">{f.title}</div>
          <div className="text-slate-500 text-sm">{f.desc}</div>
        </div>
      ))}
    </div>
  </div>
);

export default Features;
