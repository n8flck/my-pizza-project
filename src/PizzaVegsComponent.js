import React from "react";
import * as pizzaData from "./pizzaData";

const PizzaVegsComponent = (props) => {
  const checkboxes = pizzaData.VEGETABLES.map((item) => (
    <label key={item.id} className="chooseVegetables">
      {" "}
      <input
        id={item.id}
        type="checkbox"
        name="vegetable"
        checked={props.vegetables.includes(item.pizzaVegetable)}
        onChange={props.onChange}
        value={item.pizzaVegetable}
      />{" "}
      {item.pizzaVegetable}{" "}
    </label>
  ));

  return (
    <fieldset>
      <legend>How about some Vegetables?</legend>
      <p>{checkboxes}</p>
    </fieldset>
  );
};

export default PizzaVegsComponent;
