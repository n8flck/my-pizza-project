import { fireEvent, render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import React from "react";
import { Provider } from 'react-redux'
import { MemoryRouter, Router } from "react-router-dom";
import { PizzaOrderBuilderPage } from "./PizzaOrderBuilderPage";
import { createStore, combineReducers } from "redux";
import { pizzaOrderReducer } from "../state/pizza/pizzaOrderReducer";
import { ingredientsReducer } from "../state/ingredients/ingredientsReducer";
import * as ingredientsActions from "../state/ingredients/actions";
import * as pizzaActions from "../state/pizza/actions";
// import { render, fireEvent, screen } from "./test-utils";

// const store = createStore(
//   ingredientsReducer,
//   { pending: true, error: null, data: null },
//   pizzaOrderReducer,
//   { state: {} }
// );


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
  it("renders correctly", () => {
    const getIsLoading = jest.fn();
    getIsLoading.mockReturnValue(false);
    const store = createStore(ingredientsReducer, { pending: true, error: null, data: null });
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
      const actual = store.getState();
    const { getByText } = render(
      <Provider store={store}>
        <PizzaOrderBuilderPage />
      </Provider>
    );
    expect(getByText("Order Pizza Form")).toBeInTheDocument();
  });

  describe(".onPizzaOrderChange", () => {
    it("sets pizza value in the context", () => {
      const getIsLoading = jest.fn((state) => state.ingredients.pending);
      getIsLoading.mockReturnValue(false);
      const mockSetPizzaOrder = jest.fn();
      const store = createStore(pizzaOrderReducer, { status: {} });
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
    // it("navigates to `/order-preview`", () => {
    //   const history = createMemoryHistory();
    //   const { getByText } = render(
    //     <Router history={history}>
    //       <PizzaOrderBuilderPage
    //         usePizzaHook={() => ({
    //           setPizzaOrder: () => {},
    //         })}
    //       />
    //     </Router>
    //   );
    //   fireEvent.click(getByText("Save"));
    //   expect(history.location.pathname).toEqual("/order-preview");
    // });
  });
});
