// src/pages/pharmacy/Reports.jsx
import React, { useState, useMemo } from 'react';
import { 
  FaChartLine, 
  FaRupeeSign, 
  FaShoppingCart, 
  FaUsers, 
  FaCalendar, 
  FaDownload, 
  FaFileExport,
  FaFilePdf,
  FaFileExcel,
  FaFileCsv,
  FaFilter,
  FaPrint,
  FaArrowUp,
  FaArrowDown,
  FaPercentage,
  FaClock,
  FaBox,
  FaPills,
  FaUserMd,
  FaStar,
  FaTachometerAlt,
  FaCheckCircle,
  FaExclamationTriangle,
  FaCalendarCheck,
  FaMoneyBillWave
} from 'react-icons/fa';
import { 
  LineChart, 
  Line, 
  BarChart, 
  Bar, 
  PieChart, 
  Pie, 
  Cell, 
  AreaChart, 
  Area,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  ComposedChart,
  Scatter,
  ReferenceLine
} from 'recharts';

const Reports = () => {
  const [reportType, setReportType] = useState('sales');
  const [timeRange, setTimeRange] = useState('month');

  // Sales Data for Charts
  const salesData = useMemo(() => [
    { day: 'Mon', sales: 4200, orders: 28, customers: 25, profit: 1260 },
    { day: 'Tue', sales: 5800, orders: 35, customers: 32, profit: 1740 },
    { day: 'Wed', sales: 6100, orders: 42, customers: 38, profit: 1830 },
    { day: 'Thu', sales: 5200, orders: 31, customers: 28, profit: 1560 },
    { day: 'Fri', sales: 7800, orders: 48, customers: 42, profit: 2340 },
    { day: 'Sat', sales: 9200, orders: 56, customers: 50, profit: 2760 },
    { day: 'Sun', sales: 6800, orders: 39, customers: 36, profit: 2040 }
  ], []);

  const monthlySalesData = useMemo(() => [
    { month: 'Jan', revenue: 125000, profit: 45000, growth: 8.5 },
    { month: 'Feb', revenue: 145000, profit: 52000, growth: 16.0 },
    { month: 'Mar', revenue: 165000, profit: 62000, growth: 19.3 },
    { month: 'Apr', revenue: 152000, profit: 58000, growth: 7.2 },
    { month: 'May', revenue: 178000, profit: 68000, growth: 17.1 },
    { month: 'Jun', revenue: 195000, profit: 75000, growth: 9.6 }
  ], []);

  // Top Selling Products Data
  const topProductsData = useMemo(() => [
    { name: 'Paracetamol 500mg', sales: 2450, revenue: 36750, percentage: 24 },
    { name: 'Amoxicillin 250mg', sales: 1890, revenue: 160650, percentage: 19 },
    { name: 'Cetirizine 10mg', sales: 1520, revenue: 38000, percentage: 15 },
    { name: 'Omeprazole 20mg', sales: 1340, revenue: 60300, percentage: 13 },
    { name: 'Metformin 500mg', sales: 980, revenue: 24500, percentage: 10 },
  ], []);

  const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];

  // Expiry Data
  const expiryData = useMemo(() => [
    { category: 'Pain Relief', expiring: 8, total: 45, percentage: 17.8 },
    { category: 'Antibiotics', expiring: 12, total: 38, percentage: 31.6 },
    { category: 'Antacids', expiring: 5, total: 28, percentage: 17.9 },
    { category: 'Allergy', expiring: 7, total: 32, percentage: 21.9 },
    { category: 'Diabetes', expiring: 3, total: 18, percentage: 16.7 },
  ], []);

  // Commission Data
  const commissionData = useMemo(() => [
    { agent: 'Dr. Sharma', commission: 12500, orders: 42, rate: 12, performance: 92 },
    { agent: 'Dr. Patel', commission: 9800, orders: 35, rate: 10, performance: 85 },
    { agent: 'Dr. Reddy', commission: 15200, orders: 48, rate: 15, performance: 96 },
    { agent: 'Dr. Gupta', commission: 8200, orders: 28, rate: 8, performance: 78 },
    { agent: 'Dr. Kumar', commission: 11300, orders: 39, rate: 11, performance: 88 },
  ], []);

  // Performance Metrics with more meaningful data
  const performanceMetrics = useMemo(() => [
    { metric: 'Order Accuracy', value: 98.5, target: 95, status: 'exceed', icon: FaCheckCircle, color: '#10b981' },
    { metric: 'Delivery Time', value: 94.2, target: 90, status: 'exceed', icon: FaClock, color: '#3b82f6' },
    { metric: 'Customer Rating', value: 4.7, target: 4.5, status: 'exceed', icon: FaStar, color: '#f59e0b' },
    { metric: 'Inventory Turn', value: 3.8, target: 4.0, status: 'below', icon: FaTachometerAlt, color: '#ef4444' },
    { metric: 'Rx Accuracy', value: 99.1, target: 98, status: 'exceed', icon: FaPills, color: '#8b5cf6' },
  ], []);

  // Operational Efficiency Data
  const efficiencyData = useMemo(() => [
    { hour: '9AM', orders: 12, efficiency: 85, avgTime: 15 },
    { hour: '10AM', orders: 18, efficiency: 88, avgTime: 14 },
    { hour: '11AM', orders: 22, efficiency: 92, avgTime: 12 },
    { hour: '12PM', orders: 28, efficiency: 90, avgTime: 13 },
    { hour: '1PM', orders: 15, efficiency: 82, avgTime: 16 },
    { hour: '2PM', orders: 20, efficiency: 89, avgTime: 14 },
    { hour: '3PM', orders: 25, efficiency: 94, avgTime: 11 },
    { hour: '4PM', orders: 30, efficiency: 96, avgTime: 10 },
    { hour: '5PM', orders: 35, efficiency: 93, avgTime: 12 },
  ], []);

  // Revenue Breakdown
  const revenueBreakdown = useMemo(() => [
    { category: 'Prescription', value: 65, color: '#3b82f6', revenue: 158750 },
    { category: 'OTC Medicines', value: 20, color: '#10b981', revenue: 48850 },
    { category: 'Medical Devices', value: 8, color: '#f59e0b', revenue: 19540 },
    { category: 'Supplements', value: 5, color: '#8b5cf6', revenue: 12210 },
    { category: 'Others', value: 2, color: '#ef4444', revenue: 4884 },
  ], []);

  // Custom Tooltip for Charts
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg text-sm">
          <p className="font-medium text-gray-800 mb-2">{label}</p>
          {payload.map((entry, index) => (
            <div key={index} className="flex items-center justify-between mb-1">
              <div className="flex items-center">
                <div 
                  className="w-3 h-3 rounded-full mr-2" 
                  style={{ backgroundColor: entry.color }}
                />
                <span className="text-gray-600">{entry.name}:</span>
              </div>
              <span className="font-medium text-gray-800 ml-2">
                {entry.dataKey.includes('revenue') || entry.dataKey.includes('sales') || entry.dataKey.includes('commission')
                  ? `₹${entry.value.toLocaleString()}`
                  : entry.dataKey.includes('efficiency') || entry.dataKey.includes('percentage')
                  ? `${entry.value}%`
                  : entry.dataKey.includes('rating')
                  ? `${entry.value}/5`
                  : entry.value}
              </span>
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  // Custom Pie Chart Tooltip
  const CustomPieTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg text-sm">
          <p className="font-medium text-gray-800 mb-2">{data.category}</p>
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Percentage:</span>
              <span className="font-medium text-gray-800">{data.value}%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Revenue:</span>
              <span className="font-medium text-gray-800">₹{data.revenue?.toLocaleString()}</span>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  // Export Report Function
  const handleExport = (format) => {
    alert(`Exporting ${reportType} report as ${format.toUpperCase()}`);
  };

  // Calculate summary metrics
  const summaryMetrics = useMemo(() => ({
    monthlyRevenue: 245000,
    totalOrders: 842,
    avgOrderValue: 1287,
    satisfactionRate: 94.7,
    monthlyGrowth: 12.5,
    orderGrowth: 8.3,
    valueGrowth: 5.2,
    satisfactionGrowth: 2.1,
  }), []);

  return (
    <div className="p-3 md:p-6">
      {/* Header - Mobile Optimized */}
      <div className="mb-4 md:mb-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-gray-800">Reports & Analytics</h1>
            <p className="text-gray-600 text-sm md:text-base">Comprehensive insights and performance metrics</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button 
              onClick={() => handleExport('pdf')}
              className="flex items-center gap-1 px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 text-sm"
            >
              <FaFilePdf size={14} /> PDF
            </button>
            <button 
              onClick={() => handleExport('excel')}
              className="flex items-center gap-1 px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 text-sm"
            >
              <FaFileExcel size={14} /> Excel
            </button>
            <button 
              onClick={() => window.print()}
              className="flex items-center gap-1 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm"
            >
              <FaPrint size={14} /> Print
            </button>
          </div>
        </div>
      </div>

      {/* Report Type Selector - Mobile Optimized */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
        {[
          { id: 'sales', icon: FaRupeeSign, title: 'Sales', desc: 'Revenue', color: 'blue' },
          { id: 'performance', icon: FaChartLine, title: 'Performance', desc: 'Metrics', color: 'green' },
          { id: 'expiry', icon: FaCalendar, title: 'Expiry', desc: 'Medicines', color: 'red' },
          { id: 'commission', icon: FaMoneyBillWave, title: 'Commission', desc: 'Agents', color: 'purple' }
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => setReportType(item.id)}
            className={`p-3 rounded-lg border transition-all duration-200 ${
              reportType === item.id 
                ? `bg-${item.color}-50 border-${item.color}-200 shadow-sm` 
                : 'bg-white border-gray-200 hover:bg-gray-50 hover:border-gray-300'
            }`}
          >
            <div className="flex flex-col items-center text-center">
              <div className={`p-2 bg-${item.color}-100 rounded-lg mb-2`}>
                <item.icon className={`text-${item.color}-600 text-base`} />
              </div>
              <div className="text-xs font-medium text-gray-800">{item.title}</div>
              <div className="text-xs text-gray-500 mt-1">{item.desc}</div>
            </div>
          </button>
        ))}
      </div>

      {/* Filters Bar - Mobile Optimized */}
      <div className="bg-white p-3 rounded-lg border border-gray-200 mb-4">
        <div className="flex items-center gap-2 mb-3">
          <FaFilter className="text-gray-400" size={14} />
          <span className="text-sm text-gray-600">Time Range:</span>
        </div>
        <div className="flex flex-wrap gap-1">
          {['today', 'week', 'month', 'quarter', 'year'].map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-3 py-1.5 text-xs rounded-lg font-medium transition-all ${
                timeRange === range 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {range === 'today' ? 'Today' : 
               range === 'week' ? 'Week' : 
               range === 'month' ? 'Month' : 
               range === 'quarter' ? 'Quarter' : 'Year'}
            </button>
          ))}
        </div>
      </div>

      {/* Key Metrics Dashboard - Mobile Optimized */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3 mb-4">
        {[
          { 
            value: `₹${(summaryMetrics.monthlyRevenue/1000).toFixed(1)}L`, 
            label: 'Monthly Revenue', 
            growth: summaryMetrics.monthlyGrowth, 
            icon: FaRupeeSign, 
            color: 'blue' 
          },
          { 
            value: summaryMetrics.totalOrders, 
            label: 'Total Orders', 
            growth: summaryMetrics.orderGrowth, 
            icon: FaShoppingCart, 
            color: 'green' 
          },
          { 
            value: `₹${summaryMetrics.avgOrderValue}`, 
            label: 'Avg Order', 
            growth: summaryMetrics.valueGrowth, 
            icon: FaPercentage, 
            color: 'purple' 
          },
          { 
            value: `${summaryMetrics.satisfactionRate}%`, 
            label: 'Satisfaction', 
            growth: summaryMetrics.satisfactionGrowth, 
            icon: FaStar, 
            color: 'orange' 
          }
        ].map((metric, index) => (
          <div 
            key={index} 
            className={`bg-gradient-to-br from-${metric.color}-50 to-${metric.color}-100 p-3 md:p-4 rounded-xl border border-${metric.color}-200`}
          >
            <div className="flex items-center justify-between mb-2">
              <div>
                <div className="text-lg md:text-xl font-bold text-gray-800">{metric.value}</div>
                <div className="text-xs text-gray-600 truncate">{metric.label}</div>
              </div>
              <div className="p-2 bg-white rounded-lg">
                <metric.icon className={`text-${metric.color}-600`} size={16} />
              </div>
            </div>
            <div className="flex items-center text-xs">
              <FaArrowUp className="text-green-500 mr-1" size={10} />
              <span className="text-green-600 font-medium">{metric.growth}%</span>
              <span className="text-gray-500 ml-1">vs last month</span>
            </div>
          </div>
        ))}
      </div>

      {/* Main Report Content */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        {/* Report Header */}
        <div className="p-4 md:p-6 border-b border-gray-200 bg-gray-50">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
            <div>
              <h2 className="text-lg md:text-xl font-bold text-gray-800">
                {reportType === 'sales' && '📊 Sales Analytics'}
                {reportType === 'performance' && '📈 Performance Dashboard'}
                {reportType === 'expiry' && '⚠️ Expiry Management'}
                {reportType === 'commission' && '💼 Commission Reports'}
              </h2>
              <p className="text-gray-600 text-sm">
                {timeRange === 'today' && 'Today\'s performance'}
                {timeRange === 'week' && 'This week\'s analysis'}
                {timeRange === 'month' && 'Monthly overview'}
                {timeRange === 'quarter' && 'Quarterly insights'}
                {timeRange === 'year' && 'Annual review'}
              </p>
            </div>
            
            <div className="flex gap-2">
              <button 
                onClick={() => handleExport('csv')}
                className="flex items-center gap-1 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm"
              >
                <FaFileCsv className="text-green-600" size={14} /> CSV
              </button>
              <button 
                onClick={() => handleExport('pdf')}
                className="flex items-center gap-1 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm"
              >
                <FaDownload size={14} /> Export
              </button>
            </div>
          </div>
        </div>

        {/* Report Body - Mobile Optimized */}
        <div className="p-3 md:p-4">
          {/* Sales Report */}
          {reportType === 'sales' && (
            <div className="space-y-4 md:space-y-6">
              {/* Revenue Overview */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
                <div className="bg-gray-50 p-3 md:p-4 rounded-xl">
                  <h3 className="text-base md:text-lg font-bold text-gray-800 mb-3 flex items-center">
                    <FaChartLine className="mr-2 text-blue-600" /> Revenue Trend
                  </h3>
                  <div className="h-60 md:h-64">
                    <ResponsiveContainer width="100%" height="100%" className="pr-2">
                      <AreaChart data={monthlySalesData} margin={{ left: 10, right: 10, top: 10, bottom: 20 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                        <XAxis 
                          dataKey="month" 
                          stroke="#6b7280" 
                          fontSize={12} 
                          tickMargin={5}
                        />
                        <YAxis 
                          stroke="#6b7280" 
                          fontSize={12}
                          width={40}
                          tickFormatter={(value) => `₹${(value/1000).toFixed(0)}k`}
                        />
                        <Tooltip content={<CustomTooltip />} />
                        <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '5px' }} />
                        <Area 
                          type="monotone" 
                          dataKey="revenue" 
                          name="Revenue" 
                          stroke="#3b82f6" 
                          fill="#93c5fd" 
                          fillOpacity={0.6}
                          strokeWidth={2}
                        />
                        <Area 
                          type="monotone" 
                          dataKey="profit" 
                          name="Profit" 
                          stroke="#10b981" 
                          fill="#34d399" 
                          fillOpacity={0.4}
                          strokeWidth={2}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className="bg-gray-50 p-3 md:p-4 rounded-xl">
                  <h3 className="text-base md:text-lg font-bold text-gray-800 mb-3 flex items-center">
                    <FaBox className="mr-2 text-green-600" /> Revenue Breakdown
                  </h3>
                  <div className="h-60 md:h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={revenueBreakdown}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, percent }) => `${(percent * 100).toFixed(0)}%`}
                          outerRadius={60}
                          innerRadius={30}
                          fill="#8884d8"
                          dataKey="value"
                          paddingAngle={2}
                        >
                          {revenueBreakdown.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip content={<CustomPieTooltip />} />
                        <Legend 
                          layout="horizontal"
                          verticalAlign="bottom"
                          align="center"
                          wrapperStyle={{ fontSize: '11px', paddingTop: '5px' }}
                          formatter={(value, entry) => (
                            <span className="text-xs">
                              {value} ({entry.payload.value}%)
                            </span>
                          )}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>

              {/* Daily Sales & Top Products */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
                <div className="bg-gray-50 p-3 md:p-4 rounded-xl">
                  <h3 className="text-base md:text-lg font-bold text-gray-800 mb-3">Daily Performance</h3>
                  <div className="h-52 md:h-56">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart 
                        data={salesData} 
                        margin={{ left: 10, right: 10, top: 10, bottom: 20 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                        <XAxis 
                          dataKey="day" 
                          stroke="#6b7280" 
                          fontSize={11} 
                          tickMargin={5}
                        />
                        <YAxis 
                          stroke="#6b7280" 
                          fontSize={11}
                          width={45}
                        />
                        <Tooltip content={<CustomTooltip />} />
                        <Legend wrapperStyle={{ fontSize: '11px' }} />
                        <Bar 
                          dataKey="sales" 
                          name="Sales (₹)" 
                          fill="#3b82f6" 
                          radius={[2, 2, 0, 0]}
                          barSize={20}
                        />
                        <Bar 
                          dataKey="orders" 
                          name="Orders" 
                          fill="#10b981" 
                          radius={[2, 2, 0, 0]}
                          barSize={20}
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className="bg-gray-50 p-3 md:p-4 rounded-xl">
                  <h3 className="text-base md:text-lg font-bold text-gray-800 mb-3">Top Products</h3>
                  <div className="space-y-2 max-h-56 overflow-y-auto pr-2">
                    {topProductsData.map((product, index) => (
                      <div 
                        key={index} 
                        className="flex items-center justify-between p-2 md:p-3 bg-white rounded-lg border border-gray-200 hover:bg-gray-50"
                      >
                        <div className="flex items-center min-w-0 flex-1">
                          <div className="w-6 h-6 md:w-8 md:h-8 rounded-lg bg-blue-100 flex items-center justify-center mr-2 md:mr-3 flex-shrink-0">
                            <span className="text-blue-600 font-bold text-xs">{index + 1}</span>
                          </div>
                          <div className="min-w-0">
                            <div className="font-medium text-gray-800 text-sm truncate">{product.name}</div>
                            <div className="text-xs text-gray-600">{product.sales.toLocaleString()} units</div>
                          </div>
                        </div>
                        <div className="text-right ml-2 flex-shrink-0">
                          <div className="font-bold text-gray-800 text-sm">₹{product.revenue.toLocaleString()}</div>
                          <div className="text-xs text-gray-600">{product.percentage}%</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Performance Report */}
          {reportType === 'performance' && (
            <div className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
                <div className="bg-gray-50 p-3 md:p-4 rounded-xl">
                  <h3 className="text-base md:text-lg font-bold text-gray-800 mb-3">Key Metrics</h3>
                  
                  {/* Horizontal Scroll Container */}
                  <div className="flex overflow-x-auto pb-4 -mx-1 px-1 scrollbar-hide">
                    <div className="flex gap-3 min-w-max">
                      {performanceMetrics.map((metric, index) => {
                        const Icon = metric.icon;
                        const progress = (metric.value / metric.target) * 100;
                        const isExceeded = metric.status === 'exceed';
                        
                        return (
                          <div 
                            key={index} 
                            className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 w-56 flex-shrink-0"
                          >
                            {/* Header */}
                            <div className="flex items-start justify-between mb-3">
                              <div className="flex items-center">
                                <div 
                                  className="p-2 rounded-lg mr-2 flex-shrink-0"
                                  style={{ backgroundColor: `${metric.color}15` }}
                                >
                                  <Icon className="text-sm" style={{ color: metric.color }} />
                                </div>
                                <div>
                                  <div className="font-medium text-gray-800 text-sm">{metric.metric}</div>
                                  <div className="text-xs text-gray-500">Target: {metric.target}{metric.metric.includes('Rating') ? '/5' : '%'}</div>
                                </div>
                              </div>
                              
                              {/* Status Badge */}
                              <div className={`px-2 py-0.5 rounded-full text-xs font-medium flex-shrink-0 ${
                                isExceeded ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                              }`}>
                                {isExceeded ? '✓' : '⚠'}
                              </div>
                            </div>
                            
                            {/* Value Display */}
                            <div className="flex items-center justify-between mb-2">
                              <div className="text-2xl font-bold text-gray-800">
                                {metric.value}{metric.metric.includes('Rating') ? '/5' : '%'}
                              </div>
                              <div className="flex items-center text-xs">
                                {isExceeded ? (
                                  <>
                                    <FaArrowUp className="text-green-500 mr-1" size={10} />
                                    <span className="text-green-600 font-medium">
                                      +{(metric.value - metric.target).toFixed(1)}{metric.metric.includes('Rating') ? '' : '%'}
                                    </span>
                                  </>
                                ) : (
                                  <>
                                    <FaArrowDown className="text-red-500 mr-1" size={10} />
                                    <span className="text-red-600 font-medium">
                                      -{(metric.target - metric.value).toFixed(1)}{metric.metric.includes('Rating') ? '' : '%'}
                                    </span>
                                  </>
                                )}
                              </div>
                            </div>
                            
                            {/* Progress Bar */}
                            <div className="relative">
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div 
                                  className="h-2 rounded-full transition-all duration-500"
                                  style={{ 
                                    width: `${progress > 100 ? 100 : progress}%`,
                                    backgroundColor: metric.color
                                  }}
                                />
                              </div>
                              
                              {/* Progress Labels */}
                              <div className="flex justify-between mt-1 text-xs text-gray-500">
                                <span>0%</span>
                                <span className="font-medium" style={{ color: metric.color }}>
                                  {progress > 100 ? '100+' : progress.toFixed(0)}%
                                </span>
                                <span>100%</span>
                              </div>
                            </div>
                            
                            {/* Quick Stats */}
                            <div className="mt-3 pt-3 border-t border-gray-100">
                              <div className="flex justify-between text-xs">
                                <div className="text-gray-600">Performance</div>
                                <div className={`font-medium ${isExceeded ? 'text-green-600' : 'text-red-600'}`}>
                                  {progress > 100 ? 'Excellent' : progress > 90 ? 'Good' : 'Needs Improvement'}
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  
                  {/* Scroll Indicator */}
                  <div className="flex justify-center mt-2">
                    <div className="flex gap-1">
                      {performanceMetrics.map((_, index) => (
                        <div 
                          key={index}
                          className="w-2 h-2 rounded-full bg-gray-300"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-3 md:p-4 rounded-xl">
                  <h3 className="text-base md:text-lg font-bold text-gray-800 mb-3">Operational Efficiency</h3>
                  <div className="h-60 md:h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <ComposedChart 
                        data={efficiencyData} 
                        margin={{ left: 10, right: 10, top: 10, bottom: 20 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                        <XAxis 
                          dataKey="hour" 
                          stroke="#6b7280" 
                          fontSize={11} 
                          tickMargin={5}
                        />
                        <YAxis 
                          yAxisId="left" 
                          stroke="#6b7280" 
                          fontSize={11}
                          width={45}
                        />
                        <YAxis 
                          yAxisId="right" 
                          orientation="right" 
                          stroke="#6b7280" 
                          fontSize={11}
                          width={45}
                          domain={[0, 100]}
                        />
                        <Tooltip content={<CustomTooltip />} />
                        <Legend wrapperStyle={{ fontSize: '11px' }} />
                        <Bar 
                          yAxisId="left"
                          dataKey="orders" 
                          name="Orders" 
                          fill="#3b82f6" 
                          radius={[2, 2, 0, 0]}
                          barSize={15}
                        />
                        <Line 
                          yAxisId="right"
                          type="monotone" 
                          dataKey="efficiency" 
                          name="Efficiency %" 
                          stroke="#10b981" 
                          strokeWidth={2}
                          dot={{ r: 3 }}
                          activeDot={{ r: 5 }}
                        />
                        <ReferenceLine yAxisId="right" y={90} stroke="#ef4444" strokeDasharray="3 3" />
                      </ComposedChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>

              {/* Additional Performance Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                  <div className="text-lg font-bold text-blue-800">98.2%</div>
                  <div className="text-xs text-blue-600">Order Accuracy</div>
                </div>
                <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                  <div className="text-lg font-bold text-green-800">94.5%</div>
                  <div className="text-xs text-green-600">On-time Delivery</div>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg border border-purple-200">
                  <div className="text-lg font-bold text-purple-800">4.8/5</div>
                  <div className="text-xs text-purple-600">Customer Rating</div>
                </div>
                <div className="bg-orange-50 p-3 rounded-lg border border-orange-200">
                  <div className="text-lg font-bold text-orange-800">99.1%</div>
                  <div className="text-xs text-orange-600">Prescription Accuracy</div>
                </div>
              </div>
            </div>
          )}

          {/* Expiry Report */}
          {reportType === 'expiry' && (
            <div className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
                <div className="bg-gray-50 p-3 md:p-4 rounded-xl">
                  <h3 className="text-base md:text-lg font-bold text-gray-800 mb-3">Expiry by Category</h3>
                  <div className="h-60 md:h-64">
                    <ResponsiveContainer width="100%" height="100%" className="pr-2">
                      <BarChart 
                        data={expiryData} 
                        margin={{ left: 10, right: 10, top: 10, bottom: 40 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                        <XAxis 
                          dataKey="category" 
                          stroke="#6b7280" 
                          fontSize={11} 
                          angle={-45} 
                          textAnchor="end" 
                          height={40}
                          tickMargin={5}
                        />
                        <YAxis 
                          stroke="#6b7280" 
                          fontSize={11}
                          width={45}
                        />
                        <Tooltip formatter={(value, name) => [value, name === 'expiring' ? 'Expiring Soon' : 'Total Stock']} />
                        <Legend wrapperStyle={{ fontSize: '11px' }} />
                        <Bar 
                          dataKey="expiring" 
                          name="Expiring Soon" 
                          fill="#ef4444" 
                          radius={[2, 2, 0, 0]}
                          barSize={25}
                        />
                        <Bar 
                          dataKey="total" 
                          name="Total Stock" 
                          fill="#94a3b8" 
                          radius={[2, 2, 0, 0]}
                          barSize={25}
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className="bg-gray-50 p-3 md:p-4 rounded-xl">
                  <h3 className="text-base md:text-lg font-bold text-gray-800 mb-3">Expiry Timeline</h3>
                  <div className="space-y-3">
                    {[
                      { days: 30, count: 8, color: 'red', icon: FaExclamationTriangle },
                      { days: 60, count: 15, color: 'orange', icon: FaClock },
                      { days: 90, count: 25, color: 'yellow', icon: FaCalendarCheck },
                    ].map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <div key={index} className={`bg-${item.color}-50 border border-${item.color}-200 rounded-lg p-3`}>
                          <div className="flex items-center justify-between">
                            <div>
                              <div className={`font-bold text-${item.color}-800 text-lg`}>{item.count} Products</div>
                              <div className={`text-${item.color}-600 text-sm`}>Expiring in {item.days} days</div>
                            </div>
                            <div className="p-2 bg-white rounded-lg">
                              <Icon className={`text-${item.color}-600`} size={18} />
                            </div>
                          </div>
                          {item.days === 30 && (
                            <div className="mt-2 text-xs text-red-700">
                              Includes: Paracetamol (3), Amoxicillin (2), Others (3)
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Expiring Products List - Mobile Optimized */}
              <div className="bg-gray-50 p-3 md:p-4 rounded-xl">
                <h3 className="text-base md:text-lg font-bold text-gray-800 mb-3">Expiring Products</h3>
                <div className="overflow-x-auto -mx-2 md:mx-0">
                  <div className="min-w-full inline-block align-middle">
                    <div className="overflow-hidden">
                      <table className="min-w-full divide-y divide-gray-200 text-sm">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="px-2 py-2 text-left text-xs font-medium text-gray-500 uppercase">Product</th>
                            <th className="px-2 py-2 text-left text-xs font-medium text-gray-500 uppercase">Qty</th>
                            <th className="px-2 py-2 text-left text-xs font-medium text-gray-500 uppercase">Expiry</th>
                            <th className="px-2 py-2 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {[
                            { name: 'Paracetamol 500mg', batch: 'B001', quantity: 150, expiry: '15/03', days: 45 },
                            { name: 'Amoxicillin 250mg', batch: 'B002', quantity: 45, expiry: '10/04', days: 71 },
                            { name: 'Cetirizine 10mg', batch: 'B003', quantity: 12, expiry: '28/03', days: 58 },
                            { name: 'Omeprazole 20mg', batch: 'B004', quantity: 80, expiry: '05/05', days: 96 },
                          ].map((product, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                              <td className="px-2 py-2">
                                <div className="font-medium text-gray-800 text-xs">{product.name}</div>
                                <div className="text-gray-500 text-xs">{product.batch}</div>
                              </td>
                              <td className="px-2 py-2 text-gray-600 text-xs">{product.quantity}</td>
                              <td className="px-2 py-2">
                                <span className={`px-1.5 py-0.5 rounded text-xs ${
                                  product.days <= 60 ? 'bg-red-100 text-red-800' : 
                                  product.days <= 90 ? 'bg-orange-100 text-orange-800' : 
                                  'bg-green-100 text-green-800'
                                }`}>
                                  {product.expiry}
                                </span>
                                <div className="text-gray-500 text-xs mt-1">{product.days} days</div>
                              </td>
                              <td className="px-2 py-2">
                                <button className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs hover:bg-blue-200 whitespace-nowrap">
                                  Restock
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Commission Report */}
          {reportType === 'commission' && (
            <div className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
                <div className="bg-gray-50 p-3 md:p-4 rounded-xl">
                  <h3 className="text-base md:text-lg font-bold text-gray-800 mb-3">Commission Overview</h3>
                  <div className="h-60 md:h-64">
                    <ResponsiveContainer width="100%" height="100%" className="pr-2">
                      <BarChart 
                        data={commissionData} 
                        margin={{ left: 10, right: 10, top: 10, bottom: 20 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                        <XAxis 
                          dataKey="agent" 
                          stroke="#6b7280" 
                          fontSize={11} 
                          tickMargin={5}
                        />
                        <YAxis 
                          stroke="#6b7280" 
                          fontSize={11}
                          width={45}
                        />
                        <Tooltip content={<CustomTooltip />} />
                        <Legend wrapperStyle={{ fontSize: '11px' }} />
                        <Bar 
                          dataKey="commission" 
                          name="Commission (₹)" 
                          fill="#8b5cf6" 
                          radius={[2, 2, 0, 0]}
                          barSize={25}
                        />
                        <Bar 
                          dataKey="orders" 
                          name="Orders" 
                          fill="#10b981" 
                          radius={[2, 2, 0, 0]}
                          barSize={25}
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className="bg-gray-50 p-3 md:p-4 rounded-xl">
                  <h3 className="text-base md:text-lg font-bold text-gray-800 mb-3">Agent Performance</h3>
                  <div className="space-y-3 max-h-64 overflow-y-auto pr-2">
                    {commissionData.map((agent, index) => (
                      <div key={index} className="bg-white p-3 rounded-lg border border-gray-200">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center min-w-0 flex-1">
                            <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-2 md:mr-3 flex-shrink-0">
                              <FaUserMd className="text-purple-600 text-sm" />
                            </div>
                            <div className="min-w-0">
                              <div className="font-bold text-gray-800 text-sm truncate">{agent.agent}</div>
                              <div className="text-xs text-gray-600">{agent.orders} orders • {agent.rate}% rate</div>
                            </div>
                          </div>
                          <div className="text-right ml-2 flex-shrink-0">
                            <div className="font-bold text-gray-800 text-sm">₹{agent.commission.toLocaleString()}</div>
                            <div className="text-xs text-gray-600">Commission</div>
                          </div>
                        </div>
                        <div className="mt-2">
                          <div className="flex items-center justify-between text-xs mb-1">
                            <span className="text-gray-500">Performance</span>
                            <span className="font-medium text-gray-800">{agent.performance}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-1.5">
                            <div 
                              className="h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 transition-all duration-300"
                              style={{ width: `${agent.performance}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Commission Summary */}
              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-4 rounded-xl border border-purple-200">
                <h3 className="text-base md:text-lg font-bold text-gray-800 mb-3">Commission Summary</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <div className="bg-white p-3 rounded-lg">
                    <div className="text-lg font-bold text-purple-800">₹56.8K</div>
                    <div className="text-gray-600 text-xs">Total Commission</div>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <div className="text-lg font-bold text-purple-800">12.5%</div>
                    <div className="text-gray-600 text-xs">Avg Rate</div>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <div className="text-lg font-bold text-purple-800">192</div>
                    <div className="text-gray-600 text-xs">Commission Orders</div>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <div className="text-lg font-bold text-purple-800">₹296</div>
                    <div className="text-gray-600 text-xs">Avg per Order</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Report Footer */}
        <div className="px-4 py-3 border-t border-gray-200 bg-gray-50">
          <div className="text-xs text-gray-600">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-1">
              <div>
                Generated: {new Date().toLocaleDateString('en-IN', { 
                  day: 'numeric', 
                  month: 'short', 
                  year: 'numeric' 
                })}
              </div>
              <div>
                Last updated: Today, 10:30 AM • Refresh every 4 hours
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;