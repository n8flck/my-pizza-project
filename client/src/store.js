import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { authSlice } from "./state/auth/authSlice";
import { ingredientsSlice } from "./state/ingredients/ingredientsSlice";
import { pizzaOrderSlice } from "./state/pizza/pizzaOrderSlice";

const reducer = {
  ingredients: ingredientsSlice.reducer,
  pizzaOrder: pizzaOrderSlice.reducer,
  auth: authSlice.reducer,
};

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== "production",
  enhancers: [applyMiddleware(thunk)],
});
