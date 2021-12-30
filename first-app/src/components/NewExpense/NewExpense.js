import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm/ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const startEditing = () => {
    setIsEditing(true);
  };
  const endEditing = () => {
    setIsEditing(false);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);

    endEditing();
  };

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditing}>Add New Expense</button>}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onClose={endEditing}
        />
      )}
    </div>
  );
};

export default NewExpense;
