import { getAuthenticationStatus } from "./selectors";

describe("getAuthenticationStatus", () => {
  it("returns authentification boolean", () => {
    const state = {
      ingredients: {},
      pizzaOrder: {},
      auth: { data: { uname: "TEST_NAME", psw: "TEST_PSW" }, state: true },
    };
    expect(getAuthenticationStatus(state)).toBe(true);
  });
});
