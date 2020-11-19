import { useState, useEffect } from "react";
import PizzaSizeComponent from "./PizzaSizeComponent";
import PizzaDoughComponent from "./PizzaDoughComponent";
import PizzaSauceComponent from "./PizzaSauceComponent";
import PizzaCheeseComponent from "./PizzaCheeseComponent";
import PizzaVegsComponent from "./PizzaVegsComponent";
import PizzaMeatComponent from "./PizzaMeatComponent";
import { useCollection } from "./useCollection";
import { calculatePizzaPrice } from "./calculatePizzaPrice";

export const PizzaOrderForm = (props) => {
  const [size, setSize] = useState("");
  const [dough, setDough] = useState("");
  const [sauce, setSauce] = useState("");
  const [cheese, addCheese, removeCheese] = useCollection();
  const [vegetables, addVegetables, removeVegetables] = useCollection();
  const [meat, addMeat, removeMeat] = useCollection();

  const price = calculatePizzaPrice({ size, cheese, vegetables, meat });

  useEffect(() => {
    document.size = size;
    document.dough = dough;
    document.sauce = sauce;
  });

  const sizeChangedEvent = (event) => {
    setSize(event.target.value);
  };

  const doughChangedEvent = (event) => {
    setDough(event.target.value);
  };

  const sauceChangedEvent = (event) => {
    setSauce(event.target.value);
  };

  const cheeseChangedEvent = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      addCheese(value);
    } else {
      removeCheese(value);
    }
  };

  const vegsChangedEvent = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      addVegetables(value);
    } else {
      removeVegetables(value);
    }
  };

  const meatChangedEvent = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      addMeat(value);
    } else {
      removeMeat(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onPizzaOrderCreated({
      size,
      dough,
      sauce,
      meat,
      cheese,
      vegetables,
      price,
    });
    props.setShowPopup(true);
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto" }}>
      <h3>Order Pizza Form</h3>
      <form
        onSubmit={handleSubmit}
        className="orderPizzaForm"
        noValidate
        autoComplete="off"
      >
        <PizzaSizeComponent size={size} onChange={sizeChangedEvent} />
        <PizzaDoughComponent dough={dough} onChange={doughChangedEvent} />
        <PizzaSauceComponent sauce={sauce} onChange={sauceChangedEvent} />
        <PizzaCheeseComponent cheese={cheese} onChange={cheeseChangedEvent} />
        <PizzaVegsComponent
          vegetables={vegetables}
          onChange={vegsChangedEvent}
        />
        <PizzaMeatComponent meat={meat} onChange={meatChangedEvent} />
        <p>
          <button type="submit">Final Price {price}</button>
        </p>
      </form>
    </div>
  );
};
