export const calculateDiscount = (price, discountPercent) => {
    if (price <= 0 || discountPercent < 0 || discountPercent > 100) {
        throw new Error('Invalid input values: Price must be positive and discount percentage must be between 0 and 100.');
    }

    const discountAmount = (price * discountPercent) / 100;
    const discountedPrice = price - discountAmount;

    return discountedPrice;
}