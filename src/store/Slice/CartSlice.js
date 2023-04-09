import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  quantity: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    AddCart: (state, action) => {
      const findData = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (findData >= 0) {
        state.cart[findData].quantity += 1;
      } else {
        const setData = { ...action.payload, quantity: 1 };
        state.cart.push(setData);
      }
    },
  },
});

export const { AddCart } = cartSlice.actions;
export default cartSlice.reducer;
