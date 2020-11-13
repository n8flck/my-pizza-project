import React from "react";

const PizzaDoughComponent = props => {
  const radioButtons = props.pizzaDoughs.map((item) => (
    <label key={item.id} className="chooseDough">
      {" "}
      <input
        id={item.id}
        type="radio"
        name="dough"
        checked={props.dough === item.pizzaDough}
        onChange={props.onChange}
        value={item.pizzaDough}
      />{" "}
      {item.pizzaDough}{" "}
    </label>
  ));

  return (
    <fieldset>
      <legend>Which dough would you like?</legend>
      <p>
        {radioButtons}
      </p>
    </fieldset>
  );
};
export default PizzaDoughComponent;