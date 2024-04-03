"use client"
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
export default function Sidebar() {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(prevState => !prevState);
    };

    const [isTimeDropdownOpen, setIsTimeDropdownOpen] = useState(false);

    const toggleTimeDropdown = () => {
        setIsTimeDropdownOpen(prevState => !prevState);
    };
    
    return (
        <div>
        <aside className="fixed top-0 left-0  w-auto h-screen transition-transform -translate-x-full sm:translate-x-0">
        <div class="h-full px-3 py-4 overflow-y-auto bg-[#121f47] dark:bg-[#121f47]-700">
           <ul class="space-y-2 font-medium flex flex-col gap-1">
              <li>
                 <a href="#" class="flex items-center p-2 text-[#0683c6] rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                 < AiFillHome className="flex-shrink-0 text-[#cdc3c3] h-5 w-5 group-hover:text-[#121f47]"/>
                    <span class="ms-3 text-[#cdc3c3] group-hover:text-[#121f47]">Dashboard</span>
                 </a>
              </li>
              <li>
                 <a href="#" class="flex items-center p-2 text-[#0683c6] rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                 < CgMail className="flex-shrink-0 text-[#cdc3c3] h-6 w-6 group-hover:text-[#121f47]"/>
                    <span class="ms-3 text-[#cdc3c3] group-hover:text-[#121f47]">Inbox</span>
                 </a>
              </li>
              <li>
                 <a href="#" class="flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                 < GrDocumentTime className="flex-shrink-0 text-[#cdc3c3] h-5 w-5 group-hover:text-[#121f47]"/>
                    <span class="ms-3 text-[#cdc3c3] group-hover:text-[#121f47]">Time and Attend</span>
                    <div className="pl-3">
                    <button
                type="button"
                onClick={toggleTimeDropdown}
                className=" flex items-center px-2 text-base text-gray-900 transition duration-75  group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                aria-controls="timedropdown-example"
                data-collapse-toggle="timedropdown-example"
                
            >
            {isTimeDropdownOpen?<IoIosArrowUp className="flex-shrink-0 text-[#cdc3c3] h-4 w-4 group-hover:text-[#525768] "/>:<RiArrowDropDownLine className="flex-shrink-0 text-[#cdc3c3] h-7 w-7 group-hover:text-[#525768] "/>}
            </button></div>
            </a>
            <ul id="timedropdown-example" className={`py-2 space-y-2 ${isTimeDropdownOpen ? '' : 'hidden'}`}>
                <li>
                    <a href="#" className="flex items-center w-full p-2 text-[#cdc3c3] transition duration-75 rounded-lg pl-11 group hover:bg-[#f9f9f9] group hover:text-[#121f47] dark:text-[#121f47] dark:hover:bg-[#121f47]">Timesheet</a>
                </li>
                <li>
                    <a href="#" className="flex items-center w-full p-2 text-[#cdc3c3] transition duration-75 rounded-lg pl-11 group hover:bg-[#f9f9f9] group hover:text-[#121f47] dark:text-[#121f47] dark:hover:bg-[#121f47]">Attendance</a>
                </li>
                <li>
                    <a href="#" className="flex items-center w-full p-2 text-[#cdc3c3] transition duration-75 rounded-lg pl-11 group hover:bg-[#f9f9f9] group hover:text-[#121f47] dark:text-[#121f47] dark:hover:bg-[#121f47]">Leaves</a>
                </li>
            </ul>

              </li>
              <li>
                 <a href="#" class="flex items-center p-2 text-[#0683c6] rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                 < RiTeamFill className="flex-shrink-0 text-[#cdc3c3] h-5 w-5 group-hover:text-[#121f47]"/>
                    <span class="ms-3 text-[#cdc3c3] group-hover:text-[#121f47]">My Team</span>
                 </a>
              </li>
              <li>
                 <a href="#" class="flex items-center p-2 text-[#0683c6] rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                 <  MdManageAccounts className="flex-shrink-0 text-[#cdc3c3] h-7 w-6 group-hover:text-[#121f47]"/>
                    <span class="ms-3 text-[#cdc3c3] group-hover:text-[#121f47]">Manage Employees</span>
                 </a>
              </li>
              <li>
                 <a href="#" class="flex items-center p-2 text-[#0683c6] rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                 <  BsGraphUpArrow className="flex-shrink-0 text-[#cdc3c3] h-5 w-5 group-hover:text-[#121f47]"/>
                    <span class="ms-3 text-[#cdc3c3] group-hover:text-[#121f47]">Efficiency</span>
                 </a>
              </li>
              <li>
                 <a href="#" class="flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                 < GrOrganization className="flex-shrink-0 text-[#cdc3c3] h-5 w-5 group-hover:text-[#121f47]"/>
                    <span class="ms-3 text-[#cdc3c3] group-hover:text-[#121f47]">My Organization</span>
                     <div className="pl-3">
                    <button
                type="button"
                onClick={toggleDropdown}
                className=" flex items-center px-2 text-base text-gray-900 transition duration-75  group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
                
            >
                {isDropdownOpen?<IoIosArrowUp className="flex-shrink-0 text-[#cdc3c3] h-4 w-4 group-hover:text-[#525768] "/>:<RiArrowDropDownLine className="flex-shrink-0 text-[#cdc3c3] h-7 w-7 group-hover:text-[#525768] "/>}
            </button>
            </div>
            </a>
            <ul id="dropdown-example" className={`py-2 space-y-2 ${isDropdownOpen ? '' : 'hidden'}`}>
                <li>
                    <a href="#" className="flex items-center w-full p-2 text-[#cdc3c3] transition duration-75 rounded-lg pl-11 group hover:bg-[#f9f9f9] group hover:text-[#121f47] dark:text-[#121f47] dark:hover:bg-[#121f47]">Organization Chart</a>
                </li>
                <li>
                    <a href="#" className="flex items-center w-full p-2 text-[#cdc3c3] transition duration-75 rounded-lg pl-11 group hover:bg-[#f9f9f9] group hover:text-[#121f47] dark:text-[#121f47] dark:hover:bg-[#121f47]">Organization Feedback</a>
                </li>
                <li>
                    <a href="#" className="flex items-center w-full p-2 text-[#cdc3c3] transition duration-75 rounded-lg pl-11 group hover:bg-[#f9f9f9] group hover:text-[#121f47] dark:text-[#121f47] dark:hover:bg-[#121f47]">Organization Policies</a>
                </li>
            </ul>


                
              </li>
              <li>
                 <a href="#" class="flex items-center p-2 text-[#0683c6] rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                 < FaMoneyCheckDollar className="flex-shrink-0 text-[#cdc3c3] h-7 w-5 group-hover:text-[#121f47]"/>
                    <span class="ms-3 text-[#cdc3c3] group-hover:text-[#121f47]">My Finance</span>
                 </a>
              </li>
              <li>
                 <a href="#" class="flex items-center p-2 text-[#0683c6] rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                 < MdAttachMoney className="flex-shrink-0 text-[#cdc3c3] h-6 w-6 group-hover:text-[#121f47]"/>
                    <span class="ms-3 text-[#cdc3c3] group-hover:text-[#121f47]">Payroll</span>
                 </a>
              </li>
              <li>
                 <a href="#" class="flex items-center p-2 text-[#0683c6] rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                 < FaUser className="flex-shrink-0 text-[#cdc3c3] h-5 w-5 group-hover:text-[#121f47]"/>
                    <span class="ms-3 text-[#cdc3c3] group-hover:text-[#121f47]">My Profile</span>
                 </a>
              </li>
           
           </ul>
        </div>
     </aside>
     </div>
    )
}