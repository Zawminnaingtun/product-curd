import React, { useRef, useState } from 'react'
import { HiSearch } from "react-icons/hi";
import { HiOutlinePencil, HiOutlineTrash, HiPlus, HiMiniComputerDesktop } from "react-icons/hi2";
import useSWR from 'swr';
import VoucherListRow from './VoucherListRow';
import { Link } from 'react-router-dom';
import VoucherListSkeletonLoader from './VoucherListSkeletonLoader';
import { debounce, throttle } from 'lodash';
import { HiXMark } from "react-icons/hi2";


const VoucherList = () => {
  const [search, setSearch] =useState()
  const searchInput = useRef("")
  // console.log((searchInput))
  const fetcher = (...args) => fetch(...args).then((res) => res.json())
  const {data, isLoading, error} = useSWR(
    search ? `${import.meta.env.VITE_API_URL}/vouchers?voucher_id_like=${search}` : `${import.meta.env.VITE_API_URL}/vouchers`
    , fetcher)
  // console.log(search)

  // throttle & debounce => lodash
  // const handleSearch = (e) => {
  //   setSearch(e.target.value)
  //   console.log(e.target.value)
  // }
  const handleSearch = debounce((e)=> {
    setSearch(e.target.value)
    // console.log(e.target.value)
  }, 500)
  const handleClearSearch = () => {
    setSearch("")
    searchInput.current.value = ""
  }
  return (
    <>
          <div className="flex justify-between mb-3">
            <div className="">
              <div className="relative mb-6">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <HiSearch />
                </div>
                <input
                  ref={searchInput}
                onChange={handleSearch}
                  type="text"
                  id="input-group-1"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  "
                  placeholder="Search Product"
                />
                {search && <button onClick={handleClearSearch} className="absolute inset-y-0 end-0 flex items-center pe-3 text-gray-500 hover:text-gray-700 cursor-pointer">
                  <HiXMark className='scale-100 active:scale-50 duration-100'/>
                </button>}
              </div>
            </div>
            <Link to={`/sale`} className="">
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex justify-center items-center"
              >
                Create Sale
                <HiMiniComputerDesktop className="ms-2" />
              </button>
            </Link>
          </div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    # Voucher_ID
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Customer name
                  </th>
                  <th scope="col" className="px-6 py-3 text-end">
                    Customer Email
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
                    There is no Voucher!
                  </td>
                </tr>
                {isLoading && <VoucherListSkeletonLoader />}
                {!isLoading && data.map((voucher, index) => (
                  <VoucherListRow key={index} voucher={voucher} index={index} />
              ))}
              </tbody>
            </table>
          </div>
        </>
  )
}

export default VoucherList