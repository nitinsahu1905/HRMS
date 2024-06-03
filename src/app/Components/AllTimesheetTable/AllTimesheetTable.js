"use client";
import React, { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaSort } from "react-icons/fa";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AllTimesheetTable = ({ timesheetData, handleSorting, statusColor }) => {
    const [viewAction, setViewAction] = useState(false)

  const statusFieldColor = statusColor[0].filteringOptions;

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;
  const endIndex = currentPage * recordsPerPage;
  const startIndex = endIndex - recordsPerPage;
  const npage = Math.ceil(timesheetData.length / recordsPerPage);

  const prevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
    // toast.info("Previous")
  };
  const nextPage = () => {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
    // toast.info("Next")
  };

  const sortNow = (field) =>{
    
    handleSorting(field);
  }

  const toggleActionView = (index) => {
    if (viewAction === index) {
      setViewAction(null);
    } else {
      setViewAction(index);
    }
  };


  return (
    <>
      <ToastContainer />
      <table className="rounded-[10px] bg-white w-full ">
        <thead className="bg-[#bfe9ff] ">
          <tr className=" ">
            <td className="font-medium text-[14px] rounded-tl-[10px] ">
              Sr. No.
            </td>
            <td className="font-medium text-[14px] ">Timesheet No.</td>
            <td className="font-medium text-[14px] flex items-center gap-[5px] ml-0 ">
              Start Date
              <FaSort
              className="cursor-pointer "
                onClick={() => {                    
                    sortNow("startDate")                  
                }}
              />
            </td>
            <td className="font-medium text-[14px] ">End Date</td>
            <td className="font-medium text-[14px]  ">Status</td>
            <td className="font-medium text-[14px] ">Total Hours</td>
            <td className="font-medium text-[14px] ">Reporting Manager</td>
            <td className="font-medium text-[14px] ">Owner</td>
            <td className="font-medium text-[14px] rounded-tr-[10px] w-fit text-center ">
              Action
            </td>
          </tr>
        </thead>
        <tbody>
          {timesheetData.slice(startIndex, endIndex).map((data, index) => {
              let st = data.status;
              let clr = Object.entries(statusFieldColor).find(([key,value])=>(
                key == st
              ));
              let bgClr = clr[1].borderClr;
              let txtClr = clr[1].txtClr;
            //   console.log("Clr: ",clr)
            //   console.log("bg Clr: ",clr[1].borderClr);
            
              return(

              
            <tr key={index} className="rounded-[0px] ">
              <td className="font-medium text-[14px] flex justify-center items-center leading-none ml-0 ">
                {index + 1 + (currentPage - 1) * recordsPerPage}
              </td>
              <td className="font-medium text-[14px] ">{data.timesheetNo}</td>
              <td className="font-medium text-[14px] ">{data.startDate}</td>
              <td className="font-medium text-[14px] ">{data.endDate}</td>
              <td className="font-medium text-[14px] pr-[20px] " >
                <div className="rounded-[5px] text-center py-[5px] " style={{background:bgClr, color:txtClr }}>

                {data.status}
                </div>
              </td>
              <td className="font-medium text-[14px] ">
                {data.totalHours.toFixed(2)}
              </td>
              <td className="font-medium text-[14px] ">
                {data.reportingManager}
              </td>
              <td className="font-medium text-[14px] ">{data.owner}</td>

              <td className="font-medium text-[14px] flex justify-center items-center ml-0 relative ">
                <BsThreeDotsVertical cursor="pointer"
                  onClick={()=>toggleActionView(index+startIndex)}
                />
              </td>

              {viewAction === index + startIndex && (
                    <div className="absolute z-40 right-[50px] bg-white border rounded-[10px] p-2 shadow-lg">
                      <div className="py-1 px-2 cursor-pointer">Edit</div>
                      <div className="py-1 px-2 cursor-pointer">Approve</div>
                      <div className="py-1 px-2 cursor-pointer">Reject</div>
                      <div className="py-1 px-2 cursor-pointer">Delete</div>
                    </div>
                  )}
            </tr>
            )
          })}
        </tbody>
      </table>
      <div className="w-full pr-[0.5%]  py-[15px] ">
        <div className="flex justify-end gap-[20px]">
          <div className="cursor-pointer text-grey-color" onClick={prevPage}>
            <IoIosArrowBack />
          </div>
          <div className="cursor-pointer text-grey-color" onClick={nextPage}>
            <IoIosArrowForward />
          </div>
        </div>
      </div>
    </>
  );
};

export default AllTimesheetTable;
