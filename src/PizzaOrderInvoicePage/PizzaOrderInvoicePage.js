import { Link } from "react-router-dom";

export const PizzaOrderInvoicePage = () => {
  return (
    <>
      <table>
        <tr class="paymet-method">
          <td>Payment Method:</td>

          <td>Credit Card</td>
        </tr>

        <tr class="date">
          <td>Date:</td>

          <td>24-NOV-2020</td>
        </tr>

        <tr class="date">
          <td>Time:</td>

          <td>22:15</td>
        </tr>

        <tr class="item">
          <td>Item</td>

          <td>Pizza</td>
        </tr>

        <tr class="total">
          <td>Total:</td>

          <td>$385.00</td>
        </tr>
      </table>
      <hr />
      <Link to="/orders-details">Orders Details Page</Link>
    </>
  );
};
