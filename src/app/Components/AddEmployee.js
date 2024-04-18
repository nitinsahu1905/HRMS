"use client";

import React, { useState } from "react";
import Modal from "../Components/Modal";
// import Card from "./Card";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddEmployee = () => {
  // State variables for managing form inputs and modal visibility
  const [isModalOpen, setIsModalOpen] = useState(true); // State variable to control modal visibility
  const [FirstName, setFirstName] = useState(""); // State variable for First Name input
  const [MiddleName, setMiddleName] = useState(""); // State variable for Middle Name input
  const [LastName, setLastName] = useState(""); // State variable for Last Name input
  const [ReportingManager, setReportingManager] = useState(""); // State variable for Reporting Manager input
  const [Designation, setDesignation] = useState(""); // State variable for Designation input
  const [Department, setDepartment] = useState(""); // State variable for Department input
  const [PersonalEmailId, setPersonalEmailId] = useState(""); // State variable for Personal Email Id input
  const [OfficialEmailId, setOfficialEmailId] = useState(""); // State variable for Official Email Id input

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAddEmployee = () => {
    // Function to handle adding an employee
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const nameRegex = /^[a-zA-Z]+$/;

    if (
      !FirstName ||
      !LastName ||
      !Designation ||
      !PersonalEmailId ||
      !OfficialEmailId
    ) {
      toast.error("Please fill in all required fields.");
      return;
    }
    if (!nameRegex.test(FirstName)) {
      toast.error("Please enter a valid first name.");
      return;
    }

    if (MiddleName && !nameRegex.test(MiddleName)) {
      toast.error("Please enter a valid middle name.");
      return;
    }

    if (!nameRegex.test(LastName)) {
      toast.error("Please enter a valid last name.");
      return;
    }
    if (!nameRegex.test(ReportingManager)) {
      toast.error("Please enter a valid Reporting Manager Name");
      return;
    }
    if (!emailRegex.test(OfficialEmailId)) {
      toast.error("Please enter a valid official email address.");
      return;
    }
    if (!emailRegex.test(PersonalEmailId)) {
      toast.error("Please enter a valid personal email address.");
      return;
    }

    // Close the modal

    closeModal();
    toast.success("Employee added successfully.");
  };

  return (
    <>
      {/* Check if the modal is open, if yes, render the Modal component */}
      {isModalOpen ? (
        <Modal isOpen={isModalOpen} closeModal={closeModal}>
          <div className="flex flex-col">
            <div className=" flex flex-col justify-center gap-[10px] ">
              <div className="flex flex-col  items-center justify-center gap-[5px] ">
                <h1 className="text-xl font-bold items-center">Add Employee</h1>
                <div className="h-1 bg-dark-blue rounded-lg w-[120px] "></div>
              </div>
              <div className="flex flex-row justify-between">
                <div className="flex flex-col p-6 ">
                  <div className="flex flex-col gap-1">
                    <label for="fname" className="mb-1 text-[16px] ">
                      First Name
                    </label>

                    <input
                      type="text"
                      placeholder="Enter First Name"
                      className="w-64 h-8 px-4 rounded-md border  border-gray-400 mb-5"
                      value={FirstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      maxLength={50}
                    ></input>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label for="fname" className="mb-1  text-[16px] ">
                      Middle Name
                    </label>

                    <input
                      type="text"
                      placeholder="Enter Middle Name"
                      className="w-64 h-8 px-4 rounded-md border border-gray-400 mb-5"
                      name="middlename"
                      value={MiddleName}
                      onChange={(e) => setMiddleName(e.target.value)}
                      maxLength={50}
                    ></input>
                  </div>
                  {/* Toast container for displaying validation errors */}
                  <ToastContainer />
                  <div className="flex flex-col gap-1">
                    <label for="fname" className="mb-1  text-[16px] ">
                      Last Name
                    </label>

                    <input
                      type="text"
                      placeholder="Enter Last Name"
                      className="w-64 h-8 px-4 rounded-md border border-gray-400 mb-5"
                      name="lastname"
                      value={LastName}
                      onChange={(e) => setLastName(e.target.value)}
                      maxLength={50}
                    ></input>
                  </div>
                  <div className="flex flex-col gap-1">
                    <label for="Designation" className="mb-1  text-[16px] ">
                      Designation
                    </label>

                    <input
                      type="text"
                      placeholder="Enter Designation"
                      className="w-64 h-8 px-4 rounded-md border border-gray-400 mb-5"
                      name="designation"
                      value={Designation}
                      onChange={(e) => setDesignation(e.target.value)}
                      maxLength={30}
                    ></input>
                  </div>
                </div>
                <div className="flex flex-col p-6">
                  <div className="flex flex-col gap-1">
                    <label for="OfficialEmailId" className="mb-1  text-[16px] ">
                      Official Email Id
                    </label>

                    <input
                      type="text"
                      placeholder="Enter Official Email Id"
                      className="w-64 h-8 px-4 rounded-md border border-gray-400 mb-5"
                      name="OfficialEmailId"
                      value={OfficialEmailId}
                      onChange={(e) => setOfficialEmailId(e.target.value)}
                      maxLength={30}
                    ></input>
                  </div>
                  <div className="flex flex-col gap-1">
                    <label for="PersonalEmailid" className="mb-1  text-[16px] ">
                      Personal Email Id
                    </label>

                    <input
                      type="text"
                      placeholder="Enter Personal Email Id"
                      className="w-64 h-8 px-4 rounded-md border border-gray-400 mb-5"
                      name="PersonalEmailId"
                      value={PersonalEmailId}
                      onChange={(e) => setPersonalEmailId(e.target.value)}
                      maxLength={30}
                    ></input>
                  </div>
                  <div className="flex flex-col gap-1">
                    <label for="Department" className="mb-1  text-[16px] ">
                      Department
                    </label>

                    <input
                      type="text"
                      placeholder="Enter Department"
                      className="w-64 h-8 px-4 rounded-md border border-gray-400 mb-5"
                      name="Department"
                      value={Department}
                      onChange={(e) => setDepartment(e.target.value)}
                      maxLength={30}
                    ></input>
                  </div>
                  <div className="flex flex-col gap-1">
                    <label
                      for="ReportingManager"
                      className="mb-1  text-[16px] "
                    >
                      Reporting Manager
                    </label>

                    <input
                      type="text"
                      placeholder="Enter Reporting Manager"
                      className="w-64 h-8 px-4 rounded-md border border-gray-400 mb-5"
                      name="Repoting Manager"
                      value={ReportingManager}
                      onChange={(e) => setReportingManager(e.target.value)}
                      maxLength={50}
                    ></input>
                  </div>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="h-8 bg-[#0684C7] text-white rounded-md ml-[240px] mt-[-10px] text-sm p-1.5"
                  onClick={handleAddEmployee}
                >
                  Add Employee
                </button>
              </div>
            </div>
          </div>
        </Modal>
      ) : null}
    </>
  );
};

export default AddEmployee;
