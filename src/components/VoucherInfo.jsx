import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { lineSpinner } from "ldrs";
import toast from "react-hot-toast";
import SaleForm from "./SaleForm";
import VoucherTable from "./VoucherTable";
import useRecordStore from "../stores/useRecordStore";
import { Navigate, useNavigate } from "react-router-dom";
lineSpinner.register();

const VoucherInfo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const { records, resetRecord } = useRecordStore();
  const [isSending, setIsSending] = useState(false);
  const navigate = useNavigate()
  const onSubmit = async (data) => {
    setIsSending(true);
    const total = records.reduce((pv, cv) => pv + cv.cost, 0);
    const tax = total * 0.05;
    const grandTotal = total + tax;
    const currentVoucher =({ ...data, records, total, tax, grandTotal });
    const res = await fetch(import.meta.env.VITE_API_URL + "/vouchers",{
      method: "POST",
      body: JSON.stringify(currentVoucher),
      headers:{
        "Content-Type" : "application/json"
      }
    })
    const json = await res.json();
    console.log(json)


    resetRecord();
    reset();
    toast.success("Voucher Created Successfully");
    setIsSending(false);
    navigate("/voucher")
    if(data.redirect_to_voucher_detail){
      navigate(`/voucher/detail/${json.id}`)
    }
  };

  function generateInvoiceNumber() {
    const date = new Date();

    const formatDate = date.toISOString().slice(0, 10).replace(/-/g, "");
    const randomNumber = Math.floor(1000 + Math.random() * 9000);
    const invoiceNumber = `INV-${formatDate}-${randomNumber}`;
    return invoiceNumber;
  }
  //   console.log(generateInvoiceNumber())

  return (
    <div className="">
      {/* <div className="grid grid-cols-3"></div>
      <div className="grid grid-cols-1"></div> */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-stone-100 p-5 rounded-lg w-full mb-5"
        id="infoForm"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          <div className="col-span-1">
            <div className="mb-5">
              <label
                className={`block mb-2 ${
                  errors.voucher_id ? "text-red-500" : ""
                }`}
              >
                Voucher ID
              </label>
              <input
                type="text"
                defaultValue={generateInvoiceNumber()}
                {...register("voucher_id", {
                  required: true,
                  minLength: 3,
                  maxLength: 30,
                })}
                className={`bg-gray-50 border  text-gray-900 text-sm rounded-lg ${
                  errors.voucher_id
                    ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                    : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                } block w-full p-2.5`}
              />
              {errors.voucher_id?.type === "required" && (
                <p className="text-red-500 text-sm mt-1">
                  Voucher id is required
                </p>
              )}
              {/* {errors.voucher_id?.type === "minLength" && (
              <p className="text-red-500 text-sm mt-1">Product name must be greater than 3 characters</p>
            )}
            {errors.voucher_id?.type === "maxLength" && (
              <p className="text-red-500 text-sm mt-1">Product name must be less than 20 characters</p>
            )} */}
            </div>
          </div>
          <div className="col-span-1">
            <div className="mb-5">
              <label
                className={`block mb-2 ${
                  errors.customer_name ? "text-red-500" : ""
                }`}
              >
                Customer Name
              </label>
              <input
                type="text"
                {...register("customer_name", {
                  required: true,
                  minLength: 3,
                  maxLength: 30,
                })}
                className={`bg-gray-50 border  text-gray-900 text-sm rounded-lg ${
                  errors.customer_name
                    ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                    : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                } block w-full p-2.5`}
                placeholder="customer name"
              />
              {errors.customer_name?.type === "required" && (
                <p className="text-red-500 text-sm mt-1">
                  Customer name is required
                </p>
              )}
            </div>
          </div>
          <div className="col-span-1">
            <div className="mb-5">
              <label
                className={`block mb-2 ${
                  errors.customer_email ? "text-red-500" : ""
                }`}
              >
                Customer Email
              </label>
              <input
                type="email"
                {...register("customer_email", {
                  required: true,
                  minLength: 3,
                  maxLength: 30,
                })}
                className={`bg-gray-50 border  text-gray-900 text-sm rounded-lg ${
                  errors.customer_email
                    ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                    : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                } block w-full p-2.5`}
                placeholder="customer email"
              />
              {errors.customer_email?.type === "required" && (
                <p className="text-red-500 text-sm mt-1">
                  Customer email is required
                </p>
              )}
            </div>
          </div>
          <div className="col-span-1">
            <div className="mb-5">
              <label
                className={`block mb-2 ${
                  errors.sale_date ? "text-red-500" : ""
                }`}
              >
                Sale Date
              </label>
              <input
                type="date"
                defaultValue={new Date().toISOString().slice(0, 10)}
                {...register("sale_date", {
                  required: true,
                  minLength: 3,
                  maxLength: 30,
                })}
                className={`bg-gray-50 border  text-gray-900 text-sm rounded-lg ${
                  errors.sale_date
                    ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                    : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                } block w-full p-2.5`}
                placeholder="sale date"
              />
              {errors.sale_date?.type === "required" && (
                <p className="text-red-500 text-sm mt-1">
                  Sale date is required
                </p>
              )}
            </div>
          </div>
        </div>
      </form>
      <SaleForm />
      <VoucherTable />
      <div className="flex flex-col justify-end items-end mt-3">
        <div className="flex items-center mb-3">
          
          <label
            htmlFor="redirect_to_voucher_detail"
            className="mx-3 text-sm font-medium text-gray-600"
          >
            Redirect to Voucher Detail
          </label>
          <input
            type="checkbox"
            id="redirect_to_voucher_detail"
            form="infoForm"
            {...register("redirect_to_voucher_detail")}
            defaultValue
            className="size-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm "
          />
        </div>
        <div className="flex items-center mb-3">
          
          <label
            htmlFor="all_correct"
            className="mx-3 text-sm font-medium text-gray-600"
          >
            Make sure all fields are correct
          </label>
          <input
            type="checkbox"
            id="all_correct"
            form="infoForm"
            {...register("all_correct")}
            defaultValue
            className="size-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm "
          />
        </div>
        <button
          form="infoForm"
          type="submit"
          className="text-white inline-flex  items-center gap-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <span>Confirm Voucher</span>
          {isSending && (
            <l-line-spinner
              size="20"
              stroke="3"
              speed="1"
              color="black"
            ></l-line-spinner>
          )}
        </button>
      </div>
    </div>
  );
};

export default VoucherInfo;
