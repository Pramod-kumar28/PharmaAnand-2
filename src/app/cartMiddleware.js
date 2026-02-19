export const cartMiddleware = store => next => action => {
  const result = next(action);
  
  // Save cart to localStorage on certain actions
  const cartActions = [
    'cart/addItemToCart',
    'cart/removeItemFromCart',
    'cart/updateItemQuantity',
    'cart/clearCart',
    'cart/setShippingAddress',
    'cart/setPaymentMethod'
  ];
  
  if (cartActions.includes(action.type)) {
    const state = store.getState();
    const cartData = {
      items: state.cart.items,
      totalQuantity: state.cart.totalQuantity,
      totalAmount: state.cart.totalAmount,
      shippingAddress: state.cart.shippingAddress,
      paymentMethod: state.cart.paymentMethod
    };
    localStorage.setItem('cart', JSON.stringify(cartData));
  }
  
  return result;
};