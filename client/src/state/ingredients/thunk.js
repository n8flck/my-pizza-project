import { createAsyncThunk } from "@reduxjs/toolkit";
import { getToppings } from "../../shared/api";

export const fetchIngredients = createAsyncThunk(
  "ingredients/fetchIngredients",
  async (arg, { rejectWithValue }) => {
    try {
      const json = await getToppings();
      const convertJSONDataTypes = json.map((ingredient) => ({
        ...ingredient,
        price: Number(ingredient.price),
      }));
      return convertJSONDataTypes;
    } catch (err) {
      let error = err;
      if (!error.response) {
        throw error;
      }

      return rejectWithValue(error.response.data);
    }
  }
);
