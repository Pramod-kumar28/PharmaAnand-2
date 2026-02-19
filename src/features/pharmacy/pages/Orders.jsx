// // src/pages/pharmacy/Orders.jsx
// import React, { useState, useRef, useEffect } from 'react';
// import { FaSearch, FaFilter, FaEye, FaCheck, FaTimes, FaPrint, FaWhatsapp, FaRupeeSign, FaBox, FaShippingFast, FaCalendarAlt, FaExclamationTriangle, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// const Orders = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filter, setFilter] = useState('all');
//   const [activeTab, setActiveTab] = useState('all');
//   const [selectedOrder, setSelectedOrder] = useState(null);
//   const [showOrderDetails, setShowOrderDetails] = useState(false);
//   const [showScrollButtons, setShowScrollButtons] = useState(false);
//   const tabsContainerRef = useRef(null);

//   // Sample orders data
//   const [orders, setOrders] = useState([
//     { 
//       id: 'ORD1001', 
//       customer: 'Rajesh Kumar',
//       phone: '+91 9876543210',
//       items: [
//         { name: 'Paracetamol 500mg', qty: 2, price: '₹15' },
//         { name: 'Cetirizine 10mg', qty: 1, price: '₹25' }
//       ],
//       totalItems: 3, 
//       amount: '₹85', 
//       status: 'pending',
//       payment: { method: 'Online', status: 'Paid' },
//       time: 'Today, 10:30 AM',
//       prescription: true,
//       delivery: { type: 'Home Delivery', address: '123, MG Road, Mumbai' },
//       priority: 'Normal'
//     },
//     { 
//       id: 'ORD1002', 
//       customer: 'Sunita Patel',
//       phone: '+91 8765432109',
//       items: [
//         { name: 'Amoxicillin 250mg', qty: 1, price: '₹85' }
//       ],
//       totalItems: 1, 
//       amount: '₹85', 
//       status: 'processing',
//       payment: { method: 'COD', status: 'Pending' },
//       time: 'Today, 09:15 AM',
//       prescription: true,
//       delivery: { type: 'Store Pickup', address: 'Store Pickup' },
//       priority: 'High'
//     },
//     { 
//       id: 'ORD1003', 
//       customer: 'Vikram Singh',
//       phone: '+91 7654321098',
//       items: [
//         { name: 'Omeprazole 20mg', qty: 2, price: '₹45' },
//         { name: 'Vitamin C 500mg', qty: 1, price: '₹120' }
//       ],
//       totalItems: 3, 
//       amount: '₹210', 
//       status: 'ready',
//       payment: { method: 'Online', status: 'Paid' },
//       time: 'Yesterday, 04:45 PM',
//       prescription: false,
//       delivery: { type: 'Home Delivery', address: '456, Park Street, Delhi' },
//       priority: 'Normal'
//     },
//     { 
//       id: 'ORD1004', 
//       customer: 'Meera Nair',
//       phone: '+91 6543210987',
//       items: [
//         { name: 'Paracetamol 500mg', qty: 5, price: '₹15' }
//       ],
//       totalItems: 5, 
//       amount: '₹75', 
//       status: 'dispatched',
//       payment: { method: 'COD', status: 'Pending' },
//       time: 'Yesterday, 02:20 PM',
//       prescription: false,
//       delivery: { type: 'Home Delivery', address: '789, Lake View, Bangalore' },
//       priority: 'Normal'
//     },
//     { 
//       id: 'ORD1005', 
//       customer: 'Amitabh Sharma',
//       phone: '+91 5432109876',
//       items: [
//         { name: 'Cetirizine 10mg', qty: 3, price: '₹25' },
//         { name: 'Vitamin D3', qty: 1, price: '₹180' }
//       ],
//       totalItems: 4, 
//       amount: '₹255', 
//       status: 'delivered',
//       payment: { method: 'Online', status: 'Paid' },
//       time: '13 Jan, 11:10 AM',
//       prescription: true,
//       delivery: { type: 'Home Delivery', address: '321, Hill Road, Pune' },
//       priority: 'Normal'
//     },
//     { 
//       id: 'ORD1006', 
//       customer: 'Priya Reddy',
//       phone: '+91 4321098765',
//       items: [
//         { name: 'Amoxicillin 250mg', qty: 2, price: '₹85' }
//       ],
//       totalItems: 2, 
//       amount: '₹170', 
//       status: 'cancelled',
//       payment: { method: 'COD', status: 'Cancelled' },
//       time: '13 Jan, 09:30 AM',
//       prescription: true,
//       delivery: { type: 'Home Delivery', address: '654, Garden Street, Hyderabad' },
//       priority: 'High'
//     }
//   ]);

//   // Check if tabs need scrolling
//   useEffect(() => {
//     const checkScroll = () => {
//       if (tabsContainerRef.current) {
//         const { scrollWidth, clientWidth } = tabsContainerRef.current;
//         setShowScrollButtons(scrollWidth > clientWidth);
//       }
//     };

//     checkScroll();
//     window.addEventListener('resize', checkScroll);
//     return () => window.removeEventListener('resize', checkScroll);
//   }, []);

//   // Scroll tabs
//   const scrollTabs = (direction) => {
//     if (tabsContainerRef.current) {
//       const scrollAmount = 150;
//       tabsContainerRef.current.scrollBy({
//         left: direction === 'left' ? -scrollAmount : scrollAmount,
//         behavior: 'smooth'
//       });
//     }
//   };

//   // Order status handling
//   const handleStatusUpdate = (orderId, newStatus) => {
//     if (window.confirm(`Change order status to ${newStatus}?`)) {
//       setOrders(orders.map(order => 
//         order.id === orderId ? { ...order, status: newStatus } : order
//       ));
//     }
//   };

//   // Filter orders
//   const filteredOrders = orders.filter(order => {
//     const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          order.phone.includes(searchTerm);
//     const matchesFilter = filter === 'all' || order.status === filter;
//     const matchesTab = activeTab === 'all' || order.status === activeTab;
//     return matchesSearch && matchesFilter && matchesTab;
//   });

//   // Calculate statistics
//   const stats = {
//     totalOrders: orders.length,
//     pending: orders.filter(o => o.status === 'pending').length,
//     processing: orders.filter(o => o.status === 'processing').length,
//     ready: orders.filter(o => o.status === 'ready').length,
//     dispatched: orders.filter(o => o.status === 'dispatched').length,
//     delivered: orders.filter(o => o.status === 'delivered').length,
//     cancelled: orders.filter(o => o.status === 'cancelled').length,
//     todaysRevenue: orders
//       .filter(o => o.time.includes('Today') && o.status === 'delivered')
//       .reduce((sum, o) => sum + parseInt(o.amount.replace('₹', '')), 0),
//     prescriptionOrders: orders.filter(o => o.prescription).length,
//   };

//   // Status colors
//   const getStatusColor = (status) => {
//     switch(status) {
//       case 'pending': return 'bg-yellow-100 text-yellow-800';
//       case 'processing': return 'bg-blue-100 text-blue-800';
//       case 'ready': return 'bg-purple-100 text-purple-800';
//       case 'dispatched': return 'bg-indigo-100 text-indigo-800';
//       case 'delivered': return 'bg-green-100 text-green-800';
//       case 'cancelled': return 'bg-red-100 text-red-800';
//       default: return 'bg-gray-100 text-gray-800';
//     }
//   };

//   const getStatusIcon = (status) => {
//     switch(status) {
//       case 'pending': return <FaExclamationTriangle className="text-xs" />;
//       case 'processing': return <FaBox className="text-xs" />;
//       case 'ready': return <FaCheck className="text-xs" />;
//       case 'dispatched': return <FaShippingFast className="text-xs" />;
//       case 'delivered': return <FaCheck className="text-xs" />;
//       default: return <FaBox className="text-xs" />;
//     }
//   };

//   // Payment status colors
//   const getPaymentColor = (payment) => {
//     if (payment.status === 'Paid') return 'bg-green-100 text-green-800';
//     if (payment.status === 'Pending') return 'bg-yellow-100 text-yellow-800';
//     return 'bg-red-100 text-red-800';
//   };

//   // Status tabs data
//   const statusTabs = [
//     { id: 'all', label: 'All', count: stats.totalOrders },
//     { id: 'pending', label: 'Pending', count: stats.pending },
//     { id: 'processing', label: 'Processing', count: stats.processing },
//     { id: 'ready', label: 'Ready', count: stats.ready },
//     { id: 'dispatched', label: 'Dispatched', count: stats.dispatched },
//     { id: 'delivered', label: 'Delivered', count: stats.delivered },
//     { id: 'cancelled', label: 'Cancelled', count: stats.cancelled }
//   ];

//   // Mobile Order Card Component
//   const MobileOrderCard = ({ order }) => (
//     <div className="bg-white p-4 rounded-xl border border-gray-200 mb-3">
//       <div className="flex justify-between items-start mb-3">
//         <div>
//           <div className="font-bold text-gray-800 text-sm">{order.id}</div>
//           <div className="text-xs text-gray-500">{order.time}</div>
//         </div>
//         <div className="flex items-center gap-2">
//           <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(order.status)} flex items-center gap-1`}>
//             {getStatusIcon(order.status)}
//             {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
//           </span>
//           {order.priority === 'High' && (
//             <span className="px-2 py-1 text-xs bg-red-100 text-red-800 rounded-full">
//               Urgent
//             </span>
//           )}
//         </div>
//       </div>
      
//       <div className="mb-3">
//         <div className="font-medium text-sm text-gray-800">{order.customer}</div>
//         <div className="text-xs text-gray-500">{order.phone}</div>
//       </div>
      
//       <div className="grid grid-cols-2 gap-3 mb-3">
//         <div>
//           <div className="text-xs text-gray-500">Items</div>
//           <div className="font-medium text-sm">{order.totalItems} items</div>
//         </div>
//         <div>
//           <div className="text-xs text-gray-500">Amount</div>
//           <div className="font-bold text-sm">{order.amount}</div>
//         </div>
//         <div>
//           <div className="text-xs text-gray-500">Payment</div>
//           <div className={`text-xs px-2 py-1 rounded ${getPaymentColor(order.payment)}`}>
//             {order.payment.method}
//           </div>
//         </div>
//         <div>
//           <div className="text-xs text-gray-500">Delivery</div>
//           <div className="font-medium text-sm text-xs">{order.delivery.type}</div>
//         </div>
//       </div>
      
//       <div className="flex justify-between items-center pt-3 border-t border-gray-100">
//         <div className="flex gap-2">
//           <button 
//             onClick={() => {
//               setSelectedOrder(order);
//               setShowOrderDetails(true);
//             }}
//             className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
//             title="View Details"
//           >
//             <FaEye className="text-sm" />
//           </button>
          
//           {order.status === 'pending' && (
//             <>
//               <button 
//                 onClick={() => handleStatusUpdate(order.id, 'processing')}
//                 className="p-2 text-green-600 hover:bg-green-50 rounded-lg"
//                 title="Accept Order"
//               >
//                 <FaCheck className="text-sm" />
//               </button>
//               <button 
//                 onClick={() => handleStatusUpdate(order.id, 'cancelled')}
//                 className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
//                 title="Reject Order"
//               >
//                 <FaTimes className="text-sm" />
//               </button>
//             </>
//           )}
          
//           {order.status === 'ready' && (
//             <button 
//               className="p-2 text-purple-600 hover:bg-purple-50 rounded-lg"
//               title="Dispatch"
//               onClick={() => handleStatusUpdate(order.id, 'dispatched')}
//             >
//               <FaShippingFast className="text-sm" />
//             </button>
//           )}
          
//           <button 
//             className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg"
//             title="Print Invoice"
//           >
//             <FaPrint className="text-sm" />
//           </button>
//         </div>
        
//         {order.prescription && (
//           <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">
//             Rx Required
//           </span>
//         )}
//       </div>
//     </div>
//   );

//   // Order Details Modal
//   const OrderDetailsModal = () => (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//       <div className="bg-white rounded-xl shadow-2xl max-w-md w-full">
//         <div className="p-6">
//           <div className="flex justify-between items-center mb-6">
//             <div>
//               <h3 className="text-xl font-bold text-gray-800">Order Details</h3>
//               <p className="text-gray-600 text-sm">{selectedOrder?.id}</p>
//             </div>
//             <button 
//               onClick={() => setShowOrderDetails(false)}
//               className="text-gray-400 hover:text-gray-600 text-2xl"
//             >
//               <FaTimes />
//             </button>
//           </div>
          
//           <div className="space-y-4">
//             {/* Customer Info */}
//             <div className="bg-blue-50 p-4 rounded-lg">
//               <h4 className="font-bold text-gray-800 mb-2">Customer Information</h4>
//               <div className="grid grid-cols-2 gap-3">
//                 <div>
//                   <div className="text-xs text-gray-500">Name</div>
//                   <div className="font-medium text-sm">{selectedOrder?.customer}</div>
//                 </div>
//                 <div>
//                   <div className="text-xs text-gray-500">Phone</div>
//                   <div className="font-medium text-sm">{selectedOrder?.phone}</div>
//                 </div>
//               </div>
//             </div>
            
//             {/* Order Items */}
//             <div>
//               <h4 className="font-bold text-gray-800 mb-2">Order Items</h4>
//               <div className="space-y-2">
//                 {selectedOrder?.items.map((item, index) => (
//                   <div key={index} className="flex justify-between items-center p-2 bg-gray-50 rounded">
//                     <div>
//                       <div className="font-medium text-sm">{item.name}</div>
//                       <div className="text-xs text-gray-500">Qty: {item.qty}</div>
//                     </div>
//                     <div className="font-bold text-sm">{item.price}</div>
//                   </div>
//                 ))}
//               </div>
//               <div className="mt-3 pt-3 border-t border-gray-200 flex justify-between items-center">
//                 <span className="font-bold">Total</span>
//                 <span className="font-bold text-lg">{selectedOrder?.amount}</span>
//               </div>
//             </div>
            
//             {/* Delivery Info */}
//             <div>
//               <h4 className="font-bold text-gray-800 mb-2">Delivery Information</h4>
//               <div className="bg-gray-50 p-3 rounded">
//                 <div className="text-sm">{selectedOrder?.delivery.type}</div>
//                 {selectedOrder?.delivery.address !== 'Store Pickup' && (
//                   <div className="text-xs text-gray-600 mt-1">{selectedOrder?.delivery.address}</div>
//                 )}
//               </div>
//             </div>
            
//             {/* Payment Info */}
//             <div className="grid grid-cols-2 gap-3">
//               <div>
//                 <div className="text-xs text-gray-500">Payment Method</div>
//                 <div className={`mt-1 px-2 py-1 text-xs rounded ${getPaymentColor(selectedOrder?.payment)}`}>
//                   {selectedOrder?.payment.method}
//                 </div>
//               </div>
//               <div>
//                 <div className="text-xs text-gray-500">Payment Status</div>
//                 <div className={`mt-1 px-2 py-1 text-xs rounded ${getPaymentColor(selectedOrder?.payment)}`}>
//                   {selectedOrder?.payment.status}
//                 </div>
//               </div>
//             </div>
            
//             {/* Prescription Status */}
//             {selectedOrder?.prescription && (
//               <div className="bg-yellow-50 p-3 rounded-lg">
//                 <div className="flex items-center gap-2">
//                   <FaExclamationTriangle className="text-yellow-600" />
//                   <span className="font-medium text-sm">Prescription Required</span>
//                 </div>
//                 <p className="text-xs text-yellow-700 mt-1">Verify prescription before processing order</p>
//               </div>
//             )}
//           </div>
          
//           <div className="mt-6 pt-6 border-t border-gray-200">
//             <div className="flex justify-between gap-3">
//               <button 
//                 className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm"
//                 onClick={() => setShowOrderDetails(false)}
//               >
//                 Close
//               </button>
//               <div className="flex gap-2">
//                 <button 
//                   className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 text-sm flex items-center gap-2"
//                   onClick={() => {
//                     if (selectedOrder?.status === 'pending') {
//                       handleStatusUpdate(selectedOrder.id, 'processing');
//                     } else if (selectedOrder?.status === 'processing') {
//                       handleStatusUpdate(selectedOrder.id, 'ready');
//                     } else if (selectedOrder?.status === 'ready') {
//                       handleStatusUpdate(selectedOrder.id, 'dispatched');
//                     }
//                     setShowOrderDetails(false);
//                   }}
//                 >
//                   <FaCheck /> Next Step
//                 </button>
//                 <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm flex items-center gap-2">
//                   <FaPrint /> Print Invoice
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <div className="p-3 md:p-6">
//       {/* Add these global styles to hide scrollbars but allow scrolling */}
//       <style jsx global>{`
//         * {
//           -ms-overflow-style: none;  /* IE and Edge */
//           scrollbar-width: none;      /* Firefox */
//         }
//         *::-webkit-scrollbar {
//           display: none;             /* Chrome, Safari, Opera */
//         }
//         .scrollable-tabs {
//           -webkit-overflow-scrolling: touch;
//           scrollbar-width: none;
//         }
//         .scrollable-tabs::-webkit-scrollbar {
//           display: none;
//         }
//       `}</style>

//       {/* Header */}
//       <div className="mb-4 md:mb-6">
//         <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
//           <div>
//             <h1 className="text-lg md:text-2xl font-bold text-gray-800">Orders Management</h1>
//             <p className="text-gray-600 text-xs md:text-sm">Track and manage customer orders</p>
//           </div>
//           <div className="flex gap-2">
//             <button 
//               className="flex items-center gap-1 px-3 py-2 bg-blue-600 text-white text-xs md:text-sm rounded-lg hover:bg-blue-700"
//             >
//               <FaPrint className="text-xs" /> Print Report
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Tabs with scrollable container (scrollbars hidden) */}
//       <div className="relative mb-4">
//         {/* {showScrollButtons && (
//           <>
//             <button
//               onClick={() => scrollTabs('left')}
//               className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white border border-gray-200 rounded-full p-2 shadow-sm hover:bg-gray-50"
//             >
//               <FaChevronLeft className="text-gray-600 text-sm" />
//             </button>
//             <button
//               onClick={() => scrollTabs('right')}
//               className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white border border-gray-200 rounded-full p-2 shadow-sm hover:bg-gray-50"
//             >
//               <FaChevronRight className="text-gray-600 text-sm" />
//             </button>
//           </>
//         )} */}
        
//         <div 
//           ref={tabsContainerRef}
//           className="flex border-b border-gray-200 scrollable-tabs overflow-x-auto"
//           style={{ scrollBehavior: 'smooth' }}
//         >
//           <div className="flex flex-nowrap">
//             {statusTabs.map((tab) => (
//               <button
//                 key={tab.id}
//                 onClick={() => setActiveTab(tab.id)}
//                 className={`flex-shrink-0 px-4 py-3 font-medium border-b-2 whitespace-nowrap text-sm ${
//                   activeTab === tab.id ? 'border-blue-600 text-blue-600 bg-blue-50' : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50'
//                 }`}
//               >
//                 {tab.label}
//                 <span className={`ml-2 px-1.5 py-0.5 text-xs rounded-full ${
//                   activeTab === tab.id ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
//                 }`}>
//                   {tab.count}
//                 </span>
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Quick Stats */}
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
//         <div className="bg-white p-3 rounded-xl border border-gray-200">
//           <div className="flex items-center">
//             <div className="p-2 bg-blue-100 rounded-lg mr-3">
//               <FaBox className="text-blue-600 text-sm" />
//             </div>
//             <div>
//               <div className="text-xs text-gray-500">Total Orders</div>
//               <div className="text-sm md:text-lg font-bold text-gray-800">{stats.totalOrders}</div>
//             </div>
//           </div>
//         </div>
        
//         <div className="bg-white p-3 rounded-xl border border-gray-200">
//           <div className="flex items-center">
//             <div className="p-2 bg-yellow-100 rounded-lg mr-3">
//               <FaExclamationTriangle className="text-yellow-600 text-sm" />
//             </div>
//             <div>
//               <div className="text-xs text-gray-500">Pending</div>
//               <div className="text-sm md:text-lg font-bold text-yellow-600">{stats.pending}</div>
//             </div>
//           </div>
//         </div>
        
//         <div className="bg-white p-3 rounded-xl border border-gray-200">
//           <div className="flex items-center">
//             <div className="p-2 bg-green-100 rounded-lg mr-3">
//               <FaRupeeSign className="text-green-600 text-sm" />
//             </div>
//             <div>
//               <div className="text-xs text-gray-500">Today's Revenue</div>
//               <div className="text-sm md:text-lg font-bold text-green-600">₹{stats.todaysRevenue}</div>
//             </div>
//           </div>
//         </div>
        
//         <div className="bg-white p-3 rounded-xl border border-gray-200">
//           <div className="flex items-center">
//             <div className="p-2 bg-red-100 rounded-lg mr-3">
//               <FaCalendarAlt className="text-red-600 text-sm" />
//             </div>
//             <div>
//               <div className="text-xs text-gray-500">Prescription</div>
//               <div className="text-sm md:text-lg font-bold text-red-600">{stats.prescriptionOrders}</div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Actions Bar */}
//       <div className="bg-white p-3 rounded-xl border border-gray-200 mb-4">
//         <div className="flex flex-col md:flex-row gap-3">
//           <div className="flex-1">
//             <div className="relative">
//               <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
//               <input
//                 type="text"
//                 placeholder="Search by Order ID, Customer or Phone..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               />
//             </div>
//           </div>
          
//           <div className="flex gap-2">
//             <div className="relative flex-1 min-w-[120px]">
//               <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
//               <select
//                 value={filter}
//                 onChange={(e) => setFilter(e.target.value)}
//                 className="w-full pl-10 pr-8 py-2 text-sm border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               >
//                 <option value="all">All Status</option>
//                 <option value="pending">Pending</option>
//                 <option value="processing">Processing</option>
//                 <option value="ready">Ready</option>
//                 <option value="dispatched">Dispatched</option>
//                 <option value="delivered">Delivered</option>
//                 <option value="cancelled">Cancelled</option>
//               </select>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Orders List */}
//       <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
//         {/* Mobile View: Cards */}
//         <div className="md:hidden p-3">
//           {filteredOrders.length === 0 ? (
//             <div className="text-center py-8">
//               <div className="text-gray-400 mb-2">No orders found</div>
//               <div className="text-gray-500 text-sm">Try adjusting your search or filter</div>
//             </div>
//           ) : (
//             filteredOrders.map((order) => (
//               <MobileOrderCard key={order.id} order={order} />
//             ))
//           )}
//         </div>

//         {/* Desktop View: Table */}
//         <div className="hidden md:block">
//           <table className="w-full divide-y divide-gray-200">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">Order ID</th>
//                 <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">Customer</th>
//                 <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">Items</th>
//                 <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">Amount</th>
//                 <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">Status</th>
//                 <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">Payment</th>
//                 <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">Delivery</th>
//                 <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">Actions</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-200">
//               {filteredOrders.map((order) => (
//                 <tr key={order.id} className="hover:bg-gray-50 text-center">
//                   <td className="px-2 py-2">
//                     <div>
//                       <div className="font-medium text-sm text-gray-900">{order.id}</div>
//                       <div className="text-xs text-gray-500">{order.time}</div>
//                       {order.priority === 'High' && (
//                         <span className="mt-1 inline-block px-2 py-0.5 text-xs bg-red-100 text-red-800 rounded">
//                           Urgent
//                         </span>
//                       )}
//                     </div>
//                   </td>
//                   <td className="px-2 py-2">
//                     <div>
//                       <div className="font-medium text-sm">{order.customer}</div>
//                       <div className="text-xs text-gray-500">{order.phone}</div>
//                       {order.prescription && (
//                         <span className="mt-1 inline-block px-2 py-0.5 text-xs bg-blue-100 text-blue-800 rounded">
//                           Rx Required
//                         </span>
//                       )}
//                     </div>
//                   </td>
//                   <td className="px-2 py-2">
//                     <div className="font-medium text-sm">{order.totalItems} items</div>
//                     <div className="text-xs text-gray-600 max-w-[150px] truncate">
//                       {order.items.map(item => item.name).join(', ')}
//                     </div>
//                   </td>
//                   <td className="px-2 py-2">
//                     <div className="font-bold text-sm">{order.amount}</div>
//                   </td>
//                   <td className="px-2 py-2">
//                     <div className="flex justify-center">
//                         <span className={`px-2 py-1 text-xs font-medium rounded-full flex items-center gap-1 w-fit ${
//                             getStatusColor(order.status)
//                             }`}>
//                             {getStatusIcon(order.status)}
//                             {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
//                         </span>
//                     </div>
//                   </td>
//                   <td className="px-2 py-2">
//                     <div className={`px-2 py-1 text-xs rounded ${getPaymentColor(order.payment)}`}>
//                       {order.payment.method}
//                     </div>
//                     <div className="text-xs text-gray-500 mt-1">{order.payment.status}</div>
//                   </td>
//                   <td className="px-2 py-2">
//                     <div className="text-sm">{order.delivery.type}</div>
//                     {order.delivery.address !== 'Store Pickup' && (
//                       <div className="text-xs text-gray-600 max-w-[120px] truncate">
//                         {order.delivery.address}
//                       </div>
//                     )}
//                   </td>
//                   <td className="px-2 py-2">
//                     <div className="flex gap-1 justify-center">
//                       <button 
//                         onClick={() => {
//                           setSelectedOrder(order);
//                           setShowOrderDetails(true);
//                         }}
//                         className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
//                         title="View Details"
//                       >
//                         <FaEye className="text-sm" />
//                       </button>
                      
//                       {order.status === 'pending' && (
//                         <>
//                           <button 
//                             onClick={() => handleStatusUpdate(order.id, 'processing')}
//                             className="p-2 text-green-600 hover:bg-green-50 rounded-lg"
//                             title="Accept Order"
//                           >
//                             <FaCheck className="text-sm" />
//                           </button>
//                           <button 
//                             onClick={() => handleStatusUpdate(order.id, 'cancelled')}
//                             className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
//                             title="Reject Order"
//                           >
//                             <FaTimes className="text-sm" />
//                           </button>
//                         </>
//                       )}
                      
//                       {order.status === 'processing' && (
//                         <button 
//                           onClick={() => handleStatusUpdate(order.id, 'ready')}
//                           className="p-2 text-purple-600 hover:bg-purple-50 rounded-lg"
//                           title="Mark as Ready"
//                         >
//                           <FaCheck className="text-sm" />
//                         </button>
//                       )}
                      
//                       {order.status === 'ready' && (
//                         <button 
//                           onClick={() => handleStatusUpdate(order.id, 'dispatched')}
//                           className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg"
//                           title="Dispatch"
//                         >
//                           <FaShippingFast className="text-sm" />
//                         </button>
//                       )}
                      
//                       <button 
//                         className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg"
//                         title="Print Invoice"
//                       >
//                         <FaPrint className="text-sm" />
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
          
//           {filteredOrders.length === 0 && (
//             <div className="text-center py-8">
//               <div className="text-gray-400 mb-2">No orders found</div>
//               <div className="text-gray-500 text-sm">Try adjusting your search or filter</div>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Order Details Modal */}
//       {showOrderDetails && <OrderDetailsModal />}
//     </div>
//   );
// };

// export default Orders;






































// src/pages/pharmacy/Orders.jsx
import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { 
  FaSearch, 
  FaFilter, 
  FaPrint, 
  FaRupeeSign, 
  FaBox, 
  FaShippingFast, 
  FaCalendarAlt, 
  FaExclamationTriangle,
  FaChevronLeft,
  FaChevronRight
} from 'react-icons/fa';

// Import reusable components
import DataTable from '../../../shared/components/tables/DataTable';
import OrderDetailsModal from '../Modal/OrderDetailsModal';
import MobileOrderCard from '../cards/MobileOrderCard';
import OrderTableRow from '../tables/OrderTableRow';

const Orders = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const [activeTab, setActiveTab] = useState('all');
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showOrderDetails, setShowOrderDetails] = useState(false);
  const [showScrollButtons, setShowScrollButtons] = useState(false);
  const tabsContainerRef = useRef(null);

  // Sample orders data
  const [orders, setOrders] = useState([
    { 
      id: 'ORD1001', 
      customer: 'Rajesh Kumar',
      phone: '+91 9876543210',
      items: [
        { name: 'Paracetamol 500mg', qty: 2, price: '₹15' },
        { name: 'Cetirizine 10mg', qty: 1, price: '₹25' }
      ],
      totalItems: 3, 
      amount: '₹85', 
      status: 'pending',
      payment: { method: 'Online', status: 'Paid' },
      time: 'Today, 10:30 AM',
      prescription: true,
      delivery: { type: 'Home Delivery', address: '123, MG Road, Mumbai' },
      priority: 'Normal'
    },
    { 
      id: 'ORD1002', 
      customer: 'Sunita Patel',
      phone: '+91 8765432109',
      items: [
        { name: 'Amoxicillin 250mg', qty: 1, price: '₹85' }
      ],
      totalItems: 1, 
      amount: '₹85', 
      status: 'processing',
      payment: { method: 'COD', status: 'Pending' },
      time: 'Today, 09:15 AM',
      prescription: true,
      delivery: { type: 'Store Pickup', address: 'Store Pickup' },
      priority: 'High'
    },
    { 
      id: 'ORD1003', 
      customer: 'Vikram Singh',
      phone: '+91 7654321098',
      items: [
        { name: 'Omeprazole 20mg', qty: 2, price: '₹45' },
        { name: 'Vitamin C 500mg', qty: 1, price: '₹120' }
      ],
      totalItems: 3, 
      amount: '₹210', 
      status: 'ready',
      payment: { method: 'Online', status: 'Paid' },
      time: 'Yesterday, 04:45 PM',
      prescription: false,
      delivery: { type: 'Home Delivery', address: '456, Park Street, Delhi' },
      priority: 'Normal'
    },
    { 
      id: 'ORD1004', 
      customer: 'Meera Nair',
      phone: '+91 6543210987',
      items: [
        { name: 'Paracetamol 500mg', qty: 5, price: '₹15' }
      ],
      totalItems: 5, 
      amount: '₹75', 
      status: 'dispatched',
      payment: { method: 'COD', status: 'Pending' },
      time: 'Yesterday, 02:20 PM',
      prescription: false,
      delivery: { type: 'Home Delivery', address: '789, Lake View, Bangalore' },
      priority: 'Normal'
    },
    { 
      id: 'ORD1005', 
      customer: 'Amitabh Sharma',
      phone: '+91 5432109876',
      items: [
        { name: 'Cetirizine 10mg', qty: 3, price: '₹25' },
        { name: 'Vitamin D3', qty: 1, price: '₹180' }
      ],
      totalItems: 4, 
      amount: '₹255', 
      status: 'delivered',
      payment: { method: 'Online', status: 'Paid' },
      time: '13 Jan, 11:10 AM',
      prescription: true,
      delivery: { type: 'Home Delivery', address: '321, Hill Road, Pune' },
      priority: 'Normal'
    },
    { 
      id: 'ORD1006', 
      customer: 'Priya Reddy',
      phone: '+91 4321098765',
      items: [
        { name: 'Amoxicillin 250mg', qty: 2, price: '₹85' }
      ],
      totalItems: 2, 
      amount: '₹170', 
      status: 'cancelled',
      payment: { method: 'COD', status: 'Cancelled' },
      time: '13 Jan, 09:30 AM',
      prescription: true,
      delivery: { type: 'Home Delivery', address: '654, Garden Street, Hyderabad' },
      priority: 'High'
    }
  ]);

  // Check if tabs need scrolling
  useEffect(() => {
    const checkScroll = () => {
      if (tabsContainerRef.current) {
        const { scrollWidth, clientWidth } = tabsContainerRef.current;
        setShowScrollButtons(scrollWidth > clientWidth);
      }
    };

    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  // Scroll tabs
  const scrollTabs = (direction) => {
    if (tabsContainerRef.current) {
      const scrollAmount = 150;
      tabsContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Order status handling
  const handleStatusUpdate = useCallback((orderId, newStatus) => {
    if (window.confirm(`Change order status to ${newStatus}?`)) {
      setOrders(orders.map(order => 
        order.id === orderId ? { ...order, status: newStatus } : order
      ));
    }
  }, [orders]);

  // Filter orders
  const filteredOrders = useMemo(() => 
    orders.filter(order => {
      const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.phone.includes(searchTerm);
      const matchesFilter = filter === 'all' || order.status === filter;
      const matchesTab = activeTab === 'all' || order.status === activeTab;
      return matchesSearch && matchesFilter && matchesTab;
    }),
    [orders, searchTerm, filter, activeTab]
  );

  // Calculate statistics
  const stats = useMemo(() => ({
    totalOrders: orders.length,
    pending: orders.filter(o => o.status === 'pending').length,
    processing: orders.filter(o => o.status === 'processing').length,
    ready: orders.filter(o => o.status === 'ready').length,
    dispatched: orders.filter(o => o.status === 'dispatched').length,
    delivered: orders.filter(o => o.status === 'delivered').length,
    cancelled: orders.filter(o => o.status === 'cancelled').length,
    todaysRevenue: orders
      .filter(o => o.time.includes('Today') && o.status === 'delivered')
      .reduce((sum, o) => sum + parseInt(o.amount.replace('₹', '')), 0),
    prescriptionOrders: orders.filter(o => o.prescription).length,
  }), [orders]);

  // Status tabs data
  const statusTabs = useMemo(() => [
    { id: 'all', label: 'All', count: stats.totalOrders },
    { id: 'pending', label: 'Pending', count: stats.pending },
    { id: 'processing', label: 'Processing', count: stats.processing },
    { id: 'ready', label: 'Ready', count: stats.ready },
    { id: 'dispatched', label: 'Dispatched', count: stats.dispatched },
    { id: 'delivered', label: 'Delivered', count: stats.delivered },
    { id: 'cancelled', label: 'Cancelled', count: stats.cancelled }
  ], [stats]);

  // Table columns
  const orderColumns = useMemo(() => [
    { title: 'Order ID', className: 'text-center' },
    { title: 'Customer', className: 'text-center' },
    { title: 'Items', className: 'text-center' },
    { title: 'Amount', className: 'text-center' },
    { title: 'Status', className: 'text-center' },
    { title: 'Payment', className: 'text-center' },
    { title: 'Delivery', className: 'text-center' },
    { title: 'Actions', className: 'text-center' },
  ], []);

  // Handler functions
  const handleViewDetails = useCallback((order) => {
    setSelectedOrder(order);
    setShowOrderDetails(true);
  }, []);

  const handleAcceptOrder = useCallback((orderId) => {
    handleStatusUpdate(orderId, 'processing');
  }, [handleStatusUpdate]);

  const handleRejectOrder = useCallback((orderId) => {
    handleStatusUpdate(orderId, 'cancelled');
  }, [handleStatusUpdate]);

  const handleMarkAsReady = useCallback((orderId) => {
    handleStatusUpdate(orderId, 'ready');
  }, [handleStatusUpdate]);

  const handleDispatchOrder = useCallback((orderId) => {
    handleStatusUpdate(orderId, 'dispatched');
  }, [handleStatusUpdate]);

  const handlePrintInvoice = useCallback((order) => {
    console.log('Print invoice for:', order.id);
    // Add your print logic here
  }, []);

  // Render function for table rows
  const renderOrderRow = useCallback((order) => (
    <OrderTableRow 
      order={order}
      onViewDetails={handleViewDetails}
      onAccept={handleAcceptOrder}
      onReject={handleRejectOrder}
      onReady={handleMarkAsReady}
      onDispatch={handleDispatchOrder}
      onPrint={handlePrintInvoice}
    />
  ), [handleViewDetails, handleAcceptOrder, handleRejectOrder, handleMarkAsReady, handleDispatchOrder, handlePrintInvoice]);

  // Handler for mobile card actions
  const handleMobileCardAction = useCallback((order, action) => {
    switch(action) {
      case 'view': handleViewDetails(order); break;
      case 'accept': handleAcceptOrder(order.id); break;
      case 'reject': handleRejectOrder(order.id); break;
      case 'dispatch': handleDispatchOrder(order.id); break;
      case 'print': handlePrintInvoice(order); break;
      default: break;
    }
  }, [handleViewDetails, handleAcceptOrder, handleRejectOrder, handleDispatchOrder, handlePrintInvoice]);

  // Global styles for hiding scrollbars
  const globalStyles = `
    * {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
    *::-webkit-scrollbar {
      display: none;
    }
    .scrollable-tabs {
      -webkit-overflow-scrolling: touch;
      scrollbar-width: none;
    }
    .scrollable-tabs::-webkit-scrollbar {
      display: none;
    }
  `;

  return (
    <div className="p-3 md:p-6">
      {/* Add global styles */}
      {/* <style jsx global>{globalStyles}</style> */}

      {/* Header */}
      <div className="mb-4 md:mb-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div>
            <h1 className="text-lg md:text-2xl font-bold text-gray-800">Orders Management</h1>
            <p className="text-gray-600 text-xs md:text-sm">Track and manage customer orders</p>
          </div>
          <div className="flex gap-2">
            <button 
              className="flex items-center gap-1 px-3 py-2 bg-blue-600 text-white text-xs md:text-sm rounded-lg hover:bg-blue-700"
            >
              <FaPrint className="text-xs" /> Print Report
            </button>
          </div>
        </div>
      </div>

      {/* Tabs with scrollable container */}
      <div className="relative mb-4">
        <div 
          ref={tabsContainerRef}
          className="flex border-b border-gray-200 scrollable-tabs overflow-x-auto"
          style={{ scrollBehavior: 'smooth' }}
        >
          <div className="flex flex-nowrap">
            {statusTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-shrink-0 px-4 py-3 font-medium border-b-2 whitespace-nowrap text-sm ${
                  activeTab === tab.id ? 'border-blue-600 text-blue-600 bg-blue-50' : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                }`}
              >
                {tab.label}
                <span className={`ml-2 px-1.5 py-0.5 text-xs rounded-full ${
                  activeTab === tab.id ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
                }`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gradient Animated Stat Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {/* Total Orders Card */}
        <div className="group relative overflow-hidden bg-gradient-to-br from-blue-50/80 via-white to-blue-50/80 border border-blue-100/50 rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative">
            <div className="flex items-center">
                <div className="mr-4 relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                    <FaBox className="text-white text-lg" />
                </div>
                </div>
                <div>
                <div className="text-xs font-medium text-blue-800/80 uppercase tracking-wider">Total Orders</div>
                <div className="text-2xl md:text-3xl font-bold text-gray-800 mt-1">{stats.totalOrders}</div>
                <div className="text-xs text-blue-600 font-medium mt-2 flex items-center">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
                    Active orders
                </div>
                </div>
            </div>
            </div>
        </div>

        {/* Pending Orders Card */}
        <div className="group relative overflow-hidden bg-gradient-to-br from-yellow-50/80 via-white to-yellow-50/80 border border-yellow-100/50 rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative">
            <div className="flex items-center">
                <div className="mr-4 relative">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                    <FaExclamationTriangle className="text-white text-lg" />
                </div>
                </div>
                <div>
                <div className="text-xs font-medium text-yellow-800/80 uppercase tracking-wider">Pending</div>
                <div className="text-2xl md:text-3xl font-bold text-yellow-700 mt-1">{stats.pending}</div>
                <div className="text-xs text-yellow-600 font-medium mt-2 flex items-center">
                    <span className="inline-block w-2 h-2 bg-yellow-500 rounded-full mr-2 animate-pulse"></span>
                    Need attention
                </div>
                </div>
            </div>
            </div>
        </div>

        {/* Today's Revenue Card */}
        <div className="group relative overflow-hidden bg-gradient-to-br from-green-50/80 via-white to-green-50/80 border border-green-100/50 rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative">
            <div className="flex items-center">
                <div className="mr-4 relative">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                    <FaRupeeSign className="text-white text-lg" />
                </div>
                </div>
                <div>
                <div className="text-xs font-medium text-green-800/80 uppercase tracking-wider">Today's Revenue</div>
                <div className="text-2xl md:text-3xl font-bold text-green-700 mt-1">₹{stats.todaysRevenue}</div>
                <div className="text-xs text-green-600 font-medium mt-2 flex items-center">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                    Daily earnings
                </div>
                </div>
            </div>
            </div>
        </div>

        {/* Prescription Orders Card */}
        <div className="group relative overflow-hidden bg-gradient-to-br from-red-50/80 via-white to-red-50/80 border border-red-100/50 rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative">
            <div className="flex items-center">
                <div className="mr-4 relative">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                    <FaCalendarAlt className="text-white text-lg" />
                </div>
                </div>
                <div>
                <div className="text-xs font-medium text-red-800/80 uppercase tracking-wider">Prescription</div>
                <div className="text-2xl md:text-3xl font-bold text-red-700 mt-1">{stats.prescriptionOrders}</div>
                <div className="text-xs text-red-600 font-medium mt-2 flex items-center">
                    <span className="inline-block w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></span>
                    Medical orders
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>

      {/* Actions Bar */}
      <div className="bg-white p-3 rounded-xl border border-gray-200 mb-4">
        <div className="flex flex-col md:flex-row gap-3">
          <div className="flex-1">
            <div className="relative">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
              <input
                type="text"
                placeholder="Search by Order ID, Customer or Phone..."
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
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="w-full pl-10 pr-8 py-2 text-sm border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Status</option>
                <option value="pending">Pending</option>
                <option value="processing">Processing</option>
                <option value="ready">Ready</option>
                <option value="dispatched">Dispatched</option>
                <option value="delivered">Delivered</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Orders List */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        {/* Mobile View: Cards */}
        <div className="md:hidden p-3">
          {filteredOrders.length === 0 ? (
            <div className="text-center py-8">
              <div className="text-gray-400 mb-2">No orders found</div>
              <div className="text-gray-500 text-sm">Try adjusting your search or filter</div>
            </div>
          ) : (
            filteredOrders.map((order) => (
              <MobileOrderCard 
                key={order.id} 
                order={order}
                onViewDetails={(order) => handleMobileCardAction(order, 'view')}
                onAccept={(id) => handleMobileCardAction({id}, 'accept')}
                onReject={(id) => handleMobileCardAction({id}, 'reject')}
                onDispatch={(id) => handleMobileCardAction({id}, 'dispatch')}
                onPrint={(order) => handleMobileCardAction(order, 'print')}
              />
            ))
          )}
        </div>

        {/* Desktop View: Table - USING REUSABLE DATATABLE */}
        <div className="hidden md:block">
          <DataTable
            columns={orderColumns}
            data={filteredOrders}
            renderRow={renderOrderRow}
            emptyMessage="No orders found"
            emptySubMessage="Try adjusting your search or filter"
          />
        </div>
      </div>

      {/* Order Details Modal */}
      {showOrderDetails && (
        <OrderDetailsModal 
          order={selectedOrder}
          onClose={() => {
            setShowOrderDetails(false);
            setSelectedOrder(null);
          }}
          onStatusUpdate={handleStatusUpdate}
          onPrint={handlePrintInvoice}
        />
      )}
    </div>
  );
};

export default Orders;