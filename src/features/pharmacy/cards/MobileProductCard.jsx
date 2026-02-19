import React from 'react';
import { FaBox, FaEye, FaEdit, FaTrash } from 'react-icons/fa';

const MobileProductCard = React.memo(({ 
  product, 
  onViewDetails, 
  onEdit, 
  onDelete 
}) => {
  const getStatusColor = (status) => {
    switch(status) {
      case 'In Stock': return 'bg-green-100 text-green-800';
      case 'Low Stock': return 'bg-yellow-100 text-yellow-800';
      case 'Critical': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white p-4 rounded-xl border border-gray-200 mb-3">
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center">
          <div className="p-2 bg-blue-100 rounded-lg mr-3">
            <FaBox className="text-blue-600 text-sm" />
          </div>
          <div>
            <div className="font-bold text-gray-800 text-sm">{product.name}</div>
            <div className="text-xs text-gray-500">SKU: {product.sku}</div>
          </div>
        </div>
        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(product.status)}`}>
          {product.status}
        </span>
      </div>
      
      <div className="grid grid-cols-2 gap-3 mb-3">
        <div>
          <div className="text-xs text-gray-500">Category</div>
          <div className="font-medium text-sm">{product.category}</div>
        </div>
        <div>
          <div className="text-xs text-gray-500">Stock</div>
          <div className="font-medium text-sm">{product.stock} units</div>
        </div>
        <div>
          <div className="text-xs text-gray-500">Price</div>
          <div className="font-bold text-sm">{product.price}</div>
        </div>
        <div>
          <div className="text-xs text-gray-500">Expiry</div>
          <div className="font-medium text-sm text-red-600">{product.expiry.split('-')[2]}/{product.expiry.split('-')[1]}</div>
        </div>
      </div>
      
      <div className="flex justify-between items-center pt-3 border-t border-gray-100">
        <div className="flex gap-2">
          <button 
            onClick={() => onViewDetails(product)}
            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
            title="View Details"
          >
            <FaEye className="text-sm" />
          </button>
          <button 
            onClick={() => onEdit(product)}
            className="p-2 text-green-600 hover:bg-green-50 rounded-lg" 
            title="Edit"
          >
            <FaEdit className="text-sm" />
          </button>
          <button 
            onClick={() => {
              if (window.confirm('Are you sure you want to delete this product?')) {
                onDelete(product.id);
              }
            }}
            className="p-2 text-red-600 hover:bg-red-50 rounded-lg" 
            title="Delete"
          >
            <FaTrash className="text-sm" />
          </button>
        </div>
        {product.prescription && (
          <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">
            Rx Required
          </span>
        )}
      </div>
    </div>
  );
});

export default MobileProductCard;