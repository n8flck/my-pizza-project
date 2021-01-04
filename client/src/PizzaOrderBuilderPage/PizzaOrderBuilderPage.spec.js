import { fireEvent, render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import React from "react";
import { MemoryRouter, Router } from "react-router-dom";
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
  it("renders correctly", () => {
    const { getByText } = render(
      <MemoryRouter>
        <PizzaOrderBuilderPage
          usePizzaHook={() => ({
            setPizzaOrder: () => {},
          })}
        />
      </MemoryRouter>
    );
    expect(getByText("Order Pizza Form")).toBeInTheDocument();
  });

  describe(".onPizzaOrderChange", () => {
    it("sets pizza value in the context", () => {
      const mockSetPizzaOrder = jest.fn();
      const { getByText } = render(
        <MemoryRouter>
          <PizzaOrderBuilderPage
            usePizzaHook={() => ({
              setPizzaOrder: mockSetPizzaOrder,
            })}
          />
        </MemoryRouter>
      );
      fireEvent.click(getByText("Save"));
      expect(mockSetPizzaOrder).toBeCalledWith({
        cheese: ["Dorblue"],
        dough: "",
        meat: ["Pepperoni"],
        price: 308,
        sauce: "",
        size: "35",
        vegetables: [],
      });
    });
    it("navigates to `/order-preview`", () => {
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
