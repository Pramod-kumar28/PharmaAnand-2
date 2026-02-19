// // src/pages/pharmacy/Delivery.jsx
// import React, { useState } from 'react';
// import { 
//   FaSearch, 
//   FaTruck, 
//   FaMapMarkerAlt, 
//   FaPhone, 
//   FaClock, 
//   FaCheckCircle, 
//   FaExclamationCircle,
//   FaUser,
//   FaMotorcycle,
//   FaStar,
//   FaRupeeSign,
//   FaCalendar,
//   FaFilter,
//   FaPlus,
//   FaEdit,
//   FaTrash,
//   FaCheck,
//   FaTimes,
//   FaDownload,
//   FaEye,
//   FaPhoneAlt,
//   FaWhatsapp,
//   FaMapPin,
//   FaWallet,
//   FaCreditCard,
//   FaHistory,
//   FaPrint,
//   FaShare,
//   FaCopy
// } from 'react-icons/fa';

// // ============ SEPARATE MODAL COMPONENTS ============

// // Add Partner Modal Component
// const AddPartnerModal = ({ isOpen, onClose, onSubmit }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     phone: '',
//     vehicleType: 'Bike',
//     vehicleNumber: '',
//     address: '',
//     email: ''
//   });

//   if (!isOpen) return null;

//   const handleSubmit = () => {
//     if (!formData.name || !formData.phone || !formData.vehicleNumber) {
//       alert('Please fill in all required fields');
//       return;
//     }
//     onSubmit(formData);
//     setFormData({
//       name: '',
//       phone: '',
//       vehicleType: 'Bike',
//       vehicleNumber: '',
//       address: '',
//       email: ''
//     });
//     onClose();
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//       <div className="bg-white rounded-xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-hidden flex flex-col">
//         <div className="p-6 border-b border-gray-200 flex-shrink-0">
//           <div className="flex justify-between items-center">
//             <h3 className="text-xl font-bold text-gray-800">Add Delivery Partner</h3>
//             <button 
//               onClick={onClose}
//               className="text-gray-400 hover:text-gray-600 text-2xl"
//             >
//               <FaTimes />
//             </button>
//           </div>
//         </div>
        
//         <div className="flex-1 overflow-y-auto p-6">
//           <div className="space-y-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
//               <input
//                 type="text"
//                 value={formData.name}
//                 onChange={(e) => setFormData(prev => ({...prev, name: e.target.value}))}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                 placeholder="Enter full name"
//               />
//             </div>
            
//             <div className="grid grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
//                 <input
//                   type="tel"
//                   value={formData.phone}
//                   onChange={(e) => setFormData(prev => ({...prev, phone: e.target.value}))}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                   placeholder="+91 9876543210"
//                 />
//               </div>
              
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Vehicle Type</label>
//                 <select
//                   value={formData.vehicleType}
//                   onChange={(e) => setFormData(prev => ({...prev, vehicleType: e.target.value}))}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                 >
//                   <option value="Bike">Bike</option>
//                   <option value="Scooter">Scooter</option>
//                   <option value="Car">Car</option>
//                   <option value="Auto">Auto</option>
//                 </select>
//               </div>
//             </div>
            
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Vehicle Number *</label>
//               <input
//                 type="text"
//                 value={formData.vehicleNumber}
//                 onChange={(e) => setFormData(prev => ({...prev, vehicleNumber: e.target.value}))}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                 placeholder="KA-01-AB-1234"
//               />
//             </div>
            
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
//               <input
//                 type="text"
//                 value={formData.address}
//                 onChange={(e) => setFormData(prev => ({...prev, address: e.target.value}))}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                 placeholder="Enter address"
//               />
//             </div>
            
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Email (Optional)</label>
//               <input
//                 type="email"
//                 value={formData.email}
//                 onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                 placeholder="partner@example.com"
//               />
//             </div>
//           </div>
//         </div>
        
//         <div className="p-6 border-t border-gray-200 flex-shrink-0">
//           <div className="flex justify-end gap-3">
//             <button 
//               onClick={onClose}
//               className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
//             >
//               Cancel
//             </button>
//             <button 
//               onClick={handleSubmit}
//               className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2"
//             >
//               <FaCheck /> Add Partner
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Edit Partner Modal Component
// const EditPartnerModal = ({ isOpen, onClose, partner, onSubmit }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     phone: '',
//     vehicleType: 'Bike',
//     vehicleNumber: '',
//     status: 'Active',
//     address: '',
//     email: ''
//   });

//   // Initialize form when partner changes
//   React.useEffect(() => {
//     if (partner) {
//       setFormData({
//         name: partner.name || '',
//         phone: partner.phone || '',
//         vehicleType: partner.vehicleType || 'Bike',
//         vehicleNumber: partner.vehicleNumber || '',
//         status: partner.status || 'Active',
//         address: partner.address || '',
//         email: partner.email || ''
//       });
//     }
//   }, [partner]);

//   if (!isOpen || !partner) return null;

//   const handleSubmit = () => {
//     if (!formData.name || !formData.phone) {
//       alert('Please fill in all required fields');
//       return;
//     }
//     onSubmit(formData);
//     onClose();
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//       <div className="bg-white rounded-xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-hidden flex flex-col">
//         <div className="p-6 border-b border-gray-200 flex-shrink-0">
//           <div className="flex justify-between items-center">
//             <h3 className="text-xl font-bold text-gray-800">Edit Delivery Partner</h3>
//             <button 
//               onClick={onClose}
//               className="text-gray-400 hover:text-gray-600 text-2xl"
//             >
//               <FaTimes />
//             </button>
//           </div>
//         </div>
        
//         <div className="flex-1 overflow-y-auto p-6">
//           <div className="space-y-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
//               <input
//                 type="text"
//                 value={formData.name}
//                 onChange={(e) => setFormData(prev => ({...prev, name: e.target.value}))}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                 placeholder="Enter full name"
//               />
//             </div>
            
//             <div className="grid grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
//                 <input
//                   type="tel"
//                   value={formData.phone}
//                   onChange={(e) => setFormData(prev => ({...prev, phone: e.target.value}))}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                   placeholder="+91 9876543210"
//                 />
//               </div>
              
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
//                 <select
//                   value={formData.status}
//                   onChange={(e) => setFormData(prev => ({...prev, status: e.target.value}))}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                 >
//                   <option value="Active">Active</option>
//                   <option value="On Leave">On Leave</option>
//                   <option value="Inactive">Inactive</option>
//                 </select>
//               </div>
//             </div>
            
//             <div className="grid grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Vehicle Type</label>
//                 <select
//                   value={formData.vehicleType}
//                   onChange={(e) => setFormData(prev => ({...prev, vehicleType: e.target.value}))}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                 >
//                   <option value="Bike">Bike</option>
//                   <option value="Scooter">Scooter</option>
//                   <option value="Car">Car</option>
//                   <option value="Auto">Auto</option>
//                 </select>
//               </div>
              
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Vehicle Number *</label>
//                 <input
//                   type="text"
//                   value={formData.vehicleNumber}
//                   onChange={(e) => setFormData(prev => ({...prev, vehicleNumber: e.target.value}))}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                   placeholder="KA-01-AB-1234"
//                 />
//               </div>
//             </div>
            
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
//               <input
//                 type="text"
//                 value={formData.address}
//                 onChange={(e) => setFormData(prev => ({...prev, address: e.target.value}))}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                 placeholder="Enter address"
//               />
//             </div>
            
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
//               <input
//                 type="email"
//                 value={formData.email}
//                 onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                 placeholder="partner@example.com"
//               />
//             </div>
//           </div>
//         </div>
        
//         <div className="p-6 border-t border-gray-200 flex-shrink-0">
//           <div className="flex justify-end gap-3">
//             <button 
//               onClick={onClose}
//               className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
//             >
//               Cancel
//             </button>
//             <button 
//               onClick={handleSubmit}
//               className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2"
//             >
//               <FaCheck /> Update Partner
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Assign Delivery Modal Component
// const AssignDeliveryModal = ({ 
//   isOpen, 
//   onClose, 
//   delivery, 
//   partners, 
//   onAssign 
// }) => {
//   if (!isOpen || !delivery) return null;

//   const activePartners = partners.filter(partner => partner.status === 'Active');

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//       <div className="bg-white rounded-xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-hidden flex flex-col">
//         <div className="p-6 border-b border-gray-200 flex-shrink-0">
//           <div className="flex justify-between items-center">
//             <h3 className="text-xl font-bold text-gray-800">Assign Delivery Partner</h3>
//             <button 
//               onClick={onClose}
//               className="text-gray-400 hover:text-gray-600 text-2xl"
//             >
//               <FaTimes />
//             </button>
//           </div>
//         </div>
        
//         <div className="flex-1 overflow-y-auto p-6">
//           <div className="bg-blue-50 p-4 rounded-lg mb-4">
//             <div className="font-bold text-blue-800">{delivery.id}</div>
//             <div className="text-sm text-gray-600">{delivery.customer}</div>
//             <div className="text-sm text-gray-600">{delivery.address}</div>
//             <div className="text-sm font-medium mt-1">Amount: {delivery.amount}</div>
//           </div>
          
//           <h4 className="font-medium text-gray-700 mb-3">Available Partners</h4>
//           <div className="space-y-3">
//             {activePartners.map(partner => (
//               <div 
//                 key={partner.id} 
//                 className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer"
//                 onClick={() => {
//                   onAssign(delivery.id, partner.id);
//                   onClose();
//                 }}
//               >
//                 <div>
//                   <div className="font-medium">{partner.name}</div>
//                   <div className="text-sm text-gray-600">{partner.vehicleType} • {partner.location}</div>
//                   <div className="text-xs text-gray-500 flex items-center">
//                     <FaStar className="text-yellow-400 mr-1" /> {partner.rating} 
//                     <span className="mx-2">•</span>
//                     {partner.todayDeliveries} deliveries today
//                   </div>
//                 </div>
//                 <div className="text-right">
//                   <div className="text-sm font-medium text-blue-600">Assign</div>
//                   <div className="text-xs text-gray-500">{partner.phone}</div>
//                 </div>
//               </div>
//             ))}
//           </div>
          
//           {activePartners.length === 0 && (
//             <div className="text-center py-4 text-gray-500 bg-yellow-50 rounded-lg">
//               <FaExclamationCircle className="text-yellow-500 text-xl mx-auto mb-2" />
//               No active delivery partners available
//             </div>
//           )}
//         </div>
        
//         <div className="p-6 border-t border-gray-200 flex-shrink-0">
//           <div className="flex justify-end">
//             <button 
//               onClick={onClose}
//               className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Track Delivery Modal Component
// const TrackDeliveryModal = ({ isOpen, onClose, delivery }) => {
//   if (!isOpen || !delivery) return null;

//   const getStatusColor = (status) => {
//     switch(status) {
//       case 'Pending': return 'bg-yellow-100 text-yellow-800';
//       case 'Assigned': return 'bg-blue-100 text-blue-800';
//       case 'Picked Up': return 'bg-purple-100 text-purple-800';
//       case 'In Transit': return 'bg-indigo-100 text-indigo-800';
//       case 'Delivered': return 'bg-green-100 text-green-800';
//       case 'Cancelled': return 'bg-red-100 text-red-800';
//       default: return 'bg-gray-100 text-gray-800';
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//       <div className="bg-white rounded-xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-hidden flex flex-col">
//         <div className="p-6 border-b border-gray-200 flex-shrink-0">
//           <div className="flex justify-between items-center">
//             <h3 className="text-xl font-bold text-gray-800">Track Delivery</h3>
//             <button 
//               onClick={onClose}
//               className="text-gray-400 hover:text-gray-600 text-2xl"
//             >
//               <FaTimes />
//             </button>
//           </div>
//         </div>
        
//         <div className="flex-1 overflow-y-auto p-6">
//           <div className="space-y-6">
//             <div className="bg-gray-50 p-4 rounded-lg">
//               <div className="flex justify-between items-start">
//                 <div>
//                   <div className="font-bold text-lg">{delivery.id}</div>
//                   <div className="text-gray-600">{delivery.customer}</div>
//                 </div>
//                 <span className={`px-3 py-1 font-medium rounded-full ${getStatusColor(delivery.status)}`}>
//                   {delivery.status}
//                 </span>
//               </div>
              
//               <div className="mt-4 grid grid-cols-2 gap-4">
//                 <div>
//                   <div className="text-sm text-gray-500">Delivery Partner</div>
//                   <div className="font-medium">{delivery.deliveryPartner}</div>
//                 </div>
//                 <div>
//                   <div className="text-sm text-gray-500">Contact</div>
//                   <div className="font-medium">{delivery.partnerContact}</div>
//                 </div>
//               </div>
//             </div>
            
//             {/* Delivery Progress Timeline */}
//             <div>
//               <h4 className="font-medium text-gray-700 mb-4">Delivery Progress</h4>
//               <div className="relative pl-8">
//                 <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-blue-200"></div>
                
//                 <div className="relative mb-6">
//                   <div className="absolute left-0 w-6 h-6 rounded-full bg-green-500 border-4 border-white -translate-x-1/2"></div>
//                   <div className="ml-6">
//                     <div className="font-medium">Order Confirmed</div>
//                     <div className="text-sm text-gray-600">{delivery.orderTime}</div>
//                   </div>
//                 </div>
                
//                 <div className="relative mb-6">
//                   <div className={`absolute left-0 w-6 h-6 rounded-full border-4 border-white -translate-x-1/2 ${
//                     ['Picked Up', 'In Transit', 'Delivered'].includes(delivery.status) 
//                       ? 'bg-green-500' 
//                       : 'bg-gray-300'
//                   }`}></div>
//                   <div className="ml-6">
//                     <div className="font-medium">Picked Up</div>
//                     <div className="text-sm text-gray-600">{delivery.pickupTime}</div>
//                   </div>
//                 </div>
                
//                 <div className="relative mb-6">
//                   <div className={`absolute left-0 w-6 h-6 rounded-full border-4 border-white -translate-x-1/2 ${
//                     ['In Transit', 'Delivered'].includes(delivery.status) 
//                       ? 'bg-green-500' 
//                       : 'bg-gray-300'
//                   }`}></div>
//                   <div className="ml-6">
//                     <div className="font-medium">In Transit</div>
//                     <div className="text-sm text-gray-600">Estimated: {delivery.estimatedTime}</div>
//                   </div>
//                 </div>
                
//                 <div className="relative">
//                   <div className={`absolute left-0 w-6 h-6 rounded-full border-4 border-white -translate-x-1/2 ${
//                     delivery.status === 'Delivered' 
//                       ? 'bg-green-500' 
//                       : 'bg-gray-300'
//                   }`}></div>
//                   <div className="ml-6">
//                     <div className="font-medium">Delivered</div>
//                     {delivery.deliveredTime && (
//                       <div className="text-sm text-gray-600">{delivery.deliveredTime}</div>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//             <div>
//               <h4 className="font-medium text-gray-700 mb-2">Items to Deliver</h4>
//               <div className="bg-blue-50 p-3 rounded-lg">
//                 {delivery.items.map((item, index) => (
//                   <div key={index} className="text-sm text-gray-700">• {item}</div>
//                 ))}
//               </div>
//               {delivery.instructions && (
//                 <div className="mt-3 text-sm text-gray-600">
//                   <span className="font-medium">Instructions:</span> {delivery.instructions}
//                 </div>
//               )}
//             </div>
            
//             <div className="bg-blue-50 rounded-lg p-4 text-center">
//               <FaMapPin className="text-3xl text-blue-600 mx-auto mb-2" />
//               <div className="font-medium">Live Tracking Map</div>
//               <div className="text-sm text-gray-600 mt-1">Distance: {delivery.distance}</div>
//               <div className="text-sm text-gray-600">Current Status: {delivery.status}</div>
//             </div>
            
//             {delivery.partnerContact && (
//               <div className="flex gap-3 pt-4">
//                 <a 
//                   href={`tel:${delivery.partnerContact}`}
//                   className="flex-1 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2"
//                 >
//                   <FaPhoneAlt /> Call Partner
//                 </a>
//                 <a 
//                   href={`https://wa.me/${delivery.partnerContact.replace('+', '').replace(/\s/g, '')}`}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex-1 px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center justify-center gap-2"
//                 >
//                   <FaWhatsapp /> WhatsApp
//                 </a>
//               </div>
//             )}
//           </div>
//         </div>
        
//         <div className="p-6 border-t border-gray-200 flex-shrink-0">
//           <div className="flex justify-end">
//             <button 
//               onClick={onClose}
//               className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Payment Details Modal Component
// const PaymentModal = ({ isOpen, onClose, payment, onPrintReceipt }) => {
//   if (!isOpen || !payment) return null;

//   const getPaymentStatusColor = (status) => {
//     switch(status) {
//       case 'Paid': return 'bg-green-100 text-green-800';
//       case 'Pending': return 'bg-yellow-100 text-yellow-800';
//       case 'Failed': return 'bg-red-100 text-red-800';
//       default: return 'bg-gray-100 text-gray-800';
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//       <div className="bg-white rounded-xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-hidden flex flex-col">
//         <div className="p-6 border-b border-gray-200 flex-shrink-0">
//           <div className="flex justify-between items-center">
//             <h3 className="text-xl font-bold text-gray-800">Payment Details</h3>
//             <button 
//               onClick={onClose}
//               className="text-gray-400 hover:text-gray-600 text-2xl"
//             >
//               <FaTimes />
//             </button>
//           </div>
//         </div>
        
//         <div className="flex-1 overflow-y-auto p-6">
//           <div className="space-y-4">
//             <div className="bg-gray-50 p-4 rounded-lg">
//               <div className="flex justify-between items-center mb-2">
//                 <div className="font-bold text-lg">{payment.id}</div>
//                 <span className={`px-3 py-1 text-sm font-medium rounded-full ${getPaymentStatusColor(payment.status)}`}>
//                   {payment.status}
//                 </span>
//               </div>
//               <div className="text-gray-600">{payment.partnerName}</div>
//               <div className="text-sm text-gray-500">{payment.period}</div>
//             </div>
            
//             <div className="grid grid-cols-2 gap-4">
//               <div className="bg-blue-50 p-3 rounded-lg">
//                 <div className="text-sm text-gray-500">Base Amount</div>
//                 <div className="font-bold text-lg">{payment.amount}</div>
//               </div>
//               <div className="bg-green-50 p-3 rounded-lg">
//                 <div className="text-sm text-gray-500">Bonus</div>
//                 <div className="font-bold text-lg text-green-600">{payment.bonus}</div>
//               </div>
//             </div>
            
//             <div className="bg-red-50 p-3 rounded-lg">
//               <div className="text-sm text-gray-500">Deductions</div>
//               <div className="font-bold text-lg text-red-600">-{payment.deductions}</div>
//             </div>
            
//             <div className="bg-green-100 p-4 rounded-lg border border-green-200">
//               <div className="text-sm text-gray-500">Net Amount Payable</div>
//               <div className="font-bold text-2xl text-green-700">{payment.netAmount}</div>
//             </div>
            
//             <div className="space-y-2">
//               <div className="flex justify-between">
//                 <span className="text-gray-600">Payment Method:</span>
//                 <span className="font-medium">{payment.paymentMethod}</span>
//               </div>
//               <div className="flex justify-between">
//                 <span className="text-gray-600">Payment Date:</span>
//                 <span className="font-medium">{payment.paymentDate}</span>
//               </div>
//               {payment.transactionId && (
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Transaction ID:</span>
//                   <span className="font-medium text-sm">{payment.transactionId}</span>
//                 </div>
//               )}
//               <div className="flex justify-between">
//                 <span className="text-gray-600">Total Deliveries:</span>
//                 <span className="font-medium">{payment.totalDeliveries}</span>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         <div className="p-6 border-t border-gray-200 flex-shrink-0">
//           <div className="flex justify-end gap-3">
//             <button 
//               onClick={() => {
//                 onPrintReceipt(payment);
//                 onClose();
//               }}
//               className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2"
//             >
//               <FaPrint /> Print Receipt
//             </button>
//             <button 
//               onClick={onClose}
//               className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Receipt Modal Component
// const ReceiptModal = ({ isOpen, onClose, payment }) => {
//   if (!isOpen || !payment) return null;

//   const handlePrint = () => {
//     window.print();
//   };

//   const handleShareReceipt = () => {
//     if (navigator.share) {
//       navigator.share({
//         title: `Payment Receipt - ${payment.id}`,
//         text: `Payment receipt for ${payment.partnerName}`,
//         url: window.location.href,
//       });
//     } else {
//       navigator.clipboard.writeText(`Payment Receipt - ${payment.id}\nAmount: ${payment.netAmount}\nDate: ${payment.paymentDate}`);
//       alert('Receipt details copied to clipboard!');
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//       <div className="bg-white rounded-xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-hidden flex flex-col">
//         <div className="p-6 border-b border-gray-200 flex-shrink-0">
//           <div className="flex justify-between items-center">
//             <h3 className="text-xl font-bold text-gray-800">Payment Receipt</h3>
//             <button 
//               onClick={onClose}
//               className="text-gray-400 hover:text-gray-600 text-2xl"
//             >
//               <FaTimes />
//             </button>
//           </div>
//         </div>
        
//         <div className="flex-1 overflow-y-auto p-6">
//           <div className="space-y-6">
//             <div className="text-center border-b pb-4">
//               <h2 className="text-2xl font-bold text-gray-800">MediCare Pharmacy</h2>
//               <p className="text-gray-600">Delivery Partner Payment Receipt</p>
//               <p className="text-sm text-gray-500">Generated on {new Date().toLocaleDateString()}</p>
//             </div>
            
//             <div className="space-y-4">
//               <div className="flex justify-between">
//                 <span className="text-gray-600">Receipt No:</span>
//                 <span className="font-bold">{payment.id}</span>
//               </div>
//               <div className="flex justify-between">
//                 <span className="text-gray-600">Partner Name:</span>
//                 <span className="font-medium">{payment.partnerName}</span>
//               </div>
//               <div className="flex justify-between">
//                 <span className="text-gray-600">Partner ID:</span>
//                 <span className="font-medium">{payment.partnerId}</span>
//               </div>
//               <div className="flex justify-between">
//                 <span className="text-gray-600">Period:</span>
//                 <span className="font-medium">{payment.period}</span>
//               </div>
              
//               <div className="border-t border-b py-4 space-y-2">
//                 <div className="flex justify-between">
//                   <span>Base Amount:</span>
//                   <span className="font-medium">{payment.amount}</span>
//                 </div>
//                 <div className="flex justify-between text-green-600">
//                   <span>Bonus:</span>
//                   <span className="font-medium">+{payment.bonus}</span>
//                 </div>
//                 <div className="flex justify-between text-red-600">
//                   <span>Deductions:</span>
//                   <span className="font-medium">-{payment.deductions}</span>
//                 </div>
//               </div>
              
//               <div className="bg-gray-50 p-4 rounded-lg">
//                 <div className="flex justify-between items-center">
//                   <span className="text-lg font-bold">Total Payable:</span>
//                   <span className="text-2xl font-bold text-green-700">{payment.netAmount}</span>
//                 </div>
//               </div>
              
//               <div className="text-sm text-gray-600 space-y-1">
//                 <div>Payment Method: {payment.paymentMethod}</div>
//                 <div>Payment Date: {payment.paymentDate}</div>
//                 {payment.transactionId && (
//                   <div>Transaction ID: {payment.transactionId}</div>
//                 )}
//                 <div>Status: <span className={`font-medium ${payment.status === 'Paid' ? 'text-green-600' : 'text-yellow-600'}`}>{payment.status}</span></div>
//               </div>
              
//               <div className="border-t pt-4 text-center text-xs text-gray-500">
//                 <p>This is a computer-generated receipt. No signature required.</p>
//                 <p>MediCare Pharmacy • support@medicarepharmacy.com</p>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         <div className="p-6 border-t border-gray-200 flex-shrink-0">
//           <div className="flex justify-between gap-3">
//             <button 
//               onClick={handleShareReceipt}
//               className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 flex items-center gap-2"
//             >
//               <FaShare /> Share
//             </button>
//             <div className="flex gap-3">
//               <button 
//                 onClick={handlePrint}
//                 className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2"
//               >
//                 <FaPrint /> Print
//               </button>
//               <button 
//                 onClick={onClose}
//                 className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // ============ MAIN COMPONENT ============

// const Delivery = () => {
//   const [activeTab, setActiveTab] = useState('active');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [statusFilter, setStatusFilter] = useState('all');
  
//   // Modal states
//   const [showAddPartnerModal, setShowAddPartnerModal] = useState(false);
//   const [showAssignDeliveryModal, setShowAssignDeliveryModal] = useState(false);
//   const [showTrackModal, setShowTrackModal] = useState(false);
//   const [showEditPartnerModal, setShowEditPartnerModal] = useState(false);
//   const [showPaymentModal, setShowPaymentModal] = useState(false);
//   const [showReceiptModal, setShowReceiptModal] = useState(false);
  
//   // Selection states
//   const [selectedDelivery, setSelectedDelivery] = useState(null);
//   const [selectedPartner, setSelectedPartner] = useState(null);
//   const [selectedPayment, setSelectedPayment] = useState(null);

//   // Deliveries Data
//   const [deliveries, setDeliveries] = useState([
//     {
//       id: 'DEL1001',
//       orderId: 'ORD1001',
//       customer: 'Rajesh Kumar',
//       address: '123 MG Road, Bangalore',
//       amount: '₹1,850',
//       status: 'Assigned',
//       deliveryPartner: 'Ramesh (Rider #45)',
//       partnerId: 'DP001',
//       partnerContact: '+91 9876543210',
//       estimatedTime: '30-45 mins',
//       pickupTime: '11:30 AM',
//       distance: '3.2 km',
//       priority: 'High',
//       paymentMethod: 'Online',
//       deliveryFee: '₹40',
//       orderTime: '11:00 AM',
//       items: ['Paracetamol', 'Cough Syrup', 'Vitamin C'],
//       instructions: 'Ring bell twice, leave at door'
//     },
//     {
//       id: 'DEL1002',
//       orderId: 'ORD1002',
//       customer: 'Sunita Patel',
//       address: '456 Koramangala, Bangalore',
//       amount: '₹620',
//       status: 'Picked Up',
//       deliveryPartner: 'Suresh (Rider #32)',
//       partnerId: 'DP002',
//       partnerContact: '+91 9876543211',
//       estimatedTime: '20-30 mins',
//       pickupTime: '11:15 AM',
//       distance: '2.5 km',
//       priority: 'Medium',
//       paymentMethod: 'Cash',
//       deliveryFee: '₹30',
//       orderTime: '10:45 AM',
//       items: ['Amoxicillin', 'Bandages'],
//       instructions: 'Call before arrival'
//     },
//     {
//       id: 'DEL1003',
//       orderId: 'ORD1003',
//       customer: 'Vikram Singh',
//       address: '789 Indiranagar, Bangalore',
//       amount: '₹2,450',
//       status: 'In Transit',
//       deliveryPartner: 'Mahesh (Rider #28)',
//       partnerId: 'DP003',
//       partnerContact: '+91 9876543212',
//       estimatedTime: '15-20 mins',
//       pickupTime: '10:45 AM',
//       distance: '1.8 km',
//       priority: 'Low',
//       paymentMethod: 'Online',
//       deliveryFee: '₹25',
//       orderTime: '10:30 AM',
//       items: ['Insulin', 'Test Strips', 'Syringes'],
//       instructions: 'Handle with care'
//     },
//     {
//       id: 'DEL1004',
//       orderId: 'ORD1004',
//       customer: 'Anjali Sharma',
//       address: '321 Jayanagar, Bangalore',
//       amount: '₹1,230',
//       status: 'Pending',
//       deliveryPartner: 'Not Assigned',
//       partnerId: '',
//       partnerContact: '',
//       estimatedTime: '45-60 mins',
//       pickupTime: 'Pending',
//       distance: '4.5 km',
//       priority: 'High',
//       paymentMethod: 'Online',
//       deliveryFee: '₹50',
//       orderTime: '11:45 AM',
//       items: ['Pain Relief Spray', 'Ointment'],
//       instructions: 'Deliver to reception'
//     },
//     {
//       id: 'DEL1005',
//       orderId: 'ORD1005',
//       customer: 'Karthik Reddy',
//       address: '654 Whitefield, Bangalore',
//       amount: '₹3,150',
//       status: 'Delivered',
//       deliveryPartner: 'Anil (Rider #51)',
//       partnerId: 'DP004',
//       partnerContact: '+91 9876543213',
//       estimatedTime: 'Delivered',
//       pickupTime: '9:30 AM',
//       deliveredTime: '10:15 AM',
//       distance: '5.2 km',
//       priority: 'Medium',
//       paymentMethod: 'Cash',
//       deliveryFee: '₹60',
//       orderTime: '9:00 AM',
//       items: ['Medical Equipment', 'Supplements'],
//       instructions: 'Signed delivery required'
//     },
//   ]);

//   // Delivery Partners Data
//   const [deliveryPartners, setDeliveryPartners] = useState([
//     {
//       id: 'DP001',
//       name: 'Ramesh Kumar',
//       phone: '+91 9876543210',
//       vehicleType: 'Bike',
//       vehicleNumber: 'KA-01-AB-1234',
//       rating: 4.8,
//       totalDeliveries: 245,
//       status: 'Active',
//       earnings: '₹12,450',
//       todayDeliveries: 8,
//       location: 'Near MG Road',
//       joinDate: '2023-01-15',
//       email: 'ramesh@example.com',
//       address: '123 MG Road, Bangalore'
//     },
//     {
//       id: 'DP002',
//       name: 'Suresh Patel',
//       phone: '+91 9876543211',
//       vehicleType: 'Bike',
//       vehicleNumber: 'KA-02-CD-5678',
//       rating: 4.5,
//       totalDeliveries: 189,
//       status: 'Active',
//       earnings: '₹9,850',
//       todayDeliveries: 6,
//       location: 'Koramangala',
//       joinDate: '2023-03-20',
//       email: 'suresh@example.com',
//       address: '456 Koramangala, Bangalore'
//     },
//     {
//       id: 'DP003',
//       name: 'Mahesh Singh',
//       phone: '+91 9876543212',
//       vehicleType: 'Scooter',
//       vehicleNumber: 'KA-03-EF-9012',
//       rating: 4.9,
//       totalDeliveries: 312,
//       status: 'Active',
//       earnings: '₹16,780',
//       todayDeliveries: 10,
//       location: 'Indiranagar',
//       joinDate: '2022-11-05',
//       email: 'mahesh@example.com',
//       address: '789 Indiranagar, Bangalore'
//     },
//     {
//       id: 'DP004',
//       name: 'Anil Sharma',
//       phone: '+91 9876543213',
//       vehicleType: 'Bike',
//       vehicleNumber: 'KA-04-GH-3456',
//       rating: 4.3,
//       totalDeliveries: 156,
//       status: 'On Leave',
//       earnings: '₹8,120',
//       todayDeliveries: 0,
//       location: 'Whitefield',
//       joinDate: '2023-05-12',
//       email: 'anil@example.com',
//       address: '654 Whitefield, Bangalore'
//     },
//     {
//       id: 'DP005',
//       name: 'Vijay Reddy',
//       phone: '+91 9876543214',
//       vehicleType: 'Bike',
//       vehicleNumber: 'KA-05-IJ-7890',
//       rating: 4.7,
//       totalDeliveries: 278,
//       status: 'Active',
//       earnings: '₹14,560',
//       todayDeliveries: 9,
//       location: 'Jayanagar',
//       joinDate: '2023-02-28',
//       email: 'vijay@example.com',
//       address: '321 Jayanagar, Bangalore'
//     },
//   ]);

//   // Payment History Data
//   const [paymentHistory, setPaymentHistory] = useState([
//     {
//       id: 'PAY001',
//       partnerId: 'DP001',
//       partnerName: 'Ramesh Kumar',
//       period: 'Jan 1-15, 2024',
//       totalDeliveries: 42,
//       amount: '₹6,300',
//       bonus: '₹500',
//       deductions: '₹150',
//       netAmount: '₹6,650',
//       status: 'Paid',
//       paymentDate: '2024-01-16',
//       paymentMethod: 'Bank Transfer',
//       transactionId: 'TXN123456789',
//       bankAccount: 'XXXXXX7890'
//     },
//     {
//       id: 'PAY002',
//       partnerId: 'DP002',
//       partnerName: 'Suresh Patel',
//       period: 'Jan 1-15, 2024',
//       totalDeliveries: 38,
//       amount: '₹5,700',
//       bonus: '₹300',
//       deductions: '₹100',
//       netAmount: '₹5,900',
//       status: 'Paid',
//       paymentDate: '2024-01-16',
//       paymentMethod: 'UPI',
//       transactionId: 'TXN987654321',
//       upiId: 'suresh@upi'
//     },
//     {
//       id: 'PAY003',
//       partnerId: 'DP003',
//       partnerName: 'Mahesh Singh',
//       period: 'Jan 1-15, 2024',
//       totalDeliveries: 51,
//       amount: '₹7,650',
//       bonus: '₹800',
//       deductions: '₹200',
//       netAmount: '₹8,250',
//       status: 'Paid',
//       paymentDate: '2024-01-16',
//       paymentMethod: 'Bank Transfer',
//       transactionId: 'TXN456789123',
//       bankAccount: 'XXXXXX1234'
//     },
//     {
//       id: 'PAY004',
//       partnerId: 'DP001',
//       partnerName: 'Ramesh Kumar',
//       period: 'Dec 16-31, 2023',
//       totalDeliveries: 39,
//       amount: '₹5,850',
//       bonus: '₹400',
//       deductions: '₹120',
//       netAmount: '₹6,130',
//       status: 'Paid',
//       paymentDate: '2024-01-01',
//       paymentMethod: 'UPI',
//       transactionId: 'TXN321654987',
//       upiId: 'ramesh@upi'
//     },
//     {
//       id: 'PAY005',
//       partnerId: 'DP004',
//       partnerName: 'Anil Sharma',
//       period: 'Jan 1-15, 2024',
//       totalDeliveries: 28,
//       amount: '₹4,200',
//       bonus: '₹200',
//       deductions: '₹80',
//       netAmount: '₹4,320',
//       status: 'Pending',
//       paymentDate: 'Pending',
//       paymentMethod: 'Bank Transfer',
//       transactionId: '',
//       bankAccount: 'XXXXXX5678'
//     },
//   ]);

//   // ============================
//   // HANDLER FUNCTIONS
//   // ============================

//   // Handle Add New Partner
//   const handleAddPartner = (partnerData) => {
//     const newPartnerObj = {
//       id: `DP${(deliveryPartners.length + 1).toString().padStart(3, '0')}`,
//       name: partnerData.name,
//       phone: partnerData.phone,
//       vehicleType: partnerData.vehicleType,
//       vehicleNumber: partnerData.vehicleNumber,
//       rating: 5.0,
//       totalDeliveries: 0,
//       status: 'Active',
//       earnings: '₹0',
//       todayDeliveries: 0,
//       location: partnerData.address || 'Not specified',
//       joinDate: new Date().toISOString().split('T')[0],
//       email: partnerData.email || '',
//       address: partnerData.address || ''
//     };

//     setDeliveryPartners([...deliveryPartners, newPartnerObj]);
//     alert('Delivery partner added successfully!');
//   };

//   // Handle Update Partner
//   const handleUpdatePartner = (partnerData) => {
//     setDeliveryPartners(deliveryPartners.map(partner => 
//       partner.id === selectedPartner.id 
//         ? { 
//             ...partner, 
//             ...partnerData,
//             location: partnerData.address || partner.location
//           } 
//         : partner
//     ));
//     setSelectedPartner(null);
//     alert('Delivery partner updated successfully!');
//   };

//   // Handle Delete Partner
//   const handleDeletePartner = (id) => {
//     if (window.confirm('Are you sure you want to delete this delivery partner?')) {
//       setDeliveryPartners(deliveryPartners.filter(partner => partner.id !== id));
//       alert('Delivery partner deleted successfully!');
//     }
//   };

//   // Handle Assign Delivery
//   const handleAssignDelivery = (deliveryId, partnerId) => {
//     const delivery = deliveries.find(d => d.id === deliveryId);
//     const partner = deliveryPartners.find(p => p.id === partnerId);
    
//     if (delivery && partner) {
//       setDeliveries(deliveries.map(d => 
//         d.id === deliveryId 
//           ? { 
//               ...d, 
//               status: 'Assigned',
//               deliveryPartner: `${partner.name} (Rider #${partner.id.slice(2)})`,
//               partnerId: partner.id,
//               partnerContact: partner.phone,
//               pickupTime: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
//             } 
//           : d
//       ));
//       alert(`Delivery ${deliveryId} assigned to ${partner.name}`);
//     }
//   };

//   // Handle Update Delivery Status
//   const handleUpdateStatus = (deliveryId, newStatus) => {
//     if (newStatus === 'Delivered' && !window.confirm('Mark this delivery as delivered?')) {
//       return;
//     }
//     if (newStatus === 'Cancelled' && !window.confirm('Cancel this delivery?')) {
//       return;
//     }

//     setDeliveries(deliveries.map(d => 
//       d.id === deliveryId 
//         ? { 
//             ...d, 
//             status: newStatus,
//             ...(newStatus === 'Delivered' && { 
//               deliveredTime: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
//               estimatedTime: 'Delivered'
//             }),
//             ...(newStatus === 'Cancelled' && {
//               deliveryPartner: 'Cancelled',
//               partnerContact: '',
//               partnerId: ''
//             })
//           } 
//         : d
//     ));
//     alert(`Delivery ${deliveryId} status updated to ${newStatus}`);
//   };

//   // Handle Export Report
//   const handleExportReport = () => {
//     const data = activeTab === 'active' ? deliveries : 
//                  activeTab === 'partners' ? deliveryPartners : 
//                  paymentHistory;
    
//     const headers = Object.keys(data[0] || {});
//     const csvContent = [
//       headers.join(','),
//       ...data.map(row => headers.map(header => JSON.stringify(row[header])).join(','))
//     ].join('\n');
    
//     const blob = new Blob([csvContent], { type: 'text/csv' });
//     const url = window.URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = `delivery_${activeTab}_report_${new Date().toISOString().split('T')[0]}.csv`;
//     a.click();
    
//     alert(`Report exported successfully as ${a.download}`);
//   };

//   // Handle Mark Payment as Paid
//   const handleMarkAsPaid = (paymentId) => {
//     if (window.confirm('Mark this payment as paid?')) {
//       setPaymentHistory(paymentHistory.map(payment => 
//         payment.id === paymentId 
//           ? { 
//               ...payment, 
//               status: 'Paid',
//               paymentDate: new Date().toISOString().split('T')[0],
//               transactionId: `TXN${Date.now().toString().slice(-9)}`
//             } 
//           : payment
//       ));
//       alert(`Payment ${paymentId} marked as paid`);
//     }
//   };

//   // Handle View Payment Details
//   const handleViewPayment = (payment) => {
//     setSelectedPayment(payment);
//     setShowPaymentModal(true);
//   };

//   // Handle Print Receipt
//   const handlePrintReceipt = (payment) => {
//     setSelectedPayment(payment);
//     setShowReceiptModal(true);
//   };

//   // Filter deliveries
//   const filteredDeliveries = deliveries.filter(delivery => {
//     const matchesSearch = 
//       delivery.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       delivery.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       delivery.deliveryPartner.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       delivery.orderId.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesFilter = statusFilter === 'all' || delivery.status === statusFilter;
//     return matchesSearch && matchesFilter;
//   });

//   // Filter delivery partners
//   const filteredPartners = deliveryPartners.filter(partner => 
//     partner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     partner.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     partner.vehicleNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     partner.phone.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // Filter payment history
//   const filteredPayments = paymentHistory.filter(payment =>
//     payment.partnerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     payment.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     payment.partnerId.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // Calculate statistics
//   const stats = {
//     activeDeliveries: deliveries.filter(d => ['Assigned', 'Picked Up', 'In Transit'].includes(d.status)).length,
//     pendingAssignments: deliveries.filter(d => d.status === 'Pending').length,
//     totalDeliveryPartners: deliveryPartners.length,
//     activePartners: deliveryPartners.filter(p => p.status === 'Active').length,
//     todayEarnings: deliveryPartners.reduce((sum, p) => sum + (parseInt(p.earnings.replace('₹', '').replace(',', '')) / 30), 0),
//     avgDeliveryTime: '32 min',
//     onTimeRate: '94%'
//   };

//   // Get status color
//   const getStatusColor = (status) => {
//     switch(status) {
//       case 'Pending': return 'bg-yellow-100 text-yellow-800';
//       case 'Assigned': return 'bg-blue-100 text-blue-800';
//       case 'Picked Up': return 'bg-purple-100 text-purple-800';
//       case 'In Transit': return 'bg-indigo-100 text-indigo-800';
//       case 'Delivered': return 'bg-green-100 text-green-800';
//       case 'Cancelled': return 'bg-red-100 text-red-800';
//       default: return 'bg-gray-100 text-gray-800';
//     }
//   };

//   // Get partner status color
//   const getPartnerStatusColor = (status) => {
//     switch(status) {
//       case 'Active': return 'bg-green-100 text-green-800';
//       case 'On Leave': return 'bg-yellow-100 text-yellow-800';
//       case 'Inactive': return 'bg-red-100 text-red-800';
//       default: return 'bg-gray-100 text-gray-800';
//     }
//   };

//   // Mobile Delivery Card Component
//   const MobileDeliveryCard = ({ delivery }) => (
//     <div className="bg-white p-4 rounded-xl border border-gray-200 mb-3">
//       <div className="flex justify-between items-start mb-3">
//         <div className="flex items-center">
//           <div className="p-2 bg-blue-100 rounded-lg mr-3">
//             <FaTruck className="text-blue-600 text-sm" />
//           </div>
//           <div>
//             <div className="font-bold text-gray-800 text-sm">{delivery.id}</div>
//             <div className="text-xs text-gray-500">Order: {delivery.orderId}</div>
//           </div>
//         </div>
//         <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(delivery.status)}`}>
//           {delivery.status}
//         </span>
//       </div>
      
//       <div className="mb-3">
//         <div className="text-sm font-medium mb-1">{delivery.customer}</div>
//         <div className="text-xs text-gray-600 flex items-start">
//           <FaMapMarkerAlt className="mr-1 mt-0.5 flex-shrink-0" />
//           <span className="line-clamp-1">{delivery.address} ({delivery.distance})</span>
//         </div>
//       </div>
      
//       <div className="grid grid-cols-2 gap-3 mb-3">
//         <div>
//           <div className="text-xs text-gray-500">Amount</div>
//           <div className="font-bold text-sm">{delivery.amount}</div>
//         </div>
//         <div>
//           <div className="text-xs text-gray-500">Delivery Time</div>
//           <div className="font-medium text-sm">{delivery.estimatedTime}</div>
//         </div>
//         <div>
//           <div className="text-xs text-gray-500">Delivery Partner</div>
//           <div className="font-medium text-sm truncate">{delivery.deliveryPartner}</div>
//         </div>
//         <div>
//           <div className="text-xs text-gray-500">Priority</div>
//           <div className={`text-xs px-2 py-0.5 rounded-full ${
//             delivery.priority === 'High' ? 'bg-red-100 text-red-800' :
//             delivery.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
//             'bg-blue-100 text-blue-800'
//           }`}>
//             {delivery.priority}
//           </div>
//         </div>
//       </div>
      
//       <div className="flex justify-between items-center pt-3 border-t border-gray-100">
//         <div className="flex gap-2">
//           {delivery.status === 'Pending' && (
//             <button 
//               onClick={() => {
//                 setSelectedDelivery(delivery);
//                 setShowAssignDeliveryModal(true);
//               }}
//               className="px-3 py-1 text-xs bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//             >
//               Assign
//             </button>
//           )}
//           <button 
//             onClick={() => {
//               setSelectedDelivery(delivery);
//               setShowTrackModal(true);
//             }}
//             className="px-3 py-1 text-xs bg-green-600 text-white rounded-lg hover:bg-green-700"
//           >
//             Track
//           </button>
//           {delivery.partnerContact && (
//             <a 
//               href={`tel:${delivery.partnerContact}`}
//               className="px-3 py-1 text-xs bg-gray-600 text-white rounded-lg hover:bg-gray-700 flex items-center"
//             >
//               <FaPhoneAlt className="mr-1" /> Call
//             </a>
//           )}
//         </div>
//         <div className="text-xs text-gray-500">
//           Ordered: {delivery.orderTime}
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <div className="p-4 md:p-6">
//       {/* Header */}
//       <div className="mb-6 md:mb-8">
//         <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
//           <div>
//             <h1 className="text-xl md:text-2xl font-bold text-gray-800">Delivery Management</h1>
//             <p className="text-gray-600 text-sm md:text-base">Manage deliveries and assign delivery partners</p>
//           </div>
//           <div className="flex gap-2">
//             <button 
//               onClick={() => setShowAddPartnerModal(true)}
//               className="flex items-center gap-2 px-3 md:px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors"
//             >
//               <FaPlus /> Add Partner
//             </button>
//             <button 
//               onClick={handleExportReport}
//               className="flex items-center gap-2 px-3 md:px-4 py-2 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700 transition-colors"
//             >
//               <FaDownload /> Export Report
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Tabs */}
//       <div className="flex mb-6 border-b border-gray-200 overflow-x-auto">
//         <button
//           onClick={() => setActiveTab('active')}
//           className={`flex-shrink-0 px-4 py-3 font-medium border-b-2 whitespace-nowrap transition-colors ${
//             activeTab === 'active' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'
//           }`}
//         >
//           Active Deliveries
//         </button>
//         <button
//           onClick={() => setActiveTab('partners')}
//           className={`flex-shrink-0 px-4 py-3 font-medium border-b-2 whitespace-nowrap transition-colors ${
//             activeTab === 'partners' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'
//           }`}
//         >
//           Delivery Partners
//         </button>
//         <button
//           onClick={() => setActiveTab('history')}
//           className={`flex-shrink-0 px-4 py-3 font-medium border-b-2 whitespace-nowrap transition-colors ${
//             activeTab === 'history' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'
//           }`}
//         >
//           Payment History
//         </button>
//       </div>

//       {activeTab === 'active' && (
//         <>
//           {/* Stats */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-6">
//             <div className="bg-white p-3 md:p-4 rounded-xl border border-gray-200 hover:shadow-sm transition-shadow">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-gray-500 text-xs md:text-sm">Active Deliveries</p>
//                   <h3 className="text-xl md:text-2xl font-bold text-blue-600">{stats.activeDeliveries}</h3>
//                 </div>
//                 <div className="p-2 md:p-3 bg-blue-100 rounded-lg">
//                   <FaTruck className="text-lg md:text-xl text-blue-600" />
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white p-3 md:p-4 rounded-xl border border-gray-200 hover:shadow-sm transition-shadow">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-gray-500 text-xs md:text-sm">Pending Assignments</p>
//                   <h3 className="text-xl md:text-2xl font-bold text-yellow-600">{stats.pendingAssignments}</h3>
//                 </div>
//                 <div className="p-2 md:p-3 bg-yellow-100 rounded-lg">
//                   <FaExclamationCircle className="text-lg md:text-xl text-yellow-600" />
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white p-3 md:p-4 rounded-xl border border-gray-200 hover:shadow-sm transition-shadow">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-gray-500 text-xs md:text-sm">Avg Delivery Time</p>
//                   <h3 className="text-xl md:text-2xl font-bold text-green-600">{stats.avgDeliveryTime}</h3>
//                 </div>
//                 <div className="p-2 md:p-3 bg-green-100 rounded-lg">
//                   <FaClock className="text-lg md:text-xl text-green-600" />
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white p-3 md:p-4 rounded-xl border border-gray-200 hover:shadow-sm transition-shadow">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-gray-500 text-xs md:text-sm">On-time Rate</p>
//                   <h3 className="text-xl md:text-2xl font-bold text-purple-600">{stats.onTimeRate}</h3>
//                 </div>
//                 <div className="p-2 md:p-3 bg-purple-100 rounded-lg">
//                   <FaCheckCircle className="text-lg md:text-xl text-purple-600" />
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Search and Filter */}
//           <div className="bg-white p-4 rounded-xl border border-gray-200 mb-6">
//             <div className="flex flex-col md:flex-row gap-3">
//               <div className="flex-1">
//                 <div className="relative">
//                   <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
//                   <input
//                     type="text"
//                     placeholder="Search deliveries..."
//                     value={searchTerm}
//                     onChange={(e) => setSearchTerm(e.target.value)}
//                     className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                   />
//                 </div>
//               </div>
              
//               <div className="flex gap-2">
//                 <div className="relative flex-1 min-w-[120px]">
//                   <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
//                   <select
//                     value={statusFilter}
//                     onChange={(e) => setStatusFilter(e.target.value)}
//                     className="w-full pl-10 pr-8 py-2 text-sm border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                   >
//                     <option value="all">All Status</option>
//                     <option value="Pending">Pending</option>
//                     <option value="Assigned">Assigned</option>
//                     <option value="Picked Up">Picked Up</option>
//                     <option value="In Transit">In Transit</option>
//                     <option value="Delivered">Delivered</option>
//                     <option value="Cancelled">Cancelled</option>
//                   </select>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Deliveries List */}
//           <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
//             <div className="p-4 border-b border-gray-200">
//               <h2 className="text-lg font-bold text-gray-800">Active Deliveries ({filteredDeliveries.length})</h2>
//             </div>
            
//             {/* Mobile View: Cards */}
//             <div className="md:hidden p-4">
//               {filteredDeliveries.length === 0 ? (
//                 <div className="text-center py-8">
//                   <div className="text-gray-400 mb-2">No deliveries found</div>
//                   <div className="text-gray-500 text-sm">Try adjusting your search or filter</div>
//                 </div>
//               ) : (
//                 filteredDeliveries.map((delivery) => (
//                   <MobileDeliveryCard key={delivery.id} delivery={delivery} />
//                 ))
//               )}
//             </div>

//             {/* Desktop View: Table */}
//             <div className="hidden md:block overflow-x-auto">
//               <table className="min-w-full divide-y divide-gray-200">
//                 <thead className="bg-gray-50">
//                   <tr>
//                     <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Delivery ID</th>
//                     <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Customer</th>
//                     <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Amount</th>
//                     <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Status</th>
//                     <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Delivery Partner</th>
//                     <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody className="divide-y divide-gray-200">
//                   {filteredDeliveries.map((delivery) => (
//                     <tr key={delivery.id} className="hover:bg-gray-50 text-center">
//                       <td className="px-3 py-2">
//                         <div className="font-medium text-sm">{delivery.id}</div>
//                         <div className="text-xs text-gray-500">{delivery.orderId}</div>
//                       </td>
//                       <td className="px-3 py-2">
//                         <div className="font-medium text-sm">{delivery.customer}</div>
//                         <div className="text-xs text-gray-500">{delivery.address}</div>
//                         <div className="text-xs text-gray-500">Distance: {delivery.distance}</div>
//                       </td>
//                       <td className="px-3 py-2">
//                         <div className="font-bold text-sm">{delivery.amount}</div>
//                         <div className="text-xs text-gray-500">Fee: {delivery.deliveryFee}</div>
//                       </td>
//                       <td className="px-3 py-2">
//                         <div className="flex flex-col gap-1">
//                           <span className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(delivery.status)}`}>
//                             {delivery.status}
//                           </span>
//                           <div className="text-xs text-gray-600">ETA: {delivery.estimatedTime}</div>
//                           <div className={`text-xs px-2 py-0.5 rounded-full ${
//                             delivery.priority === 'High' ? 'bg-red-100 text-red-800' :
//                             delivery.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
//                             'bg-blue-100 text-blue-800'
//                           }`}>
//                             {delivery.priority} Priority
//                           </div>
//                         </div>
//                       </td>
//                       <td className="px-3 py-2">
//                         <div className="text-sm font-medium">{delivery.deliveryPartner}</div>
//                         {delivery.partnerContact && (
//                           <div className="text-xs text-gray-600">{delivery.partnerContact}</div>
//                         )}
//                         {!delivery.partnerContact && delivery.status === 'Pending' && (
//                           <div className="text-xs text-red-600">Not assigned</div>
//                         )}
//                       </td>
//                       <td className="px-3 py-2">
//                         <div className="flex flex-col gap-2 items-center">
//                           <div className="flex gap-2">
//                             <button 
//                               onClick={() => {
//                                 setSelectedDelivery(delivery);
//                                 setShowTrackModal(true);
//                               }}
//                               className="px-3 py-1 text-xs bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center gap-1 transition-colors"
//                             >
//                               <FaEye /> Track
//                             </button>
//                             {delivery.partnerContact && (
//                               <a 
//                                 href={`tel:${delivery.partnerContact}`}
//                                 className="px-3 py-1 text-xs bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-1 transition-colors"
//                               >
//                                 <FaPhoneAlt /> Call
//                               </a>
//                             )}
//                           </div>
                          
//                           {delivery.status === 'Pending' && (
//                             <button 
//                               onClick={() => {
//                                 setSelectedDelivery(delivery);
//                                 setShowAssignDeliveryModal(true);
//                               }}
//                               className="px-3 py-1 text-xs bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
//                             >
//                               Assign Partner
//                             </button>
//                           )}
                          
//                           <div className="flex gap-2">
//                             {delivery.status !== 'Delivered' && delivery.status !== 'Cancelled' && (
//                               <button 
//                                 onClick={() => handleUpdateStatus(delivery.id, 'Delivered')}
//                                 className="px-3 py-1 text-xs bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
//                               >
//                                 Mark Delivered
//                               </button>
//                             )}
//                             {delivery.status !== 'Cancelled' && (
//                               <button 
//                                 onClick={() => handleUpdateStatus(delivery.id, 'Cancelled')}
//                                 className="px-3 py-1 text-xs bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
//                               >
//                                 Cancel
//                               </button>
//                             )}
//                           </div>
//                         </div>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
              
//               {filteredDeliveries.length === 0 && (
//                 <div className="text-center py-8">
//                   <div className="text-gray-400 mb-2">No deliveries found</div>
//                   <div className="text-gray-500 text-sm">Try adjusting your search or filter</div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </>
//       )}

//       {activeTab === 'partners' && (
//         <>
//           {/* Partner Stats */}
//           <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 mb-6">
//             <div className="bg-white p-3 md:p-4 rounded-xl border border-gray-200 hover:shadow-sm transition-shadow">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-gray-500 text-xs md:text-sm">Total Partners</p>
//                   <h3 className="text-xl md:text-2xl font-bold text-blue-600">{stats.totalDeliveryPartners}</h3>
//                 </div>
//                 <div className="p-2 md:p-3 bg-blue-100 rounded-lg">
//                   <FaUser className="text-lg md:text-xl text-blue-600" />
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white p-3 md:p-4 rounded-xl border border-gray-200 hover:shadow-sm transition-shadow">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-gray-500 text-xs md:text-sm">Active Partners</p>
//                   <h3 className="text-xl md:text-2xl font-bold text-green-600">{stats.activePartners}</h3>
//                 </div>
//                 <div className="p-2 md:p-3 bg-green-100 rounded-lg">
//                   <FaMotorcycle className="text-lg md:text-xl text-green-600" />
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white p-3 md:p-4 rounded-xl border border-gray-200 hover:shadow-sm transition-shadow">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-gray-500 text-xs md:text-sm">Today's Earnings</p>
//                   <h3 className="text-xl md:text-2xl font-bold text-purple-600">₹{stats.todayEarnings.toFixed(2)}</h3>
//                 </div>
//                 <div className="p-2 md:p-3 bg-purple-100 rounded-lg">
//                   <FaRupeeSign className="text-lg md:text-xl text-purple-600" />
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Search Bar */}
//           <div className="bg-white p-4 rounded-xl border border-gray-200 mb-6">
//             <div className="relative">
//               <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
//               <input
//                 type="text"
//                 placeholder="Search delivery partners..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//               />
//             </div>
//           </div>

//           {/* Partners List */}
//           <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
//             <div className="p-4 border-b border-gray-200">
//               <h2 className="text-lg font-bold text-gray-800">Delivery Partners ({filteredPartners.length})</h2>
//             </div>
            
//             <div className="p-4">
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                 {filteredPartners.map((partner) => (
//                   <div key={partner.id} className="bg-gray-50 border border-gray-200 rounded-xl p-4 hover:border-blue-300 hover:shadow-sm transition-all">
//                     <div className="flex items-start justify-between mb-3">
//                       <div className="flex items-center">
//                         <div className="p-2 bg-blue-100 rounded-lg mr-3">
//                           <FaUser className="text-blue-600" />
//                         </div>
//                         <div>
//                           <div className="font-bold text-gray-800">{partner.name}</div>
//                           <div className="text-sm text-gray-600">{partner.id}</div>
//                         </div>
//                       </div>
//                       <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPartnerStatusColor(partner.status)}`}>
//                         {partner.status}
//                       </span>
//                     </div>
                    
//                     <div className="space-y-2 mb-4">
//                       <div className="flex items-center text-sm text-gray-600">
//                         <FaPhone className="mr-2 text-gray-400" />
//                         {partner.phone}
//                       </div>
//                       <div className="flex items-center text-sm text-gray-600">
//                         <FaMotorcycle className="mr-2 text-gray-400" />
//                         {partner.vehicleType} • {partner.vehicleNumber}
//                       </div>
//                       <div className="flex items-center text-sm text-gray-600">
//                         <FaMapMarkerAlt className="mr-2 text-gray-400" />
//                         {partner.location}
//                       </div>
//                     </div>
                    
//                     <div className="grid grid-cols-2 gap-3 mb-4">
//                       <div className="text-center bg-white p-2 rounded-lg border">
//                         <div className="font-bold text-lg text-blue-600">{partner.rating}</div>
//                         <div className="text-xs text-gray-600">Rating</div>
//                         <div className="flex justify-center mt-1">
//                           <FaStar className="text-yellow-400 text-xs" />
//                         </div>
//                       </div>
//                       <div className="text-center bg-white p-2 rounded-lg border">
//                         <div className="font-bold text-lg text-green-600">{partner.todayDeliveries}</div>
//                         <div className="text-xs text-gray-600">Today</div>
//                         <div className="text-xs text-gray-500">Total: {partner.totalDeliveries}</div>
//                       </div>
//                     </div>
                    
//                     <div className="mb-4 p-3 bg-white rounded-lg border">
//                       <div className="flex justify-between items-center">
//                         <div>
//                           <div className="text-xs text-gray-500">Earnings</div>
//                           <div className="font-bold text-green-600">{partner.earnings}</div>
//                         </div>
//                         <div>
//                           <div className="text-xs text-gray-500">Joined</div>
//                           <div className="text-sm">{partner.joinDate}</div>
//                         </div>
//                       </div>
//                     </div>
                    
//                     <div className="flex gap-2">
//                       <a 
//                         href={`tel:${partner.phone}`}
//                         className="flex-1 px-3 py-2 bg-blue-600 text-white text-xs rounded-lg hover:bg-blue-700 flex items-center justify-center gap-1 transition-colors"
//                       >
//                         <FaPhoneAlt /> Call
//                       </a>
//                       <button 
//                         onClick={() => {
//                           setSelectedPartner(partner);
//                           setShowEditPartnerModal(true);
//                         }}
//                         className="flex-1 px-3 py-2 border border-blue-600 text-blue-600 text-xs rounded-lg hover:bg-blue-50 flex items-center justify-center gap-1 transition-colors"
//                       >
//                         <FaEdit /> Edit
//                       </button>
//                       <button 
//                         onClick={() => handleDeletePartner(partner.id)}
//                         className="flex-1 px-3 py-2 border border-red-600 text-red-600 text-xs rounded-lg hover:bg-red-50 flex items-center justify-center gap-1 transition-colors"
//                       >
//                         <FaTrash /> Remove
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
              
//               {filteredPartners.length === 0 && (
//                 <div className="text-center py-8">
//                   <div className="text-gray-400 mb-2">No delivery partners found</div>
//                   <div className="text-gray-500 text-sm">Try adjusting your search</div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </>
//       )}

//       {activeTab === 'history' && (
//         <>
//           {/* Search and Filter */}
//           <div className="bg-white p-4 rounded-xl border border-gray-200 mb-6">
//             <div className="flex flex-col md:flex-row gap-3">
//               <div className="flex-1">
//                 <div className="relative">
//                   <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
//                   <input
//                     type="text"
//                     placeholder="Search payment history..."
//                     value={searchTerm}
//                     onChange={(e) => setSearchTerm(e.target.value)}
//                     className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                   />
//                 </div>
//               </div>
              
//               <div className="flex gap-2">
//                 <select className="px-4 py-2 border border-gray-300 text-sm rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
//                   <option>This Month</option>
//                   <option>Last Month</option>
//                   <option>Last 3 Months</option>
//                   <option>Custom Range</option>
//                 </select>
//                 <button 
//                   onClick={handleExportReport}
//                   className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 flex items-center gap-2 transition-colors"
//                 >
//                   <FaDownload /> Export
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Payment History */}
//           <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
//             <div className="p-4 border-b border-gray-200">
//               <h2 className="text-lg font-bold text-gray-800">Payment History</h2>
//             </div>
            
//             {/* Mobile View: Cards */}
//             <div className="md:hidden p-4">
//               {filteredPayments.length === 0 ? (
//                 <div className="text-center py-8">
//                   <div className="text-gray-400 mb-2">No payment records found</div>
//                   <div className="text-gray-500 text-sm">Try adjusting your search</div>
//                 </div>
//               ) : (
//                 filteredPayments.map((payment) => (
//                   <div key={payment.id} className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-3">
//                     <div className="flex justify-between items-start mb-3">
//                       <div>
//                         <div className="font-bold text-gray-800">{payment.partnerName}</div>
//                         <div className="text-sm text-gray-600">{payment.id} • {payment.partnerId}</div>
//                       </div>
//                       <span className={`px-2 py-1 text-xs font-medium rounded-full ${
//                         payment.status === 'Paid' ? 'bg-green-100 text-green-800' :
//                         payment.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
//                         'bg-gray-100 text-gray-800'
//                       }`}>
//                         {payment.status}
//                       </span>
//                     </div>
                    
//                     <div className="grid grid-cols-2 gap-3 mb-3">
//                       <div>
//                         <div className="text-xs text-gray-500">Period</div>
//                         <div className="font-medium text-sm">{payment.period}</div>
//                       </div>
//                       <div>
//                         <div className="text-xs text-gray-500">Deliveries</div>
//                         <div className="font-medium text-sm">{payment.totalDeliveries}</div>
//                       </div>
//                       <div>
//                         <div className="text-xs text-gray-500">Amount</div>
//                         <div className="font-bold text-sm text-green-600">{payment.netAmount}</div>
//                       </div>
//                       <div>
//                         <div className="text-xs text-gray-500">Method</div>
//                         <div className="font-medium text-sm">{payment.paymentMethod}</div>
//                       </div>
//                     </div>
                    
//                     <div className="pt-3 border-t border-gray-200">
//                       <div className="flex gap-2">
//                         <button 
//                           onClick={() => handleViewPayment(payment)}
//                           className="flex-1 px-3 py-2 text-xs bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center justify-center gap-1 transition-colors"
//                         >
//                           <FaEye /> View
//                         </button>
//                         {payment.status === 'Pending' && (
//                           <button 
//                             onClick={() => handleMarkAsPaid(payment.id)}
//                             className="flex-1 px-3 py-2 text-xs bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
//                           >
//                             Mark Paid
//                           </button>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 ))
//               )}
//             </div>

//             {/* Desktop View: Table */}
//             <div className="hidden md:block overflow-x-auto">
//               <table className="min-w-full divide-y divide-gray-200">
//                 <thead className="bg-gray-50">
//                   <tr>
//                     <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Payment ID</th>
//                     <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Partner</th>
//                     <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Period</th>
//                     <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Deliveries</th>
//                     <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Amount Details</th>
//                     <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Net Amount</th>
//                     <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Status</th>
//                     <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Payment Date</th>
//                     <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody className="divide-y divide-gray-200">
//                   {filteredPayments.map((payment) => (
//                     <tr key={payment.id} className="hover:bg-gray-50 text-center">
//                       <td className="px-3 py-2">
//                         <div className="font-medium text-sm">{payment.id}</div>
//                       </td>
//                       <td className="px-3 py-2">
//                         <div className="font-medium text-sm">{payment.partnerName}</div>
//                         <div className="text-xs text-gray-500">{payment.partnerId}</div>
//                       </td>
//                       <td className="px-3 py-2">
//                         <div className="text-sm">{payment.period}</div>
//                       </td>
//                       <td className="px-3 py-2">
//                         <div className="font-medium text-sm">{payment.totalDeliveries}</div>
//                       </td>
//                       <td className="px-3 py-2">
//                         <div className="text-sm">Base: {payment.amount}</div>
//                         <div className="text-xs text-gray-600">
//                           Bonus: {payment.bonus} • Deductions: {payment.deductions}
//                         </div>
//                       </td>
//                       <td className="px-3 py-2">
//                         <div className="font-bold text-lg text-green-600">{payment.netAmount}</div>
//                       </td>
//                       <td className="px-3 py-2">
//                         <span className={`px-3 py-1 text-xs font-medium rounded-full ${
//                           payment.status === 'Paid' ? 'bg-green-100 text-green-800' :
//                           payment.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
//                           'bg-gray-100 text-gray-800'
//                         }`}>
//                           {payment.status}
//                         </span>
//                       </td>
//                       <td className="px-3 py-2">
//                         <div className="text-sm">{payment.paymentDate}</div>
//                         <div className="text-xs text-gray-600">{payment.paymentMethod}</div>
//                       </td>
//                       <td className="px-3 py-4">
//                         <div className="flex gap-2 justify-center">
//                           <button 
//                             onClick={() => handleViewPayment(payment)}
//                             className="px-3 py-1 text-xs bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-1 transition-colors"
//                           >
//                             <FaEye /> View
//                           </button>
//                           {payment.status === 'Pending' && (
//                             <button 
//                               onClick={() => handleMarkAsPaid(payment.id)}
//                               className="px-3 py-1 text-xs bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
//                             >
//                               Mark Paid
//                             </button>
//                           )}
//                           <button 
//                             onClick={() => handlePrintReceipt(payment)}
//                             className="px-3 py-1 text-xs border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-1 transition-colors"
//                           >
//                             <FaDownload /> Receipt
//                           </button>
//                         </div>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
              
//               {filteredPayments.length === 0 && (
//                 <div className="text-center py-8">
//                   <div className="text-gray-400 mb-2">No payment records found</div>
//                   <div className="text-gray-500 text-sm">Try adjusting your search</div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </>
//       )}

//       {/* Modals */}
//       <AddPartnerModal
//         isOpen={showAddPartnerModal}
//         onClose={() => setShowAddPartnerModal(false)}
//         onSubmit={handleAddPartner}
//       />

//       <EditPartnerModal
//         isOpen={showEditPartnerModal}
//         onClose={() => {
//           setShowEditPartnerModal(false);
//           setSelectedPartner(null);
//         }}
//         partner={selectedPartner}
//         onSubmit={handleUpdatePartner}
//       />

//       <AssignDeliveryModal
//         isOpen={showAssignDeliveryModal}
//         onClose={() => {
//           setShowAssignDeliveryModal(false);
//           setSelectedDelivery(null);
//         }}
//         delivery={selectedDelivery}
//         partners={deliveryPartners}
//         onAssign={handleAssignDelivery}
//       />

//       <TrackDeliveryModal
//         isOpen={showTrackModal}
//         onClose={() => {
//           setShowTrackModal(false);
//           setSelectedDelivery(null);
//         }}
//         delivery={selectedDelivery}
//       />

//       <PaymentModal
//         isOpen={showPaymentModal}
//         onClose={() => {
//           setShowPaymentModal(false);
//           setSelectedPayment(null);
//         }}
//         payment={selectedPayment}
//         onPrintReceipt={handlePrintReceipt}
//       />

//       <ReceiptModal
//         isOpen={showReceiptModal}
//         onClose={() => {
//           setShowReceiptModal(false);
//           setSelectedPayment(null);
//         }}
//         payment={selectedPayment}
//       />
//     </div>
//   );
// };

// export default Delivery;



















































































// src/pages/pharmacy/Delivery.jsx
import React, { useState, useCallback, useMemo } from 'react';
import { 
  FaSearch, FaFilter, FaPlus, FaDownload, 
  FaTruck, FaExclamationCircle, FaClock, FaCheckCircle,
  FaUser, FaMotorcycle, FaRupeeSign, FaCalendar
} from 'react-icons/fa';

// Import components
import DataTable from '../../../shared/components/tables/DataTable';
import DeliveryTableRow from '../tables/DeliveryTableRow';
import PaymentTableRow from '../tables/PaymentTableRow';
import MobileDeliveryCard from '../cards/MobileDeliveryCard';
import MobilePaymentCard from '../cards/MobilePaymentCard';
import PartnerCard from '../cards/PartnerCard';
import AddPartnerModal from '../Modal/AddPartnerModal';
import AssignDeliveryModal from '../Modal/AssignDeliveryModal';
import TrackDeliveryModal from '../Modal/TrackDeliveryModal';
import PaymentModal from '../Modal/PaymentModal';
import ReceiptModal from '../Modal/ReceiptModal';

// Main Component
const Delivery = () => {
  // State management
  const [activeTab, setActiveTab] = useState('active');
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  
  // Modal states
  const [showAddPartnerModal, setShowAddPartnerModal] = useState(false);
  const [showAssignDeliveryModal, setShowAssignDeliveryModal] = useState(false);
  const [showTrackModal, setShowTrackModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showReceiptModal, setShowReceiptModal] = useState(false);
  
  // Selection states
  const [selectedDelivery, setSelectedDelivery] = useState(null);
  const [editingPartner, setEditingPartner] = useState(null);
  const [selectedPayment, setSelectedPayment] = useState(null);

  // Deliveries Data
  const [deliveries, setDeliveries] = useState([
    {
      id: 'DEL1001',
      orderId: 'ORD1001',
      customer: 'Rajesh Kumar',
      address: '123 MG Road, Bangalore',
      amount: '₹1,850',
      status: 'Assigned',
      deliveryPartner: 'Ramesh (Rider #45)',
      partnerId: 'DP001',
      partnerContact: '+91 9876543210',
      estimatedTime: '30-45 mins',
      pickupTime: '11:30 AM',
      distance: '3.2 km',
      priority: 'High',
      paymentMethod: 'Online',
      deliveryFee: '₹40',
      orderTime: '11:00 AM',
      items: ['Paracetamol', 'Cough Syrup', 'Vitamin C'],
      instructions: 'Ring bell twice, leave at door'
    },
    {
      id: 'DEL1002',
      orderId: 'ORD1002',
      customer: 'Sunita Patel',
      address: '456 Koramangala, Bangalore',
      amount: '₹620',
      status: 'Picked Up',
      deliveryPartner: 'Suresh (Rider #32)',
      partnerId: 'DP002',
      partnerContact: '+91 9876543211',
      estimatedTime: '20-30 mins',
      pickupTime: '11:15 AM',
      distance: '2.5 km',
      priority: 'Medium',
      paymentMethod: 'Cash',
      deliveryFee: '₹30',
      orderTime: '10:45 AM',
      items: ['Amoxicillin', 'Bandages'],
      instructions: 'Call before arrival'
    },
    {
      id: 'DEL1003',
      orderId: 'ORD1003',
      customer: 'Vikram Singh',
      address: '789 Indiranagar, Bangalore',
      amount: '₹2,450',
      status: 'In Transit',
      deliveryPartner: 'Mahesh (Rider #28)',
      partnerId: 'DP003',
      partnerContact: '+91 9876543212',
      estimatedTime: '15-20 mins',
      pickupTime: '10:45 AM',
      distance: '1.8 km',
      priority: 'Low',
      paymentMethod: 'Online',
      deliveryFee: '₹25',
      orderTime: '10:30 AM',
      items: ['Insulin', 'Test Strips', 'Syringes'],
      instructions: 'Handle with care'
    },
    {
      id: 'DEL1004',
      orderId: 'ORD1004',
      customer: 'Anjali Sharma',
      address: '321 Jayanagar, Bangalore',
      amount: '₹1,230',
      status: 'Pending',
      deliveryPartner: 'Not Assigned',
      partnerId: '',
      partnerContact: '',
      estimatedTime: '45-60 mins',
      pickupTime: 'Pending',
      distance: '4.5 km',
      priority: 'High',
      paymentMethod: 'Online',
      deliveryFee: '₹50',
      orderTime: '11:45 AM',
      items: ['Pain Relief Spray', 'Ointment'],
      instructions: 'Deliver to reception'
    },
    {
      id: 'DEL1005',
      orderId: 'ORD1005',
      customer: 'Karthik Reddy',
      address: '654 Whitefield, Bangalore',
      amount: '₹3,150',
      status: 'Delivered',
      deliveryPartner: 'Anil (Rider #51)',
      partnerId: 'DP004',
      partnerContact: '+91 9876543213',
      estimatedTime: 'Delivered',
      pickupTime: '9:30 AM',
      deliveredTime: '10:15 AM',
      distance: '5.2 km',
      priority: 'Medium',
      paymentMethod: 'Cash',
      deliveryFee: '₹60',
      orderTime: '9:00 AM',
      items: ['Medical Equipment', 'Supplements'],
      instructions: 'Signed delivery required'
    },
  ]);

  // Delivery Partners Data
  const [deliveryPartners, setDeliveryPartners] = useState([
    {
      id: 'DP001',
      name: 'Ramesh Kumar',
      phone: '+91 9876543210',
      vehicleType: 'Bike',
      vehicleNumber: 'KA-01-AB-1234',
      rating: 4.8,
      totalDeliveries: 245,
      status: 'Active',
      earnings: '₹12,450',
      todayDeliveries: 8,
      location: 'Near MG Road',
      joinDate: '2023-01-15',
      email: 'ramesh@example.com',
      address: '123 MG Road, Bangalore'
    },
    {
      id: 'DP002',
      name: 'Suresh Patel',
      phone: '+91 9876543211',
      vehicleType: 'Bike',
      vehicleNumber: 'KA-02-CD-5678',
      rating: 4.5,
      totalDeliveries: 189,
      status: 'Active',
      earnings: '₹9,850',
      todayDeliveries: 6,
      location: 'Koramangala',
      joinDate: '2023-03-20',
      email: 'suresh@example.com',
      address: '456 Koramangala, Bangalore'
    },
    {
      id: 'DP003',
      name: 'Mahesh Singh',
      phone: '+91 9876543212',
      vehicleType: 'Scooter',
      vehicleNumber: 'KA-03-EF-9012',
      rating: 4.9,
      totalDeliveries: 312,
      status: 'Active',
      earnings: '₹16,780',
      todayDeliveries: 10,
      location: 'Indiranagar',
      joinDate: '2022-11-05',
      email: 'mahesh@example.com',
      address: '789 Indiranagar, Bangalore'
    },
    {
      id: 'DP004',
      name: 'Anil Sharma',
      phone: '+91 9876543213',
      vehicleType: 'Bike',
      vehicleNumber: 'KA-04-GH-3456',
      rating: 4.3,
      totalDeliveries: 156,
      status: 'On Leave',
      earnings: '₹8,120',
      todayDeliveries: 0,
      location: 'Whitefield',
      joinDate: '2023-05-12',
      email: 'anil@example.com',
      address: '654 Whitefield, Bangalore'
    },
    {
      id: 'DP005',
      name: 'Vijay Reddy',
      phone: '+91 9876543214',
      vehicleType: 'Bike',
      vehicleNumber: 'KA-05-IJ-7890',
      rating: 4.7,
      totalDeliveries: 278,
      status: 'Active',
      earnings: '₹14,560',
      todayDeliveries: 9,
      location: 'Jayanagar',
      joinDate: '2023-02-28',
      email: 'vijay@example.com',
      address: '321 Jayanagar, Bangalore'
    },
  ]);

  // Payment History Data
  const [paymentHistory, setPaymentHistory] = useState([
    {
      id: 'PAY001',
      partnerId: 'DP001',
      partnerName: 'Ramesh Kumar',
      period: 'Jan 1-15, 2024',
      totalDeliveries: 42,
      amount: '₹6,300',
      bonus: '₹500',
      deductions: '₹150',
      netAmount: '₹6,650',
      status: 'Paid',
      paymentDate: '2024-01-16',
      paymentMethod: 'Bank Transfer',
      transactionId: 'TXN123456789',
      bankAccount: 'XXXXXX7890'
    },
    {
      id: 'PAY002',
      partnerId: 'DP002',
      partnerName: 'Suresh Patel',
      period: 'Jan 1-15, 2024',
      totalDeliveries: 38,
      amount: '₹5,700',
      bonus: '₹300',
      deductions: '₹100',
      netAmount: '₹5,900',
      status: 'Paid',
      paymentDate: '2024-01-16',
      paymentMethod: 'UPI',
      transactionId: 'TXN987654321',
      upiId: 'suresh@upi'
    },
    {
      id: 'PAY003',
      partnerId: 'DP003',
      partnerName: 'Mahesh Singh',
      period: 'Jan 1-15, 2024',
      totalDeliveries: 51,
      amount: '₹7,650',
      bonus: '₹800',
      deductions: '₹200',
      netAmount: '₹8,250',
      status: 'Paid',
      paymentDate: '2024-01-16',
      paymentMethod: 'Bank Transfer',
      transactionId: 'TXN456789123',
      bankAccount: 'XXXXXX1234'
    },
    {
      id: 'PAY004',
      partnerId: 'DP001',
      partnerName: 'Ramesh Kumar',
      period: 'Dec 16-31, 2023',
      totalDeliveries: 39,
      amount: '₹5,850',
      bonus: '₹400',
      deductions: '₹120',
      netAmount: '₹6,130',
      status: 'Paid',
      paymentDate: '2024-01-01',
      paymentMethod: 'UPI',
      transactionId: 'TXN321654987',
      upiId: 'ramesh@upi'
    },
    {
      id: 'PAY005',
      partnerId: 'DP004',
      partnerName: 'Anil Sharma',
      period: 'Jan 1-15, 2024',
      totalDeliveries: 28,
      amount: '₹4,200',
      bonus: '₹200',
      deductions: '₹80',
      netAmount: '₹4,320',
      status: 'Pending',
      paymentDate: 'Pending',
      paymentMethod: 'Bank Transfer',
      transactionId: '',
      bankAccount: 'XXXXXX5678'
    },
  ]);

  // ============================
  // DELIVERIES TAB FUNCTIONS
  // ============================
  
  const handleUpdateStatus = useCallback((deliveryId, newStatus) => {
    if (newStatus === 'Delivered' && !window.confirm('Mark this delivery as delivered?')) return;
    if (newStatus === 'Cancelled' && !window.confirm('Cancel this delivery?')) return;

    setDeliveries(deliveries.map(d => 
      d.id === deliveryId ? { 
        ...d, 
        status: newStatus,
        ...(newStatus === 'Delivered' && { 
          deliveredTime: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          estimatedTime: 'Delivered'
        }),
        ...(newStatus === 'Cancelled' && {
          deliveryPartner: 'Cancelled',
          partnerContact: '',
          partnerId: ''
        })
      } : d
    ));
    
    alert(`Delivery ${deliveryId} status updated to ${newStatus}`);
  }, [deliveries]);

  const handleAssignDelivery = useCallback((deliveryId, partnerId) => {
    const delivery = deliveries.find(d => d.id === deliveryId);
    const partner = deliveryPartners.find(p => p.id === partnerId);
    
    if (delivery && partner) {
      setDeliveries(deliveries.map(d => 
        d.id === deliveryId 
          ? { 
              ...d, 
              status: 'Assigned',
              deliveryPartner: `${partner.name} (Rider #${partner.id.slice(2)})`,
              partnerId: partner.id,
              partnerContact: partner.phone,
              pickupTime: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            } 
          : d
      ));
      alert(`Delivery ${deliveryId} assigned to ${partner.name}`);
    }
  }, [deliveries, deliveryPartners]);

  // ============================
  // PARTNERS TAB FUNCTIONS
  // ============================

  const handleAddPartner = useCallback((partnerData) => {
    if (editingPartner) {
      // Update existing partner
      setDeliveryPartners(deliveryPartners.map(partner => 
        partner.id === editingPartner.id 
          ? { 
              ...partner, 
              ...partnerData,
              location: partnerData.address || partner.location
            } 
          : partner
      ));
      alert('Delivery partner updated successfully!');
    } else {
      // Add new partner
      const newPartnerObj = {
        id: `DP${(deliveryPartners.length + 1).toString().padStart(3, '0')}`,
        name: partnerData.name,
        phone: partnerData.phone,
        vehicleType: partnerData.vehicleType,
        vehicleNumber: partnerData.vehicleNumber,
        rating: 5.0,
        totalDeliveries: 0,
        status: partnerData.status || 'Active',
        earnings: '₹0',
        todayDeliveries: 0,
        location: partnerData.address || 'Not specified',
        joinDate: new Date().toISOString().split('T')[0],
        email: partnerData.email || '',
        address: partnerData.address || ''
      };

      setDeliveryPartners([...deliveryPartners, newPartnerObj]);
      alert('Delivery partner added successfully!');
    }
    
    setShowAddPartnerModal(false);
    setEditingPartner(null);
  }, [deliveryPartners, editingPartner]);

  const handleDeletePartner = useCallback((id) => {
    if (window.confirm('Are you sure you want to delete this delivery partner?')) {
      setDeliveryPartners(deliveryPartners.filter(partner => partner.id !== id));
      alert('Delivery partner deleted successfully!');
    }
  }, [deliveryPartners]);

  const handleEditPartner = useCallback((partner) => {
    setEditingPartner(partner);
    setShowAddPartnerModal(true);
  }, []);

  const handleCallPartner = useCallback((phone) => {
    window.open(`tel:${phone}`);
  }, []);

  // ============================
  // PAYMENT TAB FUNCTIONS
  // ============================

  const handleViewPayment = useCallback((payment) => {
    setSelectedPayment(payment);
    setShowPaymentModal(true);
  }, []);

  const handleMarkAsPaid = useCallback((paymentId) => {
    if (window.confirm('Mark this payment as paid?')) {
      setPaymentHistory(paymentHistory.map(payment => 
        payment.id === paymentId 
          ? { 
              ...payment, 
              status: 'Paid',
              paymentDate: new Date().toISOString().split('T')[0],
              transactionId: `TXN${Date.now().toString().slice(-9)}`
            } 
          : payment
      ));
      alert(`Payment ${paymentId} marked as paid`);
    }
  }, [paymentHistory]);

  const handlePrintReceipt = useCallback((payment) => {
    setSelectedPayment(payment);
    setShowReceiptModal(true);
  }, []);

  const handleExportReport = useCallback(() => {
    const data = activeTab === 'active' ? deliveries : 
                 activeTab === 'partners' ? deliveryPartners : 
                 paymentHistory;
    
    const headers = Object.keys(data[0] || {});
    const csvContent = [
      headers.join(','),
      ...data.map(row => headers.map(header => JSON.stringify(row[header])).join(','))
    ].join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `delivery_${activeTab}_report_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    
    alert(`Report exported successfully as ${a.download}`);
  }, [activeTab, deliveries, deliveryPartners, paymentHistory]);

  // ============================
  // DATA FILTERING
  // ============================

  // Filter deliveries
  const filteredDeliveries = useMemo(() => 
    deliveries.filter(delivery => {
      const matchesSearch = 
        delivery.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        delivery.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
        delivery.deliveryPartner.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter = statusFilter === 'all' || delivery.status === statusFilter;
      return matchesSearch && matchesFilter;
    }),
    [deliveries, searchTerm, statusFilter]
  );

  // Filter partners
  const filteredPartners = useMemo(() => 
    deliveryPartners.filter(partner => 
      partner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      partner.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      partner.vehicleNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      partner.phone.toLowerCase().includes(searchTerm.toLowerCase())
    ),
    [deliveryPartners, searchTerm]
  );

  // Filter payments
  const filteredPayments = useMemo(() => 
    paymentHistory.filter(payment =>
      payment.partnerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.partnerId.toLowerCase().includes(searchTerm.toLowerCase())
    ),
    [paymentHistory, searchTerm]
  );

  // Define table columns
  const deliveryColumns = useMemo(() => [
    { title: 'Delivery ID', className: 'text-left' },
    { title: 'Customer', className: 'text-left' },
    { title: 'Amount', className: 'text-center' },
    { title: 'Status', className: 'text-center' },
    { title: 'Delivery Partner', className: 'text-left' },
    { title: 'Actions', className: 'text-center' },
  ], []);

  const paymentColumns = useMemo(() => [
    { title: 'Payment ID', className: 'text-left' },
    { title: 'Partner', className: 'text-left' },
    { title: 'Period', className: 'text-left' },
    { title: 'Deliveries', className: 'text-center' },
    { title: 'Amount Details', className: 'text-left' },
    { title: 'Net Amount', className: 'text-center' },
    { title: 'Status', className: 'text-center' },
    { title: 'Actions', className: 'text-center' },
  ], []);

  // Render functions
  const renderDeliveryRow = useCallback((delivery) => (
    <DeliveryTableRow 
      delivery={delivery}
      onTrack={(delivery) => {
        setSelectedDelivery(delivery);
        setShowTrackModal(true);
      }}
      onAssign={(delivery) => {
        setSelectedDelivery(delivery);
        setShowAssignDeliveryModal(true);
      }}
      onUpdateStatus={handleUpdateStatus}
      onCall={handleCallPartner}
    />
  ), [handleUpdateStatus, handleCallPartner]);

  const renderPaymentRow = useCallback((payment) => (
    <PaymentTableRow 
      payment={payment}
      onView={handleViewPayment}
      onMarkPaid={handleMarkAsPaid}
      onPrintReceipt={handlePrintReceipt}
    />
  ), [handleViewPayment, handleMarkAsPaid, handlePrintReceipt]);

  // Calculate statistics
  const stats = useMemo(() => ({
    activeDeliveries: deliveries.filter(d => ['Assigned', 'Picked Up', 'In Transit'].includes(d.status)).length,
    pendingAssignments: deliveries.filter(d => d.status === 'Pending').length,
    totalDeliveryPartners: deliveryPartners.length,
    activePartners: deliveryPartners.filter(p => p.status === 'Active').length,
    totalPayments: paymentHistory.length,
    pendingPayments: paymentHistory.filter(p => p.status === 'Pending').length,
  }), [deliveries, deliveryPartners, paymentHistory]);

  // ============================
  // MAIN RENDER
  // ============================
  return (
    <div className="p-3 md:p-6">
      {/* Header */}
      <div className="mb-4 md:mb-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div>
            <h1 className="text-lg md:text-2xl font-bold text-gray-800">Delivery Management</h1>
            <p className="text-gray-600 text-xs md:text-sm">Manage deliveries and assign delivery partners</p>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={handleExportReport}
              className="flex items-center gap-1 px-3 py-2 bg-green-600 text-white text-xs md:text-sm rounded-lg hover:bg-green-700"
            >
              <FaDownload className="text-xs" /> Export Report
            </button>
            <button 
              onClick={() => setShowAddPartnerModal(true)}
              className="flex items-center gap-1 px-3 py-2 bg-blue-600 text-white text-xs md:text-sm rounded-lg hover:bg-blue-700"
            >
              <FaPlus className="text-xs" /> Add Partner
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex mb-4 border-b border-gray-200 overflow-x-auto">
        <button
          onClick={() => setActiveTab('active')}
          className={`flex-shrink-0 px-3 md:px-4 py-2 font-medium border-b-2 whitespace-nowrap ${
            activeTab === 'active' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500'
          }`}
        >
          Active Deliveries
        </button>
        <button
          onClick={() => setActiveTab('partners')}
          className={`flex-shrink-0 px-3 md:px-4 py-2 font-medium border-b-2 whitespace-nowrap ${
            activeTab === 'partners' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500'
          }`}
        >
          Delivery Partners
        </button>
        <button
          onClick={() => setActiveTab('history')}
          className={`flex-shrink-0 px-3 md:px-4 py-2 font-medium border-b-2 whitespace-nowrap ${
            activeTab === 'history' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500'
          }`}
        >
          Payment History
        </button>
      </div>

      {/* ACTIVE DELIVERIES TAB */}
      {activeTab === 'active' && (
        <>
          {/* Enhanced Delivery Stats Cards with Bottom Aligned Text */}
          <div className="grid md:grid-cols-4 gap-4 mb-6">
            {/* Active Deliveries Card */}
            <div className="group relative overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 border border-gray-200 rounded-2xl p-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 hover:border-blue-300 h-36 flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative z-10 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="relative mr-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:scale-110 transition-all duration-300">
                        <FaTruck className="text-blue-600 text-lg" />
                      </div>
                    </div>
                    <div>
                      <div className="text-xs font-medium text-gray-600 uppercase tracking-wider">Active Deliveries</div>
                      <div className="text-2xl md:text-3xl font-bold text-blue-700 mt-1">{stats.activeDeliveries}</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-auto pt-3 border-t border-gray-100">
                  <div className="text-xs text-gray-500 flex items-center">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
                    Currently on the road
                  </div>
                </div>
              </div>
            </div>

            {/* Pending Assignments Card */}
            <div className="group relative overflow-hidden bg-gradient-to-br from-yellow-50 to-yellow-100 border border-gray-200 rounded-2xl p-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 hover:border-yellow-300 h-36 flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative z-10 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="relative mr-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:scale-110 transition-all duration-300">
                        <FaExclamationCircle className="text-yellow-600 text-lg" />
                      </div>
                    </div>
                    <div>
                      <div className="text-xs font-medium text-gray-600 uppercase tracking-wider">Pending Assignments</div>
                      <div className="text-2xl md:text-3xl font-bold text-yellow-700 mt-1">{stats.pendingAssignments}</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-auto pt-3 border-t border-gray-100">
                  <div className="text-xs text-gray-500 flex items-center">
                    <span className="inline-block w-2 h-2 bg-yellow-500 rounded-full mr-2 animate-pulse"></span>
                    Waiting for assignment
                  </div>
                </div>
              </div>
            </div>

            {/* Avg Delivery Time Card */}
            <div className="group relative overflow-hidden bg-gradient-to-br from-green-50 to-green-100 border border-gray-200 rounded-2xl p-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 hover:border-green-300 h-36 flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative z-10 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="relative mr-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:scale-110 transition-all duration-300">
                        <FaClock className="text-green-600 text-lg" />
                      </div>
                    </div>
                    <div>
                      <div className="text-xs font-medium text-gray-600 uppercase tracking-wider">Avg Delivery Time</div>
                      <div className="text-2xl md:text-3xl font-bold text-green-700 mt-1">32 min</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-auto pt-3 border-t border-gray-100">
                  <div className="text-xs text-gray-500 flex items-center">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    <span className="text-green-600 font-medium">-13%</span> vs last week
                  </div>
                </div>
              </div>
            </div>

            {/* On-time Rate Card */}
            <div className="group relative overflow-hidden bg-gradient-to-br from-purple-50 to-purple-100 border border-gray-200 rounded-2xl p-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 hover:border-purple-300 h-36 flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative z-10 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="relative mr-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:scale-110 transition-all duration-300">
                        <FaCheckCircle className="text-purple-600 text-lg" />
                      </div>
                    </div>
                    <div>
                      <div className="text-xs font-medium text-gray-600 uppercase tracking-wider">On-time Rate</div>
                      <div className="text-2xl md:text-3xl font-bold text-purple-700 mt-1">94%</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-auto pt-3 border-t border-gray-100">
                  <div className="text-xs text-gray-500 flex items-center">
                    <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    <span className="text-purple-600 font-medium">+2%</span> vs last month
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Search and Filter Bar */}
          <div className="bg-white p-3 rounded-xl border border-gray-200 mb-4">
            <div className="flex flex-col md:flex-row gap-3">
              <div className="flex-1">
                <div className="relative">
                  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
                  <input
                    type="text"
                    placeholder="Search deliveries..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              
              <div className="flex gap-2">
                <div className="relative flex-1 min-w-[120px]">
                  <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="w-full pl-10 pr-8 py-2 text-sm border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="all">All Status</option>
                    <option value="Pending">Pending</option>
                    <option value="Assigned">Assigned</option>
                    <option value="Picked Up">Picked Up</option>
                    <option value="In Transit">In Transit</option>
                    <option value="Delivered">Delivered</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Deliveries List */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            {/* Mobile View */}
            <div className="md:hidden p-3">
              {filteredDeliveries.length === 0 ? (
                <div className="text-center py-8">
                  <div className="text-gray-400 mb-2">No deliveries found</div>
                  <div className="text-gray-500 text-sm">Try adjusting your search or filter</div>
                </div>
              ) : (
                filteredDeliveries.map((delivery) => (
                  <MobileDeliveryCard 
                    key={delivery.id} 
                    delivery={delivery}
                    onTrack={(delivery) => {
                      setSelectedDelivery(delivery);
                      setShowTrackModal(true);
                    }}
                    onAssign={(delivery) => {
                      setSelectedDelivery(delivery);
                      setShowAssignDeliveryModal(true);
                    }}
                    onUpdateStatus={handleUpdateStatus}
                    onCall={handleCallPartner}
                  />
                ))
              )}
            </div>

            {/* Desktop View */}
            <div className="hidden md:block">
              <DataTable
                columns={deliveryColumns}
                data={filteredDeliveries}
                renderRow={renderDeliveryRow}
                emptyMessage="No deliveries found"
                emptySubMessage="Try adjusting your search or filter"
              />
            </div>
          </div>
        </>
      )}

      {/* DELIVERY PARTNERS TAB */}
      {activeTab === 'partners' && (
        <>
          {/* Enhanced Partner Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            {/* Total Partners Card */}
            <div className="group relative overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 border border-gray-200 rounded-2xl p-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 hover:border-blue-300 h-32 flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative z-10 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="relative mr-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:scale-110 transition-all duration-300">
                        <FaUser className="text-blue-600 text-lg" />
                      </div>
                    </div>
                    <div>
                      <div className="text-xs font-medium text-gray-600 uppercase tracking-wider">Total Partners</div>
                      <div className="text-2xl md:text-3xl font-bold text-blue-700 mt-1">{stats.totalDeliveryPartners}</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-auto pt-3 border-t border-gray-100">
                  <div className="text-xs text-gray-500 flex items-center">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    All registered partners
                  </div>
                </div>
              </div>
            </div>

            {/* Active Partners Card */}
            <div className="group relative overflow-hidden bg-gradient-to-br from-green-50 to-green-100 border border-gray-200 rounded-2xl p-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 hover:border-green-300 h-32 flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative z-10 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="relative mr-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:scale-110 transition-all duration-300">
                        <FaMotorcycle className="text-green-600 text-lg" />
                      </div>
                    </div>
                    <div>
                      <div className="text-xs font-medium text-gray-600 uppercase tracking-wider">Active Partners</div>
                      <div className="text-2xl md:text-3xl font-bold text-green-700 mt-1">{stats.activePartners}</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-auto pt-3 border-t border-gray-100">
                  <div className="text-xs text-gray-500 flex items-center">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                    Available for delivery
                  </div>
                </div>
              </div>
            </div>

            {/* Today's Earnings Card */}
            <div className="group relative overflow-hidden bg-gradient-to-br from-purple-50 to-purple-100 border border-gray-200 rounded-2xl p-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 hover:border-purple-300 h-32 flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative z-10 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="relative mr-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:scale-110 transition-all duration-300">
                        <FaRupeeSign className="text-purple-600 text-lg group-hover:rotate-12 transition-transform duration-500" />
                      </div>
                    </div>
                    <div>
                      <div className="text-xs font-medium text-gray-600 uppercase tracking-wider">Today's Earnings</div>
                      <div className="text-2xl md:text-3xl font-bold text-purple-700 mt-1">₹1,240</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-auto pt-3 border-t border-gray-100">
                  <div className="text-xs text-gray-500 flex items-center">
                    <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    Daily revenue generated
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="bg-white p-3 rounded-xl border border-gray-200 mb-4">
            <div className="relative">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
              <input
                type="text"
                placeholder="Search delivery partners..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Partners Grid (Cards) */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="p-4 border-b border-gray-200">
              <h2 className="text-lg font-bold text-gray-800">Delivery Partners ({filteredPartners.length})</h2>
            </div>
            
            <div className="p-3 md:p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                {filteredPartners.map((partner) => (
                  <PartnerCard 
                    key={partner.id} 
                    partner={partner}
                    onEdit={handleEditPartner}
                    onDelete={handleDeletePartner}
                    onCall={handleCallPartner}
                  />
                ))}
              </div>
              
              {filteredPartners.length === 0 && (
                <div className="text-center py-8">
                  <div className="text-gray-400 mb-2">No delivery partners found</div>
                  <div className="text-gray-500 text-sm">Try adjusting your search</div>
                </div>
              )}
            </div>
          </div>
        </>
      )}

      {/* PAYMENT HISTORY TAB */}
      {activeTab === 'history' && (
        <>
          {/* Enhanced Payment Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            {/* Total Payments Card */}
            <div className="group relative overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 border border-gray-200 rounded-2xl p-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 hover:border-blue-300 h-32 flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative z-10 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="relative mr-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:scale-110 transition-all duration-300">
                        <FaCalendar className="text-blue-600 text-lg" />
                      </div>
                    </div>
                    <div>
                      <div className="text-xs font-medium text-gray-600 uppercase tracking-wider">Total Payments</div>
                      <div className="text-2xl md:text-3xl font-bold text-blue-700 mt-1">{stats.totalPayments}</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-auto pt-3 border-t border-gray-100">
                  <div className="text-xs text-gray-500 flex items-center">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    All transactions processed
                  </div>
                </div>
              </div>
            </div>

            {/* Pending Payments Card */}
            <div className="group relative overflow-hidden bg-gradient-to-br from-yellow-50 to-yellow-100 border border-gray-200 rounded-2xl p-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 hover:border-yellow-300 h-32 flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative z-10 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="relative mr-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:scale-110 transition-all duration-300">
                        <FaExclamationCircle className="text-yellow-600 text-lg" />
                      </div>
                    </div>
                    <div>
                      <div className="text-xs font-medium text-gray-600 uppercase tracking-wider">Pending Payments</div>
                      <div className="text-2xl md:text-3xl font-bold text-yellow-700 mt-1">{stats.pendingPayments}</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-auto pt-3 border-t border-gray-100">
                  <div className="text-xs text-gray-500 flex items-center">
                    <span className="inline-block w-2 h-2 bg-yellow-500 rounded-full mr-2 animate-pulse"></span>
                    Awaiting clearance
                  </div>
                </div>
              </div>
            </div>

            {/* Total Paid Card */}
            <div className="group relative overflow-hidden bg-gradient-to-br from-green-50 to-green-100 border border-gray-200 rounded-2xl p-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 hover:border-green-300 h-32 flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative z-10 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="relative mr-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:scale-110 transition-all duration-300">
                        <FaRupeeSign className="text-green-600 text-lg group-hover:rotate-12 transition-transform duration-500" />
                      </div>
                    </div>
                    <div>
                      <div className="text-xs font-medium text-gray-600 uppercase tracking-wider">Total Paid</div>
                      <div className="text-2xl md:text-3xl font-bold text-green-700 mt-1">₹32,150</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-auto pt-3 border-t border-gray-100">
                  <div className="text-xs text-gray-500 flex items-center">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Total amount disbursed
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Search and Filter Bar */}
          <div className="bg-white p-3 rounded-xl border border-gray-200 mb-4">
            <div className="flex flex-col md:flex-row gap-3">
              <div className="flex-1">
                <div className="relative">
                  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
                  <input
                    type="text"
                    placeholder="Search payment history..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              
              <div className="flex gap-2">
                <div className="relative flex-1 min-w-[140px]">
                  <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
                  <select
                    className="w-full pl-10 pr-8 py-2 text-sm border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option>This Month</option>
                    <option>Last Month</option>
                    <option>Last 3 Months</option>
                    <option>Custom Range</option>
                  </select>
                </div>
                <button 
                  onClick={handleExportReport}
                  className="flex items-center gap-1 px-3 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700"
                >
                  <FaDownload className="text-xs" /> Export
                </button>
              </div>
            </div>
          </div>

          {/* Payment History */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="p-4 border-b border-gray-200">
              <h2 className="text-lg font-bold text-gray-800">Payment History</h2>
            </div>
            
            {/* Mobile View */}
            <div className="md:hidden p-3">
              {filteredPayments.length === 0 ? (
                <div className="text-center py-8">
                  <div className="text-gray-400 mb-2">No payment records found</div>
                  <div className="text-gray-500 text-sm">Try adjusting your search</div>
                </div>
              ) : (
                filteredPayments.map((payment) => (
                  <MobilePaymentCard 
                    key={payment.id} 
                    payment={payment}
                    onView={handleViewPayment}
                    onMarkPaid={handleMarkAsPaid}
                    onPrintReceipt={handlePrintReceipt}
                  />
                ))
              )}
            </div>

            {/* Desktop View */}
            <div className="hidden md:block">
              <DataTable
                columns={paymentColumns}
                data={filteredPayments}
                renderRow={renderPaymentRow}
                emptyMessage="No payment records found"
                emptySubMessage="Try adjusting your search"
              />
            </div>
          </div>
        </>
      )}

      {/* MODALS */}
      <AddPartnerModal 
        isOpen={showAddPartnerModal}
        onClose={() => {
          setShowAddPartnerModal(false);
          setEditingPartner(null);
        }}
        editingPartner={editingPartner}
        onSubmit={handleAddPartner}
      />
      
      <AssignDeliveryModal 
        isOpen={showAssignDeliveryModal}
        onClose={() => {
          setShowAssignDeliveryModal(false);
          setSelectedDelivery(null);
        }}
        delivery={selectedDelivery}
        partners={deliveryPartners}
        onAssign={handleAssignDelivery}
      />
      
      <TrackDeliveryModal 
        isOpen={showTrackModal}
        onClose={() => {
          setShowTrackModal(false);
          setSelectedDelivery(null);
        }}
        delivery={selectedDelivery}
      />
      
      <PaymentModal 
        isOpen={showPaymentModal}
        onClose={() => {
          setShowPaymentModal(false);
          setSelectedPayment(null);
        }}
        payment={selectedPayment}
        onPrintReceipt={handlePrintReceipt}
      />
      
      <ReceiptModal 
        isOpen={showReceiptModal}
        onClose={() => {
          setShowReceiptModal(false);
          setSelectedPayment(null);
        }}
        payment={selectedPayment}
      />
    </div>
  );
};

export default Delivery;