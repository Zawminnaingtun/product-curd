import React from 'react'
import { HiSearch } from "react-icons/hi";
import { HiOutlinePencil, HiOutlineTrash, HiPlus } from "react-icons/hi2";

const VoucherList = () => {
  return (
    <>
          <div className="flex justify-between mb-3">
            <div className="">
              <div className="relative mb-6">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <HiSearch />
                </div>
                <input
                  type="text"
                  id="input-group-1"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  "
                  placeholder="Search Product"
                />
              </div>
            </div>
            <div className="">
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex justify-center items-center"
              >
                Add New Product
                <HiPlus className="ms-2" />
              </button>
            </div>
          </div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    #
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Product name
                  </th>
                  <th scope="col" className="px-6 py-3 text-end">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3 text-end">
                    Created At
                  </th>
                  <th scope="col" className="px-6 py-3 text-end">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="odd:bg-white  even:bg-gray-50  border-b  border-gray-200 hidden last:table-row">
                  <td
                    colSpan={5}
                    scope="row"
                    className="px-6 py-4 font-medium whitespace-nowrap text-center"
                  >
                    There is no Product!
                  </td>
                </tr>
                <tr className="odd:bg-white  even:bg-gray-50  border-b  border-gray-200">
                  <td
                    scope="row"
                    className="px-6 py-4 font-medium whitespace-nowrap"
                  >
                    1
                  </td>
                  <td
                    scope="row"
                    className="px-6 py-4 font-medium whitespace-nowrap"
                  >
                    Apple MacBook Pro 17"
                  </td>
                  <td className="px-6 py-4 text-end">$2999</td>
                  <td className="px-6 py-4 text-end">
                    <p className="text-sm">7-Sep-2022</p>
                    <p className="text-sm">10:30 AM</p>
                  </td>
                  <td className="px-6 py-4 text-end">
                    <div className="inline-flex rounded-md shadow-xs" role="group">
                      <button
                        type="button"
                        className="px-4 py-2 text-sm font-medium text-red-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 "
                      >
                        <HiOutlinePencil />
                      </button>
    
                      <button
                        type="button"
                        className="px-4 py-2 text-sm font-medium text-red-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 "
                      >
                        <HiOutlineTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
  )
}

export default VoucherList