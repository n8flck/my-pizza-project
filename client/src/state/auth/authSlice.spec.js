import { authReducer } from "./authSlice";

describe.skip("authReducer", () => {
  describe("user authenticated successfully", () => {
    it("user authenticated successfully", () => {
      const initialState = false;
      const action = {
        type: "auth/success",
        payload: { username: "eee", password: "rrr" },
      };
      expect(authReducer(initialState, action)).toEqual({
        state: true,
        data: { username: "test name", password: "test password" },
      });
    });
  });

  describe("verify default action returns state", () => {
    it("default action should return state", () => {
      const initialState = { foo: "bar" };
      const action = { type: "ingredients/fake_action" };
      expect(authReducer(initialState, action)).toEqual({ foo: "bar" });
    });
  });
});
