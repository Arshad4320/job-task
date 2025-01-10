import React from "react";

const Button = ({ props, className }) => {
  return (
    <div>
      <p
        className={`${className}  bg-white  text-[#FF6A1A]  border hover:border-[#FF6A1A] text-xl  text-center rounded-md py-2 px-3 hover:text-white hover:bg-[#FF6A1A]`}
      >
        {props}
      </p>
    </div>
  );
};

export default Button;
