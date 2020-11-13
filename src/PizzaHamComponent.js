import React from "react";

const PizzaHamComponent = (props) => {
  const checkboxes = props.pizzaHamTypes.map((item) => (
    <label key={item.id} className="chooseSauce">
      {" "}
      <input
        id={item.id}
        type="checkbox"
        name="ham"
        checked={props.ingredients.includes(item.pizzaHam)}
        onChange={props.onChange}
        value={item.pizzaHam}
      />{" "}
      {item.pizzaHam}{" "}
    </label>
  ));

  return (
    <fieldset>
      <legend>Have you tried our meat?</legend>
      <p>{checkboxes}</p>
    </fieldset>
  );
};
export default PizzaHamComponent;
