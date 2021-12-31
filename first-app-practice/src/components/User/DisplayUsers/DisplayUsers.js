import React from "react";
import styles from "./DisplayUsers.module.css";

const DisplayUsers = (props) => (
  <ul className={styles.users}>
    {props.users.map((user) => (
      <li
        key={user.id}
        className={`${styles["user-item"]} fw-bold p-2`}
      >{`${user.username} (${user.age} years old)`}</li>
    ))}
  </ul>
);

export default DisplayUsers;
