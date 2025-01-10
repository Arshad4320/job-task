import React from "react";

const Pragraph = ({ props, className }) => {
  return (
    <div>
      <p className={`${className} text-secondary text-sm mb-4`}>{props}</p>
    </div>
  );
};

export default Pragraph;
