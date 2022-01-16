import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../slices/todoSlice";

const store = configureStore({
  reducer: todoSlice.reducer,
});

export default store;
