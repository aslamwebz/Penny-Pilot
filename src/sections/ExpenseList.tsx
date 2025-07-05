
import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Edit, Trash2 } from "lucide-react";
import type { Expense } from "./AddExpenseModal";
import { Input } from "@/components/ui/input";

interface ExpenseListProps {
  expenses: Expense[];
  onEdit: (expense: Expense) => void;
  onDelete: (expense: Expense) => void;
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

const ExpenseList: React.FC<ExpenseListProps> = ({ expenses, onEdit, onDelete, searchTerm, onSearchChange }) => {
  if (expenses.length === 0 && !searchTerm) {
    return (
      <div className="text-center text-slate-500 py-10">
        No expenses yet. Add one to get started!
      </div>
    );
  }

  return (
    <div className="bg-white/90 rounded-2xl shadow-lg px-2 py-4 sm:p-6 border transition-shadow duration-300 hover:shadow-2xl animate-fade-in w-full">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 px-4 gap-4">
        <h2 className="text-lg font-bold text-slate-700 mb-0">Recent Expenses</h2>
        <Input
          placeholder="Search expenses..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full sm:max-w-xs"
        />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Category</TableHead>
            <TableHead className="text-right">Amount</TableHead>
            <TableHead className="hidden md:table-cell">Date</TableHead>
            <TableHead className="hidden sm:table-cell">Note</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {expenses.length > 0 ? (
            expenses.map((expense) => (
              <TableRow key={expense.id}>
                <TableCell className="font-medium">{expense.category}</TableCell>
                <TableCell className="text-right">${expense.amount.toFixed(2)}</TableCell>
                <TableCell className="hidden md:table-cell">{new Date(expense.date).toLocaleDateString()}</TableCell>
                <TableCell className="hidden sm:table-cell truncate max-w-[150px]">{expense.note}</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon" onClick={() => onEdit(expense)} className="text-slate-500 hover:text-mint-600">
                    <Edit size={16} />
                  </Button>
                  <Button variant="ghost" size="icon" onClick={() => onDelete(expense)} className="text-slate-500 hover:text-red-500">
                    <Trash2 size={16} />
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={5} className="text-center text-slate-500 py-10">
                No expenses match your search.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default ExpenseList;
