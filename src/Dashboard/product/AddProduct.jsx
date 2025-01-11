import { useForm } from "react-hook-form";
import React, { useState } from "react";
// import toast from "react-hot-toast";
import { useCreateProductMutation } from "../../redux/features/product/productApi";
import Button from "../../components/button/Button";

const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const [createProduct] = useCreateProductMutation();
  const [message, setMessage] = useState("");

  const onSubmit = async (data) => {
    try {
      const newProduct = {
        ...data,
        categoryId: Number(data.categoryId),
        stock: Number(data.stock),
        price: Number(data.price),
      };

      const result = await createProduct(newProduct).unwrap();
      if (result) {
        reset();
        // toast.success("Product created successfully!");
      }
    } catch (err) {
      console.error(err);
      // toast.error("Failed to create product.");
    }
  };

  return (
    <div className="m-4 lg:m-8">
      <h1 className="text-2xl font-bold mb-4">Add New Product</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Product Name */}
          <div>
            <label className="font-medium text-gray-700" htmlFor="name">
              Product Name *
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter product name"
              className="border w-full bg-gray-100 rounded-md px-2 py-3 mt-2"
              {...register("name", { required: "Product name is required" })}
            />
          </div>

          {/* Product Images */}
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
          <div className="col-span-2">
            <label className="font-medium text-gray-700" htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              placeholder="Enter product description"
              className="border w-full bg-gray-100 rounded-md px-2 py-3 mt-2"
              {...register("description")}
            ></textarea>
          </div>

          {/* Stock */}
          <div>
            <label className="font-medium text-gray-700" htmlFor="stock">
              Stock *
            </label>
            <input
              id="stock"
              type="number"
              placeholder="Enter stock quantity"
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
              placeholder="Enter product price"
              className="border w-full bg-gray-100 rounded-md px-2 py-3 mt-2"
              {...register("price", { required: "Price is required" })}
            />
          </div>
        </div>

        <div className="flex justify-end mt-4">
          <Button
            props={"Add Product"}
            type="submit"
            className="cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
