import React from "react";
import Button from "../button/Button";
import { Link } from "react-router-dom";

const ProductCard = ({ className, img, title, price }) => {
  return (
    <div className={`${className} rounded-md shadow`}>
      <img className="w-full h-64 mb-3 rounded-md" alt="" />
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
