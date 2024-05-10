"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import gesture1 from "../../../public/sun-1.png"
import { IoIosClose } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { EmployeeTrackerData } from "../Constants/EmployeeTrackerData";
import TrackerTable from "../Components/TrackerTable";

const EmployeeTracker = () => {
    const [appearSearch, setAppearSearch] = useState(false);
    const [searchText, setSearchText] = useState("");
    const [filteredData, setFilteredData] = useState(EmployeeTrackerData)

    console.log("SearchText",searchText)
    console.log("Filtered-Data",filteredData)

    // useEffect(()=>{
    //     handleSearch(searchText)
    // },[searchText])

    const handleSearch = (stext) =>{
        setFilteredData(EmployeeTrackerData)
        if(!filteredData){
            setFilteredData(EmployeeTrackerData)
            return;
        }
        const filterByName = EmployeeTrackerData.filter((data)=>{
            return data.name.toLowerCase().includes(stext.toLowerCase())
        })

        setFilteredData(filterByName)
        
    }

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
    // if(searchText){
        
    // }

    const defaultTableHeading = [
        "Name",
        "Designation",
        "Department",
        "Status"
      ];
  return (
    <div className="bg-sky-color w-full h-auto flex flex-col gap-5 p-[20px] rounded-b-[10px] ">
        {/* Page Heading */}
      <div>
        <h1 className="text-dark-blue text-[24px] font-bold">Employee Tracker</h1>
      </div>
      {/* Wishes */}
      <div className="flex flex-row gap-[20px]  ">
        <div className="w-[76px] h-[74px] ">
            <Image src={gesture1} alt="Good Morning" />
            {/* <Image src={gesture1} alt="Good Morning" /> */}
        </div>
        <div className="flex flex-col gap-[5px]  ">
            <div className="text-dark-blue text-[24px] font-medium ">Hello!</div>
            <div className="text-grey-color  ">Let&apos;s brighten some smiles today</div>
            {/* <div className="text-grey-color  ">Embracing the dark with radiant smiles</div> */}
            
        </div>

      </div>
      {/* Today's Update section of Attendence */}
      <div className="flex flex-col gap-[10px] ">
        <div className="text-dark-blue text-[20px] font-medium ">Today&apos;s Update</div>
        <div className="flex flex-row gap-[20px] ">
            {/* Present */}
            <div className="flex flex-col gap-[5px] w-[233px] bg-white rounded-[10px] px-[15px] py-[10px] border-r-[15px] border-[#cdf6cd] shadow-lg ">
                <div className="text-[#008000] text-[20px]   ">Present</div>
                <div className="text-grey-color text-[36px]  ">35</div>
            </div>
            {/* Absent */}
            <div className="flex flex-col gap-[5px] w-[233px] bg-white rounded-[10px] px-[15px] py-[10px] border-r-[15px] border-[#FCABAB] shadow-lg ">
                <div className="text-[#A90303] text-[20px]   ">Absent</div>
                <div className="text-grey-color text-[36px]  ">08</div>
            </div>
            {/* WFH */}
            <div className="flex flex-col gap-[5px] w-[233px] bg-white rounded-[10px] px-[15px] py-[10px] border-r-[15px] border-[#DAF2FF] shadow-lg ">
                <div className="text-[#0683C6] text-[20px]   ">Work From Home</div>
                <div className="text-grey-color text-[36px]  ">02</div>
            </div>
        </div>

      </div>

        {/* Employee List Section */}
        <div className="flex flex-col gap-0 rounded-[10px]  ">
            <div className="flex flex-row justify-between items-center p-[15px] bg-[#DAF2FF] w-full rounded-t-[10px] ">
                <div className="flex flex-row gap-[20px]  ">
                    <div className="text-primary-blue font-medium ">Employee List</div>
                    {/* On Conditional Filtering */}
                    <div className="flex flex-row gap-[10px] text-primary-blue text-[14px] ">
                        <div className="flex flex-row gap-[10px] justify-between items-center rounded-[10px] bg-white px-[10px]  ">
                            <div className="">HR Department</div>
                            <button><IoIosClose/></button>
                        </div>
                        <div className="flex flex-row gap-[10px] justify-between items-center rounded-[10px] bg-white px-[10px]  ">
                            <div className="">Present</div>
                            <button className="text-[16px] "><IoIosClose/></button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row gap-[10px] ">
                    <div className="flex flex-row items-center ">
                        {appearSearch?
                        <input type="search" onChange={(e)=>handleSearch(e.target.value)} className="flex items-center w-[200px] px-[10px] py-[5px] text-[12px] h-full rounded-[10px] text-primary-blue focus:outline-none" placeholder="Search Name Here" maxLength={25} />
                        :
                        
                        <button className="text-primary-blue " onClick={()=>setAppearSearch(true)}><IoSearch/></button>
                        }
                    </div>
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
