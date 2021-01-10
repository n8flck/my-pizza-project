import { fetchIngredients } from "./thunk";

describe.skip("fetchIngredients", () => {
  it("fetches ingredients and dispatches ingredientsSuccess action with its value", async () => {
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
        {
          id: "aucPQypg",
          name: "Cheddar",
          slug: "Cheddar",
          price: 29,
          category: "cheese",
          image: "Cheddar.blob",
        },
        {
          id: "b-XkGuO_",
          name: "Dorblue",
          slug: "Dorblue",
          price: 29,
          category: "cheese",
          image: "Dorblue.blob",
        },
        {
          id: "qwoqa1Jx",
          name: "Tomatoes",
          slug: "Tomatoes",
          price: 29,
          category: "vegetables",
          image: "Tomatoes.blob",
        },
        {
          id: "QejbRCV0",
          name: "Mushrooms",
          slug: "Mushrooms",
          price: 29,
          category: "vegetables",
          image: "Mushrooms.blob",
        },
        {
          id: "ya_FocPe",
          name: "Pepper",
          slug: "Pepper",
          price: 29,
          category: "vegetables",
          image: "Pepper.blob",
        },
        {
          id: "QKipugpn",
          name: "Ham",
          slug: "Ham",
          price: 29,
          category: "meat",
          image: "Ham.blob",
        },
        {
          id: "v2I2aU1n",
          name: "Bacon",
          slug: "Bacon",
          price: 29,
          category: "meat",
          image: "Bacon.blob",
        },
        {
          id: "oAlmUWaG",
          name: "Pepperoni",
          slug: "Pepperoni",
          price: 29,
          category: "meat",
          image: "Pepperoni.blob",
        },
      ],
    });
  });
});
