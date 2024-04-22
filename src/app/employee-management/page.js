"use client";

import React, { useEffect, useState } from "react";
import DropdownBox from "../Components/dropdownBox";
import FetchData from "./fetchData";
// import DropdownCheckBox from "../Components/dropDownCheckbox";
import DropdownCheckBox from "../Components/dropdownCheckbox";

import Table from "../Components/Table";
import Link from "next/link";
import AddEmployee from "../Components/AddEmployee";
import DropdownInput from "../Components/dropDownInput";

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
        const data = await FetchData();
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
  }, [selectedListValue, selectedFilterValue]);

  useEffect(() => {
    handleFiltering();
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
            <button
              onClick={() => {
                handleAddEmp();
              }}
              className="cursor-pointer bg-button-blue-color rounded-[10px] text-white px-[16px] py-[8px] h-full"
            >
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

        {/* addEmp page */}
        {addEmp ? <AddEmployee onClose={setAddEmp} /> : null}

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
            onSelect={handleListDropdownChange}
          />

          <DropdownInput
            mainText=" Filter By"
            Data={defaultTableHeading}
            onSelect={handleSortDropdownChange}
            onEnter={handleInputChange}
          />

          <DropdownCheckBox
            mainText="Customize Columns"
            Data={filterByData}
            onSelect={handleFilterDropdownChange}
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
