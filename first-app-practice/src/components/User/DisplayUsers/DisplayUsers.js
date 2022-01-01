import React from "react";
import styles from "./DisplayUsers.module.css";
import DisplaySingleUser from "./DisplaySingleUser/DisplaySingleUser";

const DisplayUsers = (props) => (
  <ul className={styles.users}>
    {props.users.map((user) => (
      <DisplaySingleUser key={user.id} user={user} />
    ))}
  </ul>
);

export default DisplayUsers;
