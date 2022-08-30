import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdInformationCircle } from "react-icons/io";
import { NavLink } from "react-router-dom";

export default function Fees() {
  const [data, setdata] = React.useState([]);

  function loadData() {
    setdata([
      ...data,
      {
        id: 1,
        name: "Prajapati Deepak",
        fees: 1200,
        photo: "images/deepak.png",
        mobile: "7359150166",
        class: "10th",
      },
    ]);
  }
  return (
    <div className="bg-student-100  min-h-screen py-10 px-14">
      <div className="">
        <h1 className="text-3xl  font-bold text-darkblue-500">Fees Pay</h1>

        <div className="px-2 py-2 flex mt-7 items-center justify-center">
          <input
            type="text"
            className="w-2/3 shadow-xl px-3 py-2 rounded-l-lg outline-none    "
            placeholder="Search Student"
          ></input>
          <button
            onClick={loadData}
            className="bg-darkblue-500 px-2 py-1 rounded-r-lg shadow-2xl transition duration-200 hover:text-gray-300"
          >
            <AiOutlineSearch className="text-3xl font-bold hover:scale-125  text-white transition duration-400" />
          </button>
        </div>
      </div>

      <div className="p-4 mt-8 ">
        {data.length > 0 ? (
          <div className="p-4 bg-whrounded w-2/3 ">
            <h1 className="font-bold text-2xl text-darkblue-500">
              {" "}
              Student List
            </h1>
            {data.map((m) => {
              return (
                <div className="bg-white rounded-2xl   px-4 pt-4 m-4  shadow-2xl bg-100">
                  <div className="flex justify-between ">
                    <div className="font-mono space-y-2">
                      <h1 className="font-bold text-xl">Name : {m.name}</h1>
                      <h2>Student ID : {m.id}</h2>
                      <p>Mobile : {m.mobile}</p>
                      <h3>class : {m.class}</h3>
                    </div>

                    <div className=" rounded-full">
                      <img
                        src={m.photo}
                        className="w-20 shadow-2xl h-20 rounded-full"
                        alt={m.name}
                      ></img>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <NavLink to={`/fee/${m.id} `}>
                      <button className=" bg-darkblue-500  rounded-lg m-3 hover:bg-blue-900  duration-200 transition text-white px-7 font-bold   py-1">
                        Pay
                      </button>
                    </NavLink>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="bg-red-200 font-bold items-center p-2 rounded mx-3 flex space-x-2">
            <IoMdInformationCircle className="text-xl text-red-600" />

            <h1 className="text-red-800">Student Not available </h1>
          </div>
        )}
      </div>
    </div>
  );
}
