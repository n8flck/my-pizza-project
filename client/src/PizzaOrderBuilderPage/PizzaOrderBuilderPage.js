import { useHistory } from "react-router-dom";
import { usePizza } from "../PizzaContext";
import { PizzaOrderForm } from "./PizzaOrderForm";

export const PizzaOrderBuilderPage = ({ usePizzaHook = usePizza }) => {
  const { setPizzaOrder } = usePizzaHook();
  const history = useHistory();

  const onPizzaOrderChange = (pizzaOrder) => {
    setPizzaOrder(pizzaOrder);
    // <PizzaOrderConfirmationPopup pizzaOrder={pizzaOrder} />
    history.push("/order-preview");
  };

  return (
    <>
      <h3>Order Pizza Form</h3>
      <PizzaOrderForm onPizzaOrderCreated={onPizzaOrderChange} />
    </>
  );
};
