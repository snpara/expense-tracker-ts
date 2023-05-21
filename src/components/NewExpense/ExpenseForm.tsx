import { ChangeEvent, useState } from "react";
import { ExpenseData } from "../Expenses/ExpenseItem";

import "./ExpenseForm.css";

type saveExpenseDataHandlerFunction = (arg0: ExpenseData) => void;
type stopEditingHandlerFunction = () => void;

interface ExpenseFormProps {
  onSaveExpenseData: saveExpenseDataHandlerFunction;
  onCancel: stopEditingHandlerFunction;
}

const ExpenseForm: React.FC<ExpenseFormProps> = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    const expenseData: ExpenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
      id: "",
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2023-01-01"
            max="2025-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
