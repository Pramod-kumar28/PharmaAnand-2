import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { motion, AnimatePresence } from 'framer-motion'
import { updateProfile } from '../features/auth/authSlice'

// React Icons
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLock,
  FaShieldAlt,
  FaBell,
  FaCreditCard,
  FaHistory,
  FaTrash,
  FaCamera,
  FaSave,
  FaEdit,
  FaCheckCircle,
  FaTimesCircle,
  FaSpinner,
  FaExclamationTriangle,
  FaHeart,
  FaShoppingBag,
  FaSignOutAlt,
  FaBars,
  FaTimes,
  FaMobileAlt,
  FaTabletAlt,
  FaDesktop
} from 'react-icons/fa'

const AccountSettings = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user, isAuthenticated, loading } = useSelector(state => state.auth)
  
  const [activeTab, setActiveTab] = useState('profile')
  const [isEditing, setIsEditing] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: ''
  })
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  // Track window width for responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
      // Auto-close mobile menu on larger screens
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false)
      }
    }
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Check authentication
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login')
    }
  }, [isAuthenticated, navigate])

  // Load user data
  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || '',
        email: user.email || '',
        phone: user.phone || '',
        address: user.address || '',
        city: user.city || '',
        state: user.state || '',
        pincode: user.pincode || ''
      })
    }
  }, [user])

  // Handle form changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  // Handle save profile
  const handleSaveProfile = async () => {
    try {
      await dispatch(updateProfile(formData)).unwrap()
      setSuccessMessage('Profile updated successfully!')
      setIsEditing(false)
      setTimeout(() => setSuccessMessage(''), 3000)
    } catch (error) {
      setErrorMessage('Failed to update profile. Please try again.')
      setTimeout(() => setErrorMessage(''), 3000)
    }
  }

  // Tabs configuration
  const tabs = [
    { id: 'profile', label: 'Profile', icon: <FaUser /> },
    { id: 'security', label: 'Security', icon: <FaLock /> },
    { id: 'notifications', label: 'Notifications', icon: <FaBell /> },
    { id: 'payment', label: 'Payment Methods', icon: <FaCreditCard /> },
    { id: 'privacy', label: 'Privacy', icon: <FaShieldAlt /> },
    { id: 'history', label: 'Activity History', icon: <FaHistory /> }
  ]

  // Responsive breakpoints
  const isMobile = windowWidth < 768
  const isTablet = windowWidth >= 768 && windowWidth < 1024
  const isDesktop = windowWidth >= 1024

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pt-5 md:pt-5 pb-8 md:pb-12 px-3 sm:px-4">
      <div className="max-w-7xl mx-auto">
        {/* Mobile Menu Toggle */}
        {!isDesktop && (
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="fixed top-4 left-4 z-50 w-12 h-12 bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center lg:hidden"
          >
            {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        )}

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 md:mb-8 px-0 md:px-4"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-4">
            <div className="mt-4 md:mt-0 ml-0 md:ml-14 lg:ml-0">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Account Settings</h1>
              <p className="text-gray-600 mt-1 md:mt-2 text-sm sm:text-base">
                Manage your profile, security, and preferences
              </p>
            </div>
            <div className="flex items-center space-x-2 md:space-x-4">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs sm:text-sm font-medium">
                {user?.role === 'admin' ? 'Administrator' : 
                 user?.role === 'pharmacy' ? 'Pharmacy Owner' : 
                 'Customer Account'}
              </span>
              {/* Screen Size Indicator (for debugging) */}
              {process.env.NODE_ENV === 'development' && (
                <div className="hidden sm:flex items-center space-x-2 text-xs text-gray-500">
                  <span className="px-2 py-1 bg-gray-100 rounded">
                    {isMobile ? <FaMobileAlt /> : isTablet ? <FaTabletAlt /> : <FaDesktop />}
                  </span>
                  <span>{windowWidth}px</span>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Success/Error Messages */}
        <AnimatePresence>
          {successMessage && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mb-4 md:mb-6 mx-2 md:mx-0"
            >
              <div className="bg-green-50 border border-green-200 rounded-xl p-3 md:p-4">
                <div className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2 md:mr-3 flex-shrink-0" />
                  <span className="text-green-800 text-sm md:text-base">{successMessage}</span>
                </div>
              </div>
            </motion.div>
          )}

          {errorMessage && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mb-4 md:mb-6 mx-2 md:mx-0"
            >
              <div className="bg-red-50 border border-red-200 rounded-xl p-3 md:p-4">
                <div className="flex items-center">
                  <FaExclamationTriangle className="text-red-500 mr-2 md:mr-3 flex-shrink-0" />
                  <span className="text-red-800 text-sm md:text-base">{errorMessage}</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Layout */}
        <div className="flex flex-col lg:flex-row gap-4 md:gap-6 lg:gap-8">
          {/* Sidebar - Mobile Overlay / Desktop Sidebar */}
          <AnimatePresence>
            {(isDesktop || isMobileMenuOpen) && (
              <motion.div
                initial={isDesktop ? { opacity: 1, x: 0 } : { opacity: 0, x: -300 }}
                animate={isDesktop ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                className={`lg:w-1/4 ${
                  isDesktop 
                    ? 'block' 
                    : 'fixed inset-0 z-40 bg-black bg-opacity-50 lg:bg-transparent'
                }`}
                onClick={() => !isDesktop && setIsMobileMenuOpen(false)}
              >
                <div
                  className={`${
                    isDesktop 
                      ? 'relative' 
                      : 'absolute inset-y-0 left-0 w-11/12 max-w-xs bg-white overflow-y-auto'
                  } h-full`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="bg-white rounded-xl md:rounded-2xl shadow-lg border border-gray-200 overflow-hidden m-2 md:m-0">
                    {/* User Info */}
                    <div className="p-4 md:p-6 border-b border-gray-200">
                      <div className="flex flex-col items-center">
                        <div className="relative">
                          <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-2xl md:text-3xl font-bold">
                              {user?.name?.charAt(0) || 'U'}
                            </span>
                          </div>
                          <button className="absolute bottom-0 right-0 w-7 h-7 md:w-8 md:h-8 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                            <FaCamera className="text-xs md:text-sm" />
                          </button>
                        </div>
                        <h3 className="mt-3 md:mt-4 font-bold text-gray-900 text-base md:text-lg">{user?.name || 'User'}</h3>
                        <p className="text-gray-600 text-xs md:text-sm text-center mt-1">{user?.email || ''}</p>
                        <p className="text-blue-600 text-xs md:text-sm mt-1 font-medium text-center">
                          Member since {user?.createdAt ? new Date(user.createdAt).toLocaleDateString('en-IN', { month: 'short', year: 'numeric' }) : 'Recently'}
                        </p>
                      </div>
                    </div>

                    {/* Tabs */}
                    <div className="p-1 md:p-2">
                      {tabs.map((tab) => (
                        <button
                          key={tab.id}
                          onClick={() => {
                            setActiveTab(tab.id)
                            if (!isDesktop) setIsMobileMenuOpen(false)
                          }}
                          className={`w-full flex items-center px-3 md:px-4 py-2.5 md:py-3 rounded-lg mb-1 transition-colors ${
                            activeTab === tab.id
                              ? 'bg-blue-50 text-blue-600'
                              : 'text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          <span className="mr-2 md:mr-3 text-sm md:text-base">{tab.icon}</span>
                          <span className="font-medium text-sm md:text-base">{tab.label}</span>
                        </button>
                      ))}
                    </div>

                    {/* Quick Links */}
                    <div className="p-4 md:p-6 border-t border-gray-200">
                      <h4 className="font-medium text-gray-900 mb-2 md:mb-3 text-sm md:text-base">Quick Links</h4>
                      <div className="space-y-1 md:space-y-2">
                        <button
                          onClick={() => navigate('/my-orders')}
                          className="w-full flex items-center px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors text-sm md:text-base"
                        >
                          <FaShoppingBag className="mr-2 md:mr-3 text-gray-500 flex-shrink-0" />
                          My Orders
                        </button>
                        <button
                          onClick={() => navigate('/my-wishlist')}
                          className="w-full flex items-center px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors text-sm md:text-base"
                        >
                          <FaHeart className="mr-2 md:mr-3 text-red-500 flex-shrink-0" />
                          My Wishlist
                        </button>
                        <button
                          onClick={() => navigate('/')}
                          className="w-full flex items-center px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors text-sm md:text-base"
                        >
                          <FaShoppingBag className="mr-2 md:mr-3 text-green-500 flex-shrink-0" />
                          Shop Medicines
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Mobile Tab Switcher (Horizontal Scroll) */}
            {!isDesktop && (
              <div className="mb-4 md:mb-6 overflow-x-auto scrollbar-hide">
                <div className="flex space-x-2 pb-2 px-2 min-w-max">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                        activeTab === tab.id
                          ? 'bg-blue-600 text-white'
                          : 'bg-white text-gray-700 border border-gray-300'
                      }`}
                    >
                      <span className="mr-2">{tab.icon}</span>
                      <span className="text-sm font-medium">{tab.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="bg-white rounded-xl md:rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
              {/* Profile Tab */}
              {activeTab === 'profile' && (
                <motion.div
                  initial={{ opacity: 0, x: isMobile ? 0 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="p-4 md:p-6 lg:p-8"
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6 md:mb-8">
                    <div>
                      <h2 className="text-xl md:text-2xl font-bold text-gray-900">Personal Information</h2>
                      <p className="text-gray-600 mt-1 md:mt-2 text-sm md:text-base">
                        Update your personal details and contact information
                      </p>
                    </div>
                    <button
                      onClick={() => setIsEditing(!isEditing)}
                      className="px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center w-full sm:w-auto"
                    >
                      {isEditing ? <FaTimesCircle className="mr-2" /> : <FaEdit className="mr-2" />}
                      {isEditing ? 'Cancel Edit' : 'Edit Profile'}
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                    <div className="sm:col-span-2 md:col-span-1">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          disabled={!isEditing}
                          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base ${
                            isEditing ? 'border-gray-300' : 'border-gray-200 bg-gray-50'
                          }`}
                        />
                        <FaUser className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      </div>
                    </div>

                    <div className="sm:col-span-2 md:col-span-1">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          disabled
                          className="w-full px-4 py-3 border border-gray-200 bg-gray-50 rounded-lg text-sm md:text-base"
                        />
                        <FaEnvelope className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Email cannot be changed</p>
                    </div>

                    <div className="sm:col-span-2 md:col-span-1">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <div className="relative">
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          disabled={!isEditing}
                          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base ${
                            isEditing ? 'border-gray-300' : 'border-gray-200 bg-gray-50'
                          }`}
                        />
                        <FaPhone className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      </div>
                    </div>

                    <div className="sm:col-span-2 md:col-span-1">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Address
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          disabled={!isEditing}
                          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base ${
                            isEditing ? 'border-gray-300' : 'border-gray-200 bg-gray-50'
                          }`}
                          placeholder="Street address"
                        />
                        <FaMapMarkerAlt className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base ${
                          isEditing ? 'border-gray-300' : 'border-gray-200 bg-gray-50'
                        }`}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        State
                      </label>
                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base ${
                          isEditing ? 'border-gray-300' : 'border-gray-200 bg-gray-50'
                        }`}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Pincode
                      </label>
                      <input
                        type="text"
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base ${
                          isEditing ? 'border-gray-300' : 'border-gray-200 bg-gray-50'
                        }`}
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Account Type
                      </label>
                      <div className="p-3 md:p-4 bg-blue-50 border border-blue-200 rounded-lg">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <div>
                            <p className="font-medium text-gray-900">
                              {user?.role === 'admin' ? 'Administrator' : 
                               user?.role === 'pharmacy' ? 'Pharmacy Owner' : 
                               'Customer Account'}
                            </p>
                            <p className="text-xs md:text-sm text-gray-600 mt-1">
                              {user?.role === 'admin' ? 'Full system access and management privileges' :
                               user?.role === 'pharmacy' ? 'Manage pharmacy inventory and process orders' :
                               'Browse and purchase medicines with delivery'}
                            </p>
                          </div>
                          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs md:text-sm font-medium whitespace-nowrap">
                            {user?.role || 'Customer'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {isEditing && (
                    <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-gray-200">
                      <div className="flex flex-col sm:flex-row justify-end gap-3 sm:gap-4">
                        <button
                          onClick={() => setIsEditing(false)}
                          className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors w-full sm:w-auto"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={handleSaveProfile}
                          disabled={loading}
                          className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all flex items-center justify-center disabled:opacity-50 w-full sm:w-auto"
                        >
                          {loading ? (
                            <>
                              <FaSpinner className="animate-spin mr-3" />
                              Saving...
                            </>
                          ) : (
                            <>
                              <FaSave className="mr-3" />
                              Save Changes
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  )}
                </motion.div>
              )}

              {/* Security Tab */}
              {activeTab === 'security' && (
                <motion.div
                  initial={{ opacity: 0, x: isMobile ? 0 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="p-4 md:p-6 lg:p-8"
                >
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 md:mb-8">Security Settings</h2>
                  
                  <div className="space-y-4 md:space-y-6">
                    {/* Password Change */}
                    <div className="border border-gray-200 rounded-xl p-4 md:p-6">
                      <h3 className="font-bold text-gray-900 text-lg mb-3 md:mb-4 flex items-center">
                        <FaLock className="mr-2 md:mr-3 text-blue-500 flex-shrink-0" />
                        Change Password
                      </h3>
                      <div className="space-y-3 md:space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Current Password
                          </label>
                          <input
                            type="password"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                            placeholder="Enter current password"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            New Password
                          </label>
                          <input
                            type="password"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                            placeholder="Enter new password"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Confirm New Password
                          </label>
                          <input
                            type="password"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                            placeholder="Confirm new password"
                          />
                        </div>
                        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors w-full md:w-auto">
                          Update Password
                        </button>
                      </div>
                    </div>

                    {/* Two-Factor Authentication */}
                    <div className="border border-gray-200 rounded-xl p-4 md:p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div>
                          <h3 className="font-bold text-gray-900 text-lg mb-1 flex items-center">
                            <FaShieldAlt className="mr-2 md:mr-3 text-green-500 flex-shrink-0" />
                            Two-Factor Authentication
                          </h3>
                          <p className="text-gray-600 text-sm md:text-base">
                            Add an extra layer of security to your account
                          </p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer mt-2 sm:mt-0">
                          <input type="checkbox" className="sr-only peer" />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
                        </label>
                      </div>
                    </div>

                    {/* Login Activity */}
                    <div className="border border-gray-200 rounded-xl p-4 md:p-6">
                      <h3 className="font-bold text-gray-900 text-lg mb-3 md:mb-4">Recent Login Activity</h3>
                      <div className="space-y-2 md:space-y-3">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-gray-50 rounded-lg gap-2">
                          <div>
                            <p className="font-medium text-sm md:text-base">Chrome on Windows</p>
                            <p className="text-xs md:text-sm text-gray-600">Mumbai, India • Today, 10:30 AM</p>
                          </div>
                          <FaCheckCircle className="text-green-500 flex-shrink-0 mt-1 sm:mt-0" />
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-gray-50 rounded-lg gap-2">
                          <div>
                            <p className="font-medium text-sm md:text-base">Safari on iPhone</p>
                            <p className="text-xs md:text-sm text-gray-600">Delhi, India • Yesterday, 8:15 PM</p>
                          </div>
                          <FaCheckCircle className="text-green-500 flex-shrink-0 mt-1 sm:mt-0" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Notifications Tab */}
              {activeTab === 'notifications' && (
                <motion.div
                  initial={{ opacity: 0, x: isMobile ? 0 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="p-4 md:p-6 lg:p-8"
                >
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 md:mb-8">Notification Preferences</h2>
                  
                  <div className="space-y-4 md:space-y-6">
                    {[
                      { title: 'Order Updates', description: 'Get notified about your order status changes' },
                      { title: 'Price Drop Alerts', description: 'Receive alerts when prices drop on your wishlist items' },
                      { title: 'New Products', description: 'Get updates about new medicines and healthcare products' },
                      { title: 'Prescription Reminders', description: 'Receive reminders for prescription renewals' },
                      { title: 'Promotional Offers', description: 'Get special offers and discount coupons' },
                      { title: 'Account Security', description: 'Receive alerts about important account activities' }
                    ].map((item, index) => (
                      <div key={index} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 md:p-4 border border-gray-200 rounded-lg gap-3">
                        <div className="flex-1">
                          <p className="font-medium text-gray-900 text-sm md:text-base">{item.title}</p>
                          <p className="text-gray-600 text-xs md:text-sm mt-1">{item.description}</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer flex-shrink-0">
                          <input type="checkbox" defaultChecked className="sr-only peer" />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                        </label>
                      </div>
                    ))}
                    
                    <div className="mt-6 md:mt-8">
                      <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all w-full md:w-auto">
                        Save Notification Preferences
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Other tabs */}
              {activeTab !== 'profile' && activeTab !== 'security' && activeTab !== 'notifications' && (
                <div className="p-6 md:p-8 text-center py-8 md:py-12">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                    {tabs.find(t => t.id === activeTab)?.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Coming Soon</h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} settings will be available soon.
                  </p>
                </div>
              )}
            </div>

            {/* Danger Zone */}
            <div className="mt-4 md:mt-6 lg:mt-8 bg-white rounded-xl md:rounded-2xl shadow-lg border border-red-200 overflow-hidden">
              <div className="p-4 md:p-6 lg:p-8">
                <h3 className="text-lg md:text-xl font-bold text-red-700 mb-3 md:mb-4">Danger Zone</h3>
                <div className="space-y-3 md:space-y-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between p-3 md:p-4 bg-red-50 rounded-lg gap-3">
                    <div className="flex-1">
                      <p className="font-medium text-gray-900 text-sm md:text-base">Delete Account</p>
                      <p className="text-gray-600 text-xs md:text-sm">
                        Permanently delete your account and all associated data
                      </p>
                    </div>
                    <button className="px-4 md:px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center w-full md:w-auto">
                      <FaTrash className="mr-2" />
                      Delete Account
                    </button>
                  </div>
                  
                  <div className="flex flex-col md:flex-row md:items-center justify-between p-3 md:p-4 bg-gray-50 rounded-lg gap-3">
                    <div className="flex-1">
                      <p className="font-medium text-gray-900 text-sm md:text-base">Export Data</p>
                      <p className="text-gray-600 text-xs md:text-sm">
                        Download all your personal data in a portable format
                      </p>
                    </div>
                    <button className="px-4 md:px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors w-full md:w-auto">
                      Export Data
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountSettings