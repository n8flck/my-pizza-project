import { authReducer } from "./authSlice";

describe.skip("authReducer", () => {
  describe("user authenticated successfully", () => {
    it("user authenticated successfully", () => {
      const initialState = false;
      const action = {
        type: "auth/success",
        payload: { uname: "eee", psw: "rrr" },
      };
      expect(authReducer(initialState, action)).toEqual({
        state: true,
        data: { uname: "eee", psw: "rrr" },
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
