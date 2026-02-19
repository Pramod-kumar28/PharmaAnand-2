import React from 'react'
import { NavLink } from 'react-router-dom'
import DashboardLayout from './DashboardLayout'
import {
  FaHome,
  FaCube,
  FaShoppingCart,
  FaUsers,
  FaChartBar,
  FaCog,
  FaFileInvoice,
  FaStore,
  FaTruck,
  FaMoneyBillWave,
  FaBullhorn,
  FaNotesMedical
} from 'react-icons/fa'

const AdminLayout = ({ children }) => {
  const navItems = [
    { name: 'Dashboard', path: '/admin/dashboard', icon: FaHome },

    // Pharmacy Network
    { name: 'Pharmacies', path: '/admin/pharmacies', icon: FaStore },

    // Products & Pricing
    { name: 'Products', path: '/admin/products', icon: FaCube },

    // Orders System
    { name: 'Order', path: '/admin/order', icon: FaShoppingCart },
    { name: 'Prescription', path: '/admin/prescription', icon: FaNotesMedical },

    // Delivery & Riders
    { name: 'Delivery Network', path: '/admin/delivery', icon: FaTruck },

    // Users & Platform
    { name: 'Users', path: '/admin/users', icon: FaUsers },

    // Business & Growth
    { name: 'Finance', path: '/admin/finance', icon: FaMoneyBillWave },
    { name: 'Marketing', path: '/admin/marketing', icon: FaBullhorn },

    // Analytics & Reports
    { name: 'Reports & Analytics', path: '/admin/analytics', icon: FaChartBar },
    // { name: 'Reports', path: '/admin/reports', icon: FaFileInvoice },

    // System
    { name: 'Settings', path: '/admin/setting', icon: FaCog },
  ]

 const sidebarContent = (
  <div className="h-full overflow-y-auto sidebar-scroll">
    <nav className="space-y-1 px-2">

      {navItems.map((item) => (
        <NavLink
          key={item.name}
          to={item.path}
          end={item.path === '/admin/dashboard'}
          className={({ isActive }) =>
            `flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
              isActive
                ? 'bg-blue-50 text-blue-700'
                : 'text-gray-700 hover:bg-gray-100'
            }`
          }
        >
          <item.icon
            className={`mr-3 h-5 w-5 ${
              window.location.pathname === item.path
                ? 'text-blue-600'
                : 'text-gray-500'
            }`}
          />
          {item.name}
        </NavLink>
      ))}
    </nav>
  </div>
  )

  return (
    <DashboardLayout sidebarContent={sidebarContent} role="admin">
      {children}
    </DashboardLayout>
  )
}

export default AdminLayout
