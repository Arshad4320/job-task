import { useForm } from "react-hook-form";
import React, { useState } from "react";
// import toast from "react-hot-toast";
import {
  useCreateProductMutation,
  useGetProductByIdQuery,
} from "../../redux/features/product/productApi";
import Button from "../../components/button/Button";
import {
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
} from "../../redux/features/category/categoryApi";
import { useParams } from "react-router-dom";

const EditCategory = () => {
  const { id } = useParams();
  const { data: singleData } = useGetProductByIdQuery(id);
  console.log(singleData);
  const { data: editData } = useUpdateCategoryMutation(id);
  const { register, handleSubmit, reset } = useForm();
  const { updateCateogy } = useUpdateCategoryMutation(id);

  const onSubmit = async (data) => {};

  return (
    <div className="m-4 lg:m-8">
      <h1 className="text-2xl font-bold mb-4">Edit Category</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="">
          <div>
            <label className="font-medium text-gray-700" htmlFor="name">
              Cetagory Name *
            </label>
            <input
              id="name"
              type="text"
              placeholder={singleData?.data?.categoryName}
              className="border w-full bg-gray-100 rounded-md px-2 py-3 mt-2"
              {...register("name", { required: "category name is required" })}
            />
          </div>
        </div>

        <div className="flex justify-end mt-4">
          <Button
            props={"AddCetagory"}
            type="submit"
            className="cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
};

export default EditCategory;
