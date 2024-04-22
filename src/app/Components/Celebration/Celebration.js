"use client";
import React from "react";
import Image from "next/image";

const Celebration = (props) => {
  const { name, date, occasion, img } = props;
  return (
    <div>
      <div className="flex flex-row justify-between bg-[#f7f7f7] border-[#0684C7] border-[1px] rounded-lg w-auto h-auto mx-4 p-2">
        <div className="flex flex-row">
          {/* image section */}
          <div className="overflow-hidden h-16 w-16 rounded-full border-none">
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
          {/* <div className="overflow-hidden h-16 w-16 rounded-full border-none ">
            <img
              src={img}
              width={24}
              height={24}
              alt="Emp-img"
              className=" object-cover w-full h-full"
            />
          </div> */}

          <div className="flex flex-col mx-2">
            <div className="text-black font-medium text-xl">{name}</div>
            <div className="text-black font-normal pt-2 text-xs">
              {occasion}
            </div>
          </div>
        </div>
        <div className="text-[#0684C7] font-medium flex p-5">{date}</div>
      </div>
    </div>
  );
};

export default Celebration;
