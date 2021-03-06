# Getting Started with React

This is a first training project to get used to React basics. It will emulate real-life Pizza behavior. Will be further updated...

# Stage 1

Following changes have been added:

- Crete new app with Create React App;
- Create Component for Pizza Configurator;
- Add Pizza configuration options:
  - Pizza size radiobuttons: 30/35 cm
  - Dough radiobuttons: Thick/Thin
  - Sauce radiobuttons: Tomato/White/Spicy
  - Cheese checkboxes: Mozzarella/Cheddar/Dorblue
  - Vegitables checkboxes: Tomatoes/Mushrooms/Pepper
  - Meat checkboxes: Bacon/Pepperoni/Ham
- Show final price on Checkout:
  - Base pizza price: 200rub
  - Extra 50rub for 35cm size
  - +29р for every addition
- Order confirmation popup on button click:
  - Displaying Pizza configuration details
  - Displaying Final price

# Stage 2

Tests were added:

- useCollection
- pizzaOrderConfirmationPopup
- calculatePizzaPrice
- pizzaOrderForm

# Stage 3

Navigation and tests were added:

- pizzaOrderBuilderPage

# Stage 4

Login, Registration, Checkout forms were added. Tests:

- LoginPage.spec.js
- PizzaOrderCheckoutPage.spec.js
- RegistrationPage.spec.js

# Stage 5

Communication with server has been added. Order is sent to server now.
Orders received from server are displayed on PizzaOrdersDetailsPage.

# Stage 6

Global, authentification and ingredients state is controlled with Redux now.
Ingredients are received from Server.
Tests for reducers, selectors and thunk were added.
