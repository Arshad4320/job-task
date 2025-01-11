import React from "react";
import Button from "../button/Button";
import { Link } from "react-router-dom";

const ProductCard = ({ className, img, title, price }) => {
  return (
    <div className={`${className} rounded-md shadow`}>
      <img className="w-full h-72 mb-4 rounded-md" src={img} alt="" />
      <div className="p-1 lg:p-3">
        <div className="text-center ">
          <span className="mb-2 lg:mb-4 text-sm lg:text-lg text-secondary font-medium">
            {title}
          </span>{" "}
          <br />
          <span className="text-sm lg:text-lg text-secondary">${price}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
