import { getAuthenticationStatus } from "./selectors";

describe("getAuthenticationStatus", () => {
  it("returns authentification boolean", () => {
    const state = {
      ingredients: {},
      pizzaOrder: {},
      auth: { data: { username: "test name", password: "test password" }, state: true },
    };
    expect(getAuthenticationStatus(state)).toBe(true);
  });
});
