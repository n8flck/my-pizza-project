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
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Registration</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/order-builder">Pizza Order Form</Link>
          </li>
          <li>
            <Link to="/order-preview">Pizza Order Preview</Link>
          </li>
          <li>
            <Link to="/order-checkout">Order Checkout</Link>
          </li>
          <li>
            <Link to="/order-invoice">Invoice</Link>
          </li>
          <li>
            <Link to="/orders-details">Order Details</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/">
          <RegistrationPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/order-builder">
          <PizzaOrderBuilderPage />
        </Route>
        <Route path="/order-preview">
          <PizzaOrderPreviewPage />
        </Route>
        <Route path="/order-checkout">
          <PizzaOrderCheckoutPage />
        </Route>
        <Route path="/order-invoice">
          <PizzaOrderInvoicePage />
        </Route>
        <Route path="/orders-details">
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
