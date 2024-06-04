"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { CelebrationData } from "../Constants/CelebrationData";
import { NewJoiningsData } from "../Constants/NewJoiningsData";
import Image from "next/image";
import ArrivalReportChart from "../Components/ArrivalReportChart/ArrivalReportChart";
import TimesheetReportChart from "../Components/TimesheetReport/TimesheetReportChart";
import { TimesheetReportData } from "../Constants/TimesheetReportData";
// import {img1} from '../../../public/user-img.jpeg'

import { StatisticsEmployeeData } from "../Constants/StatisticsEmployeeData";
import Statistics from "../Components/Statistics";
import StatesDropDown from "../Components/StatesDropDown";
import Leaves from "../Components/Leaves";
import MultiDatePicker from "../Components/MultiDatePicker";
import MyForecasting from "../Components/ResourceForecast/MyForecasting";

const EmployeeDashboard = () => {
  const [punchInTime, setPunchInTime] = useState("00:00:00");
  const [punchedIn, setPunchedIn] = useState(false);
  const [punchOutTime, setPunchOutTime] = useState("00:00:00");
  const [duration, setDuration] = useState(0);
  const [selectedListValue, setSelectedListValue] = useState("This week");
  const [filterStatisticsEmployeeData, setFiterStatisticsEmployeeData] =
    useState(StatisticsEmployeeData);

  const listData = ["This week", "This month", "This Year"];

  //function for updating the selectedListValue By dropdown
  const handleListDropdownChange = (selectedOption) => {
    setSelectedListValue(selectedOption);
    console.log(selectedListValue, "inside handlechange");
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (punchedIn) {
        setDuration((prevDuration) => prevDuration + 1);
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, [punchedIn]);

  function formatDuration(duration) {
    const hours = Math.floor(duration / 3600);
    const minutes = Math.floor((duration % 3600) / 60);
    const seconds = duration % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  }

  const handlePunchIn = () => {
    const currentTime = new Date();
    const hours = currentTime.getHours().toString().padStart(2, "0");
    const minutes = currentTime.getMinutes().toString().padStart(2, "0");
    const seconds = currentTime.getSeconds().toString().padStart(2, "0");
    const newTime = `${hours}:${minutes}:${seconds}`;

    if (punchedIn) {
      setPunchOutTime(newTime);
    } else {
      setPunchInTime(newTime);
    }
    setPunchedIn(!punchedIn);
  };

  useEffect(() => {
    console.log(selectedListValue, "useEffect");
    const filterData = StatisticsEmployeeData.filter((data) => {
      return data.data.toLowerCase() === selectedListValue.toLowerCase();
    });
    console.log(filterData);
    setFiterStatisticsEmployeeData(filterData);
  }, [selectedListValue]);
  const filledWidth = (duration / 86400) * 360; // Percentage of border filled with #0683c6

  return (
    <>
      <div className="flex flex-col gap-[25px] ">
        {/* First Row */}
        <div className="flex flex-row gap-[25px] w-full">
          {/* greeting card and announcement*/}
          <div className=" flex flex-col w-[75%] gap-4 ">
            {/* Greeting Section */}
            <div className="w-full flex flex-row bg-white rounded-[15px]">
              <div className="w-[20%] h-32">
                <Image
                  src="/work.jpg"
                  alt="work-pic"
                  className="rounded-tl-[15px] rounded-bl-[15px]"
                />{" "}
                {/* Add alt prop */}
              </div>

              <div className=" flex flex-col gap-[1px] px-5 py-5">
                <div className="text-[#808080] font-semibold text-[12px]">
                  Hi,Divyanshi
                </div>
                <div className="text-dark-blue text-[22px] font-medium">
                  Good Morning
                </div>
                <div className="text-[#808080] font-semibold text-[12px]">
                  Let&apos;s start a day with positive mindset
                </div>
              </div>
            </div>

            {/* Announcement Section */}
            <div className="flex flex-col gap-0">
              <div className="bg-[#BFE9FF] p-2 flex flex-row gap-4 items-center rounded-tr-[10px] rounded-tl-[10px]">
                <div className="h-6">
                  <Image
                    src="/Commercial.png"
                    alt="Commercial"
                    width={24}
                    height={24}
                    className="h-6 w-6"
                  />{" "}
                  {/* Add alt prop and specify width and height */}
                </div>
                <div className="text-[#0683C6] font-medium text-[20px]">
                  What&apos;s Happening in Metadologie
                </div>
              </div>
              <div className="bg-white flex flex-col px-2 rounded-br-[10px] rounded-bl-[10px]">
                {/* First Announcement */}
                <div className=" py-4 flex flex-row justify-between  items-center w-full">
                  <div className="flex flex-row  items-center gap-4 w-[85%]">
                    <div className="h-6">
                      <Image
                        src="/Handshake.jpg"
                        alt="Handshake"
                        width={24}
                        height={24}
                      />
                    </div>
                    <div className="flex flex-col gap-[2px]">
                      <div className="font-normal text-dark-blue text-[16px]">
                        Partnership
                      </div>
                      <div className="font-medium text-[#808080] text-[12px]">
                        Metadologie get Partnership with Docsign to Drive
                        Innovation
                      </div>
                    </div>
                  </div>
                  <div className="text-[#0683c6] text-[12px] font-medium w-[15%] px-4">
                    May 04,2024
                  </div>
                </div>

                {/* Second Announcement */}
                <div className=" py-4 flex flex-row justify-between items-center w-full">
                  <div className="flex flex-row gap-4  items-center w-[85%]">
                    <div className="h-6">
                      <Image
                        src="/Confetti.png"
                        alt="Confetti"
                        width={24}
                        height={24}
                      />
                    </div>
                    <div className="flex flex-col gap-[2px] ">
                      <div className="font-normal text-dark-blue text-[16px]">
                        Event Announcement
                      </div>
                      <div className="font-medium text-[#808080] text-[12px]">
                        Save the Date for the occasion of “Foundation Day of
                        Metadologie”{" "}
                      </div>
                    </div>
                  </div>
                  <div className="text-[#0683c6] text-[12px] font-medium w-[15%] px-4">
                    May 18,2024
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Punch In/Out Section */}
          <div className="bg-white rounded-[15px] w-[25%] flex flex-col px-1 relative  ">
            {/* time circle */}

            <div
              className="w-32 h-32 relative rounded-full m-auto text-center pt-8 "
              style={{
                background: `conic-gradient(#0683c6 ${filledWidth}deg , #f9f9f9 0deg)`,
              }}
            >
              <div className="absolute w-28 h-28 top-2 left-2  rounded-full bg-white m-auto text-center pt-8 ">
                <div className="text-dark-blue">{formatDuration(duration)}</div>
                <div className="font-medium text-[#808080] text-xs">
                  Total Time
                </div>
              </div>
            </div>

            {/* Punch IN/OUT Time Display Box */}
            <div className=" flex flex-row gap-10 px-[15%] py-4 m-auto bg-[#f9f9f9] rounded-[15px] ">
              <div className="flex flex-col gap-1 items-center ">
                <div className="text-[#0683c6] font-medium text-[14px] ">
                  Punch In
                </div>
                <div className="text-[#7d7d7d] font-normal text-[14px]">
                  {punchInTime}
                </div>
              </div>
              <div className="flex flex-col gap-1 items-center">
                <div className="text-[#0683c6] font-medium text-[14px]">
                  Punch Out
                </div>
                <div className="text-[#7d7d7d] font-normal text-[14px]">
                  {punchOutTime}
                </div>
              </div>
            </div>
            <div className="m-auto">
              <button
                className="rounded-lg bg-[#0683c6] text-center text-white font-semibold text-[14px] px-4 py-2 "
                onClick={handlePunchIn}
              >
                {punchedIn ? "Punch Out" : "Punch In"}
              </button>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="flex md:flex-row flex-col  gap-[25px]  ">
          <div className="w-[75%] flex flex-row gap-[25px] bg-white rounded-[15px] ">
            <MyForecasting />
          </div>

          <div className="lg:w-[25%]  bg-white rounded-[15px] h-auto  flex flex-col  ">
            <div className=" mt-3 text-dark-blue font-medium text-[22px] px-3   ">
              Leaves Update
            </div>
            <MultiDatePicker />
          </div>
        </div>

        {/* Third Row */}
        <div className="flex md:flex-row flex-col  gap-[25px]  ">
          <div className="w-[75%] flex flex-row gap-[25px] ">
            {/* New Joinings */}
            <div className="w-[50%] flex flex-col gap-[10px]  bg-white rounded-[15px] h-auto pb-[10px] ">
              <div className=" my-[12px] text-dark-blue font-medium text-[22px] px-3   ">
                New Joining&apos;s
              </div>
              <div className="flex flex-col px-[25px] h-[320px] overflow-y-scroll scrollbar-hide ">
                {NewJoiningsData.map((newJoinee, index) => (
                  //  One joining
                  <div
                    key={index}
                    className="flex flex-row gap-[25px] border-b-2 border-grey-color py-[25px] "
                  >
                    {/* Image  */}
                    <div className="overflow-hidden lg:h-20 lg:w-20 h-10 w-10  rounded-full border-none">
                      <Image
                        src={newJoinee.img}
                        width={24}
                        height={24}
                        alt="Emp-img"
                        quality={100}
                        className=" object-cover w-full h-full"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex flex-col gap-[20px] ">
                      {/* Upper detail of name and designation */}
                      <div className="flex flex-col gap-[5px] ">
                        <div className="text-[#0683C6] text-[16px] ">
                          {newJoinee.name}
                        </div>
                        <div className="text-grey-color text-[12px] ">
                          {newJoinee.designation}
                        </div>
                      </div>
                      {/* lower details of email */}
                      <div className="flex flex-col gap-[5px] ">
                        <div className="text-dark-blue text-[12px] ">Email</div>
                        <div className="text-grey-color text-[12px] ">
                          {newJoinee.email}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Celebrations */}
            <div className="w-[50%]  bg-white rounded-[15px] h-auto  flex flex-col gap-[10px] pb-2">
              <div className=" my-[12px] text-dark-blue font-medium text-[22px] px-3">
                Upcoming Celebration
              </div>
              <div className="flex flex-col gap-1 h-[332px] overflow-y-scroll scrollbar-hide  ">
                {CelebrationData.slice(0, 4).map((data) => (
                  <div key={data.id} className="w-full">
                    {/* One Celebration */}
                    <div className="flex flex-row justify-between rounded-lg w-auto h-auto mx-2 p-2">
                      {/* Section for Image and text */}
                      <div className="flex flex-row  ">
                        {/* image section */}
                        <div className="overflow-hidden lg:h-16 lg:w-16 h-9 w-9  rounded-full border-none">
                          <Image
                            src={data.img}
                            width={24}
                            height={24}
                            alt="Emp-img"
                            // quality={100}
                            className=" object-cover w-full h-full"
                          />
                        </div>

                        <div className="flex flex-col lg:mx-2 mx-1 lg:gap-2 gap-1 lg:w-[calc(100%-64px)] w-[calc(100%-36px)] ">
                          <div className="text-dark-blue font-medium lg:text-[16px] text-sm ">
                            {data.name}
                          </div>
                          <div className="text-dark-blue font-normal  lg:text-[14px] text-xs">
                            {data.occasion}
                          </div>
                        </div>
                      </div>
                      {/* Celebration Date Section */}
                      <div className="text-[#0684C7] font-medium flex  items-center px-2 py-1 text-sm sm:text-[14px] ">
                        {data.date}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Arrival Report */}
          <div className="lg:w-[25%]  bg-white rounded-[15px] h-auto  flex flex-col pb-2">
            <div className=" mt-3 text-dark-blue font-medium text-[22px] px-3   ">
              Arrival Report
            </div>
            <div className="flex flex-col gap-[10px] items-center ">
              <ArrivalReportChart arrivalData={[9, 2, 4]} />
            </div>
          </div>
        </div>

        {/* Fourth Row */}
        <div className="flex md:flex-row flex-col  gap-[25px]  ">
          <div className="w-[75%] flex flex-row gap-[25px] ">
            {/* Timesheet Report */}
            <div className="lg:w-[50%]  bg-white rounded-[15px] h-auto  flex flex-col pb-2">
              <div className=" mt-3 text-dark-blue font-medium text-[22px] px-3   ">
                Timesheet Report
              </div>
              <div className="flex flex-col gap-[10px] items-center ">
                <TimesheetReportChart
                  ProjectwiseTimesheetData={TimesheetReportData}
                />
              </div>
            </div>

            {/* Statistics Section */}
            <div className="bg-white w-[50%] rounded-[15px] px-4 flex flex-col gap-2">
              <div className="flex flex-row justify-between my-[12px] ">
                <div className="text-dark-blue font-medium text-[22px]">
                  Statistics
                </div>
                <StatesDropDown
                  mainText="select list"
                  Data={listData}
                  onSelect={handleListDropdownChange}
                />
              </div>

              {filterStatisticsEmployeeData.map((list) => (
                <>
                  <div className="flex flex-col  gap-[15px] ">
                    <Statistics
                      heading="Leaves Taken"
                      value={list.LeavesTaken}
                      color="#ffa500"
                    />
                    <Statistics
                      heading="Efficiency"
                      value={list.Efficiency}
                      color="#4daff7"
                    />
                    <Statistics
                      heading="Task Completed"
                      value={list.CompletedTask}
                      color="#2b82b1"
                    />
                    <Statistics
                      heading="Task Pending"
                      value={list.PendingTask}
                      color="#d92626"
                    />
                  </div>
                </>
              ))}
            </div>
          </div>

          {/* Leaves Today Section */}
          <div className="w-[25%] h-[435px] ">
            <Leaves />
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeDashboard;
