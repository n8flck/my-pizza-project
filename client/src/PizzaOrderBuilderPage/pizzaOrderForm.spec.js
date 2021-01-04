import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "../state/auth/authReducer";
import { ingredientsReducer } from "../state/ingredients/ingredientsReducer";
import { pizzaOrderReducer } from "../state/pizza/pizzaOrderReducer";
const { waitFor } = require("@testing-library/react");
const { render, fireEvent } = require("@testing-library/react");
const { act } = require("react-dom/test-utils");
const { PizzaOrderForm } = require("./PizzaOrderForm");

function createTestStore() {
  const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        })
      : compose;

  const enhancer = composeEnhancers(applyMiddleware(thunk));

  const store = createStore(
    combineReducers({
      ingredients: ingredientsReducer,
      pizzaOrder: pizzaOrderReducer,
      auth: authReducer,
    }),
    enhancer
  );
  return store;
}

describe("PizzaOrderForm", () => {
  let store;
  beforeEach(() => {
    store = createTestStore();
  });

  it("renders correctly", () => {
    const { getByText } = render(
      <Provider store={store}>
        <MemoryRouter>
          <PizzaOrderForm />
        </MemoryRouter>
      </Provider>
    );
    expect(getByText("Choose size")).toBeInTheDocument();
  });

  describe("with all additions unchecked", () => {
    it("shows minimum price", async () => {
      const { getByText } = render(
        <MemoryRouter>
          <Provider store={store}>
            <PizzaOrderForm />
          </Provider>
        </MemoryRouter>
      );
      await waitFor(() => {
        expect(getByText("Final Price 200")).toBeInTheDocument();
      });
    });
  });

  describe("with all additions checked", () => {
    it("shows maximum price", async () => {
      const { getByText } = render(
        <MemoryRouter>
          <Provider store={store}>
            <PizzaOrderForm />
          </Provider>
        </MemoryRouter>
      );
      await fireEvent.click(getByText("35cm"));
      await fireEvent.click(getByText("Mozzarella"));
      await fireEvent.click(getByText("Cheddar"));
      await fireEvent.click(getByText("Dorblue"));
      await fireEvent.click(getByText("Tomatoes"));
      await fireEvent.click(getByText("Mushrooms"));
      await fireEvent.click(getByText("Pepper"));
      await fireEvent.click(getByText("Bacon"));
      await fireEvent.click(getByText("Pepperoni"));
      await fireEvent.click(getByText("Ham"));

      await waitFor(() => {
        expect(getByText("Final Price 511")).toBeInTheDocument();
      });
    });
  });

  describe("on pizzaOrder submit", () => {
    it("passes pizzaOrder confirmation popUp", async () => {
      const onPizzaOrderSubmit = jest.fn();
      const { getByText } = render(
        <MemoryRouter>
          <Provider store={store}>
            <PizzaOrderForm onPizzaOrderCreated={onPizzaOrderSubmit} />
          </Provider>
        </MemoryRouter>
      );
      fireEvent.click(getByText("Dorblue"));
      fireEvent.click(getByText("Pepperoni"));
      fireEvent.click(getByText("35cm"));
      await act(async () => {
        fireEvent.click(getByText("Final Price 308"));
      });
      expect(onPizzaOrderSubmit).toBeCalledWith({
        cheese: ["Dorblue"],
        dough: "Thin",
        meat: ["Pepperoni"],
        sauce: "Tomato",
        size: "35",
        vegetables: [],
        price: 308,
      });
    });
  });
});
