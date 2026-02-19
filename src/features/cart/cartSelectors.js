import { createSelector } from '@reduxjs/toolkit';

const selectCartState = state => state.cart;

export const selectCartItems = createSelector(
  [selectCartState],
  (cartState) => cartState.items || []
);

export const selectCartTotalQuantity = createSelector(
  [selectCartState],
  (cartState) => cartState.totalQuantity || 0
);

export const selectCartTotalAmount = createSelector(
  [selectCartState],
  (cartState) => cartState.totalAmount || 0
);

export const selectCartSubtotal = createSelector(
  [selectCartItems],
  (items) => items.reduce((total, item) => total + (item.price * item.quantity), 0)
);

export const selectCartDiscount = createSelector(
  [selectCartItems],
  (items) => items.reduce((total, item) => {
    const itemOriginalPrice = item.originalPrice || item.price;
    const itemDiscount = (itemOriginalPrice - item.price) * item.quantity;
    return total + itemDiscount;
  }, 0)
);

export const selectShippingAddress = createSelector(
  [selectCartState],
  (cartState) => cartState.shippingAddress
);

export const selectPaymentMethod = createSelector(
  [selectCartState],
  (cartState) => cartState.paymentMethod
);

export const selectCartItemCount = createSelector(
  [selectCartItems],
  (items) => items.length
);

export const selectHasPrescriptionItems = createSelector(
  [selectCartItems],
  (items) => items.some(item => item.prescriptionRequired)
);