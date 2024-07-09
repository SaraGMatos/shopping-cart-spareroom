const calculateProductTotal = require("./util");

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
