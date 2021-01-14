import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { RegistrationPage } from "./RegistrationPage";
import { act } from "react-dom/test-utils";

describe("RegistrationPage", () => {
  it("renders correctly", () => {
    const { getByText } = render(
      <MemoryRouter>
        <RegistrationPage />
      </MemoryRouter>
    );
    expect(getByText("Repeat Password")).toBeInTheDocument();
  });

  describe("on submit", () => {
    it("collects username passwords", async () => {
      const registrSubmit = jest.fn();

      const { getByText, getByLabelText } = render(
        <MemoryRouter>
          <RegistrationPage registrSubmit={registrSubmit} />
        </MemoryRouter>
      );
      fireEvent.input(getByLabelText("Email"), {
        target: { value: "test@mail.ru" },
      });
      fireEvent.input(getByLabelText("Password"), {
        target: { value: "12345" },
      });
      fireEvent.input(getByLabelText("Repeat Password"), {
        target: { value: "12345" },
      });

      await act(async () => {
        fireEvent.click(getByText("Register"));
      });

      expect(registrSubmit).toBeCalledWith({
        email: "test@mail.ru",
        password: "12345",
        repeatPassword: "12345",
      });
    });
  });

  describe("validate email", () => {
    it("validate email is populated", async () => {
      const registrSubmit = jest.fn();

      const { getByText } = render(
        <MemoryRouter>
          <RegistrationPage formSubmit={registrSubmit} />
        </MemoryRouter>
      );

      await act(async () => {
        fireEvent.click(getByText("Register"));
      });

      expect(getByText("Email is required")).toBeInTheDocument();
    });
  });

  describe("validate password", () => {
    it("validate password is populated", async () => {
      const registrSubmit = jest.fn();

      const { getByText } = render(
        <MemoryRouter>
          <RegistrationPage registrSubmit={registrSubmit} />
        </MemoryRouter>
      );

      await act(async () => {
        fireEvent.click(getByText("Register"));
      });

      expect(getByText("Password is required")).toBeInTheDocument();
    });
  });

  describe("validate repeat password", () => {
    it("validate repeat password is populated", async () => {
      const registrSubmit = jest.fn();

      const { getByText } = render(
        <MemoryRouter>
          <RegistrationPage registrSubmit={registrSubmit} />
        </MemoryRouter>
      );

      await act(async () => {
        fireEvent.click(getByText("Register"));
      });

      expect(getByText("Repeat Password field should not be blank")).toBeInTheDocument();
    });
  });
});
