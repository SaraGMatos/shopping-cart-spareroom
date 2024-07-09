/**
 * Calculates the subtotal of the shopping cart.
 * @param {object} product The product we are calculating.
 * @example Product example
 *  const product = {
 *    code: "A",
 *    quantity: 3
 *  }
 * @param {number} normalPrice The product's usual price.
 * @param {number} minimumItemsForDiscount The minimum number of items needed for a discount to apply. For Product A, it will be 3; for Product B, it will be 2. It defaults to 1 for those products with no available offer.
 * @param {number} discountedPrice The price to apply to a particular number of items (3 items for Product A, and 2 items for Product B). For Product A, the discounted price will be 140; for Product B, it will be 60. It defaults to the normal price for those products with no available offer.
 * @returns {number} The total for the current product.
 *
 * @example Function example
 * const product = {
 *    code: "A",
 *    quantity: 2
 * };
 * const normalPrice = 50;
 * const minimumItemsForDiscount = 3;
 * const discountedPrice = 140;
 *
 * const productTotal = calculateProductTotal(product, normalPrice, minimumItemsForDiscount, discountedPrice);
 * console.log(productTotal);
 * Logs: 100
 */

function calculateProductTotal(
  product,
  normalPrice,
  minimumItemsForDiscount = 1,
  discountedPrice = normalPrice
) {
  let productTotal = 0;

  if (Object.keys(product).length === 0) {
    return productTotal;
  }

  const numOfItemsWithoutOffer = product.quantity % minimumItemsForDiscount;
  const numOfOffersToApply =
    (product.quantity - numOfItemsWithoutOffer) / minimumItemsForDiscount;

  const totalWithOfferApplied = numOfOffersToApply * discountedPrice;
  const totalWithoutOfferApplied = numOfItemsWithoutOffer * normalPrice;

  productTotal += totalWithOfferApplied + totalWithoutOfferApplied;

  return productTotal;
}

module.exports = calculateProductTotal;
