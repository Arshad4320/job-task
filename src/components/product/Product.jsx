import React from "react";
import Title from "../title/Title";
import Heading from "../heading/Heading";
import Pragraph from "../pragraph/Pragraph";
import Button from "../button/Button";

const Product = () => {
  const buttonData = [
    { id: 1, Name: "All" },
    { id: 2, Name: "Fruits" },
    { id: 3, Name: "Vegetables" },
    { id: 4, Name: "Salad" },
  ];
  return (
    <div className="py-10">
      <div className="flex justify-center items-center ">
        <div className="text-center">
          <Title props={"Our Products"} />
          <Heading props={"Our Fresh Products"} />
          <Pragraph
            props={
              "We pride ourselves on offering a wide variety of fresh and flavorful fruits, vegetables, and salad ingredients."
            }
          />
        </div>
      </div>
      <div className="flex justify-center gap-2">
        {buttonData?.map((obj) => {
          return <Button key={obj.id} props={obj?.Name} />;
        })}
      </div>
    </div>
  );
};

export default Product;
