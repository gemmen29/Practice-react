import React from "react";
import PropTypes from "prop-types";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm/ExpenseForm";

const NewExpense = () => {
  return (
    <div className="new-expense">
      <ExpenseForm />
    </div>
  );
};

NewExpense.propTypes = {};

NewExpense.defaultProps = {};

export default NewExpense;
