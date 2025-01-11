import React from "react";

const Pragraph = ({ props, className }) => {
  return (
    <div>
      <p className={`${className} text-secondary  text-lg mb-4`}>{props}</p>
    </div>
  );
};

export default Pragraph;
