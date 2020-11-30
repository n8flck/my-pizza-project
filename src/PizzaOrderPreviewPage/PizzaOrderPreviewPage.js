import { Redirect } from "react-router-dom";
import { usePizza } from "../PizzaContext";
import PizzaOrderConfirmationPopup from "./PizzaOrderConfirmationPopup";

export const PizzaOrderPreviewPage = () => {
  const { pizzaOrder } = usePizza();

  if (pizzaOrder) {
    return (
      <>
        <PizzaOrderConfirmationPopup pizzaOrder={pizzaOrder} />
      </>
    );
  }
  return <Redirect to="/pizza-order-builder" />;
};
