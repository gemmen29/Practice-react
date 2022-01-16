const counterReducerDefaultState = { counter: 0, showCounter: true };

const counterReducer = (state = counterReducerDefaultState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "INCREASE":
      return {
        ...state,
        counter: state.counter + action.amount,
      };
    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - 1,
      };
    case "TOGGLE":
      return {
        ...state,
        showCounter: !state.showCounter,
      };
    default:
      return state;
  }
};
export default counterReducer;
