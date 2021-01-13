import { fireEvent, render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import React from "react";
import { Provider } from 'react-redux';
import { Router } from "react-router-dom";
import { createStore } from "redux";
import * as ingredientsActions from "../state/ingredients/actions";
import { ingredientsSlice } from "../state/ingredients/ingredientsSlice";
import * as pizzaActions from "../state/pizza/actions";
import { PizzaOrderBuilderPage } from "./PizzaOrderBuilderPage";

jest.mock("./PizzaOrderForm", () => ({
  PizzaOrderForm: ({ onPizzaOrderCreated }) => (
    <button
      onClick={() =>
        onPizzaOrderCreated({
          cheese: ["Dorblue"],
          dough: "",
          meat: ["Pepperoni"],
          price: 308,
          sauce: "",
          size: "35",
          vegetables: [],
        })
      }
    >
      Save
    </button>
  ),
}));

describe("PizzaOrderBuilderPage", () => {
  it.skip("renders correctly", () => {
    const getIsLoading = jest.fn();
    getIsLoading.mockReturnValue(false);
    const store = createStore(ingredientsSlice, { pending: true, error: null, data: null });
    const ingredients = [
      {
        id: "qwoqa1Jx",
        name: "Tomatoes",
        slug: "Tomatoes",
        price: 29,
        category: "vegetables",
        image: "Tomatoes.blob",
      }];
      const action = ingredientsActions.ingredientsSuccess(ingredients);
      store.dispatch(action);
    const { getByText } = render(
      <Provider store={store}>
        <PizzaOrderBuilderPage />
      </Provider>
    );
    expect(getByText("Order Pizza Form")).toBeInTheDocument();
  });

  describe(".onPizzaOrderChange", () => {
    it.skip("sets pizza value in the context", () => {
      const getIsLoading = jest.fn((state) => state.ingredients.pending);
      getIsLoading.mockReturnValue(false);
      const mockSetPizzaOrder = jest.fn();
      const store = createStore(pizzaOrder, { status: {} });
      const pizzaOrder = {
        cheese: ["Dorblue"],
        dough: "",
        meat: ["Pepperoni"],
        price: 308,
        sauce: "",
        size: "35",
        vegetables: [],
      };
        const action = pizzaActions.setPizzaOrder(pizzaOrder);
        store.dispatch(action);
        const actual = store.getState();
      const { getByText } = render(
        <Provider store={store}>
          <PizzaOrderBuilderPage />
        </Provider>
      );
      const expected = {
        cheese: ["Dorblue"],
        dough: "",
        meat: ["Pepperoni"],
        price: 308,
        sauce: "",
        size: "35",
        vegetables: [],
      };
      expect(actual).toEqual(expected);
    });
    it.skip("navigates to `/order-preview`", () => {
      const history = createMemoryHistory();
      const { getByText } = render(
        <Router history={history}>
          <PizzaOrderBuilderPage
            usePizzaHook={() => ({
              setPizzaOrder: () => {},
            })}
          />
        </Router>
      );
      fireEvent.click(getByText("Save"));
      expect(history.location.pathname).toEqual("/order-preview");
    });
  });
});
