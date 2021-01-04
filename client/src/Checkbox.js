import React from "react";

const Checkbox = ({ register, name, text, ingredients }) => {
  let checkboxes = "";
  const ingrs = ingredients ?? [];
  checkboxes = ingrs.map((item) => (
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
