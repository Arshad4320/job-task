import React from "react";
import Title from "../title/Title";
import Heading from "../heading/Heading";
import Pragraph from "../pragraph/Pragraph";
import img from "../../assets/testomonial.jpg";
const CustomerReview = () => {
  return (
    <div className="py-6 md:py-8 lg:py-10 px-4 md:px-6 lg:px-28  ">
      <div className="text-center">
        <Title props={"Testimonial"} />
        <Heading props={"What Our Customers Say"} />
        <Pragraph
          props={
            "Don't just take our word for it—here's what some of our customers have to say about their experience with Fresh Harvest:"
          }
        />
      </div>
      <div className="flex flex-col lg:flex-row mt-16 ">
        <div className=" flex justify-center lg:w-[40%]">
          <img src={img} className=" w-[287px] h-[396px] rounded-full" alt="" />
        </div>
        <div className="flex items-center bg-gray-100 px-10 lg:w-[60%]">
          <Pragraph
            props={
              "I absolutely love Fresh Harvest! The quality of their produce is outstanding. It's always fresh, flavorful, and delicious. The convenience of ordering online and having it delivered to my doorstep saves me so much time. Fresh Harvest has become my go-to for all my fruit and vegetable needs.I absolutely love Fresh Harvest! The quality of their produce is outstanding. It's always fresh, flavorful, and delicious. The convenience of ordering online and having it delivered to my doorstep saves me so much time. Fresh Harvest has become my go-to for all my fruit and vegetable needs."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
