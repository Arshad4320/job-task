import React from "react";
import Title from "../title/Title";
import Heading from "../heading/Heading";
import img from "../../assets/fruite.png";
import bg from "../../assets/bg.jfif";
const SeasonalFruit = () => {
  return (
    <div
      className="h-[50%] bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="py-6 md:py-8 lg:py-10 px-4 md:px-6 lg:px-28 flex ">
        <div className="w-[60%]">
          <Title props={"Special Offer"} />
          <Heading className={"text-8xl"} props={"Seasonal Fruit Bundle"} />
          <h3 className="text-4xl text-secondary font-medium">
            Discount up to <span className="text-[#FF6A1A]">80% OFF</span>
          </h3>
          <div className="flex gap-2 mb-3">
            <div className="text-secondary my-2 shadow-md text-xl px-3 py-3 rounded-md font-medium text-center">
              <span>03</span> <br />
              <span className="text-sm">Days</span>
            </div>
            <div className="text-secondary my-2 shadow-md text-xl px-3 py-3 rounded-md font-medium text-center">
              <span>18</span> <br />
              <span className="text-sm">Hours</span>
            </div>
            <div className="text-secondary my-2 shadow-md text-xl px-3 py-3 rounded-md font-medium text-center">
              <span>54</span> <br />
              <span className="text-sm">Min</span>
            </div>
            <div className="text-secondary my-2 shadow-md text-xl px-3 py-3 rounded-md font-medium text-center">
              <span>21</span> <br />
              <span className="text-sm">Second</span>
            </div>
          </div>
          <span className="text-lg p-2 font-semibold bg-primary text-white rounded-3xl ">
            CODE : FRUIT28
          </span>
        </div>
        <div className="w-[40%]">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SeasonalFruit;
