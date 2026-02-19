// src/pages/pharmacy/Inventory.jsx
import React, { useState } from 'react';
import { FaSearch, FaFilter, FaPlus, FaEdit, FaTrash, FaExclamationTriangle } from 'react-icons/fa';

const PharmacyInventory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  
  const inventoryItems = [
    { id: 1, name: 'Paracetamol 500mg', category: 'Pain Relief', stock: 150, lowStock: 20, price: '₹15', expiry: '2024-12-01', status: 'In Stock' },
    { id: 2, name: 'Amoxicillin 250mg', category: 'Antibiotic', stock: 45, lowStock: 30, price: '₹85', expiry: '2024-10-15', status: 'In Stock' },
    { id: 3, name: 'Cetirizine 10mg', category: 'Allergy', stock: 12, lowStock: 15, price: '₹25', expiry: '2025-02-28', status: 'Low Stock' },
    { id: 4, name: 'Omeprazole 20mg', category: 'Antacid', stock: 80, lowStock: 25, price: '₹45', expiry: '2024-11-30', status: 'In Stock' },
    { id: 5, name: 'Metformin 500mg', category: 'Diabetes', stock: 5, lowStock: 10, price: '₹65', expiry: '2024-09-20', status: 'Critical' },
    { id: 6, name: 'Atorvastatin 10mg', category: 'Cholesterol', stock: 35, lowStock: 20, price: '₹95', expiry: '2025-01-15', status: 'In Stock' },
  ];

  const filteredItems = inventoryItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'all' || item.status === filter;
    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status) => {
    switch(status) {
      case 'In Stock': return 'bg-green-100 text-green-800';
      case 'Low Stock': return 'bg-yellow-100 text-yellow-800';
      case 'Critical': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Inventory Management</h1>
        <p className="text-gray-600">Manage your pharmacy stock and medicines</p>
      </div>

      {/* Actions Bar */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 mb-6">
        <div className="flex flex-col md:flex-row gap-4 justify-between">
          <div className="flex gap-4">
            <div className="relative flex-1">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search medicines..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div className="relative">
              <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg appearance-none bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Status</option>
                <option value="In Stock">In Stock</option>
                <option value="Low Stock">Low Stock</option>
                <option value="Critical">Critical</option>
              </select>
            </div>
          </div>

          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2">
            <FaPlus /> Add New Medicine
          </button>
        </div>
      </div>

      {/* Stock Alerts */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-6 flex items-start gap-3">
        <FaExclamationTriangle className="text-yellow-600 text-xl mt-1" />
        <div>
          <h3 className="font-medium text-yellow-800">Stock Alerts</h3>
          <p className="text-yellow-700 text-sm">
            {inventoryItems.filter(i => i.status === 'Critical').length} items are critically low. 
            {inventoryItems.filter(i => i.status === 'Low Stock').length} items are below threshold.
          </p>
        </div>
      </div>

      {/* Inventory Table */}
      <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Medicine</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Current Stock</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Low Stock Alert</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expiry Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredItems.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="font-medium text-gray-900">{item.name}</div>
                      <div className="text-sm text-gray-500">ID: MED{item.id.toString().padStart(3, '0')}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
                      {item.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-24 bg-gray-200 rounded-full h-2.5 mr-2">
                        <div 
                          className={`h-2.5 rounded-full ${
                            item.stock < item.lowStock ? 'bg-red-600' : 
                            item.stock < item.lowStock * 2 ? 'bg-yellow-600' : 
                            'bg-green-600'
                          }`}
                          style={{ width: `${Math.min((item.stock / (item.lowStock * 3)) * 100, 100)}%` }}
                        ></div>
                      </div>
                      <span className="font-medium">{item.stock} units</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-500">{item.lowStock} units</td>
                  <td className="px-6 py-4 whitespace-nowrap font-medium">{item.price}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs rounded ${
                      new Date(item.expiry) < new Date(Date.now() + 90 * 24 * 60 * 60 * 1000) 
                        ? 'bg-red-100 text-red-800' 
                        : 'text-gray-700'
                    }`}>
                      {item.expiry}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(item.status)}`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex gap-2">
                      <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                        <FaEdit />
                      </button>
                      <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg">
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-2">No medicines found</div>
            <div className="text-gray-500 text-sm">Try adjusting your search or filter</div>
          </div>
        )}
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="text-sm text-gray-500">Total Items</div>
          <div className="text-2xl font-bold text-gray-800">{inventoryItems.length}</div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="text-sm text-gray-500">Low Stock Items</div>
          <div className="text-2xl font-bold text-yellow-600">
            {inventoryItems.filter(i => i.status === 'Low Stock').length}
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="text-sm text-gray-500">Critical Items</div>
          <div className="text-2xl font-bold text-red-600">
            {inventoryItems.filter(i => i.status === 'Critical').length}
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="text-sm text-gray-500">Expiring Soon</div>
          <div className="text-2xl font-bold text-orange-600">
            {inventoryItems.filter(i => new Date(i.expiry) < new Date(Date.now() + 90 * 24 * 60 * 60 * 1000)).length}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PharmacyInventory;