import React from "react";
import styles from "./ExpenseItem.module.css";

import Card from "../../Card/Card";
import ExpenseDate from "../ExpenseDate/ExpenseDate";

const ExpenseItem = (props) => (
  <Card className={styles.ExpenseItem}>
    <ExpenseDate date={props.date} />
    <div className={styles.ExpenseItem__description}>
      <h2>{props.title}</h2>
      <div className={styles.ExpenseItem__price}>${props.amount}</div>
    </div>
  </Card>
);

export default ExpenseItem;
