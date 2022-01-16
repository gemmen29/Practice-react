import { createSlice } from "@reduxjs/toolkit";

const initialState = { isVisible: false };

const cartVisibleSlice = createSlice({
  name: "cartVisible",
  initialState,
  reducers: {
    toggle(state) {
      state.isVisible = !state.isVisible;
    },
  },
});

export const cartVisibleActions = cartVisibleSlice.actions;

export default cartVisibleSlice;
