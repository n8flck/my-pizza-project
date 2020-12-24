import { Link } from "react-router-dom";

export const PizzaOrderInvoicePage = () => {
  return (
    <>
      <table>
        <tbody>
        <tr className="paymet-method">
          <td>Payment Method:</td>

          <td>Credit Card</td>
        </tr>

        <tr className="date">
          <td>Date:</td>

          <td>24-NOV-2020</td>
        </tr>

        <tr className="date">
          <td>Time:</td>

          <td>22:15</td>
        </tr>

        <tr className="item">
          <td>Item</td>

          <td>Pizza</td>
        </tr>

        <tr className="total">
          <td>Total:</td>

          <td>$385.00</td>
        </tr>
        </tbody>
      </table>
      <hr />
      <Link to="/orders-details">Orders Details Page</Link>
    </>
  );
};
