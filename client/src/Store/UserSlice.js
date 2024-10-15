import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const logoutUser = createAsyncThunk("user/logoutUser", async () => {
  console.log("logging out user");
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  return null;
});

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (userDetails) => {
    const request = await axios.post(
      "http://localhost:3000/api/v1/auth/signup",
      userDetails
    );
    const response = await request.data.data;
    localStorage.setItem("token", response.token);
    return response;
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (userCredentials, { rejectWithValue }) => {
    try {
      const request = await axios.post(
        "http://localhost:3000/api/v1/auth/login",
        userCredentials
      );
      const response = request.data;
      console.log("response", response);
      localStorage.setItem("token", response.token);
      return response;
    } catch (error) {
      // Return a rejected action with a custom error message
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    user: null,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(logoutUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
