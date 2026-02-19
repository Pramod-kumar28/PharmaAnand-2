import React from 'react';
import { FaBox, FaEye, FaEdit, FaTrash } from 'react-icons/fa';

const ProductTableRow = ({ product, onViewDetails, onEdit, onDelete }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'In Stock': return 'bg-green-100 text-green-800';
      case 'Low Stock': return 'bg-yellow-100 text-yellow-800';
      case 'Critical': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <>
      <td className="px-4 py-3">
        <div className="flex items-center">
          <div className="p-2 bg-blue-100 rounded-lg mr-3">
            <FaBox className="text-blue-600 text-sm" />
          </div>
          <div>
            <div className="font-medium text-sm text-gray-900">{product.name}</div>
            <div className="text-xs text-gray-500">SKU: {product.sku}</div>
            {product.prescription && (
              <span className="mt-1 inline-block px-2 py-0.5 text-xs bg-blue-100 text-blue-800 rounded">
                Rx Required
              </span>
            )}
          </div>
        </div>
      </td>
      <td className="px-4 py-3">
        <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
          {product.category}
        </span>
      </td>
      <td className="px-4 py-3">
        <div className="font-medium text-sm">{product.stock} units</div>
        <div className="text-xs text-gray-500">Min: {product.lowStock}</div>
      </td>
      <td className="px-4 py-3">
        <div className="font-bold text-sm">{product.price}</div>
        <div className="text-xs text-gray-600">Cost: {product.cost}</div>
      </td>
      <td className="px-4 py-3">
        <div className="text-sm font-medium text-red-600">{product.expiry}</div>
      </td>
      <td className="px-4 py-3">
        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(product.status)}`}>
          {product.status}
        </span>
      </td>
      <td className="px-4 py-3">
        <div className="flex gap-2 justify-center">
          <button 
            onClick={() => onViewDetails(product)}
            className="p-1 text-blue-600 hover:bg-blue-50 rounded" 
            title="View Details"
          >
            <FaEye className="text-sm" />
          </button>
          <button 
            onClick={() => onEdit(product)}
            className="p-1 text-green-600 hover:bg-green-50 rounded" 
            title="Edit"
          >
            <FaEdit className="text-sm" />
          </button>
          <button 
            onClick={() => onDelete(product.id)}
            className="p-1 text-red-600 hover:bg-red-50 rounded" 
            title="Delete"
          >
            <FaTrash className="text-sm" />
          </button>
        </div>
      </td>
    </>
  );
};

export default React.memo(ProductTableRow);