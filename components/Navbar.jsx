import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import Collections from "../components/collections";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="relative flex">
      <div
        className={` ${
          toggleMenu ? "block" : "hidden"
        } flex h-screen w-[400px] bg-[#620C8B]`}
      >
        <ul className="flex flex-col items-center text-white mx-[70px] my-[110px] top-6 text-[18px]">
          <li className="cursor-pointer py-3 hover:text-[#82E109]">Home</li>
          <li className="cursor-pointer py-3 hover:text-[#82E109]">About</li>
          <li className="cursor-pointer py-3 hover:text-[#82E109]">Services</li>
        </ul>
      </div>
      <div>
        <div className={` ${toggleMenu === false ? 'w-screen' : 'w-[95%]'} flex grow justify-between items-center px-10 w-screen h-[109px] top-0 bg-[#82E109] `}>
          <div className="flex felx-row my-5">
            <p
              className="my-5 text-white text-3xl px-2 hover:text-[#620C8B] cursor-pointer"
              onClick={() => setToggleMenu(!toggleMenu)}
            >
              <HiMenuAlt3 />
            </p>
            <h1 className="text-white text-[44px] uppercase font-semibold">
              Namuna Store
            </h1>
          </div>
          <div className="flex flex-row ">
            <h2 className="cursor-pointer mx-3 text-white hover:text-[#620C8B]">
              LOGIN
            </h2>
            <h2 className="cursor-pointer text-white hover:text-[#620C8B]">
              SIGNUP
            </h2>
          </div>
        </div>
        <Collections />
      </div>
    </div>
  );
}

export default Navbar;
