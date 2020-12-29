import * as pizzaData from "./shared/pizzaData";

export const pizzaDataFiller = (props) => {
  let ingredientsArray = [];

  const isSize = props.name === "size";
  const isDough = props.name === "dough";
  const isSauce = props.name === "sauce";

  if (isSize) {
    ingredientsArray.push(...pizzaData.SIZES);
  }
  if (isDough) {
    ingredientsArray.push(...pizzaData.DOUGHS);
  }
  if (isSauce) {
    ingredientsArray.push(...pizzaData.SAUCES);
  }
  return ingredientsArray;
};
