import React, { useState } from 'react'
import {
  FaSearch,
  FaUser,
  FaPhone,
  FaMapMarkerAlt,
  FaShoppingBag,
  FaBan,
  FaEye,
  FaCheckCircle,
  FaEnvelope,
  FaUsers,
  FaUserCheck,
  FaUserSlash,
  FaShoppingCart,
  FaDownload,
  FaExclamationTriangle,
  FaGift,
  FaCrown
} from 'react-icons/fa'

const Users = () => {
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('all')

  const users = [
    {
      id: 'U-1001',
      name: 'Rahul Kumar',
      email: 'rahul@email.com',
      phone: '9876543210',
      city: 'Kadapa',
      orders: 14,
      status: 'Active',
      joined: '2024-01-10'
    },
    {
      id: 'U-1002',
      name: 'Sneha Reddy',
      email: 'sneha@email.com',
      phone: '9123456789',
      city: 'Tirupati',
      orders: 3,
      status: 'Blocked',
      joined: '2024-01-15'
    },
    {
      id: 'U-1003',
      name: 'Arjun Singh',
      email: 'arjun@email.com',
      phone: '9988776655',
      city: 'Kurnool',
      orders: 9,
      status: 'Active',
      joined: '2024-01-12'
    }
  ]

  const filteredUsers = users.filter((u) => {
    const matchesSearch =
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase()) ||
      u.phone.includes(search)

    const matchesFilter =
      filter === 'all' ||
      (filter === 'active' && u.status === 'Active') ||
      (filter === 'blocked' && u.status === 'Blocked')

    return matchesSearch && matchesFilter
  })

  const statusBadge = (status) => {
    switch (status) {
      case 'Active':
        return 'bg-green-50 text-green-700 border border-green-200'
      case 'Blocked':
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
            Platform Users Management
          </h1>
          <p className="text-gray-600 mt-1">
            Manage customers, monitor activity, and handle access control
          </p>
        </div>

        {/* Stats Cards with Improved Styling */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
          <h3 className="text-md font-semibold text-gray-700 mb-4">User Overview</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Total Users Card */}
            <div className="bg-gradient-to-br from-white to-blue-50 border border-blue-100 p-5 rounded-xl hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Users</p>
                  <p className="text-2xl font-bold text-blue-600 mt-1">1,245</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                      +12.5%
                    </span>
                    <span className="text-xs text-gray-500">Last month</span>
                  </div>
                </div>
                <div className="bg-blue-100/50 p-3 rounded-lg">
                  <FaUsers className="text-blue-500 text-lg" />
                </div>
              </div>
            </div>

            {/* Active Users Card */}
            <div className="bg-gradient-to-br from-white to-green-50 border border-green-100 p-5 rounded-xl hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Active Users</p>
                  <p className="text-2xl font-bold text-green-600 mt-1">1,102</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full">
                      +8.2%
                    </span>
                    <span className="text-xs text-gray-500">Last week</span>
                  </div>
                </div>
                <div className="bg-green-100/50 p-3 rounded-lg">
                  <FaUserCheck className="text-green-500 text-lg" />
                </div>
              </div>
            </div>

            {/* Blocked Users Card */}
            <div className="bg-gradient-to-br from-white to-red-50 border border-red-100 p-5 rounded-xl hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Blocked Users</p>
                  <p className="text-2xl font-bold text-red-600 mt-1">143</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-xs text-red-600 bg-red-100 px-2 py-1 rounded-full">
                      -3.1%
                    </span>
                    <span className="text-xs text-gray-500">This month</span>
                  </div>
                </div>
                <div className="bg-red-100/50 p-3 rounded-lg">
                  <FaUserSlash className="text-red-500 text-lg" />
                </div>
              </div>
            </div>

            {/* Orders Today Card */}
            <div className="bg-gradient-to-br from-white to-purple-50 border border-purple-100 p-5 rounded-xl hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Orders Today</p>
                  <p className="text-2xl font-bold text-purple-600 mt-1">86</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-xs text-purple-600 bg-purple-100 px-2 py-1 rounded-full">
                      +18.7%
                    </span>
                    <span className="text-xs text-gray-500">From active users</span>
                  </div>
                </div>
                <div className="bg-purple-100/50 p-3 rounded-lg">
                  <FaShoppingCart className="text-purple-500 text-lg" />
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
                placeholder="Search by name, email, or phone..."
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
              <option value="all">All Users</option>
              <option value="active">Active</option>
              <option value="blocked">Blocked</option>
            </select>

            <select className="border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white">
              <option>All Cities</option>
              <option>Kadapa</option>
              <option>Tirupati</option>
              <option>Kurnool</option>
            </select>
          </div>
        </div>

        {/* Users Table */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="p-5 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-md font-semibold text-gray-700">Users</h3>
                <p className="text-sm text-gray-500 mt-1">
                  {filteredUsers.length} users found
                </p>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                <FaDownload /> Export CSV
              </button>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1000px]">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    User
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Contact
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Location
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Orders
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                {filteredUsers.map((u) => (
                  <tr key={u.id} className="hover:bg-gray-50 transition-colors">
                    {/* User Info */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="bg-gray-100 p-2.5 rounded-lg border border-gray-200">
                          <FaUser className="text-gray-600" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">
                            {u.name}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            ID: {u.id}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Contact */}
                    <td className="px-6 py-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="bg-blue-50 p-1.5 rounded border border-blue-100">
                            <FaEnvelope className="text-blue-500 text-sm" />
                          </div>
                          <span className="text-sm text-gray-900">{u.email}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="bg-green-50 p-1.5 rounded border border-green-100">
                            <FaPhone className="text-green-500 text-sm" />
                          </div>
                          <span className="text-sm text-gray-900">{u.phone}</span>
                        </div>
                      </div>
                    </td>

                    {/* Location */}
                    <td className="px-6 py-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="bg-purple-50 p-1.5 rounded border border-purple-100">
                            <FaMapMarkerAlt className="text-purple-500 text-sm" />
                          </div>
                          <span className="text-gray-900">{u.city}</span>
                        </div>
                        <p className="text-xs text-gray-500">
                          Joined: {u.joined}
                        </p>
                      </div>
                    </td>

                    {/* Orders */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="bg-amber-50 p-2 rounded-lg border border-amber-100">
                          <FaShoppingBag className="text-amber-500" />
                        </div>
                        <div>
                          <p className="font-bold text-gray-900">{u.orders} orders</p>
                          <p className="text-xs text-gray-500">Total purchases</p>
                        </div>
                      </div>
                    </td>

                    {/* Status */}
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1.5 rounded-full text-sm font-medium ${statusBadge(
                          u.status
                        )}`}
                      >
                        {u.status}
                      </span>
                    </td>

                    {/* Actions */}
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <button
                          className="p-2.5 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors border border-blue-100"
                          title="View Profile"
                        >
                          <FaEye className="text-sm" />
                        </button>

                        {u.status === 'Blocked' ? (
                          <button
                            className="p-2.5 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-colors border border-green-100"
                            title="Unblock User"
                          >
                            <FaCheckCircle className="text-sm" />
                          </button>
                        ) : (
                          <button
                            className="p-2.5 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors border border-red-100"
                            title="Block User"
                          >
                            <FaBan className="text-sm" />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* User Controls */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            User Management Controls
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <button className="p-4 bg-gradient-to-r from-blue-50 to-white border border-blue-200 rounded-xl hover:border-blue-300 hover:shadow-sm transition-all text-left">
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-2.5 rounded-lg">
                  <FaDownload className="text-blue-600" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Export Users</div>
                  <div className="text-sm text-gray-600 mt-1">Download customer list</div>
                </div>
              </div>
            </button>

            <button className="p-4 bg-gradient-to-r from-red-50 to-white border border-red-200 rounded-xl hover:border-red-300 hover:shadow-sm transition-all text-left">
              <div className="flex items-center gap-3">
                <div className="bg-red-100 p-2.5 rounded-lg">
                  <FaExclamationTriangle className="text-red-600" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">View Complaints</div>
                  <div className="text-sm text-gray-600 mt-1">Customer support tickets</div>
                </div>
              </div>
            </button>

            <button className="p-4 bg-gradient-to-r from-green-50 to-white border border-green-200 rounded-xl hover:border-green-300 hover:shadow-sm transition-all text-left">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2.5 rounded-lg">
                  <FaGift className="text-green-600" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Engagement Campaign</div>
                  <div className="text-sm text-gray-600 mt-1">Send offers & notifications</div>
                </div>
              </div>
            </button>

            <button className="p-4 bg-gradient-to-r from-purple-50 to-white border border-purple-200 rounded-xl hover:border-purple-300 hover:shadow-sm transition-all text-left">
              <div className="flex items-center gap-3">
                <div className="bg-purple-100 p-2.5 rounded-lg">
                  <FaCrown className="text-purple-600" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Loyalty Program</div>
                  <div className="text-sm text-gray-600 mt-1">Reward frequent customers</div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Users