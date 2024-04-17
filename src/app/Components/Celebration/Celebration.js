"use client";
import React from "react";
import Image from "next/image";

// Inside your component:
<Image src={img} alt="Emp-img" width={24} height={24} objectFit="cover" />;

const Celebration = (props) => {
  const { name, date, occasion, img } = props;
  // console.log(name,date,occasion,img);
  // console.log("hello")
  return (
    <div>
      <div className="flex flex-row justify-between bg-[#f7f7f7] border-[#0684C7] border-[1px] rounded-lg w-auto h-auto mx-4 p-2">
        <div className="flex flex-row">
          <div className="overflow-hidden h-16 w-16 rounded-full border-none ">
            {/* <img src={img} width={24} height={24} alt="Emp-img" class=" object-cover w-full h-full"/> */}
            <Image
              src={img}
              alt="Emp-img"
              width={24}
              height={24}
              objectFit="cover"
            />
          </div>
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
