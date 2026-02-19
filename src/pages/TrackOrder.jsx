import React, { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { FiPackage, FiBox, FiTruck, FiCheckCircle, FiMapPin, FiCalendar, FiCreditCard, FiHome, FiChevronLeft, FiDownload, FiPrinter } from "react-icons/fi"

const TrackOrder = () => {
  const { orderId } = useParams()
  const navigate = useNavigate()
  const [order, setOrder] = useState(null)
  const [loading, setLoading] = useState(true)

  const statusSteps = [
    { key: "confirmed", label: "Confirmed", icon: <FiCheckCircle />, description: "Order received" },
    { key: "packed", label: "Packed", icon: <FiBox />, description: "Items prepared" },
    { key: "shipped", label: "Shipped", icon: <FiTruck />, description: "In transit" },
    { key: "out_for_delivery", label: "Out for Delivery", icon: <FiPackage />, description: "On the way" },
    { key: "delivered", label: "Delivered", icon: <FiHome />, description: "Delivered" },
  ]

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || []
    const found = savedOrders.find((o) => o.id === orderId)
    setOrder(found || null)
    setLoading(false)
  }, [orderId])

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <div className="relative">
          <div className="h-12 w-12 rounded-full border-4 border-blue-100"></div>
          <div className="absolute top-0 left-0 h-12 w-12 rounded-full border-4 border-blue-500 border-t-transparent animate-spin"></div>
        </div>
        <p className="mt-4 text-gray-600 font-medium">Loading order details...</p>
      </div>
    )
  }

  if (!order) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
        <div className="bg-white rounded-xl shadow-sm p-6 max-w-sm w-full text-center">
          <div className="w-16 h-16 mx-auto rounded-full bg-red-100 flex items-center justify-center mb-4">
            <FiPackage className="text-2xl text-red-500" />
          </div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">Order Not Found</h2>
          <p className="text-gray-600 text-sm mb-6">The order you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate("/")}
            className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Go Back Home
          </button>
        </div>
      </div>
    )
  }

  const currentIndex = statusSteps.findIndex((s) => s.key === order.status)
  const progressPercent = ((currentIndex + 1) / statusSteps.length) * 100

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
            >
              <FiChevronLeft className="text-xl" />
              <span className="hidden sm:inline">Back</span>
            </button>
            <h1 className="text-lg font-semibold text-gray-800">Track Order</h1>
            <div className="w-8"></div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Order ID Banner */}
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <p className="text-sm text-blue-700 font-medium">Order ID</p>
              <p className="text-base font-mono font-bold text-gray-800 break-all">{order.id}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">Estimated Delivery</p>
              <p className="text-base font-semibold text-gray-800">{order.estimatedDelivery}</p>
            </div>
          </div>
        </div>

        {/* Progress Tracking Section */}
        <div className="bg-white rounded-xl shadow-sm p-5 mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-6">Delivery Progress</h2>
          
          <div className="relative px-2">
            <div className="absolute top-6 left-0 right-0 h-1.5 bg-gray-200 z-0">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progressPercent}%` }}
                transition={{ duration: 1 }}
                className="h-full bg-blue-500 rounded-full"
              />
            </div>

            <div className="relative flex justify-between mb-8">
              {statusSteps.map((step, index) => {
                const isActive = index <= currentIndex
                const isCurrent = index === currentIndex
                
                return (
                  <div key={step.key} className="relative z-10 flex flex-col items-center">
                    <div className="w-12 h-12 flex items-center justify-center">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300
                        ${isActive 
                          ? "bg-blue-500 border-blue-500 text-white" 
                          : "bg-white border-gray-300 text-gray-400"
                        }
                        ${isCurrent ? "ring-2 ring-blue-200 ring-offset-2 scale-110" : ""}
                      `}>
                        <div className="text-lg">
                          {step.icon}
                        </div>
                      </div>
                    </div>
                    
                    <div className="absolute top-14 w-20 text-center">
                      <p className={`text-xs font-medium ${isActive ? "text-gray-800" : "text-gray-500"}`}>
                        {step.label}
                      </p>
                      <p className="text-xs text-gray-500 mt-0.5 hidden sm:block">
                        {step.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="mt-20 p-4 bg-blue-50 rounded-lg border border-blue-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-blue-700 font-medium">Current Status</p>
                  <p className="text-lg font-semibold text-gray-800">
                    {statusSteps[currentIndex]?.label || "Processing"}
                  </p>
                </div>
                <div className="text-3xl animate-pulse">🚚</div>
              </div>
            </div>
          </div>
        </div>

        {/* Order & Shipping Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Order Details Card */}
          <div className="bg-white rounded-xl shadow-sm p-5">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <FiCreditCard className="text-blue-500" />
              Order Details
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600">Order Date</span>
                <span className="font-medium text-gray-800">{order.date}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600">Payment Method</span>
                <span className="font-medium text-gray-800">{order.paymentMethod}</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-800 font-semibold">Total Amount</span>
                <span className="text-xl font-bold text-blue-600">{order.total}</span>
              </div>
            </div>
          </div>

          {/* Shipping Address Card */}
          <div className="bg-white rounded-xl shadow-sm p-5">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <FiMapPin className="text-blue-500" />
              Shipping Address
            </h3>
            <div className="space-y-3">
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="font-semibold text-gray-800 mb-1">{order.shippingAddress.fullName}</p>
                <p className="text-gray-700 text-sm mb-2">{order.shippingAddress.address}</p>
                <p className="text-gray-700 text-sm">
                  {order.shippingAddress.city}, {order.shippingAddress.state} - {order.shippingAddress.pincode}
                </p>
                <div className="mt-3 pt-3 border-t border-gray-200">
                  <p className="text-gray-700 text-sm">
                    <span className="font-medium">Phone:</span> {order.shippingAddress.phone}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Receipt Actions */}
        <div className="bg-white rounded-xl shadow-sm p-5 mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <i className="fas fa-file-invoice text-blue-500"></i>
            Payment Receipt
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            Download or print your payment receipt for this order.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => window.print()}
              className="flex-1 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
              <FiDownload />
              Download PDF Receipt
            </button>
            <button
              onClick={() => window.print()}
              className="flex-1 py-3 bg-white border border-gray-300 text-gray-800 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
            >
              <FiPrinter />
              Print Receipt
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => navigate("/")}
            className="flex-1 py-3 bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-900 transition-colors flex items-center justify-center gap-2"
          >
            <FiHome />
            Back to Home
          </button>
        </div>

        {/* Status Timeline - Mobile Only */}
        <div className="mt-8 sm:hidden bg-white rounded-xl shadow-sm p-5">
          <h4 className="font-semibold text-gray-800 mb-4">Delivery Timeline</h4>
          <div className="space-y-4">
            {statusSteps.map((step, index) => {
              const isActive = index <= currentIndex
              const isCurrent = index === currentIndex
              
              return (
                <div key={step.key} className="flex items-start gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5
                    ${isActive ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-400"}
                    ${isCurrent ? "ring-2 ring-blue-300" : ""}
                  `}>
                    {step.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <p className={`font-medium ${isActive ? "text-gray-800" : "text-gray-500"}`}>
                        {step.label}
                      </p>
                      {isCurrent && (
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-500 mt-0.5">{step.description}</p>
                    {index < statusSteps.length - 1 && (
                      <div className={`h-6 w-0.5 ml-3.5 mt-2 ${isActive ? "bg-blue-300" : "bg-gray-200"}`}></div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-8 bg-gray-50 rounded-xl p-5 border border-gray-200">
          <p className="text-sm text-gray-600 text-center">
            Need help with your order? Contact support at{" "}
            <a href="tel:+18001234567" className="text-blue-600 font-medium hover:underline">
              1-800-123-4567
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default TrackOrder