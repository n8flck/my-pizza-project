import { Redirect, useHistory, Link } from "react-router-dom";
import { usePizza } from "../PizzaContext";
import PizzaOrderConfirmationPopup from "./PizzaOrderConfirmationPopup";

export const PizzaOrderPreviewPage = () => {
  const { pizzaOrder } = usePizza();
  const { showPopup } = usePizza();
  const { setShowPopup } = usePizza();

  const history = useHistory();

  const onPizzaOrderChange = (showPopup) => {
    setShowPopup(showPopup);
    history.push("/pizza-order-builder");
}

  if (showPopup && pizzaOrder) {
    return (
      <>
        <PizzaOrderConfirmationPopup
          pizzaOrder={pizzaOrder}
          setShowPopup={onPizzaOrderChange}
        />
      </>
    );
  } else {
    return <Redirect to="/pizza-order-builder" />;
  }
};
