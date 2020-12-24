import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import { ToppingsPreviewPage } from "./ToppingsPreviewPage";
import { CreateToppingsPage } from "./CreateToppingsPage";
import { ToppingEditPage } from "./ToppingsPreviewPage/ToppingEditPage";
import { NotFoundPage } from "./NotFoundPage";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Create Toppings</Link>
          </li>
          <li>
            <Link to="/toppings-preview">Toppings Details</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/">
          <CreateToppingsPage />
        </Route>
        <Route path="/toppings-preview">
          <ToppingsPreviewPage />
        </Route>
        <Route path="/topping-edit">
          <ToppingEditPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </>
  );
};
export default App;
