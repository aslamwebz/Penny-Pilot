
import { Lock } from "lucide-react";

const SecurityAssurance = () => (
  <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
    <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 lg:p-10">
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 lg:gap-16">
        <div className="bg-mint-50 rounded-full p-4 sm:p-6 flex-shrink-0 shadow-md w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center">
          <Lock className="text-mint-500 w-10 h-10 sm:w-12 sm:h-12" />
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-3 sm:mb-4">
            Your Privacy, Always Protected
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mb-4 sm:mb-6 max-w-2xl mx-auto md:mx-0">
            PennyPilot encrypts your data — always. Only you have access to your financial info.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-left max-w-2xl mx-auto md:mx-0">
            <li className="flex items-start">
              <span className="text-mint-500 mr-2">•</span>
              <span className="text-slate-600 text-sm sm:text-base">No ads, no data selling</span>
            </li>
            <li className="flex items-start">
              <span className="text-mint-500 mr-2">•</span>
              <span className="text-slate-600 text-sm sm:text-base">End-to-end encrypted storage</span>
            </li>
            <li className="flex items-start">
              <span className="text-mint-500 mr-2">•</span>
              <span className="text-slate-600 text-sm sm:text-base">Delete your account at any time</span>
            </li>
            <li className="flex items-start">
              <span className="text-mint-500 mr-2">•</span>
              <span className="text-slate-600 text-sm sm:text-base">Complies with top privacy standards</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default SecurityAssurance;
