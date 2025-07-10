
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
  <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
    <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-12 text-center">What Our Users Say</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {testimonials.map((t, idx) => (
        <div
          key={t.name}
          className="bg-white rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
          style={{ 
            animation: `fadeInUp ${0.3 + (idx * 0.1)}s ease-out`, 
            animationFillMode: "both" 
          }}
        >
          <div className="relative mb-4">
            <img 
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-mint-100 object-cover" 
              src={t.avatar} 
              alt={t.name} 
              loading="lazy"
            />
            <div className="absolute -bottom-1 -right-1 bg-mint-500 rounded-full p-1">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            </div>
          </div>
          <blockquote className="flex-1 flex flex-col">
            <p className="text-slate-600 italic text-sm sm:text-base mb-4">&ldquo;{t.quote}&rdquo;</p>
            <footer className="mt-auto">
              <div className="font-semibold text-slate-800">{t.name}</div>
              <div className="text-xs text-slate-500">{t.title}</div>
            </footer>
          </blockquote>
        </div>
      ))}
    </div>
    <style dangerouslySetInnerHTML={{
      __html: `
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `
    }} />
  </div>
);

export default Testimonials;
