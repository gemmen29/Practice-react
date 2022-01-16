import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [], totalQuantity: 0 };
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity += 1;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          name: newItem.name,
        });
        return;
      }
      existingItem.quantity++;
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity -= 1;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
        return;
      }
      existingItem.quantity--;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
