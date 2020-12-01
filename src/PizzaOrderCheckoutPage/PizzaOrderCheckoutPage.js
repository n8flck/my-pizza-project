import { Link } from "react-router-dom";

export const PizzaOrderCheckoutPage = () => {
  return (
    <>
      <h1>Pizza Checkout</h1>
      <hr />
      <label for="cname">Name on Card</label>
      <input
        class="checkout-form"
        type="text"
        id="cname"
        name="cardname"
        placeholder="John More Doe"
      />
      <label for="ccnum">Credit card number</label>
      <input
        class="checkout-form"
        type="text"
        id="ccnum"
        name="cardnumber"
        placeholder="1111-2222-3333-4444"
      />
      <label for="expmonth">Exp Month</label>
      <input
        class="checkout-form"
        type="text"
        id="expmonth"
        name="expmonth"
        placeholder="September"
      />

      <div>
        <label for="expyear">Exp Year</label>
        <input
          class="checkout-form"
          type="text"
          id="expyear"
          name="expyear"
          placeholder="2018"
        />
      </div>
      <div>
        <label for="cvv">CVV</label>
        <input
          class="checkout-form"
          type="text"
          id="cvv"
          name="cvv"
          placeholder="352"
        />
      </div>
      <button type="submit" class="btn">
        Pay
      </button>
      <hr />
      <Link to="/order-invoice">Invoice Page</Link>
    </>
  );
};
