// // src/pages/pharmacy/ProductsManagement.jsx
// import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
// import { 
//   FaSearch, 
//   FaFilter, 
//   FaPlus, 
//   FaEdit, 
//   FaTrash, 
//   FaExclamationTriangle, 
//   FaBox,
//   FaUpload,
//   FaDownload,
//   FaFileExcel,
//   FaFileCsv,
//   FaFilePdf,
//   FaRupeeSign,
//   FaCalendarAlt,
//   FaEye,
//   FaTimes,
//   FaCheck,
//   FaArrowLeft
// } from 'react-icons/fa';
// import Modal from '../../../shared/components/modals/Modal'

// // Separate Modal Components (Prevents re-renders)

// const AddProductModal = React.memo(({ 
//   showModal, 
//   onClose, 
//   editingProduct, 
//   productForm, 
//   onFormChange, 
//   categories, 
//   onSubmit, 
//   onReset 
// }) => {
//   const handleClose = () => {
//     onClose();
//     onReset();
//   };

//   return (
//     <Modal
//       isOpen={showModal}
//       onClose={handleClose}
//       title={editingProduct ? 'Edit Product' : 'Add New Product'}
//       size="md"
//       position="top" // Changed from center to top
//       contentClassName="flex flex-col max-h-[calc(100vh-10.5rem)]" // Flexible height
//     >
//       {/* Scrollable Content */}
//       <div className="flex-1 overflow-y-auto p-6">
//         <div className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Product Name *</label>
//             <input
//               type="text"
//               value={productForm.name}
//               onChange={(e) => onFormChange('name', e.target.value)}
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               placeholder="e.g., Paracetamol 500mg"
//             />
//           </div>
          
//           <div className="grid md:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
//               <select
//                 value={productForm.category}
//                 onChange={(e) => onFormChange('category', e.target.value)}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               >
//                 {categories.map(cat => (
//                   <option key={cat} value={cat}>{cat}</option>
//                 ))}
//               </select>
//             </div>
            
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">SKU</label>
//               <input
//                 type="text"
//                 value={productForm.sku}
//                 onChange={(e) => onFormChange('sku', e.target.value)}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 placeholder="e.g., PARA500"
//               />
//             </div>
//           </div>
          
//           <div className="grid md:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Stock Quantity *</label>
//               <input
//                 type="number"
//                 value={productForm.stock}
//                 onChange={(e) => onFormChange('stock', e.target.value)}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 placeholder="e.g., 100"
//               />
//             </div>
            
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Low Stock Alert</label>
//               <input
//                 type="number"
//                 value={productForm.lowStock}
//                 onChange={(e) => onFormChange('lowStock', e.target.value)}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 placeholder="e.g., 20"
//               />
//             </div>
//           </div>
          
//           <div className="grid md:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Selling Price (₹) *</label>
//               <input
//                 type="number"
//                 value={productForm.price}
//                 onChange={(e) => onFormChange('price', e.target.value)}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 placeholder="e.g., 15"
//               />
//             </div>
            
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Cost Price (₹)</label>
//               <input
//                 type="number"
//                 value={productForm.cost}
//                 onChange={(e) => onFormChange('cost', e.target.value)}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 placeholder="e.g., 8"
//               />
//             </div>
//           </div>
          
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Manufacturer</label>
//             <input
//               type="text"
//               value={productForm.manufacturer}
//               onChange={(e) => onFormChange('manufacturer', e.target.value)}
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               placeholder="e.g., Cipla"
//             />
//           </div>
          
//           <div className="grid md:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
//               <input
//                 type="date"
//                 value={productForm.expiry}
//                 onChange={(e) => onFormChange('expiry', e.target.value)}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               />
//             </div>
            
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Rack Location</label>
//               <input
//                 type="text"
//                 value={productForm.rack}
//                 onChange={(e) => onFormChange('rack', e.target.value)}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 placeholder="e.g., Rack A-1"
//               />
//             </div>
//           </div>
          
//           <div className="flex items-center">
//             <input
//               type="checkbox"
//               id="prescription"
//               checked={productForm.prescription}
//               onChange={(e) => onFormChange('prescription', e.target.checked)}
//               className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
//             />
//             <label htmlFor="prescription" className="ml-2 text-sm text-gray-700">
//               Prescription Required
//             </label>
//           </div>
//         </div>
//       </div>
      
//       {/* Fixed Footer */}
//       <div className="p-6 border-t border-gray-200 bg-white sticky bottom-0">
//         <div className="flex justify-end gap-3">
//           <button 
//             onClick={handleClose}
//             className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
//           >
//             Cancel
//           </button>
//           <button 
//             onClick={onSubmit}
//             className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2"
//           >
//             <FaCheck /> {editingProduct ? 'Update Product' : 'Add Product'}
//           </button>
//         </div>
//       </div>
//     </Modal>
//   );
// });

// const ProductDetailsModal = React.memo(({
//   product,
//   onClose,
//   onEdit,
//   onDelete
// }) => {
//   const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

//   const getStatusColor = (status) => {
//     switch (status) {
//       case 'In Stock': return 'bg-green-100 text-green-800';
//       case 'Low Stock': return 'bg-yellow-100 text-yellow-800';
//       case 'Critical': return 'bg-red-100 text-red-800';
//       default: return 'bg-gray-100 text-gray-800';
//     }
//   };

//   const handleEdit = () => {
//     onClose();
//     onEdit(product);
//   };

//   const handleDelete = () => {
//     onDelete(product.id);
//     onClose();
//   };

//   if (!product) return null;

//   return (
//     <>
//       <Modal
//         isOpen={!!product}
//         onClose={onClose}
//         title="Product Details"
//         size="lg"
//         position="top"
//         contentClassName="flex flex-col max-h-[calc(100vh-10.5rem)]"
//       >
//         {/* Scrollable Content */}
//         <div className="flex-1 overflow-y-auto">
//           {/* Product Header */}
//           <div className="px-6 py-4 border-b border-gray-200">
//             <div className="flex items-start">
//               <div className="p-4 bg-blue-100 rounded-xl mr-4 flex-shrink-0">
//                 <FaBox className="text-blue-600 text-2xl" />
//               </div>
//               <div className="flex-1 min-w-0">
//                 <h4 className="text-sm md:text-xl font-bold text-gray-800 truncate">{product.name}</h4>
//                 <div className="flex flex-wrap items-center gap-2 mt-2">
//                   <span className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(product.status)}`}>
//                     {product.status}
//                   </span>
//                   {product.prescription && (
//                     <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">
//                       Rx Required
//                     </span>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Content */}
//           <div className="p-6 space-y-6">
//             {/* Basic Information */}
//             <div>
//               <h5 className="font-bold text-gray-700 mb-3 text-sm uppercase tracking-wider">Basic Information</h5>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 <div className="bg-gray-50 p-3 rounded-lg">
//                   <label className="block text-xs text-gray-500 mb-1 font-medium">SKU Code</label>
//                   <div className="font-medium text-gray-800">{product.sku}</div>
//                 </div>
//                 <div className="bg-gray-50 p-3 rounded-lg">
//                   <label className="block text-xs text-gray-500 mb-1 font-medium">Category</label>
//                   <div className="font-medium text-gray-800">{product.category}</div>
//                 </div>
//                 <div className="bg-gray-50 p-3 rounded-lg">
//                   <label className="block text-xs text-gray-500 mb-1 font-medium">Manufacturer</label>
//                   <div className="font-medium text-gray-800">{product.manufacturer}</div>
//                 </div>
//                 <div className="bg-gray-50 p-3 rounded-lg">
//                   <label className="block text-xs text-gray-500 mb-1 font-medium">Batch Number</label>
//                   <div className="font-medium text-gray-800">{product.batch}</div>
//                 </div>
//               </div>
//             </div>

//             {/* Inventory Details */}
//             <div>
//               <h5 className="font-bold text-gray-700 mb-3 text-sm uppercase tracking-wider">Inventory Details</h5>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 <div className="bg-green-50 p-3 rounded-lg border border-green-100">
//                   <label className="block text-xs text-gray-500 mb-1 font-medium">Current Stock</label>
//                   <div className="font-bold text-lg text-green-700">{product.stock} units</div>
//                 </div>
//                 <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-100">
//                   <label className="block text-xs text-gray-500 mb-1 font-medium">Low Stock Alert</label>
//                   <div className="font-medium text-yellow-700">{product.lowStock} units</div>
//                 </div>
//                 <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
//                   <label className="block text-xs text-gray-500 mb-1 font-medium">Selling Price</label>
//                   <div className="font-bold text-lg text-blue-700">{product.price}</div>
//                 </div>
//                 <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
//                   <label className="block text-xs text-gray-500 mb-1 font-medium">Cost Price</label>
//                   <div className="font-medium text-gray-700">{product.cost}</div>
//                 </div>
//               </div>
//             </div>

//             {/* Location & Expiry */}
//             <div>
//               <h5 className="font-bold text-gray-700 mb-3 text-sm uppercase tracking-wider">Storage & Expiry</h5>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 <div className="bg-red-50 p-3 rounded-lg border border-red-100">
//                   <label className="block text-xs text-gray-500 mb-1 font-medium">Expiry Date</label>
//                   <div className="font-medium text-red-700 flex items-center gap-2">
//                     <FaCalendarAlt />
//                     {product.expiry}
//                   </div>
//                 </div>
//                 <div className="bg-purple-50 p-3 rounded-lg border border-purple-100">
//                   <label className="block text-xs text-gray-500 mb-1 font-medium">Rack Location</label>
//                   <div className="font-medium text-purple-700">{product.rack}</div>
//                 </div>
//                 <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
//                   <label className="block text-xs text-gray-500 mb-1 font-medium">Last Restocked</label>
//                   <div className="font-medium text-gray-700">{product.lastRestocked}</div>
//                 </div>
//               </div>
//             </div>

//             {/* Additional Info */}
//             <div className="bg-gray-50 rounded-lg p-4">
//               <h5 className="font-bold text-gray-700 mb-2 text-sm uppercase tracking-wider">Additional Information</h5>
//               <div className="text-sm text-gray-600">
//                 This product {product.prescription ? 'requires' : 'does not require'} a prescription.
//                 {product.stock <= product.lowStock && (
//                   <span className="text-yellow-600 font-medium ml-2">
//                     Stock is running low. Consider reordering soon.
//                   </span>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Fixed Footer */}
//         <div className="p-6 border-t border-gray-200 bg-gray-50 sticky bottom-0">
//           <div className="flex justify-between gap-2">
//             <button
//               onClick={() => setShowDeleteConfirm(true)}
//               className="px-2 py-2 border border-red-600 text-red-600 rounded-lg hover:bg-red-50 flex items-center gap-2 text-sm"
//             >
//               <FaTrash /> Delete Product
//             </button>
//             <button
//               onClick={handleEdit}
//               className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2 text-sm"
//             >
//               <FaEdit /> Edit Product
//             </button>
//           </div>
//         </div>
//       </Modal>

//       {/* Delete Confirmation Modal (stays centered) */}
//       <Modal
//         isOpen={showDeleteConfirm}
//         onClose={() => setShowDeleteConfirm(false)}
//         title="Confirm Delete"
//         size="sm"
//         position="center" // Keep confirmation modals centered
//       >
//         <div className="p-6">
//           <div className="text-center mb-6">
//             <FaExclamationTriangle className="text-red-500 text-4xl mx-auto mb-4" />
//             <h4 className="text-lg font-semibold text-gray-800 mb-2">Delete Product?</h4>
//             <p className="text-gray-600">
//               Are you sure you want to delete "{product?.name}"? This action cannot be undone.
//             </p>
//           </div>
          
//           <div className="flex justify-end gap-3">
//             <button
//               onClick={() => setShowDeleteConfirm(false)}
//               className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
//             >
//               Cancel
//             </button>
//             <button
//               onClick={handleDelete}
//               className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 flex items-center gap-2"
//             >
//               <FaTrash /> Delete
//             </button>
//           </div>
//         </div>
//       </Modal>
//     </>
//   );
// });

// const MobileProductCard = React.memo(({ 
//   product, 
//   onViewDetails, 
//   onEdit, 
//   onDelete 
// }) => {
//   const getStatusColor = (status) => {
//     switch(status) {
//       case 'In Stock': return 'bg-green-100 text-green-800';
//       case 'Low Stock': return 'bg-yellow-100 text-yellow-800';
//       case 'Critical': return 'bg-red-100 text-red-800';
//       default: return 'bg-gray-100 text-gray-800';
//     }
//   };

//   return (
//     <div className="bg-white p-4 rounded-xl border border-gray-200 mb-3">
//       <div className="flex justify-between items-start mb-3">
//         <div className="flex items-center">
//           <div className="p-2 bg-blue-100 rounded-lg mr-3">
//             <FaBox className="text-blue-600 text-sm" />
//           </div>
//           <div>
//             <div className="font-bold text-gray-800 text-sm">{product.name}</div>
//             <div className="text-xs text-gray-500">SKU: {product.sku}</div>
//           </div>
//         </div>
//         <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(product.status)}`}>
//           {product.status}
//         </span>
//       </div>
      
//       <div className="grid grid-cols-2 gap-3 mb-3">
//         <div>
//           <div className="text-xs text-gray-500">Category</div>
//           <div className="font-medium text-sm">{product.category}</div>
//         </div>
//         <div>
//           <div className="text-xs text-gray-500">Stock</div>
//           <div className="font-medium text-sm">{product.stock} units</div>
//         </div>
//         <div>
//           <div className="text-xs text-gray-500">Price</div>
//           <div className="font-bold text-sm">{product.price}</div>
//         </div>
//         <div>
//           <div className="text-xs text-gray-500">Expiry</div>
//           <div className="font-medium text-sm text-red-600">{product.expiry.split('-')[2]}/{product.expiry.split('-')[1]}</div>
//         </div>
//       </div>
      
//       <div className="flex justify-between items-center pt-3 border-t border-gray-100">
//         <div className="flex gap-2">
//           <button 
//             onClick={() => onViewDetails(product)}
//             className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
//             title="View Details"
//           >
//             <FaEye className="text-sm" />
//           </button>
//           <button 
//             onClick={() => onEdit(product)}
//             className="p-2 text-green-600 hover:bg-green-50 rounded-lg" 
//             title="Edit"
//           >
//             <FaEdit className="text-sm" />
//           </button>
//           <button 
//             onClick={() => {
//               if (window.confirm('Are you sure you want to delete this product?')) {
//                 onDelete(product.id);
//               }
//             }}
//             className="p-2 text-red-600 hover:bg-red-50 rounded-lg" 
//             title="Delete"
//           >
//             <FaTrash className="text-sm" />
//           </button>
//         </div>
//         {product.prescription && (
//           <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">
//             Rx Required
//           </span>
//         )}
//       </div>
//     </div>
//   );
// });

// // Main Component
// const ProductsManagement = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filter, setFilter] = useState('all');
//   const [activeTab, setActiveTab] = useState('inventory');
//   const [uploadProgress, setUploadProgress] = useState(0);
//   const [isUploading, setIsUploading] = useState(false);
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [showAddProductModal, setShowAddProductModal] = useState(false);
//   const [showProductDetails, setShowProductDetails] = useState(null);
//   const [editingProduct, setEditingProduct] = useState(null);
//   const fileInputRef = useRef(null);

//   // Add/Edit Product Form State
//   const [productForm, setProductForm] = useState({
//     name: '',
//     category: 'Pain Relief',
//     stock: '',
//     lowStock: '',
//     price: '',
//     cost: '',
//     expiry: '',
//     sku: '',
//     manufacturer: '',
//     batch: '',
//     rack: '',
//     prescription: false
//   });

//   // Sample products data
//   const [products, setProducts] = useState([
//     { 
//       id: 1, 
//       name: 'Paracetamol 500mg', 
//       category: 'Pain Relief', 
//       stock: 150, 
//       lowStock: 20, 
//       price: '₹15', 
//       cost: '₹8', 
//       expiry: '2024-12-01', 
//       status: 'In Stock', 
//       sku: 'PARA500', 
//       manufacturer: 'Cipla',
//       batch: 'BATCH001',
//       rack: 'Rack A-1',
//       prescription: false,
//       lastRestocked: '2024-01-10'
//     },
//     { 
//       id: 2, 
//       name: 'Amoxicillin 250mg', 
//       category: 'Antibiotic', 
//       stock: 45, 
//       lowStock: 30, 
//       price: '₹85', 
//       cost: '₹45', 
//       expiry: '2024-10-15', 
//       status: 'In Stock', 
//       sku: 'AMOX250', 
//       manufacturer: 'Sun Pharma',
//       batch: 'BATCH002',
//       rack: 'Rack B-3',
//       prescription: true,
//       lastRestocked: '2024-01-05'
//     },
//     { 
//       id: 3, 
//       name: 'Cetirizine 10mg', 
//       category: 'Allergy', 
//       stock: 12, 
//       lowStock: 15, 
//       price: '₹25', 
//       cost: '₹12', 
//       expiry: '2025-02-28', 
//       status: 'Low Stock', 
//       sku: 'CETI10', 
//       manufacturer: 'Dr. Reddy\'s',
//       batch: 'BATCH003',
//       rack: 'Rack C-2',
//       prescription: false,
//       lastRestocked: '2024-01-02'
//     },
//     { 
//       id: 4, 
//       name: 'Omeprazole 20mg', 
//       category: 'Antacid', 
//       stock: 80, 
//       lowStock: 25, 
//       price: '₹45', 
//       cost: '₹22', 
//       expiry: '2024-11-30', 
//       status: 'In Stock', 
//       sku: 'OMEP20', 
//       manufacturer: 'Torrent',
//       batch: 'BATCH004',
//       rack: 'Rack A-5',
//       prescription: false,
//       lastRestocked: '2024-01-08'
//     },
//   ]);

//   // Categories list
//   const categories = ['Pain Relief', 'Antibiotic', 'Allergy', 'Antacid', 'Diabetes', 'Supplements', 'First Aid'];

//   // Calculate statistics
//   const stats = useMemo(() => ({
//     totalProducts: products.length,
//     lowStockItems: products.filter(p => p.status === 'Low Stock' || p.status === 'Critical').length,
//     expiringSoon: products.filter(p => new Date(p.expiry) < new Date(Date.now() + 90 * 24 * 60 * 60 * 1000)).length,
//     totalInventoryValue: products.reduce((sum, p) => sum + (p.stock * parseFloat(p.cost.replace('₹', ''))), 0),
//     prescriptionRequired: products.filter(p => p.prescription).length,
//   }), [products]);

//   // Filter products
//   const filteredProducts = useMemo(() => 
//     products.filter(product => {
//       const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                            product.sku.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                            product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                            product.manufacturer.toLowerCase().includes(searchTerm.toLowerCase());
//       const matchesFilter = filter === 'all' || product.status === filter;
//       return matchesSearch && matchesFilter;
//     }),
//     [products, searchTerm, filter]
//   );

//   // Handle file upload
//   const handleFileUpload = useCallback((event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setSelectedFile(file);
      
//       // Check file type
//       const fileType = file.type;
//       const validTypes = [
//         'application/vnd.ms-excel',
//         'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
//         'text/csv',
//         'application/pdf',
//         'application/vnd.oasis.opendocument.spreadsheet'
//       ];
      
//       if (!validTypes.includes(fileType) && !file.name.match(/\.(xlsx|xls|csv|pdf|ods)$/i)) {
//         alert('Please upload Excel, CSV, or PDF files only');
//         return;
//       }
      
//       setIsUploading(true);
//       setUploadProgress(0);
      
//       // Simulate upload progress
//       const interval = setInterval(() => {
//         setUploadProgress(prev => {
//           if (prev >= 100) {
//             clearInterval(interval);
//             setIsUploading(false);
//             setTimeout(() => {
//               alert('File uploaded successfully! Products will be updated shortly.');
//               setSelectedFile(null);
//               setUploadProgress(0);
//             }, 500);
//             return 100;
//           }
//           return prev + 10;
//         });
//       }, 200);
//     }
//   }, []);

//   // Download template
//   const downloadTemplate = useCallback(() => {
//     const templateData = [
//       ['Product Name', 'Category', 'SKU', 'Manufacturer', 'Batch No', 'Rack Location', 'Cost Price', 'Selling Price', 'Stock Quantity', 'Low Stock Alert', 'Expiry Date', 'Prescription Required'],
//       ['Paracetamol 500mg', 'Pain Relief', 'PARA500', 'Cipla', 'BATCH001', 'Rack A-1', '8', '15', '150', '20', '2024-12-01', 'No'],
//       ['Amoxicillin 250mg', 'Antibiotic', 'AMOX250', 'Sun Pharma', 'BATCH002', 'Rack B-3', '45', '85', '45', '30', '2024-10-15', 'Yes']
//     ];
    
//     const csvContent = templateData.map(row => row.join(',')).join('\n');
//     const blob = new Blob([csvContent], { type: 'text/csv' });
//     const url = window.URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = 'pharmacy_products_template.csv';
//     a.click();
//   }, []);

//   // Handle form changes
//   const handleFormChange = useCallback((field, value) => {
//     setProductForm(prev => ({
//       ...prev,
//       [field]: value
//     }));
//   }, []);

//   // Handle Add Product
//   const handleAddProduct = useCallback(() => {
//     if (!productForm.name || !productForm.price || !productForm.stock) {
//       alert('Please fill in all required fields');
//       return;
//     }

//     const newProductObj = {
//       id: editingProduct ? editingProduct.id : products.length + 1,
//       name: productForm.name,
//       category: productForm.category,
//       stock: parseInt(productForm.stock),
//       lowStock: parseInt(productForm.lowStock) || 10,
//       price: `₹${productForm.price}`,
//       cost: productForm.cost ? `₹${productForm.cost}` : `₹${Math.round(parseInt(productForm.price) * 0.5)}`,
//       expiry: productForm.expiry || '2024-12-31',
//       status: parseInt(productForm.stock) < (parseInt(productForm.lowStock) || 10) ? 'Low Stock' : 'In Stock',
//       sku: productForm.sku || `SKU${Date.now().toString().slice(-6)}`,
//       manufacturer: productForm.manufacturer || 'Generic',
//       batch: productForm.batch || `BATCH${Date.now().toString().slice(-4)}`,
//       rack: productForm.rack || 'Rack A-1',
//       prescription: productForm.prescription,
//       lastRestocked: new Date().toISOString().split('T')[0]
//     };

//     if (editingProduct) {
//       // Update existing product
//       setProducts(products.map(p => p.id === editingProduct.id ? newProductObj : p));
//       alert('Product updated successfully!');
//     } else {
//       // Add new product
//       setProducts([...products, newProductObj]);
//       alert('Product added successfully!');
//     }
    
//     // Reset form and states
//     resetForm();
//     setShowAddProductModal(false);
//     setEditingProduct(null);
//   }, [productForm, editingProduct, products]);

//   // Handle Edit Product
//   const handleEditProduct = useCallback((product) => {
//     setEditingProduct(product);
//     setProductForm({
//       name: product.name,
//       category: product.category,
//       stock: product.stock.toString(),
//       lowStock: product.lowStock.toString(),
//       price: product.price.replace('₹', ''),
//       cost: product.cost.replace('₹', ''),
//       expiry: product.expiry,
//       sku: product.sku,
//       manufacturer: product.manufacturer,
//       batch: product.batch,
//       rack: product.rack,
//       prescription: product.prescription
//     });
//     setShowAddProductModal(true);
//   }, []);

//   // Handle View Product Details
//   const handleViewProductDetails = useCallback((product) => {
//     setShowProductDetails(product);
//   }, []);

//   // Handle Delete Product
//   const handleDeleteProduct = useCallback((id) => {
//     if (window.confirm('Are you sure you want to delete this product?')) {
//       setProducts(products.filter(product => product.id !== id));
//       if (showProductDetails && showProductDetails.id === id) {
//         setShowProductDetails(null);
//       }
//     }
//   }, [products, showProductDetails]);

//   // Reset form
//   const resetForm = useCallback(() => {
//     setProductForm({
//       name: '',
//       category: 'Pain Relief',
//       stock: '',
//       lowStock: '',
//       price: '',
//       cost: '',
//       expiry: '',
//       sku: '',
//       manufacturer: '',
//       batch: '',
//       rack: '',
//       prescription: false
//     });
//     setEditingProduct(null);
//   }, []);

//   // Main component render
//   return (
//     <div className="p-3 md:p-6">
//       {/* Header */}
//       <div className="mb-4 md:mb-6">
//         <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
//           <div>
//             <h1 className="text-lg md:text-2xl font-bold text-gray-800">Products Management</h1>
//             <p className="text-gray-600 text-xs md:text-sm">Manage inventory, upload products, and track stock levels</p>
//           </div>
//           <div className="flex gap-2">
//             <button 
//               onClick={() => setActiveTab('upload')}
//               className="flex items-center gap-1 px-3 py-2 bg-green-600 text-white text-xs md:text-sm rounded-lg hover:bg-green-700"
//             >
//               <FaUpload className="text-xs" /> Bulk Upload
//             </button>
//             <button 
//               onClick={() => {
//                 resetForm();
//                 setShowAddProductModal(true);
//               }}
//               className="flex items-center gap-1 px-3 py-2 bg-blue-600 text-white text-xs md:text-sm rounded-lg hover:bg-blue-700"
//             >
//               <FaPlus className="text-xs" /> Add Product
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Tabs */}
//       <div className="flex mb-4 border-b border-gray-200 overflow-x-auto">
//         <button
//           onClick={() => setActiveTab('inventory')}
//           className={`flex-shrink-0 px-3 md:px-4 py-2 font-medium border-b-2 whitespace-nowrap ${
//             activeTab === 'inventory' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500'
//           }`}
//         >
//           Inventory
//         </button>
//         <button
//           onClick={() => setActiveTab('upload')}
//           className={`flex-shrink-0 px-3 md:px-4 py-2 font-medium border-b-2 whitespace-nowrap ${
//             activeTab === 'upload' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500'
//           }`}
//         >
//           Bulk Upload
//         </button>
//         <button
//           onClick={() => setActiveTab('categories')}
//           className={`flex-shrink-0 px-3 md:px-4 py-2 font-medium border-b-2 whitespace-nowrap ${
//             activeTab === 'categories' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500'
//           }`}
//         >
//           Categories
//         </button>
//       </div>

//       {activeTab === 'inventory' && (
//         <>
//           {/* Quick Stats */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
//             <div className="bg-white p-3 rounded-xl border border-gray-200">
//               <div className="flex items-center">
//                 <div className="p-2 bg-blue-100 rounded-lg mr-3">
//                   <FaBox className="text-blue-600 text-sm" />
//                 </div>
//                 <div>
//                   <div className="text-xs text-gray-500">Total Products</div>
//                   <div className="text-sm md:text-lg font-bold text-gray-800">{stats.totalProducts}</div>
//                 </div>
//               </div>
//             </div>
            
//             <div className="bg-white p-3 rounded-xl border border-gray-200">
//               <div className="flex items-center">
//                 <div className="p-2 bg-yellow-100 rounded-lg mr-3">
//                   <FaExclamationTriangle className="text-yellow-600 text-sm" />
//                 </div>
//                 <div>
//                   <div className="text-xs text-gray-500">Low Stock</div>
//                   <div className="text-sm md:text-lg font-bold text-yellow-600">{stats.lowStockItems}</div>
//                 </div>
//               </div>
//             </div>
            
//             <div className="bg-white p-3 rounded-xl border border-gray-200">
//               <div className="flex items-center">
//                 <div className="p-2 bg-red-100 rounded-lg mr-3">
//                   <FaCalendarAlt className="text-red-600 text-sm" />
//                 </div>
//                 <div>
//                   <div className="text-xs text-gray-500">Expiring Soon</div>
//                   <div className="text-sm md:text-lg font-bold text-red-600">{stats.expiringSoon}</div>
//                 </div>
//               </div>
//             </div>
            
//             <div className="bg-white p-3 rounded-xl border border-gray-200">
//               <div className="flex items-center">
//                 <div className="p-2 bg-green-100 rounded-lg mr-3">
//                   <FaRupeeSign className="text-green-600 text-sm" />
//                 </div>
//                 <div>
//                   <div className="text-xs text-gray-500">Inventory Value</div>
//                   <div className="text-sm md:text-lg font-bold text-green-600">₹{stats.totalInventoryValue.toLocaleString()}</div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Actions Bar */}
//           <div className="bg-white p-3 rounded-xl border border-gray-200 mb-4">
//             <div className="flex flex-col md:flex-row gap-3">
//               <div className="flex-1">
//                 <div className="relative">
//                   <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
//                   <input
//                     type="text"
//                     placeholder="Search products..."
//                     value={searchTerm}
//                     onChange={(e) => setSearchTerm(e.target.value)}
//                     className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   />
//                 </div>
//               </div>
              
//               <div className="flex gap-2">
//                 <div className="relative flex-1 min-w-[120px]">
//                   <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
//                   <select
//                     value={filter}
//                     onChange={(e) => setFilter(e.target.value)}
//                     className="w-full pl-10 pr-8 py-2 text-sm border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   >
//                     <option value="all">All Status</option>
//                     <option value="In Stock">In Stock</option>
//                     <option value="Low Stock">Low Stock</option>
//                     <option value="Critical">Critical</option>
//                   </select>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Products List */}
//           <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
//             {/* Mobile View: Cards */}
//             <div className="md:hidden p-3">
//               {filteredProducts.length === 0 ? (
//                 <div className="text-center py-8">
//                   <div className="text-gray-400 mb-2">No products found</div>
//                   <div className="text-gray-500 text-sm">Try adjusting your search or filter</div>
//                 </div>
//               ) : (
//                 filteredProducts.map((product) => (
//                   <MobileProductCard 
//                     key={product.id} 
//                     product={product}
//                     onViewDetails={handleViewProductDetails}
//                     onEdit={handleEditProduct}
//                     onDelete={handleDeleteProduct}
//                   />
//                 ))
//               )}
//             </div>

//             {/* Desktop View: Table */}
//             <div className="hidden md:block overflow-x-auto">
//               <table className="min-w-full divide-y divide-gray-200">
//                 <thead className="bg-gray-50">
//                   <tr>
//                     <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">Product</th>
//                     <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">Category</th>
//                     <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">Stock</th>
//                     <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">Price</th>
//                     <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">Expiry</th>
//                     <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">Status</th>
//                     <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody className="divide-y divide-gray-200">
//                   {filteredProducts.map((product) => (
//                     <tr key={product.id} className="hover:bg-gray-50 text-center">
//                       <td className="px-4 py-3">
//                         <div className="flex items-center">
//                           <div className="p-2 bg-blue-100 rounded-lg mr-3">
//                             <FaBox className="text-blue-600 text-sm" />
//                           </div>
//                           <div>
//                             <div className="font-medium text-sm text-gray-900">{product.name}</div>
//                             <div className="text-xs text-gray-500">SKU: {product.sku}</div>
//                             {product.prescription && (
//                               <span className="mt-1 inline-block px-2 py-0.5 text-xs bg-blue-100 text-blue-800 rounded">
//                                 Rx Required
//                               </span>
//                             )}
//                           </div>
//                         </div>
//                       </td>
//                       <td className="px-4 py-3">
//                         <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
//                           {product.category}
//                         </span>
//                       </td>
//                       <td className="px-4 py-3">
//                         <div className="font-medium text-sm">{product.stock} units</div>
//                         <div className="text-xs text-gray-500">Min: {product.lowStock}</div>
//                       </td>
//                       <td className="px-4 py-3">
//                         <div className="font-bold text-sm">{product.price}</div>
//                         <div className="text-xs text-gray-600">Cost: {product.cost}</div>
//                       </td>
//                       <td className="px-4 py-3">
//                         <div className="text-sm font-medium text-red-600">{product.expiry}</div>
//                       </td>
//                       <td className="px-4 py-3">
//                         <span className={`px-2 py-1 text-xs font-medium rounded-full ${
//                           product.status === 'In Stock' ? 'bg-green-100 text-green-800' :
//                           product.status === 'Low Stock' ? 'bg-yellow-100 text-yellow-800' :
//                           'bg-red-100 text-red-800'
//                         }`}>
//                           {product.status}
//                         </span>
//                       </td>
//                       <td className="px-4 py-3">
//                         <div className="flex gap-2 justify-center">
//                           <button 
//                             onClick={() => handleViewProductDetails(product)}
//                             className="p-1 text-blue-600 hover:bg-blue-50 rounded" 
//                             title="View Details"
//                           >
//                             <FaEye className="text-sm" />
//                           </button>
//                           <button 
//                             onClick={() => handleEditProduct(product)}
//                             className="p-1 text-green-600 hover:bg-green-50 rounded" 
//                             title="Edit"
//                           >
//                             <FaEdit className="text-sm" />
//                           </button>
//                           <button 
//                             onClick={() => handleDeleteProduct(product.id)}
//                             className="p-1 text-red-600 hover:bg-red-50 rounded" 
//                             title="Delete"
//                           >
//                             <FaTrash className="text-sm" />
//                           </button>
//                         </div>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
              
//               {filteredProducts.length === 0 && (
//                 <div className="text-center py-8">
//                   <div className="text-gray-400 mb-2">No products found</div>
//                   <div className="text-gray-500 text-sm">Try adjusting your search or filter</div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </>
//       )}

//       {activeTab === 'upload' && (
//         <div className="space-y-4">
//           {/* Upload Section */}
//           <div className="bg-white rounded-xl border border-gray-200 p-4">
//             <h2 className="text-lg font-bold text-gray-800 mb-3">Bulk Upload Products</h2>
//             <p className="text-gray-600 mb-4 text-sm">Upload Excel, CSV, or PDF files to update your product inventory</p>

//             {/* Upload Area */}
//             <div 
//               className={`border-2 border-dashed rounded-xl p-4 text-center mb-4 ${
//                 isUploading ? 'border-blue-300 bg-blue-50' : 'border-gray-300 hover:border-blue-400 hover:bg-blue-50'
//               }`}
//               onClick={() => fileInputRef.current?.click()}
//             >
//               <FaUpload className="text-3xl text-gray-400 mx-auto mb-3" />
//               <h3 className="font-medium text-gray-700 mb-1">Click to upload files</h3>
//               <p className="text-gray-500 text-sm mb-3">Supports: Excel, CSV, PDF</p>
              
//               <input
//                 type="file"
//                 ref={fileInputRef}
//                 onChange={handleFileUpload}
//                 accept=".xlsx,.xls,.csv,.pdf,.ods"
//                 className="hidden"
//               />

//               <div className="flex flex-wrap justify-center gap-2 mb-4">
//                 <div className="flex items-center gap-1 px-2 py-1 bg-blue-50 rounded-lg">
//                   <FaFileExcel className="text-green-600 text-xs" />
//                   <span className="text-xs">Excel</span>
//                 </div>
//                 <div className="flex items-center gap-1 px-2 py-1 bg-blue-50 rounded-lg">
//                   <FaFileCsv className="text-blue-600 text-xs" />
//                   <span className="text-xs">CSV</span>
//                 </div>
//                 <div className="flex items-center gap-1 px-2 py-1 bg-blue-50 rounded-lg">
//                   <FaFilePdf className="text-red-600 text-xs" />
//                   <span className="text-xs">PDF</span>
//                 </div>
//               </div>

//               {selectedFile && (
//                 <div className="mb-3 p-2 bg-blue-50 rounded-lg">
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center">
//                       {selectedFile.name.match(/\.xlsx?$/i) ? (
//                         <FaFileExcel className="text-green-600 mr-2 text-xs" />
//                       ) : selectedFile.name.match(/\.csv$/i) ? (
//                         <FaFileCsv className="text-blue-600 mr-2 text-xs" />
//                       ) : (
//                         <FaFilePdf className="text-red-600 mr-2 text-xs" />
//                       )}
//                       <span className="text-xs font-medium truncate max-w-[180px]">{selectedFile.name}</span>
//                     </div>
//                     <span className="text-xs text-gray-500">
//                       {(selectedFile.size / 1024).toFixed(1)} KB
//                     </span>
//                   </div>
//                 </div>
//               )}

//               {isUploading && (
//                 <div className="mb-3">
//                   <div className="flex justify-between text-xs mb-1">
//                     <span>Uploading...</span>
//                     <span>{uploadProgress}%</span>
//                   </div>
//                   <div className="w-full bg-gray-200 rounded-full h-1.5">
//                     <div 
//                       className="bg-blue-600 h-1.5 rounded-full transition-all duration-300"
//                       style={{ width: `${uploadProgress}%` }}
//                     ></div>
//                   </div>
//                 </div>
//               )}

//               <button 
//                 onClick={downloadTemplate}
//                 className="flex items-center gap-1 px-3 py-2 border border-blue-600 text-blue-600 text-sm rounded-lg hover:bg-blue-50 mx-auto"
//               >
//                 <FaDownload className="text-xs" /> Download Template
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {activeTab === 'categories' && (
//         <div className="bg-white rounded-xl border border-gray-200 p-4">
//           <h3 className="text-lg font-bold text-gray-800 mb-4">Product Categories</h3>
          
//           <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
//             {categories.map((category) => {
//               const count = products.filter(p => p.category === category).length;
//               return (
//                 <div key={category} className="p-3 border border-gray-200 rounded-lg">
//                   <div className="flex items-center justify-between mb-2">
//                     <div className="font-medium text-sm">{category}</div>
//                     <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
//                       {count}
//                     </span>
//                   </div>
//                   <div className="text-xs text-gray-600">
//                     {count} products
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       )}

//       {/* Add/Edit Product Modal */}
//       <AddProductModal 
//         showModal={showAddProductModal}
//         onClose={() => setShowAddProductModal(false)}
//         editingProduct={editingProduct}
//         productForm={productForm}
//         onFormChange={handleFormChange}
//         categories={categories}
//         onSubmit={handleAddProduct}
//         onReset={resetForm}
//       />
      
//       {/* Product Details Modal */}
//       <ProductDetailsModal 
//         product={showProductDetails}
//         onClose={() => setShowProductDetails(null)}
//         onEdit={handleEditProduct}
//         onDelete={handleDeleteProduct}
//       />
//     </div>
//   );
// };

// export default ProductsManagement;















































// // src/pages/pharmacy/ProductsManagement.jsx
// import React, { useState, useRef, useCallback, useMemo } from 'react';
// import { 
//   FaSearch, 
//   FaFilter, 
//   FaPlus, 
//   FaUpload,
//   FaDownload,
//   FaFileExcel,
//   FaFileCsv,
//   FaFilePdf,
//   FaRupeeSign,
//   FaCalendarAlt,
//   FaExclamationTriangle,
//   FaBox,
//   FaEye,
//   FaEdit,
//   FaTrash
// } from 'react-icons/fa';

// // Import separated components
// import AddProductModal from '../Modal/AddProductModal';
// import ProductDetailsModal from '../Modal/ProductDetailsModal';
// import MobileProductCard from '../Modal/MobileProductCard';

// // Main Component
// const ProductsManagement = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filter, setFilter] = useState('all');
//   const [activeTab, setActiveTab] = useState('inventory');
//   const [uploadProgress, setUploadProgress] = useState(0);
//   const [isUploading, setIsUploading] = useState(false);
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [showAddProductModal, setShowAddProductModal] = useState(false);
//   const [showProductDetails, setShowProductDetails] = useState(null);
//   const [editingProduct, setEditingProduct] = useState(null);
//   const fileInputRef = useRef(null);

//   // Add/Edit Product Form State
//   const [productForm, setProductForm] = useState({
//     name: '',
//     category: 'Pain Relief',
//     stock: '',
//     lowStock: '',
//     price: '',
//     cost: '',
//     expiry: '',
//     sku: '',
//     manufacturer: '',
//     batch: '',
//     rack: '',
//     prescription: false
//   });

//   // Sample products data
//   const [products, setProducts] = useState([
//     { 
//       id: 1, 
//       name: 'Paracetamol 500mg', 
//       category: 'Pain Relief', 
//       stock: 150, 
//       lowStock: 20, 
//       price: '₹15', 
//       cost: '₹8', 
//       expiry: '2024-12-01', 
//       status: 'In Stock', 
//       sku: 'PARA500', 
//       manufacturer: 'Cipla',
//       batch: 'BATCH001',
//       rack: 'Rack A-1',
//       prescription: false,
//       lastRestocked: '2024-01-10'
//     },
//     { 
//       id: 2, 
//       name: 'Amoxicillin 250mg', 
//       category: 'Antibiotic', 
//       stock: 45, 
//       lowStock: 30, 
//       price: '₹85', 
//       cost: '₹45', 
//       expiry: '2024-10-15', 
//       status: 'In Stock', 
//       sku: 'AMOX250', 
//       manufacturer: 'Sun Pharma',
//       batch: 'BATCH002',
//       rack: 'Rack B-3',
//       prescription: true,
//       lastRestocked: '2024-01-05'
//     },
//     { 
//       id: 3, 
//       name: 'Cetirizine 10mg', 
//       category: 'Allergy', 
//       stock: 12, 
//       lowStock: 15, 
//       price: '₹25', 
//       cost: '₹12', 
//       expiry: '2025-02-28', 
//       status: 'Low Stock', 
//       sku: 'CETI10', 
//       manufacturer: 'Dr. Reddy\'s',
//       batch: 'BATCH003',
//       rack: 'Rack C-2',
//       prescription: false,
//       lastRestocked: '2024-01-02'
//     },
//     { 
//       id: 4, 
//       name: 'Omeprazole 20mg', 
//       category: 'Antacid', 
//       stock: 80, 
//       lowStock: 25, 
//       price: '₹45', 
//       cost: '₹22', 
//       expiry: '2024-11-30', 
//       status: 'In Stock', 
//       sku: 'OMEP20', 
//       manufacturer: 'Torrent',
//       batch: 'BATCH004',
//       rack: 'Rack A-5',
//       prescription: false,
//       lastRestocked: '2024-01-08'
//     },
//   ]);

//   // Categories list
//   const categories = ['Pain Relief', 'Antibiotic', 'Allergy', 'Antacid', 'Diabetes', 'Supplements', 'First Aid'];

//   // Calculate statistics
//   const stats = useMemo(() => ({
//     totalProducts: products.length,
//     lowStockItems: products.filter(p => p.status === 'Low Stock' || p.status === 'Critical').length,
//     expiringSoon: products.filter(p => new Date(p.expiry) < new Date(Date.now() + 90 * 24 * 60 * 60 * 1000)).length,
//     totalInventoryValue: products.reduce((sum, p) => sum + (p.stock * parseFloat(p.cost.replace('₹', ''))), 0),
//     prescriptionRequired: products.filter(p => p.prescription).length,
//   }), [products]);

//   // Filter products
//   const filteredProducts = useMemo(() => 
//     products.filter(product => {
//       const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                            product.sku.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                            product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                            product.manufacturer.toLowerCase().includes(searchTerm.toLowerCase());
//       const matchesFilter = filter === 'all' || product.status === filter;
//       return matchesSearch && matchesFilter;
//     }),
//     [products, searchTerm, filter]
//   );

//   // Handle file upload
//   const handleFileUpload = useCallback((event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setSelectedFile(file);
      
//       // Check file type
//       const fileType = file.type;
//       const validTypes = [
//         'application/vnd.ms-excel',
//         'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
//         'text/csv',
//         'application/pdf',
//         'application/vnd.oasis.opendocument.spreadsheet'
//       ];
      
//       if (!validTypes.includes(fileType) && !file.name.match(/\.(xlsx|xls|csv|pdf|ods)$/i)) {
//         alert('Please upload Excel, CSV, or PDF files only');
//         return;
//       }
      
//       setIsUploading(true);
//       setUploadProgress(0);
      
//       // Simulate upload progress
//       const interval = setInterval(() => {
//         setUploadProgress(prev => {
//           if (prev >= 100) {
//             clearInterval(interval);
//             setIsUploading(false);
//             setTimeout(() => {
//               alert('File uploaded successfully! Products will be updated shortly.');
//               setSelectedFile(null);
//               setUploadProgress(0);
//             }, 500);
//             return 100;
//           }
//           return prev + 10;
//         });
//       }, 200);
//     }
//   }, []);

//   // Download template
//   const downloadTemplate = useCallback(() => {
//     const templateData = [
//       ['Product Name', 'Category', 'SKU', 'Manufacturer', 'Batch No', 'Rack Location', 'Cost Price', 'Selling Price', 'Stock Quantity', 'Low Stock Alert', 'Expiry Date', 'Prescription Required'],
//       ['Paracetamol 500mg', 'Pain Relief', 'PARA500', 'Cipla', 'BATCH001', 'Rack A-1', '8', '15', '150', '20', '2024-12-01', 'No'],
//       ['Amoxicillin 250mg', 'Antibiotic', 'AMOX250', 'Sun Pharma', 'BATCH002', 'Rack B-3', '45', '85', '45', '30', '2024-10-15', 'Yes']
//     ];
    
//     const csvContent = templateData.map(row => row.join(',')).join('\n');
//     const blob = new Blob([csvContent], { type: 'text/csv' });
//     const url = window.URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = 'pharmacy_products_template.csv';
//     a.click();
//   }, []);

//   // Handle form changes
//   const handleFormChange = useCallback((field, value) => {
//     setProductForm(prev => ({
//       ...prev,
//       [field]: value
//     }));
//   }, []);

//   // Handle Add Product
//   const handleAddProduct = useCallback(() => {
//     if (!productForm.name || !productForm.price || !productForm.stock) {
//       alert('Please fill in all required fields');
//       return;
//     }

//     const newProductObj = {
//       id: editingProduct ? editingProduct.id : products.length + 1,
//       name: productForm.name,
//       category: productForm.category,
//       stock: parseInt(productForm.stock),
//       lowStock: parseInt(productForm.lowStock) || 10,
//       price: `₹${productForm.price}`,
//       cost: productForm.cost ? `₹${productForm.cost}` : `₹${Math.round(parseInt(productForm.price) * 0.5)}`,
//       expiry: productForm.expiry || '2024-12-31',
//       status: parseInt(productForm.stock) < (parseInt(productForm.lowStock) || 10) ? 'Low Stock' : 'In Stock',
//       sku: productForm.sku || `SKU${Date.now().toString().slice(-6)}`,
//       manufacturer: productForm.manufacturer || 'Generic',
//       batch: productForm.batch || `BATCH${Date.now().toString().slice(-4)}`,
//       rack: productForm.rack || 'Rack A-1',
//       prescription: productForm.prescription,
//       lastRestocked: new Date().toISOString().split('T')[0]
//     };

//     if (editingProduct) {
//       // Update existing product
//       setProducts(products.map(p => p.id === editingProduct.id ? newProductObj : p));
//       alert('Product updated successfully!');
//     } else {
//       // Add new product
//       setProducts([...products, newProductObj]);
//       alert('Product added successfully!');
//     }
    
//     // Reset form and states
//     resetForm();
//     setShowAddProductModal(false);
//     setEditingProduct(null);
//   }, [productForm, editingProduct, products]);

//   // Handle Edit Product
//   const handleEditProduct = useCallback((product) => {
//     setEditingProduct(product);
//     setProductForm({
//       name: product.name,
//       category: product.category,
//       stock: product.stock.toString(),
//       lowStock: product.lowStock.toString(),
//       price: product.price.replace('₹', ''),
//       cost: product.cost.replace('₹', ''),
//       expiry: product.expiry,
//       sku: product.sku,
//       manufacturer: product.manufacturer,
//       batch: product.batch,
//       rack: product.rack,
//       prescription: product.prescription
//     });
//     setShowAddProductModal(true);
//   }, []);

//   // Handle View Product Details
//   const handleViewProductDetails = useCallback((product) => {
//     setShowProductDetails(product);
//   }, []);

//   // Handle Delete Product
//   const handleDeleteProduct = useCallback((id) => {
//     if (window.confirm('Are you sure you want to delete this product?')) {
//       setProducts(products.filter(product => product.id !== id));
//       if (showProductDetails && showProductDetails.id === id) {
//         setShowProductDetails(null);
//       }
//     }
//   }, [products, showProductDetails]);

//   // Reset form
//   const resetForm = useCallback(() => {
//     setProductForm({
//       name: '',
//       category: 'Pain Relief',
//       stock: '',
//       lowStock: '',
//       price: '',
//       cost: '',
//       expiry: '',
//       sku: '',
//       manufacturer: '',
//       batch: '',
//       rack: '',
//       prescription: false
//     });
//     setEditingProduct(null);
//   }, []);

//   // Main component render
//   return (
//     <div className="p-3 md:p-6">
//       {/* Header */}
//       <div className="mb-4 md:mb-6">
//         <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
//           <div>
//             <h1 className="text-lg md:text-2xl font-bold text-gray-800">Products Management</h1>
//             <p className="text-gray-600 text-xs md:text-sm">Manage inventory, upload products, and track stock levels</p>
//           </div>
//           <div className="flex gap-2">
//             <button 
//               onClick={() => setActiveTab('upload')}
//               className="flex items-center gap-1 px-3 py-2 bg-green-600 text-white text-xs md:text-sm rounded-lg hover:bg-green-700"
//             >
//               <FaUpload className="text-xs" /> Bulk Upload
//             </button>
//             <button 
//               onClick={() => {
//                 resetForm();
//                 setShowAddProductModal(true);
//               }}
//               className="flex items-center gap-1 px-3 py-2 bg-blue-600 text-white text-xs md:text-sm rounded-lg hover:bg-blue-700"
//             >
//               <FaPlus className="text-xs" /> Add Product
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Tabs */}
//       <div className="flex mb-4 border-b border-gray-200 overflow-x-auto">
//         <button
//           onClick={() => setActiveTab('inventory')}
//           className={`flex-shrink-0 px-3 md:px-4 py-2 font-medium border-b-2 whitespace-nowrap ${
//             activeTab === 'inventory' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500'
//           }`}
//         >
//           Inventory
//         </button>
//         <button
//           onClick={() => setActiveTab('upload')}
//           className={`flex-shrink-0 px-3 md:px-4 py-2 font-medium border-b-2 whitespace-nowrap ${
//             activeTab === 'upload' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500'
//           }`}
//         >
//           Bulk Upload
//         </button>
//         <button
//           onClick={() => setActiveTab('categories')}
//           className={`flex-shrink-0 px-3 md:px-4 py-2 font-medium border-b-2 whitespace-nowrap ${
//             activeTab === 'categories' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500'
//           }`}
//         >
//           Categories
//         </button>
//       </div>

//       {activeTab === 'inventory' && (
//         <>
//           {/* Quick Stats */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
//             <div className="bg-white p-3 rounded-xl border border-gray-200">
//               <div className="flex items-center">
//                 <div className="p-2 bg-blue-100 rounded-lg mr-3">
//                   <FaBox className="text-blue-600 text-sm" />
//                 </div>
//                 <div>
//                   <div className="text-xs text-gray-500">Total Products</div>
//                   <div className="text-sm md:text-lg font-bold text-gray-800">{stats.totalProducts}</div>
//                 </div>
//               </div>
//             </div>
            
//             <div className="bg-white p-3 rounded-xl border border-gray-200">
//               <div className="flex items-center">
//                 <div className="p-2 bg-yellow-100 rounded-lg mr-3">
//                   <FaExclamationTriangle className="text-yellow-600 text-sm" />
//                 </div>
//                 <div>
//                   <div className="text-xs text-gray-500">Low Stock</div>
//                   <div className="text-sm md:text-lg font-bold text-yellow-600">{stats.lowStockItems}</div>
//                 </div>
//               </div>
//             </div>
            
//             <div className="bg-white p-3 rounded-xl border border-gray-200">
//               <div className="flex items-center">
//                 <div className="p-2 bg-red-100 rounded-lg mr-3">
//                   <FaCalendarAlt className="text-red-600 text-sm" />
//                 </div>
//                 <div>
//                   <div className="text-xs text-gray-500">Expiring Soon</div>
//                   <div className="text-sm md:text-lg font-bold text-red-600">{stats.expiringSoon}</div>
//                 </div>
//               </div>
//             </div>
            
//             <div className="bg-white p-3 rounded-xl border border-gray-200">
//               <div className="flex items-center">
//                 <div className="p-2 bg-green-100 rounded-lg mr-3">
//                   <FaRupeeSign className="text-green-600 text-sm" />
//                 </div>
//                 <div>
//                   <div className="text-xs text-gray-500">Inventory Value</div>
//                   <div className="text-sm md:text-lg font-bold text-green-600">₹{stats.totalInventoryValue.toLocaleString()}</div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Actions Bar */}
//           <div className="bg-white p-3 rounded-xl border border-gray-200 mb-4">
//             <div className="flex flex-col md:flex-row gap-3">
//               <div className="flex-1">
//                 <div className="relative">
//                   <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
//                   <input
//                     type="text"
//                     placeholder="Search products..."
//                     value={searchTerm}
//                     onChange={(e) => setSearchTerm(e.target.value)}
//                     className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   />
//                 </div>
//               </div>
              
//               <div className="flex gap-2">
//                 <div className="relative flex-1 min-w-[120px]">
//                   <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
//                   <select
//                     value={filter}
//                     onChange={(e) => setFilter(e.target.value)}
//                     className="w-full pl-10 pr-8 py-2 text-sm border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   >
//                     <option value="all">All Status</option>
//                     <option value="In Stock">In Stock</option>
//                     <option value="Low Stock">Low Stock</option>
//                     <option value="Critical">Critical</option>
//                   </select>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Products List */}
//           <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
//             {/* Mobile View: Cards */}
//             <div className="md:hidden p-3">
//               {filteredProducts.length === 0 ? (
//                 <div className="text-center py-8">
//                   <div className="text-gray-400 mb-2">No products found</div>
//                   <div className="text-gray-500 text-sm">Try adjusting your search or filter</div>
//                 </div>
//               ) : (
//                 filteredProducts.map((product) => (
//                   <MobileProductCard 
//                     key={product.id} 
//                     product={product}
//                     onViewDetails={handleViewProductDetails}
//                     onEdit={handleEditProduct}
//                     onDelete={handleDeleteProduct}
//                   />
//                 ))
//               )}
//             </div>

//             {/* Desktop View: Table */}
//             <div className="hidden md:block overflow-x-auto">
//               <table className="min-w-full divide-y divide-gray-200">
//                 <thead className="bg-gray-50">
//                   <tr>
//                     <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">Product</th>
//                     <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">Category</th>
//                     <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">Stock</th>
//                     <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">Price</th>
//                     <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">Expiry</th>
//                     <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">Status</th>
//                     <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody className="divide-y divide-gray-200">
//                   {filteredProducts.map((product) => (
//                     <tr key={product.id} className="hover:bg-gray-50 text-center">
//                       <td className="px-4 py-3">
//                         <div className="flex items-center">
//                           <div className="p-2 bg-blue-100 rounded-lg mr-3">
//                             <FaBox className="text-blue-600 text-sm" />
//                           </div>
//                           <div>
//                             <div className="font-medium text-sm text-gray-900">{product.name}</div>
//                             <div className="text-xs text-gray-500">SKU: {product.sku}</div>
//                             {product.prescription && (
//                               <span className="mt-1 inline-block px-2 py-0.5 text-xs bg-blue-100 text-blue-800 rounded">
//                                 Rx Required
//                               </span>
//                             )}
//                           </div>
//                         </div>
//                       </td>
//                       <td className="px-4 py-3">
//                         <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
//                           {product.category}
//                         </span>
//                       </td>
//                       <td className="px-4 py-3">
//                         <div className="font-medium text-sm">{product.stock} units</div>
//                         <div className="text-xs text-gray-500">Min: {product.lowStock}</div>
//                       </td>
//                       <td className="px-4 py-3">
//                         <div className="font-bold text-sm">{product.price}</div>
//                         <div className="text-xs text-gray-600">Cost: {product.cost}</div>
//                       </td>
//                       <td className="px-4 py-3">
//                         <div className="text-sm font-medium text-red-600">{product.expiry}</div>
//                       </td>
//                       <td className="px-4 py-3">
//                         <span className={`px-2 py-1 text-xs font-medium rounded-full ${
//                           product.status === 'In Stock' ? 'bg-green-100 text-green-800' :
//                           product.status === 'Low Stock' ? 'bg-yellow-100 text-yellow-800' :
//                           'bg-red-100 text-red-800'
//                         }`}>
//                           {product.status}
//                         </span>
//                       </td>
//                       <td className="px-4 py-3">
//                         <div className="flex gap-2 justify-center">
//                           <button 
//                             onClick={() => handleViewProductDetails(product)}
//                             className="p-1 text-blue-600 hover:bg-blue-50 rounded" 
//                             title="View Details"
//                           >
//                             <FaEye className="text-sm" />
//                           </button>
//                           <button 
//                             onClick={() => handleEditProduct(product)}
//                             className="p-1 text-green-600 hover:bg-green-50 rounded" 
//                             title="Edit"
//                           >
//                             <FaEdit className="text-sm" />
//                           </button>
//                           <button 
//                             onClick={() => handleDeleteProduct(product.id)}
//                             className="p-1 text-red-600 hover:bg-red-50 rounded" 
//                             title="Delete"
//                           >
//                             <FaTrash className="text-sm" />
//                           </button>
//                         </div>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
              
//               {filteredProducts.length === 0 && (
//                 <div className="text-center py-8">
//                   <div className="text-gray-400 mb-2">No products found</div>
//                   <div className="text-gray-500 text-sm">Try adjusting your search or filter</div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </>
//       )}

//       {activeTab === 'upload' && (
//         <div className="space-y-4">
//           {/* Upload Section */}
//           <div className="bg-white rounded-xl border border-gray-200 p-4">
//             <h2 className="text-lg font-bold text-gray-800 mb-3">Bulk Upload Products</h2>
//             <p className="text-gray-600 mb-4 text-sm">Upload Excel, CSV, or PDF files to update your product inventory</p>

//             {/* Upload Area */}
//             <div 
//               className={`border-2 border-dashed rounded-xl p-4 text-center mb-4 ${
//                 isUploading ? 'border-blue-300 bg-blue-50' : 'border-gray-300 hover:border-blue-400 hover:bg-blue-50'
//               }`}
//               onClick={() => fileInputRef.current?.click()}
//             >
//               <FaUpload className="text-3xl text-gray-400 mx-auto mb-3" />
//               <h3 className="font-medium text-gray-700 mb-1">Click to upload files</h3>
//               <p className="text-gray-500 text-sm mb-3">Supports: Excel, CSV, PDF</p>
              
//               <input
//                 type="file"
//                 ref={fileInputRef}
//                 onChange={handleFileUpload}
//                 accept=".xlsx,.xls,.csv,.pdf,.ods"
//                 className="hidden"
//               />

//               <div className="flex flex-wrap justify-center gap-2 mb-4">
//                 <div className="flex items-center gap-1 px-2 py-1 bg-blue-50 rounded-lg">
//                   <FaFileExcel className="text-green-600 text-xs" />
//                   <span className="text-xs">Excel</span>
//                 </div>
//                 <div className="flex items-center gap-1 px-2 py-1 bg-blue-50 rounded-lg">
//                   <FaFileCsv className="text-blue-600 text-xs" />
//                   <span className="text-xs">CSV</span>
//                 </div>
//                 <div className="flex items-center gap-1 px-2 py-1 bg-blue-50 rounded-lg">
//                   <FaFilePdf className="text-red-600 text-xs" />
//                   <span className="text-xs">PDF</span>
//                 </div>
//               </div>

//               {selectedFile && (
//                 <div className="mb-3 p-2 bg-blue-50 rounded-lg">
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center">
//                       {selectedFile.name.match(/\.xlsx?$/i) ? (
//                         <FaFileExcel className="text-green-600 mr-2 text-xs" />
//                       ) : selectedFile.name.match(/\.csv$/i) ? (
//                         <FaFileCsv className="text-blue-600 mr-2 text-xs" />
//                       ) : (
//                         <FaFilePdf className="text-red-600 mr-2 text-xs" />
//                       )}
//                       <span className="text-xs font-medium truncate max-w-[180px]">{selectedFile.name}</span>
//                     </div>
//                     <span className="text-xs text-gray-500">
//                       {(selectedFile.size / 1024).toFixed(1)} KB
//                     </span>
//                   </div>
//                 </div>
//               )}

//               {isUploading && (
//                 <div className="mb-3">
//                   <div className="flex justify-between text-xs mb-1">
//                     <span>Uploading...</span>
//                     <span>{uploadProgress}%</span>
//                   </div>
//                   <div className="w-full bg-gray-200 rounded-full h-1.5">
//                     <div 
//                       className="bg-blue-600 h-1.5 rounded-full transition-all duration-300"
//                       style={{ width: `${uploadProgress}%` }}
//                     ></div>
//                   </div>
//                 </div>
//               )}

//               <button 
//                 onClick={downloadTemplate}
//                 className="flex items-center gap-1 px-3 py-2 border border-blue-600 text-blue-600 text-sm rounded-lg hover:bg-blue-50 mx-auto"
//               >
//                 <FaDownload className="text-xs" /> Download Template
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {activeTab === 'categories' && (
//         <div className="bg-white rounded-xl border border-gray-200 p-4">
//           <h3 className="text-lg font-bold text-gray-800 mb-4">Product Categories</h3>
          
//           <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
//             {categories.map((category) => {
//               const count = products.filter(p => p.category === category).length;
//               return (
//                 <div key={category} className="p-3 border border-gray-200 rounded-lg">
//                   <div className="flex items-center justify-between mb-2">
//                     <div className="font-medium text-sm">{category}</div>
//                     <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
//                       {count}
//                     </span>
//                   </div>
//                   <div className="text-xs text-gray-600">
//                     {count} products
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       )}

//       {/* Add/Edit Product Modal */}
//       <AddProductModal 
//         isOpen={showAddProductModal}
//         onClose={() => setShowAddProductModal(false)}
//         editingProduct={editingProduct}
//         productForm={productForm}
//         onFormChange={handleFormChange}
//         categories={categories}
//         onSubmit={handleAddProduct}
//         onReset={resetForm}
//       />
      
//       {/* Product Details Modal */}
//       <ProductDetailsModal 
//         product={showProductDetails}
//         onClose={() => setShowProductDetails(null)}
//         onEdit={handleEditProduct}
//         onDelete={handleDeleteProduct}
//       />
//     </div>
//   );
// };

// export default ProductsManagement;


































// src/pages/pharmacy/ProductsManagement.jsx
import React, { useState, useRef, useCallback, useMemo } from 'react';
import { 
  FaSearch, 
  FaFilter, 
  FaPlus, 
  FaUpload,
  FaDownload,
  FaFileExcel,
  FaFileCsv,
  FaFilePdf,
  FaRupeeSign,
  FaCalendarAlt,
  FaExclamationTriangle,
  FaBox
} from 'react-icons/fa';

// Import separated components
import AddProductModal from '../Modal/AddProductModal';
import ProductDetailsModal from '../Modal/ProductDetailsModal';
import MobileProductCard from '../cards/MobileProductCard';
import DataTable from '../../../shared/components/tables/DataTable';
import ProductTableRow from '../tables/ProductTableRow';

// Main Component
const ProductsManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const [activeTab, setActiveTab] = useState('inventory');
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const [showProductDetails, setShowProductDetails] = useState(null);
  const [editingProduct, setEditingProduct] = useState(null);
  const fileInputRef = useRef(null);

  // Add/Edit Product Form State
  const [productForm, setProductForm] = useState({
    name: '',
    category: 'Pain Relief',
    stock: '',
    lowStock: '',
    price: '',
    cost: '',
    expiry: '',
    sku: '',
    manufacturer: '',
    batch: '',
    rack: '',
    prescription: false
  });

  // Sample products data
  const [products, setProducts] = useState([
    { 
      id: 1, 
      name: 'Paracetamol 500mg', 
      category: 'Pain Relief', 
      stock: 150, 
      lowStock: 20, 
      price: '₹15', 
      cost: '₹8', 
      expiry: '2024-12-01', 
      status: 'In Stock', 
      sku: 'PARA500', 
      manufacturer: 'Cipla',
      batch: 'BATCH001',
      rack: 'Rack A-1',
      prescription: false,
      lastRestocked: '2024-01-10'
    },
    { 
      id: 2, 
      name: 'Amoxicillin 250mg', 
      category: 'Antibiotic', 
      stock: 45, 
      lowStock: 30, 
      price: '₹85', 
      cost: '₹45', 
      expiry: '2024-10-15', 
      status: 'In Stock', 
      sku: 'AMOX250', 
      manufacturer: 'Sun Pharma',
      batch: 'BATCH002',
      rack: 'Rack B-3',
      prescription: true,
      lastRestocked: '2024-01-05'
    },
    { 
      id: 3, 
      name: 'Cetirizine 10mg', 
      category: 'Allergy', 
      stock: 12, 
      lowStock: 15, 
      price: '₹25', 
      cost: '₹12', 
      expiry: '2025-02-28', 
      status: 'Low Stock', 
      sku: 'CETI10', 
      manufacturer: 'Dr. Reddy\'s',
      batch: 'BATCH003',
      rack: 'Rack C-2',
      prescription: false,
      lastRestocked: '2024-01-02'
    },
    { 
      id: 4, 
      name: 'Omeprazole 20mg', 
      category: 'Antacid', 
      stock: 80, 
      lowStock: 25, 
      price: '₹45', 
      cost: '₹22', 
      expiry: '2024-11-30', 
      status: 'In Stock', 
      sku: 'OMEP20', 
      manufacturer: 'Torrent',
      batch: 'BATCH004',
      rack: 'Rack A-5',
      prescription: false,
      lastRestocked: '2024-01-08'
    },
  ]);

  // Categories list
  const categories = ['Pain Relief', 'Antibiotic', 'Allergy', 'Antacid', 'Diabetes', 'Supplements', 'First Aid'];

  // Calculate statistics
  const stats = useMemo(() => ({
    totalProducts: products.length,
    lowStockItems: products.filter(p => p.status === 'Low Stock' || p.status === 'Critical').length,
    expiringSoon: products.filter(p => new Date(p.expiry) < new Date(Date.now() + 90 * 24 * 60 * 60 * 1000)).length,
    totalInventoryValue: products.reduce((sum, p) => sum + (p.stock * parseFloat(p.cost.replace('₹', ''))), 0),
    prescriptionRequired: products.filter(p => p.prescription).length,
  }), [products]);

  // Filter products
  const filteredProducts = useMemo(() => 
    products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.sku.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.manufacturer.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter = filter === 'all' || product.status === filter;
      return matchesSearch && matchesFilter;
    }),
    [products, searchTerm, filter]
  );

  // Handle file upload
  const handleFileUpload = useCallback((event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      
      // Check file type
      const fileType = file.type;
      const validTypes = [
        'application/vnd.ms-excel',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'text/csv',
        'application/pdf',
        'application/vnd.oasis.opendocument.spreadsheet'
      ];
      
      if (!validTypes.includes(fileType) && !file.name.match(/\.(xlsx|xls|csv|pdf|ods)$/i)) {
        alert('Please upload Excel, CSV, or PDF files only');
        return;
      }
      
      setIsUploading(true);
      setUploadProgress(0);
      
      // Simulate upload progress
      const interval = setInterval(() => {
        setUploadProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsUploading(false);
            setTimeout(() => {
              alert('File uploaded successfully! Products will be updated shortly.');
              setSelectedFile(null);
              setUploadProgress(0);
            }, 500);
            return 100;
          }
          return prev + 10;
        });
      }, 200);
    }
  }, []);

  // Download template
  const downloadTemplate = useCallback(() => {
    const templateData = [
      ['Product Name', 'Category', 'SKU', 'Manufacturer', 'Batch No', 'Rack Location', 'Cost Price', 'Selling Price', 'Stock Quantity', 'Low Stock Alert', 'Expiry Date', 'Prescription Required'],
      ['Paracetamol 500mg', 'Pain Relief', 'PARA500', 'Cipla', 'BATCH001', 'Rack A-1', '8', '15', '150', '20', '2024-12-01', 'No'],
      ['Amoxicillin 250mg', 'Antibiotic', 'AMOX250', 'Sun Pharma', 'BATCH002', 'Rack B-3', '45', '85', '45', '30', '2024-10-15', 'Yes']
    ];
    
    const csvContent = templateData.map(row => row.join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'pharmacy_products_template.csv';
    a.click();
  }, []);

  // Handle form changes
  const handleFormChange = useCallback((field, value) => {
    setProductForm(prev => ({
      ...prev,
      [field]: value
    }));
  }, []);

  // Handle Add Product
  const handleAddProduct = useCallback(() => {
    if (!productForm.name || !productForm.price || !productForm.stock) {
      alert('Please fill in all required fields');
      return;
    }

    const newProductObj = {
      id: editingProduct ? editingProduct.id : products.length + 1,
      name: productForm.name,
      category: productForm.category,
      stock: parseInt(productForm.stock),
      lowStock: parseInt(productForm.lowStock) || 10,
      price: `₹${productForm.price}`,
      cost: productForm.cost ? `₹${productForm.cost}` : `₹${Math.round(parseInt(productForm.price) * 0.5)}`,
      expiry: productForm.expiry || '2024-12-31',
      status: parseInt(productForm.stock) < (parseInt(productForm.lowStock) || 10) ? 'Low Stock' : 'In Stock',
      sku: productForm.sku || `SKU${Date.now().toString().slice(-6)}`,
      manufacturer: productForm.manufacturer || 'Generic',
      batch: productForm.batch || `BATCH${Date.now().toString().slice(-4)}`,
      rack: productForm.rack || 'Rack A-1',
      prescription: productForm.prescription,
      lastRestocked: new Date().toISOString().split('T')[0]
    };

    if (editingProduct) {
      // Update existing product
      setProducts(products.map(p => p.id === editingProduct.id ? newProductObj : p));
      alert('Product updated successfully!');
    } else {
      // Add new product
      setProducts([...products, newProductObj]);
      alert('Product added successfully!');
    }
    
    // Reset form and states
    resetForm();
    setShowAddProductModal(false);
    setEditingProduct(null);
  }, [productForm, editingProduct, products]);

  // Handle Edit Product
  const handleEditProduct = useCallback((product) => {
    setEditingProduct(product);
    setProductForm({
      name: product.name,
      category: product.category,
      stock: product.stock.toString(),
      lowStock: product.lowStock.toString(),
      price: product.price.replace('₹', ''),
      cost: product.cost.replace('₹', ''),
      expiry: product.expiry,
      sku: product.sku,
      manufacturer: product.manufacturer,
      batch: product.batch,
      rack: product.rack,
      prescription: product.prescription
    });
    setShowAddProductModal(true);
  }, []);

  // Handle View Product Details
  const handleViewProductDetails = useCallback((product) => {
    setShowProductDetails(product);
  }, []);

  // Handle Delete Product
  const handleDeleteProduct = useCallback((id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      setProducts(products.filter(product => product.id !== id));
      if (showProductDetails && showProductDetails.id === id) {
        setShowProductDetails(null);
      }
    }
  }, [products, showProductDetails]);

  // Reset form
  const resetForm = useCallback(() => {
    setProductForm({
      name: '',
      category: 'Pain Relief',
      stock: '',
      lowStock: '',
      price: '',
      cost: '',
      expiry: '',
      sku: '',
      manufacturer: '',
      batch: '',
      rack: '',
      prescription: false
    });
    setEditingProduct(null);
  }, []);

  // Define table columns for products
  const productColumns = useMemo(() => [
    { title: 'Product', className: 'text-center' },
    { title: 'Category', className: 'text-center' },
    { title: 'Stock', className: 'text-center' },
    { title: 'Price', className: 'text-center' },
    { title: 'Expiry', className: 'text-center' },
    { title: 'Status', className: 'text-center' },
    { title: 'Actions', className: 'text-center' },
  ], []);

  // Render function for product rows
  const renderProductRow = useCallback((product) => (
    <ProductTableRow 
      product={product}
      onViewDetails={handleViewProductDetails}
      onEdit={handleEditProduct}
      onDelete={handleDeleteProduct}
    />
  ), [handleViewProductDetails, handleEditProduct, handleDeleteProduct]);

  // Main component render
  return (
    <div className="p-3 md:p-6">
      {/* Header */}
      <div className="mb-4 md:mb-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div>
            <h1 className="text-lg md:text-2xl font-bold text-gray-800">Products Management</h1>
            <p className="text-gray-600 text-xs md:text-sm">Manage inventory, upload products, and track stock levels</p>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={() => setActiveTab('upload')}
              className="flex items-center gap-1 px-3 py-2 bg-green-600 text-white text-xs md:text-sm rounded-lg hover:bg-green-700"
            >
              <FaUpload className="text-xs" /> Bulk Upload
            </button>
            <button 
              onClick={() => {
                resetForm();
                setShowAddProductModal(true);
              }}
              className="flex items-center gap-1 px-3 py-2 bg-blue-600 text-white text-xs md:text-sm rounded-lg hover:bg-blue-700"
            >
              <FaPlus className="text-xs" /> Add Product
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex mb-4 border-b border-gray-200 overflow-x-auto">
        <button
          onClick={() => setActiveTab('inventory')}
          className={`flex-shrink-0 px-3 md:px-4 py-2 font-medium border-b-2 whitespace-nowrap ${
            activeTab === 'inventory' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500'
          }`}
        >
          Inventory
        </button>
        <button
          onClick={() => setActiveTab('upload')}
          className={`flex-shrink-0 px-3 md:px-4 py-2 font-medium border-b-2 whitespace-nowrap ${
            activeTab === 'upload' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500'
          }`}
        >
          Bulk Upload
        </button>
        <button
          onClick={() => setActiveTab('categories')}
          className={`flex-shrink-0 px-3 md:px-4 py-2 font-medium border-b-2 whitespace-nowrap ${
            activeTab === 'categories' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500'
          }`}
        >
          Categories
        </button>
      </div>

      {activeTab === 'inventory' && (
        <>
          {/* Enhanced Quick Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {/* Total Products Card */}
            <div className="group relative overflow-hidden bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-2xl p-5 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                <div className="flex items-center justify-between">
                <div>
                    <div className="text-xs font-medium text-blue-800 uppercase tracking-wider mb-1">Total Products</div>
                    <div className="text-xl md:text-2xl font-bold text-gray-800 mb-1">{stats.totalProducts}</div>
                    <div className="text-xs text-blue-600 font-medium">In inventory</div>
                </div>
                <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                    <FaBox className="text-white text-lg" />
                    </div>
                </div>
                </div>
            </div>

            {/* Low Stock Card */}
            <div className="group relative overflow-hidden bg-gradient-to-br from-yellow-50 to-white border border-yellow-100 rounded-2xl p-5 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                <div className="flex items-center justify-between">
                <div>
                    <div className="text-xs font-medium text-yellow-800 uppercase tracking-wider mb-1">Low Stock</div>
                    <div className="text-xl md:text-2xl font-bold text-gray-800 mb-1">{stats.lowStockItems}</div>
                    <div className="text-xs text-yellow-600 font-medium">Needs attention</div>
                </div>
                <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg">
                    <FaExclamationTriangle className="text-white text-lg" />
                    </div>
                </div>
                </div>
            </div>

            {/* Expiring Soon Card */}
            <div className="group relative overflow-hidden bg-gradient-to-br from-red-50 to-white border border-red-100 rounded-2xl p-5 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                <div className="flex items-center justify-between">
                <div>
                    <div className="text-xs font-medium text-red-800 uppercase tracking-wider mb-1">Expiring Soon</div>
                    <div className="text-xl md:text-2xl font-bold text-gray-800 mb-1">{stats.expiringSoon}</div>
                    <div className="text-xs text-red-600 font-medium">Within 90 days</div>
                </div>
                <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                    <FaCalendarAlt className="text-white text-lg" />
                    </div>
                </div>
                </div>
            </div>

            {/* Inventory Value Card */}
            <div className="group relative overflow-hidden bg-gradient-to-br from-green-50 to-white border border-green-100 rounded-2xl p-5 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                <div className="flex items-center justify-between">
                <div>
                    <div className="text-xs font-medium text-green-800 uppercase tracking-wider mb-1">Inventory Value</div>
                    <div className="text-xl md:text-2xl font-bold text-gray-800 mb-1">₹{stats.totalInventoryValue.toLocaleString()}</div>
                    <div className="text-xs text-green-600 font-medium">Total worth</div>
                </div>
                <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                    <FaRupeeSign className="text-white text-lg" />
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
                    placeholder="Search products..."
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
                    <option value="In Stock">In Stock</option>
                    <option value="Low Stock">Low Stock</option>
                    <option value="Critical">Critical</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Products List */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            {/* Mobile View: Cards */}
            <div className="md:hidden p-3">
              {filteredProducts.length === 0 ? (
                <div className="text-center py-8">
                  <div className="text-gray-400 mb-2">No products found</div>
                  <div className="text-gray-500 text-sm">Try adjusting your search or filter</div>
                </div>
              ) : (
                filteredProducts.map((product) => (
                  <MobileProductCard 
                    key={product.id} 
                    product={product}
                    onViewDetails={handleViewProductDetails}
                    onEdit={handleEditProduct}
                    onDelete={handleDeleteProduct}
                  />
                ))
              )}
            </div>

            {/* Desktop View: Table - USING REUSABLE DATATABLE */}
            <div className="hidden md:block">
              <DataTable
                columns={productColumns}
                data={filteredProducts}
                renderRow={renderProductRow}
                emptyMessage="No products found"
                emptySubMessage="Try adjusting your search or filter"
              />
            </div>
          </div>
        </>
      )}

      {activeTab === 'upload' && (
        <div className="space-y-4">
          {/* Upload Section */}
          <div className="bg-white rounded-xl border border-gray-200 p-4">
            <h2 className="text-lg font-bold text-gray-800 mb-3">Bulk Upload Products</h2>
            <p className="text-gray-600 mb-4 text-sm">Upload Excel, CSV, or PDF files to update your product inventory</p>

            {/* Upload Area */}
            <div 
              className={`border-2 border-dashed rounded-xl p-4 text-center mb-4 ${
                isUploading ? 'border-blue-300 bg-blue-50' : 'border-gray-300 hover:border-blue-400 hover:bg-blue-50'
              }`}
              onClick={() => fileInputRef.current?.click()}
            >
              <FaUpload className="text-3xl text-gray-400 mx-auto mb-3" />
              <h3 className="font-medium text-gray-700 mb-1">Click to upload files</h3>
              <p className="text-gray-500 text-sm mb-3">Supports: Excel, CSV, PDF</p>
              
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileUpload}
                accept=".xlsx,.xls,.csv,.pdf,.ods"
                className="hidden"
              />

              <div className="flex flex-wrap justify-center gap-2 mb-4">
                <div className="flex items-center gap-1 px-2 py-1 bg-blue-50 rounded-lg">
                  <FaFileExcel className="text-green-600 text-xs" />
                  <span className="text-xs">Excel</span>
                </div>
                <div className="flex items-center gap-1 px-2 py-1 bg-blue-50 rounded-lg">
                  <FaFileCsv className="text-blue-600 text-xs" />
                  <span className="text-xs">CSV</span>
                </div>
                <div className="flex items-center gap-1 px-2 py-1 bg-blue-50 rounded-lg">
                  <FaFilePdf className="text-red-600 text-xs" />
                  <span className="text-xs">PDF</span>
                </div>
              </div>

              {selectedFile && (
                <div className="mb-3 p-2 bg-blue-50 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      {selectedFile.name.match(/\.xlsx?$/i) ? (
                        <FaFileExcel className="text-green-600 mr-2 text-xs" />
                      ) : selectedFile.name.match(/\.csv$/i) ? (
                        <FaFileCsv className="text-blue-600 mr-2 text-xs" />
                      ) : (
                        <FaFilePdf className="text-red-600 mr-2 text-xs" />
                      )}
                      <span className="text-xs font-medium truncate max-w-[180px]">{selectedFile.name}</span>
                    </div>
                    <span className="text-xs text-gray-500">
                      {(selectedFile.size / 1024).toFixed(1)} KB
                    </span>
                  </div>
                </div>
              )}

              {isUploading && (
                <div className="mb-3">
                  <div className="flex justify-between text-xs mb-1">
                    <span>Uploading...</span>
                    <span>{uploadProgress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div 
                      className="bg-blue-600 h-1.5 rounded-full transition-all duration-300"
                      style={{ width: `${uploadProgress}%` }}
                    ></div>
                  </div>
                </div>
              )}

              <button 
                onClick={downloadTemplate}
                className="flex items-center gap-1 px-3 py-2 border border-blue-600 text-blue-600 text-sm rounded-lg hover:bg-blue-50 mx-auto"
              >
                <FaDownload className="text-xs" /> Download Template
              </button>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'categories' && (
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Product Categories</h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {categories.map((category) => {
              const count = products.filter(p => p.category === category).length;
              return (
                <div key={category} className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-medium text-sm">{category}</div>
                    <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
                      {count}
                    </span>
                  </div>
                  <div className="text-xs text-gray-600">
                    {count} products
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Add/Edit Product Modal */}
      <AddProductModal 
        isOpen={showAddProductModal}
        onClose={() => setShowAddProductModal(false)}
        editingProduct={editingProduct}
        productForm={productForm}
        onFormChange={handleFormChange}
        categories={categories}
        onSubmit={handleAddProduct}
        onReset={resetForm}
      />
      
      {/* Product Details Modal */}
      <ProductDetailsModal 
        product={showProductDetails}
        onClose={() => setShowProductDetails(null)}
        onEdit={handleEditProduct}
        onDelete={handleDeleteProduct}
      />
    </div>
  );
};

export default ProductsManagement;