import React from 'react';

const DataTable = React.memo(({
  columns = [],
  data = [],
  renderRow,
  emptyMessage = "No data found",
  emptySubMessage = "Try adjusting your search or filter",
  className = "",
  headerClassName = "",
  rowClassName = "",
  loading = false,
  loadingText = "Loading...",
  showHeader = true
}) => {
  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-400 mb-2">{loadingText}</div>
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className="text-center py-8">
        <div className="text-gray-400 mb-2">{emptyMessage}</div>
        <div className="text-gray-500 text-sm">{emptySubMessage}</div>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className={`min-w-full divide-y divide-gray-200 ${className}`}>
        {showHeader && (
          <thead className={`bg-gray-50 ${headerClassName}`}>
            <tr>
              {columns.map((column, index) => (
                <th
                  key={index}
                  className={`px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase ${column.className || ''}`}
                  style={column.style || {}}
                >
                  {column.title}
                </th>
              ))}
            </tr>
          </thead>
        )}
        <tbody className="divide-y divide-gray-200">
          {data.map((item, index) => (
            <tr key={item.id || index} className={`hover:bg-gray-50 text-center ${rowClassName}`}>
              {renderRow(item, index)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
});

export default DataTable;