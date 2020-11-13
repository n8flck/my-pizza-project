import React from "react";

const PizzaSauceComponent = props => {
  const radioButtons = props.pizzaSauces.map((item) => (
    <label key={item.id} className="chooseSauce">
      {" "}
      <input
        id={item.id}
        type="radio"
        name="sauce"
        checked={props.sauce === item.pizzaSauce}
        onChange={props.onChange}
        value={item.pizzaSauce}
      />{" "}
      {item.pizzaSauce}{" "}
    </label>
  ));

  return (
    <fieldset>
      <legend>Would you like some souce?</legend>
      <p>
        {radioButtons}
      </p>
    </fieldset>
  );
};
export default PizzaSauceComponent;