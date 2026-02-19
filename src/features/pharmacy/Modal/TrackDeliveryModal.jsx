import React from 'react';
import { FaMapPin, FaPhoneAlt, FaWhatsapp, FaCheckCircle } from 'react-icons/fa';
import Modal from '../../../shared/components/modals/Modal';

const TrackDeliveryModal = React.memo(({ isOpen, onClose, delivery }) => {
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

  const statusSteps = [
    { status: 'Order Confirmed', key: 'orderTime', completed: true },
    { status: 'Picked Up', key: 'pickupTime', completed: ['Picked Up', 'In Transit', 'Delivered'].includes(delivery?.status) },
    { status: 'In Transit', key: 'estimatedTime', completed: ['In Transit', 'Delivered'].includes(delivery?.status) },
    { status: 'Delivered', key: 'deliveredTime', completed: delivery?.status === 'Delivered' }
  ];

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Track Delivery"
      size="lg"
      position="center"
      contentClassName="max-h-[90vh] overflow-hidden flex flex-col"
    >
      <div className="flex-1 overflow-y-auto p-6">
        <div className="space-y-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex justify-between items-start">
              <div>
                <div className="font-bold text-lg text-gray-800">{delivery?.id}</div>
                <div className="text-gray-600 text-sm">{delivery?.customer}</div>
              </div>
              <span className={`px-3 py-1 font-medium text-sm rounded-full ${getStatusColor(delivery?.status)}`}>
                {delivery?.status}
              </span>
            </div>
            
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div>
                <div className="text-xs text-gray-500">Delivery Partner</div>
                <div className="font-medium text-sm">{delivery?.deliveryPartner}</div>
              </div>
              <div>
                <div className="text-xs text-gray-500">Contact</div>
                <div className="font-medium text-sm">{delivery?.partnerContact || 'N/A'}</div>
              </div>
            </div>
          </div>
          
          {/* Delivery Progress Timeline */}
          <div>
            <h4 className="font-medium text-gray-700 mb-4">Delivery Progress</h4>
            <div className="relative pl-8">
              <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-blue-200"></div>
              
              {statusSteps.map((step, index) => (
                <div key={index} className="relative mb-6">
                  <div className={`absolute left-0 w-6 h-6 rounded-full border-4 border-white -translate-x-1/2 ${
                    step.completed ? 'bg-green-500' : 'bg-gray-300'
                  }`}>
                    {step.completed && <FaCheckCircle className="text-white text-xs relative top-0.5 left-0.5" />}
                  </div>
                  <div className="ml-6">
                    <div className="font-medium text-sm">{step.status}</div>
                    <div className="text-xs text-gray-600">
                      {delivery?.[step.key] || 'Pending'}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-700 mb-2">Items to Deliver</h4>
            <div className="bg-blue-50 p-3 rounded-lg">
              {delivery?.items?.map((item, index) => (
                <div key={index} className="text-sm text-gray-700">• {item}</div>
              ))}
            </div>
            {delivery?.instructions && (
              <div className="mt-3 text-sm text-gray-600">
                <span className="font-medium">Instructions:</span> {delivery.instructions}
              </div>
            )}
          </div>
          
          <div className="bg-blue-50 rounded-lg p-4 text-center">
            <FaMapPin className="text-3xl text-blue-600 mx-auto mb-2" />
            <div className="font-medium text-gray-800">Live Tracking Map</div>
            <div className="text-sm text-gray-600 mt-1">Distance: {delivery?.distance}</div>
            <div className="text-sm text-gray-600">Current Status: {delivery?.status}</div>
          </div>
          
          {delivery?.partnerContact && (
            <div className="flex gap-3 pt-4">
              <a 
                href={`tel:${delivery.partnerContact}`}
                className="flex-1 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2 text-sm"
              >
                <FaPhoneAlt /> Call Partner
              </a>
              <a 
                href={`https://wa.me/${delivery.partnerContact.replace('+', '').replace(/\s/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center justify-center gap-2 text-sm"
              >
                <FaWhatsapp /> WhatsApp
              </a>
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
});

export default TrackDeliveryModal;