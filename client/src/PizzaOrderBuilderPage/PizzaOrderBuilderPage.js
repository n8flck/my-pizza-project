import { useHistory } from "react-router-dom";
import { usePizza } from "../PizzaContext";
import { useIngredients } from "../IngredientsContext";
import { PizzaOrderForm } from "./PizzaOrderForm";
import { useEffect } from "react";

export const PizzaOrderBuilderPage = ({
  usePizzaHook = usePizza,
  useIngredientsHook = useIngredients,
}) => {
  const { setPizzaOrder } = usePizzaHook();
  const {
    fetchIngredients,
    ingredientsByCategory,
    isLoading,
  } = useIngredientsHook();
  const history = useHistory();

  const onPizzaOrderChange = (pizzaOrder) => {
    setPizzaOrder(pizzaOrder);
    history.push("/order-preview");
  };

  useEffect(() => {
    fetchIngredients();
  }, []);

  if (isLoading) {
    return <>Loading...</>;
  }

  const cheese = ingredientsByCategory("cheese");
  const meat = ingredientsByCategory("meat");
  const vegetables = ingredientsByCategory("vegetables");

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
