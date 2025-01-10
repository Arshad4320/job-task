import React from "react";
import bg from "../../assets/bg.jpg";
import vegitable from "../../assets/vegitable.jpg";
import ractengle from "../../assets/Rectangle.jpg";
import Button from "../button/Button";
import Title from "../title/Title";
const Header = () => {
  return (
    <div className="flex-col lg:flex-row  flex  lg:justify-between ">
      <div className="py-20 px-12 lg:p-32">
        <Title props={"Welcome to Fresh Harvest"} />
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium my-4 text-secondary">
          Fresh Fruits and Vegetables
        </h1>
        <p className="text-secondary text-sm mb-4">
          At Fresh Harvests, we are passionate about providing you with the
          freshest and most flavorful fruits and vegetables
        </p>
        <Button props={"Shop Now"} />
      </div>
      <div className="bg-primary w-[695px]  h-[758px]">
        <img className="" src={bg} alt="" />
      </div>
    </div>
  );
};

export default Header;
