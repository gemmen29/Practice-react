import React, { useState, useRef } from "react";
import styles from "./AddUserForm.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import MyModal from "../../UI/Modal/MyModal";
import ErrorModal from "../../UI/ErrorModal/ErrorModal";

const AddForm = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  // const modalRef = useRef();

  // const [errorMessage, setErrorMessage] = useState("");
  const [error, setError] = useState();

  const usernameChangeHandler = (e) => {
    setUsername(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setAge(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0) {
      // setErrorMessage("Username and Age is required");
      // modalRef.current.showModal();
      setError({
        title: "Invalid Input",
        message: "Username and Age is required",
      });
      return;
    }
    if (age < 1) {
      // setErrorMessage("Age must be greater than zero");
      // modalRef.current.showModal();
      setError({
        title: "Invalid Age Value",
        message: "Age must be greater than zero",
      });
      return;
    }
    const user = {
      id: Math.random(),
      username: username,
      age: +age,
    };
    props.addNewUser(user);

    setUsername("");
    setAge("");
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className={styles["control-container"]}>
          <label className="fw-bold pb-1" htmlFor="username">
            Username
          </label>
          <input
            className="form-control"
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={usernameChangeHandler}
          />
        </div>
        <div className={styles["control-container"]}>
          <label className="fw-bold pb-1" htmlFor="age">
            Age (Years)
          </label>
          <input
            className="form-control"
            type="number"
            id="age"
            name="age"
            value={age}
            onChange={ageChangeHandler}
          />
        </div>
        <div className={styles["control-container"]}>
          <button type="submit" className="btn btn-primary">
            Add User
          </button>
        </div>
      </form>
      {/* <MyModal ref={modalRef} message={errorMessage} /> */}
      {error && (
        <ErrorModal
          onConfirm={errorHandler}
          title={error.title}
          message={error.message}
        />
      )}
    </div>
  );
};

export default AddForm;
