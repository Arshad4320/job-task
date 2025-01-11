import { Link } from "react-router-dom";

import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { LiaProductHunt } from "react-icons/lia";
import { AiOutlineHome } from "react-icons/ai";
import { useState } from "react";
import { TbCategory } from "react-icons/tb";
import { RxDashboard } from "react-icons/rx";
const Sidebar = ({ menuState }) => {
  const [product, setProduct] = useState(false);
  const [category, setCategory] = useState(false);

  return (
    <div
      className={`fixed top-0 bottom-0 ${
        menuState ? "w-[20%] duration-300" : "duration-300"
      } hidden lg:block bg-gray-600   text-white `}
    >
      <ul className="flex flex-col h-full">
        <li className={`font-semibold py-3   ${!menuState && "hidden"}`}>
          <div>
            {/* <img className="w-14 h-20 mx-4" src={logo} alt="" /> */}
          </div>
        </li>

        <Link to="/">
          <li className="mt-4 flex justify-between items-center hover:shadow-md cursor-pointer rounded px-2 py-1 mx-2">
            <div className="flex items-center gap-3">
              <AiOutlineHome />
              {menuState && <span>Home</span>}
            </div>
          </li>
        </Link>
        <Link to="/dashboard">
          <li className="mt-4 flex justify-between items-center hover:shadow-md cursor-pointer rounded px-2 py-1 mx-2">
            <div className="flex items-center gap-3">
              <RxDashboard />
              {menuState && <span>Dashboard</span>}
            </div>
          </li>
        </Link>

        {/* category menu start  */}
        <li
          className="mt-2 duration-300 flex justify-between items-center gap-3 hover:shadow-md cursor-pointer rounded px-2 py-1 mx-2"
          onClick={() => setCategory(!category)}
        >
          <div className="flex items-center gap-3">
            <TbCategory />
            {menuState && <span>Category</span>}
          </div>
          {category ? (
            <IoIosArrowDown className={`${!menuState && "hidden"}`} />
          ) : (
            <IoIosArrowForward className={`${!menuState && "hidden"}`} />
          )}
        </li>
        <div
          className={`pl-5 transition duration-300  ${
            category ? "block  duration-300" : "hidden  duration-300"
          }`}
        >
          <Link to="/dashboard/add-category">
            <li className="mt-2 flex justify-between items-center hover:shadow-md cursor-pointer rounded px-2 py-1 mx-2">
              <div className="flex items-center gap-3">
                {category && <span>Add Category</span>}
              </div>
            </li>
          </Link>
          <Link to="/dashboard/list-category">
            <li className="mt-2 flex justify-between items-center hover:shadow-md cursor-pointer rounded px-2 py-1 mx-2">
              <div className="flex items-center gap-3">
                {menuState && <span>Category List</span>}
              </div>
            </li>
          </Link>
        </div>
        {/******categroy menu end********/}
        {/* product menu start  */}
        <li
          className="mt-2 duration-300 flex justify-between items-center gap-3 hover:shadow-md cursor-pointer rounded px-2 py-1 mx-2"
          onClick={() => setProduct(!product)}
        >
          <div className="flex items-center gap-3">
            <LiaProductHunt />
            {menuState && <span>Product</span>}
          </div>
          {product ? (
            <IoIosArrowDown className={`${!menuState && "hidden"}`} />
          ) : (
            <IoIosArrowForward className={`${!menuState && "hidden"}`} />
          )}
        </li>
        <div
          className={`pl-5 transition duration-300  ${
            product ? "block  duration-300" : "hidden  duration-300"
          }`}
        >
          <Link to="/dashboard/add-product">
            <li className="mt-2 flex justify-between items-center hover:shadow-md cursor-pointer rounded px-2 py-1 mx-2">
              <div className="flex items-center gap-3">
                {product && <span>Add Product</span>}
              </div>
            </li>
          </Link>
          <Link to="/dashboard/list-product">
            <li className="mt-2 flex justify-between items-center hover:shadow-md cursor-pointer rounded px-2 py-1 mx-2">
              <div className="flex items-center gap-3">
                {menuState && <span>Product List</span>}
              </div>
            </li>
          </Link>
        </div>
        {/******product menu end********/}
      </ul>
    </div>
  );
};

export default Sidebar;
