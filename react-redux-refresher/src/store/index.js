import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../slices/cartSlice";
import cartVisibleSlice from "../slices/cartVisibleSlice";
import productsSlice from "../slices/productsSlice";

const store = configureStore({
  reducer: {
    cartVisible: cartVisibleSlice.reducer,
    cart: cartSlice.reducer,
    products: productsSlice.reducer,
  },
});

export default store;
