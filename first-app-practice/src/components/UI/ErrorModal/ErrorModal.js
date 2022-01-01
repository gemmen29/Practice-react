import React from "react";
import styles from "./ErrorModal.module.css";
import Card from "../Card/Card";

const ErrorModal = (props) => {
  return (
    <div>
      <div className={styles.backdrop} onClick={props.onConfirm} />
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          <button className="btn btn-primary" onClick={props.onConfirm}>
            Okay
          </button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
