import React, { useState } from 'react'
import { HiOutlinePencil, HiOutlineTrash, HiPlus } from "react-icons/hi2";
import ShowDate from './ShowDate';
import { useSWRConfig } from 'swr';
import { dotPulse } from "ldrs";
import toast from "react-hot-toast";
dotPulse.register();


const VoucherListRow = ({voucher:{id,customer_name, customer_email, sale_date, voucher_id}}) => {
    const { mutate } = useSWRConfig();
      const [isDeleting, setIsDeleting] = useState(false);
      const handleDeleteBtn = async () => {
        setIsDeleting(true);
        await fetch(import.meta.env.VITE_API_URL + `/vouchers/${id}`, {
          method: "DELETE",
        });
    
        mutate(import.meta.env.VITE_API_URL + "/vouchers");
        // console.log(id)
        setIsDeleting(false);
        toast.success("Voucher Deleted Successfully");
      };
  return (
    <tr className="odd:bg-white  even:bg-gray-50  border-b  border-gray-200">
                  <td
                    scope="row"
                    className="px-6 py-4 font-medium whitespace-nowrap"
                  >
                    {voucher_id}
                  </td>
                  <td
                    scope="row"
                    className="px-6 py-4 font-medium whitespace-nowrap"
                  >
                    {customer_name}
                  </td>
                  <td className="px-6 py-4 text-end">{customer_email}</td>
                  <td className="px-6 py-4 text-end">
                    {/* <p className="text-sm">7-Sep-2022</p>
                    <p className="text-sm">10:30 AM</p> */}
                    <ShowDate timestamp={sale_date} />
                  </td>
                  <td className="px-6 py-4 text-end">
                    <div className="inline-flex rounded-md shadow-xs" role="group">
                      <button
                      onClick={handleDeleteBtn}
                        type="button"
                        className="size-10 flex justify-center items-center text-sm font-medium text-red-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 "
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
  )
}

export default VoucherListRow