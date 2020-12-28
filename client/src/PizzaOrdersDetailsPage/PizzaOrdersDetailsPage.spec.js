const { render, waitFor } = require("@testing-library/react");
const { act } = require("react-dom/test-utils");
const { getOrders } = require("../shared/api");
const { PizzaOrdersDetailsPage } = require("./PizzaOrdersDetailsPage");

jest.mock("../shared/api", () => ({
  getOrders: jest.fn(),
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

describe("PizzaOrderDetails", () => {
  describe("while loading", () => {
    it("shows loading screen", () => {
      getOrders.mockImplementation(() => getControlledPromise().promise);
      const { getByText } = render(<PizzaOrdersDetailsPage />);
      expect(getByText("Loading...")).toBeInTheDocument();
    });
  });

  describe("with invalid responce", () => {
    it("shows error message", async () => {
      getOrders.mockImplementation(() => promise);
      const { promise, reject } = getControlledPromise();
      reject({ message: "error" });
      const { container } = render(<PizzaOrdersDetailsPage />);

      await waitFor(() => {
        expect(container.innerHTML).toMatch("ERROR: error");
      });
    });
  });

  describe("with valid responce", () => {
    it("renders orders", async () => {
      const { promise, resolve } = getControlledPromise();
      getOrders.mockImplementation(() => promise);
      resolve([{
        id: "33333",
        name: "YURY",
        ingredients: "30,Thin,Tomato,,,,200",
        address: "TEST 304",
        card_number: "2222 3333 3334 4444",
      }]);
      const { container } = render(<PizzaOrdersDetailsPage />);

      await waitFor(() => {
        expect(container.innerHTML).toMatch("CUSTOMER: YURY");
      });
    });
  });
});
