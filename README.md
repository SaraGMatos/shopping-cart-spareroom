# SpareRoom Shopping Cart Kata

A JavaScript solution to implementing a simple checkout system.

## How does this solution work?

We will be using a main function (`main.js`) which makes use of a utility function (`util.js`). Both have been documented using [JSDoc](https://jsdoc.app/), but we will also explain and expand below:

### Main function

Our main function, `calculateCartSubtotal`, will take a _cart_ in the form of an array of product objects like so:

```javascript
const cart = [
  { code: "A", quantity: 8 },
  { code: "B", quantity: 7 },
  { code: "C", quantity: 5 },
  { code: "D", quantity: 3 },
];
```

Each product object has a _unit price_ and some of them have a _special price_:

**Product A**:

- Unit Price: 50
- Special Price: 140 for 3

**Product B**:

- Unit Price: 35
- Special Price: 60 for 2

**Product C**:

- Unit Price: 25

**Product D**:

- Unit Price: 12

This `calculateCartSubtotal` function will return a number representing the subtotal of all the products present in the cart, taking into account any available offers. Let's see an example:

```javascript
const cart = [
  { code: "A", quantity: 3 },
  { code: "B", quantity: 5 },
  { code: "C", quantity: 4 },
  { code: "D", quantity: 3 },
];

const subtotal = calculateCartSubtotal(cart);
console.log(subtotal); //Logs: 431
```

### Utility function

As mentioned above, the main function makes use of a utility function, `calculateProductTotal`, whose purpose is to calculate the total of each iterated product object.

This function takes up to 4 parameters:

- **product (object)**. The product whose total we are calculating. For example:

  ```javascript
  const product = { code: "A", quantity: 4 };
  ```

- **normalPrice (number)**. The product's individual price.

  - For Product A, it is 50
  - For Product B, it is 35
  - For Product C, it is 25
  - For Product D, it is 12

- **minimumItemsForDiscount (number)**. The minimum number of items needed for a discount to apply.

  - For Product A, it is 3
  - For Product B, it is 2
  - Defaults to 1 for those products with no available offer

- **specialPrice (number)**. The price to apply to a particular number of items.
  - For Product A, it is 140 for 3
  - For Product B, it is 60 for 2
  - Defaults to the normal price for those products with no available offer

This `calculateProductTotal` function will evaluate the total for the current Product object applying any existing special prices and will return a number representing that total. For example:

```javascript
const product = {
  code: "A",
  quantity: 2,
};
const normalPrice = 50;
const minimumItemsForDiscount = 3;
const specialPrice = 140;

const productTotal = calculateProductTotal(
  product,
  normalPrice,
  minimumItemsForDiscount,
  specialPrice
);
console.log(productTotal);
Logs: 100;
```

## Run this project locally

1. If you have node.js installed on your machine, ensure that you have at least the 21.6.1 version and skip to step 3
2. If you don't have node.js installed, please follow the [node.js installation guide](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs)
3. Clone this repository by pasting the following on your terminal: `git clone https://github.com/SaraGMatos/shopping-cart-spareroom`
4. Once you are in the project folder, install node package manager (npm) to set up needed dependencies. Paste this on your terminal: `npm install`

## Testing

Both the main function and the utility function have been tested using [Jest](https://jestjs.io/), one of the more popular JavaScript testing frameworks.

For the sake of organisation and separating concerns, the tests suites have been placed in a `__tests__` folder, at root level. Here, there are two files with the tests suites for the main function (`main.test.js`) and the utility function (`util.test.js`).

Both functions have been built through test driven development. The tests can be run and a coverage report can be generated locally by following the below steps:

1. If you haven't set up the project locally, please follow the steps in the previous section

2. Type `npx jest --coverage` on the terminal to run the tests and generate the report
