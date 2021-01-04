export const ingredientsReducer = (
  state = { pending: true, error: null, data: null },
  action
) => {
  switch (action.type) {
    case "ingredients/success": {
      return {
        ...state,
        error: null,
        data: action.payload,
        pending: false,
      };
    }
    case "ingredients/error": {
      return {
        ...state,
        error: action.payload,
        pending: false,
      };
    }
    case "ingredients/request": {
      return {
        ...state,
        pending: true,
      };
    }
    default:
      return state;
  }
};
