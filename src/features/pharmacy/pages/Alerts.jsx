// src/pages/pharmacy/Alerts.jsx
import React, { useState } from 'react';
import { FaExclamationTriangle, FaBell, FaClock, FaBoxOpen, FaCalendarAlt, FaFilter } from 'react-icons/fa';

const Alerts = () => {
  const [filter, setFilter] = useState('all');
  
  const stockAlerts = [
    {
      id: 1,
      medicine: 'Metformin 500mg',
      currentStock: 5,
      threshold: 20,
      status: 'Critical',
      alertType: 'Low Stock',
      expiryDate: '2024-09-20',
      daysToExpiry: 60,
      lastRestocked: '2024-01-05'
    },
    {
      id: 2,
      medicine: 'Cetirizine 10mg',
      currentStock: 12,
      threshold: 15,
      status: 'Low Stock',
      alertType: 'Low Stock',
      expiryDate: '2025-02-28',
      daysToExpiry: 180,
      lastRestocked: '2024-01-10'
    },
    {
      id: 3,
      medicine: 'Azithromycin 250mg',
      currentStock: 8,
      threshold: 15,
      status: 'Low Stock',
      alertType: 'Low Stock',
      expiryDate: '2024-11-15',
      daysToExpiry: 90,
      lastRestocked: '2024-01-02'
    },
    {
      id: 4,
      medicine: 'Vitamin B Complex',
      currentStock: 45,
      threshold: 20,
      status: 'Expiring Soon',
      alertType: 'Expiry',
      expiryDate: '2024-03-15',
      daysToExpiry: 30,
      lastRestocked: '2023-12-20'
    },
    {
      id: 5,
      medicine: 'Amoxicillin 500mg',
      currentStock: 25,
      threshold: 30,
      status: 'Expiring Soon',
      alertType: 'Expiry',
      expiryDate: '2024-04-10',
      daysToExpiry: 45,
      lastRestocked: '2023-12-15'
    },
    {
      id: 6,
      medicine: 'Paracetamol 500mg',
      currentStock: 150,
      threshold: 20,
      status: 'Expired',
      alertType: 'Expiry',
      expiryDate: '2023-12-31',
      daysToExpiry: -15,
      lastRestocked: '2023-06-10'
    }
  ];

  const filteredAlerts = stockAlerts.filter(alert => {
    if (filter === 'all') return true;
    if (filter === 'low-stock') return alert.alertType === 'Low Stock';
    if (filter === 'expiry') return alert.alertType === 'Expiry';
    if (filter === 'critical') return alert.status === 'Critical';
    return true;
  });

  const getAlertColor = (status) => {
    switch(status) {
      case 'Critical': return 'bg-red-100 text-red-800 border-red-200';
      case 'Low Stock': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Expiring Soon': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'Expired': return 'bg-gray-100 text-gray-800 border-gray-200';
      default: return 'bg-blue-100 text-blue-800 border-blue-200';
    }
  };

  const getAlertIcon = (status) => {
    switch(status) {
      case 'Critical': return <FaExclamationTriangle className="text-red-600" />;
      case 'Low Stock': return <FaBoxOpen className="text-yellow-600" />;
      case 'Expiring Soon': return <FaClock className="text-orange-600" />;
      case 'Expired': return <FaCalendarAlt className="text-gray-600" />;
      default: return <FaBell className="text-blue-600" />;
    }
  };

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Stock Alerts & Notifications</h1>
        <p className="text-gray-600">Monitor stock levels and expiry dates</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Critical Stock</p>
              <h3 className="text-3xl font-bold text-red-600">
                {stockAlerts.filter(a => a.status === 'Critical').length}
              </h3>
            </div>
            <div className="p-3 bg-red-100 rounded-lg">
              <FaExclamationTriangle className="text-2xl text-red-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Low Stock Items</p>
              <h3 className="text-3xl font-bold text-yellow-600">
                {stockAlerts.filter(a => a.status === 'Low Stock').length}
              </h3>
            </div>
            <div className="p-3 bg-yellow-100 rounded-lg">
              <FaBoxOpen className="text-2xl text-yellow-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Expiring Soon</p>
              <h3 className="text-3xl font-bold text-orange-600">
                {stockAlerts.filter(a => a.status === 'Expiring Soon').length}
              </h3>
            </div>
            <div className="p-3 bg-orange-100 rounded-lg">
              <FaClock className="text-2xl text-orange-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Expired Items</p>
              <h3 className="text-3xl font-bold text-gray-600">
                {stockAlerts.filter(a => a.status === 'Expired').length}
              </h3>
            </div>
            <div className="p-3 bg-gray-100 rounded-lg">
              <FaCalendarAlt className="text-2xl text-gray-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex mb-6 overflow-x-auto">
        <button
          onClick={() => setFilter('all')}
          className={`flex-shrink-0 px-6 py-3 font-medium border-b-2 ${
            filter === 'all' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500'
          }`}
        >
          All Alerts
        </button>
        <button
          onClick={() => setFilter('critical')}
          className={`flex-shrink-0 px-6 py-3 font-medium border-b-2 ${
            filter === 'critical' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500'
          }`}
        >
          Critical
        </button>
        <button
          onClick={() => setFilter('low-stock')}
          className={`flex-shrink-0 px-6 py-3 font-medium border-b-2 ${
            filter === 'low-stock' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500'
          }`}
        >
          Low Stock
        </button>
        <button
          onClick={() => setFilter('expiry')}
          className={`flex-shrink-0 px-6 py-3 font-medium border-b-2 ${
            filter === 'expiry' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500'
          }`}
        >
          Expiry Alerts
        </button>
      </div>

      {/* Alerts List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredAlerts.map((alert) => (
          <div 
            key={alert.id} 
            className={`p-6 rounded-xl border ${getAlertColor(alert.status)} hover:shadow-md transition-shadow`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center">
                <div className="p-2 rounded-lg bg-white mr-3">
                  {getAlertIcon(alert.status)}
                </div>
                <div>
                  <h3 className="font-bold text-lg">{alert.medicine}</h3>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${getAlertColor(alert.status)}`}>
                    {alert.status}
                  </span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-600">Alert ID</div>
                <div className="font-bold">ALERT{alert.id.toString().padStart(3, '0')}</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <div className="text-sm text-gray-600">Current Stock</div>
                <div className="text-xl font-bold">{alert.currentStock} units</div>
              </div>
              <div>
                <div className="text-sm text-gray-600">Threshold</div>
                <div className="text-xl font-bold">{alert.threshold} units</div>
              </div>
              <div>
                <div className="text-sm text-gray-600">Expiry Date</div>
                <div className="font-medium">{alert.expiryDate}</div>
              </div>
              <div>
                <div className="text-sm text-gray-600">Days to Expiry</div>
                <div className={`font-bold ${alert.daysToExpiry < 0 ? 'text-red-600' : alert.daysToExpiry < 60 ? 'text-orange-600' : 'text-green-600'}`}>
                  {alert.daysToExpiry < 0 ? 'Expired' : `${alert.daysToExpiry} days`}
                </div>
              </div>
            </div>

            {/* Stock Progress Bar */}
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-1">
                <span>Stock Level</span>
                <span>{alert.currentStock} / {alert.threshold * 3}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className={`h-2.5 rounded-full ${
                    alert.status === 'Critical' ? 'bg-red-600' : 
                    alert.status === 'Low Stock' ? 'bg-yellow-600' : 
                    'bg-green-600'
                  }`}
                  style={{ width: `${(alert.currentStock / (alert.threshold * 3)) * 100}%` }}
                ></div>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="text-sm text-gray-600">
                Last restocked: {alert.lastRestocked}
              </div>
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm">
                  Restock Now
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm">
                  Dismiss
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredAlerts.length === 0 && (
        <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
          <div className="text-gray-400 mb-2 text-xl">🎉</div>
          <div className="text-gray-600 mb-2">No active alerts</div>
          <div className="text-gray-500 text-sm">All stock levels are healthy and no items are expiring soon</div>
        </div>
      )}

      {/* Quick Actions */}
      <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
        <h3 className="font-bold text-blue-800 mb-4">Quick Actions</h3>
        <div className="flex flex-wrap gap-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Generate Restock Order
          </button>
          <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50">
            Download Expiry Report
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            Set Auto-Restock Thresholds
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            Configure Alert Preferences
          </button>
        </div>
      </div>
    </div>
  );
};

export default Alerts;