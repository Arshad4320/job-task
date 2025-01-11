import { Outlet } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./Sidebar";
import MobileSideber from "./MobileSidber";
import DashbordNavbar from "./../../share/Navbar/DashbordNavbar";

const DashbordLayout = () => {
  const [menuState, setMenuState] = useState(true);
  const [isCollups, setIsCollups] = useState(true);

  const handleClick = () => {
    setIsCollups(!isCollups);
    setMenuState(!menuState);
  };
  return (
    <div>
      <div className="flex">
        <Sidebar menuState={menuState} />

        <MobileSideber
          isCollups={isCollups}
          setIsCollups={setIsCollups}
          menuState={menuState}
          setMenuState={setMenuState}
        />

        <div
          className={` m-2 min-h-screen w-full duration-300  ${
            !isCollups ? " pl-[5%] hidden lg:block" : "lg:pl-[20%]"
          }`}
        >
          <DashbordNavbar handleClick={handleClick} menuState={menuState} />
          <Outlet />
        </div>
      </div>
      <h1
        className={`text-center py-2 text-secondary ${
          !isCollups ? "hidden" : null
        }`}
      >
        © 2023 almadhbd team. All Rights Reserved
      </h1>
    </div>
  );
};

export default DashbordLayout;
