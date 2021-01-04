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
import { PrivateRoute } from "./PrivateRoute";

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
        <PrivateRoute path="/order-builder" redirectPath="/login">
          <PizzaOrderBuilderPage />
        </PrivateRoute>
        <PrivateRoute path="/order-preview" redirectPath="/login">
          <PizzaOrderPreviewPage />
        </PrivateRoute>
        <PrivateRoute path="/order-checkout" redirectPath="/login">
          <PizzaOrderCheckoutPage />
        </PrivateRoute>
        <PrivateRoute path="/order-invoice" redirectPath="/login">
          <PizzaOrderInvoicePage />
        </PrivateRoute>
        <PrivateRoute path="/orders-details" redirectPath="/login">
          <PizzaOrdersDetailsPage />
        </PrivateRoute>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </>
  );
}
export default App;
