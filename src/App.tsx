import React, { useState } from "react";

import ExpenseItemList from "./components/Expenses/ExpenseItemList";
import NewExpense from "./components/NewExpense/NewExpense";
import { ExpenseData } from "./components/Expenses/ExpenseItem";

const DUMMY_EXPENSES: ExpenseData[] = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App: React.FC = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense: ExpenseData) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseItemList items={expenses} />
    </div>
  );
};

export default App;
