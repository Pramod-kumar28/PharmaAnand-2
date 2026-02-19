import React, { useState, useRef, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../../features/auth/authSlice.js'

// React Icons
import {
  FaSearch,
  FaTimes,
  FaMapMarkerAlt,
  FaUser,
  FaShoppingCart,
  FaUserCircle,
  FaShoppingBag,
  FaSignOutAlt,
  FaHeart,
  FaBars,
  FaAngleLeft,
  FaTrashAlt,
  FaPlus,
  FaMinus,
  FaHome,
  FaPhone
} from 'react-icons/fa'

const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { isAuthenticated, user } = useSelector(state => state.auth)

  // State management
  const [searchQuery, setSearchQuery] = useState('')
  const [showUserMenu, setShowUserMenu] = useState(false)
  const [showCart, setShowCart] = useState(false)
  const [showLocationModal, setShowLocationModal] = useState(false)
  const [selectedLocation, setSelectedLocation] = useState('Mumbai - 400001')
  const [showMobileSearch, setShowMobileSearch] = useState(false)
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  // Refs for click outside detection
  const userMenuRef = useRef()
  const mobileMenuRef = useRef()
  const mobileSearchRef = useRef()

  // Mock cart data (replace with Redux)
  const cart = useSelector(state => state.cart?.items || [])
  const cartItemCount = cart.reduce((total, item) => total + (item.quantity || 0), 0)
  const cartTotal = cart.reduce((total, item) => total + (item.price * (item.quantity || 1)), 0)

  // Popular searches
  const popularSearches = [
    "Paracetamol", "Dolo 650", "Azithromycin", "Vitamin C", "Digene", "Cough Syrup"
  ]

  // Handle search
  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/products?search=${searchQuery}`)
      setSearchQuery('')
      setShowMobileSearch(false)
    }
  }

  // Clear search
  const clearSearch = () => {
    setSearchQuery('')
  }

  // Handle logout
  const handleLogout = () => {
    dispatch(logout())
    setShowUserMenu(false)
    setShowMobileMenu(false)
    navigate('/login')
  }

  // Handle quick search
  const handleQuickSearch = (term) => {
    setSearchQuery(term)
    navigate(`/products?search=${term}`)
    setShowMobileSearch(false)
  }

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setShowUserMenu(false)
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setShowMobileMenu(false)
      }
      if (mobileSearchRef.current && !mobileSearchRef.current.contains(event.target)) {
        setShowMobileSearch(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Handle body overflow when mobile menu/search is open
  useEffect(() => {
    if (showMobileMenu || showMobileSearch) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [showMobileMenu, showMobileSearch])

  // Toggle mobile search
  const toggleMobileSearch = () => {
    setShowMobileSearch(!showMobileSearch)
    setShowMobileMenu(false)
    setShowUserMenu(false)
  }

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu)
    setShowMobileSearch(false)
    setShowUserMenu(false)
  }

  // Close all mobile views
  const closeAllMobileViews = () => {
    setShowMobileSearch(false)
    setShowMobileMenu(false)
    setShowUserMenu(false)
  }

  // Handle mobile search submit
  const handleMobileSearchSubmit = (e) => {
    e.preventDefault()
    handleSearch(e)
  }

  // Handle account action
  const handleAccountAction = () => {
    if (isAuthenticated) {
      setShowUserMenu(!showUserMenu)
    } else {
      navigate('/login')
    }
  }

  return (
    <>
      <header className="fixed top-0 w-full bg-white shadow-sm z-40">
        {/* Main Header Bar */}
        <div className="w-full px-4 md:px-8 lg:px-12 py-3 h-20">
          <div className="flex items-center justify-between gap-1 h-full max-w-full">
            {/* Logo Section */}
            <Link to="/" onClick={closeAllMobileViews} className="flex-shrink-0 max-w-[60%]">
              <div className="flex items-center gap-2">
                {/* CEO Photo */}
                <div className="w-10 h-10 md:w-14 md:h-14 rounded-full overflow-hidden border-2 border-blue-200 flex-shrink-0 transform hover:scale-110 transition duration-300 shadow-sm">
                  <img
                    src="/CEO.jpg"
                    alt="CEO"
                    className="w-full h-full object-cover object-center scale-110"
                    onError={(e) => {
                      e.target.onerror = null
                      e.target.src = "https://ui-avatars.com/api/?name=A&background=3B82F6&color=fff"
                    }}
                  />
                </div>

                {/* Pharmacy Logo */}
                <div className="w-10 h-10 md:w-14 md:h-14 flex-shrink-0">
                  <img
                    src="/logo.jpeg"
                    alt="Logo"
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.target.onerror = null
                      e.target.src = "https://ui-avatars.com/api/?name=AP&background=3B82F6&color=fff"
                    }}
                  />
                </div>

                {/* Brand Text */}
                <div>
                  <h1 className="text-lg md:text-2xl font-bold text-gray-800 leading-tight whitespace-nowrap">
                    <span className="text-blue-600">DP </span> Pharma
                  </h1>
                  <p className="block text-xs text-gray-500 truncate">
                    Trusted Healthcare
                  </p>
                </div>
              </div>
            </Link>

            {/* Desktop Search Bar - Centered */}
            <div className="hidden md:flex flex-1 max-w-2xl mx-4">
              <form onSubmit={handleSearch} className="flex items-center w-full">
                <div className="relative w-full">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 text-sm bg-gray-50 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Search medicines, health products..."
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch(e)}
                  />
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <FaSearch className="w-4 h-4" />
                  </div>
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={clearSearch}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      <FaTimes className="w-4 h-4" />
                    </button>
                  )}
                </div>
                <button
                  type="submit"
                  className="ml-2 bg-blue-600 text-white px-4 py-2 rounded-full font-medium hover:bg-blue-700 transition whitespace-nowrap text-sm"
                >
                  Search
                </button>
              </form>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-1 flex-shrink-0">
              {/* Mobile Search Button */}
              <button
                onClick={toggleMobileSearch}
                className="md:hidden p-1 text-gray-600 hover:text-blue-600 transition rounded-lg hover:bg-blue-50"
                aria-label="Search"
              >
                <FaSearch className="w-5 h-5" />
              </button>

              {/* Location - Desktop only */}
              <button
                onClick={() => setShowLocationModal(true)}
                className="hidden md:flex items-center gap-2 text-gray-700 hover:text-blue-600 transition p-2 rounded-lg hover:bg-blue-50 flex-shrink-0"
              >
                <FaMapMarkerAlt />
                <div className="text-left min-w-0">
                  <p className="text-xs text-gray-500">Deliver to</p>
                  <p className="text-sm font-medium truncate max-w-[120px]">{selectedLocation}</p>
                </div>
              </button>

              {/* Login/User - Desktop */}
              <div className="hidden md:block relative" ref={userMenuRef}>
                <button
                  onClick={handleAccountAction}
                  className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition p-2 rounded-lg hover:bg-blue-50"
                >
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                    {isAuthenticated ? (
                      <span className="font-bold text-blue-600 text-sm">
                        {user?.name?.charAt(0) || 'U'}
                      </span>
                    ) : (
                      <FaUser className="text-gray-600" />
                    )}
                  </div>
                  <span className="text-sm font-medium truncate">
                    {isAuthenticated ? (user?.name?.split(' ')[0] || 'Account') : 'Account'}
                  </span>
                </button>

                {/* User Dropdown - Simple dropdown, NOT modal */}
                {showUserMenu && isAuthenticated && (
                  <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-200 z-50">
                    <div className="p-3 border-b border-gray-100">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold">
                            {user?.name?.charAt(0) || 'U'}
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-gray-800 text-sm truncate">{user?.name || 'User'}</h3>
                          <p className="text-xs text-gray-600 truncate">{user?.email || ''}</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-1">
                      <Link
                        to="/my-orders"
                        className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded-lg transition flex items-center gap-2 text-sm"
                        onClick={() => setShowUserMenu(false)}
                      >
                        <FaShoppingBag className="w-4 h-4 text-gray-500" />
                        My Orders
                      </Link>
                      <Link
                        to="/my-wishlist"
                        className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded-lg transition flex items-center gap-2 text-sm"
                        onClick={() => setShowUserMenu(false)}
                      >
                        <FaHeart className="w-4 h-4 text-red-500" />
                        My Wishlist
                      </Link>
                      <Link
                        to="/account-settings"
                        className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded-lg transition flex items-center gap-2 text-sm"
                        onClick={() => setShowUserMenu(false)}
                      >
                        <FaUserCircle className="w-4 h-4 text-gray-500" />
                        Account Settings
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-3 py-2 hover:bg-red-50 rounded-lg transition flex items-center gap-2 text-red-600 text-sm mt-1"
                      >
                        <FaSignOutAlt className="w-4 h-4" />
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Cart Button */}
              <button
                onClick={() => setShowCart(true)}
                className="hidden md:flex items-center gap-1 text-gray-700 hover:text-blue-600 transition p-2 rounded-lg hover:bg-blue-50 relative flex-shrink-0"
              >
                <FaShoppingCart className="w-5 h-5 text-gray-600" />
                <span className="text-sm font-medium">Cart</span>
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className="md:hidden p-1 text-gray-600 hover:text-blue-600 transition rounded-lg hover:bg-blue-50"
                aria-label="Menu"
              >
                {showMobileMenu ? (
                  <FaTimes className="w-5 h-5" />
                ) : (
                  <FaBars className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Search Overlay */}
      {showMobileSearch && (
        <div
          ref={mobileSearchRef}
          className="md:hidden fixed inset-0 bg-white z-[70] top-0 left-0 right-0 bottom-0 pt-16"
        >
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setShowMobileSearch(false)}
                className="p-2 text-gray-600 hover:bg-gray-100 rounded-full transition"
                aria-label="Close search"
              >
                <FaAngleLeft className="w-5 h-5" />
              </button>
              <form onSubmit={handleMobileSearchSubmit} className="flex-1 flex items-center">
                <div className="relative flex-1">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 text-sm bg-gray-50 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Search medicines..."
                    autoFocus
                  />
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <FaSearch className="w-4 h-4" />
                  </div>
                </div>
                <button
                  type="submit"
                  className="ml-2 bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition"
                  aria-label="Search"
                >
                  <FaSearch className="w-4 h-4" />
                </button>
              </form>
            </div>

            {/* Quick Search Suggestions */}
            <div className="mt-4">
              <h3 className="text-xs font-medium text-gray-600 mb-2">Popular Searches</h3>
              <div className="flex flex-wrap gap-2">
                {popularSearches.map((term, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickSearch(term)}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1.5 rounded-full text-xs transition"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu Overlay */}
      {showMobileMenu && (
        <div
          ref={mobileMenuRef}
          className="md:hidden fixed inset-0 bg-white z-[70] top-0 left-0 right-0 bottom-0"
        >
          <div className="h-full overflow-y-auto pb-20">
            <div>
              <div className="p-4 border-b border-gray-200">
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={toggleMobileMenu}
                    className="p-2 text-gray-600 hover:bg-gray-100 rounded-full transition"
                    aria-label="Close menu"
                  >
                    <FaAngleLeft className="w-5 h-5" />
                  </button>
                  <h2 className="text-lg font-semibold text-gray-800">Menu</h2>
                </div>
              </div>
            </div>
            {/* User Info Section */}
            <div className="p-4 border-b border-gray-200">
              {isAuthenticated ? (
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">
                      {user?.name?.charAt(0) || 'U'}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-800 truncate">{user?.name || 'User'}</h3>
                    <p className="text-sm text-gray-600 truncate">{user?.email || ''}</p>
                  </div>
                </div>
              ) : (
                <div className="text-center p-3">
                  <h3 className="font-semibold text-gray-800 text-lg mb-1">Welcome!</h3>
                  <p className="text-gray-600 text-sm mb-3">Login or create an account</p>
                  <div className="flex gap-2">
                    <Link
                      to="/login"
                      onClick={() => setShowMobileMenu(false)}
                      className="flex-1 bg-blue-600 text-white py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition text-sm text-center"
                    >
                      Login
                    </Link>
                    <Link
                      to="/register"
                      onClick={() => setShowMobileMenu(false)}
                      className="flex-1 border border-blue-600 text-blue-600 py-2.5 rounded-lg font-semibold hover:bg-blue-50 transition text-sm text-center"
                    >
                      Sign Up
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Menu Items */}
            <div className="p-2">
              <Link
                to="/"
                onClick={() => setShowMobileMenu(false)}
                className="w-full text-left px-4 py-3 hover:bg-gray-100 rounded-lg transition flex items-center gap-3 text-gray-700"
              >
                <FaHome className="w-5 h-5 text-gray-600" />
                Home
              </Link>
              <button
                onClick={() => {
                  setShowMobileMenu(false)
                  setShowCart(true)
                }}
                className="w-full text-left px-4 py-3 hover:bg-gray-100 rounded-lg transition flex items-center gap-3 text-gray-700"
              >
                <FaShoppingCart className="w-5 h-5 text-gray-600" />
                Cart
                {cartItemCount > 0 && (
                  <span className="ml-auto bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                    {cartItemCount}
                  </span>
                )}
              </button>

              <Link
                to="/about"
                onClick={() => setShowMobileMenu(false)}
                className="w-full text-left px-4 py-3 hover:bg-gray-100 rounded-lg transition flex items-center gap-3 text-gray-700"
              >
                <FaUser className="w-5 h-5 text-gray-600" />
                About
              </Link>

              <Link
                to="/contact"
                onClick={() => setShowMobileMenu(false)}
                className="w-full text-left px-4 py-3 hover:bg-gray-100 rounded-lg transition flex items-center gap-3 text-gray-700"
              >
                <FaPhone className="w-5 h-5 text-gray-600" />
                Contact
              </Link>

              {isAuthenticated && (
                <>
                  <Link
                    to="/my-orders"
                    onClick={() => setShowMobileMenu(false)}
                    className="w-full text-left px-4 py-3 hover:bg-gray-100 rounded-lg transition flex items-center gap-3 text-gray-700"
                  >
                    <FaShoppingBag className="w-5 h-5 text-gray-600" />
                    My Orders
                  </Link>

                  <Link
                    to="/my-wishlist"
                    onClick={() => setShowMobileMenu(false)}
                    className="w-full text-left px-4 py-3 hover:bg-gray-100 rounded-lg transition flex items-center gap-3 text-gray-700"
                  >
                    <FaHeart className="w-5 h-5 text-red-500" />
                    My Wishlist
                  </Link>

                  <Link
                    to="/account-settings"
                    onClick={() => setShowMobileMenu(false)}
                    className="w-full text-left px-4 py-3 hover:bg-gray-100 rounded-lg transition flex items-center gap-3 text-gray-700"
                  >
                    <FaUserCircle className="w-5 h-5 text-gray-600" />
                    My Profile
                  </Link>

                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-3 hover:bg-red-50 rounded-lg transition flex items-center gap-3 text-red-600 mt-2"
                  >
                    <FaSignOutAlt className="w-5 h-5" />
                    Logout
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Location Modal */}
      {showLocationModal && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-[80]"
            onClick={() => setShowLocationModal(false)}
          />
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white rounded-2xl shadow-2xl z-[81] p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-900">Select Location</h3>
              <button
                onClick={() => setShowLocationModal(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition"
              >
                <FaTimes />
              </button>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
                <FaMapMarkerAlt className="text-blue-600" />
                <div className="flex-1">
                  <p className="font-medium">Use Current Location</p>
                  <p className="text-sm text-gray-500">Detect your location automatically</p>
                </div>
              </div>

              <div className="p-3 border border-gray-300 rounded-lg">
                <label className="block text-sm font-medium text-gray-700 mb-2">Enter Pincode</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    maxLength="6"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter 6-digit pincode"
                  />
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700">
                    Apply
                  </button>
                </div>
              </div>

              <div className="border-t pt-4">
                <h4 className="font-medium text-gray-700 mb-2">Recent Locations</h4>
                <div className="space-y-2">
                  {['Mumbai - 400001', 'Delhi - 110001', 'Bangalore - 560001'].map((location, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => {
                        setSelectedLocation(location)
                        setShowLocationModal(false)
                      }}
                      className="w-full text-left p-2 hover:bg-gray-100 rounded"
                    >
                      {location}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Cart Sidebar */}
      {showCart && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-[80]"
            onClick={() => setShowCart(false)}
          />
          <div className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-[81] flex flex-col">
            <div className="flex items-center justify-between p-6 border-b">
              <h3 className="text-xl font-bold text-gray-800">Your Cart</h3>
              <button
                onClick={() => setShowCart(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition"
              >
                <FaTimes />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {cart.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">
                    <FaShoppingCart className="text-gray-300 mx-auto" />
                  </div>
                  <h4 className="text-gray-600 mb-2">Your cart is empty</h4>
                  <p className="text-gray-500 text-sm">Add some medicines to get started</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-center gap-4 p-4 border rounded-lg">
                      <img
                        src={item.image || item.img}
                        alt={item.name}
                        className="w-16 h-16 object-contain rounded-lg bg-gray-50"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-800 text-sm line-clamp-2">{item.name}</h4>
                        <p className="text-green-600 font-bold">₹{item.price}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition"
                          >
                            <FaMinus className="text-xs" />
                          </button>
                          <span className="w-8 text-center">1</span>
                          <button
                            className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition"
                          >
                            <FaPlus className="text-xs" />
                          </button>
                        </div>
                      </div>
                      <button
                        className="p-2 text-red-500 hover:bg-red-50 rounded-full transition"
                      >
                        <FaTrashAlt />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div className="border-t p-6 space-y-4">
                <div className="flex justify-between items-center text-lg font-semibold">
                  <span>Total:</span>
                  <span>₹{cartTotal}</span>
                </div>
                <button
                  onClick={() => {
                    setShowCart(false)
                    navigate('/cart')
                  }}
                  className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  View Cart
                </button>
                <button
                  onClick={() => setShowCart(false)}
                  className="w-full border border-gray-300 text-gray-700 py-4 rounded-lg font-semibold hover:bg-gray-50 transition"
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </>
  )
}

export default Header