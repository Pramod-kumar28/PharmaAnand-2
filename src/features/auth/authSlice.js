// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// import authService from './authService.js'

// // Async thunks
// export const login = createAsyncThunk(
//   'auth/login',
//   async (credentials, thunkAPI) => {
//     try {
//       return await authService.login(credentials)
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.response?.data || error.message)
//     }
//   }
// )

// export const register = createAsyncThunk(
//   'auth/register',
//   async (userData, thunkAPI) => {
//     try {
//       return await authService.register(userData)
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.response?.data || error.message)
//     }
//   }
// )

// export const logout = createAsyncThunk(
//   'auth/logout',
//   async (_, thunkAPI) => {
//     try {
//       return await authService.logout()
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.response?.data || error.message)
//     }
//   }
// )

// // Get user from localStorage
// const user = JSON.parse(localStorage.getItem('user'))
// const token = localStorage.getItem('token')

// const initialState = {
//   user: user || null,
//   token: token || null,
//   loading: false,
//   error: null,
//   isAuthenticated: !!(user && token)
// }

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     clearError: (state) => {
//       state.error = null
//     },
//     resetAuth: (state) => {
//       state.user = null
//       state.token = null
//       state.isAuthenticated = false
//       localStorage.removeItem('user')
//       localStorage.removeItem('token')
//     }
//   },
//   extraReducers: (builder) => {
//     builder
//       // Login
//       .addCase(login.pending, (state) => {
//         state.loading = true
//         state.error = null
//       })
//       .addCase(login.fulfilled, (state, action) => {
//         state.loading = false
//         state.user = action.payload.user
//         state.token = action.payload.token
//         state.isAuthenticated = true
//         localStorage.setItem('user', JSON.stringify(action.payload.user))
//         localStorage.setItem('token', action.payload.token)
//       })
//       .addCase(login.rejected, (state, action) => {
//         state.loading = false
//         state.error = action.payload
//         state.isAuthenticated = false
//       })
      
//       // Register
//       .addCase(register.pending, (state) => {
//         state.loading = true
//         state.error = null
//       })
//       .addCase(register.fulfilled, (state, action) => {
//         state.loading = false
//         state.user = action.payload.user
//         state.token = action.payload.token
//         state.isAuthenticated = true
//         localStorage.setItem('user', JSON.stringify(action.payload.user))
//         localStorage.setItem('token', action.payload.token)
//       })
//       .addCase(register.rejected, (state, action) => {
//         state.loading = false
//         state.error = action.payload
//       })
      
//       // Logout
//       .addCase(logout.fulfilled, (state) => {
//         state.user = null
//         state.token = null
//         state.isAuthenticated = false
//         localStorage.removeItem('user')
//         localStorage.removeItem('token')
//       })
//   }
// })

// export const { clearError, resetAuth } = authSlice.actions
// export default authSlice.reducer




































// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// import authService from './authService.js'

// // Debug helper
// const debugLog = (action, data) => {
//   console.log(`🔐 [AUTH] ${action}:`, data)
//   console.log('🔐 [AUTH] localStorage user:', localStorage.getItem('user'))
//   console.log('🔐 [AUTH] localStorage token:', localStorage.getItem('token'))
// }

// // Async thunks
// export const login = createAsyncThunk(
//   'auth/login',
//   async (credentials, thunkAPI) => {
//     try {
//       debugLog('Login attempt', { email: credentials.email })
//       const response = await authService.login(credentials)
//       debugLog('Login success', response)
//       return response
//     } catch (error) {
//       debugLog('Login error', error.message)
//       return thunkAPI.rejectWithValue(error.message)
//     }
//   }
// )

// export const register = createAsyncThunk(
//   'auth/register',
//   async (userData, thunkAPI) => {
//     try {
//       debugLog('Register attempt', { email: userData.email })
//       const response = await authService.register(userData)
//       debugLog('Register success', response)
//       return response
//     } catch (error) {
//       debugLog('Register error', error.message)
//       return thunkAPI.rejectWithValue(error.message)
//     }
//   }
// )

// export const logout = createAsyncThunk(
//   'auth/logout',
//   async (_, thunkAPI) => {
//     try {
//       debugLog('Logout attempt', {})
//       const response = await authService.logout()
//       debugLog('Logout success', response)
//       return response
//     } catch (error) {
//       debugLog('Logout error', error.message)
//       return thunkAPI.rejectWithValue(error.message)
//     }
//   }
// )

// // Get user from localStorage with validation
// const getStoredUser = () => {
//   try {
//     const userStr = localStorage.getItem('user')
//     const token = localStorage.getItem('token')
    
//     if (!userStr || !token) {
//       debugLog('No stored auth data', { userStr, token })
//       return { user: null, token: null }
//     }
    
//     const user = JSON.parse(userStr)
//     debugLog('Loaded stored user', { user, token })
//     return { user, token }
//   } catch (error) {
//     console.error('Error parsing stored user:', error)
//     return { user: null, token: null }
//   }
// }

// const { user, token } = getStoredUser()

// const initialState = {
//   user: user,
//   token: token,
//   loading: false,
//   error: null,
//   isAuthenticated: !!(user && token)
// }

// debugLog('Initial auth state', initialState)

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     clearError: (state) => {
//       state.error = null
//     },
//     resetAuth: (state) => {
//       debugLog('Manual auth reset', {})
//       state.user = null
//       state.token = null
//       state.isAuthenticated = false
//       authService.clearAuthData()
//     },
//     // Add a sync action to check auth status
//     checkAuthStatus: (state) => {
//       const { user, token } = getStoredUser()
//       state.user = user
//       state.token = token
//       state.isAuthenticated = !!(user && token)
//       debugLog('Auth status checked', state)
//     }
//   },
//   extraReducers: (builder) => {
//     builder
//       // Login
//       .addCase(login.pending, (state) => {
//         state.loading = true
//         state.error = null
//       })
//       .addCase(login.fulfilled, (state, action) => {
//         state.loading = false
//         state.user = action.payload.user
//         state.token = action.payload.token
//         state.isAuthenticated = true
        
//         // Store in localStorage
//         localStorage.setItem('user', JSON.stringify(action.payload.user))
//         localStorage.setItem('token', action.payload.token)
//         localStorage.setItem('auth_expiry', Date.now() + 24 * 60 * 60 * 1000)
        
//         debugLog('Login state updated', state)
//       })
//       .addCase(login.rejected, (state, action) => {
//         state.loading = false
//         state.error = action.payload
//         state.isAuthenticated = false
//         debugLog('Login rejected', action.payload)
//       })
      
//       // Register
//       .addCase(register.pending, (state) => {
//         state.loading = true
//         state.error = null
//       })
//       .addCase(register.fulfilled, (state, action) => {
//         state.loading = false
//         state.user = action.payload.user
//         state.token = action.payload.token
//         state.isAuthenticated = true
        
//         // Store in localStorage
//         localStorage.setItem('user', JSON.stringify(action.payload.user))
//         localStorage.setItem('token', action.payload.token)
//         localStorage.setItem('auth_expiry', Date.now() + 24 * 60 * 60 * 1000)
        
//         debugLog('Register state updated', state)
//       })
//       .addCase(register.rejected, (state, action) => {
//         state.loading = false
//         state.error = action.payload
//         debugLog('Register rejected', action.payload)
//       })
      
//       // Logout
//       .addCase(logout.fulfilled, (state) => {
//         state.user = null
//         state.token = null
//         state.isAuthenticated = false
        
//         // Clear localStorage
//         authService.clearAuthData()
        
//         debugLog('Logout state updated', state)
//       })
//       .addCase(logout.rejected, (state, action) => {
//         debugLog('Logout rejected', action.payload)
//         // Still clear auth data even if logout API fails
//         state.user = null
//         state.token = null
//         state.isAuthenticated = false
//         authService.clearAuthData()
//       })
//   }
// })

// export const { clearError, resetAuth, checkAuthStatus } = authSlice.actions
// export default authSlice.reducer














































import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from './authService.js'

// Debug helper
const debugLog = (action, data) => {
  console.log(`🔐 [AUTH] ${action}:`, data)
  console.log('🔐 [AUTH] localStorage user:', localStorage.getItem('user'))
  console.log('🔐 [AUTH] localStorage token:', localStorage.getItem('token'))
}

// Helper function to get redirect path based on role
const getRedirectPath = (role) => {
  switch(role) {
    case 'admin':
      return '/admin/dashboard'
    case 'pharmacy':
      return '/pharmacy/dashboard'
    default:
      return '/'
  }
}

// Async thunks
export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      debugLog('Login attempt', { email: credentials.email })
      const response = await authService.login(credentials)
      debugLog('Login success', response)
      
      // Add redirect path to response
      const role = response.user?.role || 'customer'
      return {
        ...response,
        redirectPath: getRedirectPath(role)
      }
    } catch (error) {
      debugLog('Login error', error.message)
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

export const register = createAsyncThunk(
  'auth/register',
  async (userData, thunkAPI) => {
    try {
      debugLog('Register attempt', { email: userData.email })
      const response = await authService.register(userData)
      debugLog('Register success', response)
      
      // Add redirect path to response
      const role = response.user?.role || 'customer'
      return {
        ...response,
        redirectPath: getRedirectPath(role)
      }
    } catch (error) {
      debugLog('Register error', error.message)
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      debugLog('Logout attempt', {})
      const response = await authService.logout()
      debugLog('Logout success', response)
      return response
    } catch (error) {
      debugLog('Logout error', error.message)
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

// Get user from localStorage with validation
const getStoredUser = () => {
  try {
    const userStr = localStorage.getItem('user')
    const token = localStorage.getItem('token')
    
    if (!userStr || !token) {
      debugLog('No stored auth data', { userStr, token })
      return { user: null, token: null, role: null }
    }
    
    const user = JSON.parse(userStr)
    const role = user?.role || localStorage.getItem('userRole') || null
    debugLog('Loaded stored user', { user, token, role })
    return { user, token, role }
  } catch (error) {
    console.error('Error parsing stored user:', error)
    return { user: null, token: null, role: null }
  }
}

export const updateProfile = createAsyncThunk(
  'auth/updateProfile',
  async (userData, thunkAPI) => {
    try {
      const response = await authService.updateProfile(userData)
      return response
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

const { user, token, role } = getStoredUser()

const initialState = {
  user: user,
  token: token,
  role: role,
  loading: false,
  error: null,
  isAuthenticated: !!(user && token)
}

debugLog('Initial auth state', initialState)

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null
    },
    resetAuth: (state) => {
      debugLog('Manual auth reset', {})
      state.user = null
      state.token = null
      state.role = null
      state.isAuthenticated = false
      authService.clearAuthData()
    },
    // Add a sync action to check auth status
    checkAuthStatus: (state) => {
      const { user, token, role } = getStoredUser()
      state.user = user
      state.token = token
      state.role = role
      state.isAuthenticated = !!(user && token)
      debugLog('Auth status checked', state)
    },
    // Update user role
    updateUserRole: (state, action) => {
      state.role = action.payload
      localStorage.setItem('userRole', action.payload)
      
      // Update user object if it exists
      if (state.user) {
        state.user.role = action.payload
        localStorage.setItem('user', JSON.stringify(state.user))
      }
    }
  },
  extraReducers: (builder) => {
    builder
      // Login
      .addCase(login.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload.user
        state.token = action.payload.token
        state.role = action.payload.user?.role || 'customer'
        state.isAuthenticated = true
        
        // Store in localStorage
        localStorage.setItem('user', JSON.stringify(action.payload.user))
        localStorage.setItem('token', action.payload.token)
        localStorage.setItem('userRole', action.payload.user?.role || 'customer')
        localStorage.setItem('auth_expiry', Date.now() + 24 * 60 * 60 * 1000)
        
        debugLog('Login state updated', state)
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
        state.isAuthenticated = false
        state.role = null
        debugLog('Login rejected', action.payload)
      })
      
      // Register
      .addCase(register.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload.user
        state.token = action.payload.token
        state.role = action.payload.user?.role || 'customer'
        state.isAuthenticated = true
        
        // Store in localStorage
        localStorage.setItem('user', JSON.stringify(action.payload.user))
        localStorage.setItem('token', action.payload.token)
        localStorage.setItem('userRole', action.payload.user?.role || 'customer')
        localStorage.setItem('auth_expiry', Date.now() + 24 * 60 * 60 * 1000)
        
        debugLog('Register state updated', state)
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
        debugLog('Register rejected', action.payload)
      })
      
      // Logout
      .addCase(logout.fulfilled, (state) => {
        state.user = null
        state.token = null
        state.role = null
        state.isAuthenticated = false
        
        // Clear localStorage
        authService.clearAuthData()
        
        debugLog('Logout state updated', state)
      })

      // In extraReducers builder
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.user = action.payload.user
        
        // Update localStorage
        localStorage.setItem('user', JSON.stringify(action.payload.user))
        
        debugLog('Profile updated', state)
      })
      .addCase(updateProfile.rejected, (state, action) => {
        debugLog('Profile update failed', action.payload)
      })

      .addCase(logout.rejected, (state, action) => {
        debugLog('Logout rejected', action.payload)
        // Still clear auth data even if logout API fails
        state.user = null
        state.token = null
        state.role = null
        state.isAuthenticated = false
        authService.clearAuthData()
      })
  }
})

export const { 
  clearError, 
  resetAuth, 
  checkAuthStatus, 
  updateUserRole 
} = authSlice.actions

export default authSlice.reducer