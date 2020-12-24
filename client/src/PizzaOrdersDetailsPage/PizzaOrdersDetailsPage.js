import { useEffect, useState } from "react";
import { getOrders } from "../shared/api";

export const PizzaOrdersDetailsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    const loadData = async () => {
      try {
        const result = await getOrders();
        setData(result);
        setIsLoading(false);
      } catch (error) {
        setError(error);
      }
    };
    loadData();
  }, []);

  if (error) {
    return <>ERROR: {error.message}</>;
  }

  if (isLoading) {
    return <>Loading...</>;
  }

  return (
    <>
      <h1>Pizza Orders Details</h1>
      <hr />
      <div>
        {data.map((item, index) => (
          <div key={index} className="orders-list">
            <h4>Order #{(index += 1)}</h4>
            <ul>
              {/* <li>ORDER NUMBER: {item.id}</li> */}
              <li>CUSTOMER: {item.name}</li>
              <li>INGREDIENTS: {item.ingredients}</li>
              <li>ADDRESS: {item.address}</li>
              <li>CARD NUMBER: {item.card_number}</li>
            </ul>
          </div>
        ))}
        ;
      </div>
    </>
  );
};
