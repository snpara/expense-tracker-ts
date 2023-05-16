import { useState } from "react";

import ExpenseItem, { ExpenseData } from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

import "./ExpenseItemList.css";

interface ExpenseItemListProps {
  items: ExpenseData[];
}

const ExpenseItemList: React.FC<ExpenseItemListProps> = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");
  const filterChangeHandler = (selectedYear: string) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expense-item-list">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {props.items.map((expense) => (
          <ExpenseItem
            date={expense.date}
            title={expense.title}
            amount={expense.amount}
            id={expense.id}
          />
        ))}
      </Card>
    </div>
  );
};

export default ExpenseItemList;
