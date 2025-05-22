import { createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiEndpointComplete } from "../../utils/appPreferences";

export const productApi = createApi({
  reducerPath: "productApi",
  tagTypes: ["product"],
  baseQuery: fetchBaseQuery({
    baseUrl: apiEndpointComplete,
  }),
  endpoints: (build) => ({
    getProducts: build.query({
      query: () => {
        
        return "product"
      },
    }),
  }),
});

export const initialState = {
  isLoading: false,
  error: null,
  data: {},
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export const { useGetProductsQuery } = productApi

export default productSlice.reducer;
