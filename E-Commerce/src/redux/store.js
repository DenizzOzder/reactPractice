import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import productSlice from "./productSlice";
import cartSlice from "./cartSlice";

export const store = configureStore({
  reducer: {
    app: appSlice,
    products: productSlice,
    cart: cartSlice,
  },
});
