import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  selectedProduct: {},
  loading: false,
};
const base_URL = "https://fakestoreapi.com";
export const getAllProducts = createAsyncThunk("getAllProdducts", async () => {
  const response = await axios.get(`${base_URL}/products`);
  return response.data;
});
export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Ürünler henüz gelmediyse loading true olacak
    builder.addCase(getAllProducts.pending, (state) => {
      state.loading = true;
    });
    // Ürünler geldikten sonra yaşanacaklar.
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });
  },
});
export const {} = productSlice.actions;

export default productSlice.reducer;
