"use client";
import React, { useState } from 'react'
import { EmployeeTrackerData } from '../Constants/EmployeeTrackerData';

const EmployeeTrackerDropdowns = (filteredData, setFilteredData ) => {
    const [selectType, setSelectType] = useState(null);
    const [selectSubType, setSelectSubType] = useState();
    const [OneFieldData, setOneFieldData] = useState([])

    const [uniqueValues, setUniqueValues] = useState([]);

    const extractUniqueValues = (key) => {
    //   const unique = [...new Set(EmployeeTrackerData.map(item => item[key]))];

    const unique = EmployeeTrackerData.filter(item=>item.type === key)
    
      console.log("Unique values for ", key, ":", unique);
      setUniqueValues(unique);
      setSelectType(key); // Auto-select the type
    };


  return (
    <>
        <div className="absolute right-0 top-[30px] bg-white rounded-[5px] shadow-md  " >
            <div className="px-[10px] py-[5px] border-b border-grey-color cursor-pointer " onClick={()=>extractUniqueValues("Designation")} >Designation</div>
            <div className="px-[10px] py-[5px] border-b border-grey-color cursor-pointer " onClick={()=>extractUniqueValues("Department")}>Department</div>
            <div className="px-[10px] py-[5px]  cursor-pointer " onClick={()=>extractUniqueValues("Status")}>Status</div>
          </div>
            
          {selectType && uniqueValues.length > 0 &&
        <div className="absolute right-[120px] top-[32px] bg-white rounded-[5px] shadow-md">
          {uniqueValues.map((value, index) => (
            <div key={index} className="px-[10px] py-[5px] cursor-pointer">{value}</div>
          ))}
        </div>
      }
    </>
  )
}

export default EmployeeTrackerDropdowns










// selectType &&

//     //  Select Filter Option dropdown 
//    <div className="absolute right-[120px] top-[32px] bg-white rounded-[5px] shadow-md  " >
//     {
//         EmployeeTrackerData
//         .filter(item => item.type === selectType )
//         .map((filteredDataItem,index)=>(
//             <>
//             {console.log("Filterdataitem: ",filteredDataItem)}
//                 <div key={index} className="px-[10px] py-[5px]  cursor-pointer " >{filteredDataItem.value}</div>
            
//             </>
            
//             ))
//     }
//    {/* <div className="px-[10px] py-[5px]  cursor-pointer ">Status</div> */}
//    </div>
   

    