import React from "react";
import styles from "./DisplaySingleUser.module.css";

const DisplaySingleUser = (props) => (
  <li
    className={`${styles["user-item"]} fw-bold p-2`}
  >{`${props.user.username} (${props.user.age} years old)`}</li>
);

export default DisplaySingleUser;
