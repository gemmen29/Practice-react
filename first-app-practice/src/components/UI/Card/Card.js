import React from "react";
import styles from "./Card.module.css";

const Card = (props) => {
  const classes = props.className;
  return (
    <div
      className={`${classes} ${styles["card-shadow"]} container bg-light rounded py-2`}
    >
      {props.children}
    </div>
  );
};

export default Card;
