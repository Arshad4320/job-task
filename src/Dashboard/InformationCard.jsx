import React, { useState } from "react";
import {
  FaCartPlus,
  FaProductHunt,
  FaSellsy,
  FaUserGroup,
} from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";
import { VscServerProcess } from "react-icons/vsc";

import { MdCancel } from "react-icons/md";

const InformationCard = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1  gap-6">
      <div className="flex justify-between items-center bg-cyan-500 p-8 rounded-md">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-semibold text-white">10</h2>
          <h4 className="text-gray-200 font-medium text-xl">Total User</h4>
        </div>
        <FaUserGroup className="text-white text-4xl" />
      </div>

      <div className="flex justify-between items-center bg-red-500 p-8 rounded-md">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-semibold text-white">20</h2>
          <h4 className="text-gray-200 font-medium text-xl">Total Product</h4>
        </div>
        <FaProductHunt className="text-white text-4xl" />
      </div>
      <div className="flex justify-between items-center bg-pink-500 p-8 rounded-md">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-semibold text-white">10</h2>
          <h4 className="text-gray-200 font-medium text-xl">
            Total Shipped Order{" "}
          </h4>
        </div>
        <TbTruckDelivery className="text-white text-4xl" />
      </div>
      <div className="flex justify-between items-center bg-blue-500 p-8 rounded-md">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-semibold text-white">10</h2>
          <h4 className="text-gray-200 font-medium text-xl">
            Total Proccesing Order
          </h4>
        </div>

        <VscServerProcess className="text-white text-4xl" />
      </div>
      <div className="flex justify-between items-center bg-orange-500 p-8 rounded-md">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-semibold text-white">20</h2>
          <h4 className="text-gray-200 font-medium text-xl">
            Total Delivered Order
          </h4>
        </div>
        <FaSellsy className="text-white text-4xl" />
      </div>
      <div className="flex justify-between items-center bg-violet-500 p-8 rounded-md">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-semibold text-white">30</h2>
          <h4 className="text-gray-200 font-medium text-xl">
            Total Cancel Order
          </h4>
        </div>
        <MdCancel className="text-white text-4xl" />
      </div>
    </div>
  );
};

export default InformationCard;
