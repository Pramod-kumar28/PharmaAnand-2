import React from 'react';
import { FaTruck, FaMapMarkerAlt, FaPhoneAlt, FaEye, FaUser, FaClock } from 'react-icons/fa';

const MobileDeliveryCard = React.memo(({ delivery, onTrack, onAssign, onUpdateStatus, onCall }) => {
  const getStatusColor = (status) => {
    switch(status) {
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Assigned': return 'bg-blue-100 text-blue-800';
      case 'Picked Up': return 'bg-purple-100 text-purple-800';
      case 'In Transit': return 'bg-indigo-100 text-indigo-800';
      case 'Delivered': return 'bg-green-100 text-green-800';
      case 'Cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white p-4 rounded-xl border border-gray-200 mb-3">
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center">
          <div className="p-2 bg-blue-100 rounded-lg mr-3">
            <FaTruck className="text-blue-600 text-sm" />
          </div>
          <div>
            <div className="font-bold text-gray-800 text-sm">{delivery.id}</div>
            <div className="text-xs text-gray-500">Order: {delivery.orderId}</div>
          </div>
        </div>
        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(delivery.status)}`}>
          {delivery.status}
        </span>
      </div>
      
      <div className="mb-3">
        <div className="text-sm font-medium mb-1">{delivery.customer}</div>
        <div className="text-xs text-gray-600 flex items-start">
          <FaMapMarkerAlt className="mr-1 mt-0.5 flex-shrink-0" />
          <span className="line-clamp-1">{delivery.address}</span>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-3 mb-3">
        <div>
          <div className="text-xs text-gray-500">Amount</div>
          <div className="font-bold text-sm">{delivery.amount}</div>
        </div>
        <div>
          <div className="text-xs text-gray-500">Distance</div>
          <div className="font-medium text-sm">{delivery.distance}</div>
        </div>
        <div>
          <div className="text-xs text-gray-500">Partner</div>
          <div className="font-medium text-sm truncate">{delivery.deliveryPartner}</div>
        </div>
        <div>
          <div className="text-xs text-gray-500">Time</div>
          <div className="font-medium text-sm flex items-center">
            <FaClock className="mr-1 text-xs" /> {delivery.estimatedTime}
          </div>
        </div>
      </div>
      
      <div className="flex justify-between items-center pt-3 border-t border-gray-100">
        <div className="flex gap-2">
          <button 
            onClick={() => onTrack(delivery)}
            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
            title="Track Delivery"
          >
            <FaEye className="text-sm" />
          </button>
          {delivery.partnerContact && (
            <button 
              onClick={() => onCall(delivery.partnerContact)}
              className="p-2 text-green-600 hover:bg-green-50 rounded-lg" 
              title="Call Partner"
            >
              <FaPhoneAlt className="text-sm" />
            </button>
          )}
          {delivery.status === 'Pending' && (
            <button 
              onClick={() => onAssign(delivery)}
              className="p-2 text-purple-600 hover:bg-purple-50 rounded-lg" 
              title="Assign Partner"
            >
              <FaUser className="text-sm" />
            </button>
          )}
        </div>
        <div className="text-xs text-gray-500">
          Ordered: {delivery.orderTime}
        </div>
      </div>
    </div>
  );
});

export default MobileDeliveryCard;