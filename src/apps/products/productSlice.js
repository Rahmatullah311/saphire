import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk(
  "product/getProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/product/", {
        method: "GET",
        timeout: 3000,
      });
      return {
        data: response.data
      };
    } catch (error) {
      console.log("product/getProducts, Error: ", error);
      return rejectWithValue(error);
    }
  }
);

export const initialState = {
  isLoading: false,
  error: null,
  data: {},
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload?.data || {};
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.message || null;
      });
  },
});

export default productSlice.reducer;
