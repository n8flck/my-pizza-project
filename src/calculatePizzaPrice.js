import * as pizzaData from "./pizzaData";

export const calculatePizzaPrice = ({ size, cheese, vegetables, meat }) => {
  let basePrice = 200;
  let sizePrice = 0;
  if (size) {
    sizePrice = pizzaData.SIZES.find((o) => o.pizzaSize === size).price;
  }
  const cheesePrice = cheese.reduce(
    (price, cheese) =>
      price + pizzaData.CHEESE.find((o) => o.pizzaCheese === cheese).price,
    0
  );
  const vegetablesPrice = vegetables.reduce(
    (price, vegetable) =>
      price +
      pizzaData.VEGETABLES.find((o) => o.pizzaVegetable === vegetable).price,
    0
  );
  const meatPrice = meat.reduce(
    (price, meat) =>
      price + pizzaData.MEAT.find((o) => o.pizzaMeat === meat).price,
    0
  );

  return basePrice + sizePrice + cheesePrice + vegetablesPrice + meatPrice;
};
