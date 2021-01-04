const initialState = false;

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "auth/authenticated": {
      return {
        ...state,
        state: !state,
        data: action.payload,
      };
    }
    case "auth/unauthenticated": {
      return state;
    }
    case "auth/authentication_error": {
      return state;
    }
    case "auth/authentication_remove": {
      return state;
    }
    default:
      return state;
  }
};
