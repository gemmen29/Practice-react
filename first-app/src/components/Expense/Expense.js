import React, { useState } from "react";
import "./Expense.css";
import Card from "../Card/Card";
import ExpenseList from "./ExpenseList/ExpenseList";
import ExpenseFilter from "./ExpenseFilter/ExpenseFilter";
import ExpensesChart from "./ExpensesChart/ExpensesChart";

const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <Card className="Expense">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpenseList expenseList={filteredExpenses} />
    </Card>
  );
};

export default Expense;
