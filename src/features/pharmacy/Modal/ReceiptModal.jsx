import React from 'react';
import { FaPrint, FaShare, FaCopy, FaTimes, FaRupeeSign, FaUser, FaCalendar, FaCheckCircle } from 'react-icons/fa';
import Modal from '../../../shared/components/modals/Modal';

const ReceiptModal = React.memo(({ isOpen, onClose, payment }) => {
  const handlePrint = () => {
    window.print();
  };

  const handleShareReceipt = () => {
    if (navigator.share) {
      navigator.share({
        title: `Payment Receipt - ${payment?.id}`,
        text: `Payment receipt for ${payment?.partnerName}`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(`Payment Receipt - ${payment?.id}\nAmount: ${payment?.netAmount}\nDate: ${payment?.paymentDate}`);
      alert('Receipt details copied to clipboard!');
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Payment Receipt"
      size="md"
      position="center"
      contentClassName="max-h-[90vh] overflow-hidden flex flex-col"
    >
      <div className="flex-1 overflow-y-auto p-6">
        <div className="space-y-6">
          <div className="text-center border-b pb-4">
            <h2 className="text-2xl font-bold text-gray-800">MediCare Pharmacy</h2>
            <p className="text-gray-600 text-sm">Delivery Partner Payment Receipt</p>
            <p className="text-sm text-gray-500 mt-1">Generated on {new Date().toLocaleDateString()}</p>
          </div>
          
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Receipt No:</span>
              <div className="flex items-center">
                <span className="font-bold">{payment?.id}</span>
                <button 
                  onClick={() => copyToClipboard(payment?.id)}
                  className="ml-2 text-gray-400 hover:text-gray-600"
                >
                  <FaCopy className="text-xs" />
                </button>
              </div>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Partner Name:</span>
              <div className="flex items-center">
                <span className="font-medium">{payment?.partnerName}</span>
                <button 
                  onClick={() => copyToClipboard(payment?.partnerName)}
                  className="ml-2 text-gray-400 hover:text-gray-600"
                >
                  <FaCopy className="text-xs" />
                </button>
              </div>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Partner ID:</span>
              <div className="flex items-center">
                <span className="font-medium">{payment?.partnerId}</span>
                <button 
                  onClick={() => copyToClipboard(payment?.partnerId)}
                  className="ml-2 text-gray-400 hover:text-gray-600"
                >
                  <FaCopy className="text-xs" />
                </button>
              </div>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Period:</span>
              <div className="flex items-center">
                <span className="font-medium">{payment?.period}</span>
                <button 
                  onClick={() => copyToClipboard(payment?.period)}
                  className="ml-2 text-gray-400 hover:text-gray-600"
                >
                  <FaCopy className="text-xs" />
                </button>
              </div>
            </div>
            
            <div className="border-t border-b py-4 space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Base Amount:</span>
                <span className="font-medium flex items-center">
                  <FaRupeeSign className="mr-1 text-sm" /> {payment?.amount?.replace('₹', '')}
                </span>
              </div>
              <div className="flex justify-between items-center text-green-600">
                <span>Bonus:</span>
                <span className="font-medium flex items-center">
                  <FaRupeeSign className="mr-1 text-sm" /> {payment?.bonus?.replace('₹', '')}
                </span>
              </div>
              <div className="flex justify-between items-center text-red-600">
                <span>Deductions:</span>
                <span className="font-medium flex items-center">
                  <FaRupeeSign className="mr-1 text-sm" /> {payment?.deductions?.replace('₹', '')}
                </span>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-gray-800">Total Payable:</span>
                <span className="text-2xl font-bold text-green-700 flex items-center">
                  <FaRupeeSign /> {payment?.netAmount?.replace('₹', '')}
                </span>
              </div>
            </div>
            
            <div className="text-sm text-gray-600 space-y-2">
              <div className="flex justify-between">
                <span>Payment Method:</span>
                <span className="font-medium">{payment?.paymentMethod}</span>
              </div>
              <div className="flex justify-between">
                <span>Payment Date:</span>
                <span className="font-medium flex items-center">
                  <FaCalendar className="mr-1" /> {payment?.paymentDate}
                </span>
              </div>
              {payment?.transactionId && (
                <div className="flex justify-between items-center">
                  <span>Transaction ID:</span>
                  <div className="flex items-center">
                    <span className="font-medium text-xs">{payment?.transactionId}</span>
                    <button 
                      onClick={() => copyToClipboard(payment?.transactionId)}
                      className="ml-2 text-gray-400 hover:text-gray-600"
                    >
                      <FaCopy className="text-xs" />
                    </button>
                  </div>
                </div>
              )}
              <div className="flex justify-between items-center">
                <span>Status:</span>
                <span className={`font-medium flex items-center ${
                  payment?.status === 'Paid' ? 'text-green-600' : 'text-yellow-600'
                }`}>
                  {payment?.status === 'Paid' && <FaCheckCircle className="mr-1" />}
                  {payment?.status}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Total Deliveries:</span>
                <span className="font-medium">{payment?.totalDeliveries}</span>
              </div>
            </div>
            
            <div className="border-t pt-4 text-center text-xs text-gray-500 space-y-1">
              <p>This is a computer-generated receipt. No signature required.</p>
              <p>MediCare Pharmacy • support@medicarepharmacy.com</p>
              <p>+91 9876543210 • www.medicarepharmacy.com</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-6 border-t border-gray-200">
        <div className="flex justify-between gap-3">
          <button 
            onClick={handleShareReceipt}
            className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 flex items-center gap-2 text-sm"
          >
            <FaShare /> Share
          </button>
          <div className="flex gap-3">
            <button 
              onClick={handlePrint}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2 text-sm"
            >
              <FaPrint /> Print
            </button>
            <button 
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
});

export default ReceiptModal;