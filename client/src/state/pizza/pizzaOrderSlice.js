import { createSlice } from "@reduxjs/toolkit";

export const pizzaOrderSlice = createSlice({
  name: "pizzaOrder",
  initialState: {},
  reducers: {
    set_pizzaOrder: (state, action) => {
      state.data = action.payload;
    },
    addDefaultCase: (state) => {
      return state;
    },
  },
});
