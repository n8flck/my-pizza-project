import { useState, useEffect } from "react";
import { useCollection } from "../shared/useCollection";
import { calculatePizzaPrice } from "../shared/calculatePizzaPrice";
import RadioButton from "../RadioButton";
import Checkbox from "../Checkbox";

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

  console.log("SIZE" + size)

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto" }}>
      <h3>Order Pizza Form</h3>
      <form
        onSubmit={handleSubmit}
        className="orderPizzaForm"
        noValidate
        autoComplete="off"
      >
        <RadioButton name={size} type={"size"} onChange={sizeChangedEvent} text={"Choose size"} />
        <RadioButton name={dough} type={"dough"} onChange={doughChangedEvent} text={"Which Dough would you like?"} />
        <RadioButton name={sauce} type={"sauce"} onChange={sauceChangedEvent} text={"Would you like some Sauce?"} />
        <Checkbox name={cheese} type={"cheese"} onChange={cheeseChangedEvent} text={"Any Cheese?"} />
        <Checkbox
          name={vegetables}
          type={"vegetables"}
          onChange={vegsChangedEvent}
          text={"How about some Vegetables?"}
        />
        <Checkbox name={meat} type={"meat"} onChange={meatChangedEvent} text={"Have you tried our Meat?"} />
        <p>
          <button type="submit">Final Price {price}</button>
        </p>
      </form>
    </div>
  );
};
