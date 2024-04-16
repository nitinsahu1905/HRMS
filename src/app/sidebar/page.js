"use client";
import { AiFillHome } from "react-icons/ai";
import { RiTeamFill } from "react-icons/ri";
import { CgMail } from "react-icons/cg";
import { BsGraphUpArrow } from "react-icons/bs";
import { GrOrganization } from "react-icons/gr";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { MdAttachMoney } from "react-icons/md";
import { FaUser } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdManageAccounts } from "react-icons/md";
import { GrDocumentTime } from "react-icons/gr";
import { IoIosArrowUp } from "react-icons/io";
import { useState } from "react";
import Link from "next/link";
export default function Sidebar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const [isTimeDropdownOpen, setIsTimeDropdownOpen] = useState(false);

  const toggleTimeDropdown = () => {
    setIsTimeDropdownOpen((prevState) => !prevState);
  };

  return (
    // whole side bard box
    <div className="w-full ">
      <aside className=" w-auto h-screen fixed z-50 top-0 left-0 transition-transform -translate-x-full sm:translate-x-0 px-3 py-4  bg-[#121f47] dark:bg-[#121f47]-700 overflow-y-scroll scrollbar-hide ">
        <ul className="space-y-2 font-medium flex flex-col gap-1">
      <aside className=" w-auto h-screen fixed top-0 left-0 transition-transform -translate-x-full sm:translate-x-0 px-3 py-4  bg-[#121f47] dark:bg-[#121f47]-700 overflow-y-scroll scrollbar-hide ">
        <ul className="space-y-2 font-medium flex flex-col gap-1">
          {/* dashboard section */}
          <li>
            <Link href="/">
              <div className="flex items-center p-2 text-[#0683c6] rounded-lg dark:text-white hover:bg-gray-100    group">
              <div className="flex items-center p-2 text-[#0683c6] rounded-lg dark:text-white hover:bg-gray-100    group">
                <AiFillHome className="flex-shrink-0 text-[#cdc3c3] h-5 w-5 group-hover:text-[#121f47]" />
                <span className="ms-3 text-[#cdc3c3] group-hover:text-[#121f47]">
                  Dashboard
                </span>
              </div>
            </Link>
          </li>

          {/* inbox section */}
          <li>
            <Link href="/inbox">
              <div className="flex items-center p-2 text-[#0683c6] rounded-lg dark:text-white hover:bg-gray-100  group">
                <CgMail className="flex-shrink-0 text-[#cdc3c3] h-6 w-6 group-hover:text-[#121f47]" />
                <span className="ms-3 text-[#cdc3c3] group-hover:text-[#121f47]">
                  Inbox
                </span>
              </div>
            </Link>
          </li>

          {/* time % attend section dropdown */}
          <li>
            <div
              onClick={toggleTimeDropdown}
              className="flex items-center cursor-pointer p-2 rounded-lg dark:text-white hover:bg-gray-100  group"
            >
              <GrDocumentTime className="flex-shrink-0 text-[#cdc3c3] h-5 w-5 group-hover:text-[#121f47]" />
              <span className="ms-3 text-[#cdc3c3] group-hover:text-[#121f47]">
                Time and Attend
              </span>

              <div className="pl-3">
                <button
                  type="button"
                  className=" flex items-center px-2 text-base text-white transition duration-75  group hover:bg-gray-100 dark:text-white "
                  aria-controls="timedropdown-example"
                  data-collapse-toggle="timedropdown-example"
                >
                  {isTimeDropdownOpen ? (
                    <IoIosArrowUp className="flex-shrink-0 text-[#cdc3c3] h-4 w-4 group-hover:text-[#525768] " />
                  ) : (
                    <RiArrowDropDownLine className="flex-shrink-0 text-[#cdc3c3] h-7 w-7 group-hover:text-[#525768] " />
                  )}
                </button>
              </div>
            </div>

            <ul
              id="timedropdown-example"
              className={`py-2 space-y-2 ${isTimeDropdownOpen ? "" : "hidden"}`}
            >
              {/* timesheet section */}
              <li>
                <Link href="/timesheet">
                  {" "}
                  <div className="flex items-center w-full p-2 text-[#cdc3c3] transition duration-75 rounded-lg pl-11 group hover:bg-[#f9f9f9] group hover:text-[#121f47] dark:hover:text-[#121f47] dark:hover:bg-[#fff]">
                    Timesheet
                  </div>
                </Link>
              </li>

              {/* attendance section */}
              <li>
                <Link href="/attendance">
                  <div className="flex items-center w-full p-2 text-[#cdc3c3] transition duration-75 rounded-lg pl-11 group hover:bg-[#f9f9f9] group hover:text-[#121f47] dark:hover:text-[#121f47] dark:hover:bg-[#fff]">
                    Attendance
                  </div>
                </Link>
              </li>

              {/* leaves section */}
              <li>
                <Link href="/leaves">
                  <div className="flex items-center w-full p-2 text-[#cdc3c3] transition duration-75 rounded-lg pl-11 group hover:bg-[#f9f9f9] group hover:text-[#121f47] dark:hover:text-[#121f47] dark:hover:bg-[#fff]">
                    Leaves
                  </div>
                </Link>
              </li>
            </ul>
          </li>

          {/* my team section */}
          <li>
            <Link href="my-team">
              <div className="flex items-center p-2 text-[#0683c6] rounded-lg dark:text-white hover:bg-gray-100  group">
            <Link href="/my-team">
              <div className="flex items-center p-2 text-[#0683c6] rounded-lg dark:text-white hover:bg-gray-100  group">
                <RiTeamFill className="flex-shrink-0 text-[#cdc3c3] h-5 w-5 group-hover:text-[#121f47]" />

                <span className="ms-3 text-[#cdc3c3] group-hover:text-[#121f47]">
                  My Team
                </span>
              </div>
            </Link>
          </li>

          {/* manage employees section */}
          <li>
            <Link href="/employee-management">
              {" "}
              <div className="flex items-center p-2 text-[#0683c6] rounded-lg dark:text-white hover:bg-gray-100  group">
                <MdManageAccounts className="flex-shrink-0 text-[#cdc3c3] h-7 w-6 group-hover:text-[#121f47]" />
                <span className="ms-3 text-[#cdc3c3] group-hover:text-[#121f47]">
                  Manage Employees
                </span>
              </div>
            </Link>
          </li>

          {/* efficiency section */}
          <li>
            <div className="flex items-center p-2 text-[#0683c6] rounded-lg dark:text-white hover:bg-gray-100  group">
              <BsGraphUpArrow className="flex-shrink-0 text-[#cdc3c3] h-5 w-5 group-hover:text-[#121f47]" />
              <span className="ms-3 text-[#cdc3c3] group-hover:text-[#121f47]">
                Efficiency
              </span>
            </div>
          </li>

          {/* myorganization dropdown menu */}
          <li>
            <div
              onClick={toggleDropdown}
              className=" cursor-pointer flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-100  group"
            >
              <GrOrganization className="flex-shrink-0 text-[#cdc3c3] h-5 w-5 group-hover:text-[#121f47]" />
              <span className="ms-3 text-[#cdc3c3] group-hover:text-[#121f47]">
                My Organization
              </span>

              <div className="pl-3">
                <button
                  type="button"
                  className=" flex items-center px-2 text-base text-gray-900 transition duration-75  group hover:bg-gray-100 dark:text-white "
                  aria-controls="dropdown-example"
                  data-collapse-toggle="dropdown-example"
                >
                  {isDropdownOpen ? (
                    <IoIosArrowUp className="flex-shrink-0 text-[#cdc3c3] h-4 w-4 group-hover:text-[#525768] " />
                  ) : (
                    <RiArrowDropDownLine className="flex-shrink-0 text-[#cdc3c3] h-7 w-7 group-hover:text-[#525768] " />
                  )}
                </button>
              </div>
            </div>

            {/* organization chart section */}
            <ul
              id="dropdown-example"
              className={`py-2 space-y-2 ${isDropdownOpen ? "" : "hidden"}`}
            >
              <li>
                <Link href="/organization-chart">
                  <div className="flex items-center w-full p-2 text-[#cdc3c3] transition duration-75 rounded-lg pl-11 group hover:bg-[#f9f9f9] group hover:text-[#121f47] dark:hover:text-[#121f47] dark:hover:bg-[#fff]">
                    Organization Chart
                  </div>
                </Link>
              </li>

              {/* organation feedback section */}
              <li>
                <Link href="/organization-feedback">
                  <div className="flex items-center w-full p-2 text-[#cdc3c3] transition duration-75 rounded-lg pl-11 group hover:bg-[#f9f9f9] group hover:text-[#121f47] dark:hover:text-[#121f47] dark:hover:bg-[#fff]">
                    Organization Feedback
                  </div>
                </Link>
              </li>

              {/* organization-policies section */}
              <li>
                <Link href="/organization-policies">
                  <div className="flex items-center w-full p-2 text-[#cdc3c3] transition duration-75 rounded-lg pl-11 group hover:bg-[#f9f9f9] group hover:text-[#121f47] dark:hover:text-[#121f47] dark:hover:bg-[#fff]">
                    Organization Policies
                  </div>
                </Link>
              </li>
            </ul>
          </li>

          {/* finance section */}
          <li>
            <Link href="/my-finance">
              <div className="flex items-center p-2 text-[#0683c6] rounded-lg dark:text-white hover:bg-gray-100  group">
                <FaMoneyCheckDollar className="flex-shrink-0 text-[#cdc3c3] h-7 w-5 group-hover:text-[#121f47]" />
                <span className="ms-3 text-[#cdc3c3] group-hover:text-[#121f47]">
                  My Finance
                </span>
              </div>
            </Link>
          </li>

          {/* profile section */}
          <li>
            <Link href="/payroll">
              <div className="flex items-center p-2 text-[#0683c6] rounded-lg dark:text-white hover:bg-gray-100  group">
                <MdAttachMoney className="flex-shrink-0 text-[#cdc3c3] h-6 w-6 group-hover:text-[#121f47]" />
                <span className="ms-3 text-[#cdc3c3] group-hover:text-[#121f47]">
                  Payroll
                </span>
              </div>
            </Link>
          </li>

          {/* myprofile section */}
          <li>
            <Link href="/my-profile/profile">
              <div className="flex items-center p-2 text-[#0683c6] rounded-lg dark:text-white hover:bg-gray-100  group">
                <FaUser className="flex-shrink-0 text-[#cdc3c3] h-5 w-5 group-hover:text-[#121f47]" />
                <span className="ms-3 text-[#cdc3c3] group-hover:text-[#121f47]">
                  My Profile
                </span>
              </div>
            </Link>
          </li>
        </ul>
      </aside>
    </div>
  );
}
