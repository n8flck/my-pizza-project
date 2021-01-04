import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  getIngredientsByCategory,
  getIsLoading
} from "../state/ingredients/selectors";
import { fetchIngredients } from "../state/ingredients/thunk";
import { setPizzaOrder } from "../state/pizza/actions";
import { PizzaOrderForm } from "./PizzaOrderForm";

export const PizzaOrderBuilderPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  const state = useSelector((state) => state);
  const cheese = useSelector(getIngredientsByCategory("cheese"));
  const meat = useSelector(getIngredientsByCategory("meat"));
  const vegetables = useSelector(getIngredientsByCategory("vegetables"));

  console.log(state);

  const onPizzaOrderChange = (pizzaOrder) => {
    dispatch(setPizzaOrder(pizzaOrder));
    history.push("/order-preview");
  };

  useEffect(() => {
    dispatch(fetchIngredients());
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
