// components/delivery/AddDeliveryPartnerModal.jsx
import React, { useState } from 'react';
import { 
  FaUser, 
  FaPhone, 
  FaIdCard, 
  FaMotorcycle, 
  FaMapMarkerAlt, 
  FaShieldAlt,
  FaPlus,
  FaFileAlt,
  FaEnvelope,
  FaHome,
  FaCalendar
} from 'react-icons/fa';
import Modal from '../../../shared/components/modals/Modal';

const AddDeliveryPartnerModal = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    city: '',
    zone: '',
    address: '',
    vehicleType: 'Bike',
    licenseNumber: '',
    aadhaarNumber: '',
    bankName: '',
    accountNumber: '',
    ifscCode: '',
    experience: '0-1',
    emergencyContact: '',
    documents: {
      license: null,
      aadhaar: null,
      bankProof: null,
      vehicleRC: null
    }
  });

  const cities = ['Kadapa', 'Tirupati', 'Kurnool', 'Nellore', 'Chittoor', 'Anantapur'];
  const zones = ['North Zone', 'South Zone', 'East Zone', 'West Zone', 'Central Zone'];
  const vehicleTypes = ['Bike', 'Scooter', 'E-Bike', 'Bicycle'];
  const experienceLevels = ['0-1 years', '1-3 years', '3-5 years', '5+ years'];
  const banks = ['HDFC Bank', 'ICICI Bank', 'SBI', 'Axis Bank', 'Kotak Bank', 'Other'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ 
      ...prev, 
      [name]: value 
    }));
  };

  const handleFileChange = (e, field) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        documents: {
          ...prev.documents,
          [field]: file
        }
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
    // Reset form
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      city: '',
      zone: '',
      address: '',
      vehicleType: 'Bike',
      licenseNumber: '',
      aadhaarNumber: '',
      bankName: '',
      accountNumber: '',
      ifscCode: '',
      experience: '0-1',
      emergencyContact: '',
      documents: {
        license: null,
        aadhaar: null,
        bankProof: null,
        vehicleRC: null
      }
    });
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Add New Delivery Partner"
      size="xl"
      contentClassName="p-6"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information */}
        <div className="bg-blue-50 p-4 rounded-xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-blue-100 p-2 rounded-lg">
              <FaUser className="text-blue-600 text-lg" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Personal Information</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter full name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
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
              <label className="block text-sm font-medium text-gray-700 mb-2">
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

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Emergency Contact *
              </label>
              <input
                type="tel"
                name="emergencyContact"
                value={formData.emergencyContact}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Emergency contact number"
                required
              />
            </div>
          </div>
        </div>

        {/* Location Details */}
        <div className="bg-green-50 p-4 rounded-xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-green-100 p-2 rounded-lg">
              <FaMapMarkerAlt className="text-green-600 text-lg" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Location Details</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
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
              <label className="block text-sm font-medium text-gray-700 mb-2">
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

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Address *
              </label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                rows="3"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter complete residential address"
                required
              />
            </div>
          </div>
        </div>

        {/* Vehicle & Experience */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-purple-50 p-4 rounded-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-purple-100 p-2 rounded-lg">
                <FaMotorcycle className="text-purple-600 text-lg" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Vehicle Details</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Vehicle Type *
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {vehicleTypes.map(type => (
                    <label key={type} className="flex items-center gap-2 p-3 border border-gray-300 rounded-lg hover:bg-white cursor-pointer">
                      <input
                        type="radio"
                        name="vehicleType"
                        value={type}
                        checked={formData.vehicleType === type}
                        onChange={handleInputChange}
                        className="text-blue-600"
                      />
                      <span className="text-sm">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Driving License Number *
                </label>
                <input
                  type="text"
                  name="licenseNumber"
                  value={formData.licenseNumber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="DL number"
                  required
                />
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-yellow-100 p-2 rounded-lg">
                <FaCalendar className="text-yellow-600 text-lg" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Experience & Verification</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Delivery Experience *
                </label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  {experienceLevels.map(exp => (
                    <option key={exp} value={exp}>{exp}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Aadhaar Number *
                </label>
                <input
                  type="text"
                  name="aadhaarNumber"
                  value={formData.aadhaarNumber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="12-digit Aadhaar number"
                  pattern="[0-9]{12}"
                  required
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bank Details */}
        <div className="bg-teal-50 p-4 rounded-xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-teal-100 p-2 rounded-lg">
              <FaShieldAlt className="text-teal-600 text-lg" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Bank Details</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Bank Name *
              </label>
              <select
                name="bankName"
                value={formData.bankName}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              >
                <option value="">Select Bank</option>
                {banks.map(bank => (
                  <option key={bank} value={bank}>{bank}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Account Number *
              </label>
              <input
                type="text"
                name="accountNumber"
                value={formData.accountNumber}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Account number"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                IFSC Code *
              </label>
              <input
                type="text"
                name="ifscCode"
                value={formData.ifscCode}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="IFSC code"
                required
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Bank Proof (Passbook/Cancelled Cheque) *
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
                <input
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={(e) => handleFileChange(e, 'bankProof')}
                  className="hidden"
                  id="bank-proof-upload"
                  required
                />
                <label htmlFor="bank-proof-upload" className="cursor-pointer flex flex-col items-center">
                  <div className="text-gray-400 mb-3">
                    <FaFileAlt className="mx-auto text-3xl" />
                  </div>
                  <span className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                    {formData.documents.bankProof ? 'Change File' : 'Click to upload'}
                  </span>
                  <p className="text-xs text-gray-500 mt-1">PDF, JPG, PNG up to 5MB</p>
                </label>
                {formData.documents.bankProof && (
                  <p className="text-sm text-green-600 mt-3 flex items-center justify-center gap-2">
                    <span className="text-green-500">✓</span> 
                    {formData.documents.bankProof.name}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Document Upload */}
        <div className="bg-red-50 p-4 rounded-xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-red-100 p-2 rounded-lg">
              <FaFileAlt className="text-red-600 text-lg" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Required Documents</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Driving License *
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
                <input
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={(e) => handleFileChange(e, 'license')}
                  className="hidden"
                  id="license-upload"
                  required
                />
                <label htmlFor="license-upload" className="cursor-pointer flex flex-col items-center">
                  <div className="text-gray-400 mb-3">
                    <FaFileAlt className="mx-auto text-3xl" />
                  </div>
                  <span className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                    {formData.documents.license ? 'Change File' : 'Click to upload'}
                  </span>
                  <p className="text-xs text-gray-500 mt-1">Front & Back</p>
                </label>
                {formData.documents.license && (
                  <p className="text-sm text-green-600 mt-3 flex items-center justify-center gap-2">
                    <span className="text-green-500">✓</span> 
                    {formData.documents.license.name}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Aadhaar Card *
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
                <input
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={(e) => handleFileChange(e, 'aadhaar')}
                  className="hidden"
                  id="aadhaar-upload"
                  required
                />
                <label htmlFor="aadhaar-upload" className="cursor-pointer flex flex-col items-center">
                  <div className="text-gray-400 mb-3">
                    <FaIdCard className="mx-auto text-3xl" />
                  </div>
                  <span className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                    {formData.documents.aadhaar ? 'Change File' : 'Click to upload'}
                  </span>
                  <p className="text-xs text-gray-500 mt-1">Front & Back</p>
                </label>
                {formData.documents.aadhaar && (
                  <p className="text-sm text-green-600 mt-3 flex items-center justify-center gap-2">
                    <span className="text-green-500">✓</span> 
                    {formData.documents.aadhaar.name}
                  </p>
                )}
              </div>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Vehicle RC Book *
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
                <input
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={(e) => handleFileChange(e, 'vehicleRC')}
                  className="hidden"
                  id="rc-upload"
                  required
                />
                <label htmlFor="rc-upload" className="cursor-pointer flex flex-col items-center">
                  <div className="text-gray-400 mb-3">
                    <FaMotorcycle className="mx-auto text-3xl" />
                  </div>
                  <span className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                    {formData.documents.vehicleRC ? 'Change File' : 'Click to upload'}
                  </span>
                  <p className="text-xs text-gray-500 mt-1">First & last page</p>
                </label>
                {formData.documents.vehicleRC && (
                  <p className="text-sm text-green-600 mt-3 flex items-center justify-center gap-2">
                    <span className="text-green-500">✓</span> 
                    {formData.documents.vehicleRC.name}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Terms & Conditions */}
        <div className="bg-gray-50 p-4 rounded-xl">
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="terms"
              required
              className="mt-1"
            />
            <label htmlFor="terms" className="text-sm text-gray-700">
              I confirm that all information provided is accurate and I agree to abide by the company's 
              delivery partner terms and conditions, including safety protocols, delivery standards, 
              and code of conduct.
            </label>
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
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 flex items-center gap-2"
          >
            <FaPlus />
            Add Delivery Partner
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AddDeliveryPartnerModal;