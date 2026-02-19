import React, { useState } from 'react'
import {
  FaSearch,
  FaCheckCircle,
  FaEye,
  FaKey,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaFileAlt,
  FaBan,
  FaPlus,
  FaStore,
  FaRupeeSign,
  FaExclamationTriangle,
  FaFilter,
  FaDownload,
  FaSyncAlt,
  FaTrophy,
  FaChevronRight,
  FaClock,
  FaTimes
} from 'react-icons/fa'

// Modal Component
const Modal = ({ isOpen, onClose, children, title }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-800">{title}</h2>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <FaTimes className="text-xl" />
          </button>
        </div>
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-80px)]">
          {children}
        </div>
      </div>
    </div>
  )
}

// Add Pharmacy Modal Content
const AddPharmacyModalContent = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    owner: '',
    phone: '',
    email: '',
    city: '',
    zone: '',
    address: '',
    subscription: 'Basic',
    commission: '10%',
    pharmacyLicense: null,
    gstCertificate: null,
    ownerIdProof: null
  })

  const cities = ['Kadapa', 'Tirupati', 'Kurnool', 'Nellore', 'Chittoor', 'Anantapur']
  const zones = ['North Zone', 'South Zone', 'East Zone', 'West Zone', 'Central Zone']
  const subscriptionPlans = [
    { value: 'Basic', label: 'Basic (5% commission)' },
    { value: 'Premium', label: 'Premium (8% commission)' },
    { value: 'Enterprise', label: 'Enterprise (Custom commission)' }
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e, field) => {
    const file = e.target.files[0]
    if (file) {
      setFormData(prev => ({ ...prev, [field]: file }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Here you would typically send data to your backend
    alert('Pharmacy added successfully!')
    onClose()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Pharmacy Details */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Pharmacy Details</h3>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Pharmacy Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter pharmacy name"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Owner Name *
            </label>
            <input
              type="text"
              name="owner"
              value={formData.owner}
              onChange={handleInputChange}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter owner's full name"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter 10-digit phone number"
              pattern="[0-9]{10}"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter email address"
            />
          </div>
        </div>

        {/* Location Details */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Location Details</h3>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              City *
            </label>
            <select
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="">Select City</option>
              {cities.map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Zone *
            </label>
            <select
              name="zone"
              value={formData.zone}
              onChange={handleInputChange}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="">Select Zone</option>
              {zones.map(zone => (
                <option key={zone} value={zone}>{zone}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Address *
            </label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              rows="3"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter complete address"
              required
            />
          </div>
        </div>
      </div>

      {/* Subscription & Commission */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Subscription Plan</h3>
          <div className="space-y-3">
            {subscriptionPlans.map(plan => (
              <label key={plan.value} className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                <input
                  type="radio"
                  name="subscription"
                  value={plan.value}
                  checked={formData.subscription === plan.value}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-blue-600"
                />
                <div className="ml-3">
                  <span className="font-medium text-gray-900">{plan.value}</span>
                  <p className="text-sm text-gray-500">{plan.label}</p>
                </div>
              </label>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Commission Rate</h3>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Commission Percentage *
            </label>
            <select
              name="commission"
              value={formData.commission}
              onChange={handleInputChange}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="8%">8% (Recommended for Premium)</option>
              <option value="10%">10% (Standard)</option>
              <option value="12%">12% (High Volume)</option>
              <option value="custom">Custom Rate</option>
            </select>
            {formData.commission === 'custom' && (
              <input
                type="text"
                className="w-full mt-2 px-4 py-2.5 border border-gray-300 rounded-lg"
                placeholder="Enter custom commission rate"
              />
            )}
          </div>
        </div>
      </div>

      {/* Document Upload */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Required Documents</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Pharmacy License *
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
              <input
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={(e) => handleFileChange(e, 'pharmacyLicense')}
                className="hidden"
                id="license-upload"
              />
              <label htmlFor="license-upload" className="cursor-pointer">
                <div className="text-gray-400 mb-2">
                  <FaFileAlt className="mx-auto text-2xl" />
                </div>
                <span className="text-sm text-blue-600 hover:text-blue-800">
                  Click to upload
                </span>
                <p className="text-xs text-gray-500 mt-1">PDF, JPG, PNG up to 5MB</p>
              </label>
              {formData.pharmacyLicense && (
                <p className="text-sm text-green-600 mt-2">✓ {formData.pharmacyLicense.name}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              GST Certificate
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
              <input
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={(e) => handleFileChange(e, 'gstCertificate')}
                className="hidden"
                id="gst-upload"
              />
              <label htmlFor="gst-upload" className="cursor-pointer">
                <div className="text-gray-400 mb-2">
                  <FaFileAlt className="mx-auto text-2xl" />
                </div>
                <span className="text-sm text-blue-600 hover:text-blue-800">
                  Click to upload
                </span>
                <p className="text-xs text-gray-500 mt-1">PDF, JPG, PNG up to 5MB</p>
              </label>
              {formData.gstCertificate && (
                <p className="text-sm text-green-600 mt-2">✓ {formData.gstCertificate.name}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Owner ID Proof *
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
              <input
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={(e) => handleFileChange(e, 'ownerIdProof')}
                className="hidden"
                id="idproof-upload"
              />
              <label htmlFor="idproof-upload" className="cursor-pointer">
                <div className="text-gray-400 mb-2">
                  <FaFileAlt className="mx-auto text-2xl" />
                </div>
                <span className="text-sm text-blue-600 hover:text-blue-800">
                  Click to upload
                </span>
                <p className="text-xs text-gray-500 mt-1">PDF, JPG, PNG up to 5MB</p>
              </label>
              {formData.ownerIdProof && (
                <p className="text-sm text-green-600 mt-2">✓ {formData.ownerIdProof.name}</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Form Actions */}
      <div className="flex justify-end gap-4 pt-6 border-t border-gray-200">
        <button
          type="button"
          onClick={onClose}
          className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
        >
          <FaPlus />
          Add Pharmacy
        </button>
      </div>
    </form>
  )
}

const Pharmacies = () => {
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('all')
  const [isModalOpen, setIsModalOpen] = useState(false)

  // ---------------- MOCK DATA ----------------
  const pharmacies = [
    {
      id: 'PH-001',
      name: 'Sri Medicals',
      owner: 'Ramesh Kumar',
      city: 'Kadapa',
      zone: 'North Zone',
      phone: '9876543210',
      subscription: 'Premium',
      status: 'Active',
      commission: '8%',
      documents: 'Verified',
      revenue: '₹12,450',
      pendingPayout: '₹1,200',
      joined: '10 Jan 2024',
      time: '2 days ago'
    },
    {
      id: 'PH-002',
      name: 'City Pharma',
      owner: 'Sneha Reddy',
      city: 'Tirupati',
      zone: 'Central Zone',
      phone: '9123456780',
      subscription: 'Basic',
      status: 'Pending',
      commission: '10%',
      documents: 'Pending',
      revenue: '₹0',
      pendingPayout: '₹0',
      joined: '15 Jan 2024',
      time: '1 day ago'
    },
    {
      id: 'PH-003',
      name: 'Health Plus',
      owner: 'Arjun Singh',
      city: 'Kurnool',
      zone: 'South Zone',
      phone: '9988776655',
      subscription: 'Premium',
      status: 'Suspended',
      commission: '12%',
      documents: 'Verified',
      revenue: '₹8,900',
      pendingPayout: '₹450',
      joined: '22 Dec 2023',
      time: '1 week ago'
    }
  ]

  // ---------------- FILTER ----------------
  const filteredPharmacies = pharmacies.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.owner.toLowerCase().includes(search.toLowerCase()) ||
      p.city.toLowerCase().includes(search.toLowerCase())

    const matchesFilter =
      filter === 'all' ||
      (filter === 'active' && p.status === 'Active') ||
      (filter === 'pending' && p.status === 'Pending') ||
      (filter === 'suspended' && p.status === 'Suspended')

    return matchesSearch && matchesFilter
  })

  // ---------------- HELPERS ----------------
  const statusBadge = (status) => {
    switch (status) {
      case 'Active':
        return 'bg-green-50 text-green-700 border border-green-200'
      case 'Pending':
        return 'bg-yellow-50 text-yellow-700 border border-yellow-200'
      case 'Suspended':
        return 'bg-red-50 text-red-700 border border-red-200'
      default:
        return 'bg-gray-50 text-gray-700 border border-gray-200'
    }
  }

  return (
    <div className="p-4 space-y-6">
      {/* Header with Add Button */}
      <div className="flex flex-col sm:flex-row justify-between items-start gap-4 sm:items-center">
        <div className="flex-1 min-w-0">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
            Pharmacy Management
          </h1>
          <p className="text-gray-600 text-sm sm:text-base mt-1 sm:mt-0">
            Control onboarding, compliance, subscriptions, commissions & revenue
          </p>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="w-full sm:w-auto px-4 py-2.5 sm:px-6 sm:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center sm:justify-start gap-2 text-sm sm:text-base whitespace-nowrap"
        >
          <FaPlus className="text-sm" />
          Add New Pharmacy
        </button>
      </div>
      {/* Add Pharmacy Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Add New Pharmacy"
      >
        <AddPharmacyModalContent onClose={() => setIsModalOpen(false)} />
      </Modal>

      {/* KPI Cards - Simplified */}
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        {/* Total Pharmacies */}
        <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="flex items-center justify-between">
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm text-gray-500 font-medium">Total Pharmacies</p>
              <p className="text-xl sm:text-2xl font-bold text-blue-600 mt-1 sm:mt-1.5">24</p>
              <p className="text-xs text-blue-500 font-medium mt-1 hidden sm:block">Across all zones</p>
            </div>
            <div className="bg-blue-50 p-2 sm:p-3 rounded-lg ml-2 sm:ml-3 flex-shrink-0">
              <FaStore className="text-blue-600 text-lg sm:text-xl" />
            </div>
          </div>
          {/* Progress Bar */}
          <div className="mt-3 sm:mt-4 h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
            <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '100%' }}></div>
          </div>
        </div>

        {/* Active */}
        <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="flex items-center justify-between">
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm text-gray-500 font-medium">Active</p>
              <p className="text-xl sm:text-2xl font-bold text-green-600 mt-1 sm:mt-1.5">18</p>
              <p className="text-xs text-green-500 font-medium mt-1 hidden sm:block">Currently working</p>
            </div>
            <div className="bg-green-50 p-2 sm:p-3 rounded-lg ml-2 sm:ml-3 flex-shrink-0">
              <FaTrophy className="text-green-600 text-lg sm:text-xl" />
            </div>
          </div>
          {/* Progress Bar */}
          <div className="mt-3 sm:mt-4 h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
            <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '75%' }}></div>
          </div>
        </div>

        {/* Monthly Revenue */}
        <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="flex items-center justify-between">
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm text-gray-500 font-medium">Monthly Revenue</p>
              <p className="text-xl sm:text-2xl font-bold text-purple-600 mt-1 sm:mt-1.5">₹54,800</p>
              <p className="text-xs text-purple-500 font-medium mt-1 hidden sm:block">This month</p>
            </div>
            <div className="bg-purple-50 p-2 sm:p-3 rounded-lg ml-2 sm:ml-3 flex-shrink-0">
              <FaRupeeSign className="text-purple-600 text-lg sm:text-xl" />
            </div>
          </div>
          {/* Progress Bar */}
          <div className="mt-3 sm:mt-4 h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
            <div className="bg-purple-500 h-1.5 rounded-full" style={{ width: '85%' }}></div>
          </div>
        </div>

        {/* Alerts */}
        <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="flex items-center justify-between">
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm text-gray-500 font-medium">Alerts</p>
              <p className="text-xl sm:text-2-xl font-bold text-red-600 mt-1 sm:mt-1.5">3</p>
              <p className="text-xs text-red-500 font-medium mt-1 hidden sm:block">Require attention</p>
            </div>
            <div className="bg-red-50 p-2 sm:p-3 rounded-lg ml-2 sm:ml-3 flex-shrink-0">
              <FaExclamationTriangle className="text-red-600 text-lg sm:text-xl" />
            </div>
          </div>
          {/* Progress Bar */}
          <div className="mt-3 sm:mt-4 h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
            <div className="bg-red-500 h-1.5 rounded-full" style={{ width: '15%' }}></div>
          </div>
        </div>
      </div>

      {/* Filters - Same as Orders */}
      <div className="bg-white border border-gray-200 rounded-xl p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search pharmacy, owner, or city..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="all">All Pharmacies</option>
            <option value="active">Active</option>
            <option value="pending">Pending</option>
            <option value="suspended">Suspended</option>
          </select>

          <select className="border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
            <option>All Cities</option>
            <option>Kadapa</option>
            <option>Tirupati</option>
            <option>Kurnool</option>
          </select>
        </div>
      </div>

      {/* Pharmacies Table - Same structure as Orders */}
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-[1200px] w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  Pharmacy
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  Location
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  Subscription
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  Commission
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  Revenue
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  Documents
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredPharmacies.map((p) => (
                <tr key={p.id} className="border-t border-gray-100 hover:bg-gray-50/50">
                  {/* Pharmacy */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className="bg-blue-50 p-2 rounded-lg">
                        <FaStore className="text-blue-600" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{p.name}</div>
                        <div className="text-xs text-gray-500">Owner: {p.owner}</div>
                        <div className="flex items-center text-xs text-gray-400 mt-1">
                          <FaClock className="mr-1.5 text-gray-400" />
                          {p.time}
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* Location */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className="bg-gray-100 p-2 rounded-lg">
                        <FaMapMarkerAlt className="text-gray-600" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{p.city}</div>
                        <div className="text-xs text-gray-500">{p.zone}</div>
                        <div className="text-xs text-gray-400">{p.phone}</div>
                      </div>
                    </div>
                  </td>

                  {/* Subscription */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="space-y-1">
                      <span className={`px-3 py-1.5 rounded-full text-sm font-medium ${p.subscription === 'Premium'
                        ? 'bg-purple-50 text-purple-700 border border-purple-200'
                        : 'bg-blue-50 text-blue-700 border border-blue-200'
                        }`}>
                        {p.subscription}
                      </span>
                      <div className="text-xs text-gray-500">Joined: {p.joined}</div>
                    </div>
                  </td>

                  {/* Commission */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className="bg-green-50 p-2 rounded-lg">
                        <FaMoneyBillWave className="text-green-600" />
                      </div>
                      <div className="font-medium text-gray-900">{p.commission}</div>
                    </div>
                  </td>

                  {/* Revenue */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className="bg-gray-100 p-2 rounded-lg">
                        <FaRupeeSign className="text-gray-600" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">{p.revenue}</div>
                        <div className="text-xs text-gray-500">Pending: {p.pendingPayout}</div>
                      </div>
                    </div>
                  </td>

                  {/* Documents */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${p.documents === 'Verified'
                        ? 'bg-green-50'
                        : 'bg-yellow-50'
                        }`}>
                        <FaFileAlt className={
                          p.documents === 'Verified'
                            ? 'text-green-600'
                            : 'text-yellow-600'
                        } />
                      </div>
                      <div className={
                        p.documents === 'Verified'
                          ? 'text-green-700 font-medium'
                          : 'text-yellow-700 font-medium'
                      }>
                        {p.documents}
                      </div>
                    </div>
                  </td>

                  {/* Status */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1.5 rounded-full text-sm font-medium ${statusBadge(p.status)}`}>
                      {p.status}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex gap-2">
                      <button
                        className="p-2.5 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors"
                        title="View Details"
                      >
                        <FaEye />
                      </button>

                      <button
                        className="p-2.5 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-colors"
                        title="Verify Pharmacy"
                      >
                        <FaCheckCircle />
                      </button>

                      <button
                        className="p-2.5 bg-purple-50 text-purple-600 rounded-lg hover:bg-purple-100 transition-colors"
                        title="Manage Access"
                      >
                        <FaKey />
                      </button>

                      <button
                        className="p-2.5 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors"
                        title="Suspend Pharmacy"
                      >
                        <FaBan />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Custom scrollbar styling */}
      <style jsx>{`
        /* Thin and subtle scrollbar */
        .overflow-x-auto::-webkit-scrollbar {
          height: 6px;
        }
        
        .overflow-x-auto::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 3px;
        }
        
        .overflow-x-auto::-webkit-scrollbar-thumb {
          background: #c1c1c1;
          border-radius: 3px;
        }
        
        .overflow-x-auto::-webkit-scrollbar-thumb:hover {
          background: #a8a8a8;
        }
        
        /* For Firefox */
        .overflow-x-auto {
          scrollbar-width: thin;
          scrollbar-color: #c1c1c1 #f1f1f1;
        }
      `}</style>

      {/* Executive Controls - Simplified */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <h3 className="text-lg font-bold text-gray-800 mb-4">
          Pharmacy Controls
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <button className="p-4 bg-green-50 hover:bg-green-100 rounded-lg border border-green-100 transition-colors text-left">
            <div className="font-medium text-gray-900">Approve Pharmacies</div>
            <div className="text-sm text-gray-600 mt-1">Verify documents & activate</div>
          </button>

          <button className="p-4 bg-blue-50 hover:bg-blue-100 rounded-lg border border-blue-100 transition-colors text-left">
            <div className="font-medium text-gray-900">Subscription Plans</div>
            <div className="text-sm text-gray-600 mt-1">Upgrade & renew plans</div>
          </button>

          <button className="p-4 bg-purple-50 hover:bg-purple-100 rounded-lg border border-purple-100 transition-colors text-left">
            <div className="font-medium text-gray-900">Commission Rules</div>
            <div className="text-sm text-gray-600 mt-1">Revenue configuration</div>
          </button>

          <button className="p-4 bg-orange-50 hover:bg-orange-100 rounded-lg border border-orange-100 transition-colors text-left">
            <div className="font-medium text-gray-900">Compliance Review</div>
            <div className="text-sm text-gray-600 mt-1">Audit pharmacy licenses</div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Pharmacies