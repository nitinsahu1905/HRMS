"use client";
import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

const EditEmployeeProfile = ({ onClose }) => {
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
      <div className="flex flex-col gap-[40px]   bg-[#eeeeee] p-[20px] rounded-[10px] shadow-lg h-fit overflow-y-scroll scrollbar-hide relative my-[20px] ">
        
        {/* Heading of Edit Profile */}
        <div className="flex flex-col justify-center items-center ">
          <div className="flex justify-center items-center text-[32px] font-semibold ">
            Edit Profile
          </div>
          <div className="h-[3px] w-[100px] bg-white "></div>
        </div>

        {/* Section for All Input Fields */}
        <div className="flex flex-col px-[10px] py-[20px] gap-[15px]  ">
            {/* Row 1 for Name */}
            <div className="flex flex-row gap-[15px]  ">
                {/* First Name */}
                <div className="flex flex-col gap-[10px] ">
                  <label className="text-sky-blue  " >First Name</label>
                  <input type="text" placeholder="Enter First Name" className="text-dark-blue px-[10px] py-[10px] rounded-[10px] focus:outline-none  " required maxLength={20} />
                </div>
                {/* Middle Name */}
                <div className="flex flex-col gap-[10px] ">
                  <label className="text-sky-blue  " >Middle Name</label>
                  <input type="text" placeholder="Enter Middle Name" className="text-dark-blue px-[10px] py-[10px] rounded-[10px] focus:outline-none  " maxLength={20} />
                </div>
                {/* Last Name */}
                <div className="flex flex-col gap-[10px] ">
                  <label className="text-sky-blue  " >Last Name</label>
                  <input type="text" placeholder="Enter Last Name" className="text-dark-blue px-[10px] py-[10px] rounded-[10px] focus:outline-none  " required  maxLength={20}/>
                </div>
            </div>
            {/* Row 2 for Gender DOB Blood Group */}
            <div className="flex flex-row gap-[15px] w-full ">
                {/* Gender */}
                <div className="flex flex-col gap-[10px] w-full ">
                  <label className="text-sky-blue  " >Gender</label>
                  <select className="text-dark-blue px-[10px] py-[10px] rounded-[10px] focus:outline-none   " required>
                    <option selected>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
                {/* DOB */}
                <div className="flex flex-col gap-[10px] w-full ">
                  <label className="text-sky-blue  " >Date of Birth</label>
                  <input type="date" placeholder="Enter Date of Birth" className="text-dark-blue px-[10px] py-[10px] rounded-[10px] focus:outline-none  h-[44px] " />
                </div>
                {/* Blood Group */}
                <div className="flex flex-col gap-[10px] w-full ">
                  <label className="text-sky-blue  " >Blood Group</label>
                  <select className="text-dark-blue px-[10px] py-[10px] rounded-[10px] focus:outline-none   " required>
                    <option value="">Select Blood Group</option>
                    <option>A+</option>
                    <option>A-</option>
                    <option>B+</option>
                    <option>B-</option>
                    <option>AB+</option>
                    <option>AB-</option>
                    <option>O+</option>
                    <option>O-</option>
                    <option>Other</option>
                  </select>
                </div>
            </div>
            {/* Row 3 for Gender DOB Blood Group */}
            <div className="flex flex-row gap-[15px] w-full  ">
                
                {/* Mobile No */}
                <div className="flex flex-col gap-[10px] w-full ">
                  <label className="text-sky-blue  " >Mobile No.</label>
                  <input type="tel" onChange={handleMobileChange} value={mobileNumber} placeholder="Enter Mobile Number" className="text-dark-blue px-[10px] py-[10px] rounded-[10px] focus:outline-none  " required  pattern="^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$" maxLength={10} />
                </div>
                {/* Country */}
                <div className="flex flex-col gap-[10px] w-full ">
                  <label className="text-sky-blue  " >Country</label>
                  <input type="text" placeholder="Enter Country Name" className="text-dark-blue px-[10px] py-[10px] rounded-[10px] focus:outline-none  " required maxLength={28} />
                </div>
            </div>
            {/* Row 4 for Reporting Manager */}
            <div className="flex flex-row gap-[15px] w-full  ">
                
                {/* Reporting Manager */}
                <div className="flex flex-col gap-[10px] w-full ">
                  <label className="text-sky-blue  " >Reporting Manager</label>
                  <input type="text" placeholder="Enter Reporting Manager" className="text-dark-blue px-[10px] py-[10px] rounded-[10px] focus:outline-none  " maxLength={25} />
                </div>
            </div>
            {/* Request & cancel button */}
            <div className="flex items-center justify-center gap-[1vw]">
            <div className="flex justify-center items-center mt-[10px] ">
              <button type="submit" onClick={submitHandler} className="text-white bg-sky-blue rounded-[10px] px-[20px] py-[10px] w-[8vw] font-medium   " >Request</button>
            </div>
            <div className="flex justify-center items-center mt-[10px] ">
              <button type="submit" onClick={submitHandler} className="text-sky-blue bg-white rounded-[10px] px-[20px] py-[10px] w-[8vw] font-medium   " >Cancel</button>
            </div>
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

export default EditEmployeeProfile;

