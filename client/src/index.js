import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { PizzaProvider } from "./PizzaContext";
import { IngredientsProvider } from "./IngredientsContext";

ReactDOM.render(
  <React.StrictMode>
      <PizzaProvider>
      <IngredientsProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
        </IngredientsProvider>
      </PizzaProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
