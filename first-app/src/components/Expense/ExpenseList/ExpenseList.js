import React from "react";
import "./ExpenseList.css";
import ExpenseItem from "../ExpenseItem/ExpenseItem";

const ExpenseList = (props) => {
  if (props.expenseList.length === 0) {
    return <h2 className="no-expense">No Expenses this year</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.expenseList.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
