import React from "react";
import * as pizzaData from "./shared/pizzaData";

const RadioButton = (props) => {
  let radioArray = [];

  const isSize = (props.type === "size");
  const isDough = (props.type === "dough");
  const isSauce = (props.type === "sauce");

  if (isSize) {
    radioArray = pizzaData.SIZES;
  }
  if (isDough) {
    radioArray = pizzaData.DOUGHS;
  }
  if (isSauce) {
    radioArray = pizzaData.SAUCES;
  }

  const radioButtons = radioArray.map((item) => (
    <label key={item.id}>
      {" "}
      <input
        id={item.id}
        type="radio"
        name={props.name}
        checked={props.name === item.name}
        onChange={props.onChange}
        value={item.name}
      />{" "}
      {isSize ? (
        item.name + "cm"
      ) : (
        item.name + " "
      )}
    </label>
  ));

  return (
    <fieldset>
      <legend>{props.text}</legend>
      <p>{radioButtons}</p>
    </fieldset>
  );
};

export default RadioButton;
