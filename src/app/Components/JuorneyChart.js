import React from "react";

const JourneyChart = ({status,date,time,name}) => {
  return (

    <div className="px-4 flex flex-row ">
    <div className="h-[50px] bg-[#0683c6] w-[2px] rounded-xl relative ">
        <div className="absolute h-3 w-3 rounded-full bg-[#0683c6]  left-[-4px]"></div>
    </div>
<div className="flex flex-col">
        <div className="pl-4 text-[15px] font-normal">{status}</div>
        <div className="pl-4 flex flex-row gap-14    text-grey-color text-xs ">
            <div>{date} </div>
            <span>|</span>
            <div>{time}</div>
            <span>|</span>
            <div>By {name}</div>

        </div>

        </div>

    </div>









   

    )
};

export default JourneyChart;
