import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../slices/counterSlice";

const store = configureStore({
  reducer: counterSlice.reducer,
});

module.export = counterSlice.actions;

export default store;
