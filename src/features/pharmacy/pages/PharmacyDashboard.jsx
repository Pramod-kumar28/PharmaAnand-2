// src/pages/pharmacy/Dashboard.jsx
import React, { useState, useEffect } from 'react';
import { 
  FaShoppingCart, 
  FaMoneyBillWave, 
  FaClipboardCheck, 
  FaTruck,
  FaChartLine,
  FaExclamationTriangle,
  FaUsers,
  FaBox,
  FaArrowUp,
  FaArrowDown,
  FaCalendar,
  FaFilter,
  FaDownload,
  FaBell,
  FaClock,
  FaStore,
  FaPercent,
  FaStar,
  FaPhone,
  FaMapMarkerAlt
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { 
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer 
} from 'recharts';

const PharmacyDashboard = () => {
  const [timeRange, setTimeRange] = useState('week');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [stats, setStats] = useState({
    pendingOrders: 12,
    completedToday: 45,
    totalRevenue: '₹45,670',
    expiringSoon: 8,
    lowStock: 15,
    activeDeliveries: 5,
    totalProducts: 156,
    totalCustomers: 320,
    revenueGrowth: 12.5,
    orderGrowth: 8.2,
    customerGrowth: 5.7,
    avgDeliveryTime: 32,
    customerRating: 4.8,
    conversionRate: 68
  });

  // Revenue Chart Data
  const revenueData = {
    day: [
      { time: '8AM', revenue: 8500, orders: 8 },
      { time: '10AM', revenue: 12500, orders: 12 },
      { time: '12PM', revenue: 18600, orders: 18 },
      { time: '2PM', revenue: 14200, orders: 14 },
      { time: '4PM', revenue: 21000, orders: 21 },
      { time: '6PM', revenue: 17800, orders: 17 },
      { time: '8PM', revenue: 9500, orders: 9 },
    ],
    week: [
      { day: 'Mon', revenue: 28500, orders: 28 },
      { day: 'Tue', revenue: 32400, orders: 32 },
      { day: 'Wed', revenue: 39600, orders: 39 },
      { day: 'Thu', revenue: 41200, orders: 41 },
      { day: 'Fri', revenue: 48600, orders: 48 },
      { day: 'Sat', revenue: 51200, orders: 51 },
      { day: 'Sun', revenue: 45600, orders: 45 },
    ],
    month: [
      { week: 'Week 1', revenue: 185400, orders: 185 },
      { week: 'Week 2', revenue: 212300, orders: 212 },
      { week: 'Week 3', revenue: 198700, orders: 198 },
      { week: 'Week 4', revenue: 245600, orders: 245 },
    ]
  };

  // Top Products Data
  const topProducts = [
    { name: 'Paracetamol 500mg', sales: 245, revenue: 36750, growth: 12.3, color: '#3B82F6' },
    { name: 'Amoxicillin 250mg', sales: 189, revenue: 16065, growth: 8.7, color: '#10B981' },
    { name: 'Cetirizine 10mg', sales: 167, revenue: 4175, growth: 15.2, color: '#8B5CF6' },
    { name: 'Vitamin C', sales: 142, revenue: 7100, growth: 22.1, color: '#F59E0B' },
    { name: 'Omeprazole 20mg', sales: 128, revenue: 5760, growth: 5.4, color: '#EF4444' }
  ];

  // Order Status Distribution
  const orderStatusData = [
    { name: 'Pending', value: 12, color: '#FBBF24' },
    { name: 'Processing', value: 8, color: '#3B82F6' },
    { name: 'Ready', value: 5, color: '#8B5CF6' },
    { name: 'Dispatched', value: 3, color: '#6366F1' },
    { name: 'Delivered', value: 45, color: '#10B981' },
    { name: 'Cancelled', value: 2, color: '#EF4444' }
  ];

  // Recent Orders - Mobile Friendly Format
  const recentOrders = [
    { 
      id: 'ORD001', 
      customer: 'Rahul Sharma', 
      phone: '+91 98765 43210',
      items: 3, 
      amount: '₹850', 
      status: 'Pending', 
      time: '10 min ago', 
      prescription: true 
    },
    { 
      id: 'ORD002', 
      customer: 'Priya Patel', 
      phone: '+91 98765 43211',
      items: 2, 
      amount: '₹1,250', 
      status: 'Processing', 
      time: '25 min ago', 
      prescription: false 
    },
    { 
      id: 'ORD003', 
      customer: 'Amit Verma', 
      phone: '+91 98765 43212',
      items: 5, 
      amount: '₹620', 
      status: 'Dispatched', 
      time: '1 hour ago', 
      prescription: true 
    },
    { 
      id: 'ORD004', 
      customer: 'Neha Gupta', 
      phone: '+91 98765 43213',
      items: 4, 
      amount: '₹2,100', 
      status: 'Delivered', 
      time: '2 hours ago', 
      prescription: true 
    },
  ];

  // Upcoming Expiries
  const expiringItems = [
    { name: 'Metformin 500mg', expiry: '2024-09-20', daysLeft: 60, stock: 5 },
    { name: 'Vitamin B Complex', expiry: '2024-09-25', daysLeft: 65, stock: 8 },
    { name: 'Azithromycin 250mg', expiry: '2024-10-05', daysLeft: 75, stock: 12 },
    { name: 'Cough Syrup', expiry: '2024-10-15', daysLeft: 85, stock: 15 },
  ];

  // Customer Growth Chart Data
  const customerGrowthData = [
    { month: 'Jan', new: 45, returning: 120 },
    { month: 'Feb', new: 52, returning: 135 },
    { month: 'Mar', new: 48, returning: 142 },
    { month: 'Apr', new: 61, returning: 155 },
    { month: 'May', new: 55, returning: 168 },
    { month: 'Jun', new: 68, returning: 185 },
  ];

  // Performance Metrics for empty space
  const performanceMetrics = [
    { label: 'Order Completion', value: '94%', icon: FaClipboardCheck, color: 'text-green-600', bgColor: 'bg-green-100' },
    { label: 'Avg Response Time', value: '12 min', icon: FaClock, color: 'text-blue-600', bgColor: 'bg-blue-100' },
    { label: 'Customer Rating', value: '4.8/5', icon: FaStar, color: 'text-yellow-600', bgColor: 'bg-yellow-100' },
    { label: 'Conversion Rate', value: '68%', icon: FaPercent, color: 'text-purple-600', bgColor: 'bg-purple-100' },
  ];

  const currentRevenueData = revenueData[timeRange === 'today' ? 'day' : timeRange === 'week' ? 'week' : 'month'];

  // Mobile-friendly order status component
  const OrderCard = ({ order }) => {
    const getStatusColor = (status) => {
      switch(status) {
        case 'Delivered': return 'bg-green-100 text-green-800';
        case 'Dispatched': return 'bg-blue-100 text-blue-800';
        case 'Processing': return 'bg-yellow-100 text-yellow-800';
        case 'Pending': return 'bg-gray-100 text-gray-800';
        default: return 'bg-gray-100 text-gray-800';
      }
    };

    return (
      <div className="bg-white p-4 rounded-lg border border-gray-200 mb-3 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex justify-between items-start mb-2">
          <div>
            <div className="font-bold text-gray-800">{order.id}</div>
            <div className="text-sm text-gray-500">{order.time}</div>
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
            {order.status}
          </span>
        </div>
        
        <div className="mb-3">
          <div className="font-medium text-gray-800">{order.customer}</div>
          <div className="text-sm text-gray-600 flex items-center mt-1">
            <FaPhone className="mr-2 text-xs" />
            {order.phone}
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <div>
            <div className="text-2xl font-bold text-gray-800">{order.amount}</div>
            <div className="text-sm text-gray-600">{order.items} items</div>
          </div>
          
          <div className="text-right">
            {order.prescription ? (
              <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">Prescription</span>
            ) : (
              <span className="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded">No Rx</span>
            )}
            <div className="mt-2">
              <button className="text-blue-600 text-sm font-medium hover:text-blue-800">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="p-3 md:p-6">
      {/* Header */}
      <div className="mb-4 md:mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div>
            <h1 className="text-lg md:text-2xl font-bold text-gray-800">Pharmacy Dashboard</h1>
            <p className="text-gray-600 text-xs md:text-base">Welcome back! Here's your pharmacy performance overview</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="flex items-center bg-white border border-gray-300 rounded-lg px-3 py-2">
              <FaCalendar className="text-gray-400 mr-2" />
              <select 
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                className="bg-transparent focus:outline-none text-sm w-full"
              >
                <option value="today">Today</option>
                <option value="week">This Week</option>
                <option value="month">This Month</option>
              </select>
            </div>
            <div className="flex gap-2">
              <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm">
                <FaFilter /> Filter
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm">
                <FaDownload /> Export
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards - Mobile Responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mb-4 md:mb-8">
        {/* Pending Orders */}
        <div className="bg-white p-3 md:p-6 rounded-xl shadow-lg border border-gray-200">
          <div className="flex items-center justify-between mb-2 md:mb-4">
            <div className="p-2 md:p-3 bg-blue-100 rounded-lg">
              <FaShoppingCart className="text-lg md:text-2xl text-blue-600" />
            </div>
            <div className={`flex items-center px-2 py-1 rounded-full text-xs ${stats.revenueGrowth >= 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {stats.revenueGrowth >= 0 ? <FaArrowUp className="mr-1" /> : <FaArrowDown className="mr-1" />}
              {Math.abs(stats.revenueGrowth)}%
            </div>
          </div>
          <div>
            <p className="text-gray-500 text-xs md:text-sm">Pending Orders</p>
            <h3 className="text-xl md:text-3xl font-bold text-gray-800 mt-1">{stats.pendingOrders}</h3>
            <Link to="/pharmacy/orders" className="text-blue-600 text-xs md:text-sm mt-2 inline-block hover:underline">
              View details →
            </Link>
          </div>
        </div>

        {/* Revenue */}
        <div className="bg-white p-3 md:p-6 rounded-xl shadow-lg border border-gray-200">
          <div className="flex items-center justify-between mb-2 md:mb-4">
            <div className="p-2 md:p-3 bg-green-100 rounded-lg">
              <FaMoneyBillWave className="text-lg md:text-2xl text-green-600" />
            </div>
            <div className="flex items-center px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
              <FaArrowUp className="mr-1" />{stats.revenueGrowth}%
            </div>
          </div>
          <div>
            <p className="text-gray-500 text-xs md:text-sm">Today's Revenue</p>
            <h3 className="text-xl md:text-3xl font-bold text-gray-800 mt-1">{stats.totalRevenue}</h3>
            <Link to="/pharmacy/reports" className="text-green-600 text-xs md:text-sm mt-2 inline-block hover:underline">
              View report →
            </Link>
          </div>
        </div>

        {/* Active Deliveries */}
        <div className="bg-white p-3 md:p-6 rounded-xl shadow-lg border border-gray-200">
          <div className="flex items-center justify-between mb-2 md:mb-4">
            <div className="p-2 md:p-3 bg-yellow-100 rounded-lg">
              <FaTruck className="text-lg md:text-2xl text-yellow-600" />
            </div>
            <div className="text-xs md:text-sm text-gray-500">Avg: {stats.avgDeliveryTime} min</div>
          </div>
          <div>
            <p className="text-gray-500 text-xs md:text-sm">Active Deliveries</p>
            <h3 className="text-xl md:text-3xl font-bold text-gray-800 mt-1">{stats.activeDeliveries}</h3>
            <Link to="/pharmacy/delivery" className="text-yellow-600 text-xs md:text-sm mt-2 inline-block hover:underline">
              Track all →
            </Link>
          </div>
        </div>

        {/* Low Stock */}
        <div className="bg-white p-3 md:p-6 rounded-xl shadow-lg border border-gray-200">
          <div className="flex items-center justify-between mb-2 md:mb-4">
            <div className="p-2 md:p-3 bg-red-100 rounded-lg">
              <FaExclamationTriangle className="text-lg md:text-2xl text-red-600" />
            </div>
            <div className="text-xs md:text-sm text-red-600 font-medium">Critical: 3</div>
          </div>
          <div>
            <p className="text-gray-500 text-xs md:text-sm">Low Stock Items</p>
            <h3 className="text-xl md:text-3xl font-bold text-gray-800 mt-1">{stats.lowStock}</h3>
            <Link to="/pharmacy/products" className="text-red-600 text-xs md:text-sm mt-2 inline-block hover:underline">
              Check inventory →
            </Link>
          </div>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-6 mb-4 md:mb-8">
        {/* Revenue Chart */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-3 md:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 md:mb-6 gap-2">
            <div>
              <h2 className="text-base md:text-xl font-bold text-gray-800">Revenue Trend</h2>
              <p className="text-gray-600 text-xs md:text-sm">Revenue and orders over time</p>
            </div>
            <div className="text-lg md:text-2xl font-bold text-green-600">+{stats.revenueGrowth}%</div>
          </div>
          <div className="h-48 md:h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={currentRevenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis 
                  dataKey={timeRange === 'today' ? 'time' : timeRange === 'week' ? 'day' : 'week'} 
                  stroke="#94a3b8"
                  fontSize={isMobile ? 9 : 12}
                />
                <YAxis 
                  stroke="#94a3b8"
                  fontSize={isMobile ? 9 : 12}
                  tickFormatter={(value) => isMobile ? `₹${value/1000}k` : `₹${(value/1000).toFixed(0)}k`}
                />
                <Tooltip 
                  formatter={(value, name) => [
                    name === 'revenue' ? `₹${value.toLocaleString()}` : value,
                    name === 'revenue' ? 'Revenue' : 'Orders'
                  ]}
                  labelFormatter={(label) => `${timeRange === 'today' ? 'Time' : timeRange === 'week' ? 'Day' : 'Week'}: ${label}`}
                />
                <Legend wrapperStyle={{ fontSize: isMobile ? 9 : 12 }} />
                <Line 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="#3B82F6" 
                  strokeWidth={isMobile ? 2 : 3}
                  dot={isMobile ? false : { r: 4 }}
                  activeDot={isMobile ? false : { r: 6 }}
                  name="Revenue"
                />
                <Line 
                  type="monotone" 
                  dataKey="orders" 
                  stroke="#10B981" 
                  strokeWidth={isMobile ? 1 : 2}
                  strokeDasharray="5 5"
                  dot={false}
                  name="Orders"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Order Status Distribution */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-3 md:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 md:mb-6 gap-2">
            <div>
              <h2 className="text-base md:text-xl font-bold text-gray-800">Order Status</h2>
              <p className="text-gray-600 text-xs md:text-sm">Distribution of current orders</p>
            </div>
            <div className="text-lg md:text-2xl font-bold text-blue-600">{stats.completedToday} today</div>
          </div>
          <div className="h-48 md:h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={orderStatusData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => isMobile ? '' : `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={isMobile ? 50 : 80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {orderStatusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value} orders`, 'Count']} />
                {!isMobile && <Legend wrapperStyle={{ fontSize: 12 }} />}
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Second Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-6 mb-4 md:mb-8">
        {/* Customer Growth with Performance Metrics */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-3 md:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 md:mb-6 gap-2">
            <div>
              <h2 className="text-base md:text-xl font-bold text-gray-800">Customer Growth & Performance</h2>
              <p className="text-gray-600 text-xs md:text-sm">Customer metrics and performance indicators</p>
            </div>
            <div className="flex items-center text-green-600 text-sm md:text-base">
              <FaArrowUp className="mr-1" />
              <span className="font-bold">+{stats.customerGrowth}%</span>
            </div>
          </div>
          
          {/* Customer Growth Chart */}
          <div className="h-40 md:h-56 mb-3">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={customerGrowthData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis 
                  dataKey="month" 
                  stroke="#94a3b8"
                  fontSize={isMobile ? 9 : 12}
                />
                <YAxis 
                  stroke="#94a3b8"
                  fontSize={isMobile ? 9 : 12}
                />
                <Tooltip />
                {!isMobile && <Legend wrapperStyle={{ fontSize: 12 }} />}
                <Bar 
                  dataKey="new" 
                  name="New Customers" 
                  fill="#3B82F6" 
                  radius={[4, 4, 0, 0]} 
                />
                <Bar 
                  dataKey="returning" 
                  name="Returning Customers" 
                  fill="#10B981" 
                  radius={[4, 4, 0, 0]} 
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Performance Metrics Grid - Fills the empty space */}
          <div className="grid grid-cols-2 gap-2 md:gap-4 mt-3 md:mt-6">
            {performanceMetrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <div key={index} className="text-center p-2 md:p-4 rounded-lg border border-gray-100">
                  <div className={`inline-flex p-1 md:p-3 rounded-lg ${metric.bgColor} mb-1 md:mb-2`}>
                    <Icon className={`text-sm md:text-xl ${metric.color}`} />
                  </div>
                  <div className="text-sm md:text-xl font-bold text-gray-800">{metric.value}</div>
                  <div className="text-xs md:text-sm text-gray-600 mt-1">{metric.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Top Products */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-3 md:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 md:mb-6 gap-2">
            <div>
              <h2 className="text-base md:text-xl font-bold text-gray-800">Top Products</h2>
              <p className="text-gray-600 text-xs md:text-sm">Best performing products this month</p>
            </div>
            <Link to="/pharmacy/products" className="text-blue-600 hover:underline text-xs md:text-sm">
              View all →
            </Link>
          </div>
          <div className="space-y-2 md:space-y-4">
            {topProducts.map((product, index) => (
              <div key={product.name} className="flex items-center justify-between p-2 md:p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="flex items-center min-w-0">
                  <div className="w-6 h-6 md:w-10 md:h-10 rounded-lg flex items-center justify-center font-bold mr-2 md:mr-3 flex-shrink-0" 
                       style={{ backgroundColor: product.color + '20' }}>
                    <FaBox className="text-xs md:text-base" style={{ color: product.color }} />
                  </div>
                  <div className="min-w-0">
                    <div className="font-medium text-xs md:text-base truncate">{product.name}</div>
                    <div className="text-xs text-gray-500">{product.sales} units</div>
                  </div>
                </div>
                <div className="text-right flex-shrink-0 ml-2">
                  <div className="font-bold text-gray-800 text-xs md:text-base">₹{product.revenue.toLocaleString()}</div>
                  <div className={`text-xs ${product.growth >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {product.growth >= 0 ? '+' : ''}{product.growth}%
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Additional Info */}
          <div className="mt-3 md:mt-6 pt-3 border-t border-gray-200">
            <div className="flex items-center justify-between text-xs md:text-sm">
              <div className="flex items-center">
                <FaBell className="text-yellow-500 mr-1 md:mr-2 text-xs md:text-sm" />
                <span className="text-gray-600">Restock alerts:</span>
              </div>
              <span className="font-medium text-red-600">3 items critical</span>
            </div>
            <div className="flex items-center justify-between text-xs md:text-sm mt-1 md:mt-2">
              <div className="flex items-center">
                <FaStore className="text-blue-500 mr-1 md:mr-2 text-xs md:text-sm" />
                <span className="text-gray-600">Inventory value:</span>
              </div>
              <span className="font-medium text-green-600">₹2,45,800</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row - Mobile Responsive */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 md:gap-6">
        {/* Recent Orders - Mobile Cards / Desktop Table */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-3 md:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 md:mb-6 gap-2">
              <h2 className="text-base md:text-xl font-bold text-gray-800">Recent Orders</h2>
              <Link to="/pharmacy/orders" className="text-blue-600 hover:underline text-xs md:text-sm">
                View all orders →
              </Link>
            </div>
            
            {isMobile ? (
              // Mobile: Card View
              <div className="space-y-3">
                {recentOrders.map((order) => (
                  <OrderCard key={order.id} order={order} />
                ))}
              </div>
            ) : (
              // Desktop: Table View
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Order ID</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Prescription</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {recentOrders.map((order) => (
                      <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-4 py-4">
                          <div className="font-medium">{order.id}</div>
                          <div className="text-sm text-gray-500">{order.time}</div>
                        </td>
                        <td className="px-4 py-4">
                          <div className="font-medium">{order.customer}</div>
                          <div className="text-sm text-gray-500">{order.phone}</div>
                        </td>
                        <td className="px-4 py-4 font-bold">{order.amount}</td>
                        <td className="px-4 py-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                            order.status === 'Dispatched' ? 'bg-blue-100 text-blue-800' :
                            order.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {order.status}
                          </span>
                        </td>
                        <td className="px-4 py-4">
                          {order.prescription ? (
                            <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">Required</span>
                          ) : (
                            <span className="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded">Not Required</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>

        {/* Expiring Items & Quick Stats */}
        <div className="space-y-3 md:space-y-6">
          {/* Expiring Items */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-3 md:p-6">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-base md:text-xl font-bold text-gray-800">Expiring Soon</h2>
              <span className="px-2 py-1 bg-red-100 text-red-800 text-xs font-medium rounded-full">
                {expiringItems.length} items
              </span>
            </div>
            
            <div className="space-y-2">
              {expiringItems.map((item) => (
                <div key={item.name} className="p-2 md:p-3 border border-red-100 rounded-lg hover:bg-red-50 transition-colors">
                  <div className="flex justify-between items-start mb-1">
                    <div className="font-medium text-xs md:text-sm">{item.name}</div>
                    <div className={`px-1 md:px-2 py-1 text-xs font-medium rounded ${
                      item.daysLeft <= 60 ? 'bg-red-100 text-red-800' :
                      item.daysLeft <= 90 ? 'bg-orange-100 text-orange-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {item.daysLeft <= 60 ? 'Critical' : item.daysLeft <= 90 ? 'Soon' : 'Warning'}
                    </div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-600">
                    <div>Exp: {item.expiry}</div>
                    <div>Stock: {item.stock}</div>
                  </div>
                  <div className="mt-1">
                    <div className="flex justify-between text-xs mb-1">
                      <span>Remaining</span>
                      <span>{item.daysLeft} days</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1 md:h-2">
                      <div 
                        className={`h-1 md:h-2 rounded-full ${
                          item.daysLeft <= 60 ? 'bg-red-600' :
                          item.daysLeft <= 90 ? 'bg-orange-500' :
                          'bg-yellow-500'
                        }`}
                        style={{ width: `${Math.max(10, (item.daysLeft / 180) * 100)}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <Link to="/pharmacy/products" className="mt-3 block text-center text-blue-600 hover:underline text-xs md:text-sm">
              Manage Inventory →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PharmacyDashboard;