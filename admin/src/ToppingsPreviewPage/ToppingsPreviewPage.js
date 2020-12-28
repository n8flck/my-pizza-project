import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { deleteTopping, getToppings } from "../api";
import "../styles.css";

export const ToppingsPreviewPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();
  const [error, setError] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const loadToppings = async () => {
      try {
        const json = await getToppings();
        setData(json);
        setIsLoading(false);
      } catch (error) {
        setError(error);
      }
    };
    loadToppings();
  }, []);

  if (error) {
    return <>ERROR: {error.message}</>;
  }

  if (isLoading) {
    return <>Loading...</>;
  }

  function handleClick(id, e) {
    history.push({
      pathname: "/topping-edit",
      search: "?query=abc",
      state: { detail: `${id}` },
    });
  }

  const handleDelete = async (id) => {
    const result = await deleteTopping(id);
    console.log(result);
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>
          <span>{item.name}</span>
          <button type="button" onClick={(e) => handleClick(item.id, e)}>
            Edit
          </button>
          <button type="button" onClick={() => handleDelete(item.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
