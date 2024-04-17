"use client"
import React, { useEffect, useState } from 'react'
import DropdownBox from '../Components/dropdownBox';
import DropdownCheckBox from '../Components/dropdownCheckbox';
import Table from '../Components/Table';
import { EmployeeManagementData } from '../Constants/EmployeeManagementData';
import Link from 'next/link';
const EmployeeManagement = () => {
  const EmployeeData = ['All Employees', 'Active Employees', 'Past Employees'];
  const filterByData=["Gender","Age","BloodGroup","City"];
  const sortByData=["name"];
  const tableHeading=["Designation","Age","Gender","BloodGroup","City","DOJ"];
 
  const [employeeData,setEmployeeData] = useState(EmployeeManagementData);
  const [filteredEmployeeData,setFilteredEmployeeData]=useState(EmployeeManagementData);
 
  const [tableHeadingList,setTableHeadingList]=useState(tableHeading);
  const [filterTableHeading,setFilterTableHeading]=useState(tableHeadingList);
  const [searchEmployeeName,setSearchEmployeeName]=useState("");
  const [selectedListValue, setSelectedListValue] = useState("");
  const [selectedFilterValue, setSelectedFilterValue] = useState([]);
  const [selectedSortValue, setSelectedSortValue] = useState("");

  const handleListDropdownChange = (selectedOption) => {
    setSelectedListValue(selectedOption);
    // if(selectedListValue==="Active Employees"){
    //   const filterListData= employeeData.filter((data)=> data.status==="Active")
    //   setFilteredEmployeeData(filterListData);
    // }
    if(selectedListValue==="Active Employees"){
      const filterListData= employeeData.filter((data)=> data.status==="Active")
      setFilteredEmployeeData(filterListData);
    }
  if(selectedListValue==="Past Employees")
  {
    const filterListData= employeeData.filter((data)=> data.status==="Past")
      setFilteredEmployeeData(filterListData);
  }
  if(selectedListValue==="All Employees"){
    setFilteredEmployeeData(employeeData)
    // console.log(selectedFilterValue)
  }
 
  };
  const handleFilterDropdownChange = (selectedOption) => {
    console.log(selectedOption)
    setSelectedFilterValue(selectedOption);
    if(selectedFilterValue) {
      // Update filterTableHeading based on selected options
      if (selectedFilterValue.length==0) {
      // let count=0;
      setFilterTableHeading(tableHeadingList);
      console.log("selected option emprty")
      return; // Set to default headings if no options selected
    } 
      console.log("first time filter")
      setFilterTableHeading(selectedFilterValue);
      return;
    }

  console.log(filterTableHeading);
    // if (selectedOption ==="") {
    //   // let count=0;
    //   setFilterTableHeading(tableHeadingList);
    //   console.log("selected option emprty")
    //   return; // Set to default headings if no options selected
    // } 
    // setSelectedFilterValue(selectedOption);
    // if(selectedFilterValue==null){
    //   setFilterTableHeading(tableHeadingList);
    //   console.log("selectedfilter value null")
    // }
    // console.log(selectedFilterValue);
    // console.log("filter")
   
 

  //  if(selectedFilterValue){
   
  //   setEmployeeData(filteredEmployeeData);
  //   setFilterTableHeading(selectedFilterValue);
  //   console.log("value selected")
  //   return;
  // }

  // else if(selectedOption===" "){
  //   setFilterTableHeading(tableHeading)
  // }
 
    
  };

  // if(!selectedFilterValue) {
  //   setSelectedFilterValue([])
  //   console.log(selectedFilterValue)
  // }

  const handleSortDropdownChange = (selectedOption) => {
    setSelectedSortValue(selectedOption);
    if(selectedSortValue){
      // setEmployeeData(EmployeeManagementData);
      const filter=filteredEmployeeData.sort((a, b) => b.id - a.id);
      console.log(filter)
      setFilteredEmployeeData(filter)
    }
  };
 useEffect(()=> {handleListDropdownChange()},[selectedListValue]);
 useEffect(()=>{handleFilterDropdownChange()},[selectedFilterValue]);
 useEffect(()=>{handleSortDropdownChange()},[selectedSortValue]);
 
  const searchHandler = () => {
      //  console.log(searchEmployeeName);
       const filterName=employeeData.filter((data)=> data.name.toLowerCase().includes(searchEmployeeName)
      )
      // console.log(filterName)
       setFilteredEmployeeData(filterName);
       }
 
 
// this works on search button
  // const searchFilterHandler = () => {
  //   console.log("list",typeof(selectedListValue));
  //   console.log("filter",typeof(selectedFilterValue));
    // if(selectedListValue==="" && selectedFilterValue.length===0)
    // {
    //   setFilterTableHeading(tableHeadingList)
    //   console.log(filterTableHeading)
    //   return;
    // }
//  if(selectedListValue==="Active Employees"){
//       const filterListData= employeeData.filter((data)=> data.status==="Active")
//       setFilteredEmployeeData(filterListData);
//     }
//   if(selectedListValue==="Past Employees")
//   {
//     const filterListData= employeeData.filter((data)=> data.status==="Past")
//       setFilteredEmployeeData(filterListData);
//   }
//   if(selectedListValue==="All Employees"){
//     setFilteredEmployeeData(employeeData)
//     // console.log(selectedFilterValue)
//   }
 
 
 
 
//   if(selectedFilterValue.length==0){
//     setFilterTableHeading(tableHeadingList);
//   }
//  else if(selectedFilterValue){
 
//   // setEmployeeData(filteredEmployeeData);
//   setFilterTableHeading(selectedFilterValue)};
 
  // if (selectedSortValue === "name") {
  //   const sortedData = filteredEmployeeData.sort((a, b) => {
  //     // Custom sort: Names starting with 'A' come first
  //     if (a.name.startsWith('A') && !b.name.startsWith('A')) {
  //       return -1;
  //     } else if (!a.name.startsWith('A') && b.name.startsWith('A')) {
  //       return 1;
  //     } else {
  //       // If both names start with 'A' or neither does, sort alphabetically
  //       return a.name.localeCompare(b.name);
  //     }
  //   });
  //   setFilteredEmployeeData([...sortedData]);
  // }
 
  // if(selectedSortValue){
  //   // setEmployeeData(EmployeeManagementData);
  //   const filter=filteredEmployeeData.sort((a, b) => b.id - a.id);
  //   console.log(filter)
  //   setFilteredEmployeeData(filter)
  // }
 
 
  // }
 

// console.log(filteredEmployeeData)
// console.log(selectedListValue,selectedFilterValue,selectedSortValue)

  return (
    <div className="flex flex-col gap-3 pr-4">
      {/* <div className='flex flex-row gap-2 p-2'>
          <h1 className="text-dark-blue font-bold">Dashboard</h1>
          <span>/</span>
          <p className="text-primary-blue">Employee Management</p>
        </div> */}
        <div className='flex flex-row justify-between  items-center p-4   rounded-[10px]'>
           <div className='p-3'>
        <h1 className="text-dark-blue text-[24px] font-bold">Manage Employees</h1>
        <p className="text-primary-blue">Dashboard / Manage Employees</p>
           </div>
           <div className='flex flex-row gap-2'>
                  <button className='cursor-pointer bg-button-blue-color rounded-[10px] text-white px-[16px] py-[8px] h-full '>+ Add Employee</button>
                  <Link href="./import-employees"><button className='bg-[#f7f7f7] rounded-[10px] px-[16px] py-[8px] border-2 border-primary-blue text-primary-blue'>Import Employees</button></Link>
          </div>
        </div>
        <div className='flex justify-between items-center  bg-white rounded-[10px] space-x-4 p-4'>
        <div className='flex flex-row gap-2 items-center'>
               <div>
                  <input type='text'
                   placeholder='Enter Employee Name'
                   maxLength={25}
                   className='bg-[#f7f7f7] rounded-[10px] px-[16px] py-[8px] border-2 border-primary-blue outline-none '
                   onChange={(e)=>
                    setSearchEmployeeName(e.target.value)}/>
               </div>
               <button className='cursor-pointer bg-button-blue-color rounded-[10px] text-white px-[16px] py-[8px]  h-full ' onClick={searchHandler}>Search</button>
            </div>
          <div>
        <DropdownBox mainText="Employee List" Data={EmployeeData} onSelect={handleListDropdownChange}/>
        </div>
        <div className='pl-1' >
        <DropdownCheckBox mainText="Filter By" Data={filterByData} onSelect={handleFilterDropdownChange}/>
        </div>
        <div className='pl-1' >
        <DropdownBox mainText=" Sort By" Data={sortByData} onSelect={handleSortDropdownChange}/>
        </div>
        {/* <div><button className='cursor-pointer bg-button-blue-color rounded-[10px] text-white px-[27px] py-[12px] h-full ' onClick={searchFilterHandler}>Search</button></div> */}
        </div>
        <div>
          <button
            className="cursor-pointer bg-button-blue-color rounded-[10px] text-white px-[27px] py-[12px] h-full "
            onClick={searchFilterHandler}
          >
            Search
          </button>
        </div>
      </div>
      <div className="bg-white p-2 m-2">
        <Table
          employeeData={filteredEmployeeData}
          headings={filterTableHeading}
        />
      </div>
    </div>
  );
};

export default EmployeeManagement;
