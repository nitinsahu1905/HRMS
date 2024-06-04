import React from "react";
import Image from "next/image";
import Calendar from "../Components/Calendar/Calendar";

const EmployeeAttendance = () => {
  return (
    <div className="p-4 flex flex-col gap-4">
      {/* heading */}
      <div className="flex flex-col gap-[2px]">
        <div className="text-dark-blue text-[20px] font-semibold">
          Attendance
        </div>

        <div className="flex flex-row gap-2">
          <div className="text-dark-blue text-[15px] font-medium">
            Time & Attend
          </div>
          <div className="text-dark-blue">/</div>
          <div className="text-secondary-blue text-[15px] font-medium">
            Attendnace
          </div>
        </div>
      </div>

      <div className="flex flex-row gap-1 w-full bg-white rounded-[15px]">
        {/* Attendance history title and states of wfh,holiday,request */}
        <div className="flex flex-col w-[40%] p-10 gap-10">
          <div className="flex flex-col gap-1">
            <div className="font-medium text-[20px] text-secondary-blue">
              Attendance History
            </div>
            <div className="flex flex-row  gap-2">
              <div className="h-4 w-4">
                <Image
                  src="/Calendar.jpg"
                  alt="Calendar"
                  width={16}
                  height={16}
                />{" "}
                {/* Add alt prop and specify width and height */}
              </div>
              <div className="font-medium text-grey-color text-xs">
                Wednesday-May 22,2024
              </div>
            </div>
          </div>

          <div className="border-[2px] border-grey-500   rounded-[10px] w-full flex flex-row items-center">
            <div className="flex flex-row justify-between border-r-2 w-[25%]">
              <div className="flex flex-row gap-1 px-3 py-2 items-center">
                <div className="h-2 w-2 rounded-full bg-[#121F47] "></div>
                <div className=" text-xs text-left ">WFH</div>
              </div>
              <div className="flex items-center pr-2 text-grey-color font-normal text-[14px]">
                2
              </div>
            </div>

            <div className="flex justify-between border-r-2 w-[30%]">
              <div className="flex flex-row gap-1 px-3 py-2 items-center">
                <div className="h-2 w-2 rounded-full bg-[#FFA500] "></div>
                <div className=" text-xs text-left ">Holiday</div>
              </div>
              <div className="flex items-center pr-2 text-grey-color font-normal text-[14px]">
                4
              </div>
            </div>

            <div className="flex flex-row justify-between w-[45%]">
              <div className="flex flex-row gap-1 px-3 py-2 items-center">
                <div className="h-2 w-2 rounded-full bg-[#FF0000] "></div>
                <div className=" text-xs text-left "> Request</div>
              </div>
              <div className="flex items-center pr-2 text-grey-color font-normal text-[14px]">
                2
              </div>
            </div>
          </div>
        </div>

        {/* info of user */}
        <div className="flex flex-row w-[30%] p-10 gap-2">
          <div className="rounded-full h-12 w-12 bg-slate-600">
            <Image
              src="/user-img.jpeg"
              alt="User Profile"
              width={48}
              height={48}
              className="h-full w-full object-cover rounded-full"
            />{" "}
            {/* Add alt prop and specify width and height */}
          </div>
          <div className="flex flex-col gap-[2px]">
            <div className="font-medium text-xl">Nitin Sahu</div>
            <div className="font-medium text-grey-color text-xs">
              Frontend Developer
            </div>
          </div>
        </div>

        {/* States includes avg punch in/out ,present days and absent days */}
        <div className="flex flex-col w-[30%] pt-8 gap-8">
          <div className="flex flex-row w-full ">
            <div className="flex flex-col gap-[1px] w-[50%]">
              <div className="text-[12px] font-medium text-grey-color">
                Present Days
              </div>
              <div className="text-[14px] font-normal">25 Days</div>
            </div>
            <div className="flex flex-col gap-[1px] w-[50%]">
              <div className="text-[12px] font-medium text-grey-color">
                Absent Days
              </div>
              <div className="text-[14px] font-normal">15 Days</div>
            </div>
          </div>

          <div className="flex flex-row w-full ">
            <div className="flex flex-col gap-[1px] w-[50%]">
              <div className="text-[12px] font-medium text-grey-color">
                Avg Punch In
              </div>
              <div className="text-[14px] font-normal">10:00 AM</div>
            </div>
            <div className="flex flex-col gap-[1px] w-[50%]">
              <div className="text-[12px] font-medium text-grey-color">
                Avg Punch Out
              </div>
              <div className="text-[14px] font-normal">19:15 PM</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1 w-full bg-white rounded-[15px] p-4">
        <div className="text-[#121f47] font-medium text-[20px]">
          Monthly Attendance
        </div>
        <div className="w-full">
          <Calendar />
        </div>
      </div>
    </div>
  );
};

export default EmployeeAttendance;
