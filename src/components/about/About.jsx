import React from "react";
import img from "../../assets/about.png";
import Title from "../title/Title";
import Heading from "../heading/Heading";
import Pragraph from "../pragraph/Pragraph";
import Button from "../button/Button";
const About = () => {
  return (
    // <div className="grid grid-cols-2 py-6 md:py-8 lg:py-10 px-4 md:px-6 lg:px-28">
    <div className="grid grid-cols-1 lg:grid-cols-2 mb-10  px-4 md:px-6 lg:px-28 ">
      <div className="relative">
        <div className="w-[400px] h-[400px] absolute rounded-full -z-10 bg-primary top-[33%] left-[14%]"></div>
        <img className="w-[90%] " src={img} alt="" />
      </div>

      <div className="flex items-center ">
        <div className="">
          <Title props={"About us"} />
          <Heading props={"About Fresh Harvest"} />
          <Pragraph
            className={""}
            props={
              " Welcome to Fresh Harvest, your premier destination for high-quality and fresh produce. We are passionate about providing you with the finest fruits, vegetables, and salad ingredients to nourish your body and delight your taste buds. With a commitment to excellence, sustainability, and customer satisfaction, Fresh Harvest is here to revolutionize your grocery shopping experience."
            }
          />
          <Button className={"w-1/3"} props={"Read More"} />
        </div>
      </div>
    </div>
  );
};

export default About;
