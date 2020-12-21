import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { LoginPage } from "./LoginPage";
import { act } from "react-dom/test-utils";

describe("LoginPage", () => {
  it("renders correctly", () => {
    const { getByLabelText } = render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    );
    expect(getByLabelText("Username")).toBeInTheDocument();
    expect(getByLabelText("Password")).toBeInTheDocument();
  });

  describe("on submit", () => {
    it("collects username and password", async () => {
      const loginSubmit = jest.fn();

      const { getByText, getByLabelText } = render(
        <MemoryRouter>
          <LoginPage loginSubmit={loginSubmit} />
        </MemoryRouter>
      );
      fireEvent.input(getByLabelText("Username"), {
        target: { value: "Ivan" },
      });
      fireEvent.input(getByLabelText("Password"), {
        target: { value: "Ivanov" },
      });

      await act(async () => {
        fireEvent.click(getByText("Login"));
      });

      expect(loginSubmit).toBeCalledWith({
        uname: "Ivan",
        psw: "Ivanov",
      });
    });
  });

  describe("validate username", () => {
    it("validate username is populated", async () => {
      const formSubmit = jest.fn();

      const { getByText } = render(
        <MemoryRouter>
          <LoginPage formSubmit={formSubmit} />
        </MemoryRouter>
      );

      await act(async () => {
        fireEvent.click(getByText("Login"));
      });

      expect(getByText("Username is required")).toBeInTheDocument();
    });
  });

  describe("validate password", () => {
    it("validate password is populated", async () => {
      const formSubmit = jest.fn();

      const { getByText } = render(
        <MemoryRouter>
          <LoginPage formSubmit={formSubmit} />
        </MemoryRouter>
      );

      await act(async () => {
        fireEvent.click(getByText("Login"));
      });

      expect(getByText("Password is required")).toBeInTheDocument();;
    });
  });
});
