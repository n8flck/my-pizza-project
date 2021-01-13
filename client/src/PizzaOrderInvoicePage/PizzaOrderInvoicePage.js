import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPizzaOrder } from "../state/pizza/selectors";

export const PizzaOrderInvoicePage = () => {
  const pizzaOrder = useSelector(getPizzaOrder);

  const getCurrentDate = () => {
    const date = new Date();
    const dateFormat = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    };
    return date.toLocaleString("en-US", dateFormat);
  };

  return (
    <>
      <table>
        <tbody>
          <tr className="paymet-method">
            <td>Your Pizza Order:</td>

            <td>
              {pizzaOrder.size} cm, {pizzaOrder.dough ?? ""},{" "}
              {pizzaOrder.sauce ?? ""}, {pizzaOrder.cheese ?? ""},{" "}
              {pizzaOrder.meat ?? ""}, {pizzaOrder.vegetables ?? ""}
            </td>
          </tr>
          <tr className="paymet-method">
            <td>Payment Method:</td>

            <td>Credit Card</td>
          </tr>

          <tr className="date">
            <td>Date:</td>

            <td>{getCurrentDate()}</td>
          </tr>

          <tr className="item">
            <td>Item</td>

            <td>Pizza</td>
          </tr>

          <tr className="total">
            <td>Total:</td>

            <td>{pizzaOrder.price}</td>
          </tr>
        </tbody>
      </table>
      <hr />
      <Link to="/orders-details">Orders Details Page</Link>
    </>
  );
};
