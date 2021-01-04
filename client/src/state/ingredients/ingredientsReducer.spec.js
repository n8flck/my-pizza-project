import { ingredientsReducer } from "./ingredientsReducer";

describe("ingredientsReducer", () => {
  describe("ingredients fetched successfully", () => {
    it("ingredients are received", () => {
      const initialState = { pending: true, error: null, data: null };
      const action = {
        type: "ingredients/success",
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
      expect(ingredientsReducer(initialState, action)).toEqual({
        pending: false,
        error: null,
        data: {
          size: "30",
          dough: "Thin",
          sauce: "Tomato",
          cheese: ["Cheddar"],
          vegetables: ["Tomatoes"],
          meat: ["Bacon"],
          price: 287,
        },
      });
    });
  });

  describe("ingredients fetch is in pending state", () => {
    it("ingredients are pending to be fetched", () => {
      const initialState = { pending: true, error: null, data: null };
      const action = {
        type: "ingredients/request",
      };
      expect(ingredientsReducer(initialState, action)).toEqual({
        pending: true,
        error: null,
        data: null,
      });
    });
  });

  describe("error during ingredients fetch", () => {
    it("error has occurred during fetch", () => {
      const initialState = { pending: true, error: null, data: null };
      const action = {
        type: "ingredients/error",
        payload: "Error: Not Found",
      };
      expect(ingredientsReducer(initialState, action)).toEqual({
        pending: false,
        error: "Error: Not Found",
        data: null,
      });
    });
  });

  describe("verify default action returns state", () => {
    it("default action should return state", () => {
      const initialState = { foo: "bar" };
      const action = { type: "ingredients/fake_action" };
      expect(ingredientsReducer(initialState, action)).toEqual({ foo: "bar" });
    });
  });
});
