import React, { useState } from 'react'
import {
  FaRupeeSign,
  FaStore,
  FaTruck,
  FaChartLine,
  FaFileInvoice,
  FaExclamationTriangle,
  FaCheckCircle,
  FaClock,
  FaDownload,
  FaSearch,
  FaBalanceScale
} from 'react-icons/fa'

const Finance = () => {
  const [tab, setTab] = useState('payouts')
  const [search, setSearch] = useState('')

  const kpis = [
    {
      label: 'Platform Revenue',
      value: '₹4,86,250',
      icon: FaRupeeSign,
      color: 'from-green-500 to-emerald-500',
      sub: 'This Month'
    },
    {
      label: 'Pharmacy Payouts',
      value: '₹3,92,100',
      icon: FaStore,
      color: 'from-blue-500 to-cyan-500',
      sub: 'Settled'
    },
    {
      label: 'Rider Payments',
      value: '₹68,400',
      icon: FaTruck,
      color: 'from-purple-500 to-pink-500',
      sub: 'This Cycle'
    },
    {
      label: 'Pending Disputes',
      value: '₹12,300',
      icon: FaBalanceScale,
      color: 'from-red-500 to-orange-500',
      sub: 'Under Review'
    }
  ]

  const settlements = [
    {
      id: 'SET-1001',
      entity: 'Sri Medicals',
      type: 'Pharmacy',
      amount: '₹24,560',
      cycle: 'Weekly',
      status: 'Completed',
      date: '2024-01-15'
    },
    {
      id: 'SET-1002',
      entity: 'Ravi Rider',
      type: 'Rider',
      amount: '₹3,200',
      cycle: 'Daily',
      status: 'Pending',
      date: '2024-01-16'
    },
    {
      id: 'SET-1003',
      entity: 'City Pharma',
      type: 'Pharmacy',
      amount: '₹18,900',
      cycle: 'Weekly',
      status: 'Processing',
      date: '2024-01-16'
    }
  ]

  const filteredSettlements = settlements.filter((s) =>
    s.entity.toLowerCase().includes(search.toLowerCase()) ||
    s.id.toLowerCase().includes(search.toLowerCase())
  )

  const statusBadge = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800 border border-green-200'
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800 border border-yellow-200'
      case 'Processing':
        return 'bg-blue-100 text-blue-800 border border-blue-200'
      default:
        return 'bg-gray-100 text-gray-800 border border-gray-200'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="space-y-6">
        {/* Header */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
          <h1 className="text-2xl font-bold text-gray-800">
            Finance & Settlements
          </h1>
          <p className="text-gray-600 mt-1">
            Manage platform revenue, commissions, payouts, GST, and disputes
          </p>
        </div>

        {/* KPI Cards */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
          <h3 className="text-md font-semibold text-gray-700 mb-4">Financial Overview</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {kpis.map((kpi) => (
              <div
                key={kpi.label}
                className="bg-white border border-gray-200 rounded-xl p-5 flex items-center justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <p className="text-sm text-gray-500">{kpi.label}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">
                    {kpi.value}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {kpi.sub}
                  </p>
                </div>
                <div
                  className={`p-4 rounded-xl bg-gradient-to-r ${kpi.color}`}
                >
                  <kpi.icon className="text-white text-xl" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tabs & Search */}
        {/* <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="text-md font-semibold text-gray-700 mb-3">Settlement Management</h3>
              <div className="flex gap-2">
                {['payouts', 'commissions', 'gst', 'invoices', 'disputes'].map(
                  (t) => (
                    <button
                      key={t}
                      onClick={() => setTab(t)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                        tab === t
                          ? 'bg-blue-600 text-white border border-blue-700'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300'
                      }`}
                    >
                      {t.charAt(0).toUpperCase() + t.slice(1)}
                    </button>
                  )
                )}
              </div>
            </div>
            
            <div className="relative w-full md:w-96">
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Search by ID, pharmacy, or rider..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div> */}

        {/* Settlement Table */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="p-5 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-md font-semibold text-gray-700">Settlement Records</h3>
                <p className="text-sm text-gray-500 mt-1">
                  {filteredSettlements.length} settlements found
                </p>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                <FaDownload /> Export Report
              </button>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-[900px] w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Settlement ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Entity
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Cycle
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
                {filteredSettlements.map((s) => (
                  <tr key={s.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-medium text-gray-900">{s.id}</div>
                      <p className="text-xs text-gray-500 mt-1">
                        {s.date}
                      </p>
                    </td>

                    <td className="px-6 py-4 font-medium text-gray-900">
                      {s.entity}
                    </td>

                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1.5 rounded-full text-sm font-medium border ${
                          s.type === 'Pharmacy'
                            ? 'bg-blue-50 text-blue-700 border-blue-200'
                            : 'bg-purple-50 text-purple-700 border-purple-200'
                        }`}
                      >
                        {s.type}
                      </span>
                    </td>

                    <td className="px-6 py-4 font-bold text-green-700">
                      {s.amount}
                    </td>

                    <td className="px-6 py-4 text-gray-700">
                      {s.cycle}
                    </td>

                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1.5 rounded-full text-sm font-medium ${statusBadge(
                          s.status
                        )}`}
                      >
                        {s.status}
                      </span>
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <button
                          className="p-2.5 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors border border-blue-100"
                          title="View Invoice"
                        >
                          <FaFileInvoice />
                        </button>

                        <button
                          className="p-2.5 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-colors border border-green-100"
                          title="Mark as Paid"
                        >
                          <FaCheckCircle />
                        </button>

                        <button
                          className="p-2.5 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors border border-red-100"
                          title="Raise Dispute"
                        >
                          <FaExclamationTriangle />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Finance Controls */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Finance Controls
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <button className="p-4 bg-gradient-to-r from-green-50 to-white border border-green-200 rounded-xl hover:border-green-300 hover:shadow-sm transition-all text-left">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2.5 rounded-lg">
                  <FaChartLine className="text-green-600" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Generate GST Report</div>
                  <div className="text-sm text-gray-600 mt-1">Monthly tax summary</div>
                </div>
              </div>
            </button>

            <button className="p-4 bg-gradient-to-r from-blue-50 to-white border border-blue-200 rounded-xl hover:border-blue-300 hover:shadow-sm transition-all text-left">
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-2.5 rounded-lg">
                  <FaRupeeSign className="text-blue-600" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Process Payouts</div>
                  <div className="text-sm text-gray-600 mt-1">Run settlement cycle</div>
                </div>
              </div>
            </button>

            <button className="p-4 bg-gradient-to-r from-purple-50 to-white border border-purple-200 rounded-xl hover:border-purple-300 hover:shadow-sm transition-all text-left">
              <div className="flex items-center gap-3">
                <div className="bg-purple-100 p-2.5 rounded-lg">
                  <FaBalanceScale className="text-purple-600" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Commission Rules</div>
                  <div className="text-sm text-gray-600 mt-1">Adjust platform fees</div>
                </div>
              </div>
            </button>

            <button className="p-4 bg-gradient-to-r from-red-50 to-white border border-red-200 rounded-xl hover:border-red-300 hover:shadow-sm transition-all text-left">
              <div className="flex items-center gap-3">
                <div className="bg-red-100 p-2.5 rounded-lg">
                  <FaExclamationTriangle className="text-red-600" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Resolve Disputes</div>
                  <div className="text-sm text-gray-600 mt-1">Payment conflicts</div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Finance