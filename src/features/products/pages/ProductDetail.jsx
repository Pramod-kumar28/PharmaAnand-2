// import React, { useEffect, useState } from 'react'
// import { useParams, useNavigate } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux'
// import { motion } from 'framer-motion'
// import { fetchProductById, clearSelectedProduct } from '../productSlice.js'
// import { selectSelectedProduct, selectLoading } from '../productSelectors.js'
// import ProductRating from '../components/ProductRating.jsx'

// const ProductDetail = () => {
//   const { productId } = useParams()
//   const navigate = useNavigate()
//   const dispatch = useDispatch()
//   const product = useSelector(selectSelectedProduct)
//   const loading = useSelector(selectLoading)
//   const [quantity, setQuantity] = useState(1)
//   const [activeTab, setActiveTab] = useState('details')

//   useEffect(() => {
//     if (productId) {
//       dispatch(fetchProductById(productId))
//     }
    
//     return () => {
//       dispatch(clearSelectedProduct())
//     }
//   }, [productId, dispatch])

//   const handleAddToCart = () => {
//     console.log(`Added ${quantity} of ${product?.name} to cart`)
//     // Add to cart logic here
//   }

//   const handleBuyNow = () => {
//     handleAddToCart()
//     navigate('/cart')
//   }

//   // Helper functions to get consistent data
//   const getProductPrice = (product) => {
//     if (!product) return 0;
//     return parseFloat(
//       product.priceNumeric || 
//       product.price?.replace('₹', '') || 
//       product.final_price || 
//       product.cost || 
//       0
//     );
//   };

//   const getOriginalPrice = (product) => {
//     if (!product) return 0;
//     return parseFloat(
//       product.originalPriceNumeric || 
//       product.originalPrice?.replace('₹', '') || 
//       product.cost || 
//       getProductPrice(product)
//     );
//   };

//   const getSavings = (product) => {
//     if (!product) return '0%';
//     if (product.savings) return product.savings;
    
//     const price = getProductPrice(product);
//     const originalPrice = getOriginalPrice(product);
    
//     if (originalPrice > price) {
//       const savingsPercent = Math.round(((originalPrice - price) / originalPrice) * 100);
//       return `${savingsPercent}%`;
//     }
    
//     return '0%';
//   };

//   const getCategoryDisplayName = (category) => {
//     if (!category) return '';
//     return category.split('-').map(word => 
//       word.charAt(0).toUpperCase() + word.slice(1)
//     ).join(' ');
//   };

//   const getImageUrl = (product) => {
//     if (!product) return '/placeholder-image.jpg';
//     return product.image || product.images || '/placeholder-image.jpg';
//   };

//   if (loading) {
//     return (
//       <div className="flex flex-col justify-center items-center h-64">
//         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
//         <p className="mt-4 text-gray-600">Loading product details...</p>
//       </div>
//     )
//   }

//   if (!product) {
//     return (
//       <div className="text-center py-12">
//         <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 mb-4">
//           <i className="fas fa-box-open text-gray-400 text-3xl"></i>
//         </div>
//         <h2 className="text-2xl font-bold text-gray-900 mb-3">Product not found</h2>
//         <p className="text-gray-600 mb-6 max-w-md mx-auto">
//           The product you're looking for might have been removed or the link is incorrect.
//         </p>
//         <button
//           onClick={() => navigate('/products')}
//           className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
//         >
//           <i className="fas fa-arrow-left"></i>
//           Browse Products
//         </button>
//       </div>
//     )
//   }

//   const price = getProductPrice(product);
//   const originalPrice = getOriginalPrice(product);
//   const savings = getSavings(product);
//   const hasDiscount = originalPrice > price;
//   const categoryDisplay = getCategoryDisplayName(product.category);
//   const imageUrl = getImageUrl(product);
//   const rating = product.rating || 4.0;
//   const stock = product.stock || 0;
//   const brand = product.brand || product.manufacturer || product.company_name || '';
//   const medicineType = product.medicine_type || product.category;
//   const uses = product.uses || [];
//   const composition = product.composition || product.chemical_name || '';
//   const companyName = product.company_name || product.manufacturer || '';
//   const countryOrigin = product.country_of_origin || product.highlights?.country_of_origin || '';
//   const shelfLife = product.highlights?.shelf_life || product.shelf_life || '';
//   const packSize = product.highlights?.pack_size || product.net_quantity || '';
//   const productType = product.highlights?.product_type || product.medicine_type || '';
//   const keyFeatures = product.keyFeatures || [];
//   const howToUse = product.howToUse || product.information?.usage_instruction || '';
//   const ingredients = product.ingredients || '';
//   const warnings = product.warnings || product.information?.disclaimer || '';
//   const description = product.description || '';
//   const highlights = product.highlights || {};

//   // Add this useEffect to ProductDetail.jsx for debugging
// useEffect(() => {
//   console.log('ProductDetail mounted with productId:', productId);
//   console.log('Current product from Redux:', product);
//   console.log('Loading state:', loading);
  
//   // Log available products for debugging
//   if (productId && !product && !loading) {
//     console.log('Product not found. Possible ID mismatch.');
//     // You can add a direct test here
//     import('../../../data/products').then(productsData => {
//       console.log('Available product IDs:', {
//         baby: productsData.default.baby?.map(p => p.id),
//         covid: productsData.default.covid?.map(p => p.id),
//         diabetes: productsData.default.diabetes?.tablets?.map(p => p.id),
//         oral: productsData.default.oral?.map(p => p.id),
//         skincare: productsData.default.skincare?.map(p => p.id)
//       });
//     });
//   }
// }, [productId, product, loading]);

//   return (
//     <motion.div 
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.3 }}
//       className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
//     >
//       {/* Breadcrumb */}
//       <nav className="flex mb-6" aria-label="Breadcrumb">
//         <ol className="flex items-center space-x-2 text-sm text-gray-600">
//           <li>
//             <button 
//               onClick={() => navigate('/products')}
//               className="hover:text-blue-600 transition-colors"
//             >
//               <i className="fas fa-home mr-1"></i>
//               Home
//             </button>
//           </li>
//           <li><i className="fas fa-chevron-right text-xs"></i></li>
//           <li>
//             <button 
//               onClick={() => navigate(`/products/${product.category}`)}
//               className="hover:text-blue-600 transition-colors"
//             >
//               {categoryDisplay}
//             </button>
//           </li>
//           <li><i className="fas fa-chevron-right text-xs"></i></li>
//           <li className="text-blue-600 font-medium">{product.name}</li>
//         </ol>
//       </nav>

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
//         {/* Left Column - Product Image */}
//         <div className="space-y-4">
//           {/* Main Image */}
//           <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
//             <div className="w-full h-96 bg-gray-50 rounded-lg flex items-center justify-center">
//               <img
//                 src={imageUrl}
//                 alt={product.name}
//                 className="w-full h-full object-contain rounded-lg transition-transform duration-300 hover:scale-105"
//                 onError={(e) => {
//                   e.target.src = '/placeholder-image.jpg';
//                 }}
//               />
//             </div>
//           </div>

//           {/* Stock and Rating Badges */}
//           <div className="flex flex-wrap gap-3">
//             <div className={`px-4 py-2 rounded-lg font-medium ${
//               stock > 0 
//                 ? 'bg-green-100 text-green-800 border border-green-200' 
//                 : 'bg-red-100 text-red-800 border border-red-200'
//             }`}>
//               <i className={`fas fa-${stock > 0 ? 'check-circle' : 'times-circle'} mr-2`}></i>
//               {stock > 0 ? `In Stock (${stock} units)` : 'Out of Stock'}
//             </div>
            
//             {rating && (
//               <div className="px-4 py-2 rounded-lg bg-yellow-100 text-yellow-800 border border-yellow-200 font-medium">
//                 <i className="fas fa-star mr-2"></i>
//                 {rating}/5.0
//               </div>
//             )}

//             {medicineType && (
//               <div className="px-4 py-2 rounded-lg bg-purple-100 text-purple-800 border border-purple-200 font-medium">
//                 <i className="fas fa-tag mr-2"></i>
//                 {medicineType}
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Right Column - Product Info */}
//         <div className="space-y-6">
//           {/* Product Header */}
//           <div>
//             <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
//             <div className="flex items-center gap-4 mb-3">
//               {brand && (
//                 <span className="text-lg text-blue-600 font-semibold">{brand}</span>
//               )}
//               {companyName && brand !== companyName && (
//                 <span className="text-gray-600">by {companyName}</span>
//               )}
//             </div>
//             {countryOrigin && (
//               <div className="flex items-center gap-2 text-gray-500 text-sm">
//                 <i className="fas fa-globe"></i>
//                 <span>Made in {countryOrigin}</span>
//               </div>
//             )}
//           </div>

//           {/* Price Section */}
//           <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
//             <div className="flex items-center gap-4 mb-2">
//               <span className="text-4xl font-bold text-gray-900">
//                 ₹{price.toFixed(2)}
//               </span>
//               {hasDiscount && (
//                 <>
//                   <span className="text-2xl text-gray-500 line-through">
//                     ₹{originalPrice.toFixed(2)}
//                   </span>
//                   <span className="bg-green-600 text-white px-3 py-1 rounded-lg text-sm font-semibold">
//                     Save {savings}
//                   </span>
//                 </>
//               )}
//             </div>
            
//             {/* Savings Amount */}
//             {hasDiscount && (
//               <p className="text-green-600 font-medium">
//                 <i className="fas fa-wallet mr-2"></i>
//                 You save ₹{(originalPrice - price).toFixed(2)}
//               </p>
//             )}
//           </div>

//           {/* Quick Highlights */}
//           {Object.keys(highlights).length > 0 && (
//             <div className="bg-blue-50 rounded-xl p-5 border border-blue-200">
//               <h3 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
//                 <i className="fas fa-bolt text-blue-600"></i>
//                 Product Highlights
//               </h3>
//               <div className="grid grid-cols-2 gap-3">
//                 {productType && (
//                   <div className="flex items-center gap-2">
//                     <i className="fas fa-box text-blue-500"></i>
//                     <span className="text-sm text-gray-700">{productType}</span>
//                   </div>
//                 )}
//                 {packSize && (
//                   <div className="flex items-center gap-2">
//                     <i className="fas fa-weight text-blue-500"></i>
//                     <span className="text-sm text-gray-700">{packSize}</span>
//                   </div>
//                 )}
//                 {shelfLife && (
//                   <div className="flex items-center gap-2">
//                     <i className="fas fa-calendar-check text-blue-500"></i>
//                     <span className="text-sm text-gray-700">{shelfLife} shelf life</span>
//                   </div>
//                 )}
//                 {countryOrigin && (
//                   <div className="flex items-center gap-2">
//                     <i className="fas fa-flag text-blue-500"></i>
//                     <span className="text-sm text-gray-700">{countryOrigin}</span>
//                   </div>
//                 )}
//               </div>
//             </div>
//           )}

//           {/* Uses */}
//           {uses.length > 0 && (
//             <div>
//               <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
//                 <i className="fas fa-stethoscope text-gray-500"></i>
//                 Recommended For
//               </h3>
//               <div className="flex flex-wrap gap-2">
//                 {uses.map((use, index) => (
//                   <span 
//                     key={index}
//                     className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
//                   >
//                     {use}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Quantity and Actions */}
//           <div className="border-t border-gray-200 pt-6">
//             <div className="flex items-center gap-4 mb-6">
//               <span className="font-semibold text-gray-700">Quantity:</span>
//               <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
//                 <button
//                   onClick={() => setQuantity(Math.max(1, quantity - 1))}
//                   className="px-4 py-2 hover:bg-gray-100 transition-colors text-gray-600 disabled:opacity-50"
//                   disabled={quantity <= 1}
//                 >
//                   <i className="fas fa-minus"></i>
//                 </button>
//                 <span className="px-6 py-2 min-w-[60px] text-center font-medium border-x border-gray-300">{quantity}</span>
//                 <button
//                   onClick={() => setQuantity(quantity + 1)}
//                   className="px-4 py-2 hover:bg-gray-100 transition-colors text-gray-600"
//                 >
//                   <i className="fas fa-plus"></i>
//                 </button>
//               </div>
//               <span className="text-gray-500 text-sm">
//                 Only {stock} units left
//               </span>
//             </div>

//             <div className="flex gap-4">
//               <button
//                 onClick={handleAddToCart}
//                 disabled={stock === 0}
//                 className={`flex-1 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-3 ${
//                   stock === 0 
//                     ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
//                     : 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg'
//                 }`}
//               >
//                 <i className="fas fa-shopping-cart"></i>
//                 {stock === 0 ? 'Out of Stock' : 'Add to Cart'}
//               </button>
//               <button
//                 onClick={handleBuyNow}
//                 disabled={stock === 0}
//                 className={`flex-1 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-3 ${
//                   stock === 0 
//                     ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
//                     : 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:shadow-lg'
//                 }`}
//               >
//                 <i className="fas fa-bolt"></i>
//                 Buy Now
//               </button>
//             </div>

//             {/* Delivery Info */}
//             <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
//               <div className="flex items-center gap-3 mb-2">
//                 <i className="fas fa-shipping-fast text-green-600"></i>
//                 <span className="font-medium text-gray-800">Free Delivery</span>
//               </div>
//               <p className="text-sm text-gray-600">
//                 Order within 3 hours for same-day dispatch. Delivery in 2-5 business days.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Tabs for Detailed Information */}
//       <div className="mb-8">
//         <div className="border-b border-gray-200">
//           <nav className="flex space-x-8">
//             {['details', 'specifications', 'usage', 'ingredients'].map((tab) => (
//               <button
//                 key={tab}
//                 onClick={() => setActiveTab(tab)}
//                 className={`py-4 px-1 font-medium text-sm border-b-2 transition-colors ${
//                   activeTab === tab
//                     ? 'border-blue-600 text-blue-600'
//                     : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
//                 }`}
//               >
//                 {tab.charAt(0).toUpperCase() + tab.slice(1)}
//               </button>
//             ))}
//           </nav>
//         </div>

//         <div className="mt-8">
//           {/* Details Tab */}
//           {activeTab === 'details' && (
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               <div>
//                 <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
//                   <i className="fas fa-info-circle text-blue-500"></i>
//                   Product Description
//                 </h3>
//                 <p className="text-gray-600 leading-relaxed">{description}</p>
                
//                 {keyFeatures.length > 0 && (
//                   <div className="mt-6">
//                     <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
//                     <ul className="space-y-2">
//                       {keyFeatures.map((feature, index) => (
//                         <li key={index} className="flex items-start gap-2">
//                           <i className="fas fa-check text-green-500 mt-1"></i>
//                           <span className="text-gray-600">{feature}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}
//               </div>

//               <div>
//                 <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
//                   <i className="fas fa-list-alt text-blue-500"></i>
//                   Product Specifications
//                 </h3>
//                 <div className="bg-gray-50 rounded-lg p-5 space-y-4">
//                   {composition && (
//                     <div>
//                       <h4 className="font-medium text-gray-700 mb-1">Composition</h4>
//                       <p className="text-gray-600">{composition}</p>
//                     </div>
//                   )}
                  
//                   {medicineType && (
//                     <div>
//                       <h4 className="font-medium text-gray-700 mb-1">Medicine Type</h4>
//                       <p className="text-gray-600">{medicineType}</p>
//                     </div>
//                   )}
                  
//                   {companyName && (
//                     <div>
//                       <h4 className="font-medium text-gray-700 mb-1">Manufacturer</h4>
//                       <p className="text-gray-600">{companyName}</p>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Specifications Tab */}
//           {activeTab === 'specifications' && (
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div className="space-y-6">
//                 {Object.keys(highlights).length > 0 && (
//                   <div>
//                     <h3 className="text-lg font-semibold text-gray-900 mb-4">Product Highlights</h3>
//                     <div className="bg-white border border-gray-200 rounded-lg divide-y">
//                       {Object.entries(highlights).map(([key, value], index) => (
//                         <div key={index} className="flex justify-between items-center p-4 hover:bg-gray-50">
//                           <span className="font-medium text-gray-700 capitalize">{key.replace(/_/g, ' ')}</span>
//                           <span className="text-gray-600">{value}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 )}
//               </div>

//               <div>
//                 <h3 className="text-lg font-semibold text-gray-900 mb-4">Additional Information</h3>
//                 <div className="space-y-4">
//                   {product.chemical_name && (
//                     <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
//                       <h4 className="font-medium text-blue-900 mb-1">Chemical Name</h4>
//                       <p className="text-blue-800">{product.chemical_name}</p>
//                     </div>
//                   )}
                  
//                   {product.brand_name && (
//                     <div className="p-4 bg-purple-50 rounded-lg border border-purple-100">
//                       <h4 className="font-medium text-purple-900 mb-1">Brand Name</h4>
//                       <p className="text-purple-800">{product.brand_name}</p>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Usage Tab */}
//           {activeTab === 'usage' && (
//             <div className="space-y-6">
//               {howToUse && (
//                 <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
//                   <h3 className="text-lg font-semibold text-blue-900 mb-3 flex items-center gap-2">
//                     <i className="fas fa-book-medical text-blue-600"></i>
//                     How to Use
//                   </h3>
//                   <p className="text-blue-800 leading-relaxed">{howToUse}</p>
//                 </div>
//               )}
              
//               {warnings && (
//                 <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
//                   <h3 className="text-lg font-semibold text-yellow-900 mb-3 flex items-center gap-2">
//                     <i className="fas fa-exclamation-triangle text-yellow-600"></i>
//                     Warnings & Precautions
//                   </h3>
//                   <p className="text-yellow-800 leading-relaxed">{warnings}</p>
//                 </div>
//               )}
//             </div>
//           )}

//           {/* Ingredients Tab */}
//           {activeTab === 'ingredients' && (
//             <div>
//               {ingredients && (
//                 <div className="bg-white border border-gray-200 rounded-xl p-6">
//                   <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
//                     <i className="fas fa-flask text-purple-500"></i>
//                     Ingredients
//                   </h3>
//                   <div className="bg-gray-50 rounded-lg p-5">
//                     <p className="text-gray-700">
//                       {Array.isArray(ingredients) 
//                         ? ingredients.join(', ')
//                         : ingredients
//                       }
//                     </p>
//                   </div>
//                 </div>
//               )}
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Safety Information */}
//       <div className="bg-red-50 rounded-xl p-6 border border-red-200 mb-8">
//         <h3 className="font-bold text-red-900 mb-3 flex items-center gap-2">
//           <i className="fas fa-shield-alt text-red-600"></i>
//           Important Safety Information
//         </h3>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           <div className="flex items-start gap-3">
//             <i className="fas fa-user-md text-red-500 mt-1"></i>
//             <div>
//               <h4 className="font-medium text-red-800">Consult Doctor</h4>
//               <p className="text-red-700 text-sm">Always consult with a healthcare professional</p>
//             </div>
//           </div>
//           <div className="flex items-start gap-3">
//             <i className="fas fa-exclamation-circle text-red-500 mt-1"></i>
//             <div>
//               <h4 className="font-medium text-red-800">Read Instructions</h4>
//               <p className="text-red-700 text-sm">Read all instructions before use</p>
//             </div>
//           </div>
//           <div className="flex items-start gap-3">
//             <i className="fas fa-prescription-bottle text-red-500 mt-1"></i>
//             <div>
//               <h4 className="font-medium text-red-800">Storage</h4>
//               <p className="text-red-700 text-sm">Store in a cool, dry place away from children</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Related Products (Placeholder) */}
//       <div className="mt-12">
//         <h3 className="text-2xl font-bold text-gray-900 mb-6">You May Also Like</h3>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//           {/* Placeholder for related products */}
//           <div className="text-center py-8 text-gray-500 border border-dashed border-gray-300 rounded-lg">
//             <i className="fas fa-pills text-3xl mb-3"></i>
//             <p>Related Products</p>
//           </div>
//           <div className="text-center py-8 text-gray-500 border border-dashed border-gray-300 rounded-lg">
//             <i className="fas fa-capsules text-3xl mb-3"></i>
//             <p>Related Products</p>
//           </div>
//           <div className="text-center py-8 text-gray-500 border border-dashed border-gray-300 rounded-lg">
//             <i className="fas fa-prescription text-3xl mb-3"></i>
//             <p>Related Products</p>
//           </div>
//           <div className="text-center py-8 text-gray-500 border border-dashed border-gray-300 rounded-lg">
//             <i className="fas fa-heartbeat text-3xl mb-3"></i>
//             <p>Related Products</p>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   )
// }

// export default ProductDetail

































// // ProductDetail.jsx - OPTIMIZED FOR TABLET/DESKTOP (Mobile stays same)
// import React, { useEffect, useState } from 'react'
// import { useParams, useNavigate } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux'
// import { motion } from 'framer-motion'
// import { fetchProductById, clearSelectedProduct } from '../productSlice.js'
// import { selectSelectedProduct, selectLoading } from '../productSelectors.js'

// // Import React Icons
// import {
//   FaArrowLeft, FaShoppingCart, FaBolt, FaHome, FaStore, FaCheckCircle,
//   FaArrowRight, FaHeadset, FaUserMd, FaShieldAlt, FaStar, FaFilePrescription,
//   FaTag, FaInfoCircle, FaFlask, FaStethoscope, FaListAlt, FaBookMedical,
//   FaExclamationTriangle, FaExclamationCircle, FaPills, FaCapsules,
//   FaPrescriptionBottle, FaWeight, FaCalendarCheck, FaGlobe, FaFlag,
//   FaBox, FaShippingFast, FaCheck, FaPlus, FaMinus, FaTimesCircle,
//   FaCheckCircle as FaCheckCircleSolid, FaBolt as FaBoltIcon, FaWallet
// } from 'react-icons/fa'

// import { 
//   MdLocalPharmacy, MdHealthAndSafety, MdMedicalServices, MdScience,
//   MdDescription, MdWarning, MdLocalOffer, MdInventory
// } from 'react-icons/md'

// import {
//   GiMedicinePills, GiHeartPlus, GiLiver, GiStomach, GiTooth,
//   GiBabyFace, GiVirus, GiMedicalPack
// } from 'react-icons/gi'

// import {
//   BsInfoCircleFill, BsStarFill, BsCashCoin, BsTruck
// } from 'react-icons/bs'

// const ProductDetail = () => {
//   const { productId } = useParams()
//   const navigate = useNavigate()
//   const dispatch = useDispatch()
//   const product = useSelector(selectSelectedProduct)
//   const loading = useSelector(selectLoading)
//   const [quantity, setQuantity] = useState(1)
//   const [activeTab, setActiveTab] = useState('details')

//   // Debug effect
//   useEffect(() => {
//     console.log('🔍 ProductDetail - Current State:', {
//       productId,
//       productFound: !!product,
//       productName: product?.name,
//       loading
//     });
//   }, [productId, product, loading]);

//   // Fetch product
//   useEffect(() => {
//     if (productId) {
//       console.log('🔄 Dispatching fetch for:', productId);
//       dispatch(fetchProductById(productId));
//     }

//     return () => {
//       console.log('🧹 Cleaning up product detail');
//       dispatch(clearSelectedProduct());
//     };
//   }, [productId, dispatch]);

//   // Helper functions
//   const getProductPrice = (product) => {
//     if (!product) return 0;
//     return typeof product.price === 'number' 
//       ? product.price 
//       : parseFloat(product.priceNumeric || 0);
//   };

//   const getOriginalPrice = (product) => {
//     if (!product) return 0;
//     return typeof product.originalPrice === 'number'
//       ? product.originalPrice
//       : parseFloat(product.originalPriceNumeric || getProductPrice(product));
//   };

//   const getImageUrl = (product) => {
//     if (!product) return '/placeholder-image.jpg';
//     return product.image || product.images || '/placeholder-image.jpg';
//   };

//   const getCategoryDisplayName = (category) => {
//     if (!category) return '';
//     return category.split('-').map(word => 
//       word.charAt(0).toUpperCase() + word.slice(1)
//     ).join(' ');
//   };

//   // Get category icon
//   const getCategoryIcon = (category) => {
//     switch(category) {
//       case 'baby': return <GiBabyFace className="text-base lg:text-lg" />;
//       case 'covid': return <GiVirus className="text-base lg:text-lg" />;
//       case 'diabetes': return <MdMedicalServices className="text-base lg:text-lg" />;
//       case 'cardiology': return <GiHeartPlus className="text-base lg:text-lg" />;
//       case 'liver': return <GiLiver className="text-base lg:text-lg" />;
//       case 'oral': return <GiTooth className="text-base lg:text-lg" />;
//       case 'skincare': return <MdHealthAndSafety className="text-base lg:text-lg" />;
//       case 'stomach': return <GiStomach className="text-base lg:text-lg" />;
//       default: return <GiMedicalPack className="text-base lg:text-lg" />;
//     }
//   };

//   // Handlers
//   const handleAddToCart = () => {
//     if (product) {
//       console.log(`🛒 Added ${quantity} of ${product.name} to cart`);
//       alert(`Added ${quantity} ${product.name} to cart!`);
//     }
//   };

//   const handleBuyNow = () => {
//     handleAddToCart();
//     navigate('/cart');
//   };

//   const incrementQuantity = () => setQuantity(prev => prev + 1);
//   const decrementQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

//   // Loading state
//   if (loading) {
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4">
//         <div className="animate-spin rounded-full h-14 sm:h-16 border-4 border-blue-500 border-t-transparent mb-4"></div>
//         <p className="text-base sm:text-lg font-semibold text-gray-700 mb-2">Loading Product Details</p>
//         <p className="text-sm text-gray-500 text-center">Preparing your product information...</p>
//         <div className="mt-4 px-4 py-2 bg-blue-50 rounded-full">
//           <code className="text-sm text-blue-700">ID: {productId}</code>
//         </div>
//       </div>
//     );
//   }

//   // Not found state
//   if (!product && !loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4">
//         <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 max-w-md w-full text-center">
//           <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-red-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4 shadow-inner">
//             <FaExclamationTriangle className="text-2xl sm:text-3xl text-red-500" />
//           </div>
//           <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Product Not Found</h2>
//           <div className="mb-4 p-3 bg-gray-50 rounded-lg border border-gray-200">
//             <p className="text-sm text-gray-700 mb-2">
//               We couldn't find the product with ID:
//             </p>
//             <code className="bg-gray-900 text-gray-100 px-3 py-1 rounded text-xs sm:text-sm font-mono break-all">
//               {productId}
//             </code>
//           </div>
//           <p className="text-sm text-gray-600 mb-6">
//             The product may have been removed or the link might be incorrect.
//           </p>
//           <div className="space-y-3">
//             <button
//               onClick={() => navigate('/products')}
//               className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-3 rounded-lg font-semibold text-sm sm:text-base transition-colors flex items-center justify-center gap-2"
//             >
//               <FaStore className="text-base" />
//               Browse All Products
//             </button>
//             <button
//               onClick={() => navigate(-1)}
//               className="w-full bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-800 py-3 rounded-lg font-semibold text-sm sm:text-base transition-colors border border-gray-300 flex items-center justify-center gap-2"
//             >
//               <FaArrowLeft className="text-base" />
//               Go Back
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // If no product exists
//   if (!product) return null;

//   // Extract product data
//   const price = getProductPrice(product);
//   const originalPrice = getOriginalPrice(product);
//   const hasDiscount = originalPrice > price;
//   const savingsPercent = hasDiscount 
//     ? Math.round(((originalPrice - price) / originalPrice) * 100) 
//     : 0;
//   const savingsAmount = hasDiscount ? (originalPrice - price).toFixed(2) : 0;
//   const imageUrl = getImageUrl(product);
//   const categoryDisplay = getCategoryDisplayName(product.category);
//   const stock = product.stock || 0;
//   const rating = product.rating || 4.0;
//   const brand = product.brand || product.company_name || '';
//   const companyName = product.company_name || product.manufacturer || '';
//   const composition = product.composition || product.chemical_name || '';
//   const medicineType = product.medicine_type || product.product_type || '';
//   const uses = Array.isArray(product.uses) ? product.uses : [];
//   const keyFeatures = Array.isArray(product.keyFeatures) ? product.keyFeatures : [];
//   const howToUse = product.howToUse || product.information?.usage_instruction || '';
//   const ingredients = product.ingredients || '';
//   const warnings = product.warnings || product.information?.disclaimer || '';
//   const description = product.description || '';
//   const highlights = product.highlights || {};
//   const prescriptionRequired = product.prescriptionRequired || false;

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 10 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.3 }}
//       className="min-h-screen bg-gradient-to-b from-gray-50 to-white"
//     >
//       {/* Breadcrumb Navigation */}
//       <div className="bg-white border-b border-gray-200">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 py-3">
//           <nav className="flex items-center space-x-2 text-sm">
//             <button
//               onClick={() => navigate('/')}
//               className="text-gray-500 hover:text-blue-600 transition-colors flex items-center gap-1"
//             >
//               <FaHome className="text-xs" />
//               <span className="hidden sm:inline">Home</span>
//             </button>
//             <span className="text-gray-300">/</span>
//             <button
//               onClick={() => navigate('/products')}
//               className="text-gray-500 hover:text-blue-600 transition-colors"
//             >
//               Products
//             </button>
//             <span className="text-gray-300">/</span>
//             <button
//               onClick={() => navigate(`/products/${product.category}`)}
//               className="text-gray-500 hover:text-blue-600 transition-colors flex items-center gap-2"
//             >
//               {getCategoryIcon(product.category)}
//               <span className="truncate max-w-[100px] sm:max-w-xs">{categoryDisplay}</span>
//             </button>
//             <span className="text-gray-300">/</span>
//             <span className="text-blue-600 font-semibold truncate max-w-[120px] sm:max-w-xs">
//               {product.name}
//             </span>
//           </nav>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 py-4 sm:py-6 lg:py-4">
//         {/* Product Header */}
//         <motion.div
//           initial={{ opacity: 0, y: -5 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.1 }}
//           className="mb-6 sm:mb-8"
//         >
//           <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-4">
//             <div className="flex-1 min-w-0">
//               <h1 className="text-xl sm:text-2xl lg:text-2xl font-bold text-gray-900 mb-2 leading-tight">
//                 {product.name}
//               </h1>
//               <div className="flex items-center flex-wrap gap-1 sm:gap-3">
//                 <span className="text-base sm:text-lg text-blue-600 font-semibold truncate">
//                   {brand}
//                 </span>
//                 {companyName && brand !== companyName && (
//                   <span className="text-xs sm:text-sm text-gray-600 bg-gray-100 px-2 sm:px-3 py-1 rounded-full truncate max-w-[150px] sm:max-w-none">
//                     by {companyName}
//                   </span>
//                 )}
//               </div>
//             </div>
//             <div className="flex items-center flex-wrap gap-1 sm:gap-3 mt-2 sm:mt-0">
//               <div className={`px-3 sm:px-4 py-1 sm:py-2 rounded-full font-medium text-xs sm:text-sm ${stock > 0 
//                 ? 'bg-green-100 text-green-800 border border-green-200' 
//                 : 'bg-red-100 text-red-800 border border-red-200'}`}>
//                 {stock > 0 ? (
//                   <>
//                     <FaCheckCircleSolid className="inline mr-1 sm:mr-2" />
//                     In Stock ({stock})
//                   </>
//                 ) : (
//                   <>
//                     <FaTimesCircle className="inline mr-1 sm:mr-2" />
//                     Out of Stock
//                   </>
//                 )}
//               </div>
//               {prescriptionRequired && (
//                 <div className="px-3 sm:px-4 py-1 sm:py-2 bg-blue-100 text-blue-800 rounded-full font-medium text-xs sm:text-sm border border-blue-200">
//                   <FaFilePrescription className="inline mr-1 sm:mr-2" />
//                   Rx Required
//                 </div>
//               )}
//             </div>
//           </div>
//         </motion.div>

//         {/* Main Product Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 sm:gap-4 mb-8 sm:mb-12">
//           {/* Left Column - Product Image & Gallery */}
//           <motion.div
//             initial={{ opacity: 0, x: -10 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.2 }}
//             className="space-y-4 sm:space-y-6"
//           >
//             {/* Main Image */}
//             <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
//               <div className="relative h-64 sm:h-80 lg:h-80 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4 sm:p-6 lg:p-5">
//                 <img
//                   src={imageUrl}
//                   alt={product.name}
//                   className="max-h-full max-w-full object-contain transition-transform duration-500 hover:scale-105"
//                   onError={(e) => {
//                     e.target.src = '/placeholder-image.jpg';
//                   }}
//                 />
                
//                 {/* Badges */}
//                 {hasDiscount && (
//                   <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 sm:px-4 py-1 sm:py-2 rounded text-sm sm:text-base font-bold shadow">
//                     <FaWallet className="inline mr-2" />
//                     {savingsPercent}% OFF
//                   </div>
//                 )}
                
//                 <div className="absolute top-3 sm:top-4 right-3 sm:right-4 flex flex-col gap-2">
//                   {rating && (
//                     <div className="bg-white/90 backdrop-blur-sm px-2 sm:px-3 py-1 sm:py-2 rounded shadow flex items-center gap-2">
//                       <FaStar className="text-yellow-500" />
//                       <span className="font-bold text-sm sm:text-base">{rating}</span>
//                       <span className="text-gray-500 text-xs sm:text-sm">/5</span>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>

//             {/* Highlights Card */}
//             {(Object.keys(highlights).length > 0 || medicineType) && (
//               <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 sm:p-3 border border-blue-200">
//                 <h3 className="text-base sm:text-lg font-bold text-blue-900 mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
//                   <FaBoltIcon className="text-blue-600" />
//                   Product Highlights
//                 </h3>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
//                   {medicineType && (
//                     <div className="bg-white rounded-lg p-3 sm:p-4 border border-blue-100">
//                       <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
//                         <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-lg flex items-center justify-center">
//                           <FaTag className="text-blue-600 text-sm sm:text-base" />
//                         </div>
//                         <div>
//                           <p className="text-xs sm:text-sm text-gray-500">Type</p>
//                           <p className="font-semibold text-gray-900 text-sm sm:text-base">{medicineType}</p>
//                         </div>
//                       </div>
//                     </div>
//                   )}
                  
//                   {Object.entries(highlights).slice(0, 3).map(([key, value], index) => (
//                     <div key={index} className="bg-white rounded-lg p-3 sm:p-4 border border-blue-100">
//                       <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
//                         <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-lg flex items-center justify-center">
//                           <BsInfoCircleFill className="text-blue-600 text-sm sm:text-base" />
//                         </div>
//                         <div>
//                           <p className="text-xs sm:text-sm text-gray-500 capitalize truncate">{key.replace(/_/g, ' ')}</p>
//                           <p className="font-semibold text-gray-900 text-sm sm:text-base truncate">{value}</p>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Composition & Details */}
//             {(composition || description) && (
//               <div className="bg-white rounded-xl p-4 sm:p-6 shadow border border-gray-200">
//                 <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4">Product Details</h3>
//                 <div className="space-y-3 sm:space-y-4">
//                   {composition && (
//                     <div className="flex items-start gap-2 sm:gap-3">
//                       <FaFlask className="text-blue-500 mt-0.5 flex-shrink-0" />
//                       <div>
//                         <h4 className="font-semibold text-gray-800 text-sm sm:text-base mb-1">Composition</h4>
//                         <p className="text-gray-600 text-sm sm:text-base">{composition}</p>
//                       </div>
//                     </div>
//                   )}
                  
//                   {description && (
//                     <div className="flex items-start gap-2 sm:gap-3">
//                       <MdDescription className="text-blue-500 mt-0.5 flex-shrink-0" />
//                       <div>
//                         <h4 className="font-semibold text-gray-800 text-sm sm:text-base mb-1">Description</h4>
//                         <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{description}</p>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             )}
//           </motion.div>

//           {/* Right Column - Product Info & Actions */}
//           <motion.div
//             initial={{ opacity: 0, x: 10 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.3 }}
//             className="space-y-4 sm:space-y-2 lg:space-y-4"
//           >
//             {/* Price Card */}
//             <div className="bg-gradient-to-r from-blue-800 to-blue-900 rounded-xl p-4 sm:p-6 lg:p-4 text-white shadow">
//               <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-2 gap-2 sm:gap-0">
//                 <div>
//                   <p className="text-gray-300 text-xs sm:text-sm mb-1">Current Price</p>
//                   <div className="flex items-baseline flex-wrap gap-2 sm:gap-3 lg:gap-4">
//                     <span className="text-2xl sm:text-3xl lg:text-4xl font-bold">₹{price.toFixed(2)}</span>
//                     {hasDiscount && (
//                       <span className="text-lg sm:text-lg lg:text-xl text-gray-400 line-through">
//                         ₹{originalPrice.toFixed(2)}
//                       </span>
//                     )}
//                   </div>
//                 </div>
//                 {hasDiscount && (
//                   <div className="text-left sm:text-right">
//                     <div className="text-lg sm:text-xl lg:text-2xl font-bold text-green-400 flex items-center gap-1 sm:gap-2">
//                       <BsCashCoin className="text-base sm:text-lg" />
//                       Save ₹{savingsAmount}
//                     </div>
//                     <div className="text-green-300 text-sm">({savingsPercent}% off)</div>
//                   </div>
//                 )}
//               </div>
//               {hasDiscount && (
//                 <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-700">
//                   <div className="w-full bg-gray-700 rounded-full h-2 sm:h-3">
//                     <div 
//                       className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 sm:h-3 rounded-full transition-all duration-1000"
//                       style={{ width: `${Math.min(savingsPercent, 100)}%` }}
//                     ></div>
//                   </div>
//                   <p className="text-xs sm:text-sm text-gray-300 mt-2">Limited time offer</p>
//                 </div>
//               )}
//             </div>

//             {/* Uses Tags */}
//             {uses.length > 0 && (
//               <div className="bg-white rounded-xl p-4 sm:p-6 shadow border border-gray-200">
//                 <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
//                   <FaStethoscope className="text-purple-600" />
//                   Recommended For
//                 </h3>
//                 <div className="flex flex-wrap gap-2 sm:gap-3">
//                   {uses.map((use, index) => (
//                     <span 
//                       key={index}
//                       className="px-3 sm:px-4 py-1 sm:py-2 bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 rounded-full font-medium text-xs sm:text-sm border border-purple-200 hover:scale-105 transition-transform"
//                     >
//                       <FaCheckCircle className="inline mr-1 sm:mr-2 text-purple-500" />
//                       {use}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Quantity & Actions */}
//             <div className="bg-white rounded-xl p-4 sm:p-6 shadow border border-gray-200">
//               <div className="mb-4 sm:mb-6">
//                 <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-3 sm:mb-4">Quantity</h3>
//                 <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
//                   <div className="flex items-center border border-gray-300 rounded-lg sm:rounded-xl overflow-hidden">
//                     <button
//                       onClick={decrementQuantity}
//                       className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 hover:bg-gray-100 transition-colors text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
//                       disabled={quantity <= 1}
//                     >
//                       <FaMinus className="text-sm sm:text-base" />
//                     </button>
//                     <span className="w-12 h-10 sm:w-16 sm:h-12 lg:w-20 lg:h-14 text-center flex items-center justify-center text-lg sm:text-xl lg:text-2xl font-bold border-x border-gray-300">
//                       {quantity}
//                     </span>
//                     <button
//                       onClick={incrementQuantity}
//                       className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 hover:bg-gray-100 transition-colors text-gray-600 flex items-center justify-center"
//                     >
//                       <FaPlus className="text-sm sm:text-base" />
//                     </button>
//                   </div>
//                   <div className="text-gray-600">
//                     <p className="font-medium text-sm sm:text-base">
//                       Total: <span className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">₹{(price * quantity).toFixed(2)}</span>
//                     </p>
//                     <p className="text-xs sm:text-sm text-gray-500">({quantity} × ₹{price.toFixed(2)})</p>
//                   </div>
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
//                 <button
//                   onClick={handleAddToCart}
//                   disabled={stock === 0}
//                   className={`h-12 sm:h-14 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 ${
//                     stock === 0 
//                       ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
//                       : 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow hover:shadow-lg transform hover:-translate-y-0.5'
//                   }`}
//                 >
//                   <FaShoppingCart className="text-base sm:text-lg" />
//                   {stock === 0 ? 'Out of Stock' : 'Add to Cart'}
//                 </button>
                
//                 <button
//                   onClick={handleBuyNow}
//                   disabled={stock === 0}
//                   className={`h-12 sm:h-14 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 ${
//                     stock === 0 
//                       ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
//                       : 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow hover:shadow-lg transform hover:-translate-y-0.5'
//                   }`}
//                 >
//                   <FaBolt className="text-base sm:text-lg" />
//                   Buy Now
//                 </button>
//               </div>

//               {/* Delivery Info */}
//               <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-200">
//                 <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg sm:rounded-xl border border-green-200">
//                   <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
//                     <BsTruck className="text-lg sm:text-xl text-green-600" />
//                   </div>
//                   <div className="flex-1 min-w-0">
//                     <h4 className="font-bold text-gray-900 text-sm sm:text-base">Free Delivery</h4>
//                     <p className="text-xs sm:text-sm text-gray-600 leading-tight">
//                       Order within 3 hours for same-day dispatch. Delivery in 2-5 business days.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>

//         {/* Detailed Information Tabs */}
//         <motion.div
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.4 }}
//           className="mb-8 sm:mb-12"
//         >
//           {/* Tabs Navigation */}
//           <div className="border-b border-gray-200 mb-4 sm:mb-6 overflow-x-auto">
//             <nav className="flex min-w-max sm:min-w-0">
//               {[
//                 { id: 'details', icon: <FaInfoCircle />, label: 'Details' },
//                 { id: 'specifications', icon: <FaListAlt />, label: 'Specifications' },
//                 { id: 'usage', icon: <FaBookMedical />, label: 'Usage' },
//                 { id: 'safety', icon: <FaShieldAlt />, label: 'Safety' }
//               ].map((tab) => (
//                 <button
//                   key={tab.id}
//                   onClick={() => setActiveTab(tab.id)}
//                   className={`px-3 sm:px-4 lg:px-6 py-3 font-medium text-sm sm:text-base rounded-t-lg transition-all flex items-center gap-2 sm:gap-3 whitespace-nowrap ${
//                     activeTab === tab.id
//                       ? 'bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 border-b-2 sm:border-b-4 border-blue-600'
//                       : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
//                   }`}
//                 >
//                   {tab.icon}
//                   {tab.label}
//                 </button>
//               ))}
//             </nav>
//           </div>

//           {/* Tabs Content */}
//           <div className="bg-white rounded-xl shadow border border-gray-200 overflow-hidden">
//             {/* Details Tab */}
//             {activeTab === 'details' && (
//               <div className="p-4 sm:p-6 lg:p-8">
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
//                   <div>
//                     <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
//                       <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg sm:rounded-xl flex items-center justify-center">
//                         <FaInfoCircle className="text-lg sm:text-xl text-blue-600" />
//                       </div>
//                       Detailed Information
//                     </h3>
                    
//                     {keyFeatures.length > 0 && (
//                       <div className="mb-6 sm:mb-8">
//                         <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Key Features</h4>
//                         <div className="space-y-2 sm:space-y-3">
//                           {keyFeatures.map((feature, index) => (
//                             <div key={index} className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 bg-gray-50 rounded-lg sm:rounded-xl">
//                               <FaCheck className="text-green-500 mt-0.5 flex-shrink-0" />
//                               <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     )}
//                   </div>

//                   <div>
//                     <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
//                       <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-lg sm:rounded-xl flex items-center justify-center">
//                         <FaListAlt className="text-lg sm:text-xl text-purple-600" />
//                       </div>
//                       Specifications
//                     </h3>
                    
//                     <div className="space-y-3 sm:space-y-4">
//                       {medicineType && (
//                         <div className="flex justify-between items-center p-3 sm:p-4 bg-gray-50 rounded-lg sm:rounded-xl">
//                           <span className="font-medium text-gray-700 text-sm sm:text-base">Medicine Type</span>
//                           <span className="font-semibold text-gray-900 text-sm sm:text-base">{medicineType}</span>
//                         </div>
//                       )}
                      
//                       {companyName && (
//                         <div className="flex justify-between items-center p-3 sm:p-4 bg-gray-50 rounded-lg sm:rounded-xl">
//                           <span className="font-medium text-gray-700 text-sm sm:text-base">Manufacturer</span>
//                           <span className="font-semibold text-gray-900 text-sm sm:text-base">{companyName}</span>
//                         </div>
//                       )}
                      
//                       {product.category && (
//                         <div className="flex justify-between items-center p-3 sm:p-4 bg-gray-50 rounded-lg sm:rounded-xl">
//                           <span className="font-medium text-gray-700 text-sm sm:text-base">Category</span>
//                           <span className="font-semibold text-gray-900 text-sm sm:text-base flex items-center gap-1 sm:gap-2">
//                             {getCategoryIcon(product.category)}
//                             {categoryDisplay}
//                           </span>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* Usage Tab */}
//             {activeTab === 'usage' && (
//               <div className="p-4 sm:p-6 lg:p-8">
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
//                   {howToUse && (
//                     <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 sm:p-6 lg:p-8 border border-blue-200">
//                       <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6">
//                         <FaBookMedical className="text-xl sm:text-2xl text-blue-600" />
//                       </div>
//                       <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-3 sm:mb-4">How to Use</h3>
//                       <p className="text-blue-800 leading-relaxed text-sm sm:text-base lg:text-lg">{howToUse}</p>
//                     </div>
//                   )}
                  
//                   {ingredients && (
//                     <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 sm:p-6 lg:p-8 border border-green-200">
//                       <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6">
//                         <FaFlask className="text-xl sm:text-2xl text-green-600" />
//                       </div>
//                       <h3 className="text-lg sm:text-xl font-bold text-green-900 mb-3 sm:mb-4">Ingredients</h3>
//                       <div className="bg-white/50 rounded-lg sm:rounded-xl p-4 sm:p-6">
//                         <p className="text-green-800 text-sm sm:text-base">
//                           {Array.isArray(ingredients) ? ingredients.join(', ') : ingredients}
//                         </p>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             )}
//           </div>
//         </motion.div>

//         {/* Related Products Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5 }}
//           className="mb-8 sm:mb-12"
//         >
//           <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6 gap-3 sm:gap-0">
//             <h2 className="text-lg sm:text-xl font-bold text-gray-900">You May Also Like</h2>
//             <button
//               onClick={() => navigate(`/products/${product.category}`)}
//               className="text-blue-600 hover:text-blue-700 font-semibold text-sm sm:text-base flex items-center gap-1 sm:gap-2"
//             >
//               View All in {categoryDisplay}
//               <FaArrowRight />
//             </button>
//           </div>
          
//           <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
//             {[1, 2, 3, 4].map((item) => (
//               <div key={item} className="bg-white rounded-lg sm:rounded-xl border border-gray-200 p-3 sm:p-4 lg:p-6 text-center hover:shadow-md transition-shadow duration-300">
//                 <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3 lg:mb-4">
//                   {item % 2 === 0 ? (
//                     <FaCapsules className="text-xl sm:text-2xl lg:text-3xl text-blue-600" />
//                   ) : (
//                     <FaPills className="text-xl sm:text-2xl lg:text-3xl text-blue-600" />
//                   )}
//                 </div>
//                 <h4 className="font-semibold text-gray-900 text-xs sm:text-sm lg:text-base mb-1 sm:mb-2">Related Product {item}</h4>
//                 <p className="text-gray-500 text-xs sm:text-sm mb-2 sm:mb-3 lg:mb-4">Similar products you might like</p>
//                 <button className="text-blue-600 hover:text-blue-700 font-medium text-xs sm:text-sm flex items-center justify-center gap-1">
//                   View Details
//                   <FaArrowRight className="text-xs" />
//                 </button>
//               </div>
//             ))}
//           </div>
//         </motion.div>

//         {/* Need Help Section */}
//         <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-4 sm:p-6 lg:p-8 text-white">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
//             <div className="flex items-center gap-3 sm:gap-4">
//               <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-white/20 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
//                 <FaHeadset className="text-lg sm:text-xl lg:text-2xl" />
//               </div>
//               <div>
//                 <h4 className="text-base sm:text-lg lg:text-xl font-bold mb-1">24/7 Support</h4>
//                 <p className="text-blue-100 text-xs sm:text-sm">Call us anytime for assistance</p>
//               </div>
//             </div>
            
//             <div className="flex items-center gap-3 sm:gap-4">
//               <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-white/20 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
//                 <FaUserMd className="text-lg sm:text-xl lg:text-2xl" />
//               </div>
//               <div>
//                 <h4 className="text-base sm:text-lg lg:text-xl font-bold mb-1">Doctor Consultation</h4>
//                 <p className="text-blue-100 text-xs sm:text-sm">Free consultation available</p>
//               </div>
//             </div>
            
//             <div className="flex items-center gap-3 sm:gap-4">
//               <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-white/20 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
//                 <FaShieldAlt className="text-lg sm:text-xl lg:text-2xl" />
//               </div>
//               <div>
//                 <h4 className="text-base sm:text-lg lg:text-xl font-bold mb-1">100% Safe</h4>
//                 <p className="text-blue-100 text-xs sm:text-sm">Authentic & verified products</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default ProductDetail;



















































// ProductDetail.jsx - Updated imports
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import { fetchProductById, clearSelectedProduct } from '../productSlice.js'
import { selectSelectedProduct, selectLoading } from '../productSelectors.js'

// Import cart action
import { addItemToCart } from '../../cart/cartSlice.js' // ADD THIS LINE

// Import React Icons
import {
  FaArrowLeft, FaShoppingCart, FaBolt, FaHome, FaStore, FaCheckCircle,
  FaArrowRight, FaHeadset, FaUserMd, FaShieldAlt, FaStar, FaFilePrescription,
  FaTag, FaInfoCircle, FaFlask, FaStethoscope, FaListAlt, FaBookMedical,
  FaExclamationTriangle, FaExclamationCircle, FaPills, FaCapsules,
  FaPrescriptionBottle, FaWeight, FaCalendarCheck, FaGlobe, FaFlag,
  FaBox, FaShippingFast, FaCheck, FaPlus, FaMinus, FaTimesCircle,
  FaCheckCircle as FaCheckCircleSolid, FaBolt as FaBoltIcon, FaWallet
} from 'react-icons/fa'

import { 
  MdLocalPharmacy, MdHealthAndSafety, MdMedicalServices, MdScience,
  MdDescription, MdWarning, MdLocalOffer, MdInventory
} from 'react-icons/md'

import {
  GiMedicinePills, GiHeartPlus, GiLiver, GiStomach, GiTooth,
  GiBabyFace, GiVirus, GiMedicalPack
} from 'react-icons/gi'

import {
  BsInfoCircleFill, BsStarFill, BsCashCoin, BsTruck
} from 'react-icons/bs'

const ProductDetail = () => {
  const { productId } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const product = useSelector(selectSelectedProduct)
  const loading = useSelector(selectLoading)
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState('details')

  // Debug effect
  useEffect(() => {
    console.log('🔍 ProductDetail - Current State:', {
      productId,
      productFound: !!product,
      productName: product?.name,
      loading
    });
  }, [productId, product, loading]);

  // Fetch product
  useEffect(() => {
    if (productId) {
      console.log('🔄 Dispatching fetch for:', productId);
      dispatch(fetchProductById(productId));
    }

    return () => {
      console.log('🧹 Cleaning up product detail');
      dispatch(clearSelectedProduct());
    };
  }, [productId, dispatch]);

  // Helper functions
  const getProductPrice = (product) => {
    if (!product) return 0;
    return typeof product.price === 'number' 
      ? product.price 
      : parseFloat(product.priceNumeric || 0);
  };

  const getOriginalPrice = (product) => {
    if (!product) return 0;
    return typeof product.originalPrice === 'number'
      ? product.originalPrice
      : parseFloat(product.originalPriceNumeric || getProductPrice(product));
  };

  const getImageUrl = (product) => {
    if (!product) return '/placeholder-image.jpg';
    return product.image || product.images || '/placeholder-image.jpg';
  };

  const getCategoryDisplayName = (category) => {
    if (!category) return '';
    return category.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  // Get category icon
  const getCategoryIcon = (category) => {
    switch(category) {
      case 'baby': return <GiBabyFace className="text-base lg:text-lg" />;
      case 'covid': return <GiVirus className="text-base lg:text-lg" />;
      case 'diabetes': return <MdMedicalServices className="text-base lg:text-lg" />;
      case 'cardiology': return <GiHeartPlus className="text-base lg:text-lg" />;
      case 'liver': return <GiLiver className="text-base lg:text-lg" />;
      case 'oral': return <GiTooth className="text-base lg:text-lg" />;
      case 'skincare': return <MdHealthAndSafety className="text-base lg:text-lg" />;
      case 'stomach': return <GiStomach className="text-base lg:text-lg" />;
      default: return <GiMedicalPack className="text-base lg:text-lg" />;
    }
  };

// Update the handleAddToCart function:
const handleAddToCart = () => {
  if (product) {
    const cartItem = {
      id: product.id,
      name: product.name,
      brand: product.brand || product.company_name,
      price: price,
      originalPrice: originalPrice,
      image: imageUrl,
      category: product.category,
      prescriptionRequired: prescriptionRequired,
      quantity: quantity
    };
    
    dispatch(addItemToCart(cartItem));
    
    // Show notification
    alert(`Added ${quantity} ${product.name} to cart!`);
    
    // Optional: Show a toast notification instead
    console.log(`🛒 Added ${quantity} of ${product.name} to cart`);
  }
};

// Also update the handleBuyNow function:
const handleBuyNow = () => {
  handleAddToCart();
  setTimeout(() => {
    navigate('/cart');
  }, 300);
};


  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4">
        <div className="animate-spin rounded-full h-14 sm:h-16 border-4 border-blue-500 border-t-transparent mb-4"></div>
        <p className="text-base sm:text-lg font-semibold text-gray-700 mb-2">Loading Product Details</p>
        <p className="text-sm text-gray-500 text-center">Preparing your product information...</p>
        <div className="mt-4 px-4 py-2 bg-blue-50 rounded-full">
          <code className="text-sm text-blue-700">ID: {productId}</code>
        </div>
      </div>
    );
  }

  // Not found state
  if (!product && !loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4">
        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-red-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4 shadow-inner">
            <FaExclamationTriangle className="text-2xl sm:text-3xl text-red-500" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Product Not Found</h2>
          <div className="mb-4 p-3 bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-sm text-gray-700 mb-2">
              We couldn't find the product with ID:
            </p>
            <code className="bg-gray-900 text-gray-100 px-3 py-1 rounded text-xs sm:text-sm font-mono break-all">
              {productId}
            </code>
          </div>
          <p className="text-sm text-gray-600 mb-6">
            The product may have been removed or the link might be incorrect.
          </p>
          <div className="space-y-3">
            <button
              onClick={() => navigate('/products')}
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-3 rounded-lg font-semibold text-sm sm:text-base transition-colors flex items-center justify-center gap-2"
            >
              <FaStore className="text-base" />
              Browse All Products
            </button>
            <button
              onClick={() => navigate(-1)}
              className="w-full bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-800 py-3 rounded-lg font-semibold text-sm sm:text-base transition-colors border border-gray-300 flex items-center justify-center gap-2"
            >
              <FaArrowLeft className="text-base" />
              Go Back
            </button>
          </div>
        </div>
      </div>
    );
  }

  // If no product exists
  if (!product) return null;

  // Extract product data
  const price = getProductPrice(product);
  const originalPrice = getOriginalPrice(product);
  const hasDiscount = originalPrice > price;
  const savingsPercent = hasDiscount 
    ? Math.round(((originalPrice - price) / originalPrice) * 100) 
    : 0;
  const savingsAmount = hasDiscount ? (originalPrice - price).toFixed(2) : 0;
  const imageUrl = getImageUrl(product);
  const categoryDisplay = getCategoryDisplayName(product.category);
  const stock = product.stock || 0;
  const rating = product.rating || 4.0;
  const brand = product.brand || product.company_name || '';
  const companyName = product.company_name || product.manufacturer || '';
  const composition = product.composition || product.chemical_name || '';
  const medicineType = product.medicine_type || product.product_type || '';
  const uses = Array.isArray(product.uses) ? product.uses : [];
  const keyFeatures = Array.isArray(product.keyFeatures) ? product.keyFeatures : [];
  const howToUse = product.howToUse || product.information?.usage_instruction || '';
  const ingredients = product.ingredients || '';
  const warnings = product.warnings || product.information?.disclaimer || '';
  const description = product.description || '';
  const highlights = product.highlights || {};
  const prescriptionRequired = product.prescriptionRequired || false;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-gradient-to-b from-gray-50 to-white"
    >
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 py-3">
          <nav className="flex items-center space-x-2 text-sm">
            <button
              onClick={() => navigate('/')}
              className="text-gray-500 hover:text-blue-600 transition-colors flex items-center gap-1"
            >
              <FaHome className="text-xs" />
              <span className="hidden sm:inline">Home</span>
            </button>
            <span className="text-gray-300">/</span>
            <button
              onClick={() => navigate('/products')}
              className="text-gray-500 hover:text-blue-600 transition-colors"
            >
              Products
            </button>
            <span className="text-gray-300">/</span>
            <button
              onClick={() => navigate(`/products/${product.category}`)}
              className="text-gray-500 hover:text-blue-600 transition-colors flex items-center gap-2"
            >
              {getCategoryIcon(product.category)}
              <span className="truncate max-w-[100px] sm:max-w-xs">{categoryDisplay}</span>
            </button>
            <span className="text-gray-300">/</span>
            <span className="text-blue-600 font-semibold truncate max-w-[120px] sm:max-w-xs">
              {product.name}
            </span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 py-4 sm:py-6 lg:py-4">
        {/* Product Header */}
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6 sm:mb-8"
        >
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-4">
            <div className="flex-1 min-w-0">
              <h1 className="text-xl sm:text-2xl lg:text-2xl font-bold text-gray-900 mb-2 leading-tight">
                {product.name}
              </h1>
              <div className="flex items-center flex-wrap gap-1 sm:gap-3">
                <span className="text-base sm:text-lg text-blue-600 font-semibold truncate">
                  {brand}
                </span>
                {companyName && brand !== companyName && (
                  <span className="text-xs sm:text-sm text-gray-600 bg-gray-100 px-2 sm:px-3 py-1 rounded-full truncate max-w-[150px] sm:max-w-none">
                    by {companyName}
                  </span>
                )}
              </div>
            </div>
            <div className="flex items-center flex-wrap gap-1 sm:gap-3 mt-2 sm:mt-0">
              <div className={`px-3 sm:px-4 py-1 sm:py-2 rounded-full font-medium text-xs sm:text-sm ${stock > 0 
                ? 'bg-green-100 text-green-800 border border-green-200' 
                : 'bg-red-100 text-red-800 border border-red-200'}`}>
                {stock > 0 ? (
                  <>
                    <FaCheckCircleSolid className="inline mr-1 sm:mr-2" />
                    In Stock ({stock})
                  </>
                ) : (
                  <>
                    <FaTimesCircle className="inline mr-1 sm:mr-2" />
                    Out of Stock
                  </>
                )}
              </div>
              {prescriptionRequired && (
                <div className="px-3 sm:px-4 py-1 sm:py-2 bg-blue-100 text-blue-800 rounded-full font-medium text-xs sm:text-sm border border-blue-200">
                  <FaFilePrescription className="inline mr-1 sm:mr-2" />
                  Rx Required
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Main Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 sm:gap-4 mb-8 sm:mb-12">
          {/* Left Column - Product Image & Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4 sm:space-y-6"
          >
            {/* Main Image */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="relative h-64 sm:h-80 lg:h-80 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4 sm:p-6 lg:p-5">
                <img
                  src={imageUrl}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain transition-transform duration-500 hover:scale-105"
                  onError={(e) => {
                    e.target.src = '/placeholder-image.jpg';
                  }}
                />
                
                {/* Badges */}
                {hasDiscount && (
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 sm:px-4 py-1 sm:py-2 rounded text-sm sm:text-base font-bold shadow">
                    <FaWallet className="inline mr-2" />
                    {savingsPercent}% OFF
                  </div>
                )}
                
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 flex flex-col gap-2">
                  {rating && (
                    <div className="bg-white/90 backdrop-blur-sm px-2 sm:px-3 py-1 sm:py-2 rounded shadow flex items-center gap-2">
                      <FaStar className="text-yellow-500" />
                      <span className="font-bold text-sm sm:text-base">{rating}</span>
                      <span className="text-gray-500 text-xs sm:text-sm">/5</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Highlights Card */}
            {(Object.keys(highlights).length > 0 || medicineType) && (
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 sm:p-3 border border-blue-200">
                <h3 className="text-base sm:text-lg font-bold text-blue-900 mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
                  <FaBoltIcon className="text-blue-600" />
                  Product Highlights
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
                  {medicineType && (
                    <div className="bg-white rounded-lg p-3 sm:p-4 border border-blue-100">
                      <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <FaTag className="text-blue-600 text-sm sm:text-base" />
                        </div>
                        <div>
                          <p className="text-xs sm:text-sm text-gray-500">Type</p>
                          <p className="font-semibold text-gray-900 text-sm sm:text-base">{medicineType}</p>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {Object.entries(highlights).slice(0, 3).map(([key, value], index) => (
                    <div key={index} className="bg-white rounded-lg p-3 sm:p-4 border border-blue-100">
                      <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <BsInfoCircleFill className="text-blue-600 text-sm sm:text-base" />
                        </div>
                        <div>
                          <p className="text-xs sm:text-sm text-gray-500 capitalize truncate">{key.replace(/_/g, ' ')}</p>
                          <p className="font-semibold text-gray-900 text-sm sm:text-base truncate">{value}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Composition & Details */}
            {(composition || description) && (
              <div className="bg-white rounded-xl p-4 sm:p-6 shadow border border-gray-200">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4">Product Details</h3>
                <div className="space-y-3 sm:space-y-4">
                  {composition && (
                    <div className="flex items-start gap-2 sm:gap-3">
                      <FaFlask className="text-blue-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-800 text-sm sm:text-base mb-1">Composition</h4>
                        <p className="text-gray-600 text-sm sm:text-base">{composition}</p>
                      </div>
                    </div>
                  )}
                  
                  {description && (
                    <div className="flex items-start gap-2 sm:gap-3">
                      <MdDescription className="text-blue-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-800 text-sm sm:text-base mb-1">Description</h4>
                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{description}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </motion.div>

          {/* Right Column - Product Info & Actions */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-4 sm:space-y-2 lg:space-y-4"
          >
            {/* Price Card */}
            <div className="bg-gradient-to-r from-blue-800 to-blue-900 rounded-xl p-4 sm:p-6 lg:p-4 text-white shadow">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-2 gap-2 sm:gap-0">
                <div>
                  <p className="text-gray-300 text-xs sm:text-sm mb-1">Current Price</p>
                  <div className="flex items-baseline flex-wrap gap-2 sm:gap-3 lg:gap-4">
                    <span className="text-2xl sm:text-3xl lg:text-4xl font-bold">₹{price.toFixed(2)}</span>
                    {hasDiscount && (
                      <span className="text-lg sm:text-lg lg:text-xl text-gray-400 line-through">
                        ₹{originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                </div>
                {hasDiscount && (
                  <div className="text-left sm:text-right">
                    <div className="text-lg sm:text-xl lg:text-2xl font-bold text-green-400 flex items-center gap-1 sm:gap-2">
                      <BsCashCoin className="text-base sm:text-lg" />
                      Save ₹{savingsAmount}
                    </div>
                    <div className="text-green-300 text-sm">({savingsPercent}% off)</div>
                  </div>
                )}
              </div>
              {hasDiscount && (
                <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-700">
                  <div className="w-full bg-gray-700 rounded-full h-2 sm:h-3">
                    <div 
                      className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 sm:h-3 rounded-full transition-all duration-1000"
                      style={{ width: `${Math.min(savingsPercent, 100)}%` }}
                    ></div>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-300 mt-2">Limited time offer</p>
                </div>
              )}
            </div>

            {/* Uses Tags */}
            {uses.length > 0 && (
              <div className="bg-white rounded-xl p-4 sm:p-6 shadow border border-gray-200">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
                  <FaStethoscope className="text-purple-600" />
                  Recommended For
                </h3>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {uses.map((use, index) => (
                    <span 
                      key={index}
                      className="px-3 sm:px-4 py-1 sm:py-2 bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 rounded-full font-medium text-xs sm:text-sm border border-purple-200 hover:scale-105 transition-transform"
                    >
                      <FaCheckCircle className="inline mr-1 sm:mr-2 text-purple-500" />
                      {use}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity & Actions */}
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow border border-gray-200">
              <div className="mb-4 sm:mb-6">
                <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-3 sm:mb-4">Quantity</h3>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                  <div className="flex items-center border border-gray-300 rounded-lg sm:rounded-xl overflow-hidden">
                    <button
                      onClick={decrementQuantity}
                      className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 hover:bg-gray-100 transition-colors text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                      disabled={quantity <= 1}
                    >
                      <FaMinus className="text-sm sm:text-base" />
                    </button>
                    <span className="w-12 h-10 sm:w-16 sm:h-12 lg:w-20 lg:h-14 text-center flex items-center justify-center text-lg sm:text-xl lg:text-2xl font-bold border-x border-gray-300">
                      {quantity}
                    </span>
                    <button
                      onClick={incrementQuantity}
                      className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 hover:bg-gray-100 transition-colors text-gray-600 flex items-center justify-center"
                    >
                      <FaPlus className="text-sm sm:text-base" />
                    </button>
                  </div>
                  <div className="text-gray-600">
                    <p className="font-medium text-sm sm:text-base">
                      Total: <span className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">₹{(price * quantity).toFixed(2)}</span>
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500">({quantity} × ₹{price.toFixed(2)})</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <button
                  onClick={handleAddToCart}
                  disabled={stock === 0}
                  className={`h-12 sm:h-14 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 ${
                    stock === 0 
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow hover:shadow-lg transform hover:-translate-y-0.5'
                  }`}
                >
                  <FaShoppingCart className="text-base sm:text-lg" />
                  {stock === 0 ? 'Out of Stock' : 'Add to Cart'}
                </button>
                
                <button
                  onClick={handleBuyNow}
                  disabled={stock === 0}
                  className={`h-12 sm:h-14 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 ${
                    stock === 0 
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow hover:shadow-lg transform hover:-translate-y-0.5'
                  }`}
                >
                  <FaBolt className="text-base sm:text-lg" />
                  Buy Now
                </button>
              </div>

              {/* Delivery Info */}
              <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-200">
                <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg sm:rounded-xl border border-green-200">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BsTruck className="text-lg sm:text-xl text-green-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-gray-900 text-sm sm:text-base">Free Delivery</h4>
                    <p className="text-xs sm:text-sm text-gray-600 leading-tight">
                      Order within 3 hours for same-day dispatch. Delivery in 2-5 business days.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Detailed Information Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-8 sm:mb-12"
        >
          {/* Tabs Navigation */}
          <div className="border-b border-gray-200 mb-4 sm:mb-6 overflow-x-auto">
            <nav className="flex min-w-max sm:min-w-0">
              {[
                { id: 'details', icon: <FaInfoCircle />, label: 'Details' },
                { id: 'specifications', icon: <FaListAlt />, label: 'Specifications' },
                { id: 'usage', icon: <FaBookMedical />, label: 'Usage' },
                { id: 'safety', icon: <FaShieldAlt />, label: 'Safety' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3 sm:px-4 lg:px-6 py-3 font-medium text-sm sm:text-base rounded-t-lg transition-all flex items-center gap-2 sm:gap-3 whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 border-b-2 sm:border-b-4 border-blue-600'
                      : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Tabs Content */}
          <div className="bg-white rounded-xl shadow border border-gray-200 overflow-hidden">
            {/* Details Tab */}
            {activeTab === 'details' && (
              <div className="p-4 sm:p-6 lg:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg sm:rounded-xl flex items-center justify-center">
                        <FaInfoCircle className="text-lg sm:text-xl text-blue-600" />
                      </div>
                      Detailed Information
                    </h3>
                    
                    {keyFeatures.length > 0 && (
                      <div className="mb-6 sm:mb-8">
                        <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Key Features</h4>
                        <div className="space-y-2 sm:space-y-3">
                          {keyFeatures.map((feature, index) => (
                            <div key={index} className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 bg-gray-50 rounded-lg sm:rounded-xl">
                              <FaCheck className="text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-lg sm:rounded-xl flex items-center justify-center">
                        <FaListAlt className="text-lg sm:text-xl text-purple-600" />
                      </div>
                      Specifications
                    </h3>
                    
                    <div className="space-y-3 sm:space-y-4">
                      {medicineType && (
                        <div className="flex justify-between items-center p-3 sm:p-4 bg-gray-50 rounded-lg sm:rounded-xl">
                          <span className="font-medium text-gray-700 text-sm sm:text-base">Medicine Type</span>
                          <span className="font-semibold text-gray-900 text-sm sm:text-base">{medicineType}</span>
                        </div>
                      )}
                      
                      {companyName && (
                        <div className="flex justify-between items-center p-3 sm:p-4 bg-gray-50 rounded-lg sm:rounded-xl">
                          <span className="font-medium text-gray-700 text-sm sm:text-base">Manufacturer</span>
                          <span className="font-semibold text-gray-900 text-sm sm:text-base">{companyName}</span>
                        </div>
                      )}
                      
                      {product.category && (
                        <div className="flex justify-between items-center p-3 sm:p-4 bg-gray-50 rounded-lg sm:rounded-xl">
                          <span className="font-medium text-gray-700 text-sm sm:text-base">Category</span>
                          <span className="font-semibold text-gray-900 text-sm sm:text-base flex items-center gap-1 sm:gap-2">
                            {getCategoryIcon(product.category)}
                            {categoryDisplay}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Usage Tab */}
            {activeTab === 'usage' && (
              <div className="p-4 sm:p-6 lg:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                  {howToUse && (
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 sm:p-6 lg:p-8 border border-blue-200">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                        <FaBookMedical className="text-xl sm:text-2xl text-blue-600" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-3 sm:mb-4">How to Use</h3>
                      <p className="text-blue-800 leading-relaxed text-sm sm:text-base lg:text-lg">{howToUse}</p>
                    </div>
                  )}
                  
                  {ingredients && (
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 sm:p-6 lg:p-8 border border-green-200">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                        <FaFlask className="text-xl sm:text-2xl text-green-600" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-green-900 mb-3 sm:mb-4">Ingredients</h3>
                      <div className="bg-white/50 rounded-lg sm:rounded-xl p-4 sm:p-6">
                        <p className="text-green-800 text-sm sm:text-base">
                          {Array.isArray(ingredients) ? ingredients.join(', ') : ingredients}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Related Products Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-8 sm:mb-12"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6 gap-3 sm:gap-0">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">You May Also Like</h2>
            <button
              onClick={() => navigate(`/products/${product.category}`)}
              className="text-blue-600 hover:text-blue-700 font-semibold text-sm sm:text-base flex items-center gap-1 sm:gap-2"
            >
              View All in {categoryDisplay}
              <FaArrowRight />
            </button>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-white rounded-lg sm:rounded-xl border border-gray-200 p-3 sm:p-4 lg:p-6 text-center hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3 lg:mb-4">
                  {item % 2 === 0 ? (
                    <FaCapsules className="text-xl sm:text-2xl lg:text-3xl text-blue-600" />
                  ) : (
                    <FaPills className="text-xl sm:text-2xl lg:text-3xl text-blue-600" />
                  )}
                </div>
                <h4 className="font-semibold text-gray-900 text-xs sm:text-sm lg:text-base mb-1 sm:mb-2">Related Product {item}</h4>
                <p className="text-gray-500 text-xs sm:text-sm mb-2 sm:mb-3 lg:mb-4">Similar products you might like</p>
                <button className="text-blue-600 hover:text-blue-700 font-medium text-xs sm:text-sm flex items-center justify-center gap-1">
                  View Details
                  <FaArrowRight className="text-xs" />
                </button>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Need Help Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-4 sm:p-6 lg:p-8 text-white">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-white/20 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                <FaHeadset className="text-lg sm:text-xl lg:text-2xl" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg lg:text-xl font-bold mb-1">24/7 Support</h4>
                <p className="text-blue-100 text-xs sm:text-sm">Call us anytime for assistance</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-white/20 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                <FaUserMd className="text-lg sm:text-xl lg:text-2xl" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg lg:text-xl font-bold mb-1">Doctor Consultation</h4>
                <p className="text-blue-100 text-xs sm:text-sm">Free consultation available</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-white/20 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                <FaShieldAlt className="text-lg sm:text-xl lg:text-2xl" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg lg:text-xl font-bold mb-1">100% Safe</h4>
                <p className="text-blue-100 text-xs sm:text-sm">Authentic & verified products</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductDetail;