// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { motion } from 'framer-motion'

// const CheckoutPage = () => {
//   const navigate = useNavigate()
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     phone: '',
//     address: '',
//     city: '',
//     state: '',
//     pincode: '',
//     paymentMethod: 'cod'
//   })

//   const [errors, setErrors] = useState({})

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     })
//     if (errors[e.target.name]) {
//       setErrors({
//         ...errors,
//         [e.target.name]: ''
//       })
//     }
//   }

//   const validateForm = () => {
//     const newErrors = {}
//     if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required'
//     if (!formData.email.trim()) newErrors.email = 'Email is required'
//     if (!formData.phone.trim()) newErrors.phone = 'Phone number is required'
//     if (!formData.address.trim()) newErrors.address = 'Address is required'
//     if (!formData.city.trim()) newErrors.city = 'City is required'
//     if (!formData.pincode.trim()) newErrors.pincode = 'Pincode is required'
//     return newErrors
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     const validationErrors = validateForm()
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors)
//       return
//     }

//     // Save order to localStorage
//     const order = {
//       id: `ORD${Date.now()}`,
//       date: new Date().toLocaleDateString(),
//       items: [
//         { name: 'Digene Tablets', quantity: 1, price: '₹85' },
//         { name: 'Metformin Tablets', quantity: 1, price: '₹250' }
//       ],
//       total: '₹335',
//       status: 'confirmed',
//       estimatedDelivery: '30-45 minutes',
//       paymentMethod: formData.paymentMethod,
//       shippingAddress: {
//         fullName: formData.fullName,
//         address: formData.address,
//         city: formData.city,
//         state: formData.state,
//         pincode: formData.pincode,
//         phone: formData.phone
//       }
//     }

//     // Save to localStorage
//     const existingOrders = JSON.parse(localStorage.getItem('orders')) || []
//     localStorage.setItem('orders', JSON.stringify([...existingOrders, order]))

//     // Navigate to order confirmation
//     navigate(`/track-order/${order.id}`)
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 py-8">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="mb-8">
//           <h1 className="text-3xl font-bold text-gray-900">Checkout</h1>
//           <p className="text-gray-600 mt-2">Complete your order in just a few steps</p>
//         </div>

//         <form onSubmit={handleSubmit}>
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//             {/* Left Column - Shipping & Payment */}
//             <div className="lg:col-span-2 space-y-8">
//               {/* Shipping Information */}
//               <motion.div
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
//               >
//                 <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
//                   <i className="fas fa-shipping-fast text-blue-600"></i>
//                   Shipping Information
//                 </h2>
                
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   {/* Full Name */}
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Full Name *
//                     </label>
//                     <input
//                       type="text"
//                       name="fullName"
//                       value={formData.fullName}
//                       onChange={handleChange}
//                       className={`w-full px-4 py-3 border ${
//                         errors.fullName ? 'border-red-300' : 'border-gray-300'
//                       } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
//                       placeholder="Enter your full name"
//                     />
//                     {errors.fullName && (
//                       <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
//                     )}
//                   </div>

//                   {/* Email */}
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Email Address *
//                     </label>
//                     <input
//                       type="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       className={`w-full px-4 py-3 border ${
//                         errors.email ? 'border-red-300' : 'border-gray-300'
//                       } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
//                       placeholder="Enter your email"
//                     />
//                     {errors.email && (
//                       <p className="mt-1 text-sm text-red-600">{errors.email}</p>
//                     )}
//                   </div>

//                   {/* Phone */}
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Phone Number *
//                     </label>
//                     <input
//                       type="tel"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       className={`w-full px-4 py-3 border ${
//                         errors.phone ? 'border-red-300' : 'border-gray-300'
//                       } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
//                       placeholder="Enter your phone number"
//                     />
//                     {errors.phone && (
//                       <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
//                     )}
//                   </div>

//                   {/* Address */}
//                   <div className="md:col-span-2">
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Address *
//                     </label>
//                     <textarea
//                       name="address"
//                       value={formData.address}
//                       onChange={handleChange}
//                       rows="3"
//                       className={`w-full px-4 py-3 border ${
//                         errors.address ? 'border-red-300' : 'border-gray-300'
//                       } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none`}
//                       placeholder="Enter your complete address"
//                     ></textarea>
//                     {errors.address && (
//                       <p className="mt-1 text-sm text-red-600">{errors.address}</p>
//                     )}
//                   </div>

//                   {/* City */}
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       City *
//                     </label>
//                     <input
//                       type="text"
//                       name="city"
//                       value={formData.city}
//                       onChange={handleChange}
//                       className={`w-full px-4 py-3 border ${
//                         errors.city ? 'border-red-300' : 'border-gray-300'
//                       } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
//                       placeholder="Enter your city"
//                     />
//                     {errors.city && (
//                       <p className="mt-1 text-sm text-red-600">{errors.city}</p>
//                     )}
//                   </div>

//                   {/* State */}
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       State
//                     </label>
//                     <input
//                       type="text"
//                       name="state"
//                       value={formData.state}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       placeholder="Enter your state"
//                     />
//                   </div>

//                   {/* Pincode */}
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Pincode *
//                     </label>
//                     <input
//                       type="text"
//                       name="pincode"
//                       value={formData.pincode}
//                       onChange={handleChange}
//                       className={`w-full px-4 py-3 border ${
//                         errors.pincode ? 'border-red-300' : 'border-gray-300'
//                       } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
//                       placeholder="Enter pincode"
//                     />
//                     {errors.pincode && (
//                       <p className="mt-1 text-sm text-red-600">{errors.pincode}</p>
//                     )}
//                   </div>
//                 </div>
//               </motion.div>

//               {/* Payment Method */}
//               <motion.div
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: 0.1 }}
//                 className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
//               >
//                 <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
//                   <i className="fas fa-credit-card text-blue-600"></i>
//                   Payment Method
//                 </h2>
                
//                 <div className="space-y-4">
//                   {/* COD */}
//                   <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
//                     <input
//                       type="radio"
//                       name="paymentMethod"
//                       value="cod"
//                       checked={formData.paymentMethod === 'cod'}
//                       onChange={handleChange}
//                       className="h-5 w-5 text-blue-600"
//                     />
//                     <div className="ml-3 flex-1">
//                       <div className="flex items-center justify-between">
//                         <span className="font-medium text-gray-900">Cash on Delivery</span>
//                         <i className="fas fa-money-bill-wave text-green-600"></i>
//                       </div>
//                       <p className="text-sm text-gray-500 mt-1">
//                         Pay when you receive your order
//                       </p>
//                     </div>
//                   </label>

//                   {/* Credit/Debit Card */}
//                   <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
//                     <input
//                       type="radio"
//                       name="paymentMethod"
//                       value="card"
//                       checked={formData.paymentMethod === 'card'}
//                       onChange={handleChange}
//                       className="h-5 w-5 text-blue-600"
//                     />
//                     <div className="ml-3 flex-1">
//                       <div className="flex items-center justify-between">
//                         <span className="font-medium text-gray-900">Credit/Debit Card</span>
//                         <div className="flex gap-2">
//                           <i className="fab fa-cc-visa text-blue-600"></i>
//                           <i className="fab fa-cc-mastercard text-red-600"></i>
//                           <i className="fab fa-cc-amex text-blue-800"></i>
//                         </div>
//                       </div>
//                       <p className="text-sm text-gray-500 mt-1">
//                         Pay securely with your card
//                       </p>
//                     </div>
//                   </label>

//                   {/* UPI */}
//                   <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
//                     <input
//                       type="radio"
//                       name="paymentMethod"
//                       value="upi"
//                       checked={formData.paymentMethod === 'upi'}
//                       onChange={handleChange}
//                       className="h-5 w-5 text-blue-600"
//                     />
//                     <div className="ml-3 flex-1">
//                       <div className="flex items-center justify-between">
//                         <span className="font-medium text-gray-900">UPI</span>
//                         <i className="fas fa-qrcode text-purple-600"></i>
//                       </div>
//                       <p className="text-sm text-gray-500 mt-1">
//                         Pay using UPI apps like Google Pay, PhonePe, Paytm
//                       </p>
//                     </div>
//                   </label>
//                 </div>
//               </motion.div>
//             </div>

//             {/* Right Column - Order Summary */}
//             <div className="lg:col-span-1">
//               <motion.div
//                 initial={{ opacity: 0, x: 20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: 0.2 }}
//                 className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-24"
//               >
//                 <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
                
//                 {/* Order Items */}
//                 <div className="space-y-4 mb-6">
//                   <div className="flex justify-between items-center py-2 border-b border-gray-100">
//                     <div>
//                       <p className="font-medium text-gray-800">Digene Tablets</p>
//                       <p className="text-sm text-gray-500">1 × ₹85</p>
//                     </div>
//                     <span className="font-medium">₹85</span>
//                   </div>
                  
//                   <div className="flex justify-between items-center py-2 border-b border-gray-100">
//                     <div>
//                       <p className="font-medium text-gray-800">Metformin Tablets</p>
//                       <p className="text-sm text-gray-500">1 × ₹250</p>
//                     </div>
//                     <span className="font-medium">₹250</span>
//                   </div>
//                 </div>

//                 {/* Price Breakdown */}
//                 <div className="space-y-3 mb-6">
//                   <div className="flex justify-between">
//                     <span className="text-gray-600">Subtotal</span>
//                     <span className="font-medium">₹335</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="text-gray-600">Shipping</span>
//                     <span className="font-medium text-green-600">FREE</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="text-gray-600">Tax</span>
//                     <span className="font-medium">₹0</span>
//                   </div>
//                   <div className="border-t pt-3">
//                     <div className="flex justify-between items-baseline">
//                       <span className="text-lg font-semibold text-gray-900">Total</span>
//                       <span className="text-2xl font-bold text-gray-900">₹335</span>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Delivery Estimate */}
//                 <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
//                   <div className="flex items-center gap-2 mb-2">
//                     <i className="fas fa-clock text-blue-600"></i>
//                     <span className="font-semibold text-blue-800">Delivery Estimate</span>
//                   </div>
//                   <p className="text-blue-700">
//                     <span className="font-bold">30-45 minutes</span> from order confirmation
//                   </p>
//                 </div>

//                 {/* Terms and Conditions */}
//                 <div className="mb-6">
//                   <label className="flex items-start">
//                     <input
//                       type="checkbox"
//                       className="h-4 w-4 text-blue-600 mt-1"
//                       required
//                     />
//                     <span className="ml-2 text-sm text-gray-600">
//                       I agree to the{' '}
//                       <a href="#" className="text-blue-600 hover:underline">
//                         Terms & Conditions
//                       </a>
//                       {' '}and{' '}
//                       <a href="#" className="text-blue-600 hover:underline">
//                         Privacy Policy
//                       </a>
//                     </span>
//                   </label>
//                 </div>

//                 {/* Place Order Button */}
//                 <button
//                   type="submit"
//                   className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors text-lg"
//                 >
//                   Place Order
//                 </button>

//                 {/* Security */}
//                 <div className="mt-4 text-center text-sm text-gray-500">
//                   <div className="flex items-center justify-center gap-2">
//                     <i className="fas fa-lock text-green-500"></i>
//                     <span>Secure SSL Encryption</span>
//                   </div>
//                 </div>
//               </motion.div>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default CheckoutPage













































import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useSelector, useDispatch } from 'react-redux'
import {
  selectCartItems,
  selectCartTotalAmount,
  selectCartSubtotal
} from '../cartSelectors'
import { clearCart, setShippingAddress } from '../cartSlice'

const CheckoutPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  // Get cart data from Redux
  const cartItems = useSelector(selectCartItems)
  const total = useSelector(selectCartTotalAmount)
  const subtotal = useSelector(selectCartSubtotal)
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    paymentMethod: 'cod'
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      })
    }
  }

  const validateForm = () => {
    const newErrors = {}
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required'
    if (!formData.address.trim()) newErrors.address = 'Address is required'
    if (!formData.city.trim()) newErrors.city = 'City is required'
    if (!formData.pincode.trim()) newErrors.pincode = 'Pincode is required'
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validateForm()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    // Save shipping address to Redux
    const shippingAddress = {
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      city: formData.city,
      state: formData.state,
      pincode: formData.pincode
    }
    dispatch(setShippingAddress(shippingAddress))

    // Create order object
    const order = {
      id: `ORD${Date.now()}`,
      date: new Date().toLocaleDateString(),
      timestamp: Date.now(),
      items: cartItems.map(item => ({
        id: item.id,
        name: item.name,
        brand: item.brand,
        quantity: item.quantity,
        price: item.price,
        total: item.price * item.quantity,
        image: item.image
      })),
      subtotal: subtotal,
      total: total,
      shipping: total >= 499 ? 0 : 40,
      finalTotal: total + (total >= 499 ? 0 : 40),
      status: 'confirmed',
      estimatedDelivery: '30-45 minutes',
      paymentMethod: formData.paymentMethod,
      shippingAddress: shippingAddress
    }

    // Save order to localStorage
    const existingOrders = JSON.parse(localStorage.getItem('orders')) || []
    localStorage.setItem('orders', JSON.stringify([...existingOrders, order]))

    // Clear cart after successful order
    dispatch(clearCart())

    // Navigate to order confirmation
    navigate(`/track-order/${order.id}`)
  }

  // Calculate shipping
  const shipping = total >= 499 ? 0 : 40

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Checkout</h1>
          <p className="text-gray-600 mt-2">Complete your order in just a few steps</p>
          <div className="mt-4 flex items-center gap-2 text-sm text-gray-700">
            <div className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
              {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}
            </div>
            <span>•</span>
            <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full">
              Total: ₹{total.toFixed(2)}
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Shipping & Payment */}
            <div className="lg:col-span-2 space-y-8">
              {/* Shipping Information */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
              >
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <i className="fas fa-shipping-fast text-blue-600"></i>
                  Shipping Information
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border ${
                        errors.fullName ? 'border-red-300' : 'border-gray-300'
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      placeholder="Enter your full name"
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border ${
                        errors.email ? 'border-red-300' : 'border-gray-300'
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      placeholder="Enter your email"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border ${
                        errors.phone ? 'border-red-300' : 'border-gray-300'
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      placeholder="Enter your phone number"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                    )}
                  </div>

                  {/* Address */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Address *
                    </label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      rows="3"
                      className={`w-full px-4 py-3 border ${
                        errors.address ? 'border-red-300' : 'border-gray-300'
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none`}
                      placeholder="Enter your complete address"
                    ></textarea>
                    {errors.address && (
                      <p className="mt-1 text-sm text-red-600">{errors.address}</p>
                    )}
                  </div>

                  {/* City */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      City *
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border ${
                        errors.city ? 'border-red-300' : 'border-gray-300'
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      placeholder="Enter your city"
                    />
                    {errors.city && (
                      <p className="mt-1 text-sm text-red-600">{errors.city}</p>
                    )}
                  </div>

                  {/* State */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      State
                    </label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter your state"
                    />
                  </div>

                  {/* Pincode */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Pincode *
                    </label>
                    <input
                      type="text"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border ${
                        errors.pincode ? 'border-red-300' : 'border-gray-300'
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      placeholder="Enter pincode"
                    />
                    {errors.pincode && (
                      <p className="mt-1 text-sm text-red-600">{errors.pincode}</p>
                    )}
                  </div>
                </div>
              </motion.div>

              {/* Payment Method */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
              >
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <i className="fas fa-credit-card text-blue-600"></i>
                  Payment Method
                </h2>
                
                <div className="space-y-4">
                  {/* COD */}
                  <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cod"
                      checked={formData.paymentMethod === 'cod'}
                      onChange={handleChange}
                      className="h-5 w-5 text-blue-600"
                    />
                    <div className="ml-3 flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-gray-900">Cash on Delivery</span>
                        <i className="fas fa-money-bill-wave text-green-600"></i>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">
                        Pay when you receive your order
                      </p>
                    </div>
                  </label>

                  {/* Credit/Debit Card */}
                  <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={formData.paymentMethod === 'card'}
                      onChange={handleChange}
                      className="h-5 w-5 text-blue-600"
                    />
                    <div className="ml-3 flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-gray-900">Credit/Debit Card</span>
                        <div className="flex gap-2">
                          <i className="fab fa-cc-visa text-blue-600"></i>
                          <i className="fab fa-cc-mastercard text-red-600"></i>
                          <i className="fab fa-cc-amex text-blue-800"></i>
                        </div>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">
                        Pay securely with your card
                      </p>
                    </div>
                  </label>

                  {/* UPI */}
                  <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="upi"
                      checked={formData.paymentMethod === 'upi'}
                      onChange={handleChange}
                      className="h-5 w-5 text-blue-600"
                    />
                    <div className="ml-3 flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-gray-900">UPI</span>
                        <i className="fas fa-qrcode text-purple-600"></i>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">
                        Pay using UPI apps like Google Pay, PhonePe, Paytm
                      </p>
                    </div>
                  </label>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Order Summary */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-24"
              >
                <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
                
                {/* Order Items */}
                <div className="space-y-4 mb-6 max-h-[300px] overflow-y-auto">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between items-start py-3 border-b border-gray-100">
                      <div className="flex items-start gap-3">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-12 h-12 object-cover rounded border"
                          onError={(e) => {
                            e.target.src = '/placeholder-image.jpg'
                          }}
                        />
                        <div>
                          <p className="font-medium text-gray-800 text-sm line-clamp-2">
                            {item.name}
                          </p>
                          <p className="text-sm text-gray-500">
                            {item.quantity} × ₹{item.price.toFixed(2)}
                          </p>
                          {item.prescriptionRequired && (
                            <span className="inline-block mt-1 px-2 py-0.5 text-xs bg-blue-100 text-blue-800 rounded">
                              Rx Required
                            </span>
                          )}
                        </div>
                      </div>
                      <span className="font-medium">₹{(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>

                {/* Price Breakdown */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">₹{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    {shipping === 0 ? (
                      <span className="font-medium text-green-600">FREE</span>
                    ) : (
                      <span className="font-medium">₹{shipping.toFixed(2)}</span>
                    )}
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax</span>
                    <span className="font-medium">₹0</span>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex justify-between items-baseline">
                      <span className="text-lg font-semibold text-gray-900">Total</span>
                      <span className="text-2xl font-bold text-gray-900">
                        ₹{(total + shipping).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Delivery Estimate */}
                <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-center gap-2 mb-2">
                    <i className="fas fa-clock text-blue-600"></i>
                    <span className="font-semibold text-blue-800">Delivery Estimate</span>
                  </div>
                  <p className="text-blue-700">
                    <span className="font-bold">30-45 minutes</span> from order confirmation
                  </p>
                </div>

                {/* Terms and Conditions */}
                <div className="mb-6">
                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 mt-1"
                      required
                    />
                    <span className="ml-2 text-sm text-gray-600">
                      I agree to the{' '}
                      <a href="#" className="text-blue-600 hover:underline">
                        Terms & Conditions
                      </a>
                      {' '}and{' '}
                      <a href="#" className="text-blue-600 hover:underline">
                        Privacy Policy
                      </a>
                    </span>
                  </label>
                </div>

                {/* Place Order Button */}
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors text-lg"
                >
                  Place Order
                </button>

                {/* Security */}
                <div className="mt-4 text-center text-sm text-gray-500">
                  <div className="flex items-center justify-center gap-2">
                    <i className="fas fa-lock text-green-500"></i>
                    <span>Secure SSL Encryption</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CheckoutPage