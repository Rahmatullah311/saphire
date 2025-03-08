import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiEndpoint } from "../../utils/appPreferences";
import { toast } from "react-toastify";

export const requestLogin = createAsyncThunk(
  "auth/requestLogin",
  async (loginCredentials, { rejectWithValue }) => {
    try {
      const response = await fetch(`${apiEndpoint}api/tokenshield/token/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginCredentials),
      });
      console.log('response', response)
      const data = await response.json();
      if (!response.ok) {
        console.log('data',data)
        Object.keys(data).forEach((key) => {
          if (data[key]) {
            const message = Array.isArray(data[key]) ? data[key].join(", ") : data[key]; 
            toast.error(
              `${key.charAt(0).toUpperCase() + key.slice(1)}: ${message}}`
            );
          }
        });
        throw new Error(JSON.stringify(data));
      }
      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.message);
    }
  }
);

export const requestRegister = createAsyncThunk(
  "auth/register",
  async (userCredentials, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${apiEndpoint}api/tokenshield/user/register/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userCredentials),
        }
      );
      const data = await response.json();
      if (!response.ok) {
        Object.keys(data).forEach((key) => {
          if (data[key]) {
            toast.error(
              `${key.charAt(0).toUpperCase() + key.slice(1)}: ${data[
                key
              ].join()}`
            );
          }
        });
        throw new Error(JSON.stringify(data));
      }
      return data;
    } catch (error) {
      console.log("error", error);
      return rejectWithValue(error);
    }
  }
);

export const refreshToken = createAsyncThunk(
  "auth/refreshToken",
  async (_, { getState, rejectWithValue }) => {
    try {
      const state = getState();
      const refreshToken = state.auth.refreshToken
        ? state.auth.refreshToken
        : "";
      console.log("refreshToken", refreshToken);

      const response = await fetch(
        `${apiEndpoint}api/tokenshield/token/refresh/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ refresh: refreshToken }),
        }
      );
      const data = response.json();
      console.log("response from refresh token request", response);
      if (!response.ok) {
        console.error("data", data);
        throw new Error(
          `Token refresh request failed, Errors: ${JSON.stringify(data)}`
        );
      }
      return data;
    } catch (error) {
      console.log("error", error);
      return rejectWithValue(error);
    }
  }
);

const tokenshieldAccessToken = localStorage.getItem("tokenshieldAccessToken");
const tokenshieldRefreshToken = localStorage.getItem("tokenshieldRefreshToken");
export const initialState = {
  isLoading: false,
  accessToken: tokenshieldAccessToken ? tokenshieldAccessToken : "",
  refreshToken: tokenshieldRefreshToken ? tokenshieldRefreshToken : "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(requestLogin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(requestLogin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.accessToken = action.payload.access;
        state.refreshToken = action.payload.refresh;
        localStorage.setItem("tokenshieldRefreshToken", action.payload.refresh);
        localStorage.setItem("tokenshieldAccessToken", action.payload.access);
      })
      .addCase(requestLogin.rejected, (state, action) => {
        state.isLoading = false;
        toast.error(action.payload)
        console.log('action.payload', action.payload)
      })
      .addCase(requestRegister.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(requestRegister.fulfilled, (state, action) => {
        state.accessToken = action.payload.access;
        state.refreshToken = action.payload.refresh;
        localStorage.setItem("tokenshieldRefreshToken", action.payload.refresh);
        localStorage.setItem("tokenshieldAccessToken", action.payload.access);
        state.isLoading = false;
      })
      .addCase(requestRegister.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(refreshToken.pending, (state) => {
        console.log("token refresh request pending");
        state.isLoading = true;
      })
      .addCase(refreshToken.fulfilled, (state, action) => {
        console.log("token refresh request fulfilled");
        state.accessToken = action.payload.access;
        localStorage.setItem("tokenshieldAccessToken", action.payload.access);
        state.isLoading = false;
      })
      .addCase(refreshToken.rejected, (state) => {
        console.log("token refresh request rejected");
        state.isLoading = false;
      });
  },
});

export default authSlice.reducer;
