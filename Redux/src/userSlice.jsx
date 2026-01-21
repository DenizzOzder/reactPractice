import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// Starter Value --> Stateler burada
const initialState = {
  users: [],
  loading: false,
};
//HTTP İSTEĞIMIZ Atıp veriyi getiriyoruz.
export const getAllUsers = createAsyncThunk("users", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data; // Veri dönüyor fakat daha Statenin içine eklemedik
});

// Creating Method --> Reducers içerisinde metotları tanımlıyoruz
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // HTTP İSTEĞI OLMAYAN METOTLAR
  },

  extraReducers: (builder) => {
    // HTTP İSTEĞI OLAN METOTLAR
    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      state.users = action.payload; // Payload ile veriyi state e ekliyoruz
      state.loading = false; // Yüklenme bitti
    });
  },
});
export default userSlice.reducer;
