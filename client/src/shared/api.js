export const createNewOrder = async (data) => {
    return await fetch("http://localhost:3000/orders", {
        method: "POST",
        body: data,
        headers: {
          "accept": "application/json",
        },
      }).then((result) => result.json())
  };

export const getOrders = async () => {
  return await fetch("http://localhost:3000/orders").then(
    (response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(response.statusText || "Orders were not returned");
      }
    }
  );
};
