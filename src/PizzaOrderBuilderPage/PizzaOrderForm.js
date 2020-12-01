import { useState, useEffect } from "react";
import { useCollection } from "../shared/useCollection";
import { calculatePizzaPrice } from "../shared/calculatePizzaPrice";
import RadioButton from "../RadioButton";
import Checkbox from "../Checkbox";

export const PizzaOrderForm = ({ onPizzaOrderCreated }) => {
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

  const handleSizeChanged = (event) => {
    setSize(event.target.value);
  };

  const handleDoughChanged = (event) => {
    setDough(event.target.value);
  };

  const handleSauceChanged = (event) => {
    setSauce(event.target.value);
  };

  const handleCheeseChanged = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      addCheese(value);
    } else {
      removeCheese(value);
    }
  };

  const handleVegsChanged = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      addVegetables(value);
    } else {
      removeVegetables(value);
    }
  };

  const handleMeatChanged = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      addMeat(value);
    } else {
      removeMeat(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onPizzaOrderCreated({
      size,
      dough,
      sauce,
      meat,
      cheese,
      vegetables,
      price,
    });
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto" }}>
      <form
        onSubmit={handleSubmit}
        className="orderPizzaForm"
        noValidate
        autoComplete="off"
      >
        <RadioButton
          name={size}
          type={"size"}
          onChange={handleSizeChanged}
          text={"Choose size"}
        />
        <RadioButton
          name={dough}
          type={"dough"}
          onChange={handleDoughChanged}
          text={"Which Dough would you like?"}
        />
        <RadioButton
          name={sauce}
          type={"sauce"}
          onChange={handleSauceChanged}
          text={"Would you like some Sauce?"}
        />
        <Checkbox
          name={cheese}
          type={"cheese"}
          onChange={handleCheeseChanged}
          text={"Any Cheese?"}
        />
        <Checkbox
          name={vegetables}
          type={"vegetables"}
          onChange={handleVegsChanged}
          text={"How about some Vegetables?"}
        />
        <Checkbox
          name={meat}
          type={"meat"}
          onChange={handleMeatChanged}
          text={"Have you tried our Meat?"}
        />
        <p>
          <button type="submit">Final Price {price}</button>
        </p>
      </form>
    </div>
  );
};
