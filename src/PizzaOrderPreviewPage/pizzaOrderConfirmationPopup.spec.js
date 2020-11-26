const {
  default: PizzaOrderConfirmationPopup,
} = require("./PizzaOrderConfirmationPopup");
const { render, fireEvent } = require("@testing-library/react");

describe("PizzaOrderConfirmationPopup", () => {
  it("renders correctly with every ingredient checked", () => {
    const setShowPopup = jest.fn();
    const { getByText } = render(
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
        setShowPopup={setShowPopup}
      />
    );
    expect(getByText("Pizza Size: 35")).toBeInTheDocument();
    expect(getByText("Pizza Dough: Thin")).toBeInTheDocument();
    expect(getByText("Pizza Sauce: White")).toBeInTheDocument();
    expect(getByText("Cheddar")).toBeInTheDocument();
    expect(getByText("Mushrooms")).toBeInTheDocument();
    expect(getByText("Pepperoni")).toBeInTheDocument();
  });

  describe("renders correctly with non ingredients checked", () => {
    it("renders correctly", () => {
      const setShowPopup = jest.fn();
      const { getByText } = render(
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
          setShowPopup={setShowPopup}
        />
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
    it("closes popUp when Close button is clicked", () => {
      const showPopUpOnClick = jest.fn();
      const pizzaOrder = jest.fn();
      const { getByText } = render(
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
          setShowPopup={showPopUpOnClick}
        />
      );
      fireEvent.click(getByText("Close"));
      expect(showPopUpOnClick).toBeCalledWith(false);
    });
  });
});
