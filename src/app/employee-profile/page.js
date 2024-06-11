"use client";
import Image from "next/image";
import { TbCalendarStats } from "react-icons/tb";
import { BsGraphUpArrow } from "react-icons/bs";
import { skills } from "../Constants/EmployeeProfileData";
import { MdEdit } from "react-icons/md";
import { PiCopySimpleThin } from "react-icons/pi";
import { useState } from "react";

const EmployeeProfile = () => {
  const [copied, setCopied] = useState(false);
  const email = "akshat.lakhara@metadologie.com";
  // fucntion to handle the copying of email
  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };
  return (
    <div className="w-[100%] bg-[#F8F6F6] h-screen flex">
      {/* left box */}
      <div className="h-auto w-[30%] bg-white flex flex-col items-center px-[20px] py-[50px] gap-[24px]">
        {/* box for the image */}
        <div className=" relative h-[150px] w-[150px] p-[5px] bg-white rounded-[100px] border-[#2F2EA6] border-[1px]">
          {/* edit icon for the image */}
          <span className="absolute top-2 right-2 bg-[#2F2EA6] text-white p-[4px] rounded-[100px]">
            <MdEdit />
          </span>

          {/* profile image */}
          <Image
            className="h-[100%] w-[100%] rounded-[100px]"
            src={
              "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=800"
            }
            width={50}
            height={50}
          />
        </div>

        {/* box for the name details */}
        <div className="relative flex flex-col items-center">
          <span className="text-[#2F2EA6] text-[24px] font-[600]">{email}</span>
          <span className="text-[#808080] text-[18px]">

            {/* notified after copying the mail */}
            {copied && (
              <span className="absolute top-0 right-0 bg-gray-800 text-white text-sm py-1 px-2 rounded">
                Copied
              </span>
            )}

            <span className="flex items-center justify-center gap-[5px]">
              akshat.lakhara@metadologie.com
              <span onClick={copyToClipboard} className="cursor-pointer">
                <PiCopySimpleThin style={{ strokeWidth: "3" }} />
              </span>
            </span>
          </span>
          <span className="text-black text-[20px] font-[500]">Trainee</span>
        </div>

        {/* div for the Bio */}
        <p className="flex justify-center items-center text-[#808080]">
          Enthusiastic Salesforce trainee with a strong foundation in CRM
          principles, eager to leverage Salesforce skills to optimize business
          processes and drive customer success.
        </p>

        {/* div for the leave and efficiency */}
        <div className="w-[100%] h-[80] flex items-center justify-center px-[2x] py-[10px] gap-[35px]">
          {/* Card for Earned Leaves */}
          <div className="bg-white shadow-[2px_2px_4px_0_rgba(0,0,0,0.1)]  rounded-[15px] h-full">
            <div className="flex flex-col justify-between  w-[192px] h-[175px] p-[20px]   ">
              <div className="p-[10px] bg-[#f3e6e6] rounded-full w-fit text-[#00C308] text-[24px]  ">
                <TbCalendarStats />
              </div>
              <div className="flex flex-col gap-0  ">
                <div className="text-dark-blue font-semibold text-[24px] ">
                  5.5
                </div>
                <div className="text-grey-color font-normal ">
                  Earned Leaves
                </div>
              </div>
            </div>
          </div>

          {/* Card for Efficiency */}
          <div className="bg-white  shadow-[2px_2px_4px_0_rgba(0,0,0,0.1)] rounded-[15px] h-full ">
            <div className="flex flex-col justify-between w-[192px] h-[175px] p-[20px]   ">
              <div className="p-[10px] bg-[#f3e6e6] rounded-full w-fit text-[#140B83] text-[24px]  ">
                <BsGraphUpArrow />
              </div>
              <div className="flex flex-col gap-0  ">
                <div className="text-dark-blue font-semibold text-[24px] ">
                  80%
                </div>
                <div className="text-grey-color font-normal ">Efficiency</div>
              </div>
            </div>
          </div>
        </div>

        {/* box for the list of skills */}
        <div className="flex flex-col h-auto w-[100%]  gap-[10px]">
          <span className="text-[22px] font-[600]">Skill:</span>
          <div className="flex flex-wrap gap-2 justify-center items-center">
            {skills.map((skill) => (
              <span className="border-[#808080] border-[1px] bg-[#F7F8FC] h-fit w-fit p-2 rounded-[18px]">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* right box */}
      <div className="bg-sky-300 h-[100%] w-[70%]"></div>
    </div>
  );
};

export default EmployeeProfile;
