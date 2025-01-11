import { useForm } from "react-hook-form";
import { FaPlus, FaMinus } from "react-icons/fa6";
import React, { useEffect, useState } from "react";

import toast from "react-hot-toast";
import { useGetCategoryQuery } from "../redux/features/category/category";
import { useParams } from "react-router-dom";

const EditProduct = () => {
  //   const [uploadeImage] = useFileUploadeMutation();
  //   const { id } = useParams();
  //   const { data: categorys, isLoading } = useGetCategoryQuery();
  //   const { data: product, isLoading: productLoading } =
  //     useGetSingleProductEditQuery(id);

  //   const [updateProduct] = useUpdateProductMutation();
  //   const { register, handleSubmit, reset } = useForm();
  //   const [items, setItems] = useState([
  //     {
  //       price: 0,
  //       weight: "",
  //       deliveryFree: false,
  //       stock: true,
  //     },
  //   ]);

  //   const [options, setOptions] = useState([""]);

  //   const handleAdd = () => {
  //     setItems([
  //       ...items,
  //       {
  //         price: 0,
  //         weight: "",
  //         deliveryFree: false,
  //         stock: true,
  //       },
  //     ]);
  //   };

  //   const handleAddOption = () => {
  //     setOptions([...options, { option: "" }]);
  //   };

  //   const handleRemove = (index) => {
  //     if (items.length > 1) {
  //       const newItems = [...items];
  //       newItems.splice(index, 1);
  //       newItems;
  //     }
  //   };

  //   const handleRemoveOption = (index) => {
  //     if (options.length > 1) {
  //       const newOptions = [...options];
  //       newOptions.splice(index, 1);
  //       setOptions(newOptions);
  //     }
  //   };
  //   const handleChangeOptions = (index, e) => {
  //     const { name, value } = e.target;
  //     setOptions((prevOptions) => {
  //       const newOptions = [...prevOptions];
  //       newOptions[index] = { ...newOptions[index], [name]: value };
  //       return newOptions;
  //     });
  //   };

  //   const handleChange = (index, e) => {
  //     const { name, value } = e.target;
  //     const newName = name.split("-", 1)[0];

  //     setItems((prevItems) => {
  //       // Create a deep copy of the prevItems
  //       const newItems = prevItems.map((item, i) =>
  //         i === index ? { ...item } : item
  //       );

  //       // Update the specific item
  //       if (name === "price") {
  //         newItems[index][name] = Number(value);
  //       } else if (newName === "deliveryFree") {
  //         newItems[index].deliveryFree = !newItems[index].deliveryFree;
  //       } else if (newName === "stock") {
  //         newItems[index].stock = !newItems[index].stock;
  //       } else {
  //         newItems[index][name] = value;
  //       }

  //       return newItems;
  //     });
  //   };

  //   const onSubmit = async (data) => {
  //     // let image = [
  //     //   "https://www.fitforlife.com.bd/wp-content/uploads/2023/11/achar-combo-next-800x800.webp",
  //     // ];
  //     let image = [];
  //     const { images, ...product } = data;
  //     for (const img of images) {
  //       const newFormData = new FormData();
  //       newFormData.append("image", img);
  //       const imageUpload = await uploadeImage(newFormData).unwrap();
  //       console.log(imageUpload);
  //       if (imageUpload?.data?.length) {
  //         image.push(imageUpload.data[0].filePath);
  //       }
  //     }

  //     const editProduct = {
  //       ...product,
  //       categoryId: Number(data.categoryId),
  //       discount: Number(data.discount),
  //       variations: items,
  //       descriptionOption: options,
  //       images: image,
  //     };
  //     try {
  //       const result = await updateProduct({ id, data: editProduct }).unwrap();
  //       if (result) {
  //         reset();
  //         toast.success("Product Update Succssfully");
  //       }
  //     } catch (err) {
  //       toast.error("Product Update faild");
  //     }
  //   };

  //   useEffect(() => {
  //     setOptions(product?.data?.descriptionOptions);
  //     setItems(product?.data?.variations);
  //   }, [product?.data]);

  //   if (isLoading || productLoading) {
  //     return <Loader />;
  //   }

  //   console.log(items);
  //   const {
  //     nameEnglish,
  //     nameBangla,
  //     categoryId,
  //     variations,
  //     discount,
  //     sku,
  //     descriptionOptions,
  //     descriptionTitle,
  //     descriptionDetails,
  //   } = product ? product.data : {};
  return (
    <div className=" m-4 lg:m-10 ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cosl-1 md:grid-cols-2 gap-4">
          <div>
            <label className="font-medium text-gray-700" htmlFor="name">
              Product Name *
            </label>
            <input
              defaultValue={nameEnglish}
              className="border w-full  outline-primary bg-gray-100 rounded-md px-2 py-3 duration-500 mt-2 font-semibold"
              {...register("nameEnglish")}
              placeholder="Product Name"
            />
          </div>
          <div>
            <label className="font-medium text-gray-700" htmlFor="name">
              প্রোডাক্টের নাম লিখুন *
            </label>
            <input
              defaultValue={nameBangla}
              className="border w-full  outline-primary bg-gray-100 rounded-md px-2 py-3 duration-500 mt-2 font-semibold"
              {...register("nameBangla")}
              placeholder="  প্রোডাক্টের নাম লিখুন"
            />
          </div>
          <div>
            <label className="font-medium text-gray-700" htmlFor="name">
              Category *
            </label>
            <select
              defaultValue={categoryId}
              className="border w-full outline-primary bg-gray-100 rounded-md px-2 py-3 duration-500 mt-2 font-semibold"
              {...register("categoryId")}
            >
              {categorys?.data?.map((item) => (
                <option key={item?.id} value={item?.id}>
                  {item?.nameEnglish}
                  {/* {item.nameBangla} */}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="font-medium text-gray-700" htmlFor="name">
              Product Image *
            </label>
            <input
              className="border w-full outline-primary bg-gray-100 rounded-md px-2 py-3 duration-500 mt-2 font-semibold"
              {...register("images")}
              placeholder="product images"
              multiple
              type="file"
            />
          </div>
          <div>
            <label className="font-medium text-gray-700" htmlFor="name">
              Discount
            </label>
            <input
              defaultValue={discount}
              className="border w-full  outline-primary bg-gray-100 rounded-md px-2 py-3 duration-500 mt-2 font-semibold"
              {...register("discount")}
              placeholder="Discount"
            />
          </div>
          <div>
            <label className="font-medium text-gray-700" htmlFor="name">
              Sku
            </label>
            <input
              defaultValue={sku}
              className="border w-full  outline-primary bg-gray-100 rounded-md px-2 py-3 duration-500 mt-2 font-semibold"
              {...register("sku")}
              placeholder="sku"
            />
          </div>
          <div>
            <label className="font-medium text-gray-700" htmlFor="name">
              Description Title *
            </label>
            <input
              defaultValue={descriptionTitle}
              className="border w-full  outline-primary bg-gray-100 rounded-md px-2 py-3 duration-500 mt-2 font-semibold"
              {...register("descriptionTitle")}
              placeholder="Description Title"
            />
          </div>

          {options?.map((op, index) => (
            <div className="flex gap-3 items-center">
              <div className="rounded-md   w-full">
                <label
                  className="font-medium text-gray-700"
                  htmlFor={`weight -${index}`}
                >
                  Description Options *
                </label>
                <input
                  className="border w-full  outline-primary bg-gray-100 rounded-md px-2 py-3 duration-500 mt-2 font-semibold"
                  type="text"
                  name="option"
                  defaultValue={op?.option}
                  onChange={(e) => handleChangeOptions(index, e)}
                  placeholder=""
                />
              </div>
              <div className="flex items-center mt-6  cursor-pointer group">
                {options?.length - 1 === index ? (
                  <button
                    type="button"
                    onClick={handleAddOption}
                    className="bg-blue-500 text-white p-1"
                  >
                    <FaPlus className="text-xl" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => handleRemoveOption(index)}
                    className="bg-red-500 text-white p-1"
                  >
                    <FaMinus className="text-xl" />
                  </button>
                )}
              </div>
            </div>
          ))}

          {/* <div>
            <label className="font-medium text-gray-700" htmlFor="name">
              Description Options *
            </label>
            <input
              className="border w-full  outline-primary bg-gray-100 rounded-md px-2 py-3 duration-500 mt-2 font-semibold"
              {...register("descriptionOption")}
              placeholder="Description Options"
            />
          </div> */}

          <div>
            <label className="font-medium text-gray-700" htmlFor="name">
              Description Details *
            </label>
            <input
              defaultValue={descriptionDetails}
              className="border w-full  outline-primary bg-gray-100 rounded-md px-2 py-3 duration-500 mt-2 font-semibold"
              {...register("descriptionDetails")}
              placeholder="Description Details"
            />
          </div>

          {items?.map((item, index) => (
            <div className="flex flex-col md:flex-row w-full gap-4 ">
              <div className="rounded-md">
                <label
                  className="font-medium text-gray-700"
                  htmlFor={`weight -${index}`}
                >
                  Weight
                </label>
                <input
                  className="border w-full  outline-primary bg-gray-100 rounded-md px-2 py-3 duration-500 mt-2 font-semibold"
                  type="text"
                  name="weight"
                  value={item?.weight}
                  onChange={(e) => handleChange(index, e)}
                  placeholder="Ex: 500gm"
                />
              </div>

              <div className="flex items-center w-full gap-2">
                <div className="rounded-md  ">
                  <label
                    className="font-medium text-gray-700"
                    htmlFor={`price -${index}`}
                  >
                    Price
                  </label>
                  <input
                    className="border w-full  outline-primary bg-gray-100 rounded-md px-2 py-3 duration-500 mt-2 font-semibold"
                    type="number"
                    name="price"
                    defaultValue={item?.price}
                    onChange={(e) => handleChange(index, e)}
                    placeholder="Price"
                  />
                </div>
                <div className="rounded-md">
                  <label className="font-medium text-gray-700">Del Fee</label>
                  <div className="flex gap-2">
                    <div className="flex items-center gap-1">
                      <input
                        type="radio"
                        name={`deliveryFree-${index}`}
                        checked={item?.deliveryFree === true}
                        onChange={(e) => handleChange(index, e)}
                      />
                      <label htmlFor={`deliveryFree-${index}-yes`}>Yes</label>
                    </div>
                    <div className="flex items-center gap-1">
                      <input
                        type="radio"
                        name={`deliveryFree-${index}`}
                        checked={item?.deliveryFree === false}
                        onChange={(e) => handleChange(index, e)}
                      />
                      <label htmlFor={`deliveryFree-${index}-no`}>No</label>
                    </div>
                  </div>
                </div>
                <div className="rounded-md">
                  <label className="font-medium text-gray-700">Stock</label>
                  <div className="flex gap-2">
                    <div className="flex items-center gap-1">
                      <input
                        type="radio"
                        name={`stock-${index}`}
                        checked={item?.stock === true}
                        onChange={(e) => handleChange(index, e)}
                      />
                      <label htmlFor={`stock-${index}-yes`}>Yes</label>
                    </div>
                    <div className="flex items-center gap-1">
                      <input
                        type="radio"
                        name={`stock-${index}`}
                        checked={item?.stock === false}
                        onChange={(e) => handleChange(index, e)}
                      />
                      <label htmlFor={`stock-${index}-no`}>No</label>
                    </div>
                  </div>
                </div>
                <div className="flex items-center mt-6  cursor-pointer group">
                  {items.length - 1 === index ? (
                    <button
                      type="button"
                      onClick={handleAdd}
                      className="bg-blue-500 text-white p-1"
                    >
                      <FaPlus className="text-xl" />
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => handleRemove(index)}
                      className="bg-red-500 text-white p-1"
                    >
                      <FaMinus className="text-xl" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end mt-2">
          <Button props={"Update Product"} type="submit" />
        </div>{" "}
      </form>
    </div>
  );
};

export default EditProduct;
