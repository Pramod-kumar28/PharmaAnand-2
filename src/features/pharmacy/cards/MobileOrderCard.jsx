import React from 'react';
import { FaEye, FaCheck, FaTimes, FaPrint, FaShippingFast, FaExclamationTriangle, FaBox } from 'react-icons/fa';

const MobileOrderCard = ({ order, onViewDetails, onAccept, onReject, onReady, onDispatch, onPrint }) => {
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
      case 'pending': return <FaExclamationTriangle className="text-xs" />;
      case 'processing': return <FaBox className="text-xs" />;
      case 'ready': return <FaCheck className="text-xs" />;
      case 'dispatched': return <FaShippingFast className="text-xs" />;
      case 'delivered': return <FaCheck className="text-xs" />;
      default: return <FaBox className="text-xs" />;
    }
  };

  const getPaymentColor = (payment) => {
    if (payment.status === 'Paid') return 'bg-green-100 text-green-800';
    if (payment.status === 'Pending') return 'bg-yellow-100 text-yellow-800';
    return 'bg-red-100 text-red-800';
  };

  return (
    <div className="bg-white p-4 rounded-xl border border-gray-200 mb-3">
      <div className="flex justify-between items-start mb-3">
        <div>
          <div className="font-bold text-gray-800 text-sm">{order.id}</div>
          <div className="text-xs text-gray-500">{order.time}</div>
        </div>
        <div className="flex items-center gap-2">
          <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(order.status)} flex items-center gap-1`}>
            {getStatusIcon(order.status)}
            {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
          </span>
          {order.priority === 'High' && (
            <span className="px-2 py-1 text-xs bg-red-100 text-red-800 rounded-full">
              Urgent
            </span>
          )}
        </div>
      </div>
      
      <div className="mb-3">
        <div className="font-medium text-sm text-gray-800">{order.customer}</div>
        <div className="text-xs text-gray-500">{order.phone}</div>
      </div>
      
      <div className="grid grid-cols-2 gap-3 mb-3">
        <div>
          <div className="text-xs text-gray-500">Items</div>
          <div className="font-medium text-sm">{order.totalItems} items</div>
        </div>
        <div>
          <div className="text-xs text-gray-500">Amount</div>
          <div className="font-bold text-sm">{order.amount}</div>
        </div>
        <div>
          <div className="text-xs text-gray-500">Payment</div>
          <div className={`text-xs px-2 py-1 rounded ${getPaymentColor(order.payment)}`}>
            {order.payment.method}
          </div>
        </div>
        <div>
          <div className="text-xs text-gray-500">Delivery</div>
          <div className="font-medium text-sm text-xs">{order.delivery.type}</div>
        </div>
      </div>
      
      <div className="flex justify-between items-center pt-3 border-t border-gray-100">
        <div className="flex gap-2">
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
          
          {order.status === 'ready' && (
            <button 
              className="p-2 text-purple-600 hover:bg-purple-50 rounded-lg"
              title="Dispatch"
              onClick={() => onDispatch(order.id)}
            >
              <FaShippingFast className="text-sm" />
            </button>
          )}
          
          <button 
            className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg"
            title="Print Invoice"
            onClick={() => onPrint(order)}
          >
            <FaPrint className="text-sm" />
          </button>
        </div>
        
        {order.prescription && (
          <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">
            Rx Required
          </span>
        )}
      </div>
    </div>
  );
};

export default React.memo(MobileOrderCard);