"use client";

import { MyForecastingData } from "../../Constants/MyForecastingData"
// import { MyForecastingData } from "../Constants/MyForecastingData";
import { FaAngleDown } from "react-icons/fa6";
import React, { useState } from "react";
import StatesDropDown from "../StatesDropDown";
 
export default function MyForecasting() {
    const listData = ["Current week", "Last Week", "Next Week"];
    const [selectedListValue, setSelectedListValue] = useState(listData[0]);


    const handleListDropdownChange = (selectedOption) => {
        setSelectedListValue(selectedOption);
        console.log(selectedListValue, "inside handlechange");
      };

  // Function to calculate the remaining hours
  const calculateRemainingHours = (hours) => {
    const totalHours = 8;
    const usedHours = hours.reduce(
      (accumulator, currentValue) =>
        accumulator + parseInt(Object.values(currentValue)[0]),
      0
    );
    return totalHours - usedHours;
  };
 
  return (
    
      <div className="w-full h-full flex flex-col gap-2 bg-white rounded-[15px] ">
        {/* Heading of the component & also date filter */}
        <div className="h-[63.5px] bg-white w-full flex justify-between items-center p-3 rounded-t-[15px] ">
          <span className="text-[20px] font-medium">My Weekly Plan</span>
          <StatesDropDown
                  mainText="Start Date"
                  Data={listData}
                  onSelect={handleListDropdownChange}
                />
          {/* <div className="border-[1px] border-[#808080] rounded-[10px] p-1 pl-2 pr-2 flex items-center gap-4">
            <span className="text-[14px] text-[#808080]">May 13, 2024</span>
            <FaAngleDown />
          </div> */}
        </div>
 
        {/* Mapping over the forecasting data */}
        {MyForecastingData.map((data, index) => (
          <div
            key={index}
            className="h-[49px] bg-white flex items-center gap-4 p-2"
          >
            <span className="text-[14px] w-[110px]">{data.day}</span>
 
            {/* Mapping over each hour entry */}
            {data.hours.map((entry, entryIndex) => (
              <div
                key={entryIndex}
                className="bg-[#E6F3F9] border-t-[2px] border-[#0683C6] rounded-[10px] flex items-center justify-center overflow-hidden p-2"
                style={{
                  width: `${(parseInt(Object.values(entry)[0]) / 8) * 100}%`,
                }}
                title={`${Object.keys(entry)[0]} - ${Object.values(entry)[0]} hrs`}
              >
                <span className="text-[#0683C6] text-[14px] font-medium truncate">
                  {Object.keys(entry)[0]} - {Object.values(entry)[0]} hrs
                </span>
              </div>
            ))}
 
            {/* Displaying free hours if any */}
            {calculateRemainingHours(data.hours) > 0 && (
              <div
                className="bg-[#FCABAB] border-t-[2px] border-[#A90303] rounded-[10px] flex items-center justify-center overflow-hidden p-2"
                style={{
                  width: `${
                    (calculateRemainingHours(data.hours) / 8) * 100
                  }%`,
                }}
                title={`Free - ${calculateRemainingHours(data.hours)} hrs`}
              >
                <span className="text-[#A90303] text-[14px] font-medium truncate">
                  Free - {calculateRemainingHours(data.hours)} hrs
                </span>
              </div>
            )}
          </div>
        ))}
 
      </div>

  );
}
 