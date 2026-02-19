import React from 'react';
import { FaEye, FaDownload, FaCheck, FaRupeeSign, FaCalendar, FaUser } from 'react-icons/fa';

const PaymentTableRow = React.memo(({ payment, onView, onMarkPaid, onPrintReceipt }) => {
  const getStatusColor = (status) => {
    switch(status) {
      case 'Paid': return 'bg-green-100 text-green-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Failed': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <>
      <td className="px-4 py-3">
        <div className="font-medium text-sm">{payment.id}</div>
      </td>
      <td className="px-4 py-3">
        <div className="flex items-center">
          <div className="p-2 bg-blue-100 rounded-lg mr-3">
            <FaUser className="text-blue-600 text-sm" />
          </div>
          <div>
            <div className="font-medium text-sm text-gray-900">{payment.partnerName}</div>
            <div className="text-xs text-gray-500">{payment.partnerId}</div>
          </div>
        </div>
      </td>
      <td className="px-4 py-3">
        <div className="text-sm">{payment.period}</div>
        <div className="text-xs text-gray-600 flex items-center mt-1">
          <FaCalendar className="mr-1 text-xs" /> {payment.paymentDate}
        </div>
      </td>
      <td className="px-4 py-3">
        <div className="font-medium text-sm">{payment.totalDeliveries}</div>
        <div className="text-xs text-gray-600">{payment.paymentMethod}</div>
      </td>
      <td className="px-4 py-3">
        <div className="text-sm">Base: {payment.amount}</div>
        <div className="text-xs text-gray-600">Bonus: {payment.bonus}</div>
        <div className="text-xs text-gray-600">Deductions: {payment.deductions}</div>
      </td>
      <td className="px-4 py-3">
        <div className="font-bold text-lg text-green-600 flex items-center">
          <FaRupeeSign className="text-sm" /> {payment.netAmount.replace('₹', '')}
        </div>
      </td>
      <td className="px-4 py-3">
        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(payment.status)}`}>
          {payment.status}
        </span>
      </td>
      <td className="px-4 py-3">
        <div className="flex gap-2 justify-center">
          <button 
            onClick={() => onView(payment)}
            className="p-1 text-blue-600 hover:bg-blue-50 rounded" 
            title="View Details"
          >
            <FaEye className="text-sm" />
          </button>
          {payment.status === 'Pending' && (
            <button 
              onClick={() => onMarkPaid(payment.id)}
              className="p-1 text-green-600 hover:bg-green-50 rounded" 
              title="Mark as Paid"
            >
              <FaCheck className="text-sm" />
            </button>
          )}
          <button 
            onClick={() => onPrintReceipt(payment)}
            className="p-1 text-gray-600 hover:bg-gray-50 rounded" 
            title="Download Receipt"
          >
            <FaDownload className="text-sm" />
          </button>
        </div>
      </td>
    </>
  );
});

export default PaymentTableRow;