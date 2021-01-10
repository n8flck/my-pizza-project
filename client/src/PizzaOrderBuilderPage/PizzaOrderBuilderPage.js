import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  getIngredientsByCategory,
  getIsLoading,
} from "../state/ingredients/selectors";
import { fetchIngredients } from "../state/ingredients/thunk";
import { pizzaOrderSlice } from "../state/pizza/pizzaOrderSlice";
import { store } from "../store";
import { PizzaOrderForm } from "./PizzaOrderForm";

export const PizzaOrderBuilderPage = () => {
  const history = useHistory();
  const isLoading = useSelector(getIsLoading);

  const cheese = useSelector(getIngredientsByCategory("cheese"));
  const meat = useSelector(getIngredientsByCategory("meat"));
  const vegetables = useSelector(getIngredientsByCategory("vegetables"));

  const onPizzaOrderChange = (pizzaOrder) => {
    store.dispatch(pizzaOrderSlice.actions.set_pizzaOrder(pizzaOrder));
    history.push("/order-preview");
  };

  useEffect(() => {
    store.dispatch(fetchIngredients());
  }, []);

  if (isLoading) {
    return <>Loading...</>;
  }

  return (
    <>
      <h2>Order Pizza Form</h2>
      <PizzaOrderForm
        cheese={cheese}
        meat={meat}
        vegetables={vegetables}
        onPizzaOrderCreated={onPizzaOrderChange}
      />
    </>
  );
};
