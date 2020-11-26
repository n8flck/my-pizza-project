import { useState } from "react";

export const useCollection = (initialValue) => {
  const [state, setState] = useState(initialValue || []);

  const addItem = (item) => {
    setState((i) => [...i, item]);
  };

  const removeItem = (item) => {
    setState((i) => i.filter((storedItem) => storedItem !== item));
  };

  return [state, addItem, removeItem];
};
