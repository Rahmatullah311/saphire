import { configureStore } from "@reduxjs/toolkit";
import authReducer from './auth/authSlice'
import productReducer from "./products/productSlice";
import { productApi } from "./products/productSlice";
import appReducer from '../appSlice'

const store = configureStore({
  reducer: {
    app: appReducer,
    auth: authReducer,
    product: productReducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productApi.middleware)
});

export default store;
