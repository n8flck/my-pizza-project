const isLargePizza = (size) => size === "35";

export const calculatePizzaPrice = (
  selectedPizzaOptions = [],
  allIngredients = []
) => {
  const basePrice = 200;
  const largePizzaPrice = 50;
  const size = selectedPizzaOptions.size;
  const selectedIngredients = [
    ...selectedPizzaOptions.cheese,
    ...selectedPizzaOptions.meat,
    ...selectedPizzaOptions.vegetables,
  ];

  const ingredientPrice = allIngredients.reduce(
    (price, ingredient) =>
      selectedIngredients.includes(ingredient.slug)
        ? price + ingredient.price
        : price,
    0
  );

  return isLargePizza(size)
    ? basePrice + ingredientPrice + largePizzaPrice
    : basePrice + ingredientPrice;
};
