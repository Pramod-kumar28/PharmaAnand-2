import React from 'react';
import { FaTimes, FaCheck, FaPrint, FaExclamationTriangle } from 'react-icons/fa';
import Modal from '../../../shared/components/modals/Modal';

const OrderDetailsModal = ({ 
  order, 
  onClose, 
  onNextStep, 
  onPrint,
  onStatusUpdate 
}) => {
  if (!order) return null;

  const getPaymentColor = (payment) => {
    if (payment.status === 'Paid') return 'bg-green-100 text-green-800';
    if (payment.status === 'Pending') return 'bg-yellow-100 text-yellow-800';
    return 'bg-red-100 text-red-800';
  };

  const getNextStepAction = (status) => {
    switch(status) {
      case 'pending': return 'processing';
      case 'processing': return 'ready';
      case 'ready': return 'dispatched';
      default: return null;
    }
  };

  const getNextStepLabel = (status) => {
    switch(status) {
      case 'pending': return 'Accept Order';
      case 'processing': return 'Mark as Ready';
      case 'ready': return 'Dispatch Order';
      default: return 'Complete';
    }
  };

  const handleNextStep = () => {
    const nextStatus = getNextStepAction(order.status);
    if (nextStatus) {
      onStatusUpdate(order.id, nextStatus);
    }
    onClose();
  };

  return (
    <Modal
      isOpen={!!order}
      onClose={onClose}
      title="Order Details"
      size="md"
      position="top"
      contentClassName="flex flex-col max-h-[calc(100vh-10.5rem)]"
    >
      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto p-6">
        <div className="space-y-4">
          {/* Order Header */}
          <div className="mb-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-bold text-gray-800">{order.id}</h3>
                <p className="text-gray-600 text-sm">{order.time}</p>
              </div>
              <div className="text-right">
                <div className="font-bold text-lg">{order.amount}</div>
                <div className="text-sm text-gray-600">{order.totalItems} items</div>
              </div>
            </div>
          </div>

          {/* Customer Info */}
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-bold text-gray-800 mb-2">Customer Information</h4>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <div className="text-xs text-gray-500">Name</div>
                <div className="font-medium text-sm">{order.customer}</div>
              </div>
              <div>
                <div className="text-xs text-gray-500">Phone</div>
                <div className="font-medium text-sm">{order.phone}</div>
              </div>
            </div>
          </div>
          
          {/* Order Items */}
          <div>
            <h4 className="font-bold text-gray-800 mb-2">Order Items</h4>
            <div className="space-y-2">
              {order.items.map((item, index) => (
                <div key={index} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                  <div>
                    <div className="font-medium text-sm">{item.name}</div>
                    <div className="text-xs text-gray-500">Qty: {item.qty}</div>
                  </div>
                  <div className="font-bold text-sm">{item.price}</div>
                </div>
              ))}
            </div>
            <div className="mt-3 pt-3 border-t border-gray-200 flex justify-between items-center">
              <span className="font-bold">Total</span>
              <span className="font-bold text-lg">{order.amount}</span>
            </div>
          </div>
          
          {/* Delivery Info */}
          <div>
            <h4 className="font-bold text-gray-800 mb-2">Delivery Information</h4>
            <div className="bg-gray-50 p-3 rounded">
              <div className="text-sm">{order.delivery.type}</div>
              {order.delivery.address !== 'Store Pickup' && (
                <div className="text-xs text-gray-600 mt-1">{order.delivery.address}</div>
              )}
            </div>
          </div>
          
          {/* Payment Info */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <div className="text-xs text-gray-500">Payment Method</div>
              <div className={`mt-1 px-2 py-1 text-xs rounded ${getPaymentColor(order.payment)}`}>
                {order.payment.method}
              </div>
            </div>
            <div>
              <div className="text-xs text-gray-500">Payment Status</div>
              <div className={`mt-1 px-2 py-1 text-xs rounded ${getPaymentColor(order.payment)}`}>
                {order.payment.status}
              </div>
            </div>
          </div>
          
          {/* Prescription Status */}
          {order.prescription && (
            <div className="bg-yellow-50 p-3 rounded-lg">
              <div className="flex items-center gap-2">
                <FaExclamationTriangle className="text-yellow-600" />
                <span className="font-medium text-sm">Prescription Required</span>
              </div>
              <p className="text-xs text-yellow-700 mt-1">Verify prescription before processing order</p>
            </div>
          )}
        </div>
      </div>
      
      {/* Fixed Footer */}
      <div className="p-6 border-t border-gray-200 bg-white sticky bottom-0">
        <div className="flex justify-between gap-3">
          <button 
            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm"
            onClick={onClose}
          >
            Close
          </button>
          <div className="flex gap-2">
            {getNextStepAction(order.status) && (
              <button 
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 text-sm flex items-center gap-2"
                onClick={handleNextStep}
              >
                <FaCheck /> {getNextStepLabel(order.status)}
              </button>
            )}
            <button 
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm flex items-center gap-2"
              onClick={() => onPrint(order)}
            >
              <FaPrint /> Print Invoice
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default React.memo(OrderDetailsModal);