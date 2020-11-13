import React from "react";
import "./styles.css";

const PizzaOrderConfirmationPopup = (props) => {
    const ingredients = props.ingredients.map((item, index) => (
        <li key={index} value={item}>
            {item}
        </li>
    ));

    return (
        <div className="popup-box">
            <div className="box">
                <h2>Your Pizza Order:</h2>

                {props.size === "" ? (
                    <p>Pizza Size: N/A</p>
                ) : (
                        <p>Pizza Size: {props.size}</p>
                    )}
                {props.dough === "" ? (
                    <p>Pizza Dough: N/A</p>
                ) : (
                        <p>Pizza Dough: {props.dough}</p>
                    )}
                {props.sauce === "" ? (
                    <p>Pizza Sauce: N/A</p>
                ) : (
                        <p>Pizza Sauce: {props.sauce}</p>
                    )}
                {props.cheese === "" ? (
                    <p>Pizza Cheese: N/A</p>
                ) : (
                        <p>Pizza Cheese: {props.cheese}</p>
                    )}

                {ingredients.length === 0 ? (
                    <div> Ingredients: "N/A"</div>
                ) : (
                        <div>
                            {" "}
                            Ingredients: <ul>{ingredients}</ul>
                        </div>
                    )}
                <span>-------------------</span>
                <p>Final Price: {props.price}</p>
                <button onClick={props.handleClose}>Close</button>
            </div>
        </div>
    );
};

export default PizzaOrderConfirmationPopup;
