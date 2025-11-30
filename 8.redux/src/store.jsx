import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice.jsx";
import userReducer from "./userSlice.jsx";

export const store = configureStore({
  reducer: {
    counter: counterReducer, // --> Sayaç için oluşturduğumuz reducer
    user: userReducer, // --> API için oluşturduğumuz reducer
  },
});
