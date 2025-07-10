import React, { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "lucide-react";

type Expense = {
  id?: string;
  category: string;
  amount: number;
  note: string;
  date: string;
};

const categories = ["Food", "Transport", "Utilities", "Leisure", "Other"];

interface AddExpenseModalProps {
  open: boolean;
  onClose: () => void;
  onSave: (data: Omit<Expense, 'id'>) => void;
  expenseToEdit: Expense | null;
}

const AddExpenseModal: React.FC<AddExpenseModalProps> = ({ open, onClose, onSave, expenseToEdit }) => {
  const [category, setCategory] = useState(categories[0]);
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const [date, setDate] = useState(() => new Date().toISOString().slice(0, 10));
  const [submitting, setSubmitting] = useState(false);

  const isEditing = !!expenseToEdit;

  useEffect(() => {
    if (open) {
      if (isEditing) {
        setCategory(expenseToEdit.category);
        setAmount(expenseToEdit.amount.toString());
        setNote(expenseToEdit.note);
        setDate(expenseToEdit.date);
      } else {
        // Reset form for adding new expense
        setCategory(categories[0]);
        setAmount("");
        setNote("");
        setDate(new Date().toISOString().slice(0, 10));
      }
    }
  }, [open, expenseToEdit, isEditing]);


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    onSave({
      category,
      amount: parseFloat(amount),
      note,
      date,
    });
    setSubmitting(false);
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={(val) => !val && onClose()}>
      <DialogContent className="bg-white">
        <DialogHeader>
          <DialogTitle>{isEditing ? 'Edit Expense' : 'Add Expense'}</DialogTitle>
        </DialogHeader>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="category">Category</Label>
            <select
              id="category"
              value={category}
              onChange={e => setCategory(e.target.value)}
              required
              className="w-full mt-1 px-3 py-2 rounded-md border border-input bg-background focus:ring-2 focus:ring-mint-500"
            >
              {categories.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <div>
            <Label htmlFor="amount">Amount</Label>
            <Input
              id="amount"
              type="number"
              min="0.01"
              step="0.01"
              required
              value={amount}
              onChange={e => setAmount(e.target.value)}
              placeholder="0.00"
              autoFocus
            />
          </div>
          <div>
            <Label htmlFor="date">Date</Label>
            <div className="relative">
              <Input
                id="date"
                type="date"
                required
                value={date}
                onChange={e => setDate(e.target.value)}
                className="cursor-pointer pr-10"
              />
              <Calendar className="w-4 h-4 text-muted-foreground absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
          <div>
            <Label htmlFor="note">Note</Label>
            <Textarea
              id="note"
              value={note}
              onChange={e => setNote(e.target.value)}
              placeholder="Optional description"
            />
          </div>
          <Button disabled={submitting || !amount} type="submit" className="w-full mt-4 bg-mint-500 hover:bg-mint-600">
            {isEditing ? 'Save Changes' : 'Add Expense'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export type { Expense };
export default AddExpenseModal;
