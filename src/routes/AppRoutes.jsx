import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

// Pages
import LandingPage from '../pages/LandingPage.jsx'
import About from '../pages/About.jsx'
import ContactPage from '../pages/ContactPage.jsx'
import TrackOrder from '../pages/TrackOrder.jsx'

// Auth
import Login from '../features/auth/pages/Login.jsx'
import Signup from '../features/auth/pages/Signup.jsx'

// Products
import ProductList from '../features/products/pages/ProductList.jsx'
import ProductDetail from '../features/products/pages/ProductDetail.jsx'

// Cart
import CartPage from '../features/cart/pages/CartPage.jsx'
import CheckoutPage from '../features/cart/pages/CheckoutPage.jsx'
import PrivacyPolicy from '../pages/PrivacyPolicy.jsx'
import TermsConditions from '../pages/TermsConditions.jsx'

// Admin Pages
import AdminDashboard from '../features/admin/pages/AdminDashboard.jsx'
import AdminProducts from '../features/admin/pages/AdminProducts.jsx'

// Pharmacy Pages
import PharmacyDashboard from '../features/pharmacy/pages/PharmacyDashboard.jsx'
import PharmacyInventory from '../features/pharmacy/pages/PharmacyInventory.jsx'

// Layouts (for dashboards)
import AdminLayout from '../shared/layouts/AdminLayout.jsx'
import PharmacyLayout from '../shared/layouts/PharmacyLayout.jsx'

// Protected Route
import ProtectedRoute from '../features/auth/pages/ProtectedRoute.jsx'
// import AdminDashboard from '../features/admin/pages/AdminDashboard.jsx'
// import AdminLayout from '../shared/layouts/AdminLayout.jsx'
import Order from '../features/admin/pages/Order.jsx'
import Prescription from '../features/admin/pages/Prescription.jsx'
import DeliveryNetwork from '../features/admin/pages/DeliveryNetwork.jsx'
import Users from '../features/admin/pages/Users.jsx'
import Finance from '../features/admin/pages/Finance.jsx'
import Marketing from '../features/admin/pages/Marketing.jsx'
import Pharmacies from '../features/admin/pages/Pharmacies.jsx'
import Setting from '../features/admin/pages/Setting.jsx'


import Orders from '../features/pharmacy/pages/Orders.jsx'
import ProductsManagement from '../features/pharmacy/pages/ProductsManagement.jsx'
import Delivery from '../features/pharmacy/pages/Delivery.jsx'
import Reports from '../features/pharmacy/pages/Reports.jsx'
import Profile from '../features/pharmacy/pages/Profile.jsx'
import Settings from '../features/pharmacy/pages/Settings.jsx'
import ReportsAnalytics from '../features/admin/pages/ReportsAnalytics.jsx'
import MyOrders from '../pages/MyOrders.jsx'
import MyWishlist from '../pages/MyWishlist.jsx'
import AccountSettings from '../pages/AccountSettings.jsx'

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes (automatically wrapped with MainLayout from App.jsx) */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/login" element={<Login />} />
      <Route path='/register' element={<Signup />} />
      <Route path='/privacy' element={<PrivacyPolicy />} />
      <Route path='/terms' element={<TermsConditions />} />
      <Route path="my-orders" element={<MyOrders />} />
      <Route path="my-wishlist" element={<MyWishlist />} />
      <Route path='account-settings' element={<AccountSettings />} />
      
      {/* Products */}
      <Route path="/products" element={<ProductList />} />
      <Route path="/products/:category" element={<ProductList />} />
      <Route path="/product/:productId" element={<ProductDetail />} />
      <Route path="/product" element={<Navigate to="/products" replace />} />
      
      {/* Cart & Checkout */}
      <Route path="/cart" element={<CartPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      
      {/* Order Tracking */}
      <Route path="/track-order" element={<TrackOrder />} />
      <Route path="/track-order/:orderId" element={<TrackOrder />} />
      
      {/* ========== ADMIN ROUTES (with AdminLayout) ========== */}
      <Route path="/admin" element={
        <ProtectedRoute requiredRole="admin">
          <AdminLayout />
        </ProtectedRoute>
      }>
        <Route index element={<Navigate to="/admin/dashboard" replace />} />
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="products" element={<AdminProducts />} />
        <Route path="order" element={<Order/>} />
        <Route path="prescription" element={<Prescription />} />
        <Route path="pharmacies" element={<Pharmacies />} />
        <Route path="delivery" element={<DeliveryNetwork />} />
        <Route path="users" element={<Users/>} />
        <Route path="finance" element={<Finance/>} />
        <Route path="marketing" element={<Marketing/>} />
        <Route path="analytics" element={<ReportsAnalytics/>} />
        {/* <Route path="reports" element={<div className="p-6">Reports - Coming Soon</div>} /> */}
        <Route path="setting" element={<Setting/>} />
        
      </Route>
      {/* ========== PHARMACY ROUTES (with PharmacyLayout) ========== */}
        <Route path="/pharmacy" element={
          <ProtectedRoute requiredRole="pharmacy">
            <PharmacyLayout />
          </ProtectedRoute>
        }>
          <Route index element={<Navigate to="/pharmacy/dashboard" replace />} />
          <Route path="dashboard" element={<PharmacyDashboard />} />
          <Route path="Products" element={<ProductsManagement />} />
          <Route path="orders" element={<Orders />} />
          <Route path="delivery" element={<Delivery />} />
          <Route path="reports" element={<Reports />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      
      {/* Redirects */}
      <Route path="/home" element={<Navigate to="/" replace />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default AppRoutes