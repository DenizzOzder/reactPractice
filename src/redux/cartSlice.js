import { createSlice } from "@reduxjs/toolkit";
const getFromLocalStorage = () => {
  try {
    const serializedCart = localStorage.getItem("cartItems");
    if (serializedCart === null) {
      return [];
    }
    return JSON.parse(serializedCart);
  } catch (e) {
    console.error("Could not read cart from localStorage", e);
    return [];
  }
};
const initialState = {
  cartItems: getFromLocalStorage(),
};

const writeToLocalStorage = (cartItems) => {
  try {
    const serializedCart = JSON.stringify(cartItems);
    localStorage.setItem("cartItems", serializedCart);
  } catch (e) {
    console.error("Could not write cart to localStorage", e);
  }
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const findItem =
        state.cartItems &&
        state.cartItems.find((item) => item.id === action.payload.id);
      if (findItem) {
        // Daha önceden eklenmiş
        findItem.count += action.payload.count;
        writeToLocalStorage(state.cartItems);
      } else {
        state.cartItems = [...state.cartItems, action.payload];
        writeToLocalStorage(state.cartItems);
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});
export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
