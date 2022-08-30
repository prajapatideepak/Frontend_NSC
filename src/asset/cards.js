import React from "react";
import { HiPlus } from "react-icons/hi";
import { GiTeacher } from "react-icons/gi";
import { FaUsers } from "react-icons/fa";

export default function Cards() {
  return (
    <div className="w-2/3">
      <div className="right h-52 md:flex justify-center text-center space-y-10 md:space-y-0 md:space-x-10 pr-5 ">
        <div
          id="Student"
          className="Faculty bg-[#fdbe60] text-white w-52 md:w-80  md:h-48 rounded-xl shadow-2xl cursor-pointer space-y-2 ml-10 md:ml-0 "
        >
          <div className="flex items-center justify-center space-x-16 pt-3">
            <div className="left bg-white w-12 h-10 md:w-20 md:h-14 justify-center  rounded-md  ">
              <GiTeacher className=" text-3xl md:text-5xl text-[#fdbe60] md:mx-3 mt-1 mx-2 " />
            </div>
            <div className="right">
              <h1 className=" md:text-2xl ">Faculties</h1>
              <p className=" text-2xl md:text-4xl font-bold ">500</p>
            </div>
          </div>
          <div className="flex items-center justify-between md:pl-6 md:pr-6 md:pt-3 pb-3 ">
            <div>
              <p className=" text-xl md:text-2xl font-bold ">500</p>
              <h1 className=" text-xs font-medium ">Total Pending Faculty </h1>
            </div>
            <div className="bg-white h-12 md:h-16">.</div>
            <div>
              <p className=" text-xl md:text-2xl font-bold ">2500</p>
              <h1 className=" text-xs font-medium ">Total Pending Salary</h1>
            </div>
          </div>
        </div>
        <div
          id="faculty"
          className="Faculty bg-faculty-900 text-white w-52 md:w-80  md:h-48 rounded-xl truncate shadow-2xl  cursor-pointer space-y-2 ml-9 md:ml-0 "
        >
          <div className="flex items-center justify-center space-x-16 pt-3">
            <div className="left bg-white w-12 h-10 md:w-20 md:h-14 justify-center  rounded-md  ">
              <FaUsers className=" text-3xl md:text-5xl text-faculty-900 md:mx-3 mt-1 mx-2 " />
            </div>
            <div className="right">
              <h1 className=" md:text-2xl ">Students</h1>
              <p className=" text-2xl md:text-4xl font-bold ">500</p>
            </div>
          </div>
          <div className="flex items-center justify-between md:pl-6 md:pr-6 md:pt-3 pb-3 ">
            <div>
              <p className=" text-xl md:text-2xl font-bold ">500</p>
              <h1 className=" text-xs font-medium ">Total Pending Student </h1>
            </div>
            <div className="bg-white h-12 md:h-16">.</div>
            <div>
              <p className=" text-xl md:text-2xl font-bold ">2500</p>
              <h1 className=" text-xs font-medium ">Total Pending Fees</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
