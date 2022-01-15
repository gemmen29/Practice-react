import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);
  const dispatch = useDispatch();

  const incrementCounterHandler = () => {
    dispatch({ type: "INCREMENT" });
  };

  const increaseCounterHandler = () => {
    dispatch({ type: "INCREASE", amount: 5 });
  };

  const toggleCounterHandler = () => {
    dispatch({ type: "TOGGLE" });
  };
  const decrementCounterHandler = () => {
    dispatch({ type: "DECREMENT" });
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div className={classes.buttons}>
        <button
          onClick={incrementCounterHandler}
          className={!showCounter ? classes.disabled : ""}
          disabled={!showCounter}
        >
          Increment
        </button>
        <button
          onClick={increaseCounterHandler}
          className={!showCounter ? classes.disabled : ""}
          disabled={!showCounter}
        >
          Increase By 5
        </button>
        <button
          onClick={decrementCounterHandler}
          className={!showCounter ? classes.disabled : ""}
          disabled={!showCounter}
        >
          Decrement
        </button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
