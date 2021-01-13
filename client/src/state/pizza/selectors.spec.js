import { getPizzaOrder } from "./selectors";

describe("getPizzaOrder", () => {
  it("returns pizzaOrder value from the state", () => {
    const state = {
      ingredients: {},
      pizzaOrder: {
        cheese: ["Cheddar"],
        dough: "Thin",
        meat: ["Bacon"],
        price: 287,
        sauce: "Tomato",
        size: "30",
        vegetables: ["Tomatoes"],
      },
      auth: {},
    };
    expect(getPizzaOrder(state)).toEqual({
      size: "30",
      dough: "Thin",
      sauce: "Tomato",
      cheese: ["Cheddar"],
      vegetables: ["Tomatoes"],
      meat: ["Bacon"],
      price: 287,
    });
  });
});
