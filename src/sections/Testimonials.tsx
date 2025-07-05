
const testimonials = [
  {
    name: "Sarah B.",
    quote: "I never knew budgeting could feel this easy. PennyPilot made me feel so in control.",
    title: "Designer, NY",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    name: "Jamal P.",
    quote: "The categories and reports are so clear. It’s like having a personal accountant!",
    title: "Freelancer, SF",
    avatar: "https://randomuser.me/api/portraits/men/33.jpg"
  },
  {
    name: "Leah C.",
    quote: "Subtle, beautiful, and practical. I finally set budgets and stuck to them.",
    title: "Artist, TX",
    avatar: "https://randomuser.me/api/portraits/women/17.jpg"
  },
];

const Testimonials = () => (
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl font-bold text-slate-800 mb-4">What Our Users Say</h2>
    <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
      {testimonials.map((t, idx) => (
        <div
          key={t.name}
          className="bg-white border rounded-xl p-8 flex flex-col items-center shadow-lg hover:shadow-2xl hover:scale-105 transition animate-fade-in"
          style={{ animationDelay: `${idx * 100}ms`, animationFillMode: "both" }}
        >
          <img className="w-16 h-16 rounded-full mb-3 border-2 border-mint-200 object-cover" src={t.avatar} alt={t.name} />
          <div className="text-slate-700 italic mb-3">&ldquo;{t.quote}&rdquo;</div>
          <div className="font-semibold text-slate-800">{t.name}</div>
          <div className="text-xs text-slate-400">{t.title}</div>
        </div>
      ))}
    </div>
  </div>
);

export default Testimonials;
