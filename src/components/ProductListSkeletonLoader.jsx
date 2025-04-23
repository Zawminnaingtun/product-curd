import React from "react";

const ProductListSkeletonLoader = () => {
  return (
    <>
      <tr className="odd:bg-white even:bg-gray-50 border-b border-gray-200 animate-pulse">
        <td className="px-6 py-4">
          <div className="h-4 w-4 bg-gray-300 rounded"></div>
        </td>
        <td className="px-6 py-4">
          <div className="h-4 w-40 bg-gray-300 rounded"></div>
        </td>
        <td className="px-6 py-4 text-end">
          <div className="h-4 w-16 bg-gray-300 rounded ml-auto"></div>
        </td>
        <td className="px-6 py-4 text-end">
          <div className="flex flex-col items-end space-y-1">
            <div className="h-3 w-24 bg-gray-300 rounded"></div>
            <div className="h-3 w-16 bg-gray-300 rounded"></div>
          </div>
        </td>
        <td className="px-6 py-4 text-end">
          <div className="inline-flex space-x-2">
            <div className="h-8 w-8 bg-gray-300 rounded-md"></div>
            <div className="h-8 w-8 bg-gray-300 rounded-md"></div>
          </div>
        </td>
      </tr>
      <tr className="odd:bg-white even:bg-gray-50 border-b border-gray-200 animate-pulse">
        <td className="px-6 py-4">
          <div className="h-4 w-4 bg-gray-300 rounded"></div>
        </td>
        <td className="px-6 py-4">
          <div className="h-4 w-40 bg-gray-300 rounded"></div>
        </td>
        <td className="px-6 py-4 text-end">
          <div className="h-4 w-16 bg-gray-300 rounded ml-auto"></div>
        </td>
        <td className="px-6 py-4 text-end">
          <div className="flex flex-col items-end space-y-1">
            <div className="h-3 w-24 bg-gray-300 rounded"></div>
            <div className="h-3 w-16 bg-gray-300 rounded"></div>
          </div>
        </td>
        <td className="px-6 py-4 text-end">
          <div className="inline-flex space-x-2">
            <div className="h-8 w-8 bg-gray-300 rounded-md"></div>
            <div className="h-8 w-8 bg-gray-300 rounded-md"></div>
          </div>
        </td>
      </tr>
      <tr className="odd:bg-white even:bg-gray-50 border-b border-gray-200 animate-pulse">
        <td className="px-6 py-4">
          <div className="h-4 w-4 bg-gray-300 rounded"></div>
        </td>
        <td className="px-6 py-4">
          <div className="h-4 w-40 bg-gray-300 rounded"></div>
        </td>
        <td className="px-6 py-4 text-end">
          <div className="h-4 w-16 bg-gray-300 rounded ml-auto"></div>
        </td>
        <td className="px-6 py-4 text-end">
          <div className="flex flex-col items-end space-y-1">
            <div className="h-3 w-24 bg-gray-300 rounded"></div>
            <div className="h-3 w-16 bg-gray-300 rounded"></div>
          </div>
        </td>
        <td className="px-6 py-4 text-end">
          <div className="inline-flex space-x-2">
            <div className="h-8 w-8 bg-gray-300 rounded-md"></div>
            <div className="h-8 w-8 bg-gray-300 rounded-md"></div>
          </div>
        </td>
      </tr>
    </>
  );
};

export default ProductListSkeletonLoader;
