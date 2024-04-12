"use client";
import React, { useRef, useState } from "react";
import Card from "../Components/Card";
import Button from "../Components/Button";
import Link from "next/link";
import { saveAs } from "file-saver";
import { PoliciesData } from "../Constants/PoliciesData";

import ExitPolicy from "../../../public/Exit_Policy.pdf";
import Modal from "../Components/Modal";

const OrganizationPolicies = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFileModalOpen, setIsFileModalOpen] = useState(false);
  const [idNo, setIdNo] = useState(7);
  const [policyName, setPolicyName] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const [isImagePreviewModalOpen, setIsImagePreviewModalOpen] = useState(false);
  const [isPdfPreviewModalOpen, setIsPdfPreviewModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openFileModal = () => {
    setIsFileModalOpen(true);
  };

  const closeFileModal = () => {
    setIsFileModalOpen(false);
  };

//   Open modal for image preview
  const openImagePreviewModal = () => {
    setIsImagePreviewModalOpen(true);
  };

  const closeImagePreviewModal = () => {
    setIsImagePreviewModalOpen(false);
  };

  //   Open modal for pdf preview
  const openPdfPreviewModal = () => {
    setIsPdfPreviewModalOpen(true);
  };

  const closePdfPreviewModal = () => {
    setIsPdfPreviewModalOpen(false);
  };

  const handleCreate = () => {

    if (policyName === "" || selectedFile === null) {
        alert("Please Enter the Data");
    } else {
        // Pass policyName and selectedFile to the parent component
        PoliciesData.push({ id: idNo, name: policyName, path: selectedFile });
        console.log(selectedFile);

        setIdNo(idNo + 1);
    }
    
    //Reset Inputs
    setPolicyName('');
    setSelectedFile(null);
    
    // Close the modal
    closeModal();
  };


//   const hiddenFileInput = useRef(null);

//   const handleClick = (e) => {
//     hiddenFileInput.current.click();
//   };
//   const handleChange = (event) => {
//     if (event.target.files) {
//       console.log(event.target.files[0]);
//     }
//   };

  const downloadAll =() =>{
    PoliciesData.forEach((policy)=>(
        saveAs(policy.path, `${policy.name}`)

    ))
  }

  const handlePreview = (path) => {
    // window.open(path); // To open on another tab
    // window.location.href=path;

    openFileModal();

    if (path.endsWith(".pdf")) {
        openPdfPreviewModal();
      } else if (path.match(/\.(jpeg|jpg|gif|png)$/)) {
        openImagePreviewModal();
      } else{
        window.location.href=path;
      }

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
        {/* <p className="text-primary-blue">Dashboard / Organization Policies</p> */}
      </div>
      <Card>
        <div className="w-full flex flex-row justify-between items-center ">
          <div className="text-primary-blue text-[20px] font-medium ">
            Documents
          </div>
          <div className="flex gap-[10px]  ">
            
              <button onClick={()=>downloadAll()} className="custom-btn font-semibold ">Download All</button>
           
            {/* <input
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
            </button> */}


            <button
              onClick={openModal}
              aria-label="file upload"
              className="text-primary-blue rounded-[10px] border-2 border-primary-blue px-[20px] py-[10px] font-semibold "
            >
              + Add New Policy
            </button>
            
            
            {isModalOpen?
            <Modal isOpen={isModalOpen} onClose={closeModal} >
                
                <div className=" lg:w-[500px] xl:w-[500px] md:w-[300px] sm:w-[150px] flex flex-col justify-center " >
                    <h2 className="text-[24px] font-bold mb-5">Add New Policy</h2>

                    <input
                    type="text"
                    placeholder="Policy Name"
                    className=" border border-gray-300 rounded px-4 py-2 mb-4"
                    value={policyName}
                    onChange={(e) => setPolicyName(e.target.value)}
                    required
                    />
                    <input
                    type="file"
                    className="mb-5  "
                    onChange={(e) => setSelectedFile(e.target.files[0])}
                    required
                    />
                    <div className="flex flex-row items-center justify-between gap-[10px] ">
                        <button
                        onClick={()=>handleCreate()}
                        className="px-4 py-2 bg-button-blue-color text-white rounded hover:bg-blue-600 "
                        >
                        Create
                        </button>
                        <button onClick={closeModal} className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600">
                        Cancel
                        </button>
                    </div>
                </div>
                
            </Modal>
            :
            null
            
            }



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
