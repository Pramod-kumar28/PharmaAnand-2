import React from 'react';
import {
  FaStore,
  FaTruck,
  FaUsers,
  FaRupeeSign,
  FaFileInvoice,
  FaNotesMedical,
  FaExclamationTriangle,
  FaChevronRight,
  FaSyncAlt,
  FaDownload,
  FaFilter,
  FaCheckCircle,
  FaClock,
  FaMotorcycle,
  FaUserMd,
  FaShieldAlt,
  FaTrophy,
  FaCrown,
  FaStar,
  FaAward,
  FaHeart,
  FaChartLine,
  FaChartPie
} from 'react-icons/fa';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  Legend
} from 'recharts';

const AdminDashboard = () => {
  const stats = [
    {
      label: 'Active Pharmacies',
      value: '32',
      icon: FaStore,
      color: 'bg-gradient-to-r from-blue-500 to-cyan-500',
      change: '+4 this week',
      trend: 'up',
      changeColor: 'text-green-600'
    },
    {
      label: 'Active Riders',
      value: '58',
      icon: FaTruck,
      color: 'bg-gradient-to-r from-green-500 to-emerald-500',
      change: '+6 today',
      trend: 'up',
      changeColor: 'text-green-600'
    },
    {
      label: 'Platform Users',
      value: '1,245',
      icon: FaUsers,
      color: 'bg-gradient-to-r from-purple-500 to-pink-500',
      change: '+18 this month',
      trend: 'up',
      changeColor: 'text-green-600'
    },
    {
      label: 'Platform Revenue',
      value: '₹4,86,250',
      icon: FaRupeeSign,
      color: 'bg-gradient-to-r from-orange-500 to-amber-500',
      change: '+12% MoM',
      trend: 'up',
      changeColor: 'text-green-600'
    },
    {
      label: 'Pending Prescriptions',
      value: '14',
      icon: FaNotesMedical,
      color: 'bg-gradient-to-r from-pink-500 to-rose-500',
      change: 'Needs review',
      trend: 'warning',
      changeColor: 'text-yellow-600'
    },
    {
      label: 'Pending Payouts',
      value: '₹38,400',
      icon: FaFileInvoice,
      color: 'bg-gradient-to-r from-teal-500 to-cyan-500',
      change: 'This week',
      trend: 'neutral',
      changeColor: 'text-gray-600'
    }
  ];

  const liveOrders = [
    {
      id: 'ORD-9214',
      pharmacy: 'Sri Medicals',
      customer: 'Rahul Kumar',
      rider: 'Amit Rider',
      amount: '₹540',
      status: 'Out for Delivery',
      statusColor: 'bg-blue-50 text-blue-700 border border-blue-200'
    },
    {
      id: 'ORD-9215',
      pharmacy: 'City Pharma',
      customer: 'Sneha Reddy',
      rider: 'Ravi Kumar',
      amount: '₹1,240',
      status: 'Awaiting Prescription',
      statusColor: 'bg-yellow-50 text-yellow-700 border border-yellow-200'
    },
    {
      id: 'ORD-9216',
      pharmacy: 'Health Plus',
      customer: 'Arjun Singh',
      rider: 'Not Assigned',
      amount: '₹320',
      status: 'Pending Assignment',
      statusColor: 'bg-red-50 text-red-700 border border-red-200'
    },
    {
      id: 'ORD-9217',
      pharmacy: 'Apollo Pharmacy',
      customer: 'Priya Sharma',
      rider: 'Sanjay Rider',
      amount: '₹890',
      status: 'Delivered',
      statusColor: 'bg-green-50 text-green-700 border border-green-200'
    },
    {
      id: 'ORD-9218',
      pharmacy: 'MedLife',
      customer: 'Vikram Patel',
      rider: 'Rajesh Rider',
      amount: '₹1,520',
      status: 'In Transit',
      statusColor: 'bg-purple-50 text-purple-700 border border-purple-200'
    }
  ];

  const alerts = [
    {
      type: 'Low Stock',
      message: 'Paracetamol running low at City Pharma',
      icon: FaExclamationTriangle,
      color: 'border-l-4 border-yellow-500'
    },
    {
      type: 'Rider Issue',
      message: 'Late delivery reported for ORD-9214',
      icon: FaMotorcycle,
      color: 'border-l-4 border-red-500'
    },
    {
      type: 'Subscription',
      message: '2 pharmacies expiring in 3 days',
      icon: FaClock,
      color: 'border-l-4 border-orange-500'
    },
    {
      type: 'Prescription',
      message: '5 prescriptions pending approval',
      icon: FaUserMd,
      color: 'border-l-4 border-blue-500'
    }
  ];

  // Chart Data
  const revenueData = [
    { month: 'Jan', revenue: 420000, orders: 3245 },
    { month: 'Feb', revenue: 380000, orders: 2980 },
    { month: 'Mar', revenue: 450000, orders: 3560 },
    { month: 'Apr', revenue: 486250, orders: 4120 },
    { month: 'May', revenue: 520000, orders: 4320 },
    { month: 'Jun', revenue: 580000, orders: 4780 }
  ];

  const pharmacyPerformance = [
    { name: 'Sri Medicals', orders: 1250, rating: 4.8, fill: '#3b82f6' },
    { name: 'City Pharma', orders: 980, rating: 4.6, fill: '#10b981' },
    { name: 'Health Plus', orders: 856, rating: 4.5, fill: '#8b5cf6' },
    { name: 'Apollo Pharmacy', orders: 720, rating: 4.7, fill: '#f59e0b' },
    { name: 'MedLife', orders: 645, rating: 4.4, fill: '#ef4444' }
  ];

  const categoryData = [
    { name: 'Prescription', value: 45, color: '#3b82f6' },
    { name: 'OTC', value: 30, color: '#10b981' },
    { name: 'Medical Devices', value: 15, color: '#8b5cf6' },
    { name: 'Wellness', value: 10, color: '#f59e0b' }
  ];

  const orderTrendData = [
    { day: 'Mon', orders: 420 },
    { day: 'Tue', orders: 580 },
    { day: 'Wed', orders: 520 },
    { day: 'Thu', orders: 610 },
    { day: 'Fri', orders: 780 },
    { day: 'Sat', orders: 920 },
    { day: 'Sun', orders: 680 }
  ];

  const platformControls = [
    {
      title: 'Approve Pharmacies',
      description: 'Review new pharmacy requests',
      count: '3 pending',
      icon: FaCheckCircle,
      color: 'from-blue-500 to-cyan-500',
      border: 'border-blue-200'
    },
    {
      title: 'Manage Riders',
      description: 'Zones, payouts & performance',
      count: '58 active',
      icon: FaMotorcycle,
      color: 'from-green-500 to-emerald-500',
      border: 'border-green-200'
    },
    {
      title: 'Subscription Plans',
      description: 'Pricing & renewals',
      count: '5 plans active',
      icon: FaShieldAlt,
      color: 'from-purple-500 to-pink-500',
      border: 'border-purple-200'
    },
    {
      title: 'Finance Reports',
      description: 'GST, payouts & revenue',
      count: 'Updated today',
      icon: FaChartPie,
      color: 'from-orange-500 to-amber-500',
      border: 'border-orange-200'
    }
  ];

  return (
    <div className="w-full min-w-full overflow-x-hidden p-4 space-y-6">

      {/* Header Section */}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
          Dashboard Overview
        </h1>
        <p className="text-gray-600 mt-1 text-sm md:text-base">
          Real-time platform analytics and insights
        </p>
      </div>

      {/* KPI Cards - 3 per row in 2 rows */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">
                  {stat.value}
                </p>
                <p className={`text-xs font-medium mt-2 ${stat.changeColor}`}>
                  {stat.change}
                </p>
              </div>
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="text-white text-lg" />
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-4 h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full ${stat.trend === 'up' ? 'bg-gradient-to-r from-green-500 to-emerald-500' :
                  stat.trend === 'warning' ? 'bg-gradient-to-r from-yellow-500 to-orange-500' :
                    'bg-gradient-to-r from-gray-500 to-gray-600'
                  }`}
                style={{
                  width: `${70 + (index * 5)}%`
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
        {/* Revenue Trends - Takes 2/3 width */}
        <div className="lg:col-span-2 bg-gradient-to-br from-white to-blue-50 rounded-2xl p-4 md:p-6 border border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">Revenue Trends</h2>
              <p className="text-gray-500 text-sm md:text-base">Monthly revenue vs orders</p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <button className="px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:shadow-lg transition-all text-xs md:text-sm flex items-center whitespace-nowrap">
                <FaSyncAlt className="mr-1 md:mr-2 text-xs md:text-sm" />
                Refresh
              </button>
              <button className="px-3 py-1.5 md:px-4 md:py-2 bg-white text-gray-700 rounded-xl hover:bg-gray-100 transition-all text-xs md:text-sm flex items-center whitespace-nowrap">
                <FaDownload className="mr-1 md:mr-2 text-xs md:text-sm" />
                Export
              </button>
            </div>
          </div>

          {/* Chart Container with responsive height */}
          <div className="h-64 sm:h-72 md:h-80 lg:h-96 xl:h-80 relative">
            <ResponsiveContainer width="100%" height="100%" debounce={1}>
              <AreaChart
                data={revenueData}
                margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#f0f0f0"
                  vertical={false}
                />
                <XAxis
                  dataKey="month"
                  stroke="#94a3b8"
                  fontSize={12}
                  tickLine={false}
                  axisLine={{ stroke: '#e2e8f0' }}
                  tick={{ fill: '#64748b' }}
                  interval="preserveStartEnd"
                  minTickGap={20}
                />
                <YAxis
                  stroke="#94a3b8"
                  fontSize={12}
                  tickLine={false}
                  axisLine={{ stroke: '#e2e8f0' }}
                  tick={{ fill: '#64748b' }}
                  tickFormatter={(value) => {
                    if (value >= 1000000) return `₹${(value / 1000000).toFixed(1)}M`;
                    if (value >= 1000) return `₹${(value / 1000).toFixed(0)}k`;
                    return `₹${value}`;
                  }}
                  width={60}
                />
                <Tooltip
                  formatter={(value, name) => {
                    if (name === 'revenue') return [`₹${value.toLocaleString()}`, 'Revenue'];
                    return [value.toLocaleString(), 'Orders'];
                  }}
                  labelFormatter={(label) => `Month: ${label}`}
                  contentStyle={{
                    background: 'white',
                    border: '1px solid #e2e8f0',
                    borderRadius: '0.75rem',
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                    fontSize: '12px',
                    padding: '8px 12px'
                  }}
                />
                <Legend
                  verticalAlign="top"
                  height={36}
                  wrapperStyle={{
                    fontSize: '12px',
                    paddingBottom: '10px'
                  }}
                  iconSize={8}
                  iconType="circle"
                />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="#3b82f6"
                  fill="url(#colorRevenue)"
                  strokeWidth={2}
                  fillOpacity={0.3}
                  name="Revenue"
                  activeDot={{
                    r: 4,
                    fill: '#3b82f6',
                    stroke: '#ffffff',
                    strokeWidth: 2
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="orders"
                  stroke="#10b981"
                  strokeWidth={2}
                  dot={{
                    r: 2,
                    fill: '#10b981',
                    stroke: '#ffffff',
                    strokeWidth: 1
                  }}
                  activeDot={{
                    r: 4,
                    fill: '#10b981',
                    stroke: '#ffffff',
                    strokeWidth: 2
                  }}
                  name="Orders"
                />
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.6} />
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1} />
                  </linearGradient>
                </defs>
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Top Pharmacies - Takes 1/3 width */}
        <div className="bg-gradient-to-br from-white to-green-50 rounded-2xl p-6 border border-green-100 shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Top Pharmacies</h2>
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-white shadow-lg">
              <FaTrophy />
            </div>
          </div>

          <div className="space-y-6">
            {/* Pharmacy 1 */}
            <div className="flex items-center group">
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                  <FaCrown />
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-green-500 border-2 border-white flex items-center justify-center text-xs text-white font-bold">
                  1
                </div>
              </div>
              <div className="ml-4 flex-1">
                <div className="flex justify-between">
                  <span className="font-bold text-gray-900">MedLife Pharmacy</span>
                  <span className="font-bold text-green-700">94%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div className="bg-gradient-to-r from-yellow-500 to-orange-500 h-2 rounded-full animate-pulse" style={{ width: '94%' }}></div>
                </div>
              </div>
            </div>

            {/* Pharmacy 2 */}
            <div className="flex items-center group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                <FaStar />
              </div>
              <div className="ml-4 flex-1">
                <div className="flex justify-between">
                  <span className="font-bold text-gray-900">City Meds</span>
                  <span className="font-bold text-green-700">87%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full animate-pulse" style={{ width: '87%' }}></div>
                </div>
              </div>
            </div>

            {/* Pharmacy 3 */}
            <div className="flex items-center group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                <FaAward />
              </div>
              <div className="ml-4 flex-1">
                <div className="flex justify-between">
                  <span className="font-bold text-gray-900">Health Plus</span>
                  <span className="font-bold text-green-700">76%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full animate-pulse" style={{ width: '76%' }}></div>
                </div>
              </div>
            </div>

            {/* Pharmacy 4 */}
            <div className="flex items-center group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                <FaHeart />
              </div>
              <div className="ml-4 flex-1">
                <div className="flex justify-between">
                  <span className="font-bold text-gray-900">Apollo Pharmacy</span>
                  <span className="font-bold text-green-700">68%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full animate-pulse" style={{ width: '68%' }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-green-100">
            <button className="flex items-center justify-center w-full text-green-600 hover:text-green-700 font-medium">
              <span>View All Pharmacy Analytics</span>
              <FaChevronRight className="ml-2 text-sm" />
            </button>
          </div>
        </div>
      </div>

      {/* Live Orders & Alerts */}
      <div className="space-y-4 md:space-y-6 w-full">
  {/* First Row: Recent Orders Table */}
  <div className="bg-gradient-to-br from-white to-purple-50 rounded-xl md:rounded-2xl p-4 md:p-6 border border-purple-100 shadow-lg hover:shadow-xl transition-all duration-300">
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4 md:mb-6">
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-gray-900">Recent Orders</h2>
        <p className="text-gray-500 text-sm md:text-base">Live order tracking dashboard</p>
      </div>
      <button className="px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg md:rounded-xl hover:shadow-lg transition-all flex items-center text-sm md:text-base whitespace-nowrap">
        <FaSyncAlt className="animate-spin mr-1 md:mr-2 text-sm" />
        Live Updates
      </button>
    </div>

    <div className="overflow-x-auto -mx-4 md:mx-0">
      <div className="min-w-[768px] md:min-w-full">
        <table className="w-full">
          <thead>
            <tr className="text-left text-gray-600 text-xs md:text-sm border-b border-purple-100">
              <th className="pb-3 md:pb-4 font-bold px-2 md:px-0">Order ID</th>
              <th className="pb-3 md:pb-4 font-bold px-2 md:px-0">Pharmacy</th>
              <th className="pb-3 md:pb-4 font-bold px-2 md:px-0">Customer</th>
              <th className="pb-3 md:pb-4 font-bold px-2 md:px-0">Status</th>
              <th className="pb-3 md:pb-4 font-bold px-2 md:px-0">Amount</th>
              <th className="pb-3 md:pb-4 font-bold px-2 md:px-0">Time</th>
            </tr>
          </thead>

          <tbody className="text-xs md:text-sm">
            {liveOrders.map((order) => (
              <tr
                key={order.id}
                className="border-b border-purple-50 hover:bg-purple-50/50 transition-colors"
              >
                <td className="py-3 md:py-4 font-bold px-2 md:px-0">
                  <div className="flex items-center">
                    <span className={`w-2 h-2 md:w-3 md:h-3 rounded-full animate-pulse mr-1 md:mr-2 ${
                      order.status === 'Delivered' ? 'bg-green-500' :
                      order.status === 'Awaiting Prescription' ? 'bg-yellow-500' :
                      order.status === 'In Transit' ? 'bg-blue-500' :
                      order.status === 'Out for Delivery' ? 'bg-blue-500' :
                      'bg-red-500'
                    }`}></span>
                    <span className="truncate max-w-[80px] md:max-w-none">{order.id}</span>
                  </div>
                </td>
                <td className="py-3 md:py-4 px-2 md:px-0">
                  <div className="flex items-center">
                    <div className={`w-6 h-6 md:w-8 md:h-8 rounded-full mr-1 md:mr-2 bg-gradient-to-r ${
                      order.pharmacy === 'Sri Medicals' ? 'from-green-500 to-emerald-500' :
                      order.pharmacy === 'City Pharma' ? 'from-blue-500 to-cyan-500' :
                      order.pharmacy === 'Health Plus' ? 'from-purple-500 to-pink-500' :
                      order.pharmacy === 'Apollo Pharmacy' ? 'from-red-500 to-orange-500' :
                      order.pharmacy === 'MedLife' ? 'from-blue-500 to-cyan-500' :
                      'from-blue-500 to-cyan-500'
                    }`}></div>
                    <span className="truncate max-w-[80px] md:max-w-none">{order.pharmacy}</span>
                  </div>
                </td>
                <td className="py-3 md:py-4 font-medium px-2 md:px-0">
                  <span className="truncate max-w-[80px] md:max-w-none block">{order.customer}</span>
                </td>
                <td className="py-3 md:py-4 px-2 md:px-0">
                  <span className={`px-2 py-1 md:px-3 md:py-1.5 rounded-full text-xs font-bold border ${
                    order.status === 'Delivered' ?
                    'bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border-green-200' :
                    order.status === 'Awaiting Prescription' ?
                    'bg-gradient-to-r from-yellow-100 to-amber-100 text-yellow-800 border-yellow-200' :
                    order.status === 'In Transit' || order.status === 'Out for Delivery' ?
                    'bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 border-blue-200' :
                    'bg-gradient-to-r from-red-100 to-orange-100 text-red-800 border-red-200'
                  }`}>
                    <span className="hidden sm:inline">{order.status}</span>
                    <span className="sm:hidden">
                      {order.status === 'Delivered' ? 'Delivered' :
                       order.status === 'Awaiting Prescription' ? 'Awaiting' :
                       order.status === 'In Transit' ? 'Transit' :
                       order.status === 'Out for Delivery' ? 'Delivery' :
                       'Cancelled'}
                    </span>
                  </span>
                </td>
                <td className={`py-3 md:py-4 font-bold px-2 md:px-0 ${
                  order.status === 'Delivered' ? 'text-green-700' :
                  order.status === 'Awaiting Prescription' ? 'text-yellow-700' :
                  order.status === 'In Transit' ? 'text-purple-700' :
                  order.status === 'Out for Delivery' ? 'text-blue-700' :
                  'text-red-700'
                }`}>
                  {order.amount}
                </td>
                <td className="py-3 md:py-4 text-gray-500 px-2 md:px-0">
                  {order.status === 'Delivered' ? '10:24 AM' :
                   order.status === 'Awaiting Prescription' ? '09:45 AM' :
                   order.status === 'In Transit' ? '09:12 AM' :
                   order.status === 'Out for Delivery' ? '09:30 AM' :
                   '08:55 AM'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>

  {/* Second Row: System Updates and Daily Trends */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 w-full">
    {/* System Updates Panel */}
    <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl md:rounded-2xl p-4 md:p-6 border border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="flex items-center mb-4 md:mb-6">
        <FaExclamationTriangle className="text-red-500 mr-2 text-sm md:text-base" />
        <h2 className="text-lg md:text-xl font-bold text-gray-900">
          System Updates
        </h2>
      </div>

      <div className="space-y-3 md:space-y-4">
        {alerts.map((alert, index) => (
          <div
            key={index}
            className="p-3 md:p-4 rounded-lg hover:shadow-sm transition-all"
            style={{
              background: `linear-gradient(to right, ${
                alert.color.includes('yellow') ? '#fefce8' :
                alert.color.includes('red') ? '#fef2f2' :
                alert.color.includes('orange') ? '#fff7ed' : '#eff6ff'
              }, white)`,
              borderLeft: `4px solid ${
                alert.color.includes('yellow') ? '#f59e0b' :
                alert.color.includes('red') ? '#ef4444' :
                alert.color.includes('orange') ? '#f97316' : '#3b82f6'
              }`
            }}
          >
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-0.5">
                <alert.icon className={`text-xs md:text-sm ${
                  alert.color.includes('yellow') ? 'text-yellow-600' :
                  alert.color.includes('red') ? 'text-red-600' :
                  alert.color.includes('orange') ? 'text-orange-600' : 'text-blue-600'
                }`} />
              </div>
              <div className="ml-3 flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {alert.type}
                </p>
                <p className="text-xs text-gray-600 mt-0.5 line-clamp-2">
                  {alert.message}
                </p>
              </div>
              <button className="text-blue-600 text-sm font-medium hover:text-blue-800 ml-2 flex-shrink-0">
                →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Daily Trends */}
    <div className="bg-gradient-to-br from-white to-purple-50 rounded-xl md:rounded-2xl p-4 md:p-6 border border-purple-100 shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg md:text-xl font-bold text-gray-900">
          Daily Order Trends
        </h2>
        <select className="text-xs md:text-sm border border-gray-300 rounded-lg px-2 py-1 md:px-3 md:py-1.5 bg-white">
          <option>Last 7 days</option>
          <option>Last 30 days</option>
          <option>Last quarter</option>
        </select>
      </div>
      <div className="h-40 sm:h-48 md:h-56 lg:h-48">
        <ResponsiveContainer width="100%" height="100%" debounce={1}>
          <LineChart 
            data={orderTrendData}
            margin={{ top: 5, right: 5, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
            <XAxis 
              dataKey="day" 
              stroke="#94a3b8"
              fontSize={11}
              tickLine={false}
              axisLine={{ stroke: '#e2e8f0' }}
              tick={{ fill: '#64748b' }}
              interval="preserveStartEnd"
            />
            <YAxis 
              stroke="#94a3b8"
              fontSize={11}
              tickLine={false}
              axisLine={{ stroke: '#e2e8f0' }}
              tick={{ fill: '#64748b' }}
              width={35}
            />
            <Tooltip
              formatter={(value) => [`${value} orders`, 'Orders']}
              labelFormatter={(label) => `Day: ${label}`}
              contentStyle={{
                background: 'white',
                border: '1px solid #e2e8f0',
                borderRadius: '0.5rem',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                fontSize: '11px',
                padding: '6px 10px'
              }}
            />
            <Line
              type="monotone"
              dataKey="orders"
              stroke="#8b5cf6"
              strokeWidth={1.5}
              dot={{ 
                r: 2, 
                fill: '#8b5cf6',
                stroke: '#ffffff',
                strokeWidth: 1 
              }}
              activeDot={{ 
                r: 4, 
                fill: '#8b5cf6',
                stroke: '#ffffff',
                strokeWidth: 2 
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  </div>
</div>

      {/* Platform Controls */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-4 md:p-6 w-full">
        <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6">
          Platform Controls
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {platformControls.map((control, index) => (
            <button
              key={index}
              className="group p-4 rounded-lg border hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 text-left"
              style={{ borderColor: control.border.split('-')[1] ? `#${control.border.split('-')[1]}` : '#e5e7eb' }}
            >
              <div className="flex items-start justify-between mb-3">
                <div className={`p-2 rounded-lg bg-gradient-to-r ${control.color}`}>
                  <control.icon className="text-white text-sm" />
                </div>
                <span className="text-xs font-medium text-gray-500">
                  {control.count}
                </span>
              </div>
              <h3 className="font-bold text-gray-900 text-base mb-1">
                {control.title}
              </h3>
              <p className="text-sm text-gray-600">
                {control.description}
              </p>
              <div className="mt-3 flex items-center text-blue-600 text-xs font-medium">
                <span>Quick Action</span>
                <FaChevronRight className="ml-1 text-xs group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Category Distribution */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-4 md:p-6">
        <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4">
          Product Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={70}
                  paddingAngle={2}
                  dataKey="value"
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value) => [`${value}%`, 'Share']}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-col justify-center">
            <div className="space-y-4">
              {categoryData.map((category, index) => (
                <div key={index} className="flex items-center">
                  <div
                    className="w-3 h-3 rounded-full mr-3"
                    style={{ backgroundColor: category.color }}
                  ></div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-900">{category.name}</span>
                      <span className="text-sm font-bold text-gray-900">{category.value}%</span>
                    </div>
                    <div className="mt-1 h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${category.value}%`,
                          backgroundColor: category.color
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;