"use client";
import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

const CreateNewTimesheet = ({ onClose }) => {
  const [mobileNumber, setMobileNumber] = useState('');

  const handleMobileChange = (e) =>{
    const InputValue = e.target.value;

    if (/^\d*$/.test(InputValue)) {
      setMobileNumber(InputValue);
    }

  }

  const submitHandler = () =>{
    onClose();
  }

  return (
    // <div className='absolute bg-black/20'>EditEmployeeProfile</div>
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-[999]">
      <div className="flex flex-col gap-[40px] lg:w-[45%]  bg-[#eeeeee] p-[20px] rounded-[10px] shadow-lg h-fit overflow-y-scroll scrollbar-hide relative my-[20px] ">
        
        {/* Heading of New Timesheet */}
        <div className="flex flex-col justify-center items-center ">
          <div className="flex justify-center items-center text-[28px] font-semibold ">
            New Timesheet
          </div>
          <div className="h-[3px] w-[100px] bg-white "></div>
        </div>

        {/* Section for All Input Fields */}
        <div className="flex flex-col px-[10px] py-[20px] gap-[15px]  ">
            {/* Row 1 for Name */}
            <div className="flex flex-row gap-[15px]  ">
                {/* Start Date */}
                <div className="flex flex-col gap-[10px] w-full ">
                  <label className="text-primary-blue  " >Start Date</label>
                  <input type="date" className="text-dark-blue px-[10px] py-[10px] rounded-[10px] focus:outline-none  h-[44px] " />
                </div>
                {/* Status */}
                <div className="flex flex-col gap-[10px] w-full ">
                  <label className="text-primary-blue  " >Status</label>
                  <input type="date" value="Draft" className="text-dark-blue px-[10px] py-[10px] rounded-[10px] focus:outline-none  h-[44px] " />
                </div>
                
            </div>
            {/* Row 2 for Gender DOB Blood Group */}
            <div className="flex flex-row gap-[15px] w-full ">
                {/* Reporting Manager */}
                <div className="flex flex-col gap-[10px] w-full ">
                  <label className="text-primary-blue  " >Reporting Manager</label>
                  <input type="text" placeholder="Enter Reporting Manager" className="text-dark-blue px-[10px] py-[10px] rounded-[10px] focus:outline-none  " maxLength={25} />
                </div>
                {/* Owner Name */}
                <div className="flex flex-col gap-[10px] w-full ">
                  <label className="text-primary-blue  " >Owner Name</label>
                  <input type="text" value="Lakshya Agarwal" className="text-dark-blue px-[10px] py-[10px] rounded-[10px] focus:outline-none  " maxLength={25} />
                </div>
            </div>
            
            {/* Row 4 for Reporting Manager */}
           
            {/* Save button */}
            <div className="flex gap-[20px] justify-center items-center mt-[30px] ">
              <button type="cancel" onClick={onClose} className="text-primary-blue bg-white border border-primary-blue rounded-[10px] px-[20px] py-[10px] font-medium   " >Cancel</button>
              <button type="submit" onClick={submitHandler} className="text-white bg-primary-blue border border-primary-blue rounded-[10px] px-[20px] py-[10px] font-medium   " >Save</button>
              <button type="submit" className="text-primary-blue bg-white border border-primary-blue rounded-[10px] px-[20px] py-[10px] font-medium   " >Save & New</button>
            </div>
        </div>

        <button
          onClick={onClose}
          className="absolute top-1.5 right-1.5  text-dark-blue text-[20px]   hover:text-gray-600"
        >
          <IoCloseSharp />
        </button>
      </div>
    </div>
  );
};

export default CreateNewTimesheet;

