import { createSlice } from '@reduxjs/toolkit';

// Helper to calculate totals
const calculateTotals = (items) => {
  const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);
  const totalAmount = items.reduce((total, item) => total + (item.price * item.quantity), 0);
  return { totalQuantity, totalAmount };
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
    shippingAddress: null,
    paymentMethod: null
  },
  reducers: {
    addItemToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      
      if (existingItem) {
        existingItem.quantity += newItem.quantity || 1;
        existingItem.totalPrice = existingItem.quantity * existingItem.price;
      } else {
        state.items.push({
          ...newItem,
          quantity: newItem.quantity || 1,
          totalPrice: (newItem.quantity || 1) * newItem.price
        });
      }
      
      const { totalQuantity, totalAmount } = calculateTotals(state.items);
      state.totalQuantity = totalQuantity;
      state.totalAmount = totalAmount;
    },
    
    removeItemFromCart: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter(item => item.id !== id);
      
      const { totalQuantity, totalAmount } = calculateTotals(state.items);
      state.totalQuantity = totalQuantity;
      state.totalAmount = totalAmount;
    },
    
    updateItemQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      
      if (existingItem && quantity > 0) {
        existingItem.quantity = quantity;
        existingItem.totalPrice = quantity * existingItem.price;
      } else if (existingItem && quantity === 0) {
        state.items = state.items.filter(item => item.id !== id);
      }
      
      const { totalQuantity, totalAmount } = calculateTotals(state.items);
      state.totalQuantity = totalQuantity;
      state.totalAmount = totalAmount;
    },
    
    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
      state.shippingAddress = null;
      state.paymentMethod = null;
    },
    
    setShippingAddress: (state, action) => {
      state.shippingAddress = action.payload;
    },
    
    setPaymentMethod: (state, action) => {
      state.paymentMethod = action.payload;
    },
    
    initializeCart: (state, action) => {
      const savedCart = action.payload;
      if (savedCart) {
        state.items = savedCart.items || [];
        state.totalQuantity = savedCart.totalQuantity || 0;
        state.totalAmount = savedCart.totalAmount || 0;
        state.shippingAddress = savedCart.shippingAddress || null;
        state.paymentMethod = savedCart.paymentMethod || null;
      }
    }
  }
});

export const {
  addItemToCart,
  removeItemFromCart,
  updateItemQuantity,
  clearCart,
  setShippingAddress,
  setPaymentMethod,
  initializeCart
} = cartSlice.actions;

export default cartSlice.reducer;