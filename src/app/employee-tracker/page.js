"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import gesture1 from "../../../public/sun-1.png";
import { IoIosClose } from "react-icons/io";
import { IoSearch, IoFilter } from "react-icons/io5";
import { EmployeeTrackerData } from "../Constants/EmployeeTrackerData";
import TrackerTable from "../Components/TrackerTable";
import EmployeeTrackerDropdowns from "../Components/EmployeeTrackerDropdowns";
import { FiAlertTriangle } from "react-icons/fi";
import { AiFillHome, AiOutlineFieldTime } from "react-icons/ai";

const EmployeeTracker = () => {
  const [time, setTime] = useState(new Date());
  const [appearSearch, setAppearSearch] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState(EmployeeTrackerData);

  const [viewFilters, setViewFilters] = useState(false);

  console.log("SearchText", searchText);
  console.log("Filtered-Data", filteredData);

  const getDate = () =>{
    const date = new Date();
    const options = { month: "long", day: "numeric", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = time.toLocaleTimeString('en-US', { hour12: false });


  // Function for Filter data on basis of Status on Cards before Table
  const handlePresenceFilter = (stat) => {
    setFilteredData(EmployeeTrackerData);
    const filterbyStatus = EmployeeTrackerData.filter((data) => {
      if (data.status.toLowerCase() === stat.toLowerCase()) {
        return data;
      }
    });
    setFilteredData(filterbyStatus);
  };

  // Search Function
  const handleSearch = (stext) => {
    setFilteredData(EmployeeTrackerData);
    if (!filteredData) {
      setFilteredData(EmployeeTrackerData);
      return;
    }
    const filterByName = EmployeeTrackerData.filter((data) => {
      return data.name.toLowerCase().includes(stext.toLowerCase());
    });

    setFilteredData(filterByName);
  };

  // useEffect(()=>{
  //     handleSearch(searchText)
  // },[searchText])

  // useEffect(()=>{
  //     const filterByName = filteredData.filter((data)=>{
  //         return data.name.toString().toLowerCase().includes(searchText.toString().toLowerCase())
  //     })
  //     if(searchText.length<1){
  //         setFilteredData(filteredData)
  //     }else{

  //         setFilteredData(filterByName)
  //     }
  // },[searchText])

  const defaultTableHeading = ["Name", "Designation", "Department", "Status"];
  return (
    <div className="bg-sky-color w-full h-auto flex flex-col gap-5 p-[20px] rounded-b-[10px] ">
      {/* Page Heading */}
      <div>
        <h1 className="text-dark-blue text-[24px] font-bold">
          Employee Tracker
        </h1>
      </div>
      {/* Wishes & Time Box */}
      <div className="flex flex-row justify-between ">
        {/* Wishes */}
      <div className="flex flex-row gap-[20px]  ">
        <div className="w-[76px] h-[74px] ">
          <Image src={gesture1} alt="Good Morning" />
          {/* <Image src={gesture1} alt="Good Morning" /> */}
        </div>
        <div className="flex flex-col gap-[5px]  ">
          <div className="text-dark-blue text-[24px] font-medium ">Hello Lakshya!</div>
          <div className="text-grey-color  ">
            Let&apos;s brighten some smiles today
          </div>
          {/* <div className="text-grey-color  ">Embracing the dark with radiant smiles</div> */}
        </div>
      </div> 

       {/* Time Box  */}
       <div className="w-[280px] h-full p-[15px] flex flex-row justify-between rounded-[15px]  bg-white">
        <div className="flex flex-col gap-[5px]  ">
          <div className="text-grey-color text-[14px] ">
            Current Time
          </div>
          <div className="text-dark-blue font-medium ">
            {getDate()} &nbsp; {formattedTime}
          </div>
        </div>
        <div className="flex items-center justify-center ">
          <AiOutlineFieldTime className="w-[35px] h-[35px] " />
        </div>
       </div>
        
      </div>  


      {/* Today's Update section of Attendence */}
      <div className="flex flex-col gap-[10px] ">
        <div className="text-dark-blue text-[20px] font-medium ">
          Today&apos;s Update
        </div>
        

        {/* Status Bar */}
        <div className="flex flex-row gap-[20px] mb-[20px] mt-[5px] ">
          {/* Punch In */}
          <div
            onClick={() => handlePresenceFilter("Punch In")}
            className="flex flex-col gap-[5px] items-center justify-between w-[190px] bg-white rounded-[10px] px-[15px] py-[10px] shadow-lg cursor-pointer "
          >
            <div className="w-[70px] h-[50px] bg-[#CDF6CD] flex justify-center items-center rounded-[10px] ">
              <Image 
              src='./on-time.png'
              width={30}
              height={30}
              className="w-[30px] h-[30px] "
              />
            </div>
            <div className="text-[#008000] text-[18px] mt-[10px]  ">Punch In</div>
            <div className="text-grey-color text-[32px] leading-none ">35</div>
          </div>

          {/* Not Punch */}
          <div
            onClick={() => handlePresenceFilter("not punch")}
            className="flex flex-col gap-[5px] items-center justify-between w-[190px] bg-white rounded-[10px] px-[15px] py-[10px] shadow-lg cursor-pointer "
          >
            <div className="w-[70px] h-[50px] bg-[#FCABAB] flex justify-center items-center rounded-[10px] ">
              <FiAlertTriangle 
              className="w-[30px] h-[30px] text-[#D40202] "
              />
            </div>
            <div className="text-[#A90303] text-[18px] mt-[10px]  ">Not Punch</div>
            <div className="text-grey-color text-[32px] leading-none  ">08</div>
          </div>
          {/* WFH */}
          <div
            onClick={() => handlePresenceFilter("wfh")}
            className="flex flex-col gap-[5px] w-[190px] items-center justify-between bg-white rounded-[10px] px-[15px] py-[10px]  shadow-lg cursor-pointer "
          >
            <div className="w-[70px] h-[50px] bg-[#DAF2FF] flex justify-center items-center rounded-[10px] ">
              <AiFillHome
              className="w-[30px] h-[30px] text-[#0683C6] "
              />
            </div>
            <div className="text-[#0683C6] text-[18px] mt-[10px]  ">Work From Home</div>
            <div className="text-grey-color text-[32px] leading-none ">02</div>
          </div>
          {/* Punched Out */}
          <div
            onClick={() => handlePresenceFilter("punch out")}
            className="flex flex-col gap-[5px] w-[190px] items-center justify-between bg-white rounded-[10px] px-[15px] py-[10px]  shadow-lg cursor-pointer "
          >
            <div className="w-[70px] h-[50px] bg-[#FFDEE2] flex justify-center items-center rounded-[10px] ">
              <Image 
              src='./clock.png'
              width={30}
              height={30}
              className="w-[30px] h-[30px] "
              />
            </div>
            <div className="text-[#02D495] text-[18px] mt-[10px]  ">Punch Out</div>
            <div className="text-grey-color text-[32px] leading-none ">02</div>
          </div>
        </div>

      </div>

      {/* Employee List Section */}
      <div className="flex flex-col gap-0 rounded-[10px]  ">
        <div className="relative flex flex-row justify-between items-center p-[15px] bg-[#DAF2FF] w-full rounded-t-[10px] ">
          <div className="flex flex-row gap-[20px]  ">
            <div className="text-primary-blue font-medium ">Employee List</div>
            {/* On Conditional Filtering */}
            <div className="flex flex-row gap-[10px] text-primary-blue text-[14px] ">
              {/* <div className="flex flex-row gap-[10px] justify-between items-center rounded-[10px] bg-white px-[10px]  ">
                <div className="">HR Department</div>
                <button>
                  <IoIosClose />
                </button>
              </div>
              <div className="flex flex-row gap-[10px] justify-between items-center rounded-[10px] bg-white px-[10px]  ">
                <div className="">Present</div>
                <button className="text-[16px] ">
                  <IoIosClose />
                </button>
              </div> */}
            </div>
          </div>
          <div className="flex flex-row gap-[10px] relative ">
            {/* Search */}
            <div className="flex flex-row items-center ">
              {appearSearch ? (
                <input
                  type="search"
                  onChange={(e) => handleSearch(e.target.value)}
                  className="flex items-center w-[200px] px-[10px] py-[5px] text-[12px] h-full rounded-[10px] text-primary-blue focus:outline-none"
                  placeholder="Search Name Here"
                  maxLength={25}
                />
              ) : (
                <button
                  className="text-primary-blue "
                  onClick={() => setAppearSearch(true)}
                >
                  <IoSearch />
                </button>
              )}
            </div>
            {/* Filter Option Button */}
            <div className="flex items-center">
              <button
                className="text-primary-blue "
                onClick={() => setViewFilters(!viewFilters)}
              >
                <IoFilter />
              </button>
            </div>

          {/* Dropdown for Filteration */}
          {viewFilters?
          <>
          <EmployeeTrackerDropdowns filteredData={filteredData} setFilteredData={setFilteredData} />
          
           </>
          :
          null
          }
        
           


          </div>
        </div>

        <div className="flex gap-[10px] bg-white  items-center  rounded-b-[10px] ">
          <TrackerTable
            className="min-w-full"
            employeeData={filteredData}
            headings={defaultTableHeading}
          />
        </div>
      </div>
    </div>
  );
};

export default EmployeeTracker;
