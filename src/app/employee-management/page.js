"use client";

import React, { useEffect, useState } from "react";
import DropdownBox from "../Components/dropdownBox";
import DropdownCheckBox from "@/app/Components/dropdownCheckbox";
import FetchData from "./fetchData";
import Table from "../Components/Table";
import Link from "next/link";
import AddEmployee from "../Components/AddEmployee";
import DropdownInput from "@/app/Components/dropdownInput";
import { IoSearch } from "react-icons/io5";

export default function EmployeeManagement() {
  // initial constants
  const EmployeeData = ["All Employees", "Active Employees", "Past Employees"];
  const filterByData = ["Gender", "Age", "BloodGroup", "City"];
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
  const [inputValue, setInputValue] = useState("");
  const [addEmp, setAddEmp] = useState(false);

  // handler function for showing addEmp. page
  const handleAddEmp = () => {
    setAddEmp((prev) => !prev);
  };

  //-------------------All use effects of this components----------
  // fetch data from the firebase
  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await FetchData();
        console.log("data", data);

        setFetchedData(data);
        setFilteredEmployeeData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // handle search input change
  useEffect(() => {
    listFilter(), handleFilterDropdownChange();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedListValue, selectedFilterValue]);

  useEffect(() => {
    handleFiltering();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue]);

  //-------------------------------------------------------------------------

  //function for updating the selectedListValue By dropdown
  const handleListDropdownChange = (selectedOption) => {
    setSelectedListValue(selectedOption);
  };

  //function for updating the selectedFilterValue By dropdown for customize columns
  const handleFilterDropdownChange = (selectedOption) => {
    setSelectedFilterValue(selectedOption);
    if (selectedFilterValue) {
      // Update filterTableHeading based on selected options
      if (selectedFilterValue.length == 0) {
        setFilterTableHeading(defaultTableHeading);
        return; // Set to default headings if no options selected
      }
      setFilterTableHeading(selectedFilterValue);
      return;
    }
  };

  //function for updating the selectedSortValue By dropdown for Filtering
  const handleSortDropdownChange = (selectedOption) => {
    setSelectedSortValue(selectedOption);
  };

  //function for updating the value of input field of filter by dropdownInput
  const handleInputChange = (e) => {
    setInputValue(e);
  };

  //this function calls when selectedListValue selected or updated
  const listFilter = () => {
    if (selectedListValue === "Active Employees") {
      const filterListData = fetchedData.filter(
        (data) => data.status === "Active"
      );
      setFilteredEmployeeData(filterListData);
    }
    if (selectedListValue === "Past Employees") {
      const filterListData = fetchedData.filter(
        (data) => data.status === "Past"
      );
      setFilteredEmployeeData(filterListData);
    }
    if (selectedListValue === "All Employees") {
      setFilteredEmployeeData(fetchedData);
    }
  };

  //function for dropdown where inputvalue is enter for filtering and calls when inputvalue is updates
  const handleFiltering = () => {
    if (inputValue == "") {
      setFilteredEmployeeData(fetchedData);
    }

    if (selectedSortValue && inputValue) {
      const prop = selectedSortValue.toLowerCase();

      const filteredData = fetchedData.filter((employee) => {
        if (selectedSortValue === "Age") {
          return employee[prop] == inputValue;
        }
        if (employee[prop]) {
          return employee[prop]
            .toLowerCase()
            .includes(inputValue.toLowerCase());
        }
      });
      setFilteredEmployeeData(filteredData);
    }
  };

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
    <div className="flex flex-col gap-[10px] p-[20px]">
      <div className="flex flex-col gap-3 ">
        <div className="flex md:flex-row flex-col lg:justify-between md:items-center  md:gap-0 gap-[15px] ">
          {/* heading */}
          <div className="">
            {/* title */}
            <h1 className="text-dark-blue font-bold lg:text-[24px]">
              Manage Employees
            </h1>

            {/* sub-title */}
            <p className="text-primary-blue">
              <Link href="./dashboard">Dashboard</Link> / Manage Employees
            </p>
          </div>

          {/* employees management section */}
          <div className="flex md:justify-center justify-start gap-2 lg:flex lg:flex-row lg:gap-2">
            {/* add epmployee button */}
            <button
              onClick={() => {
                handleAddEmp();
              }}
              className="cursor-pointer bg-button-blue-color text-white rounded-lg px-4 py-1 lg:bg-button-blue-color lg:rounded-[10px] lg:text-white lg:px-[16px] lg:py-[8px] lg:h-full"
            >
              + Add Employee
            </button>

            {/* import employees reference */}
            <Link href="./import-employees">
              <button className="bg-button-blue-color text-white rounded-lg px-4 py-1 lg:bg-[#f7f7f7] lg:rounded-[10px] lg:px-[16px] lg:py-[8px] lg:border-2 lg:border-primary-blue lg:text-primary-blue">
                Import Employees
              </button>
            </Link>
          </div>
        </div>

        {/* addEmp page */}
        {addEmp ? <AddEmployee onClose={setAddEmp} /> : null}

        {/* Filter and Search Section */}
        <div className="space-y-1.5 sm:space-y-0 bg-white p-4 flex md:flex-row flex-col lg:justify-between lg:items-center lg:bg-white rounded-[10px] lg:space-x-4 lg:p-4">
          {/* Search Bar Section */}
          <div className="flex gap-10  lg:flex lg:flex-row lg:gap-2 lg:items-center">
            <div className="relative flex-grow lg:flex-grow-0">
              <input
                type="text"
                placeholder="Enter Employee Name"
                maxLength={25}
                className=" md:w-auto w-full bg-[#f7f7f7] rounded-lg px-4 py-2 border-2 border-primary-blue  md:rounded-[10px] lg:px-[16px] lg:py-[8px] lg:border-2 lg:border-primary-blue focus:outline-none"
                onChange={handleSearchInputChange}
              />
              {/* Search button for employees in mobile */}
              <button
                className="absolute inset-y-0 right-0 flex items-center justify-center bg-button-blue-color rounded-r-lg text-white px-4 py-2 lg:hidden cursor-pointer"
                onClick={searchHandler}
              >
                <IoSearch />
              </button>
            </div>

            {/* search button for the employeees in larger screens */}
            <button
              className="hidden md:block cursor-pointer bg-button-blue-color rounded-lg text-white px-4 py-1 lg:bg-button-blue-color lg:rounded-[10px] lg:text-white lg:px-[16px] lg:py-[8px] lg:h-full"
              onClick={searchHandler}
            >
              Search
            </button>
          </div>
          
          {/* Dropdown for Selecting Employee type - All, Past & Active */}
          <DropdownBox
            mainText="Employee List"
            Data={EmployeeData}
            onSelect={handleListDropdownChange}
          />

          {/* Filter by dropdown */}
          <DropdownInput
            mainText=" Filter By"
            Data={defaultTableHeading}
            onSelect={handleSortDropdownChange}
            onEnter={handleInputChange}
          />

          {/* Selecting Customized Column Field */}
          <DropdownCheckBox
            mainText="Customize Columns"
            Data={filterByData}
            onSelect={handleFilterDropdownChange}
          />
        </div>
      </div>

      {/* employee Table Section */}

      <div className="bg-white p-2  overflow-x-auto rounded-[10px] ">
        <Table
          className="min-w-full"
          employeeData={filteredEmployeeData}
          headings={filterTableHeading}
        />
      </div>
    </div>
  );
}
