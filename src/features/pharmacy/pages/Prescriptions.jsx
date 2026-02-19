// src/pages/pharmacy/Prescriptions.jsx
import React, { useState } from 'react';
import { FaSearch, FaFilter, FaEye, FaCheck, FaTimes, FaDownload, FaClock } from 'react-icons/fa';

const Prescriptions = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('pending');
  
  const prescriptions = [
    { 
      id: 'RX1001', 
      patient: 'Amit Sharma', 
      doctor: 'Dr. Ravi Kumar', 
      date: '2024-01-15',
      status: 'Pending',
      items: ['Amoxicillin 500mg', 'Paracetamol'],
      image: 'prescription1.jpg',
      submitted: '2 hours ago'
    },
    { 
      id: 'RX1002', 
      patient: 'Priya Patel', 
      doctor: 'Dr. Sunita Rao', 
      date: '2024-01-14',
      status: 'Approved',
      items: ['Cetirizine', 'Vitamin C'],
      image: 'prescription2.jpg',
      submitted: '1 day ago'
    },
    { 
      id: 'RX1003', 
      patient: 'Rajesh Nair', 
      doctor: 'Dr. Mohan Das', 
      date: '2024-01-14',
      status: 'Rejected',
      items: ['Atorvastatin'],
      image: 'prescription3.jpg',
      submitted: '1 day ago',
      rejectionReason: 'Expired prescription'
    },
    { 
      id: 'RX1004', 
      patient: 'Neha Gupta', 
      doctor: 'Dr. Anil Kapoor', 
      date: '2024-01-13',
      status: 'Pending',
      items: ['Metformin', 'Omeprazole', 'Multivitamin'],
      image: 'prescription4.jpg',
      submitted: '2 days ago'
    },
    { 
      id: 'RX1005', 
      patient: 'Vikram Singh', 
      doctor: 'Dr. Priya Reddy', 
      date: '2024-01-12',
      status: 'Approved',
      items: ['Azithromycin', 'Cough Syrup'],
      image: 'prescription5.jpg',
      submitted: '3 days ago'
    }
  ];

  const filteredPrescriptions = prescriptions.filter(prescription => {
    const matchesSearch = prescription.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         prescription.patient.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         prescription.doctor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'all' || prescription.status === filter;
    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status) => {
    switch(status) {
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Approved': return 'bg-green-100 text-green-800';
      case 'Rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleApprove = (prescriptionId) => {
    console.log(`Approving prescription ${prescriptionId}`);
    // API call to approve prescription
  };

  const handleReject = (prescriptionId) => {
    const reason = prompt('Enter rejection reason:');
    if (reason) {
      console.log(`Rejecting prescription ${prescriptionId}: ${reason}`);
      // API call to reject prescription
    }
  };

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Prescription Management</h1>
        <p className="text-gray-600">Review and verify customer prescriptions</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Pending Review</p>
              <h3 className="text-3xl font-bold text-yellow-600">
                {prescriptions.filter(p => p.status === 'Pending').length}
              </h3>
            </div>
            <div className="p-3 bg-yellow-100 rounded-lg">
              <FaClock className="text-2xl text-yellow-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Approved Today</p>
              <h3 className="text-3xl font-bold text-green-600">
                {prescriptions.filter(p => p.status === 'Approved' && p.submitted.includes('hours')).length}
              </h3>
            </div>
            <div className="p-3 bg-green-100 rounded-lg">
              <FaCheck className="text-2xl text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Rejected Today</p>
              <h3 className="text-3xl font-bold text-red-600">
                {prescriptions.filter(p => p.status === 'Rejected' && p.submitted.includes('hours')).length}
              </h3>
            </div>
            <div className="p-3 bg-red-100 rounded-lg">
              <FaTimes className="text-2xl text-red-600" />
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
              placeholder="Search by Patient, Doctor, or Prescription ID..."
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
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>
        </div>
      </div>

      {/* Prescriptions List */}
      <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prescription ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Doctor</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Medicines</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Submitted</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredPrescriptions.map((prescription) => (
                <tr key={prescription.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap font-medium">{prescription.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium">{prescription.patient}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{prescription.doctor}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{prescription.date}</td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-1">
                      {prescription.items.map((item, index) => (
                        <span key={index} className="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded">
                          {item}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(prescription.status)}`}>
                      {prescription.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-500">{prescription.submitted}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex gap-2">
                      <button 
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                        title="View Prescription"
                      >
                        <FaEye />
                      </button>
                      
                      {prescription.status === 'Pending' && (
                        <>
                          <button 
                            onClick={() => handleApprove(prescription.id)}
                            className="p-2 text-green-600 hover:bg-green-50 rounded-lg"
                            title="Approve"
                          >
                            <FaCheck />
                          </button>
                          <button 
                            onClick={() => handleReject(prescription.id)}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                            title="Reject"
                          >
                            <FaTimes />
                          </button>
                        </>
                      )}
                      
                      <button 
                        className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg"
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

        {filteredPrescriptions.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-2">No prescriptions found</div>
            <div className="text-gray-500 text-sm">Try adjusting your search or filter</div>
          </div>
        )}
      </div>

      {/* Prescription Preview Modal (would be implemented as separate component) */}
      <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-4">
        <h3 className="font-medium text-blue-800 mb-2">Prescription Verification Guidelines</h3>
        <ul className="text-blue-700 text-sm space-y-1">
          <li>• Check doctor's signature and stamp</li>
          <li>• Verify prescription validity date (usually 6 months)</li>
          <li>• Ensure medicine names and dosages are clearly mentioned</li>
          <li>• Check for any contraindications with other medicines</li>
          <li>• Verify patient details match the order</li>
        </ul>
      </div>
    </div>
  );
};

export default Prescriptions;