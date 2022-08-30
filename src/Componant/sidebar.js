import React from "react";
import { RiDashboardFill } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import { BiRupee } from "react-icons/bi";
import { FaWpforms } from "react-icons/fa";
import { BsReceipt } from "react-icons/bs";
import { AiFillReconciliation } from "react-icons/ai";
import { GiTeacher } from "react-icons/gi";
import { IoMdInformationCircle } from "react-icons/io";
import { BiLogOut } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Sidebar() {
  return (
    <div className="z-30 ">
      <div className="sidebar bg-white h-screen fixed   w-20 xl:w-60">
        <div className="sidebar-top flex justify-center mr-8 pt-1 pb-6 ">
          <img
            src="../images/logo.png"
            alt=""
            className="w-36 cursor-pointer hidden xl:block "
            id="logo"
          />
          <GiHamburgerMenu className="xl:hidden xl:text-xl text-2xl ml-1 " />
        </div>
        <div className="navigation mt-4 ">
          <ul className="">
            <NavLink
              className="nav-link"
              activeclassname="active"
              to="dashboard"
            >
              <li className="flex items-center justify-center  cursor-pointer hover:bg-lightblue-200 hover:text-blue-500  space-x-4  h-1 xl:h-11  rounded-md ml-3 pl-4 w-14 xl:w-48 xl:pl-0 xl:pr-12 xl:mr-0 xl:ml-4  ">
                <RiDashboardFill className="xl:text-xl text-2xl " />
                <h1 className="text-base hidden xl:block  ">Dashboard</h1>
              </li>
            </NavLink>

            <NavLink className="nav-link" activeclassname="active" to="myclass">
              <li className="flex items-center  justify-center cursor-pointer hover:bg-lightblue-200 hover:text-blue-500 space-x-4  h-12 xl:h-11  rounded-md ml-3 pl-4 w-14 xl:w-48 xl:pl-0  xl:pr-16 xl:mr-0 xl:ml-4  ">
                <FaUsers className="xl:text-xl text-2xl " />
                <h1 className="text-base hidden  xl:block  ">My Class</h1>
              </li>
            </NavLink>

            <NavLink className="nav-link" activeclassname="active" to="fee">
              <li className="flex items-center justify-center cursor-pointer hover:bg-lightblue-200 hover:text-blue-500 space-x-4  h-12 xl:h-11  rounded-md ml-3 pl-4 w-14 xl:w-48 xl:pl-0 xl:pr-20  xl:mr-0 xl:ml-4  ">
                <BiRupee className="xl:text-xl text-2xl " />
                <h1 className="text-base hidden  xl:block  ">Fees</h1>
              </li>
            </NavLink>

            <NavLink className="nav-link" activeclassname="active" to="reciept">
              <li className="flex items-center justify-center  cursor-pointer hover:bg-lightblue-200 hover:text-blue-500 space-x-4  h-12 xl:h-11  rounded-md ml-3 pl-4 w-14 xl:w-48 xl:pl-0 xl:pr-16 xl:mr-0 xl:ml-4  ">
                <BsReceipt className="xl:text-xl text-2xl " />
                <h1 className="text-base hidden  xl:block  "> Reciept</h1>
              </li>
            </NavLink>
            <NavLink className="nav-link" activeclassname="active" to="faculty">
              <li className="flex items-center justify-center  cursor-pointer hover:bg-lightblue-200 hover:text-blue-500 space-x-4  h-12 xl:h-11  rounded-md ml-3 pl-4 w-14 xl:w-48 xl:pl-0 xl:pr-20 xl:mr-0 xl:ml-4  ">
                <GiTeacher className="xl:text-xl text-2xl " />
                <h1 className="text-base hidden  xl:block  ">Staff</h1>
              </li>
            </NavLink>

            <NavLink className="nav-link" activeclassname="active" to="report">
              <li className="flex items-center justify-center  cursor-pointer hover:bg-lightblue-200 hover:text-blue-500 space-x-4  h-12 xl:h-11  rounded-md ml-3 pl-4 w-14 xl:w-48 xl:pl-0 xl:pr-16 xl:mr-0 xl:ml-4  ">
                <FaWpforms className="xl:text-xl text-2xl " />
                <h1 className="text-base hidden  xl:block  "> Report</h1>
              </li>
            </NavLink>

            <NavLink
              className="nav-link"
              activeclassname="active"
              to="studentregister"
            >
              <li className="flex items-center justify-center  cursor-pointer hover:bg-lightblue-200 hover:text-blue-500 space-x-4  h-12 xl:h-11  rounded-md ml-3 pl-4 w-14 xl:w-48 xl:pl-0  xl:mr-0 xl:ml-4  ">
                <AiFillReconciliation className="xl:text-xl text-2xl " />
                <h1 className="text-base hidden  xl:block  ">
                  Student Register
                </h1>
              </li>
            </NavLink>

            <NavLink className="nav-link" activeclassname="active" to="help">
              <li className="flex items-center justify-center  cursor-pointer hover:bg-lightblue-200 hover:text-blue-500 space-x-4  h-12 xl:h-11  rounded-md ml-3 pl-4 w-14 xl:w-48 xl:pl-0 xl:pr-20 xl:mr-0 xl:ml-4  ">
                <IoMdInformationCircle className="xl:text-xl text-2xl " />
                <h1 className="text-base hidden  xl:block  "> Help</h1>
              </li>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
}
