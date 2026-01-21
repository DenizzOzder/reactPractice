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
  drawer: false,
  total: 0,
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
      calculateTotal();
    },
    clearCart: (state) => {
      state.cartItems = [];
      calculateTotal();
    },
    setDrawer: (state) => {
      state.drawer = !state.drawer;
    },
    calculateTotal: (state) => {
      state.cartItems &&
        state.cartItems.map((item) => {
          state.total += item.price * item.count;
        });
    },
  },
});
export const { addToCart, setDrawer, calculateTotal } = cartSlice.actions;

export default cartSlice.reducer;
