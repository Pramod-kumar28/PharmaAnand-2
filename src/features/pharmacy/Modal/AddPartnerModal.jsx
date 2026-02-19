import React, { useState, useEffect } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';
import Modal from '../../../shared/components/modals/Modal';

const AddPartnerModal = React.memo(({ 
  isOpen,
  onClose, 
  editingPartner, 
  onSubmit 
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    vehicleType: 'Bike',
    vehicleNumber: '',
    address: '',
    email: '',
    status: 'Active'
  });

  useEffect(() => {
    if (editingPartner) {
      setFormData({
        name: editingPartner.name || '',
        phone: editingPartner.phone || '',
        vehicleType: editingPartner.vehicleType || 'Bike',
        vehicleNumber: editingPartner.vehicleNumber || '',
        address: editingPartner.address || '',
        email: editingPartner.email || '',
        status: editingPartner.status || 'Active'
      });
    } else {
      setFormData({
        name: '',
        phone: '',
        vehicleType: 'Bike',
        vehicleNumber: '',
        address: '',
        email: '',
        status: 'Active'
      });
    }
  }, [editingPartner]);

  const handleSubmit = () => {
    if (!formData.name || !formData.phone || !formData.vehicleNumber) {
      alert('Please fill in all required fields');
      return;
    }
    onSubmit(formData);
  };

  const handleClose = () => {
    setFormData({
      name: '',
      phone: '',
      vehicleType: 'Bike',
      vehicleNumber: '',
      address: '',
      email: '',
      status: 'Active'
    });
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title={editingPartner ? 'Edit Delivery Partner' : 'Add Delivery Partner'}
      size="md"
      position="top"
      contentClassName="flex flex-col max-h-[calc(100vh-10.5rem)]"
    >
      <div className="flex-1 overflow-y-auto p-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({...prev, name: e.target.value}))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter full name"
            />
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData(prev => ({...prev, phone: e.target.value}))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="+91 9876543210"
              />
            </div>
            
            {editingPartner && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData(prev => ({...prev, status: e.target.value}))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="Active">Active</option>
                  <option value="On Leave">On Leave</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
            )}
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Vehicle Type</label>
              <select
                value={formData.vehicleType}
                onChange={(e) => setFormData(prev => ({...prev, vehicleType: e.target.value}))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="Bike">Bike</option>
                <option value="Scooter">Scooter</option>
                <option value="Car">Car</option>
                <option value="Auto">Auto</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Vehicle Number *</label>
              <input
                type="text"
                value={formData.vehicleNumber}
                onChange={(e) => setFormData(prev => ({...prev, vehicleNumber: e.target.value}))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="KA-01-AB-1234"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
            <input
              type="text"
              value={formData.address}
              onChange={(e) => setFormData(prev => ({...prev, address: e.target.value}))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter address"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email (Optional)</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="partner@example.com"
            />
          </div>
        </div>
      </div>
      
      <div className="p-6 border-t border-gray-200 bg-white sticky bottom-0">
        <div className="flex justify-end gap-3">
          <button 
            onClick={handleClose}
            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            Cancel
          </button>
          <button 
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2"
          >
            <FaCheck /> {editingPartner ? 'Update Partner' : 'Add Partner'}
          </button>
        </div>
      </div>
    </Modal>
  );
});

export default AddPartnerModal;