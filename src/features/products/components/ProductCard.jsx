// import React from 'react'
// import { motion } from 'framer-motion'
// import { useNavigate } from 'react-router-dom'

// const ProductCard = ({ product }) => {
//   const navigate = useNavigate()

//   const handleClick = () => {
//     navigate(`/product/${product.id}`)
//   }

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       whileHover={{ y: -5 }}
//       className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer border border-gray-100 overflow-hidden"
//       onClick={handleClick}
//     >
//       {/* Product Image */}
//       <div className="relative h-48 bg-gray-100">
//         <img
//           src={product.image}
//           alt={product.name}
//           className="w-full h-full object-cover"
//         />
        
//         {/* Badges */}
//         {product.savings && (
//           <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
//             {product.savings}
//           </div>
//         )}
        
//         {product.prescriptionRequired && (
//           <div className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded text-xs">
//             <i className="fas fa-file-prescription mr-1"></i>
//             Rx Required
//           </div>
//         )}
        
//         {/* Rating */}
//         <div className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs flex items-center gap-1">
//           <i className="fas fa-star text-yellow-500"></i>
//           <span className="font-semibold">{product.rating}</span>
//         </div>
//       </div>

//       {/* Product Info */}
//       <div className="p-4">
//         <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2">
//           {product.name}
//         </h3>
        
//         <p className="text-gray-600 text-sm mb-2">
//           {product.brand}
//         </p>

//         {/* Price */}
//         <div className="flex items-center gap-2 mb-3">
//           <span className="text-lg font-bold text-gray-900">
//             ₹{product.price}
//           </span>
//           {product.originalPrice > product.price && (
//             <span className="text-sm text-gray-500 line-through">
//               ₹{product.originalPrice}
//             </span>
//           )}
//         </div>

//         {/* Category */}
//         <div className="mb-3">
//           <span className="inline-block px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs capitalize">
//             {product.category.replace('-', ' ')}
//           </span>
//         </div>

//         {/* Add to Cart Button */}
//         <button
//           onClick={(e) => {
//             e.stopPropagation()
//             // Add to cart logic here
//             console.log(`Added ${product.name} to cart`)
//           }}
//           className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
//         >
//           <i className="fas fa-shopping-cart"></i>
//           Add to Cart
//         </button>
//       </div>
//     </motion.div>
//   )
// }

// export default ProductCard























import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addItemToCart } from '../../cart/cartSlice'

// Import React Icons
import {
  FaFilePrescription,
  FaStar,
  FaShoppingCart,
  FaPlus
} from 'react-icons/fa'

const ProductCard = ({ product }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleClick = () => {
    navigate(`/product/${product.id}`)
  }

  const handleAddToCart = (e) => {
    e.stopPropagation()
    
    // Create cart item from product
    const cartItem = {
      id: product.id,
      name: product.name,
      brand: product.brand,
      price: product.price,
      originalPrice: product.originalPrice || product.price,
      image: product.image || product.images || '/placeholder-image.jpg',
      category: product.category,
      prescriptionRequired: product.prescriptionRequired || false,
      quantity: 1
    }
    
    dispatch(addItemToCart(cartItem))
    
    // Show notification
    console.log(`Added ${product.name} to cart`)
    
    // Optional: Show a toast notification
    alert(`Added ${product.name} to cart!`)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer border border-gray-100 overflow-hidden"
      onClick={handleClick}
    >
      {/* Product Image */}
      <div className="relative h-48 bg-gray-100">
        <img
          src={product.image || product.images}
          alt={product.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = '/placeholder-image.jpg'
          }}
        />
        
        {/* Badges */}
        {product.savings && (
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
            {product.savings}
          </div>
        )}
        
        {product.prescriptionRequired && (
          <div className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded text-xs flex items-center gap-1">
            <FaFilePrescription className="text-xs" />
            <span>Rx Required</span>
          </div>
        )}
        
        {/* Rating */}
        {product.rating && (
          <div className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs flex items-center gap-1">
            <FaStar className="text-yellow-500 text-xs" />
            <span className="font-semibold">{product.rating}</span>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2 h-12">
          {product.name}
        </h3>
        
        <p className="text-gray-600 text-sm mb-2">
          {product.brand || product.manufacturer}
        </p>

        {/* Price */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg font-bold text-gray-900">
            ₹{product.price}
          </span>
          {product.originalPrice > product.price && (
            <span className="text-sm text-gray-500 line-through">
              ₹{product.originalPrice}
            </span>
          )}
        </div>

        {/* Category */}
        <div className="mb-3">
          <span className="inline-block px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs capitalize">
            {product.category?.replace('-', ' ') || 'General'}
          </span>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
        >
          <FaShoppingCart />
          <span>Add to Cart</span>
        </button>
      </div>
    </motion.div>
  )
}

export default ProductCard