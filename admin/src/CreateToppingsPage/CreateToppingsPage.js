import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { createNewTopping } from "../api";
import "../styles.css";

export const CreateToppingsPage = () => {
  const { register, handleSubmit } = useForm();
  const history = useHistory();

  const onSubmit = handleSubmit(async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("slug", data.slug);
    formData.append("price", data.price);
    formData.append("category", data.category);
    formData.append("image", new Blob([data.image[0]], { type: "image/png" }));

    const result = await createNewTopping(formData);
    history.push("/toppings-preview");
  });

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="name">
          <p>Name</p>
        </label>
        <input
          id="name"
          name="name"
          ref={register({ required: true })}
          type="text"
          placeholder="Ingredient Name"
        />
      </div>
      <div>
        <label htmlFor="slug">
          <p>Slug</p>
        </label>
        <input
          id="slug"
          name="slug"
          ref={register({ required: true })}
          type="text"
          placeholder="Ingredient ID"
        />
      </div>
      <div>
        <label htmlFor="price">
          <p>Price</p>
        </label>
        <input
          id="price"
          name="price"
          ref={register({ required: true })}
          type="text"
          placeholder="Ingredient Price"
        />
      </div>
      <div>
        <label htmlFor="category">
          <p>Category</p>
        </label>
        <select id="category" name="category" ref={register}>
          <option value="vegetables">Vegetables</option>
          <option value="sauces">Sauces</option>
          <option value="meat">Meat</option>
          <option value="cheese">Cheese</option>
        </select>
      </div>
      <div>
        <label htmlFor="image">
          <p>Browse...</p>
        </label>
        <input
          id="image"
          ref={register({ required: true })}
          type="file"
          name="image"
        />
      </div>
      <button>Submit</button>
    </form>
  );
};
