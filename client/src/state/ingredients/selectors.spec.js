import { getIngredients } from "./selectors";
import { getIngredientsByCategory } from "./selectors";
import { getIsLoading } from "./selectors";

describe("ingredientsSelectors", () => {
  describe("getIngredients", () => {
    it("returns ingredients from the state", () => {
      const state = {
        ingredients: {
          data: [
            {
              category: "cheese",
              id: "HkhoE-aq",
              image: "Mozzarella.blob",
              name: "Mozzarella",
              price: 29,
              slug: "Mozzarella",
            },
          ],
        },
        pizzaOrder: {},
        auth: {},
      };
      expect(getIngredients(state)).toEqual([
        {
          category: "cheese",
          id: "HkhoE-aq",
          image: "Mozzarella.blob",
          name: "Mozzarella",
          price: 29,
          slug: "Mozzarella",
        },
      ]);
    });
  });

  describe("getIngredientsByCategory", () => {
    it("returns ingredients for specified category from the state", () => {
      const category = "cheese";
      const state = {
        ingredients: {
          data: [
            {
              category: "cheese",
              id: "HkhoE-aq",
              image: "Mozzarella.blob",
              name: "Mozzarella",
              price: 29,
              slug: "Mozzarella",
            },
            {
              id: "v2I2aU1n",
              name: "Bacon",
              slug: "Bacon",
              price: 29,
              category: "meat",
              image: "Bacon.blob",
            },
          ],
        },
        pizzaOrder: {},
        auth: {},
      };
      expect(getIngredientsByCategory(category)(state)).toEqual([
        {
          id: "HkhoE-aq",
          name: "Mozzarella",
          slug: "Mozzarella",
          price: 29,
          category: "cheese",
          image: "Mozzarella.blob",
        },
      ]);
    });
  });

  describe("getIsLoading", () => {
    it("returns TRUE if ingredients are loading from the state", () => {
      const state = {
        ingredients: { data: [], error: null, pending: true },
        pizzaOrder: {},
        auth: {},
      };
      expect(getIsLoading(state)).toBe(true);
    });
  });
});
