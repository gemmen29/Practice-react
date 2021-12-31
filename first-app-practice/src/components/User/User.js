import React, { useState } from "react";
import "./User.module.css";
import AddUserForm from "./AddUserForm/AddUserForm";
import DisplayUsers from "./DisplayUsers/DisplayUsers";

const usersDefault = [
  { id: Math.random(), username: "George", age: "25" },
  { id: Math.random(), username: "Shady", age: "24" },
  { id: Math.random(), username: "Kerolos", age: "23" },
];
const User = () => {
  const [users, setUsers] = useState(usersDefault);

  const addNewUserHandler = (user) => {
    setUsers((previousUsers) => [user, ...previousUsers]);
  };
  return (
    <div className="bg-dark py-5 min-vh-100">
      <div className="container bg-light rounded py-2">
        <AddUserForm addNewUser={addNewUserHandler} />
      </div>
      <div className="container bg-light rounded py-2 mt-4">
        <DisplayUsers users={users} />
      </div>
    </div>
  );
};

export default User;
