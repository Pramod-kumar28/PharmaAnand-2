// src/pages/pharmacy/Customers.jsx
import React, { useState } from 'react';
import { FaSearch, FaFilter, FaUser, FaPhone, FaMapMarkerAlt, FaShoppingCart, FaStar, FaEnvelope } from 'react-icons/fa';

const Customers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  
  const customers = [
    {
      id: 'CUST001',
      name: 'Rajesh Kumar',
      phone: '+91 9876543210',
      email: 'rajesh@example.com',
      address: '123 MG Road, Bangalore',
      totalOrders: 12,
      totalSpent: '₹24,500',
      lastOrder: '2024-01-15',
      status: 'Active',
      prescriptionUser: true,
      rating: 4.5
    },
    {
      id: 'CUST002',
      name: 'Priya Patel',
      phone: '+91 9876543211',
      email: 'priya@example.com',
      address: '456 Koramangala, Bangalore',
      totalOrders: 8,
      totalSpent: '₹15,200',
      lastOrder: '2024-01-14',
      status: 'Active',
      prescriptionUser: false,
      rating: 4.8
    },
    {
      id: 'CUST003',
      name: 'Amit Sharma',
      phone: '+91 9876543212',
      email: 'amit@example.com',
      address: '789 Indiranagar, Bangalore',
      totalOrders: 5,
      totalSpent: '₹8,750',
      lastOrder: '2024-01-13',
      status: 'Active',
      prescriptionUser: true,
      rating: 4.2
    },
    {
      id: 'CUST004',
      name: 'Sunita Reddy',
      phone: '+91 9876543213',
      email: 'sunita@example.com',
      address: '321 Jayanagar, Bangalore',
      totalOrders: 15,
      totalSpent: '₹32,100',
      lastOrder: '2024-01-12',
      status: 'Inactive',
      prescriptionUser: true,
      rating: 4.9
    },
    {
      id: 'CUST005',
      name: 'Vikram Nair',
      phone: '+91 9876543214',
      email: 'vikram@example.com',
      address: '654 Whitefield, Bangalore',
      totalOrders: 3,
      totalSpent: '₹5,400',
      lastOrder: '2024-01-10',
      status: 'Active',
      prescriptionUser: false,
      rating: 3.8
    },
    {
      id: 'CUST006',
      name: 'Meera Gupta',
      phone: '+91 9876543215',
      email: 'meera@example.com',
      address: '987 HSR Layout, Bangalore',
      totalOrders: 20,
      totalSpent: '₹48,900',
      lastOrder: '2024-01-09',
      status: 'Active',
      prescriptionUser: true,
      rating: 5.0
    }
  ];

  const filteredCustomers = customers.filter(customer => {
    const matchesSearch = customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         customer.phone.includes(searchTerm) ||
                         customer.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'all' || customer.status === filter;
    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status) => {
    return status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Customers Management</h1>
        <p className="text-gray-600">Manage your pharmacy customers and their data</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Total Customers</p>
              <h3 className="text-3xl font-bold text-gray-800">{customers.length}</h3>
            </div>
            <div className="p-3 bg-blue-100 rounded-lg">
              <FaUser className="text-2xl text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Active Customers</p>
              <h3 className="text-3xl font-bold text-green-600">
                {customers.filter(c => c.status === 'Active').length}
              </h3>
            </div>
            <div className="p-3 bg-green-100 rounded-lg">
              <FaUser className="text-2xl text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Prescription Users</p>
              <h3 className="text-3xl font-bold text-purple-600">
                {customers.filter(c => c.prescriptionUser).length}
              </h3>
            </div>
            <div className="p-3 bg-purple-100 rounded-lg">
              <FaUser className="text-2xl text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Avg Customer Rating</p>
              <h3 className="text-3xl font-bold text-yellow-600">
                {(customers.reduce((acc, c) => acc + c.rating, 0) / customers.length).toFixed(1)}
              </h3>
            </div>
            <div className="p-3 bg-yellow-100 rounded-lg">
              <FaStar className="text-2xl text-yellow-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name, phone, or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <div className="flex gap-2">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Customers</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
        </div>
      </div>

      {/* Customers Table */}
      <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Orders</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Spent</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Order</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredCustomers.map((customer) => (
                <tr key={customer.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-100 text-blue-800 rounded-lg flex items-center justify-center font-bold mr-3">
                        {customer.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{customer.name}</div>
                        <div className="text-sm text-gray-500">ID: {customer.id}</div>
                        <div className="text-xs mt-1">
                          {customer.prescriptionUser ? (
                            <span className="px-2 py-0.5 bg-purple-100 text-purple-800 rounded">Prescription User</span>
                          ) : (
                            <span className="px-2 py-0.5 bg-gray-100 text-gray-800 rounded">Regular User</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="space-y-1">
                      <div className="flex items-center text-sm">
                        <FaPhone className="mr-2 text-gray-400" />
                        {customer.phone}
                      </div>
                      <div className="flex items-center text-sm">
                        <FaEnvelope className="mr-2 text-gray-400" />
                        {customer.email}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <FaMapMarkerAlt className="mr-2" />
                        {customer.address.split(',')[0]}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-center">
                      <div className="text-xl font-bold text-gray-800">{customer.totalOrders}</div>
                      <div className="text-sm text-gray-500">orders</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap font-bold">{customer.totalSpent}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm">{customer.lastOrder}</div>
                    <div className="text-xs text-gray-500">
                      {Math.floor((new Date() - new Date(customer.lastOrder)) / (1000 * 60 * 60 * 24))} days ago
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(customer.status)}`}>
                      {customer.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex text-yellow-400 mr-2">
                        {'★'.repeat(Math.floor(customer.rating))}
                        {'☆'.repeat(5 - Math.floor(customer.rating))}
                      </div>
                      <span className="font-medium">{customer.rating}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex flex-col gap-2">
                      <button className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-lg hover:bg-blue-200">
                        View Profile
                      </button>
                      <button className="px-3 py-1 text-sm border border-gray-300 rounded-lg hover:bg-gray-100">
                        Order History
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredCustomers.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-2">No customers found</div>
            <div className="text-gray-500 text-sm">Try adjusting your search or filter</div>
          </div>
        )}
      </div>

      {/* Customer Insights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
          <h3 className="font-bold text-gray-800 mb-4">Top Spending Customers</h3>
          <div className="space-y-3">
            {[...customers]
              .sort((a, b) => parseFloat(b.totalSpent.replace('₹', '').replace(',', '')) - parseFloat(a.totalSpent.replace('₹', '').replace(',', '')))
              .slice(0, 5)
              .map((customer, index) => (
                <div key={customer.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-100 text-blue-800 rounded-lg flex items-center justify-center font-bold mr-3">
                      {index + 1}
                    </div>
                    <div>
                      <div className="font-medium">{customer.name}</div>
                      <div className="text-sm text-gray-500">{customer.totalOrders} orders</div>
                    </div>
                  </div>
                  <div className="font-bold text-green-600">{customer.totalSpent}</div>
                </div>
              ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
          <h3 className="font-bold text-gray-800 mb-4">Recent Activity</h3>
          <div className="space-y-3">
            {[...customers]
              .sort((a, b) => new Date(b.lastOrder) - new Date(a.lastOrder))
              .slice(0, 5)
              .map((customer) => (
                <div key={customer.id} className="p-3 hover:bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-medium">{customer.name}</div>
                      <div className="text-sm text-gray-500 flex items-center">
                        <FaShoppingCart className="mr-2" />
                        Order #{customer.id.replace('CUST', 'ORD')}
                      </div>
                    </div>
                    <div className="text-sm text-gray-500">
                      {Math.floor((new Date() - new Date(customer.lastOrder)) / (1000 * 60 * 60 * 24))} days ago
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;