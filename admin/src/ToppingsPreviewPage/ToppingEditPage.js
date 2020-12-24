import { useForm } from "react-hook-form";
import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { getToppingById, editTopping } from "../api";
import "../styles.css";

export const ToppingEditPage = () => {
  const [toppingData, setToppingData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const { register, handleSubmit } = useForm();
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const loadToppingData = async () => {
      try {
        const result = await getToppingById(location.state.detail);
        setToppingData(result);
        setIsLoading(false);
      } catch (error) {
        setError(error);
      }
    };
    loadToppingData();
  }, [location]);

  if (error) {
    return <>ERROR: {error.message}</>;
  }

  if (isLoading) {
    return <>Loading...</>;
  }

  const onSubmit = handleSubmit(async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("slug", data.slug);
    formData.append("price", data.price);
    formData.append("category", data.category);
    formData.append("image", new Blob([data.image[0]], { type: "image/png" }));
    const result = await editTopping(location.state.detail, formData);
    console.log(result);
    history.push("/toppings-preview");
  });

  console.log(toppingData);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          ref={register({ required: true })}
          type="text"
          placeholder="Ingredient Name"
          defaultValue={toppingData.name}
        />
      </div>
      <div>
        <label htmlFor="slug">Slug</label>
        <input
          id="slug"
          name="slug"
          ref={register({ required: true })}
          type="text"
          placeholder="Ingredient ID"
          defaultValue={toppingData.slug}
        />
      </div>
      <div>
        <label htmlFor="price">Price</label>
        <input
          id="price"
          name="price"
          ref={register({ required: true })}
          type="text"
          placeholder="Ingredient Price"
          defaultValue={toppingData.price}
        />
      </div>
      <div>
        <label htmlFor="category">
          <p>Category</p>
        </label>
        <select
          id="category"
          name="category"
          ref={register}
          defaultValue={toppingData.category}
        >
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
        <input id="image" ref={register} type="file" name="image" />
      </div>
      <button>Submit</button>
    </form>
  );
};
