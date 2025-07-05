import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DashboardDemo from "../sections/DashboardDemo";
import AddExpenseModal, { Expense } from "../sections/AddExpenseModal";
import FloatingAddExpenseButton from "../sections/FloatingAddExpenseButton";
import ExpenseList from "../sections/ExpenseList";
import { useToast } from "@/hooks/use-toast";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { ArrowLeft } from "lucide-react";

// Demo starting data
const DEMO_EXPENSES: Expense[] = [
  { id: "1", category: "Food", amount: 420, note: "Groceries and dinner", date: new Date().toISOString().slice(0, 10) },
  { id: "2", category: "Transport", amount: 175, note: "Subway + Uber", date: new Date().toISOString().slice(0, 10) },
  { id: "3", category: "Utilities", amount: 120, note: "Electricity", date: new Date().toISOString().slice(0, 10) },
  { id: "4", category: "Leisure", amount: 110, note: "Movies & books", date: new Date().toISOString().slice(0, 10) },
];

const ExpenseTracker = () => {
  const { toast } = useToast();
  const [expenses, setExpenses] = useState<Expense[]>(() => {
    try {
      const savedExpenses = localStorage.getItem("expenses");
      return savedExpenses ? JSON.parse(savedExpenses) : DEMO_EXPENSES;
    } catch (error) {
      console.error("Failed to parse expenses from localStorage", error);
      return DEMO_EXPENSES;
    }
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [expenseToEdit, setExpenseToEdit] = useState<Expense | null>(null);
  const [expenseToDelete, setExpenseToDelete] = useState<Expense | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const handleSaveExpense = (data: Omit<Expense, 'id'>) => {
    if (expenseToEdit) {
      setExpenses(prev =>
        prev.map(exp => (exp.id === expenseToEdit.id ? { ...exp, ...data } : exp))
      );
      toast({ title: "Expense updated!", description: "Your expense has been successfully updated." });
    } else {
      setExpenses(prev => [...prev, { ...data, id: Date.now().toString() }]);
      toast({ title: "Expense added!", description: "A new expense has been successfully added." });
    }
  };

  const handleDeleteExpense = () => {
    if (expenseToDelete) {
      setExpenses(prev => prev.filter(exp => exp.id !== expenseToDelete.id));
      toast({
        title: "Expense deleted!",
        description: "Your expense has been removed.",
        variant: "destructive",
      });
      setExpenseToDelete(null);
    }
  };

  const openAddModal = () => {
    setExpenseToEdit(null);
    setModalOpen(true);
  };

  const openEditModal = (expense: Expense) => {
    setExpenseToEdit(expense);
    setModalOpen(true);
  };

  const sortedExpenses = [...expenses].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const filteredExpenses = sortedExpenses.filter(expense =>
    expense.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    expense.note.toLowerCase().includes(searchTerm.toLowerCase()) ||
    expense.amount.toString().includes(searchTerm)
  );

  return (
    <div className="bg-gradient-to-br from-blue-50 via-mint-50 to-white min-h-screen font-inter">
      <header className="flex justify-between items-center py-6 px-4 md:px-12 border-b bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <Link to="/" className="flex items-center gap-2 text-slate-700 hover:text-mint-600 transition-colors">
          <ArrowLeft size={20} />
          <span className="font-semibold">Back to Home</span>
        </Link>
         <div className="flex items-center gap-2">
          <span className="bg-mint-500 text-white font-bold rounded-lg px-3 py-1 text-lg tracking-tight shadow-sm">PennyPilot</span>
        </div>
      </header>
      <main className="flex flex-col items-center gap-12 px-6 md:px-12 py-16 max-w-4xl mx-auto w-full">
        <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight">
            Your Personal <span className="text-mint-600">Expense Tracker</span>
            </h1>
            <p className="text-lg text-slate-700 mt-4 max-w-2xl">
                Use the <span className="font-bold text-mint-600">plus button</span> to add new expenses and see your dashboard update in real-time. All data is stored locally in your browser.
            </p>
        </div>
        <DashboardDemo expenses={expenses} />
        <ExpenseList
          expenses={filteredExpenses}
          onEdit={openEditModal}
          onDelete={(expense) => setExpenseToDelete(expense)}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />
      </main>
      
      <AddExpenseModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={handleSaveExpense}
        expenseToEdit={expenseToEdit}
      />

      <AlertDialog open={!!expenseToDelete} onOpenChange={() => setExpenseToDelete(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete this expense record.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDeleteExpense}>Delete</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <FloatingAddExpenseButton onClick={openAddModal} />
    </div>
  );
};

export default ExpenseTracker;
