import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "authentication",
  initialState: {
    isAuthenticated: false,
    data: {},
  },
  reducers: {
    success: (state, action) => {
      state.isAuthenticated = !state.isAuthenticated;
      state.data = action.payload;
    },
    unauthenticated: (state) => {
      return state;
    },
    error: (state) => {
      return state;
    },
    addDefaultCase: (state) => {
      return state;
    },
  },
});
