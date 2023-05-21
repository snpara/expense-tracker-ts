import { ExpenseData } from "./ExpenseItem";
import ExpenseItem from "./ExpenseItem";

import "./ExpenseItems.css";

export interface ExpenseItemsProps {
  items: ExpenseData[];
}

const ExpenseItems: React.FC<ExpenseItemsProps> = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expense-items__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expense-items">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
          id={expense.id}
        />
      ))}
    </ul>
  );
};

export default ExpenseItems;
