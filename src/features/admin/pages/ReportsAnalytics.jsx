import React, { useState } from 'react'
import {
  FaRupeeSign,
  FaShoppingCart,
  FaStore,
  FaTruck,
  FaNotesMedical,
  FaDownload,
  FaFilter,
  FaChartLine,
  FaChartPie,
  FaFileExcel,
  FaCalendarAlt,
  FaArrowUp,
  FaArrowDown,
  FaChevronRight,
  FaEye,
  FaExpand,
  FaTable
} from 'react-icons/fa'
import {
  AreaChart,
  Area,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  BarChart,
  Bar
} from 'recharts'

const ReportsAnalytics = () => {
  const [activeTab, setActiveTab] = useState('overview')
  const [dateRange, setDateRange] = useState('month')

  // KPI Cards Data
  const kpis = [
    {
      label: 'Total Revenue',
      value: '₹8,42,500',
      details: 'Last month: ₹7,48,000',
      icon: FaRupeeSign,
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      iconBg: 'bg-blue-600',
      subColor: 'text-blue-700',
      barColor: 'bg-blue-600',
      progress: '85%'
    },
    {
      label: 'Total Orders',
      value: '5,248',
      details: 'Avg order: ₹1,605',
      icon: FaShoppingCart,
      bg: 'bg-purple-50',
      border: 'border-purple-200',
      iconBg: 'bg-purple-600',
      subColor: 'text-purple-700',
      barColor: 'bg-purple-600',
      progress: '70%'
    },
    {
      label: 'Active Pharmacies',
      value: '32',
      details: '4 new this month',
      icon: FaStore,
      bg: 'bg-green-50',
      border: 'border-green-200',
      iconBg: 'bg-green-600',
      subColor: 'text-green-700',
      barColor: 'bg-green-600',
      progress: '60%'
    },
    {
      label: 'Active Riders',
      value: '58',
      details: '42 on duty now',
      icon: FaTruck,
      bg: 'bg-orange-50',
      border: 'border-orange-200',
      iconBg: 'bg-orange-600',
      subColor: 'text-orange-700',
      barColor: 'bg-orange-600',
      progress: '75%'
    },
    {
      label: 'Prescriptions',
      value: '412',
      details: '79% digital',
      icon: FaNotesMedical,
      bg: 'bg-pink-50',
      border: 'border-pink-200',
      iconBg: 'bg-pink-600',
      subColor: 'text-pink-700',
      barColor: 'bg-pink-600',
      progress: '55%'
    }
  ]

  // Revenue Chart Data
  const revenueData = [
    { month: 'Jan', revenue: 420000, orders: 3120, avgOrder: 1346 },
    { month: 'Feb', revenue: 380000, orders: 2950, avgOrder: 1288 },
    { month: 'Mar', revenue: 450000, orders: 3540, avgOrder: 1271 },
    { month: 'Apr', revenue: 486250, orders: 4020, avgOrder: 1209 },
    { month: 'May', revenue: 520000, orders: 4380, avgOrder: 1187 },
    { month: 'Jun', revenue: 580000, orders: 4920, avgOrder: 1179 }
  ]

  // Product Categories Data
  const categoryData = [
    { name: 'Prescription', value: 45, color: '#3b82f6' },
    { name: 'OTC Drugs', value: 30, color: '#10b981' },
    { name: 'Devices', value: 15, color: '#8b5cf6' },
    { name: 'Wellness', value: 10, color: '#f59e0b' }
  ]

  // Top Pharmacies
  const topPharmacies = [
    { rank: 1, name: 'Sri Medicals', orders: 1240, revenue: '₹1.8L', score: 94 },
    { rank: 2, name: 'City Pharma', orders: 980, revenue: '₹1.4L', score: 88 },
    { rank: 3, name: 'Health Plus', orders: 860, revenue: '₹1.2L', score: 85 },
    { rank: 4, name: 'Apollo Pharmacy', orders: 720, revenue: '₹98K', score: 82 }
  ]

  // City Performance
  const cityData = [
    { city: 'Kadapa', revenue: 320000, orders: 2100, growth: 15 },
    { city: 'Tirupati', revenue: 280000, orders: 1850, growth: 12 },
    { city: 'Kurnool', revenue: 195000, orders: 1450, growth: 8 },
    { city: 'Nellore', revenue: 158000, orders: 1250, growth: 18 }
  ]

  // Custom Tooltip for Charts
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border rounded-lg shadow-lg">
          <p className="font-semibold text-gray-800 mb-2">{label}</p>
          {payload.map((entry, index) => (
            <div key={index} className="flex items-center gap-2 text-sm">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: entry.color }} />
              <span className="font-medium">{entry.name}:</span>
              <span className="text-gray-700">
                {entry.name === 'revenue' ? '₹' : ''}
                {typeof entry.value === 'number' ? entry.value.toLocaleString() : entry.value}
                {entry.name === 'orders' ? ' orders' : ''}
              </span>
            </div>
          ))}
        </div>
      )
    }
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">

      {/* Header Section */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Analytics Dashboard</h1>
            <p className="text-gray-600 mt-1">Real-time insights and performance metrics</p>
          </div>

          <div className="mt-4 md:mt-0 flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition">
              <FaCalendarAlt className="text-gray-500" />
              <span className="text-gray-700">Last 30 days</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              <FaDownload />
              <span>Export</span>
            </button>
          </div>
        </div>

        {/* Tabs */}
        {/* <div className="flex space-x-1 border-b border-gray-200">
          {['overview', 'revenue', 'pharmacies', 'riders', 'reports'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-3 font-medium capitalize transition-colors ${
                activeTab === tab
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </div> */}
      </div>

      {/* Filter Section */}
      <div className="mb-8 p-4 bg-white rounded-xl border border-gray-200">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex items-center gap-2">
            <FaFilter className="text-gray-400" />
            <span className="font-medium text-gray-700">Filters</span>
          </div>

          <div className="flex flex-wrap gap-3 flex-1">
            <select
              className="px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
            >
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="quarter">This Quarter</option>
              <option value="year">This Year</option>
            </select>

            <select className="px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white">
              <option>All Cities</option>
              <option>Kadapa</option>
              <option>Tirupati</option>
              <option>Kurnool</option>
            </select>

            <select className="px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white">
              <option>All Pharmacies</option>
              <option>Premium Partners</option>
              <option>Standard Partners</option>
            </select>

            <button className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium">
              Apply Filters
            </button>
          </div>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))] gap-6 mb-8">


        {kpis.map((kpi, index) => (
          <div
            key={index}
            className={`relative p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 ${kpi.bg}`}
          >
            {/* Top Row */}
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500 font-medium">
                  {kpi.label}
                </p>
                <p className="text-3xl font-bold text-gray-900 mt-1">
                  {kpi.value}
                </p>
              </div>

              {/* Icon Box */}
              <div className={`p-3 rounded-xl ${kpi.iconBg} shadow-sm`}>
                <kpi.icon className="text-white text-lg" />
              </div>
            </div>

            {/* Sub Text */}
            <p className={`mt-3 text-sm font-medium ${kpi.subColor}`}>
              {kpi.details}
            </p>

            {/* Progress Bar */}
            <div className="mt-4 h-2 w-full bg-gray-200 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full ${kpi.barColor}`}
                style={{ width: kpi.progress || '60%' }}
              />
            </div>
          </div>
        ))}
      </div>


      {/* Main Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Revenue Chart */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <FaChartLine className="text-blue-500" />
                Revenue & Orders Trend
              </h2>
              <p className="text-gray-600 text-sm mt-1">Monthly performance metrics</p>
            </div>
            <div className="mt-3 sm:mt-0 flex items-center gap-2">
              <button className="px-3 py-1.5 text-sm bg-blue-50 text-blue-600 rounded-lg">
                Revenue
              </button>
              <button className="px-3 py-1.5 text-sm border border-gray-300 rounded-lg hover:bg-gray-50">
                Orders
              </button>
            </div>
          </div>

          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                <XAxis dataKey="month" />
                <YAxis tickFormatter={(value) => `₹${value / 1000}k`} />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="#3b82f6"
                  fill="url(#colorRevenue)"
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="orders"
                  stroke="#10b981"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                />
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1} />
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                  </linearGradient>
                </defs>
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Category Distribution */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <FaChartPie className="text-purple-500" />
              Product Categories
            </h2>
            <button className="text-blue-600 hover:text-blue-800 text-sm">
              <FaExpand />
            </button>
          </div>

          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={3}
                  dataKey="value"
                  label={(entry) => `${entry.value}%`}
                  labelLine={false}
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value}%`, 'Share']} />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-6 space-y-3">
            {categoryData.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-sm font-medium text-gray-700">
                    {item.name}
                  </span>
                </div>
                <span className="font-semibold text-gray-900">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Pharmacies */}
        <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-0 mb-6">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">Top Performing Pharmacies</h2>
            <button className="text-blue-600 hover:text-blue-800 text-sm flex items-center gap-1 self-end sm:self-auto">
              View all <FaChevronRight className="text-xs" />
            </button>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {topPharmacies.map((pharmacy) => (
              <div
                key={pharmacy.rank}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition gap-3 sm:gap-0"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-blue-50 text-blue-600 rounded-lg font-bold text-sm sm:text-base">
                    {pharmacy.rank}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base truncate">
                      {pharmacy.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 truncate">
                      {pharmacy.orders.toLocaleString()} orders • {pharmacy.revenue}
                    </p>
                  </div>
                </div>

                <div className="text-left sm:text-right mt-2 sm:mt-0">
                  <div className="flex sm:block items-center justify-between sm:justify-normal">
                    <div className="text-base sm:text-lg font-bold text-gray-900">{pharmacy.score}%</div>
                    <div className="sm:hidden text-xs text-gray-500">Performance score</div>
                  </div>
                  <div className="w-full sm:w-32 h-2 bg-gray-200 rounded-full overflow-hidden mt-1">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-blue-600"
                      style={{ width: `${pharmacy.score}%` }}
                    />
                  </div>
                  <p className="hidden sm:block text-xs text-gray-500 mt-1">Performance score</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* City Performance */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">City Performance</h2>
            <button className="text-blue-600 hover:text-blue-800 text-sm flex items-center gap-1">
              <FaTable /> Details
            </button>
          </div>

          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={cityData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                <XAxis dataKey="city" />
                <YAxis yAxisId="left" tickFormatter={(value) => `₹${value / 1000}k`} />
                <YAxis yAxisId="right" orientation="right" tickFormatter={(value) => `${value}%`} />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Bar yAxisId="left" dataKey="revenue" fill="#3b82f6" name="Revenue" radius={[4, 4, 0, 0]} />
                <Bar yAxisId="right" dataKey="growth" fill="#10b981" name="Growth %" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4">
            {cityData.map((city, index) => (
              <div key={index} className="p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-900">{city.city}</span>
                  <span className="text-sm px-2 py-1 bg-green-100 text-green-700 rounded-full">
                    +{city.growth}%
                  </span>
                </div>
                <p className="text-2xl font-bold text-gray-900 mt-2">
                  ₹{(city.revenue / 1000).toFixed(0)}k
                </p>
                <p className="text-sm text-gray-600">{city.orders.toLocaleString()} orders</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Reports Section */}
      <div className="mt-8 bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <FaFileExcel className="text-green-500" />
            Quick Reports
          </h2>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            <FaDownload />
            Export All
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              title: 'Revenue Report',
              description: 'Complete financial breakdown',
              format: 'PDF, Excel',
              color: 'bg-blue-50 border-blue-100'
            },
            {
              title: 'Pharmacy Analytics',
              description: 'Performance metrics',
              format: 'Excel, CSV',
              color: 'bg-green-50 border-green-100'
            },
            {
              title: 'Rider Performance',
              description: 'Delivery metrics & payouts',
              format: 'PDF, CSV',
              color: 'bg-amber-50 border-amber-100'
            },
            {
              title: 'Customer Insights',
              description: 'Behavior & retention',
              format: 'PDF, Excel',
              color: 'bg-purple-50 border-purple-100'
            }
          ].map((report, index) => (
            <div
              key={index}
              className={`${report.color} p-4 border rounded-xl hover:shadow-sm transition`}
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-gray-900">{report.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{report.description}</p>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <FaEye />
                </button>
              </div>
              <div className="flex items-center justify-between mt-4">
                <span className="text-xs text-gray-500">{report.format}</span>
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  Download →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Summary Footer */}
      <div className="mt-8 text-center text-gray-500 text-sm">
        <p>Last updated: Today, 2:45 PM • Data refreshes every 15 minutes</p>
        <p className="mt-1">Showing data for the last 30 days</p>
      </div>
    </div>
  )
}

export default ReportsAnalytics