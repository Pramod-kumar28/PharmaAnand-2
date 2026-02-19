import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'

// Import your JSON data
import products from '../data/products.js'

// React Icons
import {
  FaShoppingBag,
  FaTruck,
  FaCheckCircle,
  FaTimesCircle,
  FaClock,
  FaBoxOpen,
  FaFilter,
  FaSearch,
  FaCalendarAlt,
  FaRupeeSign,
  FaEye,
  FaDownload,
  FaRedo,
  FaStar,
  FaMapMarkerAlt,
  FaPhone,
  FaUser,
  FaExclamationTriangle,
  FaSync,
  FaShoppingCart,
  FaAngleDown,
  FaAngleUp,
  FaList,
  FaTable,
  FaMobileAlt,
  FaDesktop,
  FaChevronRight,
  FaTag,
  FaPercent,
  FaArrowLeft,
  FaBars,
  FaEllipsisH,
  FaInfoCircle
} from 'react-icons/fa'

const MyOrders = () => {
  const navigate = useNavigate()
  const { user, isAuthenticated } = useSelector(state => state.auth)
  const [activeTab, setActiveTab] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [expandedOrder, setExpandedOrder] = useState(null)
  const [viewMode, setViewMode] = useState('grid') // 'grid' or 'list'
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  // Check authentication
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login')
    }
  }, [isAuthenticated, navigate])

  // Generate mock orders from products data
  useEffect(() => {
    const generateMockOrders = () => {
      try {
        setLoading(true)
        
        // Get all products from the JSON data
        const allProducts = []
        
        // Flatten the products object to get all products
        Object.keys(products).forEach(category => {
          if (Array.isArray(products[category])) {
            // For simple arrays (baby, covid, oral, skincare)
            allProducts.push(...products[category])
          } else if (typeof products[category] === 'object') {
            // For nested objects (diabetes, cardiology, liver, stomach)
            Object.keys(products[category]).forEach(subCategory => {
              if (Array.isArray(products[category][subCategory])) {
                allProducts.push(...products[category][subCategory])
              }
            })
          }
        })

        // Generate orders from the products
        const mockOrders = [
          {
            id: 'ORD-2024-001',
            date: '2024-01-15',
            total: 1249,
            status: 'delivered',
            items: allProducts.slice(0, 2).map(product => ({
              name: product.name,
              quantity: Math.floor(Math.random() * 3) + 1,
              price: product.priceNumeric,
              image: product.image,
              brand: product.brand,
              category: product.category,
              savings: Math.floor(Math.random() * 30) + 10 // Random savings 10-40%
            })),
            deliveryAddress: user?.address || '123 Main Street, Mumbai - 400001',
            paymentMethod: 'Credit Card',
            trackingNumber: 'TRK123456789',
            estimatedDelivery: '2024-01-17',
            deliveredOn: '2024-01-17',
            prescriptionRequired: false
          },
          {
            id: 'ORD-2024-002',
            date: '2024-01-10',
            total: 569,
            status: 'processing',
            items: allProducts.slice(2, 3).map(product => ({
              name: product.name,
              quantity: Math.floor(Math.random() * 3) + 1,
              price: product.priceNumeric,
              image: product.image,
              brand: product.brand,
              category: product.category,
              savings: Math.floor(Math.random() * 30) + 10
            })),
            deliveryAddress: user?.address || '456 Park Avenue, Delhi - 110001',
            paymentMethod: 'UPI',
            trackingNumber: 'TRK987654321',
            estimatedDelivery: '2024-01-12',
            prescriptionRequired: true
          },
          {
            id: 'ORD-2024-003',
            date: '2024-01-05',
            total: 2899,
            status: 'shipped',
            items: allProducts.slice(3, 5).map(product => ({
              name: product.name,
              quantity: Math.floor(Math.random() * 3) + 1,
              price: product.priceNumeric,
              image: product.image,
              brand: product.brand,
              category: product.category,
              savings: Math.floor(Math.random() * 30) + 10
            })),
            deliveryAddress: user?.address || '123 Main Street, Mumbai - 400001',
            paymentMethod: 'Debit Card',
            trackingNumber: 'TRK456789123',
            estimatedDelivery: '2024-01-08',
            prescriptionRequired: false
          },
          {
            id: 'ORD-2023-012',
            date: '2023-12-20',
            total: 789,
            status: 'cancelled',
            items: allProducts.slice(5, 6).map(product => ({
              name: product.name,
              quantity: Math.floor(Math.random() * 3) + 1,
              price: product.priceNumeric,
              image: product.image,
              brand: product.brand,
              category: product.category,
              savings: Math.floor(Math.random() * 30) + 10
            })),
            deliveryAddress: user?.address || '123 Main Street, Mumbai - 400001',
            paymentMethod: 'Credit Card',
            trackingNumber: 'TRK321654987',
            cancelledOn: '2023-12-21',
            prescriptionRequired: false
          },
          {
            id: 'ORD-2024-004',
            date: '2024-01-18',
            total: 1299,
            status: 'delivered',
            items: allProducts.slice(6, 8).map(product => ({
              name: product.name,
              quantity: Math.floor(Math.random() * 3) + 1,
              price: product.priceNumeric,
              image: product.image,
              brand: product.brand,
              category: product.category,
              savings: Math.floor(Math.random() * 30) + 10
            })),
            deliveryAddress: user?.address || '789 Gandhi Road, Bangalore - 560001',
            paymentMethod: 'Net Banking',
            trackingNumber: 'TRK555444333',
            estimatedDelivery: '2024-01-20',
            deliveredOn: '2024-01-20',
            prescriptionRequired: true
          },
          {
            id: 'ORD-2024-005',
            date: '2024-01-20',
            total: 845,
            status: 'shipped',
            items: allProducts.slice(8, 10).map(product => ({
              name: product.name,
              quantity: Math.floor(Math.random() * 3) + 1,
              price: product.priceNumeric,
              image: product.image,
              brand: product.brand,
              category: product.category,
              savings: Math.floor(Math.random() * 30) + 10
            })),
            deliveryAddress: user?.address || '321 Lake View, Pune - 411001',
            paymentMethod: 'Wallet',
            trackingNumber: 'TRK777888999',
            estimatedDelivery: '2024-01-23',
            prescriptionRequired: false
          }
        ]

        // Calculate totals and add savings
        mockOrders.forEach(order => {
          order.total = order.items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
          order.totalSavings = order.items.reduce((sum, item) => {
            const originalPrice = item.price / (1 - (item.savings / 100))
            return sum + ((originalPrice - item.price) * item.quantity)
          }, 0)
        })

        setOrders(mockOrders)
        setLoading(false)
      } catch (err) {
        console.error('Error generating orders:', err)
        setError('Failed to load orders. Please try again.')
        setLoading(false)
      }
    }

    generateMockOrders()
  }, [user])

  // Filter orders based on active tab
  const filteredOrders = orders.filter(order => {
    if (activeTab === 'all') return true
    return order.status === activeTab
  }).filter(order => {
    if (!searchTerm) return true
    return order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
           order.items.some(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                  item.brand.toLowerCase().includes(searchTerm.toLowerCase()))
  })

  // Status badge component - responsive
  const StatusBadge = ({ status }) => {
    const statusConfig = {
      delivered: { color: 'bg-green-100 text-green-800', icon: <FaCheckCircle />, text: 'Delivered', shortText: 'Delivered' },
      shipped: { color: 'bg-blue-100 text-blue-800', icon: <FaTruck />, text: 'Shipped', shortText: 'Shipped' },
      processing: { color: 'bg-yellow-100 text-yellow-800', icon: <FaClock />, text: 'Processing', shortText: 'Processing' },
      cancelled: { color: 'bg-red-100 text-red-800', icon: <FaTimesCircle />, text: 'Cancelled', shortText: 'Cancelled' }
    }

    const config = statusConfig[status] || { color: 'bg-gray-100 text-gray-800', icon: <FaBoxOpen />, text: status, shortText: status }

    return (
      <>
        {/* Desktop version */}
        <span className={`hidden sm:inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${config.color}`}>
          {config.icon}
          <span className="ml-2">{config.text}</span>
        </span>
        {/* Mobile version */}
        <span className={`sm:hidden inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${config.color}`}>
          {config.icon}
          <span className="ml-1">{config.shortText}</span>
        </span>
      </>
    )
  }

  // Toggle order expansion
  const toggleOrderExpansion = (orderId) => {
    setExpandedOrder(expandedOrder === orderId ? null : orderId)
  }

  // Handle order actions
  const handleReorder = (order) => {
    alert(`Added ${order.items.length} items to cart from order ${order.id}`)
  }

  const handleViewDetails = (order) => {
    navigate(`/order-details/${order.id}`)
  }

  const handleDownloadInvoice = (order) => {
    alert(`Downloading invoice for order ${order.id}`)
  }

  const handleRateReview = (order) => {
    navigate(`/review/${order.id}`)
  }

  // Stats cards - responsive values
  const orderStats = [
    { 
      label: 'Total Orders', 
      value: orders.length, 
      color: 'bg-blue-500', 
      icon: <FaShoppingBag />,
      tooltip: 'Total number of orders placed'
    },
    { 
      label: 'Delivered', 
      value: orders.filter(o => o.status === 'delivered').length, 
      color: 'bg-green-500', 
      icon: <FaCheckCircle />,
      tooltip: 'Orders successfully delivered'
    },
    { 
      label: 'Processing', 
      value: orders.filter(o => o.status === 'processing').length, 
      color: 'bg-yellow-500', 
      icon: <FaClock />,
      tooltip: 'Orders being processed'
    },
    { 
      label: 'Total Spent', 
      value: `₹${orders.reduce((sum, order) => sum + order.total, 0).toLocaleString('en-IN')}`, 
      color: 'bg-purple-500', 
      icon: <FaRupeeSign />,
      tooltip: 'Total amount spent on all orders'
    }
  ]

  // Calculate total savings
  const totalSavings = orders.reduce((sum, order) => sum + order.totalSavings, 0)

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 pt-16 sm:pt-20 pb-12 flex items-center justify-center px-4">
        <div className="text-center max-w-sm w-full">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <FaSync className="animate-spin text-4xl sm:text-5xl text-blue-600" />
              <div className="absolute inset-0 rounded-full border-4 border-blue-200 animate-ping"></div>
            </div>
          </div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Loading your orders</h3>
          <p className="text-gray-600 text-sm sm:text-base">Please wait while we fetch your order history</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 pt-10 sm:pt-10 pb-12 flex items-center justify-center px-4">
        <div className="text-center max-w-md w-full bg-white rounded-2xl shadow-lg p-6 sm:p-8">
          <FaExclamationTriangle className="text-4xl sm:text-5xl text-red-500 mx-auto mb-4" />
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Error Loading Orders</h3>
          <p className="text-gray-600 text-sm sm:text-base mb-6">{error}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => window.location.reload()}
              className="px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base font-medium"
            >
              Retry
            </button>
            <Link
              to="/"
              className="px-4 sm:px-6 py-2 sm:py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm sm:text-base font-medium flex items-center justify-center"
            >
              <FaArrowLeft className="mr-2" />
              Go Home
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-5 sm:pt-5 pb-8 sm:pb-12">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 sm:mb-8"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex-1 min-w-0">
              <div className="flex items-center mb-2">
                <button
                  onClick={() => navigate(-1)}
                  className="mr-3 sm:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  aria-label="Go back"
                >
                  <FaArrowLeft className="text-gray-600" />
                </button>
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 truncate">My Orders</h1>
                  <p className="text-gray-600 text-sm sm:text-base mt-1">
                    Track, manage, and review your medicine orders
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2 mt-2">
                <span className="text-xs sm:text-sm text-gray-500">
                  {user?.name ? `Welcome back, ${user.name.split(' ')[0]}!` : ''}
                </span>
                {totalSavings > 0 && (
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full flex items-center">
                    <FaTag className="mr-1 text-xs" />
                    Saved: ₹{Math.round(totalSavings)}
                  </span>
                )}
              </div>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-3">
              <Link
                to="/products"
                className="px-3 sm:px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors flex items-center text-sm sm:text-base whitespace-nowrap"
              >
                <FaShoppingCart className="mr-2 hidden sm:block" />
                <span>Shop</span>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8"
        >
          {orderStats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6 hover:shadow-md transition-shadow"
              title={stat.tooltip}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1 min-w-0">
                  <p className="text-xs sm:text-sm text-gray-600 truncate">{stat.label}</p>
                  <p className="text-xl sm:text-2xl font-bold text-gray-900 mt-1 sm:mt-2 truncate">{stat.value}</p>
                </div>
                <div className={`${stat.color} w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center flex-shrink-0 ml-3`}>
                  <div className="text-white text-lg sm:text-xl">
                    {stat.icon}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Filter and Search Bar */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 p-4 sm:p-6 mb-6 sm:mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            {/* Tabs - Scrollable on mobile */}
            <div className="relative">
              <div className="flex overflow-x-auto pb-2 -mx-1 sm:mx-0 scrollbar-hide">
                <div className="flex space-x-2 px-1 sm:px-0">
                  {['all', 'processing', 'shipped', 'delivered', 'cancelled'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-3 sm:px-4 py-2 rounded-lg font-medium capitalize transition-colors flex items-center whitespace-nowrap flex-shrink-0 ${
                        activeTab === tab
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {tab === 'all' ? (
                        <>
                          <FaList className="mr-1 sm:mr-2" />
                          <span className="hidden sm:inline">All</span>
                          <span className="sm:hidden">All</span>
                        </>
                      ) : (
                        <>
                          {tab === 'processing' && <FaClock className="mr-1 sm:mr-2" />}
                          {tab === 'shipped' && <FaTruck className="mr-1 sm:mr-2" />}
                          {tab === 'delivered' && <FaCheckCircle className="mr-1 sm:mr-2" />}
                          {tab === 'cancelled' && <FaTimesCircle className="mr-1 sm:mr-2" />}
                          <span className="capitalize">{tab}</span>
                        </>
                      )}
                      {tab !== 'all' && (
                        <span className="ml-2 bg-white/20 px-1.5 sm:px-2 py-0.5 rounded text-xs">
                          {orders.filter(o => o.status === tab).length}
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Search and View Controls */}
            <div className="flex flex-col sm:flex-row gap-3">
              {/* View Mode Toggle */}
              <div className="flex items-center bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-colors ${viewMode === 'grid' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'}`}
                  title="Grid View"
                >
                  <FaDesktop className="text-gray-700" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-colors ${viewMode === 'list' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'}`}
                  title="List View"
                >
                  <FaList className="text-gray-700" />
                </button>
              </div>

              {/* Search */}
              <div className="relative flex-1 min-w-0 sm:min-w-[200px]">
                <input
                  type="text"
                  placeholder="Search orders..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                />
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Filter Button */}
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="lg:hidden w-full mb-4 px-4 py-3 bg-white border border-gray-300 rounded-lg flex items-center justify-between"
        >
          <span className="font-medium text-gray-700">Filter Options</span>
          {isFilterOpen ? <FaAngleUp /> : <FaAngleDown />}
        </button>

        {/* Orders Content */}
        {filteredOrders.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 sm:p-12 text-center">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <FaShoppingBag className="text-gray-400 text-2xl sm:text-3xl" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">No orders found</h3>
            <p className="text-gray-600 text-sm sm:text-base mb-6 max-w-md mx-auto">
              {activeTab === 'all' ? "You haven't placed any orders yet." : `No ${activeTab} orders found.`}
            </p>
            <Link
              to="/products"
              className="inline-flex items-center px-6 sm:px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm sm:text-base"
            >
              <FaShoppingBag className="mr-2" />
              Browse Medicines
            </Link>
          </div>
        ) : viewMode === 'grid' ? (
          // Grid View
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {filteredOrders.map((order) => (
              <motion.div
                key={order.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow"
              >
                {/* Order Header */}
                <div className="bg-gray-50 px-4 sm:px-6 py-4 border-b border-gray-200">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center flex-wrap gap-2">
                        <h3 className="font-bold text-gray-900 text-lg truncate">Order #{order.id}</h3>
                        <StatusBadge status={order.status} />
                      </div>
                      <p className="text-sm text-gray-600 mt-1 flex items-center">
                        <FaCalendarAlt className="mr-2 flex-shrink-0" />
                        <span className="truncate">Placed {new Date(order.date).toLocaleDateString('en-IN')}</span>
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xl sm:text-2xl font-bold text-gray-900">₹{order.total}</p>
                      <p className="text-xs sm:text-sm text-gray-600">Total</p>
                    </div>
                  </div>
                </div>

                {/* Order Items */}
                <div className="p-4 sm:p-6">
                  <div className="space-y-3">
                    {order.items.slice(0, 2).map((item, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white border border-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-contain p-2"
                            onError={(e) => {
                              e.target.onerror = null
                              e.target.src = 'https://via.placeholder.com/80x80?text=Medicine'
                            }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-gray-900 text-sm sm:text-base truncate">{item.name}</h4>
                          <p className="text-xs sm:text-sm text-gray-600">Qty: {item.quantity} • ₹{item.price} each</p>
                          {item.savings > 0 && (
                            <p className="text-xs text-green-600 flex items-center mt-1">
                              <FaPercent className="mr-1" />
                              Save {item.savings}%
                            </p>
                          )}
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-gray-900">₹{item.price * item.quantity}</p>
                        </div>
                      </div>
                    ))}
                    
                    {/* Show more items indicator */}
                    {order.items.length > 2 && (
                      <div className="text-center">
                        <button
                          onClick={() => toggleOrderExpansion(order.id)}
                          className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center justify-center mx-auto"
                        >
                          {expandedOrder === order.id ? 'Show Less' : `+${order.items.length - 2} more items`}
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Expanded Items */}
                  {expandedOrder === order.id && order.items.length > 2 && (
                    <div className="mt-4 space-y-3 border-t pt-4">
                      {order.items.slice(2).map((item, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                          <div className="w-12 h-12 bg-white border border-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-contain p-1"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-gray-900 text-sm truncate">{item.name}</h4>
                            <p className="text-xs text-gray-600">Qty: {item.quantity}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-gray-900 text-sm">₹{item.price * item.quantity}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Order Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                    <div className="space-y-2">
                      <h4 className="font-medium text-gray-900 text-sm flex items-center">
                        <FaMapMarkerAlt className="mr-2 text-gray-400 text-sm" />
                        <span>Delivery</span>
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 line-clamp-2">{order.deliveryAddress}</p>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-medium text-gray-900 text-sm flex items-center">
                        <FaRupeeSign className="mr-2 text-gray-400 text-sm" />
                        <span>Payment</span>
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600">{order.paymentMethod}</p>
                      {order.trackingNumber && (
                        <p className="text-xs text-blue-600 font-medium truncate">
                          Track: {order.trackingNumber}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-2 sm:gap-3 mt-6 pt-6 border-t border-gray-200">
                    <button 
                      onClick={() => handleViewDetails(order)}
                      className="flex-1 min-w-[120px] px-3 sm:px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium flex items-center justify-center"
                    >
                      <FaEye className="mr-2" />
                      <span className="hidden sm:inline">Details</span>
                      <span className="sm:hidden">View</span>
                    </button>
                    
                    {order.status === 'delivered' && (
                      <button 
                        onClick={() => handleReorder(order)}
                        className="flex-1 min-w-[120px] px-3 sm:px-4 py-2.5 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors text-sm font-medium flex items-center justify-center"
                      >
                        <FaRedo className="mr-2" />
                        Reorder
                      </button>
                    )}
                    
                    <button 
                      onClick={() => handleDownloadInvoice(order)}
                      className="flex-1 min-w-[120px] px-3 sm:px-4 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium flex items-center justify-center"
                    >
                      <FaDownload className="mr-2" />
                      <span className="hidden sm:inline">Invoice</span>
                      <span className="sm:hidden">PDF</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          // List View
          <div className="space-y-4 sm:space-y-6">
            {filteredOrders.map((order) => (
              <motion.div
                key={order.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 overflow-hidden"
              >
                <div className="p-4 sm:p-6">
                  {/* Compact Header for List View */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                    <div className="flex-1">
                      <div className="flex items-center flex-wrap gap-2 mb-2">
                        <h3 className="font-bold text-gray-900 text-lg">Order #{order.id}</h3>
                        <StatusBadge status={order.status} />
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <span className="flex items-center">
                          <FaCalendarAlt className="mr-2" />
                          {new Date(order.date).toLocaleDateString('en-IN')}
                        </span>
                        <span className="flex items-center">
                          <FaRupeeSign className="mr-2" />
                          ₹{order.total}
                        </span>
                        <span className="flex items-center">
                          <FaTruck className="mr-2" />
                          {order.paymentMethod}
                        </span>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => handleViewDetails(order)}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                        title="View Details"
                      >
                        <FaEye />
                      </button>
                      <button 
                        onClick={() => handleDownloadInvoice(order)}
                        className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg"
                        title="Download Invoice"
                      >
                        <FaDownload />
                      </button>
                    </div>
                  </div>

                  {/* Items Summary */}
                  <div className="border-t pt-4">
                    <div className="flex overflow-x-auto pb-2 gap-3">
                      {order.items.map((item, index) => (
                        <div key={index} className="flex-shrink-0 w-24">
                          <div className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden mb-2">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-contain p-2"
                              onError={(e) => {
                                e.target.onerror = null
                                e.target.src = 'https://via.placeholder.com/80x80?text=Medicine'
                              }}
                            />
                          </div>
                          <p className="text-xs text-gray-900 font-medium truncate">{item.name}</p>
                          <p className="text-xs text-gray-600">Qty: {item.quantity}</p>
                          <p className="text-xs font-bold text-gray-900">₹{item.price * item.quantity}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Quick Links - Responsive */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <Link
            to="/products"
            className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-5 sm:p-6 hover:shadow-md transition-all hover:scale-[1.02] active:scale-95"
          >
            <div className="flex items-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <FaShoppingBag className="text-white text-lg sm:text-xl" />
              </div>
              <div className="ml-4">
                <h3 className="font-bold text-gray-900 text-sm sm:text-base">Shop Medicines</h3>
                <p className="text-gray-600 text-xs sm:text-sm mt-1">Browse latest healthcare products</p>
              </div>
              <FaChevronRight className="ml-auto text-gray-400" />
            </div>
          </Link>

          <Link
            to="/account-settings"
            className="bg-gradient-to-r from-green-50 to-green-100 border border-green-200 rounded-xl p-5 sm:p-6 hover:shadow-md transition-all hover:scale-[1.02] active:scale-95"
          >
            <div className="flex items-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <FaUser className="text-white text-lg sm:text-xl" />
              </div>
              <div className="ml-4">
                <h3 className="font-bold text-gray-900 text-sm sm:text-base">Account Settings</h3>
                <p className="text-gray-600 text-xs sm:text-sm mt-1">Update profile and preferences</p>
              </div>
              <FaChevronRight className="ml-auto text-gray-400" />
            </div>
          </Link>

          <Link
            to="/my-wishlist"
            className="bg-gradient-to-r from-purple-50 to-purple-100 border border-purple-200 rounded-xl p-5 sm:p-6 hover:shadow-md transition-all hover:scale-[1.02] active:scale-95"
          >
            <div className="flex items-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <FaStar className="text-white text-lg sm:text-xl" />
              </div>
              <div className="ml-4">
                <h3 className="font-bold text-gray-900 text-sm sm:text-base">My Wishlist</h3>
                <p className="text-gray-600 text-xs sm:text-sm mt-1">View saved medicines</p>
              </div>
              <FaChevronRight className="ml-auto text-gray-400" />
            </div>
          </Link>
        </div>

        {/* Order Summary - Responsive */}
        {orders.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-xl sm:rounded-2xl p-5 sm:p-6"
          >
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
              <FaInfoCircle className="mr-2 text-blue-500" />
              <span>Order Summary</span>
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              <div className="text-center bg-white/50 rounded-lg p-3 sm:p-4">
                <p className="text-xs sm:text-sm text-gray-600 mb-1">Total Orders</p>
                <p className="text-xl sm:text-2xl font-bold text-gray-900">{orders.length}</p>
              </div>
              <div className="text-center bg-white/50 rounded-lg p-3 sm:p-4">
                <p className="text-xs sm:text-sm text-gray-600 mb-1">Delivered</p>
                <p className="text-xl sm:text-2xl font-bold text-green-600">{orders.filter(o => o.status === 'delivered').length}</p>
              </div>
              <div className="text-center bg-white/50 rounded-lg p-3 sm:p-4">
                <p className="text-xs sm:text-sm text-gray-600 mb-1">Total Spent</p>
                <p className="text-xl sm:text-2xl font-bold text-gray-900">₹{orders.reduce((sum, order) => sum + order.total, 0)}</p>
              </div>
              <div className="text-center bg-white/50 rounded-lg p-3 sm:p-4">
                <p className="text-xs sm:text-sm text-gray-600 mb-1">Savings</p>
                <p className="text-xl sm:text-2xl font-bold text-green-600">₹{Math.round(totalSavings)}</p>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 px-4 flex justify-around items-center shadow-lg z-10">
        <Link
          to="/products"
          className="flex flex-col items-center text-gray-600 hover:text-blue-600 transition-colors"
        >
          <FaShoppingCart className="text-xl mb-1" />
          <span className="text-xs">Shop</span>
        </Link>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex flex-col items-center text-blue-600"
        >
          <FaShoppingBag className="text-xl mb-1" />
          <span className="text-xs">Orders</span>
        </button>
        <Link
          to="/account-settings"
          className="flex flex-col items-center text-gray-600 hover:text-green-600 transition-colors"
        >
          <FaUser className="text-xl mb-1" />
          <span className="text-xs">Account</span>
        </Link>
      </div>

      {/* Responsive CSS */}
      <style jsx>{`
        /* Custom scrollbar for mobile tabs */
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        /* Touch-friendly buttons */
        @media (max-width: 640px) {
          button, a {
            min-height: 44px;
            min-width: 44px;
          }
          
          /* Prevent text selection on mobile */
          * {
            -webkit-tap-highlight-color: transparent;
          }
        }
        
        /* Smooth transitions */
        * {
          transition: all 0.2s ease-in-out;
        }
      `}</style>
    </div>
  )
}

export default MyOrders