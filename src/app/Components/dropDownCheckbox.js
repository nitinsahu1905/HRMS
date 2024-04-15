"use client"
import React, { useState } from 'react';
import { IoIosArrowUp } from 'react-icons/io';
import { RiArrowDropDownLine } from 'react-icons/ri';

const DropdownCheckBox = ({ mainText, Data, onSelect }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState([]);

    const toggleDropdown = () => {
        setIsDropdownOpen(prevState => !prevState);
    };

    const handleSelect = (option) => {
        const index = selectedOptions.indexOf(option);
        let newSelectedOptions;

        if (index === -1) {
            newSelectedOptions = [...selectedOptions, option];
        } else {
            newSelectedOptions = selectedOptions.filter(item => item !== option);
        }

        setSelectedOptions(newSelectedOptions);
        onSelect(newSelectedOptions);
    };

    return (
        <div>
            <div className="flex flex-row justify-between p-1 pt-2 rounded-lg border-2 border-grey-color w-full">
                <div className="text-grey-color">{mainText}</div>
                <div>
                    <button
                        type="button"
                        className='pl-8 '
                        onClick={toggleDropdown}
                    >
                        {isDropdownOpen ? <IoIosArrowUp className="text-[#cdc3c3] h-4 w-4" /> : <RiArrowDropDownLine className="text-[#cdc3c3] h-7 w-7 group-hover:text-[#525768]" />}
                    </button>
                </div>
            </div>
            <ul className={`py-2 absolute bg-white space-y-2 ${isDropdownOpen ? '' : 'hidden'}`}>
                {Data.map((option, index) => (
                    <li key={index}>
                        <label className="flex items-center cursor-pointer gap-2">
                            <input
                                type="checkbox"
                                value={option}
                                checked={selectedOptions.includes(option)}
                                onChange={() => handleSelect(option)}
                                className="mr-2"
                            />
                            {option}
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DropdownCheckBox;
