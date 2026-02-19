import React from 'react';
import { FaEye, FaCheck, FaTimes, FaPrint, FaShippingFast } from 'react-icons/fa';

const OrderTableRow = ({ 
  order, 
  onViewDetails, 
  onAccept, 
  onReject, 
  onReady, 
  onDispatch,
  onPrint 
}) => {
  const getStatusColor = (status) => {
    switch(status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'processing': return 'bg-blue-100 text-blue-800';
      case 'ready': return 'bg-purple-100 text-purple-800';
      case 'dispatched': return 'bg-indigo-100 text-indigo-800';
      case 'delivered': return 'bg-green-100 text-green-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'pending': return '⚠️';
      case 'processing': return '📦';
      case 'ready': return '✅';
      case 'dispatched': return '🚚';
      case 'delivered': return '✅';
      default: return '📦';
    }
  };

  const getPaymentColor = (payment) => {
    if (payment.status === 'Paid') return 'bg-green-100 text-green-800';
    if (payment.status === 'Pending') return 'bg-yellow-100 text-yellow-800';
    return 'bg-red-100 text-red-800';
  };

  return (
    <>
      <td className="px-2 py-2">
        <div>
          <div className="font-medium text-sm text-gray-900">{order.id}</div>
          <div className="text-xs text-gray-500">{order.time}</div>
          {order.priority === 'High' && (
            <span className="mt-1 inline-block px-2 py-0.5 text-xs bg-red-100 text-red-800 rounded">
              Urgent
            </span>
          )}
        </div>
      </td>
      <td className="px-2 py-2">
        <div>
          <div className="font-medium text-sm">{order.customer}</div>
          <div className="text-xs text-gray-500">{order.phone}</div>
          {order.prescription && (
            <span className="mt-1 inline-block px-2 py-0.5 text-xs bg-blue-100 text-blue-800 rounded">
              Rx Required
            </span>
          )}
        </div>
      </td>
      <td className="px-2 py-2">
        <div className="font-medium text-sm">{order.totalItems} items</div>
        <div className="text-xs text-gray-600 max-w-[150px] truncate">
          {order.items.map(item => item.name).join(', ')}
        </div>
      </td>
      <td className="px-2 py-2">
        <div className="font-bold text-sm">{order.amount}</div>
      </td>
      <td className="px-2 py-2">
        <div className="flex justify-center">
          <span className={`px-2 py-1 text-xs font-medium rounded-full flex items-center gap-1 w-fit ${getStatusColor(order.status)}`}>
            <span className="text-xs">{getStatusIcon(order.status)}</span>
            {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
          </span>
        </div>
      </td>
      <td className="px-2 py-2">
        <div className={`px-2 py-1 text-xs rounded ${getPaymentColor(order.payment)}`}>
          {order.payment.method}
        </div>
        <div className="text-xs text-gray-500 mt-1">{order.payment.status}</div>
      </td>
      <td className="px-2 py-2">
        <div className="text-sm">{order.delivery.type}</div>
        {order.delivery.address !== 'Store Pickup' && (
          <div className="text-xs text-gray-600 max-w-[120px] truncate">
            {order.delivery.address}
          </div>
        )}
      </td>
      <td className="px-2 py-2">
        <div className="flex gap-1 justify-center">
          <button 
            onClick={() => onViewDetails(order)}
            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
            title="View Details"
          >
            <FaEye className="text-sm" />
          </button>
          
          {order.status === 'pending' && (
            <>
              <button 
                onClick={() => onAccept(order.id)}
                className="p-2 text-green-600 hover:bg-green-50 rounded-lg"
                title="Accept Order"
              >
                <FaCheck className="text-sm" />
              </button>
              <button 
                onClick={() => onReject(order.id)}
                className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                title="Reject Order"
              >
                <FaTimes className="text-sm" />
              </button>
            </>
          )}
          
          {order.status === 'processing' && (
            <button 
              onClick={() => onReady(order.id)}
              className="p-2 text-purple-600 hover:bg-purple-50 rounded-lg"
              title="Mark as Ready"
            >
              <FaCheck className="text-sm" />
            </button>
          )}
          
          {order.status === 'ready' && (
            <button 
              onClick={() => onDispatch(order.id)}
              className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg"
              title="Dispatch"
            >
              <FaShippingFast className="text-sm" />
            </button>
          )}
          
          <button 
            onClick={() => onPrint(order)}
            className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg"
            title="Print Invoice"
          >
            <FaPrint className="text-sm" />
          </button>
        </div>
      </td>
    </>
  );
};

export default React.memo(OrderTableRow);