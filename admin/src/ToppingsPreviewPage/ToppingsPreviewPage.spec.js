const { render, waitFor } = require("@testing-library/react");
const { act } = require("react-dom/test-utils");
const { getToppings } = require("../api");
const { ToppingsPreviewPage } = require("./ToppingsPreviewPage");

jest.mock("../api", () => ({
  getToppings: jest.fn(),
}));

const getControlledPromise = () => {
  let resolve;
  let reject;
  const promise = new Promise((res, rej) => {
    resolve = res;
    reject = rej;
  });
  return { resolve, reject, promise };
};

describe("ToppingsPreviewPage", () => {
  describe("while loading", () => {
    it("shows loading screen", () => {
        getToppings.mockImplementation(() => getControlledPromise().promise);
      const { getByText } = render(<ToppingsPreviewPage />);
      expect(getByText("Loading...")).toBeInTheDocument();
    });
  });

  describe("with invalid responce", () => {
    it("shows error message", async () => {
        getToppings.mockImplementation(() => promise);
      const { promise, reject } = getControlledPromise();
      reject({ message: "error" });
      const { container } = render(<ToppingsPreviewPage />);

      await waitFor(() => {
        expect(container.innerHTML).toMatch("ERROR: error");
      });
    });
  });

  describe("with valid responce", () => {
    it("renders orders", async () => {
      const { promise, resolve } = getControlledPromise();
      getToppings.mockImplementation(() => promise);
      resolve([
        {
          category: "sauces",
          id: "12345",
          image: "12345.blob",
          name: "Secret Ingredient",
          price: "101",
          slug: "12345",
        },
      ]);
      const { container } = render(<ToppingsPreviewPage />);

      await waitFor(() => {
        expect(container.innerHTML).toMatch("Secret Ingredient");
      });
    });
  });
});
