import { useForm } from "react-hook-form";
import React, { useEffect, useState } from "react";
// import toast from "react-hot-toast";
import {
  useCreateProductMutation,
  useGetProductByIdQuery,
  useUpdateProductMutation,
} from "../../redux/features/product/productApi";
import Button from "../../components/button/Button";
import { useParams } from "react-router-dom";

const EditProduct = () => {
  const { id } = useParams();
  const { data: productData, isLoading: isLoadingProduct } =
    useGetProductByIdQuery(id);
  const [updateProduct] = useUpdateProductMutation();
  const { register, handleSubmit, reset, setValue } = useForm();

  useEffect(() => {
    if (productData) {
      setValue("name", productData.name);
      setValue("images", productData.images);
      setValue("description", productData.description);
      setValue("stock", productData.stock);
      setValue("price", productData.price);
    }
  }, [productData, setValue]);

  const onSubmit = async (data) => {
    try {
      const updatedProduct = {
        ...data,
        categoryId: Number(data.categoryId),
        stock: Number(data.stock),
        price: Number(data.price),
      };

      const result = await updateProduct({ id, ...updatedProduct }).unwrap();
      if (result) {
        reset();
      }
    } catch (err) {
      console.error(err);
    }
  };

  if (isLoadingProduct) {
    return <div>Loading...</div>;
  }

  return (
    <div className=" lg:m-8">
      <h1 className="text-2xl font-bold mb-4">Edit Product</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
          <div>
            <label className="font-medium text-gray-700" htmlFor="name">
              Product Name *
            </label>
            <input
              id="name"
              type="text"
              placeholder={productData?.data?.productName}
              className="border w-full bg-gray-100 rounded-md px-2 py-3 mt-2"
              {...register("name", { required: "Product name is required" })}
            />
          </div>
          <div>
            <label className="font-medium text-gray-700" htmlFor="images">
              Product Images *
            </label>
            <input
              id="images"
              type="file"
              multiple
              className="border w-full bg-gray-100 rounded-md px-2 py-3 mt-2"
              {...register("images", {
                required: "Product images are required",
              })}
            />
          </div>

          {/* Description */}
          <div>
            <label className="font-medium text-gray-700" htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              placeholder={productData?.data?.description}
              className="border w-full bg-gray-100 rounded-md px-2 py-3 mt-2"
              {...register("description")}
            ></textarea>
          </div>

          {/* Stock */}
          <div>
            <label className="font-medium text-gray-700" htmlFor="stock">
              Stock
            </label>
            <input
              id="stock"
              type="number"
              placeholder={productData?.data?.stock}
              className="border w-full bg-gray-100 rounded-md px-2 py-3 mt-2"
              {...register("stock", { required: "Stock is required" })}
            />
          </div>

          {/* Price */}
          <div>
            <label className="font-medium text-gray-700" htmlFor="price">
              Price *
            </label>
            <input
              id="price"
              type="number"
              placeholder={productData?.data?.price}
              className="border w-full bg-gray-100 rounded-md px-2 py-3 mt-2"
              {...register("price", { required: "Price is required" })}
            />
          </div>
        </div>

        <div className="flex justify-end mt-4">
          <Button
            props={"Update Product"}
            type="submit"
            className="cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
