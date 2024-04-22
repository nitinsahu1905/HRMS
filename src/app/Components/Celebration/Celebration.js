"use client";
import React from "react";
import Image from "next/image";

const Celebration = (props) => {
  const { name, date, occasion, img } = props;
  return (
    // Row for One Employee Celebration 
    <div className="w-full">
      {/* Blue Border Area for One Celebration */}
      <div className="flex flex-row justify-between bg-[#f7f7f7] border-[#0684C7] border-[1px] rounded-lg w-auto h-auto mx-4 p-2">
        {/* Section for Image and text */}
        <div className="flex flex-row">
          {/* image section */}
          <div className="overflow-hidden lg:h-16 lg:w-16 h-9 w-9  rounded-full border-none">
            <Image
              src={img}
              width={24}
              height={24}
              alt="Emp-img"
              // objectFit="cover"
              quality={100}
              className=" object-cover w-full h-full"
            />
          </div>
          

          <div className="flex flex-col lg:mx-2 mx-1 lg:gap-2 gap-1 ">
            <div className="text-dark-blue font-medium lg:text-xl text-sm">{name}</div>
            <div className="text-dark-blue font-normal  lg:text-sm text-xs">
              {occasion}
            </div>
          </div>
        </div>
        {/* Celebration Date Section */}
        <div className="text-[#0684C7] font-medium flex  items-center px-2 py-1 text-sm sm:text-base ">{date}</div>
      </div>
    </div>
  );
};

export default Celebration;
