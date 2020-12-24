import React from "react";
import { pizzaDataFiller } from "./pizzaDataFiller";

const Checkbox = (props) => {
  let checkboxArray = pizzaDataFiller(props);
  let checkboxes = "";

  checkboxes = checkboxArray.map((item) => (
      <label key={item.id}>
        {" "}
        <input
          id={item.id}
          type="checkbox"
          name={props.name}
          ref={props.register}
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