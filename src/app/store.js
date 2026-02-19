// import { configureStore } from '@reduxjs/toolkit'
// import authReducer from '../features/auth/authSlice.js'
// import productsReducer from '../features/products/productSlice.js'
// import cartReducer from '../features/cart/cartSlice.js'

// export default configureStore({
//   reducer: {
//     auth: authReducer,
//     products: productsReducer,
//     cart: cartReducer,
//   },
// })

















import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/products/productSlice';
import cartReducer from '../features/cart/cartSlice';
import authReducer from '../features/auth/authSlice';
import { cartMiddleware } from './cartMiddleware';

export default configureStore({
  reducer: {
    products: productReducer,
    auth: authReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cartMiddleware),
});