import React from "react";

const Button = ({ props, className, type }) => {
  return (
    <div>
      <button
        type={type}
        className={`${className}  bg-white  text-[#FF6A1A]  border border-[#FF6A1A]  text-lg lg:text-xl  text-center rounded-md py-1 lg:py-2 px-2 lg:px-3 hover:text-white hover:bg-[#FF6A1A]`}
      >
        {props}
      </button>
    </div>
  );
};

export default Button;
