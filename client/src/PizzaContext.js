import React, { useContext } from "react";
const { createContext } = require("react");

const PizzaContext = createContext();

export const PizzaProvider = ({ children }) => {
  const [pizzaOrder, setPizzaOrder] = React.useState();
  const [showPopup, setShowPopup] = React.useState(false);

  return (
    <PizzaContext.Provider
      value={{ pizzaOrder, setPizzaOrder, showPopup, setShowPopup }}
    >
      {children}
    </PizzaContext.Provider>
  );
};

export const usePizza = () => useContext(PizzaContext);
