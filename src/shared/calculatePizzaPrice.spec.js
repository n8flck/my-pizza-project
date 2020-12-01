import { calculatePizzaPrice } from "./calculatePizzaPrice";

describe("calculatePizzaPrice", () => {
  it("returns the sum of all the selected ingredients", () => {
    expect(
      calculatePizzaPrice({
        size: "35",
        cheese: ["Mozzarella", "Cheddar", "Dorblue"],
        vegetables: ["Tomatoes", "Mushrooms", "Pepper"],
        meat: ["Bacon", "Pepperoni", "Ham"],
      })
    ).toEqual(511);
  });

  describe("calculateBasePrice with no ingredients", () => {
    it("returns base sum if no ingredients selected", () => {
      expect(
        calculatePizzaPrice({
          size: "",
          cheese: [],
          vegetables: [],
          meat: [],
        })
      ).toEqual(200);
    });
  });
});
