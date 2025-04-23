import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import { lineSpinner } from 'ldrs'
import toast from "react-hot-toast";
lineSpinner.register()

const ProductEditCard = () => {
  const {id} =useParams();
  console.log(id)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  const [isSending, setIsSending] = useState(false);
  const navigate = useNavigate();

  const handleCreateProduct = async(data) => {
    setIsSending(true);

    data.created_at = new Date().toISOString();
    await fetch(import.meta.env.VITE_API_URL + "/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        product_name: data.product_name,
        price: data.price,
        created_at: new Date().toISOString(),
      }),
    })
    // console.log(data);
    setIsSending(false);
    reset();
    if(data.back_to_product_list){
      navigate("/product");
    }
    toast.success("Product Created Successfully");
  };
  return (
    <div className="bg-stone-100 p-5 rounded-lg w-full md:w-1/2">
      <h1 className="text-2xl font-bold mb-3">Edit Product</h1>
      <p className="mb-10 text-stone-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam debitis
        suscipit vel?
      </p>
      <form onSubmit={handleSubmit(handleCreateProduct)}>
        <div className="">
          <div className="mb-5">
            <label htmlFor="first_name" className={`block mb-2 ${errors.product_name?"text-red-500":""}`}>
              Product Name
            </label>
            <input
              type="text"
              {...register("product_name", {
                required: true,
                minLength: 3,
                maxLength: 30,
              })}
              className={`bg-gray-50 border  text-gray-900 text-sm rounded-lg ${errors.product_name?"border-red-500 focus:ring-red-500 focus:border-red-500":"border-gray-300 focus:ring-blue-500 focus:border-blue-500"} block w-full p-2.5`}
              placeholder="eg. apple"
            />
            {errors.product_name?.type === "required" && (
              <p className="text-red-500 text-sm mt-1">Product name is required</p>
            )}
            {errors.product_name?.type === "minLength" && (
              <p className="text-red-500 text-sm mt-1">Product name must be greater than 3 characters</p>
            )}
            {errors.product_name?.type === "maxLength" && (
              <p className="text-red-500 text-sm mt-1">Product name must be less than 20 characters</p>
            )}
          </div>
          <div className="mb-8">
            <label htmlFor="last_name" className={`block mb-2 ${errors.price?"text-red-500":""}`}>
              Product Price
            </label>
            <input
              type="number"
              {...register("price", {
                required: true,
                min: 100,
                max: 10000,
              })}
              className={`bg-gray-50 border  text-gray-900 text-sm rounded-lg ${errors.price?"border-red-500 focus:ring-red-500 focus:border-red-500":"border-gray-300 focus:ring-blue-500 focus:border-blue-500"} block w-full p-2.5`}
              placeholder="eg. 5000"
            />
            {errors.price?.type === "required" && (
              <p className="text-red-500 text-sm mt-1">Product price is required</p>
            )}
            {errors.price?.type === "min" && (
              <p className="text-red-500 text-sm mt-1">Product price must be greater than 100 characters</p>
            )}
            {errors.price?.type === "max" && (
              <p className="text-red-500 text-sm mt-1">Product name must be less than 10000 characters</p>
            )}
          </div>
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="all_correct"
              {...register("all_correct")}
              defaultValue
              className="size-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm "
            />
            <label
              htmlFor="all_correct"
              className="mx-3 text-sm font-medium text-gray-600"
            >
              Make sure all fields are correct
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="back_to_product_list"
              {...register("back_to_product_list")}
              defaultValue
              className="size-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm "
            />
            <label
              htmlFor="back_to_product_list"
              className="mx-3 text-sm font-medium text-gray-600"
            >
              Back to Product List after saving
            </label>
          </div>
          <Link
            to={`/product`}
            type="button"
            className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 "
          >
            Cancel
          </Link>

          <button
            type="submit"
            className="text-white inline-flex items-center gap-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <span>Update Product</span>
            {isSending && (<l-line-spinner
              size="20"
              stroke="3"
              speed="1" 
              color="black" 
            ></l-line-spinner>)}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductEditCard;
