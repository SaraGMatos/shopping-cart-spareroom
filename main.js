const calculateProductTotal = require("./util");

/**
 * Calculates the cart subtotal.
 * @param {array.<Object>} cart An array of Product objects.
 * @example cart example
 * const cart = [{ code: "A", quantity: 3 },
        { code: "B", quantity: 5 },
        { code: "C", quantity: 4 },
        { code: "D", quantity: 3 }]
 * @returns {number} The subtotal for the passed cart.
 * 
 * @example function example
 * const cart = [{ code: "A", quantity: 3 },
        { code: "B", quantity: 5 },
        { code: "C", quantity: 4 },
        { code: "D", quantity: 3 }];
  *
  *const subtotal = calculateCartSubtotal(cart);
  *console.log(subtotal);
  *Logs: 431
 */
function calculateCartSubtotal(cart) {
  let cartSubtotal = 0;

  for (const product of cart) {
    switch (product.code) {
      case "A":
        cartSubtotal += calculateProductTotal(product, 50, 3, 140);
        break;

      case "B":
        cartSubtotal += calculateProductTotal(product, 35, 2, 60);
        break;

      case "C":
        cartSubtotal += calculateProductTotal(product, 25);
        break;

      case "D":
        cartSubtotal += calculateProductTotal(product, 12);
        break;
    }
  }

  return cartSubtotal;
}

module.exports = calculateCartSubtotal;
