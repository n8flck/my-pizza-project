import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { PizzaOrderCheckoutPage } from "./PizzaOrderCheckoutPage";
import { act } from "react-dom/test-utils";

describe("PizzaOrderCheckoutPage", () => {
  const registerSubmit = jest.fn();

  it("renders correctly", () => {
    const { getByText } = render(
      <MemoryRouter>
        <PizzaOrderCheckoutPage registerSubmit={registerSubmit} />
      </MemoryRouter>
    );
    expect(getByText("Credit card number:")).toBeInTheDocument();
  });

  describe("on submit", () => {
    it("collects credit card details", async () => {
      const { getByText, getByLabelText } = render(
        <MemoryRouter>
          <PizzaOrderCheckoutPage registerSubmit={registerSubmit} />
        </MemoryRouter>
      );
      fireEvent.input(getByLabelText("Name on Card"), {
        target: { value: "Ivan Ivanov" },
      });
      fireEvent.input(getByLabelText("Credit card number:"), {
        target: { value: "3333 4444 5555 6666" },
      });
      fireEvent.input(getByLabelText("Exp Month"), {
        target: { value: "September" },
      });
      fireEvent.input(getByLabelText("Exp Year"), {
        target: { value: "1986" },
      });
      fireEvent.input(getByLabelText("CVV"), {
        target: { value: "555" },
      });

      await act(async () => {
        fireEvent.click(getByText("Pay"));
      });

      expect(registerSubmit).toBeCalledWith({
        cardholder: "Ivan Ivanov",
        cardnumber: "3333 4444 5555 6666",
        expmonth: "September",
        expyear: "1986",
        cvv: "555",
      });
    });
  });

  describe("on card number change", () => {
    it("num split by four digits", async () => {
      const { getByLabelText } = render(
        <MemoryRouter>
          <PizzaOrderCheckoutPage registerSubmit={registerSubmit} />
        </MemoryRouter>
      );
      const inputText = getByLabelText("Credit card number:");
      fireEvent.input(inputText, {
        target: { value: "3333444455556666" },
      });

      expect(inputText.value).toEqual("3333 4444 5555 6666");
    });

    it("card supports 19 digits", async () => {
      const { getByLabelText } = render(
        <MemoryRouter>
          <PizzaOrderCheckoutPage />
        </MemoryRouter>
      );
      const inputText = getByLabelText("Credit card number:");
      fireEvent.input(inputText, {
        target: { value: "33334444555566667777" },
      });

      expect(inputText.value).toEqual("3333 4444 5555 6666");
    });
  });
});
