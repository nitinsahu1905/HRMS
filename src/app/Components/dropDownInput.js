"use client";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const DropdownInput = ({ mainText, Data, onSelect, onEnter }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleSelect = (option) => {
    setSelectedOption(option);
    onSelect(option);
    setInputValue(""); // Clear input value when an option is selected
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    onEnter(e.target.value);
  };

  return (
    <div>
      <div className="flex flex-row justify-between px-2 py-1 items-center rounded-lg border-2 border-grey-color w-full">
        <div className="text-grey-color">{selectedOption || mainText}</div>
        <div>
          <button type="button" onClick={toggleDropdown} className="pl-8 py-1">
            {isDropdownOpen ? (
              <IoIosArrowUp className="text-[#cdc3c3]" />
            ) : (
              <IoIosArrowDown className="text-[#cdc3c3] group-hover:text-[#525768]" />
            )}
          </button>
        </div>
      </div>
      <ul
        id="dropdown-example"
        className={`py-2 absolute bg-white space-y-2 ${
          isDropdownOpen ? "" : "hidden"
        }`}
      >
        {Data.map((field) => (
          <li key={field}>
            <div
              className="w-full cursor-pointer p-3 text-black transition duration-75 rounded-lg group hover:bg-[#f9f9f9] group hover:text-[#121f47] dark:hover:bg-primary-blue"
              onClick={() => handleSelect(field)}
            >
              {field}
            </div>
            <div>
              {selectedOption === field && (
                <input
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  className="w-[80%] ml-2 px-2 py-1 border rounded-lg border-secondary-blue outline-none"
                  placeholder="Enter value"
                />
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownInput;
