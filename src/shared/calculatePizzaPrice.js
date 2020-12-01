import { pizzaDataFiller } from "../pizzaDataFiller";

export const calculatePizzaPrice = ({ size, cheese, vegetables, meat }) => {
  let basePrice = 200;
  let ingredientPrice = 0;

  let calculateIngredients = new Map();

  calculateIngredients.set("size", size);
  calculateIngredients.set("cheese", cheese);
  calculateIngredients.set("vegetables", vegetables);
  calculateIngredients.set("meat", meat);

  let pizzaIngredients = [];

  for (let [key, value] of calculateIngredients) {
    pizzaIngredients = pizzaDataFiller({
      name: "",
      type: key,
      text: "",
      onChange: null,
    });
    if (value.length > 0) {
      if (key === "size") {
        ingredientPrice += pizzaIngredients.find((o) => o.name === value).price;
      } else {
        ingredientPrice += value.reduce(
          (price, val) =>
            price + pizzaIngredients.find((o) => o.name === val).price,
          0
        );
      }
    }
  }

  return basePrice + ingredientPrice;
};
