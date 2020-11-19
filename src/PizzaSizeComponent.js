import React from "react";
import * as pizzaData from "./pizzaData";

const PizzaSizeComponent = (props) => {
  const radioButtons = pizzaData.SIZES.map((item) => (
    <label key={item.id} className="chooseSize">
      {" "}
      <input
        id={item.id}
        type="radio"
        name="size"
        checked={props.size === item.pizzaSize}
        onChange={props.onChange}
        value={item.pizzaSize}
      />{" "}
      {item.pizzaSize}cm{" "}
    </label>
  ));

  return (
    <fieldset>
      <legend>Choose size</legend>
      <p>{radioButtons}</p>
    </fieldset>
  );
};

export default PizzaSizeComponent;
