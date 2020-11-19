import React from "react";
import * as pizzaData from "./pizzaData";

const PizzaCheeseComponent = (props) => {
  const checkboxes = pizzaData.CHEESE.map((item) => (
    <label key={item.id} className="chooseCheese">
      {" "}
      <input
        id={item.id}
        type="checkbox"
        name="cheese"
        checked={props.cheese.includes(item.pizzaCheese)}
        onChange={props.onChange}
        value={item.pizzaCheese}
      />{" "}
      {item.pizzaCheese}{" "}
    </label>
  ));

  return (
    <fieldset>
      <legend>Any Cheese?</legend>
      <p>{checkboxes}</p>
    </fieldset>
  );
};

export default PizzaCheeseComponent;
