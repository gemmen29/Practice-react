import React, { useState } from "react";
import AddUserForm from "./AddUserForm/AddUserForm";
import DisplayUsers from "./DisplayUsers/DisplayUsers";

import Card from "../UI/Card/Card";
import Container from "../UI/Container/Container";

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
    <Container>
      <Card>
        <AddUserForm addNewUser={addNewUserHandler} />
      </Card>
      <Card className="mt-5">
        <DisplayUsers users={users} />
      </Card>
    </Container>
  );
};

export default User;
