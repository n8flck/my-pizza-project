import React from "react";
import * as pizzaData from "./pizzaData";

const PizzaSauceComponent = (props) => {
  const radioButtons = pizzaData.SAUCES.map((item) => (
    <label key={item.id} className="chooseSauce">
      {" "}
      <input
        id={item.id}
        type="radio"
        name="sauce"
        checked={props.sauce === item.pizzaSauce}
        onChange={props.onChange}
        value={item.pizzaSauce}
      />{" "}
      {item.pizzaSauce}{" "}
    </label>
  ));

  return (
    <fieldset>
      <legend>Would you like some Sauce?</legend>
      <p>{radioButtons}</p>
    </fieldset>
  );
};

export default PizzaSauceComponent;
