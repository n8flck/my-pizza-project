import React from "react";

const PizzaVegsComponent = (props) => {
  const checkboxes = props.pizzaVegetablesTypes.map((item) => (
    <label key={item.id} className="chooseSauce">
      {" "}
      <input
        id={item.id}
        type="checkbox"
        name="vegetable"
        checked={props.ingredients.includes(item.pizzaVegetable)}
        onChange={props.onChange}
        value={item.pizzaVegetable}
      />{" "}
      {item.pizzaVegetable}{" "}
    </label>
  ));

  return (
    <fieldset>
      <legend>How about some vegetables?</legend>
      <p>{checkboxes}</p>
    </fieldset>
  );
};

export default PizzaVegsComponent;
