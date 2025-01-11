import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { SiWhatsapp } from "react-icons/si";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { GrInstagram } from "react-icons/gr";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-slate-900 py-6 ">
      <div className="md:max-w-7xl lg:mx-auto mx-5 md:mx-8  mt-14">
        <div className=" grid  md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
          <div className="">
            <div className="flex flex-col">
              <p className=" font-semibold text-xl transition duration-500 text-white mb-4">
                Home
              </p>
              <Link
                to="/"
                className="text-amber-200 font-medium transition duration-500 hover:text-white mb-2"
              >
                About Us
              </Link>
              <Link
                to="/shop"
                className="text-amber-200 font-medium transition duration-500 hover:text-white mb-2"
              >
                Blog
              </Link>
              <Link
                to="/blog"
                className="text-amber-200 font-medium transition duration-500 hover:text-white mb-2"
              >
                Degital Blog
              </Link>
              <Link
                to="/about"
                className="text-amber-200 font-medium transition duration-500 hover:text-white mb-2"
              >
                About Us
              </Link>
              <Link
                to="/return-policy"
                className="text-amber-200 font-medium transition duration-500 hover:text-white mb-2"
              >
                Returns and Refunds Policy
              </Link>
            </div>
          </div>
          <div className="">
            <div className="flex flex-col">
              <p className=" font-semibold text-xl transition duration-500 text-white mb-4">
                Home
              </p>
              <Link
                to="/"
                className="text-amber-200 font-medium transition duration-500 hover:text-white mb-2"
              >
                About Us
              </Link>
              <Link
                to="/shop"
                className="text-amber-200 font-medium transition duration-500 hover:text-white mb-2"
              >
                Blog
              </Link>
              <Link
                to="/blog"
                className="text-amber-200 font-medium transition duration-500 hover:text-white mb-2"
              >
                Degital Blog
              </Link>
              <Link
                to="/about"
                className="text-amber-200 font-medium transition duration-500 hover:text-white mb-2"
              >
                About Us
              </Link>
              <Link
                to="/return-policy"
                className="text-amber-200 font-medium transition duration-500 hover:text-white mb-2"
              >
                Returns and Refunds Policy
              </Link>
            </div>
          </div>
          <div className="">
            <div className="flex flex-col">
              <p className=" font-semibold text-xl transition duration-500 text-white mb-4">
                Home
              </p>
              <Link
                to="/"
                className="text-amber-200 font-medium transition duration-500 hover:text-white mb-2"
              >
                About Us
              </Link>
              <Link
                to="/shop"
                className="text-amber-200 font-medium transition duration-500 hover:text-white mb-2"
              >
                Blog
              </Link>
              <Link
                to="/blog"
                className="text-amber-200 font-medium transition duration-500 hover:text-white mb-2"
              >
                Degital Blog
              </Link>
              <Link
                to="/about"
                className="text-amber-200 font-medium transition duration-500 hover:text-white mb-2"
              >
                About Us
              </Link>
              <Link
                to="/return-policy"
                className="text-amber-200 font-medium transition duration-500 hover:text-white mb-2"
              >
                Returns and Refunds Policy
              </Link>
            </div>
          </div>
          <div className="">
            <div className="flex flex-col">
              <p className=" font-semibold text-xl transition duration-500 text-white mb-4">
                Home
              </p>
              <Link
                to="/"
                className="text-amber-200 font-medium transition duration-500 hover:text-white mb-2"
              >
                About Us
              </Link>
              <Link
                to="/shop"
                className="text-amber-200 font-medium transition duration-500 hover:text-white mb-2"
              >
                Blog
              </Link>
              <Link
                to="/blog"
                className="text-amber-200 font-medium transition duration-500 hover:text-white mb-2"
              >
                Degital Blog
              </Link>
              <Link
                to="/about"
                className="text-amber-200 font-medium transition duration-500 hover:text-white mb-2"
              >
                About Us
              </Link>
              <Link
                to="/return-policy"
                className="text-amber-200 font-medium transition duration-500 hover:text-white mb-2"
              >
                Returns and Refunds Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
