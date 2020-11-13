import React from "react";

const PizzaCheeseComponent = (props) => {
  const checkboxes = props.pizzaCheeseTypes.map((item) => (
    <label key={item.id} className="chooseSauce">
      {" "}
      <input
        id={item.id}
        type="checkbox"
        name="cheese"
        checked={props.ingredients.includes(item.pizzaCheese)}
        onChange={props.onChange}
        value={item.pizzaCheese}
      />{" "}
      {item.pizzaCheese}{" "}
    </label>
  ));

  return (
    <fieldset>
      <legend>Any Cheese?</legend>
      <p>{checkboxes}</p>
    </fieldset>
  );
};
export default PizzaCheeseComponent;
