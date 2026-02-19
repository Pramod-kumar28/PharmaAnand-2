// import React from 'react'
// import AppRoutes from './routes/AppRoutes.jsx'
// import MainLayout from './shared/layouts/MainLayout.jsx'
// import ScrollToTop from './pages/ScrollToTop.jsx'

// function App() {
//   return (
//     <MainLayout>
//       <ScrollToTop />
//       <AppRoutes />
//     </MainLayout>
//   )
// }

// export default App



















// App.jsx - UPDATED VERSION
import React from 'react'
import AppRoutes from './routes/AppRoutes.jsx'
import MainLayout from './shared/layouts/MainLayout.jsx'
import { useLocation } from 'react-router-dom'
import ScrollToTop from './pages/ScrollToTop.jsx'

function App() {
  const location = useLocation()
  
  // Don't wrap login/register/dashboard routes with MainLayout
  const isDashboardPage = location.pathname.startsWith('/admin') || location.pathname.startsWith('/pharmacy')
  
  // If it's an auth page or dashboard page, don't use MainLayout
  if (isDashboardPage) {
    return <>
      <ScrollToTop />
      <AppRoutes />
    </>
  }
  
  // For all other pages, use MainLayout
  return (
    <MainLayout>
      <ScrollToTop />
      <AppRoutes />
    </MainLayout>
  )
}

export default App