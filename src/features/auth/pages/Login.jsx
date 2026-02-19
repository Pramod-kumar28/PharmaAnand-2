// import React, { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { useNavigate, Link } from 'react-router-dom'
// import { motion } from 'framer-motion'
// import { login, clearError } from '../authSlice.js'

// // Import React Icons
// import { 
//   FaPills, 
//   FaExclamationTriangle, 
//   FaSpinner, 
//   FaGoogle, 
//   FaFacebook 
// } from 'react-icons/fa'

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   })
//   const [errors, setErrors] = useState({})
//   const dispatch = useDispatch()
//   const navigate = useNavigate()
//   const { loading, error } = useSelector(state => state.auth)

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
//     if (error) {
//       dispatch(clearError())
//     }
//   }

//   const validateForm = () => {
//     const newErrors = {}
//     if (!formData.email.trim()) {
//       newErrors.email = 'Email is required'
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = 'Email is invalid'
//     }
//     if (!formData.password) {
//       newErrors.password = 'Password is required'
//     } else if (formData.password.length < 6) {
//       newErrors.password = 'Password must be at least 6 characters'
//     }
//     return newErrors
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     const validationErrors = validateForm()
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors)
//       return
//     }

//     try {
//       await dispatch(login(formData)).unwrap()
//       navigate('/')
//     } catch (err) {
//       console.error('Login failed:', err)
//     }
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="sm:mx-auto sm:w-full sm:max-w-md"
//       >
//         <div className="flex justify-center">
//           <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
//             <FaPills className="text-white text-2xl" />
//           </div>
//         </div>
//         <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
//           Sign in to DP  Pharma
//         </h2>
//         <p className="mt-2 text-center text-sm text-gray-600">
//           Access your medicines and healthcare needs
//         </p>
//       </motion.div>

//       <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
//         <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
//           <form className="space-y-6" onSubmit={handleSubmit}>
//             {/* Email */}
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                 Email address
//               </label>
//               <div className="mt-1">
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   autoComplete="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className={`appearance-none block w-full px-3 py-2 border ${
//                     errors.email ? 'border-red-300' : 'border-gray-300'
//                   } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
//                 />
//                 {errors.email && (
//                   <p className="mt-1 text-sm text-red-600">{errors.email}</p>
//                 )}
//               </div>
//             </div>

//             {/* Password */}
//             <div>
//               <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//                 Password
//               </label>
//               <div className="mt-1">
//                 <input
//                   id="password"
//                   name="password"
//                   type="password"
//                   autoComplete="current-password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   className={`appearance-none block w-full px-3 py-2 border ${
//                     errors.password ? 'border-red-300' : 'border-gray-300'
//                   } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
//                 />
//                 {errors.password && (
//                   <p className="mt-1 text-sm text-red-600">{errors.password}</p>
//                 )}
//               </div>
//             </div>

//             {/* Remember me & Forgot password */}
//             <div className="flex items-center justify-between">
//               <div className="flex items-center">
//                 <input
//                   id="remember-me"
//                   name="remember-me"
//                   type="checkbox"
//                   className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
//                 />
//                 <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
//                   Remember me
//                 </label>
//               </div>

//               <div className="text-sm">
//                 <Link to="/forgot-password" className="font-medium text-blue-600 hover:text-blue-500">
//                   Forgot your password?
//                 </Link>
//               </div>
//             </div>

//             {/* Server Error */}
//             {error && (
//               <div className="rounded-md bg-red-50 p-4">
//                 <div className="flex">
//                   <div className="flex-shrink-0">
//                     <FaExclamationTriangle className="text-red-400" />
//                   </div>
//                   <div className="ml-3">
//                     <h3 className="text-sm font-medium text-red-800">
//                       {error.message || 'Login failed'}
//                     </h3>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* Submit Button */}
//             <div>
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 {loading ? (
//                   <span className="flex items-center gap-2">
//                     <FaSpinner className="animate-spin" />
//                     Signing in...
//                   </span>
//                 ) : (
//                   'Sign in'
//                 )}
//               </button>
//             </div>
//           </form>

//           <div className="mt-6">
//             <div className="relative">
//               <div className="absolute inset-0 flex items-center">
//                 <div className="w-full border-t border-gray-300"></div>
//               </div>
//               <div className="relative flex justify-center text-sm">
//                 <span className="px-2 bg-white text-gray-500">Or continue with</span>
//               </div>
//             </div>

//             <div className="mt-6 grid grid-cols-2 gap-3">
//               <button 
//                 type="button"
//                 className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//               >
//                 <FaGoogle className="text-red-500 mr-2" />
//                 Google
//               </button>
//               <button 
//                 type="button"
//                 className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//               >
//                 <FaFacebook className="text-blue-600 mr-2" />
//                 Facebook
//               </button>
//             </div>
//           </div>

//           <div className="mt-6 text-center">
//             <p className="text-sm text-gray-600">
//               Don't have an account?{' '}
//               <Link to="/register" className="font-medium text-blue-600 hover:text-blue-500">
//                 Sign up
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Login





























// import React, { useState, useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { useNavigate, Link } from 'react-router-dom'
// import { motion } from 'framer-motion'
// import { login, clearError } from '../authSlice.js'

// // Import React Icons
// import { 
//   FaPills, 
//   FaExclamationTriangle, 
//   FaSpinner,
//   FaUserShield,
//   FaStore
// } from 'react-icons/fa'

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     role: 'pharmacy' // Default role for pharmacy owners
//   })
//   const [errors, setErrors] = useState({})
//   const dispatch = useDispatch()
//   const navigate = useNavigate()
//   const { loading, error, role } = useSelector(state => state.auth)

//   // Redirect if already logged in
//   useEffect(() => {
//     if (role === 'admin') {
//       navigate('/admin/dashboard')
//     } else if (role === 'pharmacy') {
//       navigate('/pharmacy/dashboard')
//     }
//   }, [role, navigate])

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
//     if (error) {
//       dispatch(clearError())
//     }
//   }

//   const validateForm = () => {
//     const newErrors = {}
//     if (!formData.email.trim()) {
//       newErrors.email = 'Email is required'
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = 'Email is invalid'
//     }
//     if (!formData.password) {
//       newErrors.password = 'Password is required'
//     } else if (formData.password.length < 6) {
//       newErrors.password = 'Password must be at least 6 characters'
//     }
//     return newErrors
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     const validationErrors = validateForm()
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors)
//       return
//     }

//     try {
//       const result = await dispatch(login(formData)).unwrap()
//       // Redirection is handled by useEffect based on role
//     } catch (err) {
//       console.error('Login failed:', err)
//     }
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="sm:mx-auto sm:w-full sm:max-w-md"
//       >
//         <div className="flex justify-center">
//           <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
//             <FaPills className="text-white text-2xl" />
//           </div>
//         </div>
//         <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
//           Dashboard Login
//         </h2>
//         <p className="mt-2 text-center text-sm text-gray-600">
//           Access your management dashboard
//         </p>
//       </motion.div>

//       <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
//         <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
//           {/* Role Selection */}
//           <div className="mb-6">
//             <label className="block text-sm font-medium text-gray-700 mb-3">
//               Login As:
//             </label>
//             <div className="grid grid-cols-2 gap-4">
//               <button
//                 type="button"
//                 onClick={() => setFormData({...formData, role: 'pharmacy'})}
//                 className={`p-4 border rounded-lg flex flex-col items-center justify-center transition-all ${
//                   formData.role === 'pharmacy' 
//                     ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-200' 
//                     : 'border-gray-300 hover:border-gray-400'
//                 }`}
//               >
//                 <FaStore className={`text-2xl mb-2 ${
//                   formData.role === 'pharmacy' ? 'text-blue-600' : 'text-gray-500'
//                 }`} />
//                 <span className={`font-medium ${
//                   formData.role === 'pharmacy' ? 'text-blue-700' : 'text-gray-700'
//                 }`}>
//                   Pharmacy Owner
//                 </span>
//                 <span className="text-xs text-gray-500 mt-1">Inventory & Orders</span>
//               </button>
              
//               <button
//                 type="button"
//                 onClick={() => setFormData({...formData, role: 'admin'})}
//                 className={`p-4 border rounded-lg flex flex-col items-center justify-center transition-all ${
//                   formData.role === 'admin' 
//                     ? 'border-purple-500 bg-purple-50 ring-2 ring-purple-200' 
//                     : 'border-gray-300 hover:border-gray-400'
//                 }`}
//               >
//                 <FaUserShield className={`text-2xl mb-2 ${
//                   formData.role === 'admin' ? 'text-purple-600' : 'text-gray-500'
//                 }`} />
//                 <span className={`font-medium ${
//                   formData.role === 'admin' ? 'text-purple-700' : 'text-gray-700'
//                 }`}>
//                   Website Admin
//                 </span>
//                 <span className="text-xs text-gray-500 mt-1">Full Control</span>
//               </button>
//             </div>
//           </div>

//           <form className="space-y-6" onSubmit={handleSubmit}>
//             {/* Email */}
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                 Email address
//               </label>
//               <div className="mt-1">
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   autoComplete="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className={`appearance-none block w-full px-3 py-2 border ${
//                     errors.email ? 'border-red-300' : 'border-gray-300'
//                   } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
//                   placeholder={
//                     formData.role === 'admin' 
//                       ? 'admin@anandpharma.com' 
//                       : 'pharmacy@anandpharma.com'
//                   }
//                 />
//                 {errors.email && (
//                   <p className="mt-1 text-sm text-red-600">{errors.email}</p>
//                 )}
//               </div>
//             </div>

//             {/* Password */}
//             <div>
//               <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//                 Password
//               </label>
//               <div className="mt-1">
//                 <input
//                   id="password"
//                   name="password"
//                   type="password"
//                   autoComplete="current-password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   className={`appearance-none block w-full px-3 py-2 border ${
//                     errors.password ? 'border-red-300' : 'border-gray-300'
//                   } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
//                   placeholder="••••••••"
//                 />
//                 {errors.password && (
//                   <p className="mt-1 text-sm text-red-600">{errors.password}</p>
//                 )}
//               </div>
//             </div>

//             {/* Server Error */}
//             {error && (
//               <div className="rounded-md bg-red-50 p-4">
//                 <div className="flex">
//                   <div className="flex-shrink-0">
//                     <FaExclamationTriangle className="text-red-400" />
//                   </div>
//                   <div className="ml-3">
//                     <h3 className="text-sm font-medium text-red-800">
//                       {error.message || 'Login failed'}
//                     </h3>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* Submit Button */}
//             <div>
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed ${
//                   formData.role === 'admin' 
//                     ? 'bg-purple-600 hover:bg-purple-700 focus:ring-purple-500' 
//                     : 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500'
//                 }`}
//               >
//                 {loading ? (
//                   <span className="flex items-center gap-2">
//                     <FaSpinner className="animate-spin" />
//                     Signing in...
//                   </span>
//                 ) : (
//                   `Sign in as ${formData.role === 'admin' ? 'Admin' : 'Pharmacy Owner'}`
//                 )}
//               </button>
//             </div>
//           </form>

//           <div className="mt-6 text-center">
//             <p className="text-sm text-gray-600">
//               Customer login?{' '}
//               <Link to="/" className="font-medium text-blue-600 hover:text-blue-500">
//                 Go to store
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Login



















import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { login, clearError } from '../authSlice.js'

// Import React Icons
import { 
  FaPills, 
  FaExclamationTriangle, 
  FaSpinner,
  FaUserShield,
  FaStore,
  FaClipboard,
  FaKey,
  FaShoppingBag,
  FaArrowRight,
  FaUser,
  FaHome,
  FaHeart,
  FaShoppingCart,
  FaShieldAlt,
  FaStar,
  FaTruck
} from 'react-icons/fa'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [errors, setErrors] = useState({})
  const [showDemo, setShowDemo] = useState(true)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { loading, error, role } = useSelector(state => state.auth)

  // Demo credentials for all user types
  const demoCredentials = {
    customer: {
      email: 'customer@dppharma.com',
      password: 'customer123',
      role: 'customer',
      name: 'Regular Customer',
      description: 'Browse and purchase medicines',
      icon: FaUser,
      color: 'green',
      benefits: [
        { icon: FaShoppingCart, text: 'Easy medicine ordering' },
        { icon: FaHeart, text: 'Save favorites' },
        { icon: FaTruck, text: 'Fast delivery' },
        { icon: FaShieldAlt, text: 'Secure payments' }
      ]
    },
    admin: {
      email: 'admin@dppharma.com',
      password: 'admin123',
      role: 'admin',
      name: 'Website Admin',
      description: 'Access full website control panel',
      icon: FaUserShield,
      color: 'purple',
      benefits: [
        { icon: FaShieldAlt, text: 'Full system control' },
        { icon: FaStore, text: 'Manage all pharmacies' },
        { icon: FaUser, text: 'User management' },
        { icon: FaStar, text: 'Analytics & reports' }
      ]
    },
    pharmacy: {
      email: 'pharmacy@dppharma.com',
      password: 'pharmacy123',
      role: 'pharmacy',
      name: 'Pharmacy Owner',
      description: 'Manage pharmacy inventory and orders',
      icon: FaStore,
      color: 'blue',
      benefits: [
        { icon: FaStore, text: 'Inventory management' },
        { icon: FaShoppingBag, text: 'Order processing' },
        { icon: FaUser, text: 'Customer management' },
        { icon: FaStar, text: 'Sales analytics' }
      ]
    }
  }

  // Redirect if already logged in
  useEffect(() => {
    if (role === 'admin') {
      navigate('/admin/dashboard')
    } else if (role === 'pharmacy') {
      navigate('/pharmacy/dashboard')
    } else if (role === 'customer') {
      navigate('/')
    }
  }, [role, navigate])

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
    if (error) {
      dispatch(clearError())
    }
  }

  const validateForm = () => {
    const newErrors = {}
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
    }
    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validateForm()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    try {
      await dispatch(login(formData)).unwrap()
    } catch (err) {
      console.error('Login failed:', err)
    }
  }

  const fillDemoCredentials = (userType) => {
    const credentials = demoCredentials[userType]
    setFormData({
      email: credentials.email,
      password: credentials.password
    })
    setErrors({})
    dispatch(clearError())
  }

  const userBenefits = {
    customer: [
      'Order medicines online',
      'Track your deliveries',
      'Save favorite products',
      'Get prescription reminders',
      'Exclusive member discounts'
    ],
    admin: [
      'Full system administration',
      'Manage all user accounts',
      'View sales analytics',
      'Content management',
      'System configuration'
    ],
    pharmacy: [
      'Manage inventory',
      'Process orders',
      'Track sales',
      'Customer management',
      'Generate reports'
    ]
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex flex-col justify-center py-6 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sm:mx-auto sm:w-full sm:max-w-7xl"
      >
        <h2 className="mt- text-center text-4xl font-bold text-gray-900 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
          Welcome to DP Pharma
        </h2>
        <p className="mt-3 text-center text-lg text-gray-600 max-w-3xl mx-auto">
          Your trusted partner for quality healthcare and medicines. Sign in to access your personalized experience.
        </p>
      </motion.div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Login Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:w-2/5"
          >
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <FaUser className="text-white text-xl" />
                </div>
                <div className="ml-4">
                  <h2 className="text-2xl font-bold text-gray-900">Sign In</h2>
                  <p className="text-gray-600">Access your healthcare account</p>
                </div>
              </div>

              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                    <span className="bg-blue-100 text-blue-600 rounded-full p-1 mr-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </span>
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`appearance-none block w-full px-4 py-3.5 pl-12 border ${
                        errors.email ? 'border-red-300 ring-2 ring-red-200' : 'border-gray-300'
                      } rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base transition-all duration-200`}
                      placeholder="Enter your email"
                    />
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    {errors.email && (
                      <p className="mt-2 text-sm text-red-600 flex items-center animate-pulse">
                        <FaExclamationTriangle className="mr-2" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Password */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 flex items-center">
                      <span className="bg-blue-100 text-blue-600 rounded-full p-1 mr-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </span>
                      Password
                    </label>
                    <Link 
                      to="/forgot-password" 
                      className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors duration-200"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <div className="relative">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      value={formData.password}
                      onChange={handleChange}
                      className={`appearance-none block w-full px-4 py-3.5 pl-12 border ${
                        errors.password ? 'border-red-300 ring-2 ring-red-200' : 'border-gray-300'
                      } rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base transition-all duration-200`}
                      placeholder="Enter your password"
                    />
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                      </svg>
                    </div>
                    {errors.password && (
                      <p className="mt-2 text-sm text-red-600 flex items-center animate-pulse">
                        <FaExclamationTriangle className="mr-2" />
                        {errors.password}
                      </p>
                    )}
                  </div>
                </div>

                {/* Remember me */}
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded transition duration-200"
                  />
                  <label htmlFor="remember-me" className="ml-3 text-sm text-gray-700">
                    Keep me signed in
                  </label>
                </div>

                {/* Server Error */}
                {error && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="rounded-xl bg-red-50 p-4 border border-red-200"
                  >
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <FaExclamationTriangle className="text-red-500 text-lg" />
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-red-800">
                          {error.message || 'Login failed. Please check your credentials.'}
                        </h3>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="group w-full flex justify-center items-center py-4 px-4 border border-transparent rounded-xl shadow-lg text-base font-semibold text-white bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed transform hover:-translate-y-0.5"
                  >
                    {loading ? (
                      <>
                        <FaSpinner className="animate-spin mr-3" />
                        Signing in...
                      </>
                    ) : (
                      <>
                        Sign In Now
                        <FaArrowRight className="ml-3 group-hover:translate-x-1 transition-transform duration-200" />
                      </>
                    )}
                  </button>
                </div>
              </form>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <p className="text-gray-600">
                    New to DP Pharma?{' '}
                    <Link 
                      to="/register" 
                      className="font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-200"
                    >
                      Create an account
                    </Link>
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Join thousands of satisfied customers
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Demo Credentials & Info */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:w-3/5"
          >
            <div className="bg-gradient-to-br from-blue-50/80 to-green-50/80 rounded-3xl shadow-2xl p-8 h-full border border-gray-100 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center mr-3">
                      <FaKey className="text-white" />
                    </div>
                    Quick Access Demo Accounts
                  </h3>
                  <p className="text-gray-600 mt-2">Try out different user experiences</p>
                </div>
                <button
                  onClick={() => setShowDemo(!showDemo)}
                  className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-800 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors duration-200"
                >
                  {showDemo ? 'Hide Demo' : 'Show Demo'}
                </button>
              </div>

              {showDemo && (
                <>
                  {/* Customer Demo Card (Highlighted) */}
                  <div className="mb-8">
                    <div className="flex items-center mb-4">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <FaUser className="text-white text-xs" />
                      </div>
                      <h4 className="ml-3 text-lg font-semibold text-gray-800">For Customers</h4>
                    </div>
                    <div className="border-2 border-green-200 rounded-2xl p-6 bg-gradient-to-r from-white to-green-50/50 hover:shadow-lg transition-all duration-300">
                      <div className="flex flex-col md:flex-row md:items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-start">
                            <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-md">
                              <FaUser className="text-white text-xl" />
                            </div>
                            <div className="ml-4">
                              <h4 className="text-xl font-bold text-gray-900">{demoCredentials.customer.name}</h4>
                              <p className="text-gray-600 mt-1">{demoCredentials.customer.description}</p>
                            </div>
                          </div>
                          
                          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                            {userBenefits.customer.map((benefit, index) => (
                              <div key={index} className="flex items-center">
                                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                  </svg>
                                </div>
                                <span className="text-sm text-gray-700">{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="mt-6 md:mt-0 md:ml-6 md:w-80">
                          <div className="bg-white rounded-xl p-5 shadow-inner">
                            <div className="space-y-4">
                              <div>
                                <div className="flex items-center text-sm text-gray-700 mb-2">
                                  <FaClipboard className="mr-2 text-green-500" />
                                  <span className="font-medium">Email:</span>
                                </div>
                                <div className="flex justify-between items-center">
                                  <code className="bg-green-50 px-4 py-2 rounded-lg text-green-700 font-mono text-sm border border-green-200">
                                    {demoCredentials.customer.email}
                                  </code>
                                  <button
                                    onClick={() => {
                                      navigator.clipboard.writeText(demoCredentials.customer.email)
                                      alert('Email copied!')
                                    }}
                                    className="ml-2 px-3 py-1.5 text-sm bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center"
                                  >
                                    Copy
                                  </button>
                                </div>
                              </div>
                              
                              <div>
                                <div className="flex items-center text-sm text-gray-700 mb-2">
                                  <FaKey className="mr-2 text-green-500" />
                                  <span className="font-medium">Password:</span>
                                </div>
                                <div className="flex justify-between items-center">
                                  <code className="bg-green-50 px-4 py-2 rounded-lg text-green-700 font-mono text-sm border border-green-200">
                                    {demoCredentials.customer.password}
                                  </code>
                                  <button
                                    onClick={() => {
                                      navigator.clipboard.writeText(demoCredentials.customer.password)
                                      alert('Password copied!')
                                    }}
                                    className="ml-2 px-3 py-1.5 text-sm bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center"
                                  >
                                    Copy
                                  </button>
                                </div>
                              </div>
                            </div>
                            
                            <button
                              onClick={() => fillDemoCredentials('customer')}
                              className="w-full mt-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center group"
                            >
                              <FaHome className="mr-3" />
                              Login as Customer
                              <FaArrowRight className="ml-3 group-hover:translate-x-1 transition-transform duration-200" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Admin & Pharmacy Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Admin Demo Card */}
                    <div className="border-2 border-purple-200 rounded-2xl p-6 bg-gradient-to-r from-white to-purple-50/50 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center">
                          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                            <FaUserShield className="text-white text-lg" />
                          </div>
                          <div className="ml-4">
                            <h4 className="font-bold text-gray-900">{demoCredentials.admin.name}</h4>
                            <p className="text-sm text-gray-600">{demoCredentials.admin.description}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between items-center bg-purple-50 p-3 rounded-lg">
                          <div className="flex items-center">
                            <FaClipboard className="mr-2 text-purple-500" />
                            <span className="text-sm">Email: {demoCredentials.admin.email}</span>
                          </div>
                          <button
                            onClick={() => fillDemoCredentials('admin')}
                            className="px-3 py-1 bg-purple-600 text-white rounded-lg hover:bg-purple-700 text-sm transition-colors duration-200"
                          >
                            Use
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Pharmacy Demo Card */}
                    <div className="border-2 border-blue-200 rounded-2xl p-6 bg-gradient-to-r from-white to-blue-50/50 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                            <FaStore className="text-white text-lg" />
                          </div>
                          <div className="ml-4">
                            <h4 className="font-bold text-gray-900">{demoCredentials.pharmacy.name}</h4>
                            <p className="text-sm text-gray-600">{demoCredentials.pharmacy.description}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between items-center bg-blue-50 p-3 rounded-lg">
                          <div className="flex items-center">
                            <FaClipboard className="mr-2 text-blue-500" />
                            <span className="text-sm">Email: {demoCredentials.pharmacy.email}</span>
                          </div>
                          <button
                            onClick={() => fillDemoCredentials('pharmacy')}
                            className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm transition-colors duration-200"
                          >
                            Use
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 rounded-2xl p-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <FaShieldAlt className="text-white text-lg" />
                      </div>
                      <div className="ml-4">
                        <h4 className="font-bold text-gray-900">Safe & Secure</h4>
                        <p className="text-sm text-gray-600 mt-1">
                          Demo accounts use test data only. For security, all demo accounts have limited functionality and 
                          cannot perform real transactions.
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Login