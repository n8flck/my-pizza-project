import { createStore, combineReducers } from "redux";
import { ingredientsReducer } from "./state/ingredients/ingredientsReducer";
import { pizzaOrderReducer } from "./state/pizza/pizzaOrderReducer";
import { authReducer } from "./state/auth/authReducer";
import { compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      })
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

export const store = createStore(
  combineReducers({
    ingredients: ingredientsReducer,
    pizzaOrder: pizzaOrderReducer,
    auth: authReducer,
  }),
  enhancer
);
