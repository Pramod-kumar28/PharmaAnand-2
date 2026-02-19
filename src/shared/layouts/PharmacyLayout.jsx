// import React from 'react'
// import { NavLink } from 'react-router-dom'
// import DashboardLayout from './DashboardLayout'
// import {
//   FaHome,
//   FaPills,
//   FaClipboardList,
//   FaTruck,
//   FaChartLine,
//   FaUserMd,
//   FaFilePrescription,
//   FaBoxOpen,
//   FaBell
// } from 'react-icons/fa'

// const PharmacyLayout = ({ children }) => {
//   const navItems = [
//     { name: 'Dashboard', path: '/pharmacy/dashboard', icon: FaHome },
//     { name: 'Inventory', path: '/pharmacy/inventory', icon: FaPills },
//     { name: 'Orders', path: '/pharmacy/orders', icon: FaClipboardList },
//     { name: 'Prescriptions', path: '/pharmacy/prescriptions', icon: FaFilePrescription },
//     { name: 'Dispatch', path: '/pharmacy/dispatch', icon: FaTruck },
//     { name: 'Sales', path: '/pharmacy/sales', icon: FaChartLine },
//     { name: 'Customers', path: '/pharmacy/customers', icon: FaUserMd },
//     { name: 'Stock Alerts', path: '/pharmacy/alerts', icon: FaBell },
//   ]

//   const sidebarContent = (
//     <nav className="space-y-1 px-2">
//       {navItems.map((item) => (
//         <NavLink
//           key={item.name}
//           to={item.path}
//           end={item.path === '/pharmacy/dashboard'}
//           className={({ isActive }) =>
//             `flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
//               isActive
//                 ? 'bg-blue-50 text-blue-700'
//                 : 'text-gray-700 hover:bg-gray-100'
//             }`
//           }
//         >
//           <item.icon className={`mr-3 h-5 w-5 ${
//             window.location.pathname === item.path ? 'text-blue-600' : 'text-gray-500'
//           }`} />
//           {item.name}
//         </NavLink>
//       ))}
//     </nav>
//   )

//   return (
//     <DashboardLayout sidebarContent={sidebarContent} role="pharmacy">
//       {children}
//     </DashboardLayout>
//   )
// }

// export default PharmacyLayout






























import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import DashboardLayout from './DashboardLayout'
import {
  FaHome,
  FaPills,
  FaClipboardList,
  FaTruck,
  FaChartLine,
  FaUser,
  FaCog
} from 'react-icons/fa'

const PharmacyLayout = ({ children }) => {
  const location = useLocation()
  
  const navItems = [
    { name: 'Dashboard', path: '/pharmacy/dashboard', icon: FaHome },
    { name: 'Products Management', path: '/pharmacy/products', icon: FaPills },
    { name: 'Orders', path: '/pharmacy/orders', icon: FaClipboardList },
    { name: 'Delivery', path: '/pharmacy/delivery', icon: FaTruck },
    { name: 'Reports', path: '/pharmacy/reports', icon: FaChartLine },
    { name: 'Profile', path: '/pharmacy/profile', icon: FaUser },
    { name: 'Settings', path: '/pharmacy/settings', icon: FaCog },
  ]

  const sidebarContent = (
    <nav className="space-y-1 px-2">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path || 
          (item.path === '/pharmacy/dashboard' && location.pathname === '/pharmacy')
        
        return (
          <NavLink
            key={item.name}
            to={item.path}
            className={`flex items-center px-3 py-3 text-sm font-medium rounded-lg transition-colors ${
              isActive
                ? 'bg-blue-50 text-blue-700'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <item.icon className={`mr-3 h-5 w-5 ${
              isActive ? 'text-blue-600' : 'text-gray-500'
            }`} />
            {item.name}
          </NavLink>
        )
      })}
    </nav>
  )

  return (
    <DashboardLayout sidebarContent={sidebarContent} role="pharmacy">
      {children}
    </DashboardLayout>
  )
}

export default PharmacyLayout