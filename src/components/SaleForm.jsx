import React from "react";
import { useForm } from "react-hook-form";
import useSWR from "swr";
import useRecordStore from "../stores/useRecordStore";
import toast from "react-hot-toast";

const SaleForm = () => {
  const fetcher =(url)=> fetch(url).then((res) => res.json());
  const {data, isLoading, error} = useSWR(import.meta.env.VITE_API_URL + "/products", fetcher);

  const {register, handleSubmit, reset} = useForm()
  const {addRecord, records, changeQuantity} = useRecordStore()

  const onSubmit =(data) => {

    const currentProduct = JSON.parse(data.product)
    const currentProductId = currentProduct.id;
    const existingRecord = records.find((record) => record.product.id === currentProductId);
    // ရှိပြီးသား record ရှိရင် quantity ကို update လုပ်မယ်
    // if (existingRecord) {
    //   changeQuantity(existingRecord.id, data.quantity);
    //   reset();
    //   return;
    // }
    
    if (existingRecord) {
      toast.error("Product already exists in the cart. Please change another product.");
      reset();
      return;
    }else{
    addRecord({
      id: Date.now(),
      product: currentProduct,
      quantity: data.quantity,
      cost: currentProduct.price * data.quantity,
      created_at: new Date().toISOString(),
    })
  }
    reset()
  }
  return (
    <div className="bg-stone-100 p-5 rounded-lg w-full mb-5">
      <form action="#" onSubmit={handleSubmit(onSubmit)} id="recordForm">
        <div className="grid grid-cols-5 gap-5">
          <div className="col-span-2">
            <label
              htmlFor="productSelect"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Select Your Product
            </label>
            <select
              id="productSelect"
              {...register("product", { required: true })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              required
            >
              <option value="">Select a product</option>
              {!isLoading && data.map((product) => (
                //value ကို object တစ်ခုလုံး ယူတာ
                <option key={product.id} value={JSON.stringify(product)}> 
                  {product.product_name}
                </option>
              ))
              }
            </select>
          </div>
          <div className="col-span-2">
            <label
              htmlFor="quantityInput"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Quantity
            </label>
            <input
              type="number"
              {...register("quantity", { required: true })}
              id="quantityInput"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
          <div className="col-span-1">
          <button type="submit" className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full h-full flex items-center justify-center text-center me-2 mb-2 ">Add Product</button>

          </div>
        </div>
      </form>
    </div>
  );
};

export default SaleForm;
