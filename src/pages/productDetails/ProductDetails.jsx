import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { useGetProductByIdQuery } from "../../redux/features/product/productApi";
import { useParams } from "react-router-dom";

import Heading from "../../components/heading/Heading";
import Pragraph from "../../components/pragraph/Pragraph";
import Button from "../../components/button/Button";

const ProductDetails = () => {
  const [count, setCount] = useState(0);
  const { id } = useParams();
  const { data } = useGetProductByIdQuery(id);

  console.log(data);
  return (
    <div className="py-6 md:py-8 lg:py-10 px-4 md:px-6 lg:px-28 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="flex justify-center items-center">
        <img className="w-[95%] h-2/3" src={data?.data?.images} alt="" />
      </div>
      <div>
        <Heading props={data?.data?.productName} />
        <span className="text-2xl  text-[#FF6A1A] font-semibold">
          ${data?.data?.price}/kg
        </span>
        <Pragraph className={"lg:mt-4"} props={data?.data?.description} />
        <div className="flex gap-1">
          <p className="text-xl font-medium">Quantity :</p>

          <button
            className=" border p-2 broder:gray-300"
            onClick={() => setCount(data?.data?.stock === 0 ? count - 1 : 0)}
          >
            <FaMinus />
          </button>
          <span className=" text-xl">{count}</span>
          <button
            className=" border p-2 broder:gray-300"
            onClick={() => setCount(data?.data?.stock > 0 ? count + 1 : 0)}
          >
            {" "}
            <FaPlus />
          </button>
        </div>
        <div className="flex gap-2 mt-2">
          <Button props={"Save as favorite"} />
          <Button props={"Add To Card"} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
