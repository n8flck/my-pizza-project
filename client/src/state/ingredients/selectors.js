export const getIngredients = (state) => state.ingredients.data;

export const getIngredientsByCategory = (category) => (state) => {
  if (state.ingredients.pending) {
    return [];
  }
  return state.ingredients.data?.filter((i) => i.category === category);
};

export const getIsLoading = (state) => state.ingredients.pending;
