export const authenticationSuccess = (payload) => ({
  type: "auth/authenticated",
  payload,
});

export const notAuthenticated = () => ({
  //better naming?
  type: "auth/unauthenticated",
});

export const authenticationError = () => ({
  type: "auth/authentication_error",
});

export const authenticationRemove = () => ({
  type: "auth/authentication_remove",
});
