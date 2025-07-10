
const Pricing = () => (
  <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
    <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">Simple, Honest Pricing</h2>
      <p className="text-slate-600 text-lg md:text-xl">
        Get started for free. Upgrade for more features when ready.
      </p>
    </div>
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
      {/* Free Plan */}
      <div className="flex flex-col h-full bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
        <div className="flex-1">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold text-slate-800">Free</h3>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-mint-100 text-mint-800">
              No credit card needed
            </span>
          </div>
          
          <div className="mb-6">
            <div className="flex items-baseline">
              <span className="text-4xl font-extrabold text-slate-900">$0</span>
              <span className="ml-2 text-slate-500">/month</span>
            </div>
            <p className="mt-1 text-sm text-slate-500">Perfect for getting started</p>
          </div>
          
          <ul className="space-y-3 mb-8">
            {["Up to 50 transactions/month", "All core features", "Budget & trend charts", "Basic support"].map((feature) => (
              <li key={feature} className="flex items-center">
                <svg className="h-5 w-5 text-mint-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-slate-600">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <button className="w-full bg-mint-500 hover:bg-mint-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200">
          Get Started for Free
        </button>
      </div>
      
      {/* Pro Plan */}
      <div className="relative flex flex-col h-full bg-white border-2 border-blue-500 rounded-2xl p-6 sm:p-8 shadow-lg transform hover:-translate-y-1 transition-all duration-300">
        <div className="absolute top-0 right-0 -mt-3 -mr-3">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-blue-100 text-blue-800">
            Most Popular
          </span>
        </div>
        
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Pro</h3>
          
          <div className="mb-6">
            <div className="flex items-baseline">
              <span className="text-4xl font-extrabold text-slate-900">$6</span>
              <span className="ml-2 text-slate-500">/month</span>
            </div>
            <p className="mt-1 text-sm text-slate-500">Billed annually ($72/year) or $8 month-to-month</p>
          </div>
          
          <ul className="space-y-3 mb-8">
            {["Unlimited transactions", "Recurring payments", "Priority support", "Export to CSV", "Advanced analytics", "Custom categories"].map((feature) => (
              <li key={feature} className="flex items-center">
                <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-slate-600">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200">
          Start 14-Day Free Trial
        </button>
      </div>
    </div>
    
    <div className="mt-10 text-center text-slate-500 text-sm">
      <p>Need more? <a href="#" className="text-blue-600 hover:underline font-medium">Contact us</a> for enterprise solutions.</p>
    </div>
  </div>
);

export default Pricing;
