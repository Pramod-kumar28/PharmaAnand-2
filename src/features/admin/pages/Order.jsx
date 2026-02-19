import React, { useState } from 'react'
import {
  FaSearch,
  FaEye,
  FaTruck,
  FaNotesMedical,
  FaTimesCircle,
  FaCheckCircle,
  FaUser,
  FaStore,
  FaRupeeSign,
  FaClock,
  FaFire,
  FaFilePrescription,
  FaWallet,
  FaUndo
} from 'react-icons/fa'

const Order = () => {
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('all')

  const orders = [
    {
      id: 'ORD-1001',
      customer: 'Rahul Kumar',
      pharmacy: 'Sri Medicals',
      rider: 'Amit Rider',
      amount: '₹540',
      status: 'Out for Delivery',
      prescriptionRequired: false,
      city: 'Kadapa',
      payment: 'Paid',
      time: '10 mins ago'
    },
    {
      id: 'ORD-1002',
      customer: 'Sneha Reddy',
      pharmacy: 'City Pharma',
      rider: 'Not Assigned',
      amount: '₹1,240',
      status: 'Awaiting Prescription',
      prescriptionRequired: true,
      city: 'Tirupati',
      payment: 'Pending',
      time: '25 mins ago'
    },
    {
      id: 'ORD-1003',
      customer: 'Arjun Singh',
      pharmacy: 'Health Plus',
      rider: 'Ravi Kumar',
      amount: '₹320',
      status: 'Delivered',
      prescriptionRequired: false,
      city: 'Kurnool',
      payment: 'Paid',
      time: '1 hour ago'
    },
    {
      id: 'ORD-1004',
      customer: 'Priya Sharma',
      pharmacy: 'Sri Medicals',
      rider: 'Blocked',
      amount: '₹780',
      status: 'Cancelled',
      prescriptionRequired: true,
      city: 'Kadapa',
      payment: 'Refunded',
      time: '2 hours ago'
    }
  ]

  const filteredOrders = orders.filter((o) => {
    const matchesSearch =
      o.id.toLowerCase().includes(search.toLowerCase()) ||
      o.customer.toLowerCase().includes(search.toLowerCase()) ||
      o.pharmacy.toLowerCase().includes(search.toLowerCase())

    const matchesFilter =
      filter === 'all' ||
      (filter === 'prescription' && o.prescriptionRequired) ||
      (filter === 'pending' && o.status === 'Awaiting Prescription') ||
      (filter === 'active' &&
        ['Out for Delivery', 'Processing'].includes(o.status)) ||
      (filter === 'completed' && o.status === 'Delivered') ||
      (filter === 'cancelled' && o.status === 'Cancelled')

    return matchesSearch && matchesFilter
  })

  const statusBadge = (status) => {
    switch (status) {
      case 'Delivered':
        return 'bg-green-50 text-green-700 border border-green-200'
      case 'Out for Delivery':
        return 'bg-blue-50 text-blue-700 border border-blue-200'
      case 'Awaiting Prescription':
        return 'bg-yellow-50 text-yellow-700 border border-yellow-200'
      case 'Cancelled':
        return 'bg-red-50 text-red-700 border border-red-200'
      default:
        return 'bg-gray-50 text-gray-700 border border-gray-200'
    }
  }

  const paymentBadge = (payment) => {
    switch (payment) {
      case 'Paid':
        return 'bg-green-50 text-green-700 border border-green-200'
      case 'Pending':
        return 'bg-yellow-50 text-yellow-700 border border-yellow-200'
      case 'Refunded':
        return 'bg-red-50 text-red-700 border border-red-200'
      default:
        return 'bg-gray-50 text-gray-700 border border-gray-200'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="space-y-6">
        {/* Header */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
          <h1 className="text-2xl font-bold text-gray-800">
            Platform Orders Management
          </h1>
          <p className="text-gray-600 mt-1">
            Track prescriptions, pharmacies, riders, and payments in real time
          </p>
        </div>

        {/* Top KPI Cards */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 md:p-5">
          <h3 className="text-base md:text-lg font-semibold text-gray-700 mb-3 md:mb-4">Today's Overview</h3>
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {/* Active Orders */}
            <div className="bg-gradient-to-br from-white to-blue-50 border border-blue-100 p-3 sm:p-4 md:p-5 rounded-xl hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div className="flex-1 min-w-0">
                  <p className="text-xs sm:text-sm font-medium text-gray-600">Active Orders</p>
                  <p className="text-xl sm:text-2xl font-bold text-blue-600 mt-1 sm:mt-1.5">6</p>
                  <p className="text-xs text-gray-500 mt-1 sm:mt-2">In delivery / processing</p>
                </div>
                <div className="bg-blue-100/50 p-2 sm:p-3 rounded-lg ml-2 sm:ml-3 flex-shrink-0">
                  <FaFire className="text-blue-500 text-base sm:text-lg" />
                </div>
              </div>
            </div>

            {/* Prescription Pending */}
            <div className="bg-gradient-to-br from-white to-purple-50 border border-purple-100 p-3 sm:p-4 md:p-5 rounded-xl hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div className="flex-1 min-w-0">
                  <p className="text-xs sm:text-sm font-medium text-gray-600">Prescription Pending</p>
                  <p className="text-xl sm:text-2xl font-bold text-purple-600 mt-1 sm:mt-1.5">2</p>
                  <p className="text-xs text-gray-500 mt-1 sm:mt-2">Doctor approval needed</p>
                </div>
                <div className="bg-purple-100/50 p-2 sm:p-3 rounded-lg ml-2 sm:ml-3 flex-shrink-0">
                  <FaFilePrescription className="text-purple-500 text-base sm:text-lg" />
                </div>
              </div>
            </div>

            {/* Revenue Today */}
            <div className="bg-gradient-to-br from-white to-green-50 border border-green-100 p-3 sm:p-4 md:p-5 rounded-xl hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div className="flex-1 min-w-0">
                  <p className="text-xs sm:text-sm font-medium text-gray-600">Revenue Today</p>
                  <p className="text-xl sm:text-2xl font-bold text-green-600 mt-1 sm:mt-1.5">₹2,880</p>
                  <p className="text-xs text-gray-500 mt-1 sm:mt-2">Completed orders</p>
                </div>
                <div className="bg-green-100/50 p-2 sm:p-3 rounded-lg ml-2 sm:ml-3 flex-shrink-0">
                  <FaWallet className="text-green-500 text-base sm:text-lg" />
                </div>
              </div>
            </div>

            {/* Refunds */}
            <div className="bg-gradient-to-br from-white to-red-50 border border-red-100 p-3 sm:p-4 md:p-5 rounded-xl hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div className="flex-1 min-w-0">
                  <p className="text-xs sm:text-sm font-medium text-gray-600">Refunds</p>
                  <p className="text-xl sm:text-2xl font-bold text-red-600 mt-1 sm:mt-1.5">₹780</p>
                  <p className="text-xs text-gray-500 mt-1 sm:mt-2">Cancelled orders</p>
                </div>
                <div className="bg-red-100/50 p-2 sm:p-3 rounded-lg ml-2 sm:ml-3 flex-shrink-0">
                  <FaUndo className="text-red-500 text-base sm:text-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
          <h3 className="text-md font-semibold text-gray-700 mb-4">Filters & Search</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Search by Order ID, customer, pharmacy..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
            >
              <option value="all">All Orders</option>
              <option value="prescription">Prescription Orders</option>
              <option value="pending">Pending Approval</option>
              <option value="active">Active Deliveries</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled / Refunded</option>
            </select>

            <select className="border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white">
              <option>All Cities</option>
              <option>Kadapa</option>
              <option>Tirupati</option>
              <option>Kurnool</option>
            </select>
          </div>
        </div>

        {/* Orders Table */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="p-5 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-md font-semibold text-gray-700">Orders</h3>
                <p className="text-sm text-gray-500 mt-1">
                  {filteredOrders.length} orders found
                </p>
              </div>
              <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                Export CSV →
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-[1200px] w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Order
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Customer
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Pharmacy
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Rider
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Payment
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                {filteredOrders.map((o) => (
                  <tr key={o.id} className="hover:bg-gray-50 transition-colors">
                    {/* Order */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="font-medium text-gray-900">{o.id}</div>
                      <div className="flex items-center text-xs text-gray-500 mt-1">
                        <FaClock className="mr-1.5 text-gray-400" />
                        {o.time}
                      </div>
                    </td>

                    {/* Customer */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <div className="bg-gray-100 p-2 rounded-lg">
                          <FaUser className="text-gray-600" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">{o.customer}</div>
                          <div className="text-xs text-gray-500">{o.city}</div>
                        </div>
                      </div>
                    </td>

                    {/* Pharmacy */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <div className="bg-blue-50 p-2 rounded-lg border border-blue-100">
                          <FaStore className="text-blue-600" />
                        </div>
                        <div className="font-medium text-gray-900">{o.pharmacy}</div>
                      </div>
                    </td>

                    {/* Rider */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <div className={o.rider === 'Not Assigned' || o.rider === 'Blocked'
                          ? 'bg-red-50 p-2 rounded-lg border border-red-100'
                          : 'bg-green-50 p-2 rounded-lg border border-green-100'
                        }>
                          <FaTruck className={
                            o.rider === 'Not Assigned' || o.rider === 'Blocked'
                              ? 'text-red-600'
                              : 'text-green-600'
                          } />
                        </div>
                        <div className={o.rider === 'Not Assigned' || o.rider === 'Blocked'
                          ? 'text-red-600 font-medium'
                          : 'text-gray-900'
                        }>
                          {o.rider}
                        </div>
                      </div>
                    </td>

                    {/* Amount */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-1.5">
                        <FaRupeeSign className="text-gray-500" />
                        <span className="font-bold text-gray-900">{o.amount.replace('₹', '')}</span>
                      </div>
                    </td>

                    {/* Status */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="space-y-2">
                        <span
                          className={`px-3 py-1.5 rounded-full text-sm font-medium ${statusBadge(
                            o.status
                          )}`}
                        >
                          {o.status}
                        </span>
                        {o.prescriptionRequired && (
                          <div className="flex items-center text-purple-600 text-xs">
                            <FaNotesMedical className="mr-1.5" />
                            Prescription Required
                          </div>
                        )}
                      </div>
                    </td>

                    {/* Payment */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-3 py-1.5 rounded-full text-sm font-medium ${paymentBadge(
                          o.payment
                        )}`}
                      >
                        {o.payment}
                      </span>
                    </td>

                    {/* Actions */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex gap-2">
                        <button
                          className="p-2.5 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors border border-blue-100"
                          title="View Details"
                        >
                          <FaEye />
                        </button>

                        <button
                          className="p-2.5 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-colors border border-green-100"
                          title="Force Assign Rider"
                        >
                          <FaCheckCircle />
                        </button>

                        <button
                          className="p-2.5 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors border border-red-100"
                          title="Cancel / Refund"
                        >
                          <FaTimesCircle />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Platform Actions */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Platform Controls
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <button className="p-4 bg-gradient-to-r from-purple-50 to-white border border-purple-200 rounded-xl hover:border-purple-300 hover:shadow-sm transition-all text-left">
              <div className="flex items-center gap-3">
                <div className="bg-purple-100 p-2.5 rounded-lg">
                  <FaNotesMedical className="text-purple-600" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Review Prescriptions</div>
                  <div className="text-sm text-gray-600 mt-1">Approve doctor uploads</div>
                </div>
              </div>
            </button>

            <button className="p-4 bg-gradient-to-r from-blue-50 to-white border border-blue-200 rounded-xl hover:border-blue-300 hover:shadow-sm transition-all text-left">
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-2.5 rounded-lg">
                  <FaTruck className="text-blue-600" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Assign Riders</div>
                  <div className="text-sm text-gray-600 mt-1">Manage delivery network</div>
                </div>
              </div>
            </button>

            <button className="p-4 bg-gradient-to-r from-green-50 to-white border border-green-200 rounded-xl hover:border-green-300 hover:shadow-sm transition-all text-left">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2.5 rounded-lg">
                  <FaWallet className="text-green-600" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Payment Reconciliation</div>
                  <div className="text-sm text-gray-600 mt-1">Resolve payment issues</div>
                </div>
              </div>
            </button>

            <button className="p-4 bg-gradient-to-r from-red-50 to-white border border-red-200 rounded-xl hover:border-red-300 hover:shadow-sm transition-all text-left">
              <div className="flex items-center gap-3">
                <div className="bg-red-100 p-2.5 rounded-lg">
                  <FaUndo className="text-red-600" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Handle Disputes</div>
                  <div className="text-sm text-gray-600 mt-1">Complaints & refunds</div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Order