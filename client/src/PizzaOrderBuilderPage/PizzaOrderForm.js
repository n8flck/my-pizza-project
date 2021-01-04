import { useForm } from "react-hook-form";
import Checkbox from "../Checkbox";
import RadioButton from "../RadioButton";
import { calculatePizzaPrice } from "../shared/calculatePizzaPrice";

export const PizzaOrderForm = ({
  cheese,
  meat,
  vegetables,
  onPizzaOrderCreated,
}) => {
  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      size: "30",
      dough: "Thin",
      sauce: "Tomato",
      cheese: [],
      vegetables: [],
      meat: [],
    },
  });

  const values = watch();

  const price = calculatePizzaPrice(
    values.size,
    [
      ...(values.cheese ?? []),
      ...(values.meat ?? []),
      ...(values.vegetables ?? []),
    ],
    [...(cheese ?? []), ...(meat ?? []), ...(vegetables ?? [])]
  );

  console.log(price);

  const onSubmit = (data) => {
    const newData = Object.assign(data, { price: price });
    onPizzaOrderCreated(newData);
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <RadioButton
          text={"Choose size"}
          register={register}
          name={"size"}
          base_ingredients={[
            { id: 0, name: "30", slug: "30", price: 0 },
            { id: 1, name: "35", slug: "35", price: 50 },
          ]}
        />
        <RadioButton
          register={register}
          name={"dough"}
          text={"Which Dough would you like?"}
          base_ingredients={[
            { id: 0, name: "Thick", slug: "Thick", price: 0 },
            { id: 1, name: "Thin", slug: "Thin", price: 0 },
          ]}
        />
        <RadioButton
          register={register}
          name={"sauce"}
          text={"Would you like some Sauce?"}
          base_ingredients={[
            { id: 0, name: "Tomato", slug: "Tomato", price: 0 },
            { id: 1, name: "White", slug: "White", price: 0 },
            { id: 2, name: "Spicy", slug: "Spicy", price: 0 },
          ]}
        />
        <Checkbox
          register={register}
          name={"cheese"}
          text={"Any Cheese?"}
          ingredients={cheese}
        />
        <Checkbox
          register={register}
          name={"vegetables"}
          text={"How about some Vegetables?"}
          ingredients={vegetables}
        />
        <Checkbox
          register={register}
          name={"meat"}
          text={"Have you tried our Meat?"}
          ingredients={meat}
        />
        <p>
          <button type="submit">Final Price {price}</button>
        </p>
      </form>
    </div>
  );
};
