import React from "react";

const RadioButton = ({ text, register, name, baseIngredients }) => {
  const isSize = name === "size";
  let radioButtons = "";
  radioButtons = baseIngredients.map((item) => (
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
