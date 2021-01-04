export const authenticationSuccess = (payload) => ({
  type: "auth/success",
  payload,
});

export const unauthenticated = () => ({
  //better naming?
  type: "auth/unauthenticated",
});

export const authenticationError = () => ({
  type: "auth/error",
});

export const authenticationRemove = () => ({
  type: "auth/remove",
});
