import { getToppings } from "../../shared/api";
import {
  ingredientsError,
  ingredientsSuccess,
  requestIngredients,
} from "./actions";

export const fetchIngredients = () => async (dispatch) => {
  dispatch(requestIngredients());
  try {
    const json = await getToppings();
    const convertJSONDataTypes = json.map((ingredient) => ({
      ...ingredient,
      price: Number(ingredient.price),
    }));
    dispatch(ingredientsSuccess(convertJSONDataTypes));
  } catch (error) {
    dispatch(ingredientsError(error));
  }
};
