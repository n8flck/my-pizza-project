import * as pizzaData from "./shared/pizzaData";

export const pizzaDataFiller = (props) => {
  let ingredientsArray = [];

  const isSize = props.type === "size";
  const isDough = props.type === "dough";
  const isSauce = props.type === "sauce";
  const isCheese = props.type === "cheese";
  const isVegs = props.type === "vegetables";
  const isMeat = props.type === "meat";

  if (isSize) {
    ingredientsArray.push(...pizzaData.SIZES);
  }
  if (isDough) {
    ingredientsArray.push(...pizzaData.DOUGHS);
  }
  if (isSauce) {
    ingredientsArray.push(...pizzaData.SAUCES);
  }
  if (isCheese) {
    ingredientsArray.push(...pizzaData.CHEESE);
  }
  if (isVegs) {
    ingredientsArray.push(...pizzaData.VEGETABLES);
  }
  if (isMeat) {
    ingredientsArray.push(...pizzaData.MEAT);
  }
  return ingredientsArray;
};
