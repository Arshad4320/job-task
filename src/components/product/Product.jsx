import React, { useState } from "react";
import Title from "../title/Title";
import Heading from "../heading/Heading";
import Pragraph from "../pragraph/Pragraph";
import img from "../../assets/vegitable.jpg";
import ProductCard from "../productCard/ProductCard";
const data = [
  {
    id: 1,
    img: img,
    title: " Lorem, ipsum dolor  ",
    price: "10",
  },
  {
    id: 2,
    img: img,
    title: " Lorem, ipsum dolor  ",
    price: "10",
  },
  {
    id: 3,
    img: img,
    title: " Lorem, ipsum dolor  ",
    price: "10",
  },
  {
    id: 4,
    img: img,
    title: " Lorem, ipsum dolor  ",
    price: "10",
  },
];
const Product = () => {
  const [active, setActive] = useState(null);
  console.log(active);
  const buttonData = [
    { id: 1, Name: "All" },
    { id: 2, Name: "Fruits" },
    { id: 3, Name: "Vegetables" },
    { id: 4, Name: "Salad" },
  ];

  return (
    <div className="py-10 px-28">
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
              className={`text-xl   text-center rounded-md py-2 px-3 cursor-pointer ${
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
        <div className="grid my-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.map((item) => {
            return (
              <div key={item?.id}>
                <ProductCard
                  title={item?.title}
                  img={item?.img}
                  price={item?.price}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Product;
