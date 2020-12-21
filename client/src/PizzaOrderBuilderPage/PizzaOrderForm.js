import { useForm } from "react-hook-form";
import Checkbox from "../Checkbox";
import RadioButton from "../RadioButton";
import { calculatePizzaPrice } from "../shared/calculatePizzaPrice";

export const PizzaOrderForm = ({ onPizzaOrderCreated }) => {
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

  const price = calculatePizzaPrice(values);

  const onSubmit = (data) => {
    const newData = Object.assign(data, {price: price});
    onPizzaOrderCreated(newData);
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <RadioButton
          type={"size"}
          text={"Choose size"}
          register={register}
          name="size"
        />
        <RadioButton
          register={register}
          name="dough"
          type={"dough"}
          text={"Which Dough would you like?"}
        />
        <RadioButton
          register={register}
          name="sauce"
          type={"sauce"}
          text={"Would you like some Sauce?"}
        />
        <Checkbox
          register={register}
          name="cheese"
          type={"cheese"}
          text={"Any Cheese?"}
        />
        <Checkbox
          register={register}
          name="vegetables"
          type={"vegetables"}
          text={"How about some Vegetables?"}
        />
        <Checkbox
          register={register}
          name="meat"
          type={"meat"}
          text={"Have you tried our Meat?"}
        />
        <p>
          <button type="submit">Final Price {price}</button>
        </p>
      </form>
    </div>
  );
};
