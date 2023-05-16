import ExpenseItemList from "./components/Expenses/ExpenseItemList";
import NewExpense from "./components/NewExpense/NewExpense";
import { ExpenseData } from "./components/Expenses/ExpenseItem";

const App: React.FC = () => {
  const expenses: ExpenseData[] = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: "94.12",
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "New TV",
      amount: "799.49",
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: "294.67",
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: "450",
      date: new Date(2021, 5, 12),
    },
  ];

  const addExpenseHandler = (expenses: ExpenseData) => {
    console.log("In App.tsx");
    console.log(expenses);
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseItemList items={expenses} />
    </div>
  );
};

export default App;
