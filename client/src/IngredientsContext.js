import React, { createContext, useContext, useState } from "react";
import { getToppings } from "./shared/api";

const IngredientsContext = createContext();

export const IngredientsProvider = ({ children }) => {
  const [ingredients, setIngredients] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchIngredients = async () => {
    setIsLoading(true);
    const json = await getToppings();
    // console.log(json);
    const convertJSONDataTypes = json.map((ingredient) => ({
      ...ingredient,
      price: Number(ingredient.price),
    }));
    setIngredients(convertJSONDataTypes);
    setIsLoading(false);
  };

  const ingredientsByCategory = (category) => {
    return ingredients.filter((ingredient) => ingredient.category === category);
  };


  return (
    <IngredientsContext.Provider
      value={{
        fetchIngredients,
        ingredients,
        ingredientsByCategory,
        isLoading,
      }}
    >
      {children}
    </IngredientsContext.Provider>
  );
};

export const useIngredients = () => useContext(IngredientsContext);
