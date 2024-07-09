function calculateCartSubtotal(cart) {
  let subtotal = 0;

  for (const product of cart) {
    switch (product.code) {
      case "A":
        subtotal += product.quantity * 50;
        break;
      case "B":
        subtotal += product.quantity * 35;
        break;
      case "C":
        subtotal += product.quantity * 25;
        break;
      case "D":
        subtotal += product.quantity * 12;
    }
  }

  return subtotal;
}

module.exports = calculateCartSubtotal;
