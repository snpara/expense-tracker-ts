import { useState } from "react";

import { ExpenseItemsProps } from "./ExpenseItems";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItems from "./ExpenseItems";
import ExpenseCharts from "./ExpenseCharts";

import "./ExpenseItemList.css";

const ExpenseItemList: React.FC<ExpenseItemsProps> = (props) => {
  const [filteredYear, setFilteredYear] = useState("2023");
  const filterChangeHandler = (selectedYear: string) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expense-item-list">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseCharts items={filteredExpenses} />
        <ExpenseItems items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default ExpenseItemList;
