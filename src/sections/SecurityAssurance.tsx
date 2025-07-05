
import { Lock } from "lucide-react";

const SecurityAssurance = () => (
  <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16 animate-fade-in">
    <div className="bg-mint-50 rounded-full p-6 flex items-center justify-center shadow-md">
      <Lock size={46} className="text-mint-500" />
    </div>
    <div>
      <div className="text-2xl font-bold text-slate-800 mb-3">
        Your Privacy, Always Protected
      </div>
      <div className="text-md text-slate-600 mb-2">
        PennyPilot encrypts your data — always. Only you have access to your financial info.
      </div>
      <ul className="list-disc text-slate-500 text-base ml-6">
        <li>No ads, no data selling</li>
        <li>End-to-end encrypted storage</li>
        <li>Delete your account at any time</li>
        <li>Complies with top privacy standards</li>
      </ul>
    </div>
  </div>
);

export default SecurityAssurance;
