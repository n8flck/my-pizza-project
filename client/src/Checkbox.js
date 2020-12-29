import React from "react";
import { pizzaDataFiller } from "./pizzaDataFiller";

const Checkbox = ({register, name, text, ingredients}) => {
  // let checkboxArray = pizzaDataFiller(props);
  let checkboxes = "";

  checkboxes = ingredients.map((item) => (
    <label key={item.id}>
      {" "}
      <input
        id={item.id}
        type="checkbox"
        name={name}
        ref={register}
        value={item.slug}
      />{" "}
      {item.name}{" "}
    </label>
  ));

  return (
    <fieldset>
      <legend>{text}</legend>
      <p>{checkboxes}</p>
    </fieldset>
  );
};

export default Checkbox;
