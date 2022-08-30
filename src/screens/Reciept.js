/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useRef, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { MdModeEditOutline } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import ReactToPrint from "react-to-print";
import Receipt_student from "../Componant/Receipt_student";
// import Receipt_teacher from "../Componant/Receipt_teacher";

const Reciept = ({ feesData }) => {
  const printRef = useRef();
  const [print, setPrint] = useState(false);
  console.log(feesData);

  const navigate = useNavigate();

  function handleBack() {}
  return (
    <section className="">
      <div className="flex justify-between mb-4">
        <h2 className="px-8 pt-8 font-bold text-3xl">Receipt</h2>
        <div className="px-8 pt-8">
          <button className="font-bold text-3xl hover:text-gray-500">
            <BiArrowBack />
          </button>
        </div>
      </div>
      <div ref={printRef}>
        <Receipt_student isSalaried={true} />
        {print && <Receipt_student isSalaried={true} />}
      </div>
      <div className="flex justify-center items-center">
        <button className="flex justify-center items-center my-5 bg-indigo-900 py-1 px-3 rounded-md hover:bg-indigo-800">
          <MdModeEditOutline className="text-white text-lg my-1" />
          <NavLink to="/fee/1">
            <span className="text-white text-sm pl-1">Edit</span>
          </NavLink>
        </button>
        <ReactToPrint
          trigger={() => (
            <button className="mx-5 bg-indigo-900 py-1 px-3 rounded-md hover:bg-indigo-800">
              <span className="text-white text-sm">Download/Print</span>
            </button>
          )}
          content={() => printRef.current}
          onBeforeGetContent={() => {
            return new Promise((resolve) => {
              setPrint(true);
              resolve();
            });
          }}
          onAfterPrint={() => setPrint(false)}
        />
      </div>
    </section>
  );
};

export default Reciept;
