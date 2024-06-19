import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import users from "../../data/users.json";

const initialState = {
  currentUser: null,
  error: null,
  status: "idle",
};

export const loginUser = createAsyncThunk(
  "auth/login",
  async ({ email, password }, thunkAPI) => {
    try {
      const user = users.find(
        (u) => u.email === email && u.password === password
      );
      if (user !== undefined) {
        return user;
      } else {
        throw new Error("Invalid email or password");
      }
    } catch (error) {
      throw new Error("An error occurred");
    }
  }
);

export const logoutUser = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      // Perform any logout logic here
      return true; // Simulate successful logout
    } catch (error) {
      throw new Error("An error occurred during logout");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearAuthDetails: (state) => {
      state.currentUser = null;
      state.error = null;
      state.isLoading = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.currentUser = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.currentUser = null;
        state.status = "idle";
        state.error = null;
      });
  },
});

export const { clearAuthDetails } = authSlice.actions;
export default authSlice.reducer;
