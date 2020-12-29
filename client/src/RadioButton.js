import React from "react";

const RadioButton = ({ text, register, name, base_ingredients }) => {
  // let radioArray = pizzaDataFiller(props);
  const isSize = name === "size";
  let radioButtons = "";

  radioButtons = base_ingredients.map((item) => (
      <label key={item.id}>
        {" "}
        <input
          id={item.id}
          type="radio"
          name={name}
          ref={register}
          value={item.slug}
        />{" "}
        {isSize ? item.name + "cm" : item.name + " "}
      </label>
  ));

  return (
    <fieldset>
      <legend>{text}</legend>
      <p>{radioButtons}</p>
    </fieldset>
  );
};

export default RadioButton;
