import React, { useState } from "react";
import "./Expense.css";
import Card from "../Card/Card";
import ExpenseItem from "./ExpenseItem/ExpenseItem";
import ExpenseFilter from "./ExpenseFilter/ExpenseFilter";

const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const [expenses, setExpenses] = useState(props.items);

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    setExpenses(props.items);
    setExpenses((preExpenses) =>
      preExpenses.filter(
        (expense) => expense.date.getFullYear() === parseInt(selectedYear)
      )
    );
  };
  return (
    <Card className="Expense">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
        />
      ))}
    </Card>
  );
};

export default Expense;
