"use client";
import { doc, deleteDoc, getDoc } from "firebase/firestore";
import { firestoreDB } from "../utils/firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const TrackerTable = ({ employeeData, headings }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = employeeData.slice(firstIndex,lastIndex);
  const npage = Math.ceil(employeeData.length/recordsPerPage);
  // const numbers = [...Array(npage+1).keys()].slice(1);

  const prevPage = () =>{
    if(currentPage !== 1){
      setCurrentPage(currentPage -1)
    }
  }

  const nextPage = () =>{
    if(currentPage !== npage){
      setCurrentPage(currentPage + 1)
    }
  }

  const changeCurrentPage = (n) =>{
    setCurrentPage(n)
  }

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5; 

    let startPage = currentPage - 2;
    let endPage = currentPage + 2;

    if (startPage < 1) {
      endPage += Math.abs(startPage) + 1;
      startPage = 1;
    }

    if (endPage > npage) {
      endPage = npage;
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <li
          key={i}
          className={`${currentPage === i ? "text-white bg-primary-blue flex items-center justify-center rounded-full h-[30px] w-[30px]" : "text-grey-color text-[14px]"}`}
        >
          <div className="cursor-pointer" onClick={() => changeCurrentPage(i)}>
            {i}
          </div>
        </li>
      );
    }

    return pageNumbers;
  };



  if (employeeData.length === 0) {
    return <div>Loading...</div>;
  }

  return (


    <div className="w-full flex flex-col gap-[20px] items-center  ">
      <table className="w-full border-collapse">
        <tbody>
          {/* heading section */}
          <tr className="text-center p-10 bg-[#fff] text-[#464F60] border-b-[1px] border-[#6D614A] ">
            {headings.map((th, index) => (
              <th key={index + 1} className="font-semibold" >{th}</th>
            ))}
          </tr>

          {/* Toast container for displaying validation errors */}
          <ToastContainer />

          {/* fields section */}
          {records.map((data,index) => (
            <tr key={index} className="text-center p-10">
              <td>{data.name}</td>
              <td>{data.designation}</td>
              <td>{data.department}</td>
              <td>{data.status}</td>
              {/* <td><div className=" w-[100px] px-[20px] py-[5px] rounded-[10px] ">{data.status}</div></td> */}
              
            </tr>
          ))}
        </tbody>
      </table>
      <div className="w-full pr-[20px] mb-[10px] ">
        <ul className="flex flex-row gap-[15px] items-center justify-end ">
          <li>
            <div className="cursor-pointer text-grey-color" onClick={prevPage}>
              <IoIosArrowBack/>
            </div>
          </li>

          {renderPageNumbers()}

          <li>
            <div className="cursor-pointer text-grey-color" onClick={nextPage}>
              <IoIosArrowForward/>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TrackerTable;
