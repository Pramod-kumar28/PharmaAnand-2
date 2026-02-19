import React from 'react';
import { FaUser, FaCalendar, FaRupeeSign, FaEye, FaCheck, FaDownload } from 'react-icons/fa';

const MobilePaymentCard = React.memo(({ payment, onView, onMarkPaid, onPrintReceipt }) => {
  const getStatusColor = (status) => {
    switch(status) {
      case 'Paid': return 'bg-green-100 text-green-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Failed': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-3">
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center">
          <div className="p-2 bg-blue-100 rounded-lg mr-3">
            <FaUser className="text-blue-600 text-sm" />
          </div>
          <div>
            <div className="font-bold text-gray-800 text-sm">{payment.partnerName}</div>
            <div className="text-xs text-gray-500">{payment.id} • {payment.partnerId}</div>
          </div>
        </div>
        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(payment.status)}`}>
          {payment.status}
        </span>
      </div>
      
      <div className="grid grid-cols-2 gap-3 mb-3">
        <div>
          <div className="text-xs text-gray-500">Period</div>
          <div className="font-medium text-sm flex items-center">
            <FaCalendar className="mr-1 text-xs" /> {payment.period}
          </div>
        </div>
        <div>
          <div className="text-xs text-gray-500">Deliveries</div>
          <div className="font-medium text-sm">{payment.totalDeliveries}</div>
        </div>
        <div>
          <div className="text-xs text-gray-500">Amount</div>
          <div className="font-bold text-sm text-green-600 flex items-center">
            <FaRupeeSign className="text-xs" /> {payment.netAmount.replace('₹', '')}
          </div>
        </div>
        <div>
          <div className="text-xs text-gray-500">Method</div>
          <div className="font-medium text-sm">{payment.paymentMethod}</div>
        </div>
      </div>
      
      <div className="pt-3 border-t border-gray-200">
        <div className="flex gap-2">
          <button 
            onClick={() => onView(payment)}
            className="flex-1 px-3 py-2 text-xs bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center justify-center gap-1"
          >
            <FaEye /> View
          </button>
          {payment.status === 'Pending' && (
            <button 
              onClick={() => onMarkPaid(payment.id)}
              className="flex-1 px-3 py-2 text-xs bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              <FaCheck /> Mark Paid
            </button>
          )}
          <button 
            onClick={() => onPrintReceipt(payment)}
            className="flex-1 px-3 py-2 text-xs border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center justify-center gap-1"
          >
            <FaDownload /> Receipt
          </button>
        </div>
      </div>
    </div>
  );
});

export default MobilePaymentCard;