import "./ExpensesFilter.css";
import { ChangeEvent } from "react";

type dropdownChangeHandlerFunction = (arg0: string) => void;

interface ExpenseFilterProps {
  onChangeFilter: dropdownChangeHandlerFunction;
  selected: string;
}

const ExpensesFilter: React.FC<ExpenseFilterProps> = (props) => {
  const dropdownChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
