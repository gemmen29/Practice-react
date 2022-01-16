import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  products: [
    {
      id: uuidv4(),
      price: 10,
      quantity: 1,
      name: "Product 1",
      description: "This is product 1 description",
    },
    {
      id: uuidv4(),
      price: 15,
      quantity: 1,
      name: "Product 2",
      description: "This is product 2 description",
    },
  ],
};
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export const cartActions = productsSlice.actions;

export default productsSlice;
