import React from "react";
import * as pizzaData from "./shared/pizzaData";

const Checkbox = (props) => {
  let checkboxArray = [];

  const isCheese = props.type === "cheese";
  const isVegs = props.type === "vegetables";
  const isMeat = props.type === "meat";

  if (isCheese) {
    checkboxArray = pizzaData.CHEESE;
  }
  if (isVegs) {
    checkboxArray = pizzaData.VEGETABLES;
  }
  if (isMeat) {
    checkboxArray = pizzaData.MEAT;
  }

  const checkboxes = checkboxArray.map((item) => (
    <label key={item.id}>
      {" "}
      <input
        id={item.id}
        type="checkbox"
        name={props.name}
        checked={props.name.includes(item.name)}
        onChange={props.onChange}
        value={item.name}
      />{" "}
      {item.name}{" "}
    </label>
  ));

  return (
    <fieldset>
      <legend>{props.text}</legend>
      <p>{checkboxes}</p>
    </fieldset>
  );
};

export default Checkbox;
