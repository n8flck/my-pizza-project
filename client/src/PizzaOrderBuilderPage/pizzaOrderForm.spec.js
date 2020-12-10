const { render, fireEvent } = require("@testing-library/react");
const { act } = require("react-dom/test-utils");
const { PizzaOrderForm } = require("./PizzaOrderForm");

describe("PizzaOrderForm", () => {
  it("renders correctly", () => {
    const { getByText } = render(<PizzaOrderForm />);
    expect(getByText("Choose size")).toBeInTheDocument();
  });

  describe("with all additions unchecked", () => {
    it("shows minimum price", () => {
      const { getByText } = render(<PizzaOrderForm />);
      expect(getByText("Final Price 200")).toBeInTheDocument();
    });
  });

  describe("with all additions checked", () => {
    it("shows maximum price", () => {
      const { getByText } = render(<PizzaOrderForm />);
      fireEvent.click(getByText("35cm"));
      fireEvent.click(getByText("Mozzarella"));
      fireEvent.click(getByText("Cheddar"));
      fireEvent.click(getByText("Dorblue"));
      fireEvent.click(getByText("Tomatoes"));
      fireEvent.click(getByText("Mushrooms"));
      fireEvent.click(getByText("Pepper"));
      fireEvent.click(getByText("Bacon"));
      fireEvent.click(getByText("Pepperoni"));
      fireEvent.click(getByText("Ham"));
      expect(getByText("Final Price 511")).toBeInTheDocument();
    });
  });

  describe("on pizzaOrder submit", () => {
    it("passes pizzaOrder confirmation popUp", async () => {
      const onPizzaOrderSubmit = jest.fn();
      const { getByText } = render(
        <PizzaOrderForm onPizzaOrderCreated={onPizzaOrderSubmit} />
      );
      fireEvent.click(getByText("Dorblue"));
      fireEvent.click(getByText("Pepperoni"));
      fireEvent.click(getByText("35cm"));
      await act(async () => {fireEvent.click(getByText("Final Price 308"));})
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
