import React, { useState } from 'react'
import {
  FaSearch,
  FaEye,
  FaCheckCircle,
  FaTimesCircle,
  FaUser,
  FaStore,
  FaClock,
  FaNotesMedical,
  FaExclamationTriangle,
  FaDownload,
  FaFilter,
  FaFileMedical,
  FaHourglassHalf,
  FaChartLine,
  FaShieldAlt,
  FaFilePrescription,
  FaClipboardCheck
} from 'react-icons/fa'

// Modal Component for Viewing Prescription
const PrescriptionModal = ({ isOpen, onClose, prescription, onApprove, onReject }) => {
  if (!isOpen) return null

  // Mock prescription image (in real app, this would be from an API)
  const prescriptionImages = {
    'RX-1001': 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&auto=format&fit=crop',
    'RX-1002': 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w-800&auto=format&fit=crop',
    'RX-1003': 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&auto=format&fit=crop'
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Modal Header */}
        <div className="flex justify-between items-center p-6 border-b">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Prescription Review</h2>
            <p className="text-gray-600">ID: {prescription.id} • Order: {prescription.orderId}</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-2xl"
          >
            ×
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Prescription Image */}
            <div>
              <div className="mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Prescription Image</h3>
                <div className="border border-gray-300 rounded-lg p-3">
                  <img
                    src={prescriptionImages[prescription.id] || 'https://via.placeholder.com/800x600?text=Prescription+Image'}
                    alt="Prescription"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>

              {/* Prescription Details */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">Details</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Uploaded:</span>
                    <span className="font-medium">{prescription.uploadedAt}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Medicines:</span>
                    <span className="font-medium">{prescription.medicineCount} items</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Status:</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${prescription.status === 'Approved' ? 'bg-green-100 text-green-800' : prescription.status === 'Rejected' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'}`}>
                      {prescription.status}
                    </span>
                  </div>
                  {prescription.flagged && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Flagged:</span>
                      <span className="text-red-600 font-medium">Yes - Requires review</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Doctor & Patient Info */}
            <div>
              <div className="space-y-4">
                {/* Doctor Info */}
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Doctor Information</h4>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <FaNotesMedical className="text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium">{prescription.doctor}</p>
                      <p className="text-sm text-gray-600">Prescribing Doctor</p>
                    </div>
                  </div>
                  <div className="text-sm text-gray-700">
                    <p>Medical License: MHMC-2023-4567</p>
                    <p className="mt-1">Specialization: General Physician</p>
                  </div>
                </div>

                {/* Patient Info */}
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Patient Information</h4>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-green-100 p-2 rounded-lg">
                      <FaUser className="text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium">{prescription.customer}</p>
                      <p className="text-sm text-gray-600">{prescription.city}</p>
                    </div>
                  </div>
                  <div className="text-sm text-gray-700">
                    <p>Age: 32 • Gender: Female</p>
                    <p className="mt-1">Allergies: None reported</p>
                  </div>
                </div>

                {/* Pharmacy Info */}
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Dispensing Pharmacy</h4>
                  <div className="flex items-center gap-3">
                    <div className="bg-purple-100 p-2 rounded-lg">
                      <FaStore className="text-purple-600" />
                    </div>
                    <div>
                      <p className="font-medium">{prescription.pharmacy}</p>
                      <p className="text-sm text-gray-600">{prescription.city}</p>
                    </div>
                  </div>
                </div>

                {/* Medicine List */}
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Prescribed Medicines ({prescription.medicineCount})</h4>
                  <div className="space-y-2">
                    {Array.from({ length: prescription.medicineCount }).map((_, idx) => (
                      <div key={idx} className="flex justify-between items-center bg-white p-2 rounded">
                        <span className="text-sm font-medium">Medicine {idx + 1}</span>
                        <span className="text-xs bg-gray-100 px-2 py-1 rounded">2 weeks supply</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer with Actions */}
        <div className="p-6 border-t bg-gray-50">
          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              <button
                onClick={() => onApprove(prescription.id)}
                className="px-6 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
              >
                <FaCheckCircle />
                Approve Prescription
              </button>
              <button
                onClick={() => onReject(prescription.id)}
                className="px-6 py-2.5 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center gap-2"
              >
                <FaTimesCircle />
                Reject Prescription
              </button>
            </div>
            <div className="flex gap-2">
              <button
                className="px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2"
                onClick={() => alert(`Downloading prescription ${prescription.id}`)}
              >
                <FaDownload />
                Download
              </button>
              <button
                onClick={onClose}
                className="px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Prescription = () => {
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('all')
  const [selectedPrescription, setSelectedPrescription] = useState(null)
  const [prescriptions, setPrescriptions] = useState([
    {
      id: 'RX-1001',
      orderId: 'ORD-1002',
      customer: 'Sneha Reddy',
      pharmacy: 'City Pharma',
      doctor: 'Dr. K. Sharma',
      medicineCount: 3,
      uploadedAt: '2024-01-15 10:45 AM',
      status: 'Pending',
      city: 'Tirupati',
      flagged: false
    },
    {
      id: 'RX-1002',
      orderId: 'ORD-1004',
      customer: 'Priya Sharma',
      pharmacy: 'Sri Medicals',
      doctor: 'Dr. R. Mehta',
      medicineCount: 2,
      uploadedAt: '2024-01-15 09:20 AM',
      status: 'Approved',
      city: 'Kadapa',
      flagged: false
    },
    {
      id: 'RX-1003',
      orderId: 'ORD-1007',
      customer: 'Arjun Singh',
      pharmacy: 'Health Plus',
      doctor: 'Unknown',
      medicineCount: 4,
      uploadedAt: '2024-01-14 06:10 PM',
      status: 'Rejected',
      city: 'Kurnool',
      flagged: true
    }
  ])

  // Statistics
  const pendingCount = prescriptions.filter(p => p.status === 'Pending').length
  const approvedCount = prescriptions.filter(p => p.status === 'Approved').length
  const flaggedCount = prescriptions.filter(p => p.flagged).length
  const totalCount = prescriptions.length

  const filteredPrescriptions = prescriptions.filter((p) => {
    const matchesSearch =
      p.id.toLowerCase().includes(search.toLowerCase()) ||
      p.customer.toLowerCase().includes(search.toLowerCase()) ||
      p.pharmacy.toLowerCase().includes(search.toLowerCase()) ||
      p.orderId.toLowerCase().includes(search.toLowerCase())

    const matchesFilter =
      filter === 'all' ||
      (filter === 'pending' && p.status === 'Pending') ||
      (filter === 'approved' && p.status === 'Approved') ||
      (filter === 'rejected' && p.status === 'Rejected') ||
      (filter === 'flagged' && p.flagged)

    return matchesSearch && matchesFilter
  })

  const statusBadge = (status) => {
    switch (status) {
      case 'Approved':
        return 'bg-green-50 text-green-700 border border-green-200'
      case 'Pending':
        return 'bg-yellow-50 text-yellow-700 border border-yellow-200'
      case 'Rejected':
        return 'bg-red-50 text-red-700 border border-red-200'
      default:
        return 'bg-gray-50 text-gray-700 border border-gray-200'
    }
  }

  // Action Handlers
  const handleViewPrescription = (prescription) => {
    setSelectedPrescription(prescription)
  }

  const handleApprove = (prescriptionId) => {
    setPrescriptions(prev => prev.map(p => 
      p.id === prescriptionId ? { ...p, status: 'Approved', flagged: false } : p
    ))
    setSelectedPrescription(null)
    alert(`Prescription ${prescriptionId} approved successfully!`)
  }

  const handleReject = (prescriptionId) => {
    setPrescriptions(prev => prev.map(p => 
      p.id === prescriptionId ? { ...p, status: 'Rejected' } : p
    ))
    setSelectedPrescription(null)
    alert(`Prescription ${prescriptionId} rejected.`)
  }

  const handleQuickApprove = (prescriptionId, e) => {
    e.stopPropagation()
    handleApprove(prescriptionId)
  }

  const handleQuickReject = (prescriptionId, e) => {
    e.stopPropagation()
    handleReject(prescriptionId)
  }

  const handleDownload = (prescriptionId, e) => {
    e.stopPropagation()
    alert(`Downloading prescription ${prescriptionId}`)
  }

  return (
    <div className="p-4 space-y-6">
      {/* Prescription Modal */}
      <PrescriptionModal
        isOpen={!!selectedPrescription}
        onClose={() => setSelectedPrescription(null)}
        prescription={selectedPrescription}
        onApprove={handleApprove}
        onReject={handleReject}
      />

      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          Prescription Review & Compliance
        </h1>
        <p className="text-gray-600">
          Verify medical documents before medicines are released to customers
        </p>
      </div>

      {/* Stats Cards with Gradient Design */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Prescriptions Card */}
        <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl p-6 border border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 font-medium">Total Prescriptions</p>
              <p className="text-3xl font-bold text-gray-900 mt-1">{totalCount}</p>
              <p className="text-xs text-blue-600 font-medium mt-2">Across all cities</p>
            </div>
            <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 shadow-md">
              <FaFilePrescription className="text-white text-xl" />
            </div>
          </div>
          <div className="mt-4 h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-1.5 rounded-full" style={{ width: '100%' }}></div>
          </div>
        </div>

        {/* Pending Review Card */}
        <div className="bg-gradient-to-br from-white to-yellow-50 rounded-xl p-6 border border-yellow-100 shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 font-medium">Pending Review</p>
              <p className="text-3xl font-bold text-gray-900 mt-1">{pendingCount}</p>
              <p className="text-xs text-yellow-600 font-medium mt-2">Awaiting approval</p>
            </div>
            <div className="p-3 rounded-lg bg-gradient-to-r from-yellow-500 to-amber-500 shadow-md">
              <FaHourglassHalf className="text-white text-xl" />
            </div>
          </div>
          <div className="mt-4 h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
            <div className="bg-gradient-to-r from-yellow-500 to-amber-500 h-1.5 rounded-full" style={{ width: `${(pendingCount/Math.max(totalCount, 1))*100}%` }}></div>
          </div>
        </div>

        {/* Approved Card */}
        <div className="bg-gradient-to-br from-white to-green-50 rounded-xl p-6 border border-green-100 shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 font-medium">Approved</p>
              <p className="text-3xl font-bold text-gray-900 mt-1">{approvedCount}</p>
              <p className="text-xs text-green-600 font-medium mt-2">Verified & cleared</p>
            </div>
            <div className="p-3 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 shadow-md">
              <FaCheckCircle className="text-white text-xl" />
            </div>
          </div>
          <div className="mt-4 h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-1.5 rounded-full" style={{ width: `${(approvedCount/Math.max(totalCount, 1))*100}%` }}></div>
          </div>
        </div>

        {/* Flagged Card */}
        <div className="bg-gradient-to-br from-white to-red-50 rounded-xl p-6 border border-red-100 shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 font-medium">Flagged</p>
              <p className="text-3xl font-bold text-gray-900 mt-1">{flaggedCount}</p>
              <p className="text-xs text-red-600 font-medium mt-2">Requires attention</p>
            </div>
            <div className="p-3 rounded-lg bg-gradient-to-r from-red-500 to-orange-500 shadow-md">
              <FaExclamationTriangle className="text-white text-xl" />
            </div>
          </div>
          <div className="mt-4 h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
            <div className="bg-gradient-to-r from-red-500 to-orange-500 h-1.5 rounded-full" style={{ width: `${(flaggedCount/Math.max(totalCount, 1))*100}%` }}></div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl p-4 border border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search RX ID, Order ID, customer, pharmacy..."
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
            <option value="all">All Prescriptions</option>
            <option value="pending">Pending Review</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
            <option value="flagged">Flagged / Risky</option>
          </select>

          <select className="border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
            <option>All Cities</option>
            <option>Kadapa</option>
            <option>Tirupati</option>
            <option>Kurnool</option>
          </select>
        </div>
      </div>

      {/* Prescription Table */}
      <div className="bg-white rounded-xl overflow-hidden border border-gray-200">
        <div className="overflow-x-auto">
          <table className="min-w-[1200px] w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  Prescription
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  Customer
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  Pharmacy
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  Doctor
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  Medicines
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
              {filteredPrescriptions.map((p) => (
                <tr 
                  key={p.id} 
                  className="border-t border-gray-100 hover:bg-gray-50/50 cursor-pointer"
                  onClick={() => handleViewPrescription(p)}
                >
                  {/* Prescription */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="font-medium text-gray-900">{p.id}</div>
                      <div className="text-sm text-gray-500">Order: {p.orderId}</div>
                      <div className="flex items-center text-xs text-gray-400 mt-1">
                        <FaClock className="mr-1.5 text-gray-400" />
                        {p.uploadedAt}
                      </div>
                    </div>
                  </td>

                  {/* Customer */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className="bg-gray-100 p-2 rounded-lg">
                        <FaUser className="text-gray-600" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{p.customer}</div>
                        <div className="text-xs text-gray-500">{p.city}</div>
                      </div>
                    </div>
                  </td>

                  {/* Pharmacy */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className="bg-blue-50 p-2 rounded-lg">
                        <FaStore className="text-blue-600" />
                      </div>
                      <div className="font-medium text-gray-900">{p.pharmacy}</div>
                    </div>
                  </td>

                  {/* Doctor */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className="bg-purple-50 p-2 rounded-lg">
                        <FaNotesMedical className="text-purple-600" />
                      </div>
                      <div className="font-medium text-gray-900">{p.doctor}</div>
                    </div>
                  </td>

                  {/* Medicines */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-gray-900">{p.medicineCount} items</div>
                  </td>

                  {/* Status */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="space-y-2">
                      <span className={`px-3 py-1.5 rounded-full text-sm font-medium ${statusBadge(p.status)}`}>
                        {p.status}
                      </span>
                      {p.flagged && (
                        <div className="flex items-center text-red-600 text-xs">
                          <FaExclamationTriangle className="mr-1.5" />
                          Flagged
                        </div>
                      )}
                    </div>
                  </td>

                  {/* Actions */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex gap-2" onClick={e => e.stopPropagation()}>
                      <button
                        onClick={() => handleViewPrescription(p)}
                        className="p-2.5 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors"
                        title="View Prescription"
                      >
                        <FaEye />
                      </button>

                      <button
                        onClick={(e) => handleQuickApprove(p.id, e)}
                        className="p-2.5 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-colors"
                        title="Approve"
                      >
                        <FaCheckCircle />
                      </button>

                      <button
                        onClick={(e) => handleQuickReject(p.id, e)}
                        className="p-2.5 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors"
                        title="Reject"
                      >
                        <FaTimesCircle />
                      </button>

                      <button
                        onClick={(e) => handleDownload(p.id, e)}
                        className="p-2.5 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                        title="Download"
                      >
                        <FaDownload />
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
        
        .overflow-x-auto {
          scrollbar-width: thin;
          scrollbar-color: #c1c1c1 #f1f1f1;
        }
      `}</style>

      {/* Compliance Controls */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h3 className="text-lg font-bold text-gray-800 mb-4">
          Compliance Controls
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <button 
            onClick={() => alert('Reviewing flagged cases...')}
            className="p-4 bg-yellow-50 hover:bg-yellow-100 rounded-lg border border-yellow-100 transition-colors text-left"
          >
            <div className="font-medium text-gray-900">Review Flagged Cases</div>
            <div className="text-sm text-gray-600 mt-1">Risky or unclear prescriptions</div>
          </button>

          <button 
            onClick={() => alert('Downloading audit history...')}
            className="p-4 bg-green-50 hover:bg-green-100 rounded-lg border border-green-100 transition-colors text-left"
          >
            <div className="font-medium text-gray-900">Audit History</div>
            <div className="text-sm text-gray-600 mt-1">Download compliance logs</div>
          </button>

          <button 
            onClick={() => alert('Opening prescription rules...')}
            className="p-4 bg-blue-50 hover:bg-blue-100 rounded-lg border border-blue-100 transition-colors text-left"
          >
            <div className="font-medium text-gray-900">Prescription Rules</div>
            <div className="text-sm text-gray-600 mt-1">Configure approval policies</div>
          </button>

          <button 
            onClick={() => alert('Reporting violation...')}
            className="p-4 bg-red-50 hover:bg-red-100 rounded-lg border border-red-100 transition-colors text-left"
          >
            <div className="font-medium text-gray-900">Report Violation</div>
            <div className="text-sm text-gray-600 mt-1">Legal & medical escalation</div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Prescription