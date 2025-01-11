import React, { useState } from "react";
import { ImCross } from "react-icons/im";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { LiaProductHunt } from "react-icons/lia";
import { TbCategory } from "react-icons/tb";
import { AiOutlineHome } from "react-icons/ai";
import { GoPeople } from "react-icons/go";
import { Link } from "react-router-dom";
import { ImBlogger2 } from "react-icons/im";
import { LuYoutube } from "react-icons/lu";
import { RxDashboard } from "react-icons/rx";
import logo from "../../assets/Logo.svg";
const MobileSideber = ({
  isCollups,
  setIsCollups,
  menuState,
  setMenuState,
}) => {
  const [cuisine, setCuisine] = useState(false);
  const [product, setProduct] = useState(false);
  const [category, setCategory] = useState(false);

  const handleClick = () => {
    setIsCollups(!isCollups);
    setMenuState(!menuState);
    setM;
  };
  return (
    <div
      className={`${
        !isCollups ? "left-0" : "left-[-1200px]"
      } bg-white absolute top-0 left-0 block lg:hidden duration-300   rounded-md text-secondary z-[9999] shadow-md bottom-0 px-2 w-80 md:w-96`}
    >
      <ul className="flex flex-col h-full ">
        <li
          className={`font-semibold bg-gray-white  py-2 px-3  flex justify-between items-center`}
        >
          <Link to="/">
            <img className="w-12 h-16" src={logo} alt="" />
          </Link>
          <span onClick={handleClick} className="cursor-pointer text-gray-900">
            <ImCross />
          </span>
        </li>

        <hr className={`mt-2 mb-2 ${!isCollups && "hidden"}`} />
        <Link to="/">
          <li
            className="mt-4 flex justify-between items-center hover:shadow-md cursor-pointer rounded px-2 py-1 mx-2"
            onClick={handleClick}
          >
            <div className="flex gap-3 items-center">
              <AiOutlineHome />
              {!isCollups && <span>Home</span>}
            </div>
          </li>
        </Link>
        <Link to="/dashboard">
          <li
            className="mt-4 flex justify-between items-center hover:shadow-md cursor-pointer rounded px-2 py-1 mx-2"
            onClick={handleClick}
          >
            <div className="flex gap-3 items-center">
              <RxDashboard />
              {!isCollups && <span>Dashboard</span>}
            </div>
          </li>
        </Link>

        <li
          className="mt-2 duration-300 flex justify-between items-center gap-3 hover:shadow-md cursor-pointer rounded px-2 py-1 mx-2"
          onClick={() => setCuisine(!cuisine)}
        >
          <div className="flex items-center gap-3">
            <GoPeople />
            {!isCollups && <span>User</span>}
          </div>
          {cuisine ? <IoIosArrowDown /> : <IoIosArrowForward />}
        </li>
        <div
          className={`pl-5 transition duration-300  ${
            cuisine ? "block  duration-300" : "hidden  duration-300"
          }`}
        >
          <Link to="/dashboard/user/get-users">
            <li
              className="mt-2 flex justify-between items-center hover:shadow-md cursor-pointer rounded px-2 py-1 mx-2"
              onClick={handleClick}
            >
              <div className="flex items-center gap-3">
                {!isCollups && <span>User List</span>}
              </div>
            </li>
          </Link>
        </div>
        {/* category menu start  */}
        <li
          className="mt-2 duration-300 flex justify-between items-center gap-3 hover:shadow-md cursor-pointer rounded px-2 py-1 mx-2"
          onClick={() => setCategory(!category)}
        >
          <div className="flex items-center gap-3">
            <TbCategory />
            {!isCollups && <span>Category</span>}
          </div>
          {category ? <IoIosArrowDown /> : <IoIosArrowForward />}
        </li>
        <div
          className={`pl-5 transition duration-300  ${
            category ? "block  duration-300" : "hidden  duration-300"
          }`}
        >
          <Link to="/dashboard/list-category">
            <li
              onClick={handleClick}
              className="mt-2 flex justify-between items-center hover:shadow-md cursor-pointer rounded px-2 py-1 mx-2"
            >
              <div className="flex items-center gap-3">
                {!isCollups && <span>Category List</span>}
              </div>
            </li>
          </Link>
          <Link onClick={handleClick} to="/dashboard/add-category">
            <li className="mt-2 flex justify-between items-center hover:shadow-md cursor-pointer rounded px-2 py-1 mx-2">
              <div className="flex items-center gap-3">
                {!isCollups && <span>Add Category</span>}
              </div>
            </li>
          </Link>
        </div>
        {/* category menu end  */}
        {/* product menu start  */}
        <li
          className="mt-2 duration-300 flex justify-between items-center gap-3 hover:shadow-md cursor-pointer rounded px-2 py-1 mx-2"
          onClick={() => setProduct(!product)}
        >
          <div className="flex items-center gap-3">
            <LiaProductHunt />
            {!isCollups && <span>Product</span>}
          </div>
          {product ? <IoIosArrowDown /> : <IoIosArrowForward />}
        </li>
        <div
          className={`pl-5 transition duration-300  ${
            product ? "block  duration-300" : "hidden  duration-300"
          }`}
        >
          <Link to="/dashboard/list-product">
            <li
              onClick={handleClick}
              className="mt-2 flex justify-between items-center hover:shadow-md cursor-pointer rounded px-2 py-1 mx-2"
            >
              <div className="flex items-center gap-3">
                {!isCollups && <span>Prodcut List</span>}
              </div>
            </li>
          </Link>
          <Link to="/dashboard/add-product">
            <li
              onClick={handleClick}
              className="mt-2 flex justify-between items-center hover:shadow-md cursor-pointer rounded px-2 py-1 mx-2"
            >
              <div className="flex items-center gap-3">
                {!isCollups && <span>Add Product</span>}
              </div>
            </li>
          </Link>
        </div>
        {/* category menu end  */}
      </ul>
    </div>
  );
};

export default MobileSideber;
