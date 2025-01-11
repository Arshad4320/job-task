import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { useCreateCategoryMutation } from "../../redux/features/category/categoryApi";
import Button from "../../components/button/Button";

const AddCategory = () => {
  const { register, handleSubmit, reset } = useForm();
  const [createCategory] = useCreateCategoryMutation();
  const [message, setMessage] = useState("");

  const onSubmit = async (data) => {
    try {
      const result = await createCategory(data).unwrap();

      if (result) {
        reset();
        setMessage("Category created successfully!");
      }
    } catch (err) {
      console.error(err);
      setMessage("Failed to create category. Please try again."); //J
    }
  };

  return (
    <div className="m-4 lg:m-8">
      <h1 className="text-2xl font-bold mb-4">Add New Category</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="font-medium text-gray-700" htmlFor="name">
            Category Name *
          </label>
          <input
            id="name"
            type="text"
            placeholder="Enter category name"
            className="border w-full bg-gray-100 rounded-md px-2 py-3 mt-2"
            {...register("name", { required: "Category name is required" })}
          />
        </div>

        {message && <p className="mt-2 text-sm text-green-500">{message}</p>}

        <div className="flex justify-end mt-4">
          <Button
            props={"Add Category"}
            type="submit"
            className="cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
};

export default AddCategory;
