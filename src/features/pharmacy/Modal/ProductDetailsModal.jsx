import React, { useState } from 'react';
import { FaBox, FaCalendarAlt, FaEdit, FaTrash, FaExclamationTriangle } from 'react-icons/fa';
import Modal from '../../../shared/components/modals/Modal';

const ProductDetailsModal = React.memo(({
  product,
  onClose,
  onEdit,
  onDelete
}) => {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const getStatusColor = (status) => {
    switch (status) {
      case 'In Stock': return 'bg-green-100 text-green-800';
      case 'Low Stock': return 'bg-yellow-100 text-yellow-800';
      case 'Critical': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleEdit = () => {
    onClose();
    onEdit(product);
  };

  const handleDelete = () => {
    onDelete(product.id);
    onClose();
  };

  if (!product) return null;

  return (
    <>
      <Modal
        isOpen={!!product}
        onClose={onClose}
        title="Product Details"
        size="lg"
        position="top"
        contentClassName="flex flex-col max-h-[calc(100vh-10.5rem)]"
      >
        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto">
          {/* Product Header */}
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex items-start">
              <div className="p-4 bg-blue-100 rounded-xl mr-4 flex-shrink-0">
                <FaBox className="text-blue-600 text-2xl" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm md:text-xl font-bold text-gray-800 truncate">{product.name}</h4>
                <div className="flex flex-wrap items-center gap-2 mt-2">
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(product.status)}`}>
                    {product.status}
                  </span>
                  {product.prescription && (
                    <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">
                      Rx Required
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* Basic Information */}
            <div>
              <h5 className="font-bold text-gray-700 mb-3 text-sm uppercase tracking-wider">Basic Information</h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <label className="block text-xs text-gray-500 mb-1 font-medium">SKU Code</label>
                  <div className="font-medium text-gray-800">{product.sku}</div>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <label className="block text-xs text-gray-500 mb-1 font-medium">Category</label>
                  <div className="font-medium text-gray-800">{product.category}</div>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <label className="block text-xs text-gray-500 mb-1 font-medium">Manufacturer</label>
                  <div className="font-medium text-gray-800">{product.manufacturer}</div>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <label className="block text-xs text-gray-500 mb-1 font-medium">Batch Number</label>
                  <div className="font-medium text-gray-800">{product.batch}</div>
                </div>
              </div>
            </div>

            {/* Inventory Details */}
            <div>
              <h5 className="font-bold text-gray-700 mb-3 text-sm uppercase tracking-wider">Inventory Details</h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-green-50 p-3 rounded-lg border border-green-100">
                  <label className="block text-xs text-gray-500 mb-1 font-medium">Current Stock</label>
                  <div className="font-bold text-lg text-green-700">{product.stock} units</div>
                </div>
                <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-100">
                  <label className="block text-xs text-gray-500 mb-1 font-medium">Low Stock Alert</label>
                  <div className="font-medium text-yellow-700">{product.lowStock} units</div>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                  <label className="block text-xs text-gray-500 mb-1 font-medium">Selling Price</label>
                  <div className="font-bold text-lg text-blue-700">{product.price}</div>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                  <label className="block text-xs text-gray-500 mb-1 font-medium">Cost Price</label>
                  <div className="font-medium text-gray-700">{product.cost}</div>
                </div>
              </div>
            </div>

            {/* Location & Expiry */}
            <div>
              <h5 className="font-bold text-gray-700 mb-3 text-sm uppercase tracking-wider">Storage & Expiry</h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-red-50 p-3 rounded-lg border border-red-100">
                  <label className="block text-xs text-gray-500 mb-1 font-medium">Expiry Date</label>
                  <div className="font-medium text-red-700 flex items-center gap-2">
                    <FaCalendarAlt />
                    {product.expiry}
                  </div>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg border border-purple-100">
                  <label className="block text-xs text-gray-500 mb-1 font-medium">Rack Location</label>
                  <div className="font-medium text-purple-700">{product.rack}</div>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                  <label className="block text-xs text-gray-500 mb-1 font-medium">Last Restocked</label>
                  <div className="font-medium text-gray-700">{product.lastRestocked}</div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-gray-50 rounded-lg p-4">
              <h5 className="font-bold text-gray-700 mb-2 text-sm uppercase tracking-wider">Additional Information</h5>
              <div className="text-sm text-gray-600">
                This product {product.prescription ? 'requires' : 'does not require'} a prescription.
                {product.stock <= product.lowStock && (
                  <span className="text-yellow-600 font-medium ml-2">
                    Stock is running low. Consider reordering soon.
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Fixed Footer */}
        <div className="p-6 border-t border-gray-200 bg-gray-50 sticky bottom-0">
          <div className="flex justify-between gap-2">
            <button
              onClick={() => setShowDeleteConfirm(true)}
              className="px-2 py-2 border border-red-600 text-red-600 rounded-lg hover:bg-red-50 flex items-center gap-2 text-sm"
            >
              <FaTrash /> Delete Product
            </button>
            <button
              onClick={handleEdit}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2 text-sm"
            >
              <FaEdit /> Edit Product
            </button>
          </div>
        </div>
      </Modal>

      {/* Delete Confirmation Modal (stays centered) */}
      <Modal
        isOpen={showDeleteConfirm}
        onClose={() => setShowDeleteConfirm(false)}
        title="Confirm Delete"
        size="sm"
        position="center"
      >
        <div className="p-6">
          <div className="text-center mb-6">
            <FaExclamationTriangle className="text-red-500 text-4xl mx-auto mb-4" />
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Delete Product?</h4>
            <p className="text-gray-600">
              Are you sure you want to delete "{product?.name}"? This action cannot be undone.
            </p>
          </div>
          
          <div className="flex justify-end gap-3">
            <button
              onClick={() => setShowDeleteConfirm(false)}
              className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              onClick={handleDelete}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 flex items-center gap-2"
            >
              <FaTrash /> Delete
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
});

export default ProductDetailsModal;