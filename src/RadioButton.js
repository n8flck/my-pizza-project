import React from "react";
import { pizzaDataFiller } from "./pizzaDataFiller";

const RadioButton = (props) => {
  let radioArray = pizzaDataFiller(props);
  const isSize = props.type === "size";
  let radioButtons = "";

  radioButtons = radioArray.map((item) => (
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
      {isSize ? item.name + "cm" : item.name + " "}
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
