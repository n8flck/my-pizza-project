import React from "react";
import PizzaSizeComponent from "./PizzaSizeComponent";
import PizzaDoughComponent from "./PizzaDoughComponent";
import PizzaSauceComponent from "./PizzaSauceComponent";
import PizzaCheeseComponent from "./PizzaCheeseComponent";
import PizzaVegsComponent from "./PizzaVegsComponent";
import PizzaHamComponent from "./PizzaHamComponent";
import PizzaOrderConfirmationPopup from "./PizzaOrderConfirmationPopup";

const PizzaOrderForm = () => {
  const [size, setSize] = React.useState("");
  const [price, setPrice] = React.useState(0);
  const [dough, setDough] = React.useState("");
  const [sauce, setSauce] = React.useState("");
  const [cheese, setCheese] = React.useState("");
  const [vegetable, setVegetable] = React.useState("");
  const [ham, setHam] = React.useState("");
  const [ingredients, setIngredients] = React.useState([]);
  const [isOpen, setIsOpen] = React.useState(false);

  const pizzaSizes = [
    { id: 0, pizzaSize: "30" },
    { id: 1, pizzaSize: "35" }
  ];

  const pizzaDoughs = [
    { id: 0, pizzaDough: "Thick" },
    { id: 1, pizzaDough: "Thin" }
  ];

  const pizzaSauces = [
    { id: 0, pizzaSauce: "Tomato" },
    { id: 1, pizzaSauce: "White" },
    { id: 2, pizzaSauce: "Spicy" }
  ];

  const pizzaCheeseTypes = [
    { id: 0, pizzaCheese: "Mozzarella" },
    { id: 1, pizzaCheese: "Cheddar" },
    { id: 2, pizzaCheese: "Dorblue" }
  ];
  const pizzaVegetablesTypes = [
    { id: 0, pizzaVegetable: "Tomatoes" },
    { id: 1, pizzaVegetable: "Mushrooms" },
    { id: 2, pizzaVegetable: "Pepper" }
  ];

  const pizzaHamTypes = [
    { id: 0, pizzaHam: "Bacon" },
    { id: 1, pizzaHam: "Pepperoni" },
    { id: 2, pizzaHam: "Ham" }
  ];

  const toggleIngredient = (ingredient) => {
    ingredients.includes(ingredient)
      ? setIngredients(ingredients.filter((i) => i !== ingredient))
      : setIngredients([...ingredients, ingredient]);
    return {
      ingredients
    };
  };

  const sizeChangedEvent = (event) => {
    setSize(event.target.value);
  };

  React.useEffect(() => {
    document.size = size;
    document.dough = dough;
    document.sauce = sauce;
    document.cheese = cheese;
    document.vegetable = vegetable;
    document.ham = ham;
    document.ingredients = ingredients;
    calculatePizzaPrice();
  });

  const doughChangedEvent = (event) => {
    setDough(event.target.value);
  };

  const sauceChangedEvent = (event) => {
    setSauce(event.target.value);
  };

  const cheeseChangedEvent = (event) => {
    setCheese(event.target.value);
    toggleIngredient(event.currentTarget.value);
  };

  const vegsChangedEvent = (event) => {
    setVegetable(event.target.value);
    toggleIngredient(event.currentTarget.value);
  };

  const hamChangedEvent = (event) => {
    setHam(event.target.value);
    toggleIngredient(event.currentTarget.value);
  };

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const calculatePizzaPrice = () => {
    let basePrice = 200;
    if (Number(size) === 35) {
      basePrice += 50;
    }
    const numberOfIngrediends = ingredients.length;
    basePrice += numberOfIngrediends * 29;
    setPrice(basePrice);
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto" }}>
      <h3>Order Pizza Form</h3>
      <form
        onSubmit={handleSubmit}
        className="orderPizzaForm"
        noValidate
        autoComplete="off"
      >
        <PizzaSizeComponent
          pizzaSizez={pizzaSizes}
          size={size}
          onChange={sizeChangedEvent}
        />
        <PizzaDoughComponent
          pizzaDoughs={pizzaDoughs}
          dough={dough}
          onChange={doughChangedEvent}
        />
        <PizzaSauceComponent
          pizzaSauces={pizzaSauces}
          sauce={sauce}
          onChange={sauceChangedEvent}
        />
        <PizzaCheeseComponent
          pizzaCheeseTypes={pizzaCheeseTypes}
          cheese={cheese}
          ingredients={ingredients}
          onChange={cheeseChangedEvent}
        />
        <PizzaVegsComponent
          pizzaVegetablesTypes={pizzaVegetablesTypes}
          vegetable={vegetable}
          ingredients={ingredients}
          onChange={vegsChangedEvent}
        />
        <PizzaHamComponent
          pizzaHamTypes={pizzaHamTypes}
          ham={ham}
          ingredients={ingredients}
          onChange={hamChangedEvent}
        />
        <p>
          <button onClick={togglePopup} type="submit">
            Final Price {price}
          </button>
        </p>
        {isOpen && (
          <PizzaOrderConfirmationPopup
            size={size}
            dough={dough}
            sauce={sauce}
            cheese={cheese}
            price={price}
            ingredients={ingredients}
            handleClose={togglePopup}
          />
        )}
      </form>
    </div>
  );
};

export default PizzaOrderForm;