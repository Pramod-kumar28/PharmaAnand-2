// import axios from '../../app/config/axios.js'

// // Mock API service
// const authService = {
//   login: async (credentials) => {
//     // Simulate API delay
//     await new Promise(resolve => setTimeout(resolve, 1000))
    
//     // Mock response - replace with real API
//     if (credentials.email === 'test@example.com' && credentials.password === 'password') {
//       return {
//         user: {
//           id: 1,
//           name: 'John Doe',
//           email: credentials.email,
//           role: 'user'
//         },
//         token: 'mock-jwt-token-123456'
//       }
//     } else {
//       throw new Error('Invalid credentials')
//     }
//   },

//   register: async (userData) => {
//     await new Promise(resolve => setTimeout(resolve, 1000))
    
//     // Mock response
//     return {
//       user: {
//         id: 2,
//         name: userData.name,
//         email: userData.email,
//         role: 'user'
//       },
//       token: 'mock-jwt-token-register-123456'
//     }
//   },

//   logout: async () => {
//     await new Promise(resolve => setTimeout(resolve, 300))
//     return { success: true }
//   },

//   getProfile: async () => {
//     const token = localStorage.getItem('token')
//     if (!token) throw new Error('No token found')
    
//     // Mock response
//     await new Promise(resolve => setTimeout(resolve, 500))
//     return {
//       user: {
//         id: 1,
//         name: 'John Doe',
//         email: 'test@example.com',
//         phone: '+91 9876543210',
//         address: '123 Main Street, Mumbai'
//       }
//     }
//   },

//   updateProfile: async (userData) => {
//     await new Promise(resolve => setTimeout(resolve, 800))
//     return {
//       user: {
//         ...userData,
//         id: 1
//       }
//     }
//   }
// }

// export default authService
















// import axios from '../../app/config/axios.js'

// // Helper function to generate unique tokens
// const generateToken = (prefix = 'mock-jwt-token') => {
//   return `${prefix}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
// }

// // Mock database for users (simulating backend)
// let mockUsersDB = []

// // Initialize with default test user
// const initializeMockDB = () => {
//   try {
//     // Try to load users from localStorage
//     const storedUsers = localStorage.getItem('mockUsersDB')
//     if (storedUsers) {
//       mockUsersDB = JSON.parse(storedUsers)
//       console.log('Loaded users from localStorage:', mockUsersDB.length)
//     }
    
//     // Add default test user if not exists
//     const defaultUserExists = mockUsersDB.some(user => user.email === 'test@example.com')
//     if (!defaultUserExists) {
//       mockUsersDB.push({
//         id: 1,
//         name: 'John Doe',
//         email: 'test@example.com',
//         password: 'password', // In real app, this would be hashed
//         phone: '+91 9876543210',
//         role: 'user',
//         createdAt: new Date().toISOString()
//       })
//       console.log('Added default test user')
//     }
//   } catch (error) {
//     console.error('Error initializing mock DB:', error)
//     mockUsersDB = []
//   }
// }

// // Initialize the mock database
// initializeMockDB()

// // Save users to localStorage
// const saveUsersToStorage = () => {
//   try {
//     localStorage.setItem('mockUsersDB', JSON.stringify(mockUsersDB))
//   } catch (error) {
//     console.error('Error saving users to localStorage:', error)
//   }
// }

// // Mock API service
// const authService = {
//   login: async (credentials) => {
//     // Simulate API delay
//     await new Promise(resolve => setTimeout(resolve, 1000))
    
//     console.log('Login attempt for:', credentials.email)
//     console.log('Available users in DB:', mockUsersDB.map(u => u.email))
    
//     // Check if user exists in mock database
//     const user = mockUsersDB.find(u => 
//       u.email === credentials.email && 
//       u.password === credentials.password
//     )
    
//     if (user) {
//       // Don't send password in response
//       const { password, ...userWithoutPassword } = user
      
//       const responseData = {
//         user: userWithoutPassword,
//         token: generateToken('login')
//       }
      
//       console.log('Login successful:', responseData.user.email)
//       return responseData
//     } else {
//       console.log('Login failed: Invalid credentials')
//       throw new Error('Invalid email or password')
//     }
//   },

//   register: async (userData) => {
//     await new Promise(resolve => setTimeout(resolve, 1000))
    
//     console.log('Register attempt for:', userData.email)
//     console.log('Current users in DB:', mockUsersDB.map(u => u.email))
    
//     // Check if user already exists
//     const userExists = mockUsersDB.some(u => u.email === userData.email)
//     if (userExists) {
//       console.log('Registration failed: User already exists')
//       throw new Error('User with this email already exists')
//     }
    
//     // Generate unique ID
//     const timestamp = Date.now()
//     const newUser = {
//       id: timestamp,
//       name: userData.name,
//       email: userData.email,
//       password: userData.password, // In real app, this would be hashed
//       phone: userData.phone || '',
//       role: 'user',
//       createdAt: new Date().toISOString()
//     }
    
//     // Add to mock database
//     mockUsersDB.push(newUser)
//     saveUsersToStorage()
    
//     // Don't send password in response
//     const { password, ...userWithoutPassword } = newUser
    
//     const responseData = {
//       user: userWithoutPassword,
//       token: generateToken('register')
//     }
    
//     console.log('Registration successful:', responseData.user.email)
//     console.log('Total users after registration:', mockUsersDB.length)
//     return responseData
//   },

//   logout: async () => {
//     console.log('Logout called')
//     await new Promise(resolve => setTimeout(resolve, 300))
    
//     // Clear auth localStorage but keep user database
//     const userBefore = localStorage.getItem('user')
//     const tokenBefore = localStorage.getItem('token')
//     console.log('Before logout - User:', userBefore, 'Token:', tokenBefore)
    
//     return { success: true }
//   },

//   getProfile: async () => {
//     const token = localStorage.getItem('token')
//     console.log('GetProfile - Token from localStorage:', token)
    
//     if (!token) {
//       console.log('GetProfile failed: No token found')
//       throw new Error('No token found')
//     }
    
//     // Mock response
//     await new Promise(resolve => setTimeout(resolve, 500))
    
//     const userFromStorage = localStorage.getItem('user')
//     console.log('GetProfile - User from localStorage:', userFromStorage)
    
//     if (userFromStorage) {
//       const userData = JSON.parse(userFromStorage)
      
//       // Try to get full user data from mock DB
//       const fullUser = mockUsersDB.find(u => u.id === userData.id)
//       if (fullUser) {
//         const { password, ...userWithoutPassword } = fullUser
//         return { user: userWithoutPassword }
//       }
      
//       return {
//         user: {
//           ...userData,
//           phone: userData.phone || '+91 9876543210',
//           address: userData.address || '123 Main Street, Mumbai'
//         }
//       }
//     }
    
//     // Fallback mock data
//     return {
//       user: {
//         id: 1,
//         name: 'John Doe',
//         email: 'test@example.com',
//         phone: '+91 9876543210',
//         address: '123 Main Street, Mumbai'
//       }
//     }
//   },

//   updateProfile: async (userData) => {
//     console.log('UpdateProfile called with:', userData)
    
//     const token = localStorage.getItem('token')
//     if (!token) {
//       throw new Error('No token found')
//     }
    
//     await new Promise(resolve => setTimeout(resolve, 800))
    
//     // Get current user from localStorage
//     const currentUser = JSON.parse(localStorage.getItem('user') || '{}')
    
//     // Update in mock database
//     const userIndex = mockUsersDB.findIndex(u => u.id === currentUser.id)
//     if (userIndex !== -1) {
//       mockUsersDB[userIndex] = {
//         ...mockUsersDB[userIndex],
//         ...userData,
//         updatedAt: new Date().toISOString()
//       }
//       saveUsersToStorage()
//     }
    
//     const updatedUser = {
//       ...currentUser,
//       ...userData,
//       id: currentUser.id || 1,
//       updatedAt: new Date().toISOString()
//     }
    
//     console.log('UpdateProfile - Updated user:', updatedUser)
    
//     return {
//       user: updatedUser
//     }
//   },

//   // Helper method to check auth status
//   checkAuth: () => {
//     const user = localStorage.getItem('user')
//     const token = localStorage.getItem('token')
    
//     console.log('CheckAuth - User:', user)
//     console.log('CheckAuth - Token:', token)
//     console.log('CheckAuth - Is authenticated:', !!(user && token))
    
//     return !!(user && token)
//   },

//   // Helper method to get current user
//   getCurrentUser: () => {
//     try {
//       const user = localStorage.getItem('user')
//       return user ? JSON.parse(user) : null
//     } catch (error) {
//       console.error('Error parsing user from localStorage:', error)
//       return null
//     }
//   },

//   // Helper method to get token
//   getToken: () => {
//     return localStorage.getItem('token')
//   },

//   // Clear all auth data
//   clearAuthData: () => {
//     console.log('Clearing auth data from localStorage')
//     localStorage.removeItem('user')
//     localStorage.removeItem('token')
//     localStorage.removeItem('auth_expiry')
//   },

//   // Set auth data
//   setAuthData: (user, token) => {
//     console.log('Setting auth data:', { user, token })
//     localStorage.setItem('user', JSON.stringify(user))
//     localStorage.setItem('token', token)
//     localStorage.setItem('auth_expiry', Date.now() + 24 * 60 * 60 * 1000) // 24 hours
//   },

//   // Debug method to see all users
//   getAllUsers: () => {
//     console.log('All users in mock DB:', mockUsersDB)
//     return mockUsersDB
//   },

//   // Reset mock database (for testing)
//   resetMockDB: () => {
//     mockUsersDB = []
//     localStorage.removeItem('mockUsersDB')
//     console.log('Mock DB reset')
//   }
// }

// // Add auto-clear for expired tokens
// const checkTokenExpiry = () => {
//   const expiry = localStorage.getItem('auth_expiry')
//   if (expiry && Date.now() > parseInt(expiry)) {
//     console.log('Token expired, clearing auth data')
//     authService.clearAuthData()
//   }
// }

// // Run expiry check on service load
// checkTokenExpiry()

// export default authService















































// import axios from '../../app/config/axios.js'

// // Helper function to generate unique tokens
// const generateToken = (prefix = 'mock-jwt-token') => {
//   return `${prefix}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
// }

// // Mock database for users (simulating backend)
// let mockUsersDB = []

// // Initialize with demo users
// const initializeMockDB = () => {
//   try {
//     // Try to load users from localStorage
//     const storedUsers = localStorage.getItem('mockUsersDB')
//     if (storedUsers) {
//       mockUsersDB = JSON.parse(storedUsers)
//       console.log('Loaded users from localStorage:', mockUsersDB.length)
//     }
    
//     // Demo Admin User
//     const adminExists = mockUsersDB.some(user => user.email === 'admin@anandpharma.com')
//     if (!adminExists) {
//       mockUsersDB.push({
//         id: 1001,
//         name: 'Admin User',
//         email: 'admin@anandpharma.com',
//         password: 'admin123', // Demo password
//         phone: '+91 9999999999',
//         role: 'admin',
//         createdAt: new Date().toISOString()
//       })
//       console.log('Added demo admin user')
//     }
    
//     // Demo Pharmacy User
//     const pharmacyExists = mockUsersDB.some(user => user.email === 'pharmacy@anandpharma.com')
//     if (!pharmacyExists) {
//       mockUsersDB.push({
//         id: 1002,
//         name: 'Pharmacy Owner',
//         email: 'pharmacy@anandpharma.com',
//         password: 'pharmacy123', // Demo password
//         phone: '+91 8888888888',
//         role: 'pharmacy',
//         createdAt: new Date().toISOString()
//       })
//       console.log('Added demo pharmacy user')
//     }
    
//     // Add default test user if not exists
//     const defaultUserExists = mockUsersDB.some(user => user.email === 'test@example.com')
//     if (!defaultUserExists) {
//       mockUsersDB.push({
//         id: 1,
//         name: 'John Doe',
//         email: 'test@example.com',
//         password: 'password', // In real app, this would be hashed
//         phone: '+91 9876543210',
//         role: 'user',
//         createdAt: new Date().toISOString()
//       })
//       console.log('Added default test user')
//     }
    
//     // Save updated database
//     saveUsersToStorage()
    
//   } catch (error) {
//     console.error('Error initializing mock DB:', error)
//     mockUsersDB = []
//   }
// }

// // Initialize the mock database
// initializeMockDB()

// // Save users to localStorage
// const saveUsersToStorage = () => {
//   try {
//     localStorage.setItem('mockUsersDB', JSON.stringify(mockUsersDB))
//     console.log('Saved users to storage:', mockUsersDB.length)
//   } catch (error) {
//     console.error('Error saving users to localStorage:', error)
//   }
// }

// // Mock API service
// const authService = {
//   login: async (credentials) => {
//     // Simulate API delay
//     await new Promise(resolve => setTimeout(resolve, 1000))
    
//     console.log('Login attempt for:', credentials.email)
//     console.log('Available users in DB:', mockUsersDB.map(u => ({ email: u.email, role: u.role })))
    
//     // Check if user exists in mock database
//     const user = mockUsersDB.find(u => 
//       u.email === credentials.email && 
//       u.password === credentials.password
//     )
    
//     if (user) {
//       // Don't send password in response
//       const { password, ...userWithoutPassword } = user
      
//       const responseData = {
//         user: userWithoutPassword,
//         token: generateToken('login')
//       }
      
//       console.log('Login successful:', { 
//         email: responseData.user.email, 
//         role: responseData.user.role,
//         name: responseData.user.name 
//       })
//       return responseData
//     } else {
//       console.log('Login failed: Invalid credentials')
//       throw new Error('Invalid email or password')
//     }
//   },

//   register: async (userData) => {
//     await new Promise(resolve => setTimeout(resolve, 1000))
    
//     console.log('Register attempt for:', userData.email)
//     console.log('Current users in DB:', mockUsersDB.map(u => u.email))
    
//     // Check if user already exists
//     const userExists = mockUsersDB.some(u => u.email === userData.email)
//     if (userExists) {
//       console.log('Registration failed: User already exists')
//       throw new Error('User with this email already exists')
//     }
    
//     // Generate unique ID
//     const timestamp = Date.now()
//     const newUser = {
//       id: timestamp,
//       name: userData.name,
//       email: userData.email,
//       password: userData.password, // In real app, this would be hashed
//       phone: userData.phone || '',
//       role: userData.role || 'user', // Use provided role or default to 'user'
//       createdAt: new Date().toISOString()
//     }
    
//     // Add to mock database
//     mockUsersDB.push(newUser)
//     saveUsersToStorage()
    
//     // Don't send password in response
//     const { password, ...userWithoutPassword } = newUser
    
//     const responseData = {
//       user: userWithoutPassword,
//       token: generateToken('register')
//     }
    
//     console.log('Registration successful:', responseData.user.email)
//     console.log('Total users after registration:', mockUsersDB.length)
//     return responseData
//   },

//   logout: async () => {
//     console.log('Logout called')
//     await new Promise(resolve => setTimeout(resolve, 300))
    
//     // Clear auth localStorage but keep user database
//     const userBefore = localStorage.getItem('user')
//     const tokenBefore = localStorage.getItem('token')
//     console.log('Before logout - User:', userBefore, 'Token:', tokenBefore)
    
//     return { success: true }
//   },

//   getProfile: async () => {
//     const token = localStorage.getItem('token')
//     console.log('GetProfile - Token from localStorage:', token)
    
//     if (!token) {
//       console.log('GetProfile failed: No token found')
//       throw new Error('No token found')
//     }
    
//     // Mock response
//     await new Promise(resolve => setTimeout(resolve, 500))
    
//     const userFromStorage = localStorage.getItem('user')
//     console.log('GetProfile - User from localStorage:', userFromStorage)
    
//     if (userFromStorage) {
//       const userData = JSON.parse(userFromStorage)
      
//       // Try to get full user data from mock DB
//       const fullUser = mockUsersDB.find(u => u.id === userData.id)
//       if (fullUser) {
//         const { password, ...userWithoutPassword } = fullUser
//         return { user: userWithoutPassword }
//       }
      
//       return {
//         user: {
//           ...userData,
//           phone: userData.phone || '+91 9876543210',
//           address: userData.address || '123 Main Street, Mumbai'
//         }
//       }
//     }
    
//     // Fallback mock data
//     return {
//       user: {
//         id: 1,
//         name: 'John Doe',
//         email: 'test@example.com',
//         phone: '+91 9876543210',
//         address: '123 Main Street, Mumbai'
//       }
//     }
//   },

//   updateProfile: async (userData) => {
//     console.log('UpdateProfile called with:', userData)
    
//     const token = localStorage.getItem('token')
//     if (!token) {
//       throw new Error('No token found')
//     }
    
//     await new Promise(resolve => setTimeout(resolve, 800))
    
//     // Get current user from localStorage
//     const currentUser = JSON.parse(localStorage.getItem('user') || '{}')
    
//     // Update in mock database
//     const userIndex = mockUsersDB.findIndex(u => u.id === currentUser.id)
//     if (userIndex !== -1) {
//       mockUsersDB[userIndex] = {
//         ...mockUsersDB[userIndex],
//         ...userData,
//         updatedAt: new Date().toISOString()
//       }
//       saveUsersToStorage()
//     }
    
//     const updatedUser = {
//       ...currentUser,
//       ...userData,
//       id: currentUser.id || 1,
//       updatedAt: new Date().toISOString()
//     }
    
//     console.log('UpdateProfile - Updated user:', updatedUser)
    
//     return {
//       user: updatedUser
//     }
//   },

//   // Helper method to check auth status
//   checkAuth: () => {
//     const user = localStorage.getItem('user')
//     const token = localStorage.getItem('token')
    
//     console.log('CheckAuth - User:', user)
//     console.log('CheckAuth - Token:', token)
//     console.log('CheckAuth - Is authenticated:', !!(user && token))
    
//     return !!(user && token)
//   },

//   // Helper method to get current user
//   getCurrentUser: () => {
//     try {
//       const user = localStorage.getItem('user')
//       return user ? JSON.parse(user) : null
//     } catch (error) {
//       console.error('Error parsing user from localStorage:', error)
//       return null
//     }
//   },

//   // Helper method to get token
//   getToken: () => {
//     return localStorage.getItem('token')
//   },

//   // Clear all auth data
//   clearAuthData: () => {
//     console.log('Clearing auth data from localStorage')
//     localStorage.removeItem('user')
//     localStorage.removeItem('token')
//     localStorage.removeItem('auth_expiry')
//     localStorage.removeItem('userRole')
//   },

//   // Set auth data
//   setAuthData: (user, token) => {
//     console.log('Setting auth data:', { user, token })
//     localStorage.setItem('user', JSON.stringify(user))
//     localStorage.setItem('token', token)
//     localStorage.setItem('userRole', user?.role || 'user')
//     localStorage.setItem('auth_expiry', Date.now() + 24 * 60 * 60 * 1000) // 24 hours
//   },

//   // Debug method to see all users
//   getAllUsers: () => {
//     console.log('All users in mock DB:', mockUsersDB.map(u => ({ 
//       id: u.id, 
//       email: u.email, 
//       role: u.role, 
//       name: u.name 
//     })))
//     return mockUsersDB
//   },

//   // Reset mock database (for testing)
//   resetMockDB: () => {
//     mockUsersDB = []
//     localStorage.removeItem('mockUsersDB')
//     console.log('Mock DB reset')
//   },

//   // Add demo users (for testing)
//   addDemoUsers: () => {
//     // Clear any existing demo users
//     mockUsersDB = mockUsersDB.filter(user => 
//       user.email !== 'admin@anandpharma.com' && 
//       user.email !== 'pharmacy@anandpharma.com'
//     )
    
//     // Add demo admin
//     mockUsersDB.push({
//       id: 1001,
//       name: 'Admin User',
//       email: 'admin@anandpharma.com',
//       password: 'admin123',
//       phone: '+91 9999999999',
//       role: 'admin',
//       createdAt: new Date().toISOString()
//     })
    
//     // Add demo pharmacy
//     mockUsersDB.push({
//       id: 1002,
//       name: 'Pharmacy Owner',
//       email: 'pharmacy@anandpharma.com',
//       password: 'pharmacy123',
//       phone: '+91 8888888888',
//       role: 'pharmacy',
//       createdAt: new Date().toISOString()
//     })
    
//     saveUsersToStorage()
//     console.log('Demo users added successfully')
//     return mockUsersDB
//   }
// }

// // Add auto-clear for expired tokens
// const checkTokenExpiry = () => {
//   const expiry = localStorage.getItem('auth_expiry')
//   if (expiry && Date.now() > parseInt(expiry)) {
//     console.log('Token expired, clearing auth data')
//     authService.clearAuthData()
//   }
// }

// // Run expiry check on service load
// checkTokenExpiry()

// // Force add demo users on service load (for testing)
// authService.addDemoUsers()

// export default authService











































import axios from '../../app/config/axios.js'

// Helper function to generate unique tokens
const generateToken = (prefix = 'mock-jwt-token') => {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
}

// Mock database for users (simulating backend)
let mockUsersDB = []

// Initialize with demo users
const initializeMockDB = () => {
  try {
    // Try to load users from localStorage
    const storedUsers = localStorage.getItem('mockUsersDB')
    if (storedUsers) {
      mockUsersDB = JSON.parse(storedUsers)
      console.log('📦 Loaded users from localStorage:', mockUsersDB.length)
    }
    
    // Demo Customer User - Use the EXACT credentials from your login page
    const customerExists = mockUsersDB.some(user => user.email === 'customer@dppharma.com')
    if (!customerExists) {
      mockUsersDB.push({
        id: 1000,
        name: 'Demo Customer',
        email: 'customer@dppharma.com',
        password: 'customer123', // EXACTLY as shown in login page
        phone: '+91 7777777777',
        role: 'customer',
        address: 'Mumbai, India',
        createdAt: new Date().toISOString()
      })
      console.log('✅ Added demo customer user')
    }
    
    // Demo Admin User - Fixed email domain to match login page
    const adminExists = mockUsersDB.some(user => user.email === 'admin@dppharma.com')
    if (!adminExists) {
      mockUsersDB.push({
        id: 1001,
        name: 'Website Admin',
        email: 'admin@dppharma.com', // Changed domain to match login page
        password: 'admin123', // EXACTLY as shown in login page
        phone: '+91 9999999999',
        role: 'admin',
        createdAt: new Date().toISOString()
      })
      console.log('✅ Added demo admin user')
    }
    
    // Demo Pharmacy User - Fixed email domain to match login page
    const pharmacyExists = mockUsersDB.some(user => user.email === 'pharmacy@dppharma.com')
    if (!pharmacyExists) {
      mockUsersDB.push({
        id: 1002,
        name: 'Pharmacy Owner',
        email: 'pharmacy@dppharma.com', // Changed domain to match login page
        password: 'pharmacy123', // EXACTLY as shown in login page
        phone: '+91 8888888888',
        role: 'pharmacy',
        createdAt: new Date().toISOString()
      })
      console.log('✅ Added demo pharmacy user')
    }
    
    // Add default test user
    const defaultUserExists = mockUsersDB.some(user => user.email === 'test@example.com')
    if (!defaultUserExists) {
      mockUsersDB.push({
        id: 1,
        name: 'John Doe',
        email: 'test@example.com',
        password: 'password',
        phone: '+91 9876543210',
        role: 'customer',
        address: '123 Main Street, Mumbai',
        createdAt: new Date().toISOString()
      })
      console.log('✅ Added default test user')
    }
    
    // Save updated database
    saveUsersToStorage()
    
  } catch (error) {
    console.error('❌ Error initializing mock DB:', error)
    mockUsersDB = []
  }
}

// Initialize the mock database
initializeMockDB()

// Save users to localStorage
const saveUsersToStorage = () => {
  try {
    localStorage.setItem('mockUsersDB', JSON.stringify(mockUsersDB))
    console.log('💾 Saved users to storage:', mockUsersDB.length)
  } catch (error) {
    console.error('❌ Error saving users to localStorage:', error)
  }
}

// Mock API service
const authService = {
  login: async (credentials) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500))
    
    console.log('🔑 Login attempt for:', credentials.email)
    console.log('📊 Available users in DB:', mockUsersDB.map(u => ({ 
      email: u.email, 
      role: u.role,
      passwordMatch: u.password === credentials.password ? '✓' : '✗'
    })))
    
    // Check if user exists in mock database
    const user = mockUsersDB.find(u => 
      u.email.toLowerCase() === credentials.email.toLowerCase() && 
      u.password === credentials.password
    )
    
    if (user) {
      // Don't send password in response
      const { password, ...userWithoutPassword } = user
      
      const responseData = {
        user: userWithoutPassword,
        token: generateToken('login')
      }
      
      console.log('✅ Login successful:', { 
        email: responseData.user.email, 
        role: responseData.user.role,
        name: responseData.user.name 
      })
      return responseData
    } else {
      console.log('❌ Login failed: Invalid credentials')
      console.log('💡 Debug: Email provided:', credentials.email)
      console.log('💡 Debug: Password provided:', credentials.password)
      throw new Error('Invalid email or password. Please check your credentials.')
    }
  },

  register: async (userData) => {
    await new Promise(resolve => setTimeout(resolve, 800))
    
    console.log('📝 Register attempt for:', userData.email)
    console.log('📊 Current users in DB:', mockUsersDB.map(u => u.email))
    
    // Check if user already exists
    const userExists = mockUsersDB.some(u => 
      u.email.toLowerCase() === userData.email.toLowerCase()
    )
    if (userExists) {
      console.log('❌ Registration failed: User already exists')
      throw new Error('User with this email already exists')
    }
    
    // Generate unique ID
    const timestamp = Date.now()
    const newUser = {
      id: timestamp,
      name: userData.name || 'New User',
      email: userData.email,
      password: userData.password,
      phone: userData.phone || '',
      role: userData.role || 'customer', // Default to 'customer'
      address: userData.address || '',
      createdAt: new Date().toISOString()
    }
    
    // Add to mock database
    mockUsersDB.push(newUser)
    saveUsersToStorage()
    
    // Don't send password in response
    const { password, ...userWithoutPassword } = newUser
    
    const responseData = {
      user: userWithoutPassword,
      token: generateToken('register')
    }
    
    console.log('✅ Registration successful:', responseData.user.email)
    console.log('📊 Total users after registration:', mockUsersDB.length)
    return responseData
  },

  logout: async () => {
    console.log('🚪 Logout called')
    await new Promise(resolve => setTimeout(resolve, 300))
    
    // Clear auth localStorage but keep user database
    const userBefore = localStorage.getItem('user')
    const tokenBefore = localStorage.getItem('token')
    console.log('📊 Before logout - User:', userBefore, 'Token:', tokenBefore)
    
    return { success: true }
  },

  getProfile: async () => {
    const token = localStorage.getItem('token')
    console.log('👤 GetProfile - Token from localStorage:', token)
    
    if (!token) {
      console.log('❌ GetProfile failed: No token found')
      throw new Error('No token found')
    }
    
    // Mock response
    await new Promise(resolve => setTimeout(resolve, 500))
    
    const userFromStorage = localStorage.getItem('user')
    console.log('👤 GetProfile - User from localStorage:', userFromStorage)
    
    if (userFromStorage) {
      try {
        const userData = JSON.parse(userFromStorage)
        
        // Try to get full user data from mock DB
        const fullUser = mockUsersDB.find(u => u.id === userData.id)
        if (fullUser) {
          const { password, ...userWithoutPassword } = fullUser
          return { user: userWithoutPassword }
        }
        
        // Return user from localStorage
        return {
          user: {
            ...userData,
            phone: userData.phone || '+91 9876543210',
            address: userData.address || '123 Main Street, Mumbai'
          }
        }
      } catch (error) {
        console.error('❌ Error parsing user data:', error)
      }
    }
    
    // Fallback to demo customer
    return {
      user: {
        id: 1000,
        name: 'Demo Customer',
        email: 'customer@dppharma.com',
        phone: '+91 7777777777',
        address: 'Mumbai, India',
        role: 'customer'
      }
    }
  },

  updateProfile: async (userData) => {
    console.log('✏️ UpdateProfile called with:', userData)
    
    const token = localStorage.getItem('token')
    if (!token) {
      throw new Error('No token found')
    }
    
    await new Promise(resolve => setTimeout(resolve, 800))
    
    // Get current user from localStorage
    const currentUser = JSON.parse(localStorage.getItem('user') || '{}')
    
    // Update in mock database
    const userIndex = mockUsersDB.findIndex(u => u.id === currentUser.id)
    if (userIndex !== -1) {
      mockUsersDB[userIndex] = {
        ...mockUsersDB[userIndex],
        ...userData,
        updatedAt: new Date().toISOString()
      }
      saveUsersToStorage()
    }
    
    const updatedUser = {
      ...currentUser,
      ...userData,
      id: currentUser.id || 1000,
      updatedAt: new Date().toISOString()
    }
    
    console.log('✅ UpdateProfile - Updated user:', updatedUser)
    
    return {
      user: updatedUser
    }
  },

  // Helper method to check auth status
  checkAuth: () => {
    const user = localStorage.getItem('user')
    const token = localStorage.getItem('token')
    
    console.log('🔍 CheckAuth - User:', user)
    console.log('🔍 CheckAuth - Token:', token)
    console.log('🔍 CheckAuth - Is authenticated:', !!(user && token))
    
    return !!(user && token)
  },

  // Helper method to get current user
  getCurrentUser: () => {
    try {
      const user = localStorage.getItem('user')
      return user ? JSON.parse(user) : null
    } catch (error) {
      console.error('❌ Error parsing user from localStorage:', error)
      return null
    }
  },

  // Helper method to get token
  getToken: () => {
    return localStorage.getItem('token')
  },

  // Clear all auth data
  clearAuthData: () => {
    console.log('🧹 Clearing auth data from localStorage')
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    localStorage.removeItem('auth_expiry')
    localStorage.removeItem('userRole')
  },

  // Set auth data
  setAuthData: (user, token) => {
    console.log('💾 Setting auth data:', { user: user.email, token: token ? 'present' : 'missing' })
    localStorage.setItem('user', JSON.stringify(user))
    localStorage.setItem('token', token)
    localStorage.setItem('userRole', user?.role || 'customer')
    localStorage.setItem('auth_expiry', Date.now() + 24 * 60 * 60 * 1000) // 24 hours
  },

  // Debug method to see all users
  getAllUsers: () => {
    console.log('📊 All users in mock DB:', mockUsersDB.map(u => ({ 
      id: u.id, 
      email: u.email, 
      role: u.role, 
      name: u.name,
      password: u.password
    })))
    return mockUsersDB
  },

  // Reset mock database (for testing)
  resetMockDB: () => {
    mockUsersDB = []
    localStorage.removeItem('mockUsersDB')
    console.log('🔄 Mock DB reset')
  },

  // Add demo users (for testing)
  addDemoUsers: () => {
    // Clear any existing demo users
    mockUsersDB = mockUsersDB.filter(user => 
      user.email !== 'customer@dppharma.com' && 
      user.email !== 'admin@dppharma.com' &&
      user.email !== 'pharmacy@dppharma.com'
    )
    
    // Add demo customer (PRIMARY USER)
    mockUsersDB.push({
      id: 1000,
      name: 'Demo Customer',
      email: 'customer@dppharma.com',
      password: 'customer123',
      phone: '+91 7777777777',
      role: 'customer',
      address: 'Mumbai, India',
      createdAt: new Date().toISOString()
    })
    
    // Add demo admin
    mockUsersDB.push({
      id: 1001,
      name: 'Website Admin',
      email: 'admin@dppharma.com',
      password: 'admin123',
      phone: '+91 9999999999',
      role: 'admin',
      createdAt: new Date().toISOString()
    })
    
    // Add demo pharmacy
    mockUsersDB.push({
      id: 1002,
      name: 'Pharmacy Owner',
      email: 'pharmacy@dppharma.com',
      password: 'pharmacy123',
      phone: '+91 8888888888',
      role: 'pharmacy',
      createdAt: new Date().toISOString()
    })
    
    saveUsersToStorage()
    console.log('✅ Demo users added successfully')
    console.log('📊 Available demo credentials:')
    console.log('  Customer: customer@dppharma.com / customer123')
    console.log('  Admin: admin@dppharma.com / admin123')
    console.log('  Pharmacy: pharmacy@dppharma.com / pharmacy123')
    return mockUsersDB
  },

  // Test login function
  testLogin: (email, password) => {
    return mockUsersDB.some(u => 
      u.email === email && 
      u.password === password
    )
  }
}

// Add auto-clear for expired tokens
const checkTokenExpiry = () => {
  const expiry = localStorage.getItem('auth_expiry')
  if (expiry && Date.now() > parseInt(expiry)) {
    console.log('⚠️ Token expired, clearing auth data')
    authService.clearAuthData()
  }
}

// Run expiry check on service load
checkTokenExpiry()

// Force add demo users on service load
setTimeout(() => {
  authService.addDemoUsers()
  console.log('🚀 Demo users ready! Use:')
  console.log('   customer@dppharma.com / customer123')
  console.log('   admin@dppharma.com / admin123')
  console.log('   pharmacy@dppharma.com / pharmacy123')
}, 100)

export default authService