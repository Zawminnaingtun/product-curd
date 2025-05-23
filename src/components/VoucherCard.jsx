import printJS from 'print-js'  //to print printJS 
import React from 'react'
import { useParams } from 'react-router-dom'
import useSWR from 'swr'
import VoucherDetailSkeleton from './VoucherDetailSkeleton'
import html2pdf from "html2pdf.js";


const fetcher =(url)=>fetch(url).then((res) => res.json())
const VoucherCard = () => {
    const {id} = useParams()
    const {data, isLoading, error} = useSWR(import.meta.env.VITE_API_URL + '/vouchers/' + id, fetcher)
    // console.log(data) 
    if (isLoading) return <VoucherDetailSkeleton />
    const handlePrint = () => {
      // window.print()
      printJS({printable: 'printArea', type: 'html',
      css: 'https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css',
      scanStyles: true,
      })
    }
    const handlePdf = () => {
      console.log("export pdf");
          const element = document.getElementById("printArea");
      
          // Options for PDF generation
          const opt = {
            margin: 0.1,
            filename: "invoice.pdf",
            image: { type: "jpeg", quality: 0.98 },
            html2canvas: { scale: 1 },
            jsPDF: { unit: 'in', format: 'a5', orientation: 'portrait' },
          };
      
          // Convert the element to PDF
          html2pdf().from(element).set(opt).save();
    }
    
  return (
    <div className=" flex gap-5">
      <div id="printArea" className="w-[14.8cm] bg-white ">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">INVOICE</h1>
            <p className="text-xl">{data.voucher_id}</p>
          </div>
          <div className="text-right">
            <p className="font-bold">Invoice to</p>
            <p>{data.customer_name}</p>
            <p>Date: {data.sale_date}</p>
          </div>
        </div>

        <table className="w-full mb-8">
          <thead>
            <tr className="border-b-2 border-gray-300">
              <th className="text-left py-2 text-sm">No</th>
              <th className="text-left py-2 text-sm">Description</th>
              <th className="text-right py-2 text-sm">Qty</th>
              <th className="text-right py-2 text-sm">Price</th>
              <th className="text-right py-2 text-sm">Total</th>
            </tr>
          </thead>
          <tbody>
            {data.records.map((record, index) => (
              <tr key={record.id} className="border-b border-gray-200">
                <td className="py-2 text-sm">{index + 1}</td>
                <td className="py-2 text-sm">{record.product.product_name}</td>
                <td className="text-right py-2 text-sm">{record.quantity}</td>
                <td className="text-right py-2 text-sm">
                  {new Intl.NumberFormat('ja-JP', { minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(record.product.price)}
                  {/* {record.product.price} */}
                </td>
                <td className="text-right py-2 text-sm">
                  {new Intl.NumberFormat('ja-JP', { minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(record.cost)}
                  {/* {record.cost} */}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="border-b border-gray-200">
              <td className="py-2 text-right text-sm" colSpan={4}>
                Total
              </td>
              <td className="py-2 text-right text-sm">
              {new Intl.NumberFormat('ja-JP', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(data.total)}
              {/* {data.total.toFixed(2)} */}
              </td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 text-right text-sm" colSpan={4}>
                Tax
              </td>
              <td className="py-2 text-right text-sm">
              {new Intl.NumberFormat('ja-JP', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(data.tax)}
                {/* {data.tax.toFixed(2)} */}
              </td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 text-right text-sm" colSpan={4}>
                Net Total
              </td>
              <td className="py-2 text-right text-sm">
              {new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(data.grandTotal)}
                {/* {data.grandTotal.toFixed(2)} */}
                </td>
            </tr>
          </tfoot>
        </table>

        <div className=" text-xs mb-4">
          <div className=" ">
            <h2 className="font-bold mb-2">Payment Transfer to</h2>
            <p>Kpay,Wave - 09250152018</p>
            <p>KBZ Bank - 02730102705025601</p>
            <p>AYA Bank - 20003674121</p>
          </div>
          <div className="  ">
            <h2 className="font-bold text-xl">MMS IT</h2>
            <p>48, 1st Floor, Shan Kone St.</p>
            <p>+959-250-152-018</p>
            <p>enquiry@mms-it.com</p>
          </div>
        </div>

        <div className="border-t-2 border-gray-300 pt-2">
          <p className="mt-4 text-center text-sm">Thanks to You</p>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <button
          onClick={handlePrint}
          className="text-white flex justify-center items-center gap-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Print Voucher
        </button>

        <button
        onClick={handlePdf}
          className="text-white flex justify-center items-center gap-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Download PDF
        </button>
      </div>
    </div>
  )
}

export default VoucherCard