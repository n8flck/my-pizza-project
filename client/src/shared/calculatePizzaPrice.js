
export const calculatePizzaPrice = (selectedToppings, toppings) => {
  let basePrice = 200;

  const toppingsPrice = toppings.reduce(
    (price, topping) =>
      selectedToppings.includes(topping.slug) ? price + topping.price : price,
    0
  );

  return basePrice + toppingsPrice;
};
