import React from "react";
import { Link, useHistory } from "react-router-dom";
import "../styles.css";

const PizzaOrderConfirmationPopup = ({ pizzaOrder }) => {
  const cheese = pizzaOrder.cheese.map((item, index) => (
    <li key={index} value={item}>
      {item}
    </li>
  ));
  const meat = pizzaOrder.meat.map((item, index) => (
    <li key={index} value={item}>
      {item}
    </li>
  ));
  const vegetables = pizzaOrder.vegetables.map((item, index) => (
    <li key={index} value={item}>
      {item}
    </li>
  ));

  const history = useHistory();

  const handleClick = (event) => {
    event.preventDefault();
    history.push("/order-builder");
  };

  return (
    <div className="popup-box">
      <div className="box">
        <h2>Your Pizza Order:</h2>

        {pizzaOrder.size === "" ? (
          <p>Pizza Size: N/A</p>
        ) : (
          <p>
            Pizza Size: {pizzaOrder.size}
            {"cm"}
          </p>
        )}
        {pizzaOrder.dough === "" ? (
          <p>Pizza Dough: N/A</p>
        ) : (
          <p>Pizza Dough: {pizzaOrder.dough}</p>
        )}
        {pizzaOrder.sauce === "" ? (
          <p>Pizza Sauce: N/A</p>
        ) : (
          <p>Pizza Sauce: {pizzaOrder.sauce}</p>
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
        <p>Final Price: {pizzaOrder.price}</p>
        <button onClick={handleClick}>Close</button>
        <hr />
        <Link to="/order-checkout">Checkout</Link>
      </div>
    </div>
  );
};

export default PizzaOrderConfirmationPopup;
