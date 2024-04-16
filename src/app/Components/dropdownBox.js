"use client";
import React from "react";
import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";

const dropdownBox = ({ mainText, Data, onSelect }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelect = (option) => {
    setSelectedOption(option);
    onSelect(option);
    setIsDropdownOpen((prevState) => !prevState);
  };
  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };
  return (
    <div>
      <div className="flex flex-row justify-between p-1 pt-2 rounded-lg border-2 border-grey-color w-full">
        <div className="text-grey-color">{selectedOption || mainText}</div>
        <div>
          <button type="button" onClick={toggleDropdown} className="pl-8 ">
            {isDropdownOpen ? (
              <IoIosArrowUp className=" text-[#cdc3c3] h-4 w-4 " />
            ) : (
              <RiArrowDropDownLine className="text-[#cdc3c3] h-7 w-7 group-hover:text-[#525768] " />
            )}
          </button>
        </div>
      </div>
      <ul
        id="dropdown-example"
        className={`py-2 absolute  bg-white space-y-2 ${
          isDropdownOpen ? "" : "hidden"
        }`}
      >
        {Data.map((field) => (
          <li key={field}>
            <div
              className="w-full cursor-pointer p-3 text-black transition duration-75 rounded-lg  group hover:bg-[#f9f9f9] group hover:text-[#121f47]  dark:hover:bg-primary-blue"
              onClick={() => handleSelect(field)}
            >
              {field}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default dropdownBox;
