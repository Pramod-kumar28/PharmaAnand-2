import React from 'react';
import { FaUser, FaPhone, FaMotorcycle, FaMapMarkerAlt, FaStar, FaEdit, FaTrash, FaPhoneAlt, FaCalendar, FaRupeeSign } from 'react-icons/fa';

const PartnerCard = React.memo(({ partner, onEdit, onDelete, onCall }) => {
  const getStatusColor = (status) => {
    switch(status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'On Leave': return 'bg-yellow-100 text-yellow-800';
      case 'Inactive': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 hover:border-blue-300 hover:shadow-sm transition-all">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center">
          <div className="p-2 bg-blue-100 rounded-lg mr-3">
            <FaUser className="text-blue-600" />
          </div>
          <div>
            <div className="font-bold text-gray-800 text-sm md:text-base">{partner.name}</div>
            <div className="text-xs md:text-sm text-gray-600">{partner.id}</div>
          </div>
        </div>
        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(partner.status)}`}>
          {partner.status}
        </span>
      </div>
      
      <div className="space-y-2 mb-4">
        <div className="flex items-center text-sm text-gray-600">
          <FaPhone className="mr-2 text-gray-400 text-xs md:text-sm" />
          <span className="text-xs md:text-sm">{partner.phone}</span>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <FaMotorcycle className="mr-2 text-gray-400 text-xs md:text-sm" />
          <span className="text-xs md:text-sm">{partner.vehicleType} • {partner.vehicleNumber}</span>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <FaMapMarkerAlt className="mr-2 text-gray-400 text-xs md:text-sm" />
          <span className="text-xs md:text-sm truncate">{partner.location}</span>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-2 md:gap-3 mb-4">
        <div className="text-center bg-white p-2 rounded-lg border">
          <div className="flex items-center justify-center">
            <FaStar className="text-yellow-400 mr-1 text-xs md:text-sm" />
            <span className="font-bold text-sm md:text-lg text-blue-600">{partner.rating}</span>
          </div>
          <div className="text-xs text-gray-600 mt-1">Rating</div>
        </div>
        <div className="text-center bg-white p-2 rounded-lg border">
          <div className="font-bold text-sm md:text-lg text-green-600">{partner.todayDeliveries}</div>
          <div className="text-xs text-gray-600">Today</div>
          <div className="text-xs text-gray-500 mt-1">Total: {partner.totalDeliveries}</div>
        </div>
      </div>
      
      <div className="mb-4 p-3 bg-white rounded-lg border">
        <div className="flex justify-between items-center">
          <div>
            <div className="text-xs text-gray-500">Earnings</div>
            <div className="font-bold text-green-600 text-sm md:text-base">{partner.earnings}</div>
          </div>
          <div>
            <div className="text-xs text-gray-500">Joined</div>
            <div className="text-xs md:text-sm flex items-center">
              <FaCalendar className="mr-1 text-xs" />
              {partner.joinDate}
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex gap-2">
        <button 
          onClick={() => onCall(partner.phone)}
          className="flex-1 px-2 md:px-3 py-2 bg-blue-600 text-white text-xs rounded-lg hover:bg-blue-700 flex items-center justify-center gap-1 transition-colors"
        >
          <FaPhoneAlt className="text-xs" /> Call
        </button>
        <button 
          onClick={() => onEdit(partner)}
          className="flex-1 px-2 md:px-3 py-2 border border-blue-600 text-blue-600 text-xs rounded-lg hover:bg-blue-50 flex items-center justify-center gap-1 transition-colors"
        >
          <FaEdit className="text-xs" /> Edit
        </button>
        <button 
          onClick={() => onDelete(partner.id)}
          className="flex-1 px-2 md:px-3 py-2 border border-red-600 text-red-600 text-xs rounded-lg hover:bg-red-50 flex items-center justify-center gap-1 transition-colors"
        >
          <FaTrash className="text-xs" /> Remove
        </button>
      </div>
    </div>
  );
});

export default PartnerCard;