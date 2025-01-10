import React from "react";

const ProductCard = ({ className, img, title, price }) => {
  return (
    <div className={`${className}`}>
      <img src={img} alt="" />
      <span>{title}</span>
      <span>{price}</span>
    </div>
  );
};

export default ProductCard;
