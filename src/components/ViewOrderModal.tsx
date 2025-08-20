'use client';
import { Order } from '@/lib/types/types';

interface ViewOrderModalProps {
  order: Order;
  onClose: () => void;
}

export default function ViewOrderModal({ order, onClose }: ViewOrderModalProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'Shipped':
        return 'bg-blue-100 text-blue-800';
      case 'Delivered':
        return 'bg-green-100 text-green-800';
      case 'Cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 max-w-lg w-full mx-4 shadow-2xl max-h-[80vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-xl font-bold text-gray-900">Order Details</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Order Information */}
        <div className="space-y-4 text-sm">
          {/* Order Number */}
          <div>
            <label className="block text-sm font-medium text-gray-500 mb-1">
              Order Number
            </label>
            <p className="text-xl font-bold text-gray-900">{order.orderNumber}</p>
          </div>

          {/* Customer Name */}
          <div>
            <label className="block text-sm font-medium text-gray-500 mb-1">
              Customer Name
            </label>
            <p className="text-lg font-semibold text-gray-900">{order.customerName}</p>
          </div>

          {/* Status and Total Row */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">
                Status
              </label>
              <span className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full ${getStatusColor(order.status)}`}>
                {order.status}
              </span>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">
                Total
              </label>
              <p className="text-2xl font-bold text-gray-900">{formatCurrency(order.total)}</p>
            </div>
          </div>

          {/* Date */}
          <div>
            <label className="block text-sm font-medium text-gray-500 mb-1">
              Order Date
            </label>
            <p className="text-lg text-gray-900">{formatDate(order.date)}</p>
          </div>

          {/* Order ID */}
          <div>
            <label className="block text-sm font-medium text-gray-500 mb-1">
              Order ID
            </label>
            <p className="text-sm text-gray-600 font-mono bg-gray-50 px-3 py-2 rounded">
              #{order.id}
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