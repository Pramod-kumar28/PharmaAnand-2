import React, { useState } from 'react'
import {
  FaSearch,
  FaCheckCircle,
  FaTimesCircle,
  FaEye,
  FaMoneyBillWave,
  FaShieldAlt,
  FaExclamationTriangle,
  FaUpload,
  FaDownload,
  FaBullhorn,
  FaStore,
  FaChartLine,
  FaBan,
  FaFilter,
  FaCubes,
  FaClock
} from 'react-icons/fa'

const AdminProducts = () => {
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('all')
  const [pharmacyFilter, setPharmacyFilter] = useState('all')

  const products = [
    {
      id: 'MED-001',
      name: 'Paracetamol 500mg',
      pharmacy: 'Sri Medicals',
      category: 'OTC',
      price: '₹25',
      commission: '8%',
      approved: true,
      compliance: 'OTC',
      stockRisk: 'Low',
      ordersImpact: '₹1,240 today',
      visibility: 'Live',
      lastReview: '2024-01-18'
    },
    {
      id: 'MED-002',
      name: 'Amoxicillin 250mg',
      pharmacy: 'City Pharma',
      category: 'Prescription',
      price: '₹120',
      commission: '10%',
      approved: false,
      compliance: 'Prescription',
      stockRisk: 'Critical',
      ordersImpact: '₹340 today',
      visibility: 'Hidden',
      lastReview: '2024-01-17'
    },
    {
      id: 'MED-003',
      name: 'Cetirizine 10mg',
      pharmacy: 'Health Plus',
      category: 'OTC',
      price: '₹45',
      commission: '7%',
      approved: true,
      compliance: 'OTC',
      stockRisk: 'Good',
      ordersImpact: '₹780 today',
      visibility: 'Live',
      lastReview: '2024-01-16'
    }
  ]

  const filteredProducts = products.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.pharmacy.toLowerCase().includes(search.toLowerCase()) ||
      p.id.toLowerCase().includes(search.toLowerCase())

    const matchesFilter =
      filter === 'all' ||
      (filter === 'pending' && !p.approved) ||
      (filter === 'approved' && p.approved) ||
      (filter === 'critical' && p.stockRisk === 'Critical')

    const matchesPharmacy =
      pharmacyFilter === 'all' || p.pharmacy === pharmacyFilter

    return matchesSearch && matchesFilter && matchesPharmacy
  })

  const statusBadge = (status) => {
    switch (status) {
      case 'Good':
        return 'bg-green-100 text-green-800'
      case 'Low':
        return 'bg-yellow-100 text-yellow-800'
      case 'Critical':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="space-y-6">


        {/* KPI CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { label: 'Products', value: '1,248', icon: FaCubes, color: 'blue' },
            { label: 'Pending', value: '14', icon: FaClock, color: 'orange' },
            { label: 'Rx Drugs', value: '326', icon: FaShieldAlt, color: 'purple' },
            { label: 'Revenue', value: '₹8,420', icon: FaChartLine, color: 'green' },
            { label: 'Low Stock', value: '9', icon: FaExclamationTriangle, color: 'red' },
            { label: 'Pharmacies', value: '32', icon: FaStore, color: 'teal' }
          ].map((card) => (
            <div
              key={card.label}
              className="bg-white rounded-lg p-4 border border-gray-200"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">{card.label}</p>
                  <p className="text-xl font-bold text-gray-900">{card.value}</p>
                </div>
                <card.icon className={`text-xl ${card.color === 'blue' ? 'text-blue-500' :
                    card.color === 'orange' ? 'text-orange-500' :
                      card.color === 'purple' ? 'text-purple-500' :
                        card.color === 'green' ? 'text-green-500' :
                          card.color === 'red' ? 'text-red-500' :
                            'text-teal-500'
                  }`} />
              </div>
            </div>
          ))}
        </div>
        {/* GLOBAL PLATFORM CONTROLS */}
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
          <h3 className="text-md font-semibold text-gray-700 mb-4">Global Platform Controls</h3>
          <div className="flex flex-wrap gap-3">
            <button className="px-4 py-2.5 bg-green-50 text-green-700 rounded-lg font-medium hover:bg-green-100 transition border border-green-200">
              Approve All Pending Products
            </button>
            <button className="px-4 py-2.5 bg-red-50 text-red-700 rounded-lg font-medium hover:bg-red-100 transition border border-red-200">
              Suspend Non-Compliant Medicines
            </button>
            <button className="px-4 py-2.5 bg-purple-50 text-purple-700 rounded-lg font-medium hover:bg-purple-100 transition border border-purple-200">
              Push Global Commission Rules
            </button>
            <button className="px-4 py-2.5 bg-blue-50 text-blue-700 rounded-lg font-medium hover:bg-blue-100 transition border border-blue-200">
              <FaUpload className="inline mr-2" /> Import Global Price Sheet
            </button>
            <button className="px-4 py-2.5 bg-gray-50 text-gray-700 rounded-lg font-medium hover:bg-gray-100 transition border border-gray-200">
              <FaDownload className="inline mr-2" /> Export Platform Catalog
            </button>
            <button className="px-4 py-2.5 bg-orange-50 text-orange-700 rounded-lg font-medium hover:bg-orange-100 transition border border-orange-200">
              <FaBullhorn className="inline mr-2" /> Broadcast Policy Update
            </button>
          </div>
        </div>

        {/* FILTER BAR */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
          <h3 className="text-md font-semibold text-gray-700 mb-4">Filters & Search</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Search medicine, pharmacy, or ID..."
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
              <option value="all">All Status</option>
              <option value="pending">Pending Approval</option>
              <option value="approved">Approved</option>
              <option value="critical">Critical Stock</option>
            </select>

            <select
              value={pharmacyFilter}
              onChange={(e) => setPharmacyFilter(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
            >
              <option value="all">All Pharmacies</option>
              <option value="Sri Medicals">Sri Medicals</option>
              <option value="City Pharma">City Pharma</option>
              <option value="Health Plus">Health Plus</option>
            </select>

            <button className="px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-100 transition">
              <FaFilter className="mr-2 text-gray-600" /> Advanced Filters
            </button>
          </div>
        </div>

        {/* GOVERNANCE TABLE */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="p-5 border-b border-gray-200">
            <h3 className="text-md font-semibold text-gray-700">Product Governance</h3>
            <p className="text-sm text-gray-500 mt-1">{filteredProducts.length} products found</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Medicine</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pharmacy</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Commission</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Approval</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Compliance</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock Risk</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Orders Impact</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Visibility</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                {filteredProducts.map((p) => (
                  <tr key={p.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <p className="font-medium text-gray-900">{p.name}</p>
                      <p className="text-xs text-gray-500 mt-1">{p.id}</p>
                    </td>

                    <td className="px-6 py-4">
                      <p className="text-gray-900">{p.pharmacy}</p>
                    </td>

                    <td className="px-6 py-4">
                      <p className="font-bold text-gray-900">{p.price}</p>
                    </td>

                    <td className="px-6 py-4">
                      <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-xs font-medium border border-purple-100">
                        {p.commission}
                      </span>
                    </td>

                    <td className="px-6 py-4">
                      {p.approved ? (
                        <span className="inline-flex items-center text-green-700 font-medium bg-green-50 px-3 py-1 rounded-full border border-green-100">
                          <FaCheckCircle className="mr-1.5 text-sm" /> Approved
                        </span>
                      ) : (
                        <span className="inline-flex items-center text-orange-700 font-medium bg-orange-50 px-3 py-1 rounded-full border border-orange-100">
                          <FaClock className="mr-1.5 text-sm" /> Pending
                        </span>
                      )}
                    </td>

                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium border ${p.compliance === 'Prescription'
                            ? 'bg-red-50 text-red-700 border-red-100'
                            : 'bg-green-50 text-green-700 border-green-100'
                          }`}
                      >
                        {p.compliance}
                      </span>
                    </td>

                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium border ${statusBadge(
                          p.stockRisk
                        )} border-opacity-50`}
                      >
                        {p.stockRisk}
                      </span>
                    </td>

                    <td className="px-6 py-4">
                      <p className="font-medium text-gray-900">{p.ordersImpact}</p>
                    </td>

                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium border ${p.visibility === 'Live'
                            ? 'bg-blue-50 text-blue-700 border-blue-100'
                            : 'bg-gray-100 text-gray-700 border-gray-200'
                          }`}
                      >
                        {p.visibility}
                      </span>
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <button className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition border border-blue-100">
                          <FaEye className="text-sm" />
                        </button>
                        <button className="p-2 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition border border-green-100">
                          <FaCheckCircle className="text-sm" />
                        </button>
                        <button className="p-2 bg-purple-50 text-purple-600 rounded-lg hover:bg-purple-100 transition border border-purple-100">
                          <FaMoneyBillWave className="text-sm" />
                        </button>
                        <button className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition border border-red-100">
                          <FaBan className="text-sm" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* EXECUTIVE CONTROLS */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-5">Executive Controls</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <button className="p-4 bg-red-50 hover:bg-red-100 rounded-lg transition border border-red-100 text-left">
              <div className="text-red-600 font-medium">
                Emergency Product Shutdown
              </div>
              <div className="text-sm text-gray-600 mt-2">
                Remove unsafe medicines platform-wide
              </div>
            </button>

            <button className="p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition border border-blue-100 text-left">
              <div className="text-blue-600 font-medium">
                Audit Compliance
              </div>
              <div className="text-sm text-gray-600 mt-2">
                Legal & pharmacy certification check
              </div>
            </button>

            <button className="p-4 bg-green-50 hover:bg-green-100 rounded-lg transition border border-green-100 text-left">
              <div className="text-green-600 font-medium">
                Generate Revenue Report
              </div>
              <div className="text-sm text-gray-600 mt-2">
                Finance & GST impact analysis
              </div>
            </button>

            <button className="p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition border border-purple-100 text-left">
              <div className="text-purple-600 font-medium">
                Push Platform Policy
              </div>
              <div className="text-sm text-gray-600 mt-2">
                Notify all pharmacies & riders
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminProducts