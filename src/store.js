import { configureStore } from '@reduxjs/toolkit'
import authReducer from './apps/auth/authSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
})