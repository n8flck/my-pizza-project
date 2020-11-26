import { useHistory } from "react-router-dom";
import { usePizza } from "../PizzaContext";
import { PizzaOrderForm } from "./PizzaOrderForm"

export const PizzaOrderBuilderPage = () => {
    const { setPizzaOrder } = usePizza();
    const { setShowPopup } = usePizza();
    const history = useHistory();

    const onPizzaOrderChange1 = (pizzaOrder) => {
        setPizzaOrder(pizzaOrder);
        history.push("/pizza-order-preview");
    }

    const onPizzaOrderChange2 = (showPopup) => {
        setShowPopup(showPopup);
    }

  return (
    <>
      <PizzaOrderForm
        onPizzaOrderCreated={onPizzaOrderChange1}
        setShowPopup={onPizzaOrderChange2}
      />
    </>
  );
};
