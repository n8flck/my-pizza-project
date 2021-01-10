import { createSlice } from "@reduxjs/toolkit";
import { fetchIngredients } from "./thunk";

export const ingredientsSlice = createSlice({
  name: "ingredients",
  initialState: {
    loading: true,
    error: null,
    data: [],
  },
  reducers: {},
  extraReducers: {
    [fetchIngredients.pending]: (state) => {
      state.loading = true;
      state.error = false;
      state.data = [];
    },
    [fetchIngredients.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.data = [];
    },
    [fetchIngredients.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = false;
      state.data = action.payload;
    },
  },
});
