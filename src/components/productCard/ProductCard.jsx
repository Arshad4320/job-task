import React from "react";
import Button from "../button/Button";

const ProductCard = ({ className, img, title, price }) => {
  return (
    <div className={`${className} rounded-md shadow`}>
      <img className="w-full h-full mb-4 rounded-md" src={img} alt="" />
      <div className="p-3">
        <div className="text-center ">
          <span className="mb-4 text-lg text-secondary font-medium">
            {title}
          </span>{" "}
          <br />
          <span className="text-lg text-secondary">${price}</span>
        </div>
        <Button className={"my-3"} props={"Add To Cart"} />
      </div>
    </div>
  );
};

export default ProductCard;
