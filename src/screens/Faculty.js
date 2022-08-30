import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { MdPendingActions } from "react-icons/md";
import { FcMoneyTransfer } from "react-icons/fc";
import Facultytable from "../Componant/facultytable";
import { FaPlus } from "react-icons/fa";

const Faculty = () => {
  return (
    <div className="">
      <div className="mt-5 ">
        <div className="xl:flex xl:justify-between justify-center items-center  p-5 pt-2 xl:pl-12 space-y-5">
          <h1 className=" text-xl xl:text-3xl text-center xl:text-left text-darkblue-500 font-semibold">
            Staff
          </h1>
          <div className="button flex justify-center text-center items-center space-x-4  ">
            <div className="wrapper">
              <div
                className="btn cursor-pointer  h-14 w-14 rounded-full bg-white text-left border  overflow-hidden hover:w-52"
                id="btn"
              >
                <div
                  className="icons  h-14 w-48 flex ml-3 items-center "
                  id="icons"
                >
                  <FaPlus className="text-3xl text-darkblue-500  " />
                  <span className="ml-5 text-lg text-darkblue-500 font-semibold">
                    Add New Member
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-0 xl:flex items-center justify-center  ">
          <div className=" xl:mr-36 pl-5 pr-5 xl:pl-0 xl:pr-0">
            <img
              src="../images/faculty.png"
              alt=""
              className="   xl:ml-10 xl:mt-0 "
            />
          </div>
          <div className="right pt-4 p-5 xl:flex xl:mr-10 xl:mt-10 xl:space-x-10 space-y-10 xl:space-y-0 justify-center items-center text-center">
            <div
              id="faculty-card"
              className=" cursor-pointer h-32 xl:w-52 rounded-lg xl:h-28 bg-class7-50  xl:space-y-3 space-y-2 "
            >
              <div className="flex items-center text-center justify-center space-x-5 pt-3 ">
                <AiOutlineUser className=" text-class7-50 rounded-full text-5xl xl:p-1 bg-white" />
                <p className="text-white text-4xl">578</p>
              </div>
              <h1 className="text-white text-xl ">
                Total <span>Staff</span>
              </h1> 
            </div>
            <div
              id="faculty-card"
              className=" cursor-pointer h-32 xl:w-52 rounded-lg xl:h-28 bg-class10-50  xl:space-y-3 space-y-2 "
            >
              <div className="flex items-center text-center justify-center space-x-5 pt-3 ">
                <MdPendingActions className=" text-class10-50 rounded-full xl:text-5xl text-5xl  xl:p-1 p-1 bg-white" />
                <p className="text-white text-4xl">578</p>
              </div>
              <h1 className="text-white text-xl ">
                Total Pending <span>Staff</span>
              </h1>
            </div>
            <div
              id="faculty-card"
              className=" cursor-pointer h-32 xl:w-52 rounded-lg xl:h-28 bg-class6-50  xl:space-y-3 space-y-2 "
            >
              <div className="flex items-center text-center justify-center space-x-5 pt-3 ">
                <FcMoneyTransfer className="text-class6-50 rounded-full text-5xl  xl:p-1 p-2 bg-white" />
                <p className="text-white text-4xl">578</p>
              </div>
              <h1 className="text-white text-xl ">
                Total Pending <span>Salary</span>
              </h1>
            </div>
          </div>
        </div>
        <Facultytable />
      </div>
    </div>
  );
};

export default Faculty;
