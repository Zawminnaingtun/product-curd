import React from 'react'

const VoucherDetailSkeleton = () => {
  return (
    <div className="flex gap-5 animate-pulse">
  <div className="w-[14.8cm] bg-white p-6 space-y-6">
    {/* Header */}
    <div className="flex justify-between items-start mb-8">
      <div>
        <div className="h-8 w-32 bg-gray-300 rounded mb-2"></div>
        <div className="h-5 w-24 bg-gray-300 rounded"></div>
      </div>
      <div className="text-right space-y-1">
        <div className="h-4 w-20 bg-gray-300 rounded"></div>
        <div className="h-4 w-28 bg-gray-300 rounded"></div>
        <div className="h-4 w-24 bg-gray-300 rounded"></div>
      </div>
    </div>

    {/* Table Head */}
    <div className="grid grid-cols-5 gap-4 border-b-2 border-gray-300 pb-2 text-sm font-medium text-gray-600">
      <div>No</div>
      <div>Description</div>
      <div className="text-right">Qty</div>
      <div className="text-right">Price</div>
      <div className="text-right">Total</div>
    </div>

    {/* Skeleton Rows */}
    {[...Array(5)].map((_, idx) => (
      <div
        key={idx}
        className="grid grid-cols-5 gap-4 py-2 border-b border-gray-200 text-sm"
      >
        <div className="h-4 bg-gray-300 rounded w-6"></div>
        <div className="h-4 bg-gray-300 rounded w-32"></div>
        <div className="h-4 bg-gray-300 rounded w-12 text-right ml-auto"></div>
        <div className="h-4 bg-gray-300 rounded w-16 text-right ml-auto"></div>
        <div className="h-4 bg-gray-300 rounded w-20 text-right ml-auto"></div>
      </div>
    ))}

    {/* Footer Totals */}
    <div className="grid grid-cols-5 gap-4 pt-4 text-sm border-t border-gray-200">
      <div className="col-span-4 text-right">Total</div>
      <div className="h-4 bg-gray-300 rounded w-20 ml-auto"></div>

      <div className="col-span-4 text-right">Tax</div>
      <div className="h-4 bg-gray-300 rounded w-20 ml-auto"></div>

      <div className="col-span-4 text-right font-bold">Net Total</div>
      <div className="h-4 bg-gray-300 rounded w-20 ml-auto"></div>
    </div>

    {/* Payment & Company Info */}
    <div className="text-xs mt-6 space-y-3">
      <div>
        <div className="h-4 w-40 bg-gray-300 rounded mb-1"></div>
        <div className="h-3 w-60 bg-gray-300 rounded"></div>
        <div className="h-3 w-56 bg-gray-300 rounded"></div>
        <div className="h-3 w-44 bg-gray-300 rounded"></div>
      </div>
      <div className="mt-4">
        <div className="h-4 w-20 bg-gray-300 rounded mb-1"></div>
        <div className="h-3 w-48 bg-gray-300 rounded"></div>
        <div className="h-3 w-40 bg-gray-300 rounded"></div>
        <div className="h-3 w-44 bg-gray-300 rounded"></div>
      </div>
    </div>

    {/* Footer Note */}
    <div className="border-t-2 border-gray-300 pt-2 mt-4">
      <div className="h-4 w-32 bg-gray-300 rounded mx-auto"></div>
    </div>
  </div>

  {/* Buttons (also in skeleton) */}
  <div className="flex flex-col gap-3 w-40">
    <div className="h-10 bg-gray-300 rounded"></div>
    <div className="h-10 bg-gray-300 rounded"></div>
  </div>
</div>

  )
}

export default VoucherDetailSkeleton