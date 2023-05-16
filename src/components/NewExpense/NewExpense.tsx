import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";
import { ExpenseData } from "../Expenses/ExpenseItem";

type addExpenseHandlerFunction = (arg0: ExpenseData) => void;

interface NewExpenseProps {
  onAddExpense: addExpenseHandlerFunction;
}

const NewExpense: React.FC<NewExpenseProps> = (props) => {
  const saveExpenseDataHandler = (enteredExpanseData: ExpenseData) => {
    const expenseData: ExpenseData = {
      ...enteredExpanseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
