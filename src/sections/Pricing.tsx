
const Pricing = () => (
  <div className="max-w-2xl mx-auto text-center rounded-xl border bg-white/90 p-10 shadow-xl animate-fade-in">
    <h2 className="text-3xl font-bold text-slate-800 mb-3">Simple, Honest Pricing</h2>
    <p className="text-slate-600 text-lg mb-7">Get started for free. Upgrade for more features when ready.</p>
    <div className="flex flex-col md:flex-row md:justify-center items-center gap-8">
      <div className="flex-1 flex flex-col items-center bg-mint-50 border border-mint-200 rounded-lg p-8 mb-4 md:mb-0">
        <div className="font-semibold text-2xl text-mint-700 mb-2">Free</div>
        <div className="text-3xl font-bold mb-3">$0<span className="text-base font-medium text-slate-400">/mo</span></div>
        <ul className="text-slate-600 mb-5">
          <li>Up to 50 transactions/mo</li>
          <li>All core features</li>
          <li>Budget & trend charts</li>
        </ul>
        <button className="bg-mint-500 text-white font-bold px-5 py-2 rounded-full hover:bg-mint-600 transition-all">Get Started</button>
      </div>
      <div className="flex-1 flex flex-col items-center bg-blue-50 border border-blue-200 rounded-lg p-8 shadow-sm">
        <div className="font-semibold text-2xl text-blue-700 mb-2">Pro</div>
        <div className="text-3xl font-bold mb-3">$6<span className="text-base font-medium text-slate-400">/mo</span></div>
        <ul className="text-slate-600 mb-5">
          <li>Unlimited transactions</li>
          <li>Recurring payments</li>
          <li>Priority support</li>
          <li>Export to CSV</li>
        </ul>
        <button className="bg-blue-500 text-white font-bold px-5 py-2 rounded-full hover:bg-blue-600 transition-all">Start 14-day Trial</button>
      </div>
    </div>
  </div>
);

export default Pricing;
