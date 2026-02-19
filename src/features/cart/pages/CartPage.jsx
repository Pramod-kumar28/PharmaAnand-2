// import React from 'react'
// import { useNavigate, Link } from 'react-router-dom'
// import { motion } from 'framer-motion'
// import { useSelector, useDispatch } from 'react-redux'
// import {
//   FaArrowLeft,
//   FaTrash,
//   FaMinus,
//   FaPlus,
//   FaLock,
//   FaShieldAlt,
//   FaCcVisa,
//   FaCcMastercard,
//   FaCcAmex,
//   FaCcPaypal,
//   FaShoppingCart
// } from 'react-icons/fa'

// const CartPage = () => {
//   const navigate = useNavigate()
//   const dispatch = useDispatch()
  
//   // Mock cart data - replace with Redux state
//   const cartItems = [
//     {
//       id: 1,
//       name: "Digene Acidity & Gas Relief Tablets",
//       brand: "Digene",
//       price: 85,
//       originalPrice: 100,
//       quantity: 2,
//       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3VkEI9N23Td-O22z6Hwq4vG55-W84VSGddQ&s",
//       category: "stomach-care",
//       prescriptionRequired: false
//     },
//     {
//       id: 2,
//       name: "Metformin Hydrochloride Tablets 500mg",
//       brand: "Sun Pharma",
//       price: 250,
//       originalPrice: 300,
//       quantity: 1,
//       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlk2IqgXndDxGyo5oS_MvWB-kpo5_EihTxyw&s",
//       category: "diabetes-care",
//       prescriptionRequired: true
//     },
//     {
//       id: 3,
//       name: "Cetaphil Gentle Skin Cleanser 500ml",
//       brand: "Cetaphil",
//       price: 899,
//       originalPrice: 1100,
//       quantity: 1,
//       image: "https://images.unsplash.com/photo-1556228578-9c360e1d8d34?w=400&h=400&fit=crop",
//       category: "skincare",
//       prescriptionRequired: false
//     }
//   ]

//   const updateQuantity = (id, newQuantity) => {
//     if (newQuantity < 1) return
//     console.log(`Update quantity for ${id} to ${newQuantity}`)
//     // Dispatch update action
//   }

//   const removeItem = (id) => {
//     console.log(`Remove item ${id}`)
//     // Dispatch remove action
//   }

//   const calculateSubtotal = () => {
//     return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
//   }

//   const calculateDiscount = () => {
//     return cartItems.reduce((total, item) => 
//       total + ((item.originalPrice - item.price) * item.quantity), 0
//     )
//   }

//   const calculateTotal = () => {
//     return calculateSubtotal()
//   }

//   const handleProceedToCheckout = () => {
//     navigate("/checkout")
//   }

//   if (cartItems.length === 0) {
//     return (
//       <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 px-4 sm:px-6">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center py-12 sm:py-16 md:py-20">
//             <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 sm:mb-6 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full flex items-center justify-center">
//               <FaShoppingCart className="text-4xl sm:text-5xl md:text-6xl text-gray-500" />
//             </div>
//             <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Your Cart is Empty</h2>
//             <p className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-8 max-w-md mx-auto">
//               Add some products to your cart to get started with your purchase.
//             </p>
//             <Link
//               to="/products"
//               className="inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 shadow hover:shadow-lg transform hover:-translate-y-0.5"
//             >
//               <FaArrowLeft className="mr-2" />
//               Continue Shopping
//             </Link>
//           </div>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
//       <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8">
//         {/* Header - Responsive */}
//         <motion.div
//           initial={{ opacity: 0, y: -10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.3 }}
//           className="mb-6 sm:mb-8"
//         >
//           <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">Shopping Cart</h1>
//           <p className="text-gray-600 text-sm sm:text-base mt-1 sm:mt-2">
//             Review your items and proceed to checkout
//           </p>
//           <div className="mt-2 sm:mt-3 text-xs sm:text-sm text-gray-500">
//             <span className="font-medium">{cartItems.length} item{cartItems.length !== 1 ? 's' : ''} in cart</span>
//           </div>
//         </motion.div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
//           {/* Cart Items - Responsive */}
//           <div className="lg:col-span-2">
//             <div className="bg-white rounded-lg sm:rounded-xl shadow-sm border border-gray-200">
//               {/* Cart Header */}
//               <div className="border-b border-gray-200 px-4 sm:px-6 py-3 sm:py-4">
//                 <div className="flex justify-between items-center">
//                   <h2 className="text-base sm:text-lg font-semibold text-gray-900">
//                     Cart Items ({cartItems.length})
//                   </h2>
//                   <span className="text-xs sm:text-sm text-gray-500">
//                     Total: ₹{calculateTotal()}
//                   </span>
//                 </div>
//               </div>

//               {/* Cart Items List */}
//               <div className="divide-y divide-gray-200">
//                 {cartItems.map((item) => (
//                   <motion.div
//                     key={item.id}
//                     initial={{ opacity: 0, x: -10 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.3 }}
//                     className="p-4 sm:p-6"
//                   >
//                     <div className="flex gap-3 sm:gap-4">
//                       {/* Product Image */}
//                       <div className="flex-shrink-0">
//                         <img
//                           src={item.image}
//                           alt={item.name}
//                           className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-cover rounded-lg border border-gray-200"
//                           onError={(e) => {
//                             e.target.src = '/placeholder-image.jpg'
//                           }}
//                         />
//                         {item.prescriptionRequired && (
//                           <div className="mt-1 text-center">
//                             <span className="inline-block px-2 py-0.5 text-xs bg-blue-100 text-blue-800 rounded-full">
//                               Rx Required
//                             </span>
//                           </div>
//                         )}
//                       </div>

//                       {/* Product Details */}
//                       <div className="flex-1 min-w-0">
//                         <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-2">
//                           <div className="flex-1 min-w-0">
//                             <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-1 line-clamp-2">
//                               {item.name}
//                             </h3>
//                             <p className="text-gray-600 text-xs sm:text-sm mb-2">{item.brand}</p>
//                             <div className="flex items-center flex-wrap gap-1 sm:gap-2 mb-2">
//                               <span className="text-base sm:text-lg md:text-xl font-bold text-gray-900">
//                                 ₹{item.price}
//                               </span>
//                               {item.originalPrice > item.price && (
//                                 <>
//                                   <span className="text-xs sm:text-sm text-gray-500 line-through">
//                                     ₹{item.originalPrice}
//                                   </span>
//                                   <span className="text-green-600 text-xs font-semibold">
//                                     Save ₹{item.originalPrice - item.price}
//                                   </span>
//                                 </>
//                               )}
//                             </div>
//                           </div>
//                         </div>

//                         {/* Quantity Controls and Remove */}
//                         <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0 mt-3 sm:mt-4">
//                           <div className="flex items-center gap-1 sm:gap-3">
//                             <span className="text-xs sm:text-sm font-medium text-gray-700">Quantity:</span>
//                             <div className="flex items-center border border-gray-300 rounded-lg">
//                               <button
//                                 onClick={() => updateQuantity(item.id, item.quantity - 1)}
//                                 className="w-7 h-7 sm:w-7 sm:h-7 hover:bg-gray-100 transition-colors text-gray-600 flex items-center justify-center"
//                               >
//                                 <FaMinus className="text-xs sm:text-sm" />
//                               </button>
//                               <span className="w-7 h-7 sm:w-12 sm:h-9 min-w-[40px] text-center flex items-center justify-center text-sm sm:text-base font-medium border-x border-gray-300">
//                                 {item.quantity}
//                               </span>
//                               <button
//                                 onClick={() => updateQuantity(item.id, item.quantity + 1)}
//                                 className="w-7 h-7 sm:w-9 sm:h-9 hover:bg-gray-100 transition-colors text-gray-600 flex items-center justify-center"
//                               >
//                                 <FaPlus className="text-xs sm:text-sm" />
//                               </button>
//                             </div>
//                             <div className="text-xs sm:text-sm text-gray-600">
//                               = ₹{item.price * item.quantity}
//                             </div>
//                           </div>

//                           <button
//                             onClick={() => removeItem(item.id)}
//                             className="text-red-600 hover:text-red-700 font-medium text-xs sm:text-sm flex items-center gap-1 sm:gap-2 self-end sm:self-center"
//                           >
//                             <FaTrash className="text-xs sm:text-sm" />
//                             Remove
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>

//             {/* Continue Shopping */}
//             <div className="mt-4 sm:mt-6">
//               <Link
//                 to="/products"
//                 className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-sm sm:text-base"
//               >
//                 <FaArrowLeft className="mr-2" />
//                 Continue Shopping
//               </Link>
//             </div>
//           </div>

//           {/* Order Summary - Responsive */}
//           <div className="lg:col-span-1">
//             <div className="bg-white rounded-lg sm:rounded-xl shadow-sm border border-gray-200 sticky top-20 sm:top-24">
//               <div className="p-4 sm:p-6">
//                 <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Order Summary</h2>

//                 {/* Order Details */}
//                 <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
//                   <div className="flex justify-between items-center">
//                     <span className="text-gray-600 text-sm sm:text-base">Subtotal</span>
//                     <span className="font-medium text-sm sm:text-base">₹{calculateSubtotal()}</span>
//                   </div>
//                   <div className="flex justify-between items-center">
//                     <span className="text-gray-600 text-sm sm:text-base">Discount</span>
//                     <span className="text-green-600 font-medium text-sm sm:text-base">-₹{calculateDiscount()}</span>
//                   </div>
//                   <div className="flex justify-between items-center">
//                     <span className="text-gray-600 text-sm sm:text-base">Shipping</span>
//                     <span className="font-medium text-sm sm:text-base text-green-600">FREE</span>
//                   </div>
//                   <div className="border-t pt-2 sm:pt-3">
//                     <div className="flex justify-between items-baseline">
//                       <span className="text-base sm:text-lg font-semibold text-gray-900">Total</span>
//                       <span className="text-xl sm:text-2xl font-bold text-gray-900">₹{calculateTotal()}</span>
//                     </div>
//                     <p className="text-xs sm:text-sm text-gray-500 mt-1">Inclusive of all taxes</p>
//                   </div>
//                 </div>

//                 {/* Checkout Button */}
//                 <button
//                   onClick={handleProceedToCheckout}
//                   className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 shadow hover:shadow-lg transform hover:-translate-y-0.5 mb-3 sm:mb-4"
//                 >
//                   Proceed to Checkout
//                 </button>

//                 {/* Delivery Info */}
//                 <div className="mb-3 sm:mb-4 p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
//                   <div className="flex items-start gap-2">
//                     <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
//                       <FaLock className="text-green-600 text-xs" />
//                     </div>
//                     <div>
//                       <h4 className="font-semibold text-green-900 text-xs sm:text-sm mb-1">Secure Delivery</h4>
//                       <p className="text-green-800 text-xs">Same-day dispatch for orders before 3 PM</p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Payment Methods */}
//                 <div className="text-center mb-3 sm:mb-4">
//                   <p className="text-gray-500 text-xs sm:text-sm mb-2">We accept</p>
//                   <div className="flex justify-center gap-2 sm:gap-3">
//                     <FaCcVisa className="text-xl sm:text-2xl text-blue-600" />
//                     <FaCcMastercard className="text-xl sm:text-2xl text-red-600" />
//                     <FaCcAmex className="text-xl sm:text-2xl text-blue-800" />
//                     <FaCcPaypal className="text-xl sm:text-2xl text-blue-500" />
//                   </div>
//                 </div>

//                 {/* Security Badges */}
//                 <div className="pt-3 sm:pt-4 border-t border-gray-200">
//                   <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-xs text-gray-500">
//                     <div className="flex items-center gap-1">
//                       <FaLock className="text-green-500 text-xs" />
//                       <span>Secure checkout</span>
//                     </div>
//                     <div className="hidden sm:block text-gray-300">•</div>
//                     <div className="flex items-center gap-1">
//                       <FaShieldAlt className="text-blue-500 text-xs" />
//                       <span>SSL encrypted</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Additional Info */}
//             <div className="mt-4 sm:mt-6 bg-white rounded-lg sm:rounded-xl p-4 border border-gray-200">
//               <h3 className="font-semibold text-gray-900 text-sm sm:text-base mb-2">Need Help?</h3>
//               <ul className="space-y-1 text-xs sm:text-sm text-gray-600">
//                 <li>• Free shipping on orders above ₹499</li>
//                 <li>• 7-day easy returns</li>
//                 <li>• 24/7 customer support</li>
//                 <li>• Prescription verification available</li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Summary Bar */}
//         <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg p-4 z-10">
//           <div className="flex justify-between items-center mb-3">
//             <div>
//               <div className="text-sm text-gray-600">Total</div>
//               <div className="text-xl font-bold text-gray-900">₹{calculateTotal()}</div>
//             </div>
//             <button
//               onClick={handleProceedToCheckout}
//               className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-lg font-semibold text-sm flex-1 ml-4 max-w-[200px]"
//             >
//               Checkout
//             </button>
//           </div>
//           <div className="text-xs text-gray-500 text-center">
//             <FaLock className="inline mr-1 text-green-500" />
//             Secure payment • SSL encrypted
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default CartPage








































import React, { useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useSelector, useDispatch } from 'react-redux'
import {
  FaArrowLeft,
  FaTrash,
  FaMinus,
  FaPlus,
  FaLock,
  FaShieldAlt,
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
  FaCcPaypal,
  FaShoppingCart
} from 'react-icons/fa'

// Import cart ACTIONS from cartSlice.js
import {
  removeItemFromCart,
  updateItemQuantity,
  clearCart
} from '../cartSlice'  // This file contains only actions

// Import SELECTORS from cartSelectors.js (separate file!)
// IMPORTANT: Make sure you're importing from the correct file
import {
  selectCartItems,
  selectCartTotalAmount,
  selectCartSubtotal,
  selectCartDiscount
} from '../cartSelectors'  // This file contains the selectors

// OR if both files are combined in an index.js barrel file, import from there:
// import { 
//   removeItemFromCart, 
//   updateItemQuantity, 
//   clearCart,
//   selectCartItems,
//   selectCartTotalAmount,
//   selectCartSubtotal,
//   selectCartDiscount
// } from '../cart'  // If you have a barrel file

const CartPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  // Use Redux state instead of mock data
  const cartItems = useSelector(selectCartItems)
  const subtotal = useSelector(selectCartSubtotal)
  const discount = useSelector(selectCartDiscount)
  const total = useSelector(selectCartTotalAmount)

  // Calculate shipping (free over ₹499)
  const shipping = subtotal >= 499 ? 0 : 40

  // Debug log to check if selectors are working
  useEffect(() => {
    console.log('Cart Items:', cartItems)
    console.log('Subtotal:', subtotal)
    console.log('Discount:', discount)
    console.log('Total:', total)
  }, [cartItems, subtotal, discount, total])

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) {
      dispatch(removeItemFromCart(id))
    } else {
      dispatch(updateItemQuantity({ id, quantity: newQuantity }))
    }
  }

  const removeItem = (id) => {
    dispatch(removeItemFromCart(id))
  }

  const clearAllItems = () => {
    if (window.confirm('Are you sure you want to clear your cart?')) {
      dispatch(clearCart())
    }
  }

  const handleProceedToCheckout = () => {
    if (cartItems.length === 0) {
      alert('Your cart is empty. Add some products first.')
      return
    }
    
    // Check for prescription-required items
    const prescriptionItems = cartItems.filter(item => item.prescriptionRequired)
    if (prescriptionItems.length > 0) {
      navigate('/prescription-upload')
    } else {
      navigate("/checkout")
    }
  }

  // Save cart to localStorage on changes
  useEffect(() => {
    const cartData = {
      items: cartItems,
      totalQuantity: cartItems.reduce((total, item) => total + item.quantity, 0),
      totalAmount: total
    }
    localStorage.setItem('cart', JSON.stringify(cartData))
  }, [cartItems, total])

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-12 sm:py-16 md:py-20">
            <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 sm:mb-6 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full flex items-center justify-center">
              <FaShoppingCart className="text-4xl sm:text-5xl md:text-6xl text-gray-500" />
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Your Cart is Empty</h2>
            <p className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-8 max-w-md mx-auto">
              Add some products to your cart to get started with your purchase.
            </p>
            <Link
              to="/products"
              className="inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 shadow hover:shadow-lg transform hover:-translate-y-0.5"
            >
              <FaArrowLeft className="mr-2" />
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8">
        {/* Debug info - remove in production */}
        <div className="mb-4 p-2 bg-blue-50 border border-blue-200 rounded-lg text-center">
          <p className="text-xs text-blue-800">
            Cart loaded: {cartItems.length} items | Subtotal: ₹{subtotal.toFixed(2)} | Discount: ₹{discount.toFixed(2)}
          </p>
        </div>

        {/* Header - Responsive */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-6 sm:mb-8"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">Shopping Cart</h1>
              <p className="text-gray-600 text-sm sm:text-base mt-1 sm:mt-2">
                Review your items and proceed to checkout
              </p>
              <div className="mt-2 sm:mt-3 text-xs sm:text-sm text-gray-500">
                <span className="font-medium">{cartItems.length} item{cartItems.length !== 1 ? 's' : ''} in cart</span>
              </div>
            </div>
            <button
              onClick={clearAllItems}
              className="text-red-600 hover:text-red-700 font-medium text-sm flex items-center gap-2 self-start sm:self-center"
            >
              <FaTrash className="text-xs" />
              Clear Cart
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {/* Cart Items - Responsive */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg sm:rounded-xl shadow-sm border border-gray-200">
              {/* Cart Header */}
              <div className="border-b border-gray-200 px-4 sm:px-6 py-3 sm:py-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-base sm:text-lg font-semibold text-gray-900">
                    Cart Items ({cartItems.length})
                  </h2>
                  <span className="text-xs sm:text-sm text-gray-500">
                    Total: ₹{total.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Cart Items List */}
              <div className="divide-y divide-gray-200 max-h-[500px] overflow-y-auto">
                {cartItems.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-4 sm:p-6 hover:bg-gray-50"
                  >
                    <div className="flex gap-3 sm:gap-4">
                      {/* Product Image */}
                      <div className="flex-shrink-0">
                        <Link to={`/product/${item.id}`}>
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-cover rounded-lg border border-gray-200 hover:border-blue-500 transition-colors"
                            onError={(e) => {
                              e.target.src = '/placeholder-image.jpg'
                            }}
                          />
                        </Link>
                        {item.prescriptionRequired && (
                          <div className="mt-1 text-center">
                            <span className="inline-block px-2 py-0.5 text-xs bg-blue-100 text-blue-800 rounded-full">
                              Rx Required
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-2">
                          <div className="flex-1 min-w-0">
                            <Link to={`/product/${item.id}`}>
                              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-1 line-clamp-2 hover:text-blue-600 transition-colors">
                                {item.name}
                              </h3>
                            </Link>
                            <p className="text-gray-600 text-xs sm:text-sm mb-2">{item.brand}</p>
                            <div className="flex items-center flex-wrap gap-1 sm:gap-2 mb-2">
                              <span className="text-base sm:text-lg md:text-xl font-bold text-gray-900">
                                ₹{item.price?.toFixed(2) || '0.00'}
                              </span>
                              {item.originalPrice > item.price && (
                                <>
                                  <span className="text-xs sm:text-sm text-gray-500 line-through">
                                    ₹{item.originalPrice?.toFixed(2) || '0.00'}
                                  </span>
                                  <span className="text-green-600 text-xs font-semibold">
                                    Save ₹{((item.originalPrice || item.price) - item.price).toFixed(2)}
                                  </span>
                                </>
                              )}
                            </div>
                          </div>
                          
                          {/* Category Badge */}
                          <Link 
                            to={`/products/${item.category}`}
                            className="hidden sm:block"
                          >
                            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs hover:bg-gray-200 transition-colors">
                              {item.category?.replace('-', ' ') || 'General'}
                            </span>
                          </Link>
                        </div>

                        {/* Quantity Controls and Remove */}
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0 mt-3 sm:mt-4">
                          <div className="flex items-center gap-1 sm:gap-3">
                            <span className="text-xs sm:text-sm font-medium text-gray-700">Quantity:</span>
                            <div className="flex items-center border border-gray-300 rounded-lg">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="w-7 h-7 sm:w-9 sm:h-9 hover:bg-gray-100 transition-colors text-gray-600 flex items-center justify-center"
                              >
                                <FaMinus className="text-xs sm:text-sm" />
                              </button>
                              <span className="w-8 h-7 sm:w-12 sm:h-9 min-w-[40px] text-center flex items-center justify-center text-sm sm:text-base font-medium border-x border-gray-300">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="w-7 h-7 sm:w-9 sm:h-9 hover:bg-gray-100 transition-colors text-gray-600 flex items-center justify-center"
                              >
                                <FaPlus className="text-xs sm:text-sm" />
                              </button>
                            </div>
                            <div className="text-xs sm:text-sm text-gray-600">
                              = ₹{((item.price || 0) * item.quantity).toFixed(2)}
                            </div>
                          </div>

                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-red-600 hover:text-red-700 font-medium text-xs sm:text-sm flex items-center gap-1 sm:gap-2 self-end sm:self-center"
                          >
                            <FaTrash className="text-xs sm:text-sm" />
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Continue Shopping */}
            <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row gap-3">
              <Link
                to="/products"
                className="inline-flex items-center justify-center bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-800 px-6 py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 border border-gray-300"
              >
                <FaArrowLeft className="mr-2" />
                Continue Shopping
              </Link>
              
              <Link
                to="/products/all"
                className="inline-flex items-center justify-center bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 text-blue-700 px-6 py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 border border-blue-200"
              >
                Browse More Products
              </Link>
            </div>
          </div>

          {/* Order Summary - Responsive */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg sm:rounded-xl shadow-sm border border-gray-200 sticky top-20 sm:top-24">
              <div className="p-4 sm:p-6">
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Order Summary</h2>

                {/* Order Details */}
                <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm sm:text-base">Subtotal</span>
                    <span className="font-medium text-sm sm:text-base">₹{subtotal.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm sm:text-base">Discount</span>
                    <span className="text-green-600 font-medium text-sm sm:text-base">
                      -₹{discount.toFixed(2)}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm sm:text-base">Shipping</span>
                    {shipping === 0 ? (
                      <span className="text-green-600 font-medium text-sm sm:text-base">FREE</span>
                    ) : (
                      <span className="font-medium text-sm sm:text-base">₹{shipping.toFixed(2)}</span>
                    )}
                  </div>
                  
                  <div className="border-t pt-2 sm:pt-3">
                    <div className="flex justify-between items-baseline">
                      <span className="text-base sm:text-lg font-semibold text-gray-900">Total</span>
                      <span className="text-xl sm:text-2xl font-bold text-gray-900">
                        ₹{(total + shipping).toFixed(2)}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-500 mt-1">Inclusive of all taxes</p>
                    
                    {subtotal < 499 && (
                      <p className="text-xs sm:text-sm text-green-600 mt-1">
                        Add ₹{(499 - subtotal).toFixed(2)} more for free shipping
                      </p>
                    )}
                  </div>
                </div>

                {/* Checkout Button */}
                <button
                  onClick={handleProceedToCheckout}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 shadow hover:shadow-lg transform hover:-translate-y-0.5 mb-3 sm:mb-4"
                >
                  Proceed to Checkout
                </button>

                {/* Delivery Info */}
                <div className="mb-3 sm:mb-4 p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <FaLock className="text-green-600 text-xs" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-900 text-xs sm:text-sm mb-1">Secure Delivery</h4>
                      <p className="text-green-800 text-xs">
                        {shipping === 0 ? '🎉 Free shipping applied!' : 'Same-day dispatch for orders before 3 PM'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Payment Methods */}
                <div className="text-center mb-3 sm:mb-4">
                  <p className="text-gray-500 text-xs sm:text-sm mb-2">We accept</p>
                  <div className="flex justify-center gap-2 sm:gap-3">
                    <FaCcVisa className="text-xl sm:text-2xl text-blue-600" />
                    <FaCcMastercard className="text-xl sm:text-2xl text-red-600" />
                    <FaCcAmex className="text-xl sm:text-2xl text-blue-800" />
                    <FaCcPaypal className="text-xl sm:text-2xl text-blue-500" />
                  </div>
                </div>

                {/* Security Badges */}
                <div className="pt-3 sm:pt-4 border-t border-gray-200">
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <FaLock className="text-green-500 text-xs" />
                      <span>Secure checkout</span>
                    </div>
                    <div className="hidden sm:block text-gray-300">•</div>
                    <div className="flex items-center gap-1">
                      <FaShieldAlt className="text-blue-500 text-xs" />
                      <span>SSL encrypted</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-4 sm:mt-6 bg-white rounded-lg sm:rounded-xl p-4 border border-gray-200">
              <h3 className="font-semibold text-gray-900 text-sm sm:text-base mb-2">Need Help?</h3>
              <ul className="space-y-1 text-xs sm:text-sm text-gray-600">
                <li>• Free shipping on orders above ₹499</li>
                <li>• 7-day easy returns</li>
                <li>• 24/7 customer support</li>
                <li>• Prescription verification available</li>
                <li>• Order tracking via SMS & Email</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Mobile Summary Bar */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg p-4 z-10">
          <div className="flex justify-between items-center mb-3">
            <div>
              <div className="text-sm text-gray-600">Total</div>
              <div className="text-xl font-bold text-gray-900">₹{(total + shipping).toFixed(2)}</div>
            </div>
            <button
              onClick={handleProceedToCheckout}
              className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-lg font-semibold text-sm flex-1 ml-4 max-w-[200px]"
            >
              Checkout
            </button>
          </div>
          <div className="text-xs text-gray-500 text-center">
            <FaLock className="inline mr-1 text-green-500" />
            Secure payment • SSL encrypted
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage