import React, { useRef, useState } from "react";
import { HiSearch } from "react-icons/hi";
import { HiOutlinePencil, HiOutlineTrash, HiPlus, HiXMark } from "react-icons/hi2";
import useSWR from "swr";
import ProductListSkeletonLoader from "./ProductListSkeletonLoader";
import ProductListEmptyStage from "./ProductListEmptyStage";
import ProductRow from "./ProductRow";
import { Link } from "react-router-dom";
import { debounce } from "lodash";

const ProductList = () => {
  // console.log(import.meta.env.VITE_API_URL); // endpoint call
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const [search, setSearch] = useState();
  const searchInput = useRef("");

  const { data, isLoading, error } = useSWR(
    search
      ? `${import.meta.env.VITE_API_URL}/products?product_name_like=${search}`
      : `${import.meta.env.VITE_API_URL}/products`,
    fetcher
  );
  const handleSearch = debounce((e) => {
    setSearch(e.target.value);
    // console.log(e.target.value);
  }, 500);
  const handleClearSearch = () => {
    setSearch("");
    searchInput.current.value = "";
  };

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }
  // console.log(isLoading);
  return (
    <>
      <div className="flex justify-between mb-3">
        <div className="">
          <div className="relative mb-6">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <HiSearch />
            </div>
            <input
              onChange={handleSearch}
              ref={searchInput}
              type="text"
              id="input-group-1"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  "
              placeholder="Search Product"
            />
            {search && (
              <button
                onClick={handleClearSearch}
                className="absolute inset-y-0 end-0 flex items-center pe-3 text-gray-500 hover:text-gray-700 cursor-pointer"
              >
                <HiXMark className="scale-100 active:scale-50 duration-100" />
              </button>
            )}
          </div>
        </div>
        <div className="">
          <Link
            to={`/product/create`}
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex justify-center items-center"
          >
            Add New Product
            <HiPlus className="ms-2" />
          </Link>
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
            {isLoading ? (
              <ProductListSkeletonLoader />
            ) : data.length === 0 ? (
              <ProductListEmptyStage />
            ) : (
              data.map((product) => (
                <ProductRow product={product} key={product.id} />
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProductList;
