import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProtectedRoute = ({ 
  children, 
  requiredRole = null, 
  redirectTo = '/login' 
}) => {
  const { isAuthenticated, role } = useSelector(state => state.auth)
  
  if (!isAuthenticated) {
    return <Navigate to={redirectTo} replace />
  }
  
  if (requiredRole && role !== requiredRole) {
    // If user has a different role, redirect to their dashboard
    if (role === 'admin') {
      return <Navigate to="/admin/dashboard" replace />
    } else if (role === 'pharmacy') {
      return <Navigate to="/pharmacy/dashboard" replace />
    }
    return <Navigate to="/" replace />
  }
  
  return children
}

export default ProtectedRoute