
const Footer = () => (
  <footer className="bg-white/95 border-t py-8 text-slate-600">
    <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between md:items-start gap-8">
      <div className="flex-1 mb-4">
        <div className="font-extrabold text-lg text-mint-700 mb-2">PennyPilot</div>
        <div className="text-slate-500 mb-2">Helping you master your money — one day at a time.</div>
        <div className="flex gap-2 mt-3">
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-8" />
          <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" className="h-8" />
        </div>
      </div>
      <div className="flex-1 mb-4">
        <div className="font-semibold mb-2">FAQs</div>
        <ul className="text-sm space-y-1">
          <li><a href="#" className="hover:text-mint-600 transition">How does PennyPilot keep my data private?</a></li>
          <li><a href="#" className="hover:text-mint-600 transition">Can I import/export transactions?</a></li>
          <li><a href="#" className="hover:text-mint-600 transition">Does it work on mobile?</a></li>
        </ul>
      </div>
      <div className="flex-1 mb-4">
        <div className="font-semibold mb-2">Support</div>
        <div className="text-sm mb-2">Email: <a className="hover:text-mint-600 underline" href="mailto:support@pennypilot.app">support@pennypilot.app</a></div>
        <div className="text-sm flex flex-col gap-1">
          <a href="#" className="hover:text-mint-600 transition">Terms & Privacy Policy</a>
        </div>
      </div>
    </div>
    <div className="text-xs text-center mt-8 text-slate-400">© {new Date().getFullYear()} PennyPilot. All rights reserved.</div>
  </footer>
);

export default Footer;
