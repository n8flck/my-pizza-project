import React from "react";
import * as pizzaData from "./pizzaData";

const PizzaMeatComponent = (props) => {
  const checkboxes = pizzaData.MEAT.map((item) => (
    <label key={item.id} className="chooseMeat">
      {" "}
      <input
        id={item.id}
        type="checkbox"
        name="meat"
        checked={props.meat.includes(item.pizzaMeat)}
        onChange={props.onChange}
        value={item.pizzaMeat}
      />{" "}
      {item.pizzaMeat}{" "}
    </label>
  ));

  return (
    <fieldset>
      <legend>Have you tried our Meat?</legend>
      <p>{checkboxes}</p>
    </fieldset>
  );
};

export default PizzaMeatComponent;
