"use client";
import React from "react";
import { CelebrationData } from "../Constants/CelebrationData";
import { NewJoiningsData } from "../Constants/NewJoiningsData";
import Image from "next/image";
import ArrivalReportChart from "../Components/ArrivalReportChart/ArrivalReportChart";
// import {img1} from '../../../public/user-img.jpeg'

const EmployeeDashboard = () => {
  return (
    <>
      <div className="flex md:flex-row flex-col  gap-[25px]  ">
        {/* New Joinings */}
        <div className="w-full flex flex-col gap-[10px] lg:w-1/3 bg-white rounded-[15px] h-auto pb-[10px] ">
          <div className=" my-[12px] text-dark-blue font-medium text-[22px] px-3   ">
            New Joining&apos;s
          </div>
          <div className="flex flex-col px-[25px] h-[360px] overflow-y-scroll scrollbar-hide ">
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
                    <div className="text-[#0683C6] text-[20px] ">
                      {newJoinee.name}
                    </div>
                    <div className="text-grey-color text-[14px] ">
                      {newJoinee.designation}
                    </div>
                  </div>
                  {/* lower details of email */}
                  <div className="flex flex-col gap-[5px] ">
                    <div className="text-dark-blue text-[14px] ">Email</div>
                    <div className="text-grey-color text-[14px] ">
                      {newJoinee.email}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Celebrations */}
        <div className="lg:w-1/3  bg-white rounded-[15px] h-auto  flex flex-col gap-[10px] pb-2">
          <div className=" my-[12px] text-dark-blue font-medium text-[22px] px-3">
            Upcoming Celebration
          </div>
          <div className="flex flex-col gap-1 h-[332px] overflow-y-scroll scrollbar-hide  ">
            {CelebrationData.map((data) => (
              <div key={data.id} className="w-full">
                {/* One Celebration */}
                <div className="flex flex-row justify-between rounded-lg w-auto h-auto mx-2 p-2">
                  {/* Section for Image and text */}
                  <div className="flex flex-row w-full ">
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
                      <div className="text-dark-blue font-medium lg:text-xl text-sm ">
                        {data.name}
                      </div>
                      <div className="text-dark-blue font-normal  lg:text-sm text-xs">
                        {data.occasion}
                      </div>
                    </div>
                  </div>
                  {/* Celebration Date Section */}
                  <div className="text-[#0684C7] font-medium flex  items-center px-2 py-1 text-sm sm:text-base ">
                    {data.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Arrival Report */}
        <div className="lg:w-1/3  bg-white rounded-[15px] h-auto  flex flex-col pb-2">
          <div className=" mt-3 text-dark-blue font-medium text-[22px] px-3   ">
            Arrival Report
          </div>
          <div className="flex flex-col gap-[10px] items-center ">
            <ArrivalReportChart />
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeDashboard;
