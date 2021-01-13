const initialState = false;

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "auth/success": {
      return {
        ...state,
        state: !state,
        data: action.payload,
      };
    }
    case "auth/unauthenticated": {
      return state;
    }
    case "auth/error": {
      return state;
    }
    case "auth/remove": {
      return state;
    }
    default:
      return state;
  }
};
