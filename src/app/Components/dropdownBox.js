"use client";
import React from "react";
import { useState ,useRef,useEffect} from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const DropdownBox = ({ mainText, Data, onSelect }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

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
    <div>
      <div className="flex flex-row justify-between px-2 py-1 items-center  rounded-lg border-2 border-grey-color w-full">
        <div className="text-grey-color">{selectedOption || mainText}</div>
        <div>
          <button type="button" onClick={toggleDropdown} className="pl-8 py-1">
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
        className={`py-2 absolute  bg-white space-y-2 md:w-auto w-[82%]  ${
          isDropdownOpen ? "" : "hidden"
        }`}
        ref={dropdownRef}
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
export default DropdownBox;
