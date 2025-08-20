'use client';

interface Product {
  id: string;
  name: string;
  sku: string;
  category: string;
  quantity: number;
  status: string;
}

interface ProductDetailModalProps {
  product: Product;
  onClose: () => void;
}

export default function ProductDetailModal({ product, onClose }: ProductDetailModalProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Stock':
        return 'bg-green-100 text-green-800';
      case 'Low Stock':
        return 'bg-yellow-100 text-yellow-800';
      case 'Out of Stock':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 max-w-lg w-full mx-4 shadow-2xl max-h-[80vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-xl font-bold text-gray-900">Product Details</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Product Information */}
        <div className="space-y-4 text-sm">
          {/* Product Name */}
          <div>
            <label className="block text-sm font-medium text-gray-500 mb-1">
              Product Name
            </label>
            <p className="text-xl font-bold text-gray-900">{product.name}</p>
          </div>

          {/* SKU and Category Row */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">
                SKU
              </label>
              <p className="text-sm text-gray-900 font-mono bg-gray-50 px-3 py-2 rounded">
                {product.sku}
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">
                Category
              </label>
              <p className="text-sm text-gray-900 bg-gray-50 px-3 py-2 rounded">
                {product.category}
              </p>
            </div>
          </div>

          {/* Quantity and Status Row */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">
                Quantity
              </label>
              <p className="text-2xl font-bold text-gray-900">{product.quantity}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">
                Status
              </label>
              <span className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full ${getStatusColor(product.status)}`}>
                {product.status}
              </span>
            </div>
          </div>

          {/* Product ID */}
          <div>
            <label className="block text-sm font-medium text-gray-500 mb-1">
              Product ID
            </label>
            <p className="text-sm text-gray-600 font-mono bg-gray-50 px-3 py-2 rounded">
              {product.id}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
} 