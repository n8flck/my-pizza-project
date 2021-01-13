import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { createNewOrder } from "../shared/api";
import { getPizzaOrder } from "../state/pizza/selectors";

const normalizeCardNumber = (value) => {
  return (
    value
      .replace(/\s/g, "")
      .match(/.{1,4}/g)
      ?.join(" ")
      .substr(0, 19) || ""
  );
};

const normalizeCVV = (value) => {
  return value.replace(/\s/g, "").match(/.{1,3}/) || "";
};

const detectCardType = (number) => {
  const cards = {
    maestro: /^(5018|5020|5038|5612|5893|6304|6759|6761|6762|6763|0604|6390)\d+$/,
    visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
  };
  for (const key in cards) {
    if (cards[key].test(number)) {
      return key;
    }
  }
};

export const PizzaOrderCheckoutPage = () => {
  const { register, handleSubmit } = useForm();
  const [cardType, setCardType] = useState();
  const history = useHistory();
  const pizzaOrder = useSelector(getPizzaOrder);

  const onSubmit = handleSubmit(async (data) => {
    const formData = new FormData();
    formData.append("ingredients", Object.values(pizzaOrder));
    formData.append("address", data.address);
    formData.append("name", data.cardHolder);
    formData.append("card_number", data.cardNumber);

    const result = await createNewOrder(formData);
    history.push("/order-invoice");
  });

  return (
    <>
      <h1>Pizza Checkout</h1>
      <hr />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="cardHolderName">Name on Card</label>
          <input
            id="cardHolderName"
            className="checkout-form"
            type="text"
            name="cardHolder"
            placeholder="John More Doe"
            ref={register({ required: true })}
          />
        </div>
        <div>
          <label htmlFor="cardNumber">Credit card number:</label>
          <input
            id="cardNumber"
            className="checkout-form"
            type="tel"
            inputMode="numeric"
            autoComplete="cc-number"
            name="cardNumber"
            placeholder="0000 0000 0000 0000"
            onChange={(event) => {
              const { value } = event.target;
              setCardType(event.target.value);
              event.target.value = normalizeCardNumber(value);
            }}
            ref={register({ required: true })}
          />
        </div>
        <div>
          <label htmlFor="expiryMonth">Exp Month</label>
          <input
            id="expiryMonth"
            className="checkout-form"
            type="text"
            name="expiryMonth"
            placeholder="September"
            ref={register({ required: true })}
          />
        </div>
        <div>
          <label htmlFor="expiryYear">Exp Year</label>
          <input
            id="expiryYear"
            className="checkout-form"
            type="text"
            name="expiryYear"
            placeholder="2018"
            ref={register({ required: true })}
          />
        </div>
        <div>
          <label htmlFor="cvv">CVV</label>
          <input
            id="cvv"
            className="checkout-form"
            type="tel"
            name="cvv"
            inputMode="numeric"
            placeholder="352"
            onChange={(event) => {
              const { value } = event.target;
              event.target.value = normalizeCVV(value);
            }}
            ref={register({ required: true })}
          />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input
            id="address"
            className="checkout-form"
            type="text"
            name="address"
            placeholder="Your Billing Address"
            ref={register({ required: true })}
          />
        </div>
        <button type="submit" className="btn">
          Pay
        </button>
      </form>
      <hr />
      <Link to="/order-invoice">Invoice Page</Link>
    </>
  );
};
