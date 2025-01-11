import React from "react";

const Heading = ({ props, className }) => {
  return (
    <div>
      <h2 className={`${className} text-4xl lg:text-5xl font-medium mb-2`}>
        {props}
      </h2>
    </div>
  );
};

export default Heading;
