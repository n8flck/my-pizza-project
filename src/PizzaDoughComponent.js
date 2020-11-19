import React from "react";
import * as pizzaData from "./pizzaData";

const PizzaDoughComponent = (props) => {
  const radioButtons = pizzaData.DOUGHS.map((item) => (
    <label key={item.id} className="chooseDough">
      {" "}
      <input
        id={item.id}
        type="radio"
        name="dough"
        checked={props.dough === item.pizzaDough}
        onChange={props.onChange}
        value={item.pizzaDough}
      />{" "}
      {item.pizzaDough}{" "}
    </label>
  ));

  return (
    <fieldset>
      <legend>Which Dough would you like?</legend>
      <p>{radioButtons}</p>
    </fieldset>
  );
};

export default PizzaDoughComponent;
