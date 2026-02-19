import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { motion, AnimatePresence } from 'framer-motion'

// Import your JSON data
import products from '../data/products.js'

// React Icons
import {
  FaHeart,
  FaShoppingCart,
  FaTrash,
  FaEye,
  FaBell,
  FaRupeeSign,
  FaCheckCircle,
  FaTimesCircle,
  FaStar,
  FaFilter,
  FaSearch,
  FaExclamationTriangle,
  FaTag,
  FaShieldAlt,
  FaTruck,
  FaSync,
  FaPercentage,
  FaBox,
  FaPills,
  FaPrescriptionBottleAlt,
  FaMedkit
} from 'react-icons/fa'

const MyWishlist = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user, isAuthenticated } = useSelector(state => state.auth)
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('recent')
  const [showNotification, setShowNotification] = useState(false)
  const [wishlist, setWishlist] = useState([])
  const [loading, setLoading] = useState(true)
  const [notificationMessage, setNotificationMessage] = useState('')

  // Check authentication
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login')
    }
  }, [isAuthenticated, navigate])

  // Load wishlist data from JSON
  useEffect(() => {
    const loadWishlist = () => {
      try {
        setLoading(true)
        
        // Get all products from the JSON data
        const allProducts = []
        
        // Flatten the products object to get all products
        Object.keys(products).forEach(category => {
          if (Array.isArray(products[category])) {
            // For simple arrays (baby, covid, oral, skincare)
            products[category].forEach(product => {
              allProducts.push({
                ...product,
                category: category,
                subCategory: product.subCategory || 'general'
              })
            })
          } else if (typeof products[category] === 'object') {
            // For nested objects (diabetes, cardiology, liver, stomach)
            Object.keys(products[category]).forEach(subCategory => {
              if (Array.isArray(products[category][subCategory])) {
                products[category][subCategory].forEach(product => {
                  allProducts.push({
                    ...product,
                    category: category,
                    subCategory: subCategory
                  })
                })
              }
            })
          }
        })

        // Create wishlist items from products (select 8 random products)
        const getRandomProducts = (arr, n) => {
          const shuffled = [...arr].sort(() => 0.5 - Math.random())
          return shuffled.slice(0, n)
        }

        const wishlistItems = getRandomProducts(allProducts, 8).map((product, index) => {
          // Generate some wishlist-specific data
          const addedDate = new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000)
          const originalPrice = product.originalPriceNumeric || Math.round(product.priceNumeric * 1.2)
          const inStock = Math.random() > 0.2 // 80% chance of being in stock
          const rating = 3.5 + Math.random() * 1.5 // Random rating between 3.5 and 5.0
          const reviews = Math.floor(Math.random() * 5000) + 100
          
          // Determine if prescription is required based on category
          const prescriptionRequired = [
            'diabetes', 'cardiology', 'liver', 'stomach', 'antibiotics'
          ].some(term => 
            product.category?.toLowerCase().includes(term) || 
            product.subCategory?.toLowerCase().includes(term) ||
            product.name?.toLowerCase().includes('antibiotic') ||
            product.name?.toLowerCase().includes('insulin') ||
            product.name?.toLowerCase().includes('tablet')
          )

          return {
            id: product.id || `wishlist-${index + 1}`,
            name: product.name,
            brand: product.brand || 'Generic',
            price: product.priceNumeric,
            originalPrice: originalPrice,
            image: product.image || `/med${(index % 9) + 1}.jpg`,
            category: product.category,
            subCategory: product.subCategory,
            description: product.description || 'Healthcare product',
            inStock: inStock,
            addedDate: addedDate.toISOString().split('T')[0],
            rating: parseFloat(rating.toFixed(1)),
            reviews: reviews,
            prescriptionRequired: prescriptionRequired,
            savings: Math.round(((originalPrice - product.priceNumeric) / originalPrice) * 100),
            productData: product // Store full product data for later use
          }
        })

        setWishlist(wishlistItems)
        setLoading(false)
      } catch (error) {
        console.error('Error loading wishlist:', error)
        setLoading(false)
      }
    }

    loadWishlist()
  }, [])

  // Filter and sort wishlist
  const filteredWishlist = wishlist
    .filter(item => 
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.brand.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      switch(sortBy) {
        case 'price-low':
          return a.price - b.price
        case 'price-high':
          return b.price - a.price
        case 'name':
          return a.name.localeCompare(b.name)
        case 'rating':
          return b.rating - a.rating
        case 'recent':
          return new Date(b.addedDate) - new Date(a.addedDate)
        case 'savings':
          return b.savings - a.savings
        default:
          return new Date(b.addedDate) - new Date(a.addedDate)
      }
    })

  // Remove from wishlist
  const removeFromWishlist = (id) => {
    setWishlist(prev => prev.filter(item => item.id !== id))
    showNotificationWithMessage('Item removed from wishlist')
  }

  // Add to cart
  const addToCart = (item) => {
    // Here you would dispatch add to cart action
    // dispatch(addToCart({...item, quantity: 1}))
    
    showNotificationWithMessage(`${item.name} added to cart!`)
  }

  // Move all to cart
  const moveAllToCart = () => {
    const inStockItems = wishlist.filter(item => item.inStock && !item.prescriptionRequired)
    if (inStockItems.length === 0) {
      showNotificationWithMessage('No items available to add to cart')
      return
    }
    
    // Here you would dispatch multiple add to cart actions
    // inStockItems.forEach(item => dispatch(addToCart({...item, quantity: 1})))
    
    showNotificationWithMessage(`Added ${inStockItems.length} items to cart!`)
  }

  // Show notification
  const showNotificationWithMessage = (message) => {
    setNotificationMessage(message)
    setShowNotification(true)
    setTimeout(() => {
      setShowNotification(false)
      setNotificationMessage('')
    }, 3000)
  }

  // Calculate statistics
  const wishlistStats = {
    totalItems: wishlist.length,
    inStock: wishlist.filter(item => item.inStock).length,
    onSale: wishlist.filter(item => item.originalPrice > item.price).length,
    prescriptionRequired: wishlist.filter(item => item.prescriptionRequired).length,
    totalValue: wishlist.reduce((sum, item) => sum + item.price, 0),
    totalSavings: wishlist.reduce((sum, item) => {
      return sum + (item.originalPrice > item.price ? item.originalPrice - item.price : 0)
    }, 0),
    averageSavings: wishlist.length > 0 ? 
      Math.round(wishlist.reduce((sum, item) => sum + item.savings, 0) / wishlist.length) : 0
  }

  // Category distribution
  const categoryDistribution = wishlist.reduce((acc, item) => {
    const category = item.category.charAt(0).toUpperCase() + item.category.slice(1)
    acc[category] = (acc[category] || 0) + 1
    return acc
  }, {})

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white pt-20 pb-12 flex items-center justify-center">
        <div className="text-center">
          <FaSync className="animate-spin text-4xl text-pink-600 mx-auto mb-4" />
          <p className="text-gray-600">Loading your wishlist...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white pt-5 pb-12">
      {/* Notification */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-20 right-4 z-50"
          >
            <div className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center">
              <FaCheckCircle className="mr-3" />
              <span>{notificationMessage}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-red-500 rounded-xl flex items-center justify-center">
                  <FaHeart className="text-white text-xl" />
                </div>
                <div className="ml-4">
                  <h1 className="text-3xl font-bold text-gray-900">My Wishlist</h1>
                  <p className="text-gray-600 mt-2">
                    Save your favorite medicines for later
                  </p>
                  {user?.name && (
                    <p className="text-sm text-pink-600 mt-1">
                      Hello, {user.name.split(' ')[0]}! You have {wishlist.length} items in your wishlist
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={moveAllToCart}
                disabled={wishlistStats.inStock === 0}
                className="px-4 py-2 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-lg hover:from-pink-600 hover:to-red-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
              >
                <FaShoppingCart className="mr-2" />
                Add All to Cart ({wishlistStats.inStock})
              </button>
              <Link
                to="/products"
                className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors flex items-center"
              >
                <FaShoppingCart className="mr-2" />
                Continue Shopping
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {[
            { 
              label: 'Total Items', 
              value: wishlistStats.totalItems, 
              color: 'from-pink-500 to-red-500', 
              icon: <FaHeart />,
              description: 'Items in wishlist'
            },
            { 
              label: 'In Stock', 
              value: wishlistStats.inStock, 
              color: 'from-green-500 to-emerald-500', 
              icon: <FaCheckCircle />,
              description: 'Available now'
            },
            { 
              label: 'On Sale', 
              value: wishlistStats.onSale, 
              color: 'from-orange-500 to-yellow-500', 
              icon: <FaTag />,
              description: 'Discount available'
            },
            { 
              label: 'Total Savings', 
              value: `₹${wishlistStats.totalSavings.toLocaleString('en-IN')}`, 
              color: 'from-purple-500 to-indigo-500', 
              icon: <FaPercentage />,
              description: 'Potential savings'
            }
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-2">{stat.value}</p>
                  <p className="text-xs text-gray-500 mt-1">{stat.description}</p>
                </div>
                <div className={`bg-gradient-to-r ${stat.color} w-12 h-12 rounded-lg flex items-center justify-center`}>
                  <div className="text-white text-xl">
                    {stat.icon}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Search and Sort */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search your wishlist by name, brand, or category..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-700 font-medium">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 bg-white"
              >
                <option value="recent">Most Recent</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name A-Z</option>
                <option value="rating">Highest Rated</option>
                <option value="savings">Highest Savings</option>
              </select>
            </div>
          </div>
        </div>

        {/* Wishlist Items */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {filteredWishlist.length === 0 ? (
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-12 text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-pink-100 to-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaHeart className="text-pink-400 text-3xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Your wishlist is empty</h3>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                  {searchTerm ? `No items found for "${searchTerm}"` : 'Save your favorite medicines here to buy them later or compare prices.'}
                </p>
                <Link
                  to="/products"
                  className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-lg font-semibold hover:from-pink-600 hover:to-red-600 transition-all"
                >
                  <FaShoppingCart className="mr-3" />
                  Browse Medicines
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <AnimatePresence>
                  {filteredWishlist.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow hover:scale-[1.02] transition-transform"
                    >
                      {/* Product Image */}
                      <div className="relative">
                        <div className="h-48 bg-gray-100 overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-contain p-4"
                            onError={(e) => {
                              e.target.onerror = null
                              e.target.src = 'https://via.placeholder.com/400x300?text=Medicine'
                            }}
                          />
                        </div>
                        
                        {/* Badges */}
                        <div className="absolute top-3 left-3 flex flex-col gap-2">
                          {!item.inStock && (
                            <span className="px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full">
                              Out of Stock
                            </span>
                          )}
                          {item.originalPrice > item.price && (
                            <span className="px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full">
                              Save {item.savings}%
                            </span>
                          )}
                          {item.prescriptionRequired && (
                            <span className="px-3 py-1 bg-blue-500 text-white text-xs font-bold rounded-full">
                              Prescription
                            </span>
                          )}
                          <span className="px-3 py-1 bg-pink-500 text-white text-xs font-bold rounded-full">
                            {item.category}
                          </span>
                        </div>

                        {/* Remove Button */}
                        <button
                          onClick={() => removeFromWishlist(item.id)}
                          className="absolute top-3 right-3 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors shadow-md"
                          title="Remove from wishlist"
                        >
                          <FaTrash />
                        </button>
                      </div>

                      {/* Product Info */}
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-3">
                          <div className="flex-1">
                            <span className="text-xs text-gray-500 uppercase font-medium">{item.brand}</span>
                            <h3 className="font-bold text-gray-900 text-lg mt-1 line-clamp-2">{item.name}</h3>
                            <p className="text-sm text-gray-500 mt-1">{item.subCategory}</p>
                          </div>
                          <div className="flex flex-col items-end">
                            <div className="flex items-center bg-yellow-50 px-2 py-1 rounded">
                              <FaStar className="text-yellow-400" />
                              <span className="ml-1 font-medium text-gray-900">{item.rating}</span>
                              <span className="ml-1 text-gray-500 text-sm">({item.reviews})</span>
                            </div>
                            <span className="text-xs text-gray-500 mt-2">
                              Added {new Date(item.addedDate).toLocaleDateString('en-IN')}
                            </span>
                          </div>
                        </div>

                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{item.description}</p>

                        {/* Price */}
                        <div className="flex items-center justify-between mb-6">
                          <div>
                            <span className="text-2xl font-bold text-gray-900">₹{item.price}</span>
                            {item.originalPrice > item.price && (
                              <div className="flex items-center mt-1">
                                <span className="text-sm text-gray-500 line-through">₹{item.originalPrice}</span>
                                <span className="ml-2 text-sm font-medium text-green-600">
                                  Save ₹{item.originalPrice - item.price}
                                </span>
                              </div>
                            )}
                          </div>
                          <div className="text-right">
                            {item.prescriptionRequired && (
                              <div className="flex items-center text-blue-600 text-sm">
                                <FaPrescriptionBottleAlt className="mr-1" />
                                <span>Prescription Required</span>
                              </div>
                            )}
                            <div className={`text-sm font-medium mt-1 ${item.inStock ? 'text-green-600' : 'text-red-600'}`}>
                              {item.inStock ? 'In Stock' : 'Out of Stock'}
                            </div>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3">
                          <button
                            onClick={() => addToCart(item)}
                            disabled={!item.inStock}
                            className={`flex-1 py-3 rounded-lg font-medium flex items-center justify-center transition-all ${
                              item.inStock
                                ? 'bg-gradient-to-r from-pink-500 to-red-500 text-white hover:from-pink-600 hover:to-red-600'
                                : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                            }`}
                          >
                            <FaShoppingCart className="mr-2" />
                            {item.inStock ? 'Add to Cart' : 'Out of Stock'}
                          </button>
                          <Link
                            to={`/product/${item.id}`}
                            className="px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center"
                            title="View product details"
                          >
                            <FaEye />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recommendations */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 text-lg mb-4 flex items-center">
                <FaBell className="mr-2 text-pink-500" />
                Price Drop Alerts
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Get notified when prices drop on your wishlist items.
              </p>
              <button className="w-full py-3 bg-gradient-to-r from-pink-50 to-red-50 border border-pink-200 text-pink-600 rounded-lg hover:bg-pink-100 transition-colors font-medium">
                Enable Price Alerts
              </button>
            </div>

            {/* Prescription Info */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 text-lg mb-4 flex items-center">
                <FaShieldAlt className="mr-2 text-blue-500" />
                Prescription Required
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                {wishlistStats.prescriptionRequired} of your wishlist items require a valid prescription.
              </p>
              <Link
                to="/upload-prescription"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                Upload Prescription
                <FaTruck className="ml-2" />
              </Link>
            </div>

            {/* Category Distribution */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 text-lg mb-4 flex items-center">
                <FaPills className="mr-2 text-purple-500" />
                Categories
              </h3>
              <div className="space-y-3">
                {Object.entries(categoryDistribution).map(([category, count]) => (
                  <div key={category} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                    <span className="text-gray-600">{category}</span>
                    <span className="font-bold text-gray-900">{count} items</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 text-lg mb-4">Wishlist Stats</h3>
              <div className="space-y-4">
                {[
                  { label: 'Total Items', value: wishlistStats.totalItems },
                  { label: 'In Stock', value: wishlistStats.inStock },
                  { label: 'Prescription Required', value: wishlistStats.prescriptionRequired },
                  { label: 'Average Price', value: `₹${Math.round(wishlistStats.totalValue / wishlistStats.totalItems)}` },
                  { label: 'Average Savings', value: `${wishlistStats.averageSavings}%` },
                  { label: 'Total Value', value: `₹${wishlistStats.totalValue.toLocaleString('en-IN')}` }
                ].map((stat, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                    <span className="text-gray-600">{stat.label}</span>
                    <span className="font-bold text-gray-900">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Compare Products */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 text-lg mb-4">Compare Products</h3>
              <p className="text-sm text-gray-600 mb-4">
                Select 2-4 items to compare prices and features.
              </p>
              <button className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all font-medium">
                Compare Selected
              </button>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 text-lg mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button 
                  onClick={() => navigate('/my-orders')}
                  className="w-full py-2 bg-white border border-green-200 text-green-700 rounded-lg hover:bg-green-50 transition-colors text-sm font-medium"
                >
                  View Order History
                </button>
                <button 
                  onClick={() => navigate('/products?category=sale')}
                  className="w-full py-2 bg-white border border-green-200 text-green-700 rounded-lg hover:bg-green-50 transition-colors text-sm font-medium"
                >
                  View Sale Items
                </button>
                <button 
                  onClick={() => setWishlist([])}
                  className="w-full py-2 bg-white border border-red-200 text-red-700 rounded-lg hover:bg-red-50 transition-colors text-sm font-medium"
                >
                  Clear Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">
            Your wishlist is saved across all your devices when you're signed in.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/my-orders"
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all flex items-center"
            >
              <FaBox className="mr-2" />
              View My Orders
            </Link>
            <Link
              to="/account-settings"
              className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all flex items-center"
            >
              <FaMedkit className="mr-2" />
              Account Settings
            </Link>
            <Link
              to="/products"
              className="px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center"
            >
              <FaShoppingCart className="mr-2" />
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyWishlist