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
