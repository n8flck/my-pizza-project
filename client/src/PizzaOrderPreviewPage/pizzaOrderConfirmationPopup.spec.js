import { MemoryRouter } from "react-router-dom";
const {
  default: PizzaOrderConfirmationPopup,
} = require("./PizzaOrderConfirmationPopup");
const { render, fireEvent } = require("@testing-library/react");

const mockHistoryPush = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe("PizzaOrderConfirmationPopup", () => {
  it("renders correctly with every ingredient checked", () => {
    const { getByText } = render(
      <MemoryRouter>
        <PizzaOrderConfirmationPopup
          pizzaOrder={{
            cheese: ["Cheddar"],
            dough: "Thin",
            meat: ["Pepperoni"],
            price: 250,
            sauce: "White",
            size: "35",
            vegetables: ["Mushrooms"],
          }}
        />
      </MemoryRouter>
    );
    expect(getByText("Pizza Size: 35cm")).toBeInTheDocument();
    expect(getByText("Pizza Dough: Thin")).toBeInTheDocument();
    expect(getByText("Pizza Sauce: White")).toBeInTheDocument();
    expect(getByText("Cheddar")).toBeInTheDocument();
    expect(getByText("Mushrooms")).toBeInTheDocument();
    expect(getByText("Pepperoni")).toBeInTheDocument();
  });

  describe("renders correctly with non ingredients checked", () => {
    it("renders correctly", () => {
      const { getByText } = render(
        <MemoryRouter>
          <PizzaOrderConfirmationPopup
            pizzaOrder={{
              cheese: [],
              dough: "",
              meat: [],
              price: 200,
              sauce: "",
              size: "",
              vegetables: [],
            }}
          />
        </MemoryRouter>
      );
      expect(getByText("Pizza Size: N/A")).toBeInTheDocument();
      expect(getByText("Pizza Dough: N/A")).toBeInTheDocument();
      expect(getByText("Pizza Sauce: N/A")).toBeInTheDocument();
      expect(getByText("Pizza Cheese: N/A")).toBeInTheDocument();
      expect(getByText("Vegetables: N/A")).toBeInTheDocument();
      expect(getByText("Meat: N/A")).toBeInTheDocument();
    });
  });

  describe("on Close button click", () => {
    it("Redirects to correct URL on click", () => {
      const { getByText } = render(
        <MemoryRouter>
          <PizzaOrderConfirmationPopup
            pizzaOrder={{
              cheese: ["Cheddar"],
              dough: "Thin",
              meat: ["Pepperoni"],
              price: 250,
              sauce: "White",
              size: "35",
              vegetables: ["Mushrooms"],
            }}
          />
        </MemoryRouter>
      );
      fireEvent.click(getByText("Close"));
      expect(mockHistoryPush).toHaveBeenCalledWith("/order-builder");
    });
  });
});
