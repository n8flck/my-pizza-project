export const createNewTopping = async (data) => {
  return await fetch("http://localhost:3000/ingredients", {
    method: "POST",
    body: data,
    headers: {
      accept: "application/json",
    },
  }).then((response) => response.json());
};

export const editTopping = async (id, data) => {
  return await fetch(`http://localhost:3000/ingredients/${id}`, {
    method: "PUT",
    body: data,
    headers: {
      accept: "application/json",
    },
  }).then((response) => response.json());
};

export const getToppings = async () => {
  return await fetch("http://localhost:3000/ingredients").then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(response.statusText || "Toppings were not returned");
    }
  });
};

export const getToppingById = async (id) => {
  return await fetch(`http://localhost:3000/ingredients/${id}`).then(
    (response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(response.statusText || "Topping was not returned");
      }
    }
  );
};

export const deleteTopping = async (id) => {
  return await fetch(`http://localhost:3000/ingredients/${id}`, {
    method: "DELETE",
    headers: {
      accept: "application/json",
    },
  }).then((response) => response.json());
};
