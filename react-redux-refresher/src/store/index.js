import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../slices/cartSlice";
import cartVisibleSlice from "../slices/cartVisibleSlice";

const store = configureStore({
  reducer: { cartVisible: cartVisibleSlice.reducer, cart: cartSlice.reducer },
});

export default store;
