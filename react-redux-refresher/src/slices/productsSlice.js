import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  products: [
    { id: uuidv4(), price: 10, quantity: 1, name: "Product 1" },
    { id: uuidv4(), price: 10, quantity: 1, name: "Product 2" },
  ],
};
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export const cartActions = cartSlice.actions;

export default cartSlice;
