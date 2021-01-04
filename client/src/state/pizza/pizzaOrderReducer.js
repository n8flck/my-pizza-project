const initialState = {};

export const pizzaOrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case "pizza/set_pizzaOrder": {
      return action.payload;
    }
    default:
      return state;
  }
};
