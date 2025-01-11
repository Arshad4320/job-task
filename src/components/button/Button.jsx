import React from "react";

const Button = ({ props, className }) => {
  return (
    <div>
      <p
        className={`${className}  bg-white  text-[#FF6A1A]  border border-[#FF6A1A]  text-lg lg:text-xl  text-center rounded-md py-1 lg:py-2 px-2 lg:px-3 hover:text-white hover:bg-[#FF6A1A]`}
      >
        {props}
      </p>
    </div>
  );
};

export default Button;
