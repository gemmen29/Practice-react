import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../slices/counterSlice";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);
  const dispatch = useDispatch();

  const incrementCounterHandler = () => {
    dispatch(counterActions.increment());
  };

  const increaseCounterHandler = () => {
    dispatch(counterActions.increase(5));
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };
  const decrementCounterHandler = () => {
    dispatch(counterActions.decrement());
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
