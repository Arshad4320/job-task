import React from "react";

const Button = ({ props, className }) => {
  return (
    <div>
      <p
        className={`${className} hover:bg-white  hover:text-[#FF6A1A] text:bg-[#FF6A1A] border hover:border-[#FF6A1A] text-xl w-36 text-center rounded-md py-2 px-2 text-white bg-[#FF6A1A]`}
      >
        {props}
      </p>
    </div>
  );
};

export default Button;
