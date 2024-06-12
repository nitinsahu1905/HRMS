"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import Image from "next/image";
import AdminOptions from "./AdminOptions";
import EmployeeOptions from "./EmployeeOptions";

export default function Sidebar({
  collapse,
  setCollapse,
  mobileCollapse,
  setMobileSidebarCollapse
}) {
  const [isDropdownOpen,setIsDropdownOpen] = useState(false)
  const [overflowDropdownOnCollapse, setOverflowDropdownOnCollapse] =
    useState(false);

  const [role, setRole] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (sessionStorage.getItem("admin")) {
        setRole("admin");
      }
      if (sessionStorage.getItem("employee")) {
        setRole("employee");
      }
    }
  }, []);

  const clickLink = () => {
    setMobileSidebarCollapse(true);
  };

  return (
    // whole sidebar box
    <div className="">
      {/* <div className="absolute top-[10px] right-[10px] z-50"></div> */}

      {/* Icon for Sidebar Collapsing */}
      <div
        className={`flex items-center justify-center p-0 text-[20px] fixed z-50 ${
          collapse ? "left-[52px]" : "left-[252px]"
        } top-[25px] md:block hidden `}
      >
        {collapse ? (
          <div
            className="w-fit text-sky-color bg-[#cdc3c3]  flex items-center justify-center rounded-full cursor-pointer"
            onClick={() => setCollapse(false)}
          >
            <IoIosArrowDroprightCircle />
          </div>
        ) : (
          <div
            className="w-fit text-sky-color bg-[#cdc3c3] m-0 flex items-center justify-center rounded-full cursor-pointer"
            onClick={() => {
              setCollapse(true);
              setIsDropdownOpen(false);
              setIsTimeDropdownOpen(false);
            }}
          >
            <IoIosArrowDropleftCircle />
          </div>
        )}
      </div>

      {/* Close button for Closing Sidebar in mobile view */}
      <div
        className={`flex items-center justify-center p-0 text-[20px] text-white fixed z-50 top-1 right-1 md:hidden `}
      >
        <IoCloseSharp onClick={() => setMobileSidebarCollapse(true)} />
      </div>

      <aside
        className={` ${collapse ? "md:w-[62px] " : "md:w-[262px] "} w-full
                     ${
                       overflowDropdownOnCollapse
                         ? "overflow-y-visible"
                         : "overflow-y-scroll"
                     }
          h-screen overflow-x-visible fixed top-0 left-0 z-40   px-3 pb-4 md:pt-4 pt-8  bg-[#121f47] dark:bg-[#121f47]-700   scrollbar-hide `}
      >
        <div className="relative">
          {/* Logo of Company */}
          <div className="flex items-center px-[4px] py-[6px] mb-[10px] rounded-lg bg-[#f3f4f6] h-auto">
            <Image
              src="/Metadologie_Logo.png"
              className="flex-shrink-0 bg-none text-[#cdc3c3]  group-hover:text-[#121f47] w-[30px] h-6  bg-[#f3f4f6]"
              width={30}
              height={30}
              alt="Metadologie Logo"
            />
            {collapse ? null : (
              <span className="ms-2 w-auto h-auto text-[#cdc3c3] group-hover:text-[#121f47] ">
                <Image
                  src="/Metadologie_text.png"
                  width={20}
                  height={24}
                  className="w-32 h-6"
                  alt="Metadologie Logo Text"
                />
              </span>
            )}
          </div>

          {/*  */}
          {role === "admin" && (
            <AdminOptions
              clickLink={clickLink}
              setOverflowDropdownOnCollapse={setOverflowDropdownOnCollapse}
              collapse={collapse}
            />
          )}
          {role === "employee" && (
            <EmployeeOptions
              clickLink={clickLink}
              setOverflowDropdownOnCollapse={setOverflowDropdownOnCollapse}
              collapse={collapse}
            />
          )}
        </div>
      </aside>
    </div>
  );
}
