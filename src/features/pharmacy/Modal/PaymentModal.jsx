import React from 'react';
import { FaPrint, FaRupeeSign, FaCheckCircle, FaTimesCircle, FaCalendar, FaUser } from 'react-icons/fa';
import Modal from '../../../shared/components/modals/Modal';

const PaymentModal = React.memo(({ isOpen, onClose, payment, onPrintReceipt }) => {
  const getPaymentStatusColor = (status) => {
    switch(status) {
      case 'Paid': return 'bg-green-100 text-green-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Failed': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Payment Details"
      size="md"
      position="center"
    >
      <div className="p-6">
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <div>
                <div className="font-bold text-lg text-gray-800">{payment?.id}</div>
                <div className="text-gray-600 text-sm flex items-center">
                  <FaUser className="mr-2" /> {payment?.partnerName}
                </div>
              </div>
              <span className={`px-3 py-1 text-sm font-medium rounded-full ${getPaymentStatusColor(payment?.status)}`}>
                {payment?.status}
              </span>
            </div>
            <div className="text-sm text-gray-500 flex items-center">
              <FaCalendar className="mr-2" /> {payment?.period}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 p-3 rounded-lg">
              <div className="text-sm text-gray-500">Base Amount</div>
              <div className="font-bold text-lg flex items-center">
                <FaRupeeSign className="text-sm" /> {payment?.amount?.replace('₹', '')}
              </div>
            </div>
            <div className="bg-green-50 p-3 rounded-lg">
              <div className="text-sm text-gray-500">Bonus</div>
              <div className="font-bold text-lg text-green-600 flex items-center">
                <FaRupeeSign className="text-sm" /> {payment?.bonus?.replace('₹', '')}
              </div>
            </div>
          </div>
          
          <div className="bg-red-50 p-3 rounded-lg">
            <div className="text-sm text-gray-500">Deductions</div>
            <div className="font-bold text-lg text-red-600 flex items-center">
              <FaRupeeSign className="text-sm" /> {payment?.deductions?.replace('₹', '')}
            </div>
          </div>
          
          <div className="bg-green-100 p-4 rounded-lg border border-green-200">
            <div className="text-sm text-gray-500">Net Amount Payable</div>
            <div className="font-bold text-2xl text-green-700 flex items-center">
              <FaRupeeSign /> {payment?.netAmount?.replace('₹', '')}
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Payment Method:</span>
              <span className="font-medium">{payment?.paymentMethod}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Payment Date:</span>
              <span className="font-medium">{payment?.paymentDate}</span>
            </div>
            {payment?.transactionId && (
              <div className="flex justify-between">
                <span className="text-gray-600">Transaction ID:</span>
                <span className="font-medium text-sm">{payment?.transactionId}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span className="text-gray-600">Total Deliveries:</span>
              <span className="font-medium">{payment?.totalDeliveries}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-6 border-t border-gray-200">
        <div className="flex justify-end gap-3">
          <button 
            onClick={() => {
              onPrintReceipt(payment);
              onClose();
            }}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2 text-sm"
          >
            <FaPrint /> Print Receipt
          </button>
          <button 
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm"
          >
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
});

export default PaymentModal;