import React from "react";

const PizzaSizeComponent = props => {
  const radioButtons = props.pizzaSizez.map((item) => (
    <label key={item.id} className="chooseSize">
      {" "}
      <input
        id={item.id}
        type="radio"
        name="size"
        checked={props.size === item.pizzaSize}
        onChange={props.onChange}
        value={item.pizzaSize}
      />{" "}
      {item.pizzaSize}cm{" "}
    </label>
  ));

  return (
    <fieldset>
      <legend>Choose size</legend>
      <p>
        {radioButtons}
      </p>
    </fieldset>
  );
};

export default PizzaSizeComponent;