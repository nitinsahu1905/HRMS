"use client";
import React, { useRef } from "react";
import Card from "../Components/Card";
import Button from "../Components/Button";
import Link from "next/link";
import { saveAs } from "file-saver";
import { PoliciesData } from "../Constants/PoliciesData";

// import ExitPolicy from "../../../public/Exit_Policy.pdf";2

const OrganizationPolicies = () => {
  const hiddenFileInput = useRef(null);

  const handleClick = (e) => {
    hiddenFileInput.current.click();
  };
  const handleChange = (event) => {
    if (event.target.files) {
      console.log(event.target.files[0]);
    }
  };

  const handlePreview = (path) => {
    // window.open(path); // To open on another tab
    window.location.href=path;
  };
  const handleDownload = (path,name) => {
    saveAs(path, `${name}`);
  };

  return (
    <div className="flex flex-col gap-[20px] ">
      <div>
        <h1 className="text-dark-blue text-[24px] font-bold m-0 mt-0 ">
          Organization Policies
        </h1>
        {/* <p className="text-primary-blue">Dashboard</p> */}
      </div>
      <Card>
        <div className="w-full flex flex-row justify-between items-center ">
          <div className="text-primary-blue text-[20px] font-medium ">
            Documents
          </div>
          <div className="flex gap-[10px]  ">
            
              <button className="custom-btn font-semibold ">Download All</button>
           
            <input
              type="file"
              id="fileInput"
              ref={hiddenFileInput}
              onChange={handleChange}
              style={{ display: "none" }}
            />
            <button
              onClick={handleClick}
              aria-label="file upload"
              className="text-primary-blue rounded-[10px] border-2 border-primary-blue px-[20px] py-[10px] font-semibold "
            >
              + Add Policy
            </button>
          </div>
        </div>
      </Card>
      {/* All Cards */}
      <div className="flex flex-col gap-[10px] ">
        {PoliciesData.map((policy, index) => (
          <div className="flex flex-row justify-between items-center  px-[10px] py-[5px]  rounded-[10px] text-dark-blue font-medium hover:text-primary-blue transition-all ">
            <div>{policy.name}</div>
            <div className="flex flex-row gap-[10px]  ">
              <button onClick={()=>handlePreview(policy.path)} className="bg-dark-blue px-[30px] py-[5px] text-white rounded-[10px] font-medium ">Preview</button>
              <button onClick={()=>handleDownload(policy.path, policy.name)} className="border-2 border-dark-blue px-[20px] py-[5px] text-dark-blue font-medium rounded-[10px] ">Download</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrganizationPolicies;
