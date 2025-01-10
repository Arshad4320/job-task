import React from "react";

const Title = ({ props, className }) => {
  return (
    <div>
      <span className={`${className} text-2xl text-primary`}>{props}</span>
    </div>
  );
};

export default Title;
