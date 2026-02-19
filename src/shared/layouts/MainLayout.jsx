import React from 'react'
import Header from '../components/Header/Header.jsx'
import Footer from '../components/Header/Footer.jsx'

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20"> {/* pt-24 to account for fixed header */}
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout