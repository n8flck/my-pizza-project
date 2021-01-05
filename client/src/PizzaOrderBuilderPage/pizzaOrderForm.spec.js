const { waitFor } = require("@testing-library/react");
const { render, fireEvent } = require("@testing-library/react");
const { act } = require("react-dom/test-utils");
const { PizzaOrderForm } = require("./PizzaOrderForm");

const cheese = [
  {
    id: "HkhoE-aq",
    name: "Mozzarella",
    slug: "Mozzarella",
    price: 29,
    category: "cheese",
    image: "Mozzarella.blob",
  },
  {
    id: "aucPQypg",
    name: "Cheddar",
    slug: "Cheddar",
    price: 29,
    category: "cheese",
    image: "Cheddar.blob",
  },
  {
    id: "b-XkGuO_",
    name: "Dorblue",
    slug: "Dorblue",
    price: 29,
    category: "cheese",
    image: "Dorblue.blob",
  },
];
const meat = [
  {
    id: "QKipugpn",
    name: "Ham",
    slug: "Ham",
    price: 29,
    category: "meat",
    image: "Ham.blob",
  },
  {
    id: "v2I2aU1n",
    name: "Bacon",
    slug: "Bacon",
    price: 29,
    category: "meat",
    image: "Bacon.blob",
  },
  {
    id: "oAlmUWaG",
    name: "Pepperoni",
    slug: "Pepperoni",
    price: 29,
    category: "meat",
    image: "Pepperoni.blob",
  },
];
const vegetables = [
  {
    id: "qwoqa1Jx",
    name: "Tomatoes",
    slug: "Tomatoes",
    price: 29,
    category: "vegetables",
    image: "Tomatoes.blob",
  },
  {
    id: "QejbRCV0",
    name: "Mushrooms",
    slug: "Mushrooms",
    price: 29,
    category: "vegetables",
    image: "Mushrooms.blob",
  },
  {
    id: "ya_FocPe",
    name: "Pepper",
    slug: "Pepper",
    price: 29,
    category: "vegetables",
    image: "Pepper.blob",
  },
];

describe("PizzaOrderForm", () => {
  it("renders correctly", () => {
    const { getByText } = render(<PizzaOrderForm />);
    expect(getByText("Choose size")).toBeInTheDocument();
  });

  describe("with all additions unchecked", () => {
    it("shows minimum price", async () => {
      const onPizzaOrderCreated = jest.fn();
      const { getByText } = render(
        <PizzaOrderForm
          cheese={cheese}
          meat={meat}
          vegetables={vegetables}
          onPizzaOrderCreated={onPizzaOrderCreated}
        />
      );
      await waitFor(() => {
        expect(getByText("Final Price 200")).toBeInTheDocument();
      });
    });
  });

  describe("with all additions checked", () => {
    it("shows maximum price", async () => {
      const onPizzaOrderCreated = jest.fn();
      const { getByText } = render(
        <PizzaOrderForm
          cheese={cheese}
          meat={meat}
          vegetables={vegetables}
          onPizzaOrderCreated={onPizzaOrderCreated}
        />
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
      const onPizzaOrderCreated = jest.fn();
      const { getByText } = render(
        <PizzaOrderForm
          cheese={cheese}
          meat={meat}
          vegetables={vegetables}
          onPizzaOrderCreated={onPizzaOrderCreated}
        />
      );
      fireEvent.click(getByText("Dorblue"));
      fireEvent.click(getByText("Pepperoni"));
      fireEvent.click(getByText("35cm"));
      await act(async () => {
        fireEvent.click(getByText("Final Price 308"));
      });
      expect(onPizzaOrderCreated).toBeCalledWith({
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
