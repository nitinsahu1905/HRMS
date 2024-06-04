import Image from "next/image";
import React from "react";
// import { GrOrganization } from "react-icons/gr";

const EmployeeFeedbackSection = ({ heading, value, img }) => {
  return (
    <div className="w-[50%] flex flex-row">
      <div className="p-4 h-14 w-14">
        <Image
          src={img}
          alt="Description of the image"
          width={56}
          height={56}
          className="text-[#121f47]"
        />{" "}
        {/* Add alt prop and specify width and height */}
      </div>
      <div className="flex flex-col  p-2">
        <div className="text-black font-medium text-[12px] gap-[1px] mb-1 ">
          {heading}
        </div>
        <div className="text-[#808080] font-normal text-[12px]  ">{value}</div>
        <div className="w-full h-[1px] bg-[#808080]"></div>
      </div>
    </div>
  );
};

export default EmployeeFeedbackSection;
