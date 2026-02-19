import React, { useState } from 'react'
import {
  FaSearch,
  FaTruck,
  FaMapMarkedAlt,
  FaRupeeSign,
  FaCheckCircle,
  FaTimesCircle,
  FaUser,
  FaEye,
  FaFileAlt,
  FaCog,
  FaChartLine,
  FaExclamationTriangle,
  FaPlus,
  FaClock,
  FaShieldAlt,
  FaMoneyBillWave,
  FaUsers,
  FaBan,
  FaEdit,
  FaPhone,
  FaStar,
  FaLocationArrow,
  FaIdCard,
  FaMotorcycle,
  FaCalendar,
  FaWallet,
  FaHistory,
  FaFileMedical,
  FaPercentage,
  FaCalculator,
  FaRoute,
  FaBalanceScale,
  FaFileInvoice,
  FaListAlt,
  FaGavel
} from 'react-icons/fa'
import AddDeliveryPartnerModal from '../../pharmacy/Modal/AddDeliveryPartnerModal.jsx'

// Detail Modals Components
const RiderDetailModal = ({ isOpen, onClose, rider, onAction }) => {
  if (!isOpen) return null

  const actionButtons = [
    { label: 'Approve Rider', icon: FaCheckCircle, color: 'green', action: 'approve', show: rider.status === 'Pending' },
    { label: 'Suspend Rider', icon: FaBan, color: 'red', action: 'suspend', show: rider.status === 'Active' },
    { label: 'Activate Rider', icon: FaCheckCircle, color: 'green', action: 'activate', show: rider.status === 'Suspended' },
    { label: 'View Documents', icon: FaFileMedical, color: 'blue', action: 'documents' },
    { label: 'View Earnings', icon: FaWallet, color: 'purple', action: 'earnings' },
    { label: 'Edit Details', icon: FaEdit, color: 'yellow', action: 'edit' }
  ]

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        <div className="flex justify-between items-center p-6 border-b">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Rider Details</h2>
            <p className="text-gray-600">ID: {rider.id} • {rider.name}</p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-2xl">×</button>
        </div>

        <div className="p-6 overflow-y-auto max-h-[60vh]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <FaUser className="text-blue-600" />
                  Personal Information
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Full Name:</span>
                    <span className="font-medium">{rider.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Phone:</span>
                    <span className="font-medium flex items-center gap-1">
                      <FaPhone className="text-xs" /> {rider.phone}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Joined:</span>
                    <span className="font-medium">{rider.joined}</span>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <FaMapMarkedAlt className="text-green-600" />
                  Location Details
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">City:</span>
                    <span className="font-medium">{rider.city}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Zone:</span>
                    <span className="font-medium">{rider.zone}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-yellow-50 p-4 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <FaChartLine className="text-yellow-600" />
                  Performance Metrics
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-white rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">{rider.deliveries}</div>
                    <div className="text-xs text-gray-500">Deliveries</div>
                  </div>
                  <div className="text-center p-3 bg-white rounded-lg">
                    <div className="text-2xl font-bold text-green-600">{rider.rating}</div>
                    <div className="text-xs text-gray-500">Rating</div>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 p-4 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <FaShieldAlt className="text-red-600" />
                  Compliance Status
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Documents:</span>
                    <span className={`px-2 py-1 rounded-full text-xs ${rider.documents === 'Verified' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                      {rider.documents}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Bank Details:</span>
                    <span className={`px-2 py-1 rounded-full text-xs ${rider.bank === 'Added' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {rider.bank}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 border-t bg-gray-50">
          <div className="flex flex-wrap gap-2">
            {actionButtons
              .filter(btn => btn.show === undefined || btn.show)
              .map((btn, index) => (
                <button
                  key={index}
                  onClick={() => onAction(btn.action)}
                  className={`px-4 py-2.5 rounded-lg flex items-center gap-2 transition-colors ${btn.color === 'green' ? 'bg-green-600 hover:bg-green-700 text-white' :
                    btn.color === 'red' ? 'bg-red-600 hover:bg-red-700 text-white' :
                      btn.color === 'blue' ? 'bg-blue-600 hover:bg-blue-700 text-white' :
                        btn.color === 'purple' ? 'bg-purple-600 hover:bg-purple-700 text-white' :
                          'bg-yellow-600 hover:bg-yellow-700 text-white'
                    }`}
                >
                  <btn.icon />
                  {btn.label}
                </button>
              ))}
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
  )
}

const PayoutDetailModal = ({ isOpen, onClose, payout, onAction }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
        <div className="flex justify-between items-center p-6 border-b">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Payout Details</h2>
            <p className="text-gray-600">ID: {payout.id} • Rider: {payout.rider}</p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-2xl">×</button>
        </div>

        <div className="p-6 overflow-y-auto">
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-2">Basic Info</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Period:</span>
                    <span className="font-medium">{payout.period}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Amount:</span>
                    <span className="font-medium text-green-600 flex items-center gap-1">
                      <FaRupeeSign /> {payout.amount}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Status:</span>
                    <span className={`px-2 py-1 rounded-full text-xs ${payout.status === 'Paid' ? 'bg-green-100 text-green-800' : payout.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                      {payout.status}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-2">Breakdown</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Base Pay:</span>
                    <span className="font-medium">₹{parseInt(payout.amount.replace('₹', '').replace(',', '')) * 0.7}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Bonus:</span>
                    <span className="font-medium">₹{parseInt(payout.amount.replace('₹', '').replace(',', '')) * 0.2}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Incentives:</span>
                    <span className="font-medium">₹{parseInt(payout.amount.replace('₹', '').replace(',', '')) * 0.1}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-3">Payment Method</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Bank:</span>
                  <span className="font-medium">HDFC Bank</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Account No:</span>
                  <span className="font-medium">•••• 4567</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">IFSC:</span>
                  <span className="font-medium">HDFC0001234</span>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-3">Delivery Summary</h4>
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div className="text-center">
                  <div className="font-bold text-blue-600">24</div>
                  <div className="text-gray-600">Orders</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-green-600">92%</div>
                  <div className="text-gray-600">On-Time</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-purple-600">4.7</div>
                  <div className="text-gray-600">Avg Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 border-t bg-gray-50">
          <div className="flex gap-2">
            <button
              onClick={() => onAction('process')}
              className="px-6 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
            >
              <FaCheckCircle />
              Process Payment
            </button>
            <button
              onClick={() => onAction('hold')}
              className="px-6 py-2.5 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors flex items-center gap-2"
            >
              <FaClock />
              Hold Payment
            </button>
            <button
              onClick={() => onAction('download')}
              className="px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2"
            >
              <FaFileInvoice />
              Invoice
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
  )
}

const DisputeDetailModal = ({ isOpen, onClose, dispute, onAction }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
        <div className="flex justify-between items-center p-6 border-b">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Dispute Details</h2>
            <p className="text-gray-600">ID: {dispute.id} • Order: {dispute.order}</p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-2xl">×</button>
        </div>

        <div className="p-6 overflow-y-auto">
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-2">Basic Information</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Rider:</span>
                    <span className="font-medium">{dispute.rider}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Order:</span>
                    <span className="font-medium">{dispute.order}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Issue:</span>
                    <span className="font-medium">{dispute.issue}</span>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 p-4 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-2">Status & Timeline</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Status:</span>
                    <span className={`px-2 py-1 rounded-full text-xs ${dispute.status === 'Resolved' ? 'bg-green-100 text-green-800' :
                      dispute.status === 'Investigating' ? 'bg-blue-100 text-blue-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                      {dispute.status}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Reported:</span>
                    <span className="font-medium">{dispute.reported}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Priority:</span>
                    <span className="font-medium text-red-600">High</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-3">Issue Description</h4>
              <p className="text-sm text-gray-700">
                Customer reported that the delivery was delayed by 45 minutes beyond the estimated time.
                The rider faced traffic congestion in the main city area. Customer requested compensation
                for the inconvenience caused.
              </p>
            </div>

            <div className="bg-yellow-50 p-4 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-3">Actions Taken</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-500" />
                  <span>Customer contacted - Apology issued</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-500" />
                  <span>Rider statement recorded</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaClock className="text-yellow-500" />
                  <span>Compensation review pending</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 border-t bg-gray-50">
          <div className="flex gap-2">
            <button
              onClick={() => onAction('resolve')}
              className="px-6 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
            >
              <FaCheckCircle />
              Mark as Resolved
            </button>
            <button
              onClick={() => onAction('compensate')}
              className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              <FaRupeeSign />
              Issue Compensation
            </button>
            <button
              onClick={() => onAction('escalate')}
              className="px-6 py-2.5 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center gap-2"
            >
              <FaExclamationTriangle />
              Escalate
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
  )
}

const DeliveryNetwork = () => {
  const [search, setSearch] = useState('')
  const [activeTab, setActiveTab] = useState('riders')
  const [selectedRider, setSelectedRider] = useState(null)
  const [selectedPayout, setSelectedPayout] = useState(null)
  const [selectedDispute, setSelectedDispute] = useState(null)
  const [isAddRiderModalOpen, setIsAddRiderModalOpen] = useState(false)
  const [riders, setRiders] = useState([
    {
      id: 'RD-101',
      name: 'Amit Kumar',
      city: 'Kadapa',
      zone: 'North Zone',
      phone: '9876543210',
      status: 'Active',
      deliveries: 124,
      rating: 4.7,
      documents: 'Verified',
      bank: 'Added',
      earnings: '₹3,240',
      hoursWorked: '38 hrs',
      vehicle: 'Bike',
      joined: '2 months ago',
      lastActive: '15 mins ago'
    },
    {
      id: 'RD-102',
      name: 'Ravi Teja',
      city: 'Tirupati',
      zone: 'Central Zone',
      phone: '9123456789',
      status: 'Pending',
      deliveries: 0,
      rating: '-',
      documents: 'Pending',
      bank: 'Missing',
      earnings: '₹0',
      hoursWorked: '0 hrs',
      vehicle: 'Bike',
      joined: '1 day ago',
      lastActive: '-'
    }
  ])

  const [zones, setZones] = useState([
    { id: 'ZN-01', name: 'North Zone', city: 'Kadapa', riders: 8, activeOrders: 12, coverage: '85%', color: 'blue' },
    { id: 'ZN-02', name: 'Central Zone', city: 'Tirupati', riders: 6, activeOrders: 8, coverage: '70%', color: 'green' },
    { id: 'ZN-03', name: 'South Zone', city: 'Kurnool', riders: 7, activeOrders: 9, coverage: '65%', color: 'purple' },
    { id: 'ZN-04', name: 'East Zone', city: 'Kadapa', riders: 4, activeOrders: 5, coverage: '45%', color: 'red' }
  ])

  const [payouts, setPayouts] = useState([
    { id: 'PO-9001', rider: 'Amit Kumar', period: 'Jan 1-7', amount: '₹1,200', status: 'Paid', date: 'Jan 8, 2024' },
    { id: 'PO-9002', rider: 'Ravi Teja', period: 'Jan 1-7', amount: '₹850', status: 'Pending', date: 'Jan 8, 2024' },
    { id: 'PO-9003', rider: 'Rajesh Yadav', period: 'Jan 1-7', amount: '₹950', status: 'Processing', date: 'Jan 8, 2024' },
    { id: 'PO-9004', rider: 'Suresh Das', period: 'Jan 1-7', amount: '₹1,100', status: 'Failed', date: 'Jan 8, 2024' }
  ])

  const [disputes, setDisputes] = useState([
    { id: 'DS-101', rider: 'Amit Kumar', order: 'ORD-9214', issue: 'Late delivery', status: 'Open', reported: '2 hours ago' },
    { id: 'DS-102', rider: 'Ravi Teja', order: 'ORD-9218', issue: 'Wrong address', status: 'Resolved', reported: '1 day ago' },
    { id: 'DS-103', rider: 'Suresh Das', order: 'ORD-9220', issue: 'Damaged package', status: 'Investigating', reported: '3 hours ago' }
  ])

  const [rules, setRules] = useState([
    { id: 'RU-01', name: 'Distance Priority', description: 'Assign orders to nearest rider', active: true, icon: FaRoute },
    { id: 'RU-02', name: 'Load Balancing', description: 'Distribute orders evenly among riders', active: true, icon: FaBalanceScale },
    { id: 'RU-03', name: 'Performance Based', description: 'Prioritize high-rated riders', active: false, icon: FaStar },
    { id: 'RU-04', name: 'Time-Based', description: 'Consider rider availability time', active: true, icon: FaClock }
  ])

  const [performance, setPerformance] = useState([
    { id: 'PM-01', metric: 'On-Time Delivery', value: '92%', target: '95%', change: '+2%', icon: FaClock, color: 'green' },
    { id: 'PM-02', metric: 'Avg Delivery Time', value: '28 min', target: '25 min', change: '-3 min', icon: FaTruck, color: 'blue' },
    { id: 'PM-03', metric: 'Customer Rating', value: '4.5/5', target: '4.6/5', change: '+0.2', icon: FaStar, color: 'yellow' },
    { id: 'PM-04', metric: 'Order Completion', value: '98%', target: '97%', change: '+1%', icon: FaCheckCircle, color: 'purple' },
    { id: 'PM-05', metric: 'Rider Satisfaction', value: '4.2/5', target: '4.3/5', change: '+0.3', icon: FaUsers, color: 'red' },
    { id: 'PM-06', metric: 'Dispute Rate', value: '2.1%', target: '1.8%', change: '-0.5%', icon: FaExclamationTriangle, color: 'orange' }
  ])

  // Statistics
  const totalRiders = riders.length
  const activeRiders = riders.filter(r => r.status === 'Active').length
  const totalDeliveries = riders.reduce((sum, r) => sum + r.deliveries, 0)
  const totalEarnings = riders.reduce((sum, r) => sum + parseInt(r.earnings.replace('₹', '').replace(',', '')), 0)

  // Helper functions
  const getStatusBadge = (status) => {
    switch (status) {
      case 'Active': return 'bg-green-50 text-green-700 border border-green-200'
      case 'Pending': return 'bg-yellow-50 text-yellow-700 border border-yellow-200'
      case 'Suspended': return 'bg-red-50 text-red-700 border border-red-200'
      default: return 'bg-gray-50 text-gray-700 border border-gray-200'
    }
  }

  const getPayoutStatusBadge = (status) => {
    switch (status) {
      case 'Paid': return 'bg-green-50 text-green-700 border border-green-200'
      case 'Pending': return 'bg-yellow-50 text-yellow-700 border border-yellow-200'
      case 'Processing': return 'bg-blue-50 text-blue-700 border border-blue-200'
      case 'Failed': return 'bg-red-50 text-red-700 border border-red-200'
      default: return 'bg-gray-50 text-gray-700 border border-gray-200'
    }
  }

  const getDisputeStatusBadge = (status) => {
    switch (status) {
      case 'Resolved': return 'bg-green-50 text-green-700 border border-green-200'
      case 'Investigating': return 'bg-blue-50 text-blue-700 border border-blue-200'
      case 'Open': return 'bg-red-50 text-red-700 border border-red-200'
      default: return 'bg-gray-50 text-gray-700 border border-gray-200'
    }
  }

  const handleAction = (action, data) => {
    switch (action) {
      case 'approve_rider':
        setRiders(prev => prev.map(r =>
          r.id === data.id ? { ...r, status: 'Active' } : r
        ))
        alert(`Rider ${data.name} approved!`)
        break
      case 'view_rider':
        setSelectedRider(data)
        break
      case 'view_payout':
        setSelectedPayout(data)
        break
      case 'view_dispute':
        setSelectedDispute(data)
        break
      case 'toggle_rule':
        setRules(prev => prev.map(r =>
          r.id === data.id ? { ...r, active: !r.active } : r
        ))
        break
      default:
        alert(`${action} action executed`)
    }
  }

  const handleAddRiderSubmit = (formData) => {
    console.log('Adding new rider:', formData);

    // Create new rider object
    const newRiderId = `RD-${100 + riders.length + 1}`;
    const newRider = {
      id: newRiderId,
      name: formData.fullName,
      city: formData.city,
      zone: formData.zone,
      phone: formData.phone,
      status: 'Pending',
      deliveries: 0,
      rating: '-',
      documents: 'Pending',
      bank: 'Missing',
      earnings: '₹0',
      hoursWorked: '0 hrs',
      vehicle: formData.vehicleType || 'Bike',
      joined: 'Just now',
      lastActive: '-'
    };

    // Add to riders list
    setRiders(prev => [...prev, newRider]);

    // Show success message
    alert(`${formData.fullName} added successfully! Status: Pending Verification`);

    // Close modal
    setIsAddRiderModalOpen(false);
  };

  return (
    <div className="p-4 space-y-6">
      {/* Modals */}

      <AddDeliveryPartnerModal
        isOpen={isAddRiderModalOpen}
        onClose={() => setIsAddRiderModalOpen(false)}
        onSubmit={handleAddRiderSubmit}
      />

      <RiderDetailModal
        isOpen={!!selectedRider}
        onClose={() => setSelectedRider(null)}
        rider={selectedRider}
        onAction={(action) => handleAction(action, selectedRider)}
      />

      <PayoutDetailModal
        isOpen={!!selectedPayout}
        onClose={() => setSelectedPayout(null)}
        payout={selectedPayout}
        onAction={(action) => handleAction(action, selectedPayout)}
      />

      <DisputeDetailModal
        isOpen={!!selectedDispute}
        onClose={() => setSelectedDispute(null)}
        dispute={selectedDispute}
        onAction={(action) => handleAction(action, selectedDispute)}
      />

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex-1">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800">Delivery Network Management</h1>
          <p className="text-gray-600 text-sm sm:text-base mt-1">Manage riders, zones, payouts, performance & delivery rules</p>
        </div>
        <button
          onClick={() => setIsAddRiderModalOpen(true)}
          className="px-4 py-3 sm:px-6 sm:py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg sm:rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto"
        >
          <FaPlus />
          Add New Rider
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl p-6 border border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 font-medium">Total Riders</p>
              <p className="text-3xl font-bold text-gray-900 mt-1">{totalRiders}</p>
              <p className="text-xs text-blue-600 font-medium mt-2">Across all zones</p>
            </div>
            <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 shadow-md">
              <FaUsers className="text-white text-xl" />
            </div>
          </div>
          <div className="mt-4 h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-1.5 rounded-full" style={{ width: '100%' }}></div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-white to-green-50 rounded-xl p-6 border border-green-100 shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 font-medium">Active Riders</p>
              <p className="text-3xl font-bold text-gray-900 mt-1">{activeRiders}</p>
              <p className="text-xs text-green-600 font-medium mt-2">Currently working</p>
            </div>
            <div className="p-3 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 shadow-md">
              <FaTruck className="text-white text-xl" />
            </div>
          </div>
          <div className="mt-4 h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-1.5 rounded-full" style={{ width: `${(activeRiders / totalRiders) * 100}%` }}></div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-white to-purple-50 rounded-xl p-6 border border-purple-100 shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 font-medium">Total Deliveries</p>
              <p className="text-3xl font-bold text-gray-900 mt-1">{totalDeliveries}</p>
              <p className="text-xs text-purple-600 font-medium mt-2">This month</p>
            </div>
            <div className="p-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 shadow-md">
              <FaChartLine className="text-white text-xl" />
            </div>
          </div>
          <div className="mt-4 h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-1.5 rounded-full" style={{ width: '85%' }}></div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-white to-red-50 rounded-xl p-6 border border-red-100 shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 font-medium">Total Earnings</p>
              <p className="text-3xl font-bold text-gray-900 mt-1">₹{totalEarnings.toLocaleString()}</p>
              <p className="text-xs text-red-600 font-medium mt-2">This week</p>
            </div>
            <div className="p-3 rounded-lg bg-gradient-to-r from-red-500 to-orange-500 shadow-md">
              <FaMoneyBillWave className="text-white text-xl" />
            </div>
          </div>
          <div className="mt-4 h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
            <div className="bg-gradient-to-r from-red-500 to-orange-500 h-1.5 rounded-full" style={{ width: '65%' }}></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
        {/* Tabs */}
        <div className="flex border-b overflow-x-auto mb-6">
          {[
            { key: 'riders', label: 'Riders', icon: FaTruck },
            { key: 'zones', label: 'Zones', icon: FaMapMarkedAlt },
            { key: 'payouts', label: 'Payouts', icon: FaRupeeSign },
            { key: 'performance', label: 'Performance', icon: FaChartLine },
            { key: 'disputes', label: 'Disputes', icon: FaExclamationTriangle },
            { key: 'rules', label: 'Rules', icon: FaCog }
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition whitespace-nowrap ${activeTab === tab.key
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-600 hover:text-blue-600'
                }`}
            >
              <tab.icon />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div>
          {/* Riders Tab */}
          {activeTab === 'riders' && (
            <>
              <div className="mb-6">
                <div className="relative">
                  <FaSearch className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search riders..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[1200px]">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Rider</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Location</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Performance</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Compliance</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Status</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {riders.map((rider) => (
                      <tr key={rider.id} className="border-t border-gray-100 hover:bg-gray-50/50">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="bg-blue-50 p-2 rounded-lg">
                              <FaUser className="text-blue-600" />
                            </div>
                            <div>
                              <div className="font-medium text-gray-900">{rider.name}</div>
                              <div className="text-xs text-gray-500">{rider.id}</div>
                              <div className="text-xs text-gray-400">{rider.phone}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="bg-gray-100 p-2 rounded-lg">
                              <FaLocationArrow className="text-gray-600" />
                            </div>
                            <div>
                              <div className="font-medium text-gray-900">{rider.zone}</div>
                              <div className="text-xs text-gray-500">{rider.city}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="space-y-1">
                            <div className="font-medium text-gray-900">{rider.deliveries} deliveries</div>
                            <div className="text-sm text-gray-700">Rating: {rider.rating}/5</div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="space-y-2">
                            <div className={`text-xs px-2 py-1 rounded-full w-fit ${rider.documents === 'Verified' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-yellow-50 text-yellow-700 border border-yellow-200'
                              }`}>
                              {rider.documents}
                            </div>
                            <div className={`text-xs px-2 py-1 rounded-full w-fit ${rider.bank === 'Added' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'
                              }`}>
                              {rider.bank}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1.5 rounded-full text-sm font-medium ${getStatusBadge(rider.status)}`}>
                            {rider.status}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex gap-2">
                            <button
                              onClick={() => handleAction('view_rider', rider)}
                              className="p-2.5 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors"
                            >
                              <FaEye />
                            </button>
                            {rider.status === 'Pending' && (
                              <button
                                onClick={() => handleAction('approve_rider', rider)}
                                className="p-2.5 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-colors"
                              >
                                <FaCheckCircle />
                              </button>
                            )}
                            <button className="p-2.5 bg-purple-50 text-purple-600 rounded-lg hover:bg-purple-100 transition-colors">
                              <FaEdit />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}

          {/* Zones Tab */}
          {activeTab === 'zones' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {zones.map((zone) => (
                <div key={zone.id} className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-lg bg-gradient-to-r from-${zone.color}-500 to-${zone.color}-600 shadow-md`}>
                        <FaMapMarkedAlt className="text-white text-lg" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">{zone.name}</h3>
                        <p className="text-sm text-gray-600">{zone.city}</p>
                      </div>
                    </div>
                    <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full">
                      {zone.coverage} coverage
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">{zone.riders}</div>
                      <div className="text-xs text-gray-500">Active Riders</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">{zone.activeOrders}</div>
                      <div className="text-xs text-gray-500">Active Orders</div>
                    </div>
                  </div>
                  <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:shadow-lg transition-all duration-300">
                    Manage Zone
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Payouts Tab */}
          {activeTab === 'payouts' && (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[1000px]">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Rider</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Period</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Amount</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Status</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Date</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {payouts.map((payout) => (
                    <tr key={payout.id} className="border-t border-gray-100 hover:bg-gray-50/50">
                      <td className="px-6 py-4 font-medium text-gray-900">{payout.rider}</td>
                      <td className="px-6 py-4">{payout.period}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-1">
                          <FaRupeeSign className="text-gray-500" />
                          <span className="font-bold text-gray-900">{payout.amount}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1.5 rounded-full text-sm font-medium ${getPayoutStatusBadge(payout.status)}`}>
                          {payout.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-600">{payout.date}</td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleAction('view_payout', payout)}
                            className="p-2.5 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors"
                          >
                            <FaEye />
                          </button>
                          <button className="p-2.5 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-colors">
                            <FaCheckCircle />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Performance Tab */}
          {activeTab === 'performance' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {performance.map((metric) => (
                <div key={metric.id} className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-lg bg-${metric.color}-50`}>
                        <metric.icon className={`text-${metric.color}-600 text-lg`} />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">{metric.metric}</h3>
                        <p className="text-xs text-gray-500">Target: {metric.target}</p>
                      </div>
                    </div>
                    <span className={`text-sm font-medium ${metric.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                      {metric.change}
                    </span>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{metric.value}</div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-${metric.color}-500 rounded-full`}
                      style={{ width: `${parseInt(metric.value) || 80}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Disputes Tab */}
          {activeTab === 'disputes' && (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[1000px]">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Rider</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Order</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Issue</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Status</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Reported</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {disputes.map((dispute) => (
                    <tr key={dispute.id} className="border-t border-gray-100 hover:bg-gray-50/50">
                      <td className="px-6 py-4 font-medium text-gray-900">{dispute.rider}</td>
                      <td className="px-6 py-4">{dispute.order}</td>
                      <td className="px-6 py-4">{dispute.issue}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1.5 rounded-full text-sm font-medium ${getDisputeStatusBadge(dispute.status)}`}>
                          {dispute.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-600">{dispute.reported}</td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleAction('view_dispute', dispute)}
                            className="p-2.5 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors"
                          >
                            <FaEye />
                          </button>
                          <button className="p-2.5 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-colors">
                            <FaCheckCircle />
                          </button>
                          <button className="p-2.5 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors">
                            <FaGavel />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Rules Tab */}
          {activeTab === 'rules' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {rules.map((rule) => (
                <div key={rule.id} className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-lg ${rule.active ? 'bg-green-50' : 'bg-gray-100'}`}>
                        <rule.icon className={`${rule.active ? 'text-green-600' : 'text-gray-400'} text-lg`} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">{rule.name}</h3>
                        <p className="text-sm text-gray-600">{rule.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`text-xs px-2 py-1 rounded-full ${rule.active ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                        {rule.active ? 'Active' : 'Inactive'}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleAction('toggle_rule', rule)}
                      className={`px-4 py-2 rounded-lg text-sm ${rule.active ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'} text-white transition-colors`}
                    >
                      {rule.active ? 'Deactivate' : 'Activate'}
                    </button>
                    <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm transition-colors">
                      Configure
                    </button>
                    <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm transition-colors">
                      Edit
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Scrollbar Styling */}
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
    </div>
  )
}

export default DeliveryNetwork