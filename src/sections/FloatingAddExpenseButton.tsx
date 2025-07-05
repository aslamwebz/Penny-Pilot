
import { Plus } from "lucide-react";

const FloatingAddExpenseButton = ({ onClick }: { onClick: () => void }) => (
  <button
    className="fixed bottom-6 right-6 z-40 bg-mint-500 hover:bg-mint-600 text-white rounded-full shadow-lg w-16 h-16 flex items-center justify-center border-4 border-white transition-all hover:scale-105 animate-scale-in"
    title="Add Expense"
    aria-label="Add Expense"
    type="button"
    style={{ boxShadow: "0 4px 24px 0 #cddbfa88" }}
    onClick={onClick}
  >
    <Plus size={30} />
    <span className="sr-only">Add Expense</span>
  </button>
);

export default FloatingAddExpenseButton;
