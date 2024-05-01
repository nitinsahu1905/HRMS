import React from "react";
import Image from "next/image";
import gesture1 from "../../../public/sun-1.png"

const page = () => {
  return (
    <div className="bg-sky-color w-full h-auto flex flex-col gap-5 p-[20px]">
        {/* Page Heading */}
      <div>
        <h1 className="text-dark-blue text-[24px] font-bold">Employee Tracker</h1>
      </div>
      {/* Wishes */}
      <div className="flex flex-row gap-[20px]  ">
        <div className="w-[76px] h-[74px] ">
            <Image src={gesture1} alt="Good Morning" />
        </div>
        <div className="flex flex-col gap-[5px]  ">
            <div className="text-dark-blue text-[24px] font-medium ">Hello!</div>
            <div className="text-grey-color  ">Let's brighten some smiles today</div>
        </div>

      </div>
      {/* Today's Update section of Attendence */}
      <div className="flex flex-col gap-[10px] ">
        <div className="text-dark-blue text-[20px] font-medium ">Today's Update</div>
        <div className="flex flex-row gap-[20px] ">
            {/* Present */}
            <div className="flex flex-col gap-[5px] w-[233px] bg-white rounded-[10px] px-[15px] py-[10px] border-r-[15px] border-[#cdf6cd] shadow-lg ">
                <div className="text-[#008000] text-[20px]   ">Present</div>
                <div className="text-grey-color text-[36px]  ">35</div>
            </div>
            {/* Absent */}
            <div className="flex flex-col gap-[5px] w-[233px] bg-white rounded-[10px] px-[15px] py-[10px] border-r-[15px] border-[#FCABAB] shadow-lg ">
                <div className="text-[#A90303] text-[20px]   ">Absent</div>
                <div className="text-grey-color text-[36px]  ">08</div>
            </div>
            {/* WFH */}
            <div className="flex flex-col gap-[5px] w-[233px] bg-white rounded-[10px] px-[15px] py-[10px] border-r-[15px] border-[#DAF2FF] shadow-lg ">
                <div className="text-[#0683C6] text-[20px]   ">Work From Home</div>
                <div className="text-grey-color text-[36px]  ">02</div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default page;
