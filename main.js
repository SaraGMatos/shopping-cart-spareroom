function calculateCartSubtotal(cart) {
  let subtotal = 0;
  let normalPrice;
  let discountedPrice;
  let minimumItemsForDiscount;

  for (const product of cart) {
    let numOfItemsWithoutOffer;
    let numOfOffersToApply;
    let totalWithOfferApplied;
    let totalWithoutOfferApplied;

    switch (product.code) {
      case "A":
        normalPrice = 50;
        discountedPrice = 140;
        minimumItemsForDiscount = 3;

        numOfItemsWithoutOffer = product.quantity % minimumItemsForDiscount;
        numOfOffersToApply =
          (product.quantity - numOfItemsWithoutOffer) / minimumItemsForDiscount;
        totalWithOfferApplied = numOfOffersToApply * discountedPrice;
        totalWithoutOfferApplied = numOfItemsWithoutOffer * normalPrice;

        subtotal += totalWithOfferApplied + totalWithoutOfferApplied;

        break;
      case "B":
        normalPrice = 35;
        discountedPrice = 60;
        minimumItemsForDiscount = 2;

        numOfItemsWithoutOffer = product.quantity % minimumItemsForDiscount;
        numOfOffersToApply =
          (product.quantity - numOfItemsWithoutOffer) / minimumItemsForDiscount;
        totalWithOfferApplied = numOfOffersToApply * discountedPrice;
        totalWithoutOfferApplied = numOfItemsWithoutOffer * normalPrice;

        subtotal += totalWithOfferApplied + totalWithoutOfferApplied;

        break;
      case "C":
        normalPrice = 25;
        discountedPrice = 25;
        minimumItemsForDiscount = 1;

        numOfItemsWithoutOffer = product.quantity % minimumItemsForDiscount;
        numOfOffersToApply =
          (product.quantity - numOfItemsWithoutOffer) / minimumItemsForDiscount;
        totalWithOfferApplied = numOfOffersToApply * discountedPrice;
        totalWithoutOfferApplied = numOfItemsWithoutOffer * normalPrice;

        subtotal += totalWithOfferApplied + totalWithoutOfferApplied;
        break;
      case "D":
        normalPrice = 12;
        discountedPrice = 12;
        minimumItemsForDiscount = 1;

        numOfItemsWithoutOffer = product.quantity % minimumItemsForDiscount;
        numOfOffersToApply =
          (product.quantity - numOfItemsWithoutOffer) / minimumItemsForDiscount;
        totalWithOfferApplied = numOfOffersToApply * discountedPrice;
        totalWithoutOfferApplied = numOfItemsWithoutOffer * normalPrice;

        subtotal += totalWithOfferApplied + totalWithoutOfferApplied;
        break;
    }
  }

  return subtotal;
}

module.exports = calculateCartSubtotal;
