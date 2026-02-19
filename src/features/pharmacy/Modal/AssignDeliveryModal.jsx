import React from 'react';
import Modal from '../../../shared/components/modals/Modal';

const AssignDeliveryModal = React.memo(({ 
  isOpen,
  onClose, 
  delivery, 
  partners, 
  onAssign 
}) => {
  const activePartners = partners.filter(partner => partner.status === 'Active');

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Assign Delivery Partner"
      size="md"
      position="top"
    >
      <div className="p-6">
        <div className="bg-blue-50 p-4 rounded-lg mb-4">
          <div className="font-bold text-blue-800 text-sm">{delivery?.id}</div>
          <div className="text-gray-700 text-sm mt-1">{delivery?.customer}</div>
          <div className="text-gray-600 text-xs mt-1">{delivery?.address}</div>
          <div className="text-sm font-medium mt-2">Amount: {delivery?.amount}</div>
        </div>
        
        <h4 className="font-medium text-gray-700 mb-3">Available Partners</h4>
        <div className="space-y-3 max-h-[300px] overflow-y-auto">
          {activePartners.map(partner => (
            <div 
              key={partner.id} 
              className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
              onClick={() => {
                onAssign(delivery?.id, partner.id);
                onClose();
              }}
            >
              <div className="flex-1">
                <div className="font-medium text-sm">{partner.name}</div>
                <div className="text-xs text-gray-600">{partner.vehicleType} • {partner.location}</div>
                <div className="text-xs text-gray-500 flex items-center mt-1">
                  <span className="text-yellow-500 mr-1">★</span> {partner.rating} 
                  <span className="mx-2">•</span>
                  {partner.todayDeliveries} deliveries today
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium text-blue-600">Assign</div>
                <div className="text-xs text-gray-500">{partner.phone}</div>
              </div>
            </div>
          ))}
          
          {activePartners.length === 0 && (
            <div className="text-center py-4 text-gray-500 bg-yellow-50 rounded-lg">
              <div className="text-yellow-500 mb-2">⚠️</div>
              No active delivery partners available
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
});

export default AssignDeliveryModal;