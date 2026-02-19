import React from 'react'
import { FaFacebook, FaInstagram,  FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Footer = () => {
  const footerLinks = [
    {
      title: "Shop",
      links: [
        { name: "Medicines", url: "/products" },
        { name: "Baby Care", url: "/categories/baby-care" },
        { name: "Cardiac Care", url: "/categories/cardiac-care" },
        { name: "Stomach Care", url: "/categories/stomach-care" },
        { name: "Health Blog", url: "/health-blog" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Customer Care", url: "/contact" },
        { name: "Order Tracking", url: "/track-order" },
        { name: "Returns & Refunds", url: "/returns" },
        { name: "Prescription Help", url: "/prescription" },
        { name: "Shipping Info", url: "/shipping" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", url: "/about" },
        { name: "Contact Us", url: "/contact" },
        { name: "Terms & Conditions", url: "/terms" },
        { name: "Privacy Policy", url: "/privacy" },
        { name: "FAQs", url: "/faqs" }
      ]
    }
  ]

  return (
    <footer className="bg-gradient-to-r from-[#0D5E75] to-[#0B4B60] text-white px-4 pt-12">
      <div className="max-w-7xl mx-auto">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-10">

          {/* BRAND SECTION */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">

              {/* Logo */}
              <div className="w-12 h-12 md:w-16 md:h-16">
                <img
                  src="/logo.jpeg"
                  alt="Logo"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.onerror = null
                    e.target.src = "https://ui-avatars.com/api/?name=AP&background=3B82F6&color=fff"
                  }}
                />
              </div>

              {/* Brand Name */}
              <div>
                <h2 className="text-xl md:text-2xl font-bold">
                  <span className="">DP </span> Pharma
                </h2>
                <p className="text-sm text-white/70">Trusted Healthcare Partner</p>
              </div>
            </div>

            <p className="text-white/80 max-w-md mb-6">
              DP  Pharma delivers genuine medicines to your doorstep within 15–30 minutes. Your health, our priority.
            </p>

            {/* CONTACT INFO */}
            <div className="space-y-2 text-sm text-white/80">
              <p className="flex items-center gap-2"><FaPhoneAlt /> 1800-123-4567</p>
              <p className="flex items-center gap-2"><FaEnvelope /> support@DP pharma.com</p>
              <p className="flex items-center gap-2"><FaMapMarkerAlt /> Mumbai, Maharashtra</p>
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex gap-3 mt-5">
              {[FaXTwitter, FaFacebook, FaInstagram, FaYoutube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-500 hover:scale-110 transition"
                >
                  <Icon className="text-lg" />
                </a>
              ))}
            </div>
          </div>

          {/* LINKS */}
          {footerLinks.map((section, idx) => (
            <div key={idx}>
              <h4 className="font-bold text-lg mb-4 text-blue-300">{section.title}</h4>
              <ul className="space-y-3 text-white/80">
                {section.links.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.url}
                      className="hover:text-blue-300 transition text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/20 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <div className="text-center md:text-left">
            <p className="text-white/70 text-sm">
              © {new Date().getFullYear()} DP Pharma. All Rights Reserved.
            </p>
            <p className="text-white/50 text-xs">
              Licensed Pharmacy • DL No: AP123456 • GSTIN: 29AABCU9603R1ZX
            </p>
          </div>

          <div className="flex gap-4 text-sm">
            <Link to="/privacy" className="hover:text-blue-300 transition">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-blue-300 transition">Terms</Link>
            <Link to="/contact" className="hover:text-blue-300 transition">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
