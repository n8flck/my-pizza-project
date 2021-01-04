import { Redirect } from "react-router-dom";
import PizzaOrderConfirmationPopup from "./PizzaOrderConfirmationPopup";
import { useSelector } from 'react-redux';
import { getPizzaOrder } from "../state/pizza/selectors";

export const PizzaOrderPreviewPage = () => {
  const pizzaOrder = useSelector(getPizzaOrder);

  if (pizzaOrder) {
    return (
      <>
        <PizzaOrderConfirmationPopup pizzaOrder={pizzaOrder} />
      </>
    );
  }
  return <Redirect to="/order-builder" />;
};
