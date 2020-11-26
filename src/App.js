import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import { PizzaOrderBuilderPage } from "./PizzaOrderBuilderPage";
import { PizzaOrderPreviewPage } from "./PizzaOrderPreviewPage";
import { PizzaOrderCheckoutPage } from "./PizzaOrderCheckoutPage";
import { NotFoundPage } from "./NotFoundPage";
import { RegistrationPage } from "./RegistrationPage";
import { LoginPage } from "./LoginPage";
import { PizzaOrderInvoicePage } from "./PizzaOrderInvoicePage";
import { PizzaOrdersDetailsPage } from "./PizzaOrdersDetailsPage";

function App() {
  // const [pizzaOrder, setPizzaOrder] = React.useState();
  // const [showPopup, setShowPopup] = React.useState(false);
  // const Login = () => <h1>Login</h1>;
  // const Payment = () => <h1>Payment</h1>;
  // const Invoice = () => <h1>Invoice</h1>;
  // const OrderDetails = () => <h1>OrderDetails</h1>;

  // if (showPopup && pizzaOrder) {
  //   return (
  //     <>
  //       <PizzaOrderConfirmationPopup
  //         pizzaOrder={pizzaOrder}
  //         setShowPopup={setShowPopup}
  //       />
  //     </>
  //   );
  // } else {
  //   return (
  //     <>
  //       <PizzaOrderForm
  //         onPizzaOrderCreated={setPizzaOrder}
  //         setShowPopup={setShowPopup}
  //       />
  //     </>
  //   );
  // }

  return (
    <>
      {/* <nav>
        <Link to="/login">Login</Link>
        <Link to="/payment">Payment</Link>
        <Link to="/invoice">Invoice</Link>
        <Link to="/orderDetails">Order Details</Link>
      </nav> */}
      <Switch>
        <Route exact path="/">
          <RegistrationPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/pizza-order-builder">
          <PizzaOrderBuilderPage />
        </Route>
        <Route path="/pizza-order-preview">
          <PizzaOrderPreviewPage />
        </Route>
        <Route path="/pizza-order-checkout">
          <PizzaOrderCheckoutPage />
        </Route>
        <Route path="/pizza-order-invoice">
          <PizzaOrderInvoicePage />
        </Route>
        <Route path="/pizza-orders-details">
          <PizzaOrdersDetailsPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </>
  );
}
export default App;
