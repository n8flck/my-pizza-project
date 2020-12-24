const { render, waitFor } = require("@testing-library/react");
const { act } = require("react-dom/test-utils");
const { getToppingById } = require("../api");
const { ToppingEditPage } = require("./ToppingEditPage");
import { createMemoryHistory } from "history";
import { MemoryRouter } from "react-router-dom";
const history = createMemoryHistory();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: "/topping-edit",
    search: "?query=abc",
    state: { detail: "1234567" },
  }),
}));

jest.mock("../api", () => ({
  getToppingById: jest.fn(),
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
      getToppingById.mockImplementation(() => getControlledPromise().promise);
      const { getByText } = render(
        <MemoryRouter>
          <ToppingEditPage />
        </MemoryRouter>
      );
      expect(getByText("Loading...")).toBeInTheDocument();
    });
  });

  describe("with invalid responce", () => {
    it("shows error message", async () => {
      getToppingById.mockImplementation(() => promise);
      const { promise, reject } = getControlledPromise();
      reject({ message: "error" });
      const { container } = render(
        <MemoryRouter>
          <ToppingEditPage />
        </MemoryRouter>
      );

      await waitFor(() => {
        expect(container.innerHTML).toMatch("ERROR: error");
      });
    });
  });

  describe("with valid responce", () => {
    it("renders orders", async () => {
      const { promise, resolve } = getControlledPromise();
      getToppingById.mockImplementation(() => promise);
      resolve({
        category: "sauces",
        id: "12345567",
        image: "12345567.blob",
        name: "Secret Ingredient 2.0",
        price: "201",
        slug: "12345567",
      });
      const { container } = render(
        <MemoryRouter>
          <ToppingEditPage />
        </MemoryRouter>
      );

      await waitFor(() => {
        expect(container.innerHTML).toMatch("Secret Ingredient 2.0");
      });
    });
  });
});
