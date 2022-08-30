import React from "react";
import { RiFolderUserFill } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Myclass = () => {
  return (
    <div className="">
      <div className="md:p-7 md:pt-3 p-5 ">
        <div className="flex justify-between items-center">
          {/* <h1 className='text-3xl md:pl-8 text-center md:text-left font-semibold text-darkblue-500'>
            My Class
          </h1> */}
          <button
            id="year-btn"
            className=" flex items-center border bg-white p-2 md:p-2 md:py-1 rounded-lg shadow-2xl space-x-1 "
          >
            <select
              name=""
              id=""
              className="cursor-pointer text-darkblue-500 text-xs md:text-lg outline-none"
            >
              <option value="English">English</option>
              <option value="Gujarati">Gujarati</option>
              <option value="Hindi">Hindi</option>
            </select>
          </button>
          <div className="wrapper">
            <NavLink className="nav-link" to="class/ChangeYear">
              <div
                className="btn cursor-pointer  h-12 w-12 rounded-full bg-white text-left border  overflow-hidden hover:w-44"
                id="btn"
              >
                <div
                  className="icons  h-12 w-40 flex ml-3 items-center "
                  id="icons"
                >
                  <FaArrowRight className="text-2xl text-darkblue-500  " />
                  <span className="ml-3 text-lg text-darkblue-500 font-semibold">
                    Change Year
                  </span>
                </div>
              </div>
            </NavLink>
          </div>
        </div>

        <div className="classis bg-white mt-5 h-1/5 rounded-lg ">
          <div className="stdfirst pt-5 pl-6 space-y-5 md:flex justify-between items-center md:space-y-0 md:p-32 md:pt-10 md:pb-0">
            <NavLink className="nav-link" to="class">
              <div className="first bg-[#ffd6d6] h-32 w-52 rounded-lg pt-0 pb-0  cursor-pointer ">
                <div className="flex justify-between items-center h-20">
                  <div className=" pl-10 pt-4 ">
                    <div className="vane bg-f1-200 w-20 h-16 rounded-lg ">
                      <RiFolderUserFill className="text-white text-5xl relative left-4 top-2" />
                    </div>
                  </div>
                  <div className="one">
                    <h1 className=" text-[#ffc0c0]  font-bold text-8xl pt-6 pr-4">
                      1
                    </h1>
                  </div>
                </div>
                <div className="total bg-f1-200 pl-5 mt-4 h-8 rounded-b-md  ">
                  <p className="  text-white pl-4 pt-1">Total Student : 200</p>
                </div>
              </div>
            </NavLink>
            <NavLink className="nav-link" to="class">
              <div className="Secound bg-blue-200 h-32 w-52 rounded-lg pt-0 pb-0 drop-shadow-2xl cursor-pointer ">
                <div className="flex justify-between items-center h-20">
                  <div className=" pl-8 pt-4">
                    <div className="sacound bg-blue-500 w-20 h-16 rounded-lg ">
                      <RiFolderUserFill className="text-white text-5xl relative left-4 top-2" />
                    </div>
                  </div>
                  <div className="one">
                    <h1 className="one text-blue-300 font-bold text-8xl pt-6 pr-4">
                      2
                    </h1>
                  </div>
                </div>
                <div className="total bg-blue-500 pl-5 mt-4 h-8 rounded-b-md  ">
                  <p className="  text-white pl-4 pt-1">Total Student : 200</p>
                </div>
              </div>
            </NavLink>
            <NavLink className="nav-link" to="class">
              <div className="Third bg-[#c1d1d8] h-32 w-52 rounded-lg pt-0 pb-0 drop-shadow-2xl cursor-pointer ">
                <div className="flex justify-between items-center h-20">
                  <div className=" pl-8 pt-4">
                    <div className="thiri  bg-[#2f667e] w-20 h-16 rounded-lg ">
                      <RiFolderUserFill className="text-white text-5xl relative left-4 top-2" />
                    </div>
                  </div>
                  <div className="three">
                    <h1 className=" text-[#8ba9b7] font-bold text-8xl pt-6 pr-4">
                      3
                    </h1>
                  </div>
                </div>
                <div className="thiri bg-[#2f667e] pl-5 mt-4 h-8 rounded-b-md  ">
                  <p className="  text-white pl-4 pt-1">Total Student : 200</p>
                </div>
              </div>
            </NavLink>
          </div>
          <div className="stdfirst pt-5 pl-6 space-y-5  md:space-y-0 md:flex md:justify-between  items-center md:p-32 md:pt-10 md:pb-0">
            <NavLink className="nav-link" to="class">
              <div className="forth bg-orange-100 h-32 w-52 rounded-lg pt-0 pb-0 drop-shadow-2xl shadow-inherit cursor-pointer ">
                <div className="flex justify-between items-center h-20">
                  <div className=" pl-10 pt-4">
                    <div className="for bg-[#9a4947] w-20 h-16 rounded-lg ">
                      <RiFolderUserFill className="text-white text-5xl relative left-4 top-2" />
                    </div>
                  </div>
                  <div className="four">
                    <h1 className="four text-[#dac3b0] font-bold text-8xl pt-6 pr-2">
                      4
                    </h1>
                  </div>
                </div>
                <div className="for bg-[#9a4947] pl-5 mt-4 h-8 rounded-b-md  ">
                  <p className="  text-white pl-4 pt-1">Total Student : 200</p>
                </div>
              </div>
            </NavLink>
            <NavLink className="nav-link" to="class">
              <div className="fifth  bg-[#f4d5ff] h-32 w-52 rounded-lg pt-0 pb-0 drop-shadow-2xl cursor-pointer ">
                <div className="flex justify-between items-center h-20">
                  <div className=" pl-8 pt-4">
                    <div className="five bg-[#e08aff]  w-20 h-16 rounded-lg ">
                      <RiFolderUserFill className="text-white text-5xl relative left-4 top-2" />
                    </div>
                  </div>
                  <div className="">
                    <h1 className="fiv text-[#eebfff] font-bold text-8xl pt-6 pr-4">
                      5
                    </h1>
                  </div>
                </div>
                <div className="five bg-[#e08aff] pl-5 mt-4 h-8 rounded-b-md  ">
                  <p className="  text-white pl-4 pt-1">Total Student : 200</p>
                </div>
              </div>
            </NavLink>
            <NavLink className="nav-link" to="class">
              <div className="sixth bg-[#fbc8bd] h-32 w-52 rounded-lg pt-0 pb-0 drop-shadow-2xl cursor-pointer ">
                <div className="flex justify-between items-center h-20">
                  <div className=" pl-8 pt-4">
                    <div className="six bg-[#f24822] w-20 h-16 rounded-lg ">
                      <RiFolderUserFill className="text-white text-5xl relative left-4 top-2" />
                    </div>
                  </div>
                  <div className="">
                    <h1 className=" sixe text-[#f9ab99] font-bold text-8xl pt-6 pr-4">
                      6
                    </h1>
                  </div>
                </div>
                <div className="six bg-[#f24822] pl-5 mt-4 h-8 rounded-b-md  ">
                  <p className="  text-white pl-4 pt-1">Total Student : 200</p>
                </div>
              </div>
            </NavLink>
          </div>
          <div className="std1 pt-5 pl-6 space-y-5 md:space-y-0 md:flex md:justify-between  items-center md:p-32 md:pt-10 md:pb-10">
            <NavLink className="nav-link" to="class">
              <div className="seventh bg-teal-100 h-32 w-52 rounded-lg pt-0 pb-0 drop-shadow-2xl shadow-inherit cursor-pointer ">
                <div className="flex justify-between items-center h-20">
                  <div className=" pl-10 pt-4">
                    <div className="seven bg-teal-500 w-20 h-16 rounded-lg ">
                      <RiFolderUserFill className="text-white text-5xl relative left-4 top-2" />
                    </div>
                  </div>
                  <div className="">
                    <h1 className=" text-teal-200 text- font-bold text-8xl pt-6 pr-2">
                      7
                    </h1>
                  </div>
                </div>
                <div className="total bg-teal-500 pl-5 mt-4 h-8 rounded-b-md  ">
                  <p className="  text-white pl-4 pt-1">Total Student : 200</p>
                </div>
              </div>
            </NavLink>
            <NavLink className="nav-link" to="class">
              <div className="eighth  bg-[#d8bbbc] h-32 w-52 rounded-lg pt-0 pb-0 drop-shadow-2xl cursor-pointer ">
                <div className="flex justify-between items-center h-20">
                  <div className=" pl-8 pt-4">
                    <div className="eight bg-[#7e1b1f] w-20 h-16 rounded-lg ">
                      <RiFolderUserFill className="text-white text-5xl relative left-4 top-2" />
                    </div>
                  </div>
                  <div className="">
                    <h1 className="eighte text-[#c39698] font-bold text-8xl pt-6 pr-4">
                      8
                    </h1>
                  </div>
                </div>
                <div className="eight bg-[#7e1b1f] pl-5 mt-4 h-8 rounded-b-md  ">
                  <p className="  text-white pl-4 pt-1">Total Student : 200</p>
                </div>
              </div>
            </NavLink>
            <NavLink className="nav-link" to="class">
              <div className="  bg-yellow-100  h-32 w-52 rounded-lg pt-0 pb-0 drop-shadow-2xl cursor-pointer ">
                <div className="flex justify-between items-center h-20">
                  <div className=" pl-8 pt-4">
                    <div className="bg-yellow-600 w-20 h-16 rounded-lg ">
                      <RiFolderUserFill className="text-white text-5xl relative left-4 top-2" />
                    </div>
                  </div>
                  <div className="">
                    <h1 className="text-yellow-300 font-bold text-8xl pt-6 pr-4">
                      9
                    </h1>
                  </div>
                </div>
                <div className="bg-yellow-600 pl-5 mt-4 h-8 rounded-b-md  ">
                  <p className="  text-white pl-4 pt-1">Total Student : 200</p>
                </div>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myclass;
