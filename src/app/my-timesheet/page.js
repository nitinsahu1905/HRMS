"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import AllTimesheetTable from "../Components/AllTimesheetTable/AllTimesheetTable";
import { MyTimesheetData } from "../Constants/MyTimesheetData";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CreateNewTimesheet from "../Components/AllTimesheetTable/CreateNewTimesheet";

const MyTimesheet = () => {
  const [viewCreateTimesheet, setViewCreateTimesheet] = useState(false)
  const [timesheetFilter, setTimesheetFilter] = useState("Timesheet");
  const [filterCriteria, setFilterCriteria] = useState({
    timesheet: "All",
    status: "All",
  });
  const [employeeName, setEmployeeName] = useState("Lakshya Agarwal");

  const [filteredTimesheetData, setFilteredTimesheetData] = useState(MyTimesheetData);

  const [sortOrder, setSortOrder] = useState("desc");

  //   const filterBtnRef = useRef(null)

  const filterOptionData = [
    {
      filterType: "Timesheet",
      filteringOptions: {
        All: {
          qty: null,
          borderClr: "#bfe9ff",
          bgClr: "#fff",
          txtClr: "#121F47",
        },
        "My Timesheets": {
          qty: MyTimesheetData.filter(
            (data) =>
              (filterCriteria.status === data.status ||
                filterCriteria.status === "All") &&
              data.owner === employeeName
          ).length,
          borderClr: "#DAF2FF",
          bgClr: "#fff",
          txtClr: "#025F92",
        },
        "Review Request": {
          qty: MyTimesheetData.filter(
            (data) =>
              (filterCriteria.status === data.status ||
                filterCriteria.status === "All") &&
              data.reportingManager === employeeName
          ).length,
          borderClr: "#FFC0BC",
          bgClr: "#fff",
          txtClr: "#DA7950",
        },
      },
    },
    {
      filterType: "Timesheet Status",
      filteringOptions: {
        All: {
          qty: null,
          borderClr: "#bfe9ff",
          bgClr: "#fff",
          txtClr: "#121F47",
        },
        Draft: {
          qty: MyTimesheetData.filter(
            (data) =>
              ((filterCriteria.timesheet === "My Timesheets" &&
                data.owner === employeeName) ||
                (filterCriteria.timesheet === "Review Request" &&
                  data.reportingManager === employeeName) ||
                filterCriteria.timesheet == "All") &&
              data.status === "Draft"
          ).length,

          borderClr: "#DAF2FF",
          bgClr: "#fff",
          txtClr: "#025F92",
        },
        Submitted: {
          qty: MyTimesheetData.filter(
            (data) =>
              ((filterCriteria.timesheet === "My Timesheets" &&
                data.owner === employeeName) ||
                (filterCriteria.timesheet === "Review Request" &&
                  data.reportingManager === employeeName) ||
                filterCriteria.timesheet == "All") &&
              data.status === "Submitted"
          ).length,
          borderClr: "#ADE2FF",
          bgClr: "#fff",
          txtClr: "rgba(0, 114, 176, 1)",
        },
        Rejected: {
          qty: MyTimesheetData.filter(
            (data) =>
              ((filterCriteria.timesheet === "My Timesheets" &&
                data.owner === employeeName) ||
                (filterCriteria.timesheet === "Review Request" &&
                  data.reportingManager === employeeName) ||
                filterCriteria.timesheet == "All") &&
              data.status === "Rejected"
          ).length,
          borderClr: "#FCABAB",
          bgClr: "#fff",
          txtClr: "#A90303",
        },
        Approved: {
          qty: MyTimesheetData.filter(
            (data) =>
              ((filterCriteria.timesheet === "My Timesheets" &&
                data.owner === employeeName) ||
                (filterCriteria.timesheet === "Review Request" &&
                  data.reportingManager === employeeName) ||
                filterCriteria.timesheet == "All") &&
              data.status === "Approved"
          ).length,
          borderClr: "#CDF6CD",
          bgClr: "#fff",
          txtClr: "#009300",
        },
      },
    },
  ];

  const filterData = (criteria) => {
    let filteredData = MyTimesheetData;

    if (criteria.timesheet !== "All") {
      if (criteria.timesheet == "My Timesheets") {
        filteredData = filteredData.filter(
          (data) => data.owner == employeeName
        );
      }
      if (criteria.timesheet == "Review Request") {
        filteredData = filteredData.filter(
          (data) => data.reportingManager == employeeName
        );
      }
    }

    if (criteria.status !== "All") {
      filteredData = filteredData.filter(
        (data) => data.status == criteria.status
      );
    }

    setFilteredTimesheetData(filteredData);
  };

  const handleFiltersOnButtons = (mainFilter, filterPoint) => {
    const newCriteria = { ...filterCriteria };

    if (mainFilter.filterType == "Timesheet") {
      newCriteria.timesheet = filterPoint;
    } else if (mainFilter.filterType == "Timesheet Status") {
      newCriteria.status = filterPoint;
    }

    setFilterCriteria(newCriteria);
    filterData(newCriteria);
  };

  useEffect(() => {
    filterData(filterCriteria);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //   To print the Filter Options on basis of "Timesheet" & "Timesheet Status"
  const currentFilter = filterOptionData.find(
    (filter) => filter.filterType === timesheetFilter
  );

  //   Search Functionality
  const handleSearch = (searchText) => {
    setFilterCriteria({
      timesheet: "All",
      status: "All",
    });
    if (!filteredTimesheetData) {
      setFilteredTimesheetData(MyTimesheetData);
      return;
    }
    const filterBySearch = MyTimesheetData.filter((data) => {
      return data.timesheetNo.toLowerCase().includes(searchText.toLowerCase());
    });
    setFilteredTimesheetData(filterBySearch);
  };

  //   Start Date Functionality
  const handleStartDate = (date) => {

    console.log("Datee: ", date);

    const convertedDate = convertDate(date);
    console.log("cd: ", convertedDate);

    setFilterCriteria({
      timesheet: "All",
      status: "All",
    });
    const filterByStartDate = MyTimesheetData.filter((data) => {
      return data.startDate === convertedDate;
    });
    setFilteredTimesheetData(filterByStartDate);
  };

  //   Converting the date format
  function convertDate(dt) {
    const date = new Date(dt);
    const day = ("0" + date.getDate()).slice(-2);
    const month = date.toLocaleString("en-US", { month: "long" });
    const year = date.getFullYear();

    return `${month} ${day}, ${year}`;
  }

  //   Check that day is Sunday
  const checkSunday = (dt) => {
    const day = new Date(dt).getDay();
    if (day == 0) {
      return true;
    }
    return false;
  };

//   Function for Sorting
// const handleSorting = (sortField) =>{
//     console.log("SF: ",sortField)
//     const sortbyFields = filteredTimesheetData.filter((data)=>data.sortField)
//     const sortbyField = sortbyFields.sort((a,b)=>a.sortField - b.sortField)

//     setFilteredTimesheetData(sortbyField)
// }

// Function for Sorting Data
const handleSorting = (sortField) => {
    let sortedData = [...filteredTimesheetData];
    console.log("Sort type1: ",sortOrder)
    console.log("Sort field: ",sortField)

    sortedData.sort((a, b) => {
        console.log("a: ",a);
        console.log("b: ",b);
        
      let fieldA = a[sortField];
      let fieldB = b[sortField];

      console.log("FA: ",fieldA);
      console.log("FB: ",fieldB);

       // Convert date strings to Date objects for sorting
    if (sortField === "startDate" || sortField === "endDate") {
        fieldA = new Date(fieldA);
        fieldB = new Date(fieldB);
      }

      if (fieldA < fieldB) return sortOrder === "asc" ? -1 : 1;
      if (fieldA > fieldB) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });

    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    console.log("Sort type2: ",sortOrder)
    setFilteredTimesheetData(sortedData);
  };

  useEffect(()=>{
    handleSorting("startDate")
    console.log("Use effect")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const closeModal = () =>{
    setViewCreateTimesheet(false)
  }

  return (
    <>
      <div className="flex flex-col gap-[25px] p-[25px] ">
        {/* Header Section */}
        <div className="flex flex-row justify-between items-center ">
          {/* Tiltle and Subtitle */}
          <div className="flex flex-col   ">
            {/* Title */}
            <h1 className="text-dark-blue font-bold lg:text-[24px]">
              Timesheet
            </h1>
            {/* sub-title or Breadcrum */}
            <p className="text-primary-blue">
              <span className="text-dark-blue ">Time and Attend</span> /{" "}
              <Link href="./my-timesheet">Timesheet</Link>
            </p>
          </div>

          {/* Create new timsheet button */}
          <button onClick={()=>setViewCreateTimesheet(true)} className="h-fit px-[10px] py-[8px] bg-primary-blue text-white text-[16px] font-semibold rounded-[10px] ">
            + Create
          </button>
        </div>

        {/* Inner Section */}
        <div className="flex flex-col gap-[25px] ">
          {/* Filters Section */}
          <div className="flex flex-row justify-between items-center ">
            {/* Left Filtering Section */}
            <div className="flex flex-col gap-[20px]  ">
              {/* Filter for Timesheets & Timesheet Status */}
              <div className="flex flex-row gap-[10px] ">
                <div
                  onClick={() => setTimesheetFilter("Timesheet")}
                  className={` ${
                    timesheetFilter === "Timesheet"
                      ? "bg-[#bfe9ff] text-dark-blue border"
                      : "bg-[#fff] border border-[#bfe9ff] text-[#025F92]"
                  } px-[15px] py-[5px] rounded-[20px] cursor-pointer `}
                >
                  Timesheet
                </div>
                <div
                  onClick={() => setTimesheetFilter("Timesheet Status")}
                  className={` ${
                    timesheetFilter === "Timesheet Status"
                      ? "bg-[#bfe9ff] text-dark-blue border"
                      : "bg-[#fff] border border-[#bfe9ff] text-[#025F92]"
                  } px-[15px] py-[5px] rounded-[20px] cursor-pointer `}
                >
                  Timesheet Status
                </div>
              </div>

              {/* Filter Options on Above Selection */}
              <div className="flex flex-row gap-[10px] ">
                {currentFilter &&
                  Object.entries(currentFilter.filteringOptions).map(
                    ([key, value]) => (
                      <div
                        key={key}
                        className={` border-2 px-[15px] py-[5px] rounded-[20px] cursor-pointer `}
                        style={{
                          backgroundColor:
                            (timesheetFilter === "Timesheet" &&
                              filterCriteria.timesheet === key) ||
                            (timesheetFilter === "Timesheet Status" &&
                              filterCriteria.status === key)
                              ? value.borderClr
                              : value.bgClr,
                          color: value.txtClr,
                          borderColor: value.borderClr,
                        }}
                        onClick={() =>
                          handleFiltersOnButtons(currentFilter, key)
                        }
                      >
                        {key} {value.qty !== null ? `| ${value.qty}` : ""}
                      </div>
                    )
                  )}
              </div>
            </div>

            {/* Right Filtering Section */}
            <div className="flex flex-col gap-[20px] justify-start ">
              {/* Timesheet Search Bar */}
              <div className="flex flex-row items-center w-[220px] border border-[#BFE9FF] text-primary-blue rounded-[10px] bg-white pr-[10px] ">
                <input
                  type="search"
                  onChange={(e) => handleSearch(e.target.value)}
                  className="flex items-center h-full w-full  px-[10px] py-[5px] text-[13px] rounded-[10px]   focus:outline-none"
                  placeholder="Search Timesheet Here"
                  maxLength={25}
                />
                <IoSearch />
              </div>

              {/* Start Date Field for Filter */}
              <div className="w-[220px] border border-[#BFE9FF] text-grey-color rounded-[10px] bg-white ">
                <input
                  type="date"
                  placeholder="Start Date"
                  className="h-full w-full  px-[10px] py-[5px] text-[12px] rounded-[10px] text-grey-color  focus:outline-none"
                  onChange={(e) => {
                    if (!checkSunday(e.target.value)) {
                      e.target.value = "";
                      toast.warn("Please Select Start Date", {
                        position: "top-center"
                      });
                    } else {
                      
                      handleStartDate(e.target.value);
                    }
                  }}
                  //   onChange={(e)=>handleStartDate(e.target.value)}
                />
              </div>
            </div>
          </div>

          <ToastContainer />

          {/* Table Section */}
          <div className="rounded-[0px] ">
            <AllTimesheetTable timesheetData={filteredTimesheetData} handleSorting={handleSorting} statusColor={filterOptionData.filter(data=>data.filterType=="Timesheet Status")} />
          </div>
        </div>


        {viewCreateTimesheet?
            <CreateNewTimesheet onClose={closeModal} />
        :
        null
        }





      </div>
      
    </>
  );
};

export default MyTimesheet;
