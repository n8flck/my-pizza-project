import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

const PizzaOrderConfirmationPopup = (props) => {
  const cheese = props.pizzaOrder.cheese.map((item, index) => (
    <li key={index} value={item}>
      {item}
    </li>
  ));
  const meat = props.pizzaOrder.meat.map((item, index) => (
    <li key={index} value={item}>
      {item}
    </li>
  ));
  const vegetables = props.pizzaOrder.vegetables.map((item, index) => (
    <li key={index} value={item}>
      {item}
    </li>
  ));

  const handleClick = (event) => {
    event.preventDefault();
    props.setShowPopup(false);
  };

  return (
    <div className="popup-box">
      <div className="box">
        <h2>Your Pizza Order:</h2>

        {props.pizzaOrder.size === "" ? (
          <p>Pizza Size: N/A</p>
        ) : (
          <p>Pizza Size: {props.pizzaOrder.size}{"cm"}</p>
        )}
        {props.pizzaOrder.dough === "" ? (
          <p>Pizza Dough: N/A</p>
        ) : ( 
          <p>Pizza Dough: {props.pizzaOrder.dough}</p>
        )}
        {props.pizzaOrder.sauce === "" ? (
          <p>Pizza Sauce: N/A</p>
        ) : (
          <p>Pizza Sauce: {props.pizzaOrder.sauce}</p>
        )}
        {cheese.length === 0 ? (
          <p>Pizza Cheese: N/A</p>
        ) : (
          <div>
            {" "}
            Cheese: <ul>{cheese}</ul>
          </div>
        )}
        {vegetables.length === 0 ? (
          <div> Vegetables: N/A</div>
        ) : (
          <div>
            {" "}
            Vegitables: <ul>{vegetables}</ul>
          </div>
        )}
        {meat.length === 0 ? (
          <div> Meat: N/A</div>
        ) : (
          <div>
            {" "}
            Meat: <ul>{meat}</ul>
          </div>
        )}
        <span>-------------------</span>
        <p>Final Price: {props.pizzaOrder.price}</p>
        <button onClick={handleClick}>Close</button>
        <hr />
        <Link to="/pizza-order-checkout">Checkout</Link>
      </div>
    </div>
  );
};

export default PizzaOrderConfirmationPopup;
