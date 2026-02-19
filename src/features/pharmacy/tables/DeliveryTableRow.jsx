import React from 'react';
import { FaTruck, FaPhoneAlt, FaEye, FaUser, FaCheck, FaTimes, FaClock } from 'react-icons/fa';

const DeliveryTableRow = React.memo(({ delivery, onTrack, onAssign, onUpdateStatus, onCall }) => {
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

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <>
      <td className="px-4 py-3">
        <div className="flex items-center">
          <div className="p-2 bg-blue-100 rounded-lg mr-3">
            <FaTruck className="text-blue-600 text-sm" />
          </div>
          <div>
            <div className="font-medium text-sm text-gray-900">{delivery.id}</div>
            <div className="text-xs text-gray-500">Order: {delivery.orderId}</div>
            <div className="mt-1">
              <span className={`px-2 py-0.5 text-xs rounded-full ${getPriorityColor(delivery.priority)}`}>
                {delivery.priority}
              </span>
            </div>
          </div>
        </div>
      </td>
      <td className="px-4 py-3">
        <div className="font-medium text-sm">{delivery.customer}</div>
        <div className="text-xs text-gray-600 truncate max-w-[200px]">{delivery.address}</div>
        <div className="text-xs text-gray-500 flex items-center mt-1">
          <FaClock className="mr-1 text-xs" /> {delivery.estimatedTime}
        </div>
      </td>
      <td className="px-4 py-3">
        <div className="font-bold text-sm">{delivery.amount}</div>
        <div className="text-xs text-gray-600">Fee: {delivery.deliveryFee}</div>
      </td>
      <td className="px-4 py-3">
        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(delivery.status)}`}>
          {delivery.status}
        </span>
        <div className="text-xs text-gray-600 mt-1">{delivery.orderTime}</div>
      </td>
      <td className="px-4 py-3">
        <div className="font-medium text-sm">{delivery.deliveryPartner}</div>
        {delivery.partnerContact && (
          <div className="text-xs text-gray-600">{delivery.partnerContact}</div>
        )}
        {!delivery.partnerContact && delivery.status === 'Pending' && (
          <div className="text-xs text-red-600 mt-1">Not assigned</div>
        )}
      </td>
      <td className="px-4 py-3">
        <div className="flex gap-2 justify-center">
          <button 
            onClick={() => onTrack(delivery)}
            className="p-1 text-blue-600 hover:bg-blue-50 rounded" 
            title="Track Delivery"
          >
            <FaEye className="text-sm" />
          </button>
          {delivery.partnerContact && (
            <button 
              onClick={() => onCall(delivery.partnerContact)}
              className="p-1 text-green-600 hover:bg-green-50 rounded" 
              title="Call Partner"
            >
              <FaPhoneAlt className="text-sm" />
            </button>
          )}
          {delivery.status === 'Pending' && (
            <button 
              onClick={() => onAssign(delivery)}
              className="p-1 text-purple-600 hover:bg-purple-50 rounded" 
              title="Assign Partner"
            >
              <FaUser className="text-sm" />
            </button>
          )}
          {delivery.status !== 'Delivered' && delivery.status !== 'Cancelled' && (
            <button 
              onClick={() => onUpdateStatus(delivery.id, 'Delivered')}
              className="p-1 text-green-600 hover:bg-green-50 rounded" 
              title="Mark Delivered"
            >
              <FaCheck className="text-sm" />
            </button>
          )}
          {delivery.status !== 'Cancelled' && (
            <button 
              onClick={() => onUpdateStatus(delivery.id, 'Cancelled')}
              className="p-1 text-red-600 hover:bg-red-50 rounded" 
              title="Cancel Delivery"
            >
              <FaTimes className="text-sm" />
            </button>
          )}
        </div>
      </td>
    </>
  );
});

export default DeliveryTableRow;