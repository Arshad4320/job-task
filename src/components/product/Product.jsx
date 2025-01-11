import React, { useState } from "react";
import Title from "../title/Title";
import Heading from "../heading/Heading";
import Pragraph from "../pragraph/Pragraph";
import ProductCard from "../productCard/ProductCard";
import { useGetProductQuery } from "../../redux/features/product/productApi";
import Button from "../button/Button";
import { Link } from "react-router-dom";

const Product = () => {
  const { data: productItem } = useGetProductQuery();

  const [active, setActive] = useState(null);

  const buttonData = [
    { id: 1, Name: "All" },
    { id: 2, Name: "Fruits" },
    { id: 3, Name: "Vegetables" },
    { id: 4, Name: "Salad" },
  ];

  return (
    <div className="py-6 md:py-8 lg:py-10 px-4 md:px-6 lg:px-28">
      <div className="flex justify-center items-center">
        <div className="text-center">
          <Title props="Our Products" />
          <Heading props="Our Fresh Products" />
          <Pragraph props="We pride ourselves on offering a wide variety of fresh and flavorful fruits, vegetables, and salad ingredients." />
        </div>
      </div>
      <div>
        <div className="flex justify-center gap-2 mt-4">
          {buttonData?.map((obj) => (
            <button
              className={`text-lg lg:text-xl   text-center rounded-md py-1 lg:py-2 px-2 lg:px-3 cursor-pointer ${
                active === obj?.id
                  ? "  text-white bg-[#749B3F]"
                  : "  bg-white text-[#749B3F] border border-[#749B3F]"
              }`}
              key={obj?.id}
              onClick={() => setActive(obj?.id)}
            >
              {obj?.Name}
            </button>
          ))}
        </div>
        <div className="grid py-10 grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8">
          {productItem?.data?.map((item) => {
            return (
              <Link
                className="shadow-md p-2 "
                key={item?.id}
                to={`/product/${item.id}`}
              >
                <div>
                  <ProductCard
                    title={item?.productName}
                    img={item?.images}
                    price={item?.price}
                  />

                  <Button className={"w-full"} props={"Add To Cart"} />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Product;
