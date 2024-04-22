"use client";

import React, { useEffect, useState } from "react";
import DropdownBox from "../Components/dropdownBox";
import FetchData from "./fetchData";
// import DropdownCheckBox from "../Components/dropDownCheckbox";
import DropdownCheckBox from "../Components/dropdownCheckbox";

import Table from "../Components/Table";
import Link from "next/link";

export default function EmployeeManagement() {
  // initial constants
  const EmployeeData = ["All Employees", "Active Employees", "Past Employees"];
  const filterByData = ["Gender", "Age", "BloodGroup", "City"];
  const sortByData = ["name"];
  const defaultTableHeading = [
    "Designation",
    "Age",
    "Gender",
    "BloodGroup",
    "City",
    "DOJ",
  ];

  // state variables for managing data and selections
  const [fetchedData, setFetchedData] = useState([]);
  const [filteredEmployeeData, setFilteredEmployeeData] = useState([]);
  const [filterTableHeading, setFilterTableHeading] =
    useState(defaultTableHeading);
  const [searchEmployeeName, setSearchEmployeeName] = useState("");
  const [selectedListValue, setSelectedListValue] = useState("All Employees");
  const [selectedFilterValue, setSelectedFilterValue] = useState([]);
  const [selectedSortValue, setSelectedSortValue] = useState("");

  // fetch data from the firebase
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await FetchData();
        setFetchedData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Handle dropdown change for employee list filter
  useEffect(() => {
    const filterData = (listValue) => {
      let filteredData = fetchedData;
      if (listValue === "Active Employees") {
        filteredData = fetchedData.filter((data) => data.status === "Active");
      } else if (listValue === "Past Employees") {
        filteredData = fetchedData.filter((data) => data.status === "Past");
      }
      setFilteredEmployeeData(filteredData);
    };

    filterData(selectedListValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedListValue, fetchedData]);

  // Handle dropdown change for filtering table headings
  useEffect(() => {
    setFilterTableHeading(
      selectedFilterValue.length > 0 ? selectedFilterValue : defaultTableHeading
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedFilterValue]);

  // Handle dropdown change for sorting employee data
  useEffect(() => {
    const sortData = () => {
      if (selectedFilterValue) {
        const sortedData = [...filteredEmployeeData].sort((a, b) => {
          const nameA = a.fullname.toLowerCase();
          const nameB = b.fullname.toLowerCase();
          return nameA.localeCompare(nameB);
        });
        setFilteredEmployeeData(sortedData);
      }
    };
    sortData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedSortValue]);

  // handle search input change
  const handleSearchInputChange = (event) => {
    setSearchEmployeeName(event.target.value);
  };

  // function for handling searching functionality
  const searchHandler = () => {
    if (!fetchedData) {
      return;
    }
    const filteredByName = fetchedData.filter((data) =>
      data.fullname.toLowerCase().includes(searchEmployeeName.toLowerCase())
    );
    setFilteredEmployeeData(filteredByName);
  };

  return (
    <div>
      <div className="flex flex-col gap-3 pr-4">
        <div className="flex flex-row justify-between items-center p-4 rounded-[10px]">
          {/* heading */}
          <div className="p-3">
            {/* title */}
            <h1 className="text-dark-blue text-[24px] font-bold">
              Manage Employees
            </h1>

            {/* sub-title */}
            <p className="text-primary-blue">
              <Link href="./dashboard">Dashboard</Link> / Manage Employees
            </p>
          </div>

          {/* employees management section */}
          <div className="flex flex-row gap-2">
            {/* add epmployee button */}
            <button className="cursor-pointer bg-button-blue-color rounded-[10px] text-white px-[16px] py-[8px] h-full">
              + Add Employee
            </button>

            {/* import employees reference */}
            <Link href="./import-employees">
              <button className="bg-[#f7f7f7] rounded-[10px] px-[16px] py-[8px] border-2 border-primary-blue text-primary-blue">
                Import Employees
              </button>
            </Link>
          </div>
        </div>

        {/* Filter and Search Section */}
        <div className="flex justify-between items-center bg-white rounded-[10px] space-x-4 p-4">
          <div className="flex flex-row gap-2 items-center">
            <input
              type="text"
              placeholder="Enter Employee Name"
              maxLength={25}
              className="bg-[#f7f7f7] rounded-[10px] px-[16px] py-[8px] border-2 border-primary-blue outline-none"
              onChange={handleSearchInputChange}
            />

            {/* search button for the employeees */}
            <button
              className="cursor-pointer bg-button-blue-color rounded-[10px] text-white px-[16px] py-[8px] h-full"
              onClick={searchHandler}
            >
              Search
            </button>
          </div>

          <DropdownBox
            mainText="Employee List"
            Data={EmployeeData}
            onSelect={setSelectedListValue}
          />

          <DropdownCheckBox
            mainText="Filter By"
            Data={filterByData}
            onSelect={setSelectedFilterValue}
          />

          <DropdownBox
            mainText="Sort By"
            Data={sortByData}
            onSelect={setSelectedSortValue}
          />
        </div>
      </div>

      {/* employee Table Section */}
      <div className="bg-white p-2 m-2">
        <Table
          employeeData={filteredEmployeeData}
          headings={filterTableHeading}
        />
      </div>
    </div>
  );
}
