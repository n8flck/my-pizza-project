const isLargePizza = (size) => size === "35";

export const calculatePizzaPrice = (size, selectedToppings, toppings) => {
  const basePrice = 200;
  const largePizzaPrice = 50;

  const toppingsPrice = toppings.reduce(
    (price, topping) =>
      selectedToppings.includes(topping.slug) ? price + topping.price : price,
    0
  );

  return isLargePizza(size)
    ? (basePrice + toppingsPrice + largePizzaPrice)
    : (basePrice + toppingsPrice);
};
