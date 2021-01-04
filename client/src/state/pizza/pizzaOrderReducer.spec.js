import { pizzaOrderReducer } from "./pizzaOrderReducer";

describe("pizzaOrderReducer", () => {
  describe("set pizzaOrder", () => {
    it("pizzaOrder is set", () => {
      const initialState = {};
      const action = {
        type: "pizza/set_pizzaOrder",
        payload: {
          size: "30",
          dough: "Thin",
          sauce: "Tomato",
          cheese: ["Cheddar"],
          vegetables: ["Tomatoes"],
          meat: ["Bacon"],
          price: 287,
        },
      };
      expect(pizzaOrderReducer(initialState, action)).toEqual({
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
  
  describe("verify default action returns state", () => {
    it("default action should return state", () => {
      const initialState = { foo: "bar" };
      const action = { type: "pizza/fake_action" };
      expect(pizzaOrderReducer(initialState, action)).toEqual({ foo: "bar" });
    });
  });
});
