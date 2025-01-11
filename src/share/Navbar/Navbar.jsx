import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo.svg";
const Navbar = () => {
  return (
    <div className="max-w-[1440x] mx-auto hidden lg:block">
      <div className="flex ">
        <div className=" flex justify-around p-6 w-[65%]">
          <div className="flex items-center gap-2">
            <img className="w-10 " src={logo} />
            <p className="text-2xl font-semibold text-secondary">
              {" "}
              Fresh Harvests
            </p>
          </div>
          <div className="flex gap-3 items-center justify-center text-">
            <div>
              <Link className="text-secondary font-semibold text-md p-3" to="/">
                Home
              </Link>
              <Link
                className="text-secondary font-semibold text-md p-3"
                to="/shop"
              >
                Shop
              </Link>
              <Link
                className="text-secondary font-semibold text-md p-3"
                to="/dashboard"
              >
                Dashbord
              </Link>
              <Link
                className="text-secondary font-semibold text-md p-3"
                to="/blog"
              >
                Blog
              </Link>
            </div>
          </div>
        </div>
        <div className="flex w-[35%] items-center justify-center bg-primary">
          <Link className="text-white font-semibold text-md p-3" to={""}>
            Favorites
          </Link>
          <Link className="text-white font-semibold text-md p-3" to={""}>
            Cart
          </Link>
          <Link
            className="text-white font-semibold text-md px-5 border border-white py-2 rounded-md"
            to={""}
          >
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
