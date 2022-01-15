const counterReducerDefaultState = { counter: 0 };

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
    default:
      return state;
  }
};
export default counterReducer;
