"use client";
import React from "react";
import { useState ,useRef,useEffect} from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
 
const StatesDropDown = ({ mainText, Data, onSelect }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(Data[0]);
 
  const dropdownRef = useRef(null);
 
  const handleSelect = (option) => {
    setSelectedOption(option);
    onSelect(option);
    // setIsDropdownOpen((prevState) => !prevState);
    setIsDropdownOpen(false)
  };
  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };
 
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
   
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);
 
  return (
    <div className="relative">
      <div className="flex flex-row justify-between px-1 py-0 items-center  rounded-lg border-[1px] border-grey-color w-full">
        <div className="text-grey-color text-xs">{selectedOption || mainText}</div>
        <div>
          <button type="button" onClick={toggleDropdown} className="pl-4 py-1">
            {isDropdownOpen ? (
              <IoIosArrowUp className=" text-[#cdc3c3]  " />
            ) : (
              <IoIosArrowDown className="text-[#cdc3c3]  group-hover:text-[#525768] " />
            )}
          </button>
        </div>
      </div>
      <ul
        id="dropdown-example"
        className={`py-2 absolute z-50 right-0  bg-[#f7f7f7] rounded-xl space-y-1 lg:w-auto md:w-auto w-[82%]  ${
          isDropdownOpen ? "" : "hidden"
        }`}
        ref={dropdownRef}
      >
        {Data.map((field) => (
          <li key={field}>
            <div
              className="w-auto text-xs cursor-pointer px-3 py-2 text-black transition duration-75 rounded-lg  group hover:bg-[#f9f9f9] group hover:text-[#121f47]  dark:hover:bg-primary-blue"
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
export default StatesDropDown;
 