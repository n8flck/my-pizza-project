import React from "react";
import PizzaOrderConfirmationPopup from "./PizzaOrderConfirmationPopup";
import { PizzaOrderForm } from "./PizzaOrderForm";

function App() {
  const [pizzaOrder, setPizzaOrder] = React.useState();
  const [showPopup, setShowPopup] = React.useState(false);

  if (showPopup && pizzaOrder) {
    return (
      <>
        <PizzaOrderConfirmationPopup
          pizzaOrder={pizzaOrder}
          setShowPopup={setShowPopup}
        />
      </>
    );
  } else {
    return (
      <>
        <PizzaOrderForm
          onPizzaOrderCreated={setPizzaOrder}
          setShowPopup={setShowPopup}
        />
      </>
    );
  }
}

export default App;
