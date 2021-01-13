import { fetchIngredients } from "./thunk";

jest.mock("../../shared/api", () => ({
  getToppings: async () => ({
    id: "HkhoE-aq",
    name: "Mozzarella",
    slug: "Mozzarella",
    price: 29,
    category: "cheese",
    image: "Mozzarella.blob",
  }),
}));

describe("fetchIngredients", () => {
  it.skip("fetches ingredients and dispatches ingredientsSuccess action with its value", async () => {
    const dispatch = jest.fn();
    await fetchIngredients()(dispatch);
    expect(dispatch).toBeCalledWith({
      type: "ingredients/success",
      payload: [
        {
          id: "HkhoE-aq",
          name: "Mozzarella",
          slug: "Mozzarella",
          price: 29,
          category: "cheese",
          image: "Mozzarella.blob",
        },
      ],
    });
  });
});
