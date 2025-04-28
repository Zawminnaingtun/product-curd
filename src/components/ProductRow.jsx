import React, { useState } from "react";
import { HiOutlinePencil, HiOutlineTrash, HiPlus } from "react-icons/hi2";
import { useSWRConfig } from "swr";
import { Link } from "react-router-dom";
import ShowDate from "./ShowDate";
import { dotPulse } from "ldrs";
import toast from "react-hot-toast";
dotPulse.register();

const ProductRow = ({ product: { id, product_name, price, created_at } }) => {
  const { mutate } = useSWRConfig();
  const [isDeleting, setIsDeleting] = useState(false);

  // const date = new Date(created_at);
  // const day = date.getUTCDate();
  // const month = date.toLocaleString("en-GB", {
  //   month: "short",
  //   timeZone: "UTC",
  // });
  // const year = date.getUTCFullYear();

  // const currentDate = `${day} ${month} ${year}`;
  // const currentTime = date.toLocaleTimeString();

  const handleDeleteBtn = async () => {
    setIsDeleting(true);
    await fetch(import.meta.env.VITE_API_URL + `/products/${id}`, {
      method: "DELETE",
    });

    mutate(import.meta.env.VITE_API_URL + "/products");
    // console.log(id)
    setIsDeleting(false);
    toast.success("Product Deleted Successfully");
  };

  return (
    <tr className="odd:bg-white  even:bg-gray-50  border-b  border-gray-200">
      <td scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
        {id}
      </td>
      <td scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
        {product_name}
      </td>
      <td className="px-6 py-4 text-end">${price}</td>
      <td className="px-6 py-4 text-end">
        {/* <p className="text-sm">{currentDate}</p>
        <p className="text-sm">{currentTime}</p> */}
        <ShowDate timestamp={created_at}/>
      </td>
      <td className="px-6 py-4 text-end">
        <div className="inline-flex rounded-md shadow-xs" role="group">
          <Link to={`/product/edit/${id}`}
            className="size-10 flex justify-center items-center text-sm font-medium text-red-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 "
          >
            <HiOutlinePencil />
          </Link>

          <button
            onClick={handleDeleteBtn}
            type="button"
            className="size-10 flex justify-center items-center text-sm font-medium text-red-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 "
          >
            {isDeleting ? (
              <l-dot-pulse size="20" speed="1.3" color="red"></l-dot-pulse>
            ) : (
              <HiOutlineTrash />
            )}
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ProductRow;
