import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./Slice/CartSlice";

const store = configureStore({
  reducer: {
    cartData: CartSlice,
  },
});

export default store;
