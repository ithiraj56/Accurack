'use client';
import { Vendor } from '@/lib/types/types';

interface VendorDetailModalProps {
  vendor: Vendor;
  onClose: () => void;
}

export default function VendorDetailModal({ vendor, onClose }: VendorDetailModalProps) {
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
          <h2 className="text-xl font-bold text-gray-900">Vendor Details</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Vendor Information */}
        <div className="space-y-4">
          {/* Vendor Name */}
          <div>
            <label className="block text-sm font-medium text-gray-500 mb-1">
              Vendor Name
            </label>
            <p className="text-xl font-bold text-gray-900">{vendor.name}</p>
          </div>

          {/* Contact Person */}
          <div>
            <label className="block text-sm font-medium text-gray-500 mb-1">
              Contact Person
            </label>
            <p className="text-lg font-semibold text-gray-900">{vendor.contact}</p>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-500 mb-1">
              Email Address
            </label>
            <p className="text-lg text-blue-600">
              <a href={`mailto:${vendor.email}`} className="hover:underline">
                {vendor.email}
              </a>
            </p>
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-medium text-gray-500 mb-1">
              Address
            </label>
            {vendor.address ? (
              <p className="text-lg text-gray-900 leading-relaxed">{vendor.address}</p>
            ) : (
              <p className="text-lg text-gray-400 italic">No address provided</p>
            )}
          </div>

          {/* Created Date */}
          <div>
            <label className="block text-sm font-medium text-gray-500 mb-1">
              Date Added
            </label>
            <p className="text-lg text-gray-900">{formatDate(vendor.createdAt)}</p>
          </div>

          {/* Vendor ID */}
          <div>
            <label className="block text-sm font-medium text-gray-500 mb-1">
              Vendor ID
            </label>
            <p className="text-sm text-gray-600 font-mono bg-gray-50 px-3 py-2 rounded">
              {vendor.id}
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