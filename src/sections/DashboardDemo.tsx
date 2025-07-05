import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import { ArrowUp, ArrowDown } from "lucide-react";
import type { Expense } from "./AddExpenseModal";

// Helper: group by category/month
const getCategoryTotals = (expenses: Expense[]) => {
  const map: Record<string, number> = {};
  expenses.forEach(e => {
    map[e.category] = (map[e.category] || 0) + e.amount;
  });
  return Object.entries(map).map(([name, value]) => ({ name, value }));
};
const pieColors = ["#54a8eb", "#82eefd", "#48cfae", "#f8d27c", "#c8b6fa"];

const getMonthlyTotals = (expenses: Expense[]) => {
  // Show last 5 months (including current), with mock for empty months
  const now = new Date();
  const barData: { month: string, spending: number, key: string }[] = [];
  for (let i = 4; i >= 0; i--) {
    const d = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth() - i, 1));
    const ym = `${d.getUTCFullYear()}-${('0' + (d.getUTCMonth() + 1)).slice(-2)}`;
    barData.push({ month: d.toLocaleString('default', { month: 'short' }), spending: 0, key: ym });
  }
  expenses.forEach((e) => {
    const date = new Date(e.date);
    const ym = `${date.getUTCFullYear()}-${('0' + (date.getUTCMonth() + 1)).slice(-2)}`;
    const inBar = barData.find(b => b.key === ym);
    if (inBar) inBar.spending += e.amount;
  });
  return barData.map(({ month, spending }) => ({ month, spending }));
};

const DashboardDemo: React.FC<{ expenses: Expense[] }> = ({ expenses }) => {
  const categoryTotals = getCategoryTotals(expenses);
  const barData = getMonthlyTotals(expenses);
  const totalThisMonth =
    barData.length > 0 ? barData[barData.length - 1].spending : 0;

  // Get demo 'delta' (fake, for static badge)
  const prevMonth = barData.length > 1 ? barData[barData.length - 2].spending : 0;
  const pctChange = prevMonth ? Math.round((100 * (totalThisMonth - prevMonth)) / prevMonth) : 0;

  return (
    <div className="bg-white/90 rounded-2xl shadow-lg px-6 py-8 flex flex-col gap-6 max-w-lg w-full border transition-shadow duration-300 hover:shadow-2xl animate-fade-in">
      <div className="font-bold text-lg text-slate-700 mb-2">Monthly Spending Overview</div>
      <div className="flex flex-col md:flex-row gap-4">
        {/* Pie Chart */}
        <div className="flex-1 flex flex-col justify-between items-center">
          <div className="font-semibold text-slate-600 text-sm mb-1">By Category</div>
          <ResponsiveContainer width={120} height={120}>
            <PieChart>
              <Pie
                data={categoryTotals}
                innerRadius={38}
                outerRadius={60}
                paddingAngle={4}
                dataKey="value"
                isAnimationActive={true}
              >
                {categoryTotals.map((entry, idx) => (
                  <Cell key={`cell-${idx}`} fill={pieColors[idx % pieColors.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="flex flex-wrap gap-2 mt-2">
            {categoryTotals.map((d, idx) => (
              <span key={d.name} className="flex items-center text-xs px-2 py-1 rounded bg-slate-50 border text-slate-600">
                <span className="w-2 h-2 rounded-full mr-2" style={{ background: pieColors[idx % pieColors.length] }} />
                {d.name}
              </span>
            ))}
          </div>
        </div>
        {/* Bar Chart */}
        <div className="flex-1 flex flex-col items-center">
          <div className="font-semibold text-slate-600 text-sm mb-1">Trends</div>
          <ResponsiveContainer width="99%" height={100}>
            <BarChart data={barData}>
              <XAxis dataKey="month" tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis hide />
              <Tooltip />
              <Bar dataKey="spending" fill="#54a8eb" radius={[10, 10, 0, 0]} animationDuration={800} />
            </BarChart>
          </ResponsiveContainer>
          <div className="flex items-center gap-4 mt-3">
            <span className={`inline-flex items-center text-sm ${
              pctChange < 0 ? "text-mint-600" : "text-blue-400"
            } font-bold`}>
              {pctChange < 0 ? (
                <ArrowDown size={16} className="mr-1" />
              ) : (
                <ArrowUp size={16} className="mr-1" />
              )}
              {pctChange > 0
                ? `+${pctChange}% vs prev`
                : `${pctChange}% vs prev`}
            </span>
          </div>
        </div>
      </div>
      <div className="mt-4 flex justify-between text-xs text-slate-500">
        <span>Total this month</span>
        <span className="font-bold text-slate-700">
          ${totalThisMonth.toLocaleString(undefined, { maximumFractionDigits: 2 })}
        </span>
      </div>
    </div>
  );
};

export default DashboardDemo;
