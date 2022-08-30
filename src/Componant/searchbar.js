import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import { VscKey } from "react-icons/vsc";
import { NavLink } from "react-router-dom";

export default function Searchbar() {
  const [toggle, SetToggle] = useState(false);

  function handleToggle() {
    SetToggle(!toggle);
  }

  return (
    <div className="w-full fixed z-20 bg-white h-[70px] shadow-xl flex flex-row items-center justify-between">
      <div className="left pl-5 w-1/4">
        {/* <form action="">
          <label className="relative block">
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <AiOutlineSearch className="h-5 w-5 fill-slate-300" />
            </span>
            <input
              className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-full py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-[#020D46] focus:ring-[#020D46] focus:ring-1 sm:text-sm"
              placeholder="Search ..."
              type="text"
              name="search"
            />
          </label>
        </form> */}
      </div>
      <div className="right">
        <div
          className="top grid grid-col-2 items-center cursor-pointer justify-right space-x-5 pr-5 static"
          onClick={handleToggle}
        >
          <form
            action=""
            className="flex items-center space-x-2 cursor-pointer"
            id="profile"
          >
            <div className="bg-gray-700 p-2 rounded-full">
              <FaUserAlt className="text-xl text-white" />
            </div>
            <div className="text-left">
              <p className="text-base">Nasir Khan</p>
              <p className="text-xs text-gray-500">nasirkhan@gmail.com</p>
            </div>
            <BsThreeDotsVertical className="cursor-pointer text-gray-500" />
          </form>
        </div>
        {toggle && (
          <div
            className={` bottom absolute top-20 bg-white drop-shadow-xl rounded`}
            id="profileTable"
          >
            <div className="">
              <div className="grid grid-rows-1">
                <NavLink to="/Componant/Updateprofile">
                  <button className="bg-white hover:bg-slate-200 text-gray-800 py-2 px-6 inline-flex items-center">
                    <FaRegUserCircle className="text-[#5D5CB4] mr-1" />
                    <span>Update Profile</span>
                  </button>
                </NavLink>
                <NavLink to="/Componant/Changepassword">
                  <button className="bg-white hover:bg-slate-200 text-gray-800 py-2 px-6 inline-flex items-center">
                    <VscKey className="text-[#5D5CB4] mr-1" />
                    <span>Change Passoword</span>
                  </button>
                </NavLink>
                <button className="bg-white hover:bg-slate-200 text-gray-800 py-2 px-6 inline-flex items-center ">
                  <MdOutlinePersonAddAlt className="text-[#5D5CB4] mr-1" />
                  <span>Add Admin</span>
                </button>
                <hr></hr>
                <button className="bg-white hover:bg-slate-200 text-gray-800 py-2 px-6 inline-flex items-center mb-2">
                  <RiLogoutCircleRLine className="text-[#5D5CB4] mr-1" />
                  <span>Logout</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
