// src/pages/pharmacy/Sales.jsx
import React, { useState } from 'react';
import { FaChartLine, FaRupeeSign, FaShoppingCart, FaUsers, FaCalendar, FaDownload } from 'react-icons/fa';

const Sales = () => {
  const [timeRange, setTimeRange] = useState('today');
  
  const salesData = {
    today: {
      revenue: '₹45,670',
      orders: 42,
      averageOrder: '₹1,087',
      newCustomers: 8,
      chartData: [12000, 19000, 15000, 25000, 22000, 30000, 45000]
    },
    week: {
      revenue: '₹2,85,420',
      orders: 265,
      averageOrder: '₹1,077',
      newCustomers: 45,
      chartData: [85000, 120000, 95000, 145000, 130000, 175000, 285420]
    },
    month: {
      revenue: '₹12,45,800',
      orders: 1120,
      averageOrder: '₹1,112',
      newCustomers: 210,
      chartData: [285420, 320000, 390000, 450000, 520000, 650000, 800000, 950000, 1100000, 1245800]
    }
  };

  const topProducts = [
    { name: 'Paracetamol 500mg', sales: 245, revenue: '₹36,750', growth: '+12%' },
    { name: 'Amoxicillin 250mg', sales: 189, revenue: '₹16,065', growth: '+8%' },
    { name: 'Cetirizine 10mg', sales: 167, revenue: '₹4,175', growth: '+15%' },
    { name: 'Vitamin C Supplements', sales: 142, revenue: '₹7,100', growth: '+22%' },
    { name: 'Omeprazole 20mg', sales: 128, revenue: '₹5,760', growth: '+5%' }
  ];

  const timeLabels = {
    today: ['8AM', '10AM', '12PM', '2PM', '4PM', '6PM', '8PM'],
    week: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    month: ['Week 1', 'Week 2', 'Week 3', 'Week 4']
  };

  const currentData = salesData[timeRange];

  return (
    <div className="p-6">
      <div className="mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Sales Analytics</h1>
            <p className="text-gray-600">Track your pharmacy performance and revenue</p>
          </div>
          <div className="flex gap-2">
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="today">Today</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
            </select>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-2">
              <FaDownload /> Export
            </button>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Total Revenue</p>
              <h3 className="text-2xl font-bold text-gray-800">{currentData.revenue}</h3>
              <p className="text-green-600 text-sm mt-1">+12.5% from yesterday</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-lg">
              <FaRupeeSign className="text-2xl text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Total Orders</p>
              <h3 className="text-2xl font-bold text-gray-800">{currentData.orders}</h3>
              <p className="text-green-600 text-sm mt-1">+8.2% from yesterday</p>
            </div>
            <div className="p-3 bg-green-100 rounded-lg">
              <FaShoppingCart className="text-2xl text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Average Order Value</p>
              <h3 className="text-2xl font-bold text-gray-800">{currentData.averageOrder}</h3>
              <p className="text-green-600 text-sm mt-1">+4.3% from yesterday</p>
            </div>
            <div className="p-3 bg-purple-100 rounded-lg">
              <FaChartLine className="text-2xl text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">New Customers</p>
              <h3 className="text-2xl font-bold text-gray-800">{currentData.newCustomers}</h3>
              <p className="text-green-600 text-sm mt-1">+15.7% from yesterday</p>
            </div>
            <div className="p-3 bg-orange-100 rounded-lg">
              <FaUsers className="text-2xl text-orange-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Sales Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-gray-800">Revenue Trend</h2>
            <div className="flex items-center text-gray-500 text-sm">
              <FaCalendar className="mr-2" />
              {timeRange === 'today' ? 'Today' : timeRange === 'week' ? 'Last 7 days' : 'This Month'}
            </div>
          </div>
          <div className="h-64">
            {/* Chart would be implemented with a charting library like Chart.js or Recharts */}
            <div className="flex items-end h-48 gap-2 mt-4">
              {currentData.chartData.map((value, index) => {
                const maxValue = Math.max(...currentData.chartData);
                const height = (value / maxValue) * 100;
                return (
                  <div key={index} className="flex flex-col items-center flex-1">
                    <div 
                      className="w-full bg-blue-500 rounded-t-lg transition-all hover:bg-blue-600"
                      style={{ height: `${height}%` }}
                    ></div>
                    <div className="text-xs text-gray-500 mt-2">{timeLabels[timeRange][index]}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Top Products */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
          <h2 className="text-lg font-bold text-gray-800 mb-6">Top Selling Products</h2>
          <div className="space-y-4">
            {topProducts.map((product, index) => (
              <div key={product.name} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-100 text-blue-800 rounded-lg flex items-center justify-center font-bold mr-3">
                    {index + 1}
                  </div>
                  <div>
                    <div className="font-medium">{product.name}</div>
                    <div className="text-sm text-gray-500">{product.sales} units sold</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold">{product.revenue}</div>
                  <div className={`text-sm ${product.growth.includes('+') ? 'text-green-600' : 'text-red-600'}`}>
                    {product.growth}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
          <h3 className="font-bold text-gray-800 mb-4">Order Status Distribution</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Pending</span>
              <span className="font-bold">12</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '15%' }}></div>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-600">Processing</span>
              <span className="font-bold">8</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: '10%' }}></div>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-600">Delivered</span>
              <span className="font-bold">42</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: '52%' }}></div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
          <h3 className="font-bold text-gray-800 mb-4">Payment Methods</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Online Payment</span>
              <span className="font-bold">₹32,450</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: '65%' }}></div>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-600">Cash on Delivery</span>
              <span className="font-bold">₹13,220</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: '27%' }}></div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
          <h3 className="font-bold text-gray-800 mb-4">Delivery Performance</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-gray-600">Average Delivery Time</span>
                <span className="font-bold">32 mins</span>
              </div>
              <div className="text-sm text-green-600">-5 mins from last week</div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-gray-600">On-time Delivery Rate</span>
                <span className="font-bold">94%</span>
              </div>
              <div className="text-sm text-green-600">+2% from last week</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sales;