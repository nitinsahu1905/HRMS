"use client";

import React, { useState } from "react";
import Modal from "../Components/Modal";
// import Card from "./Card";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { firestoreDB } from "../utils/firebase";
import { collection, doc, setDoc } from "firebase/firestore";

const AddEmployee = ({ onClose }) => {
  // State variables for managing form inputs and modal visibility
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [reportingManager, setReportingManager] = useState("");
  const [designation, setDesignation] = useState("");
  const [department, setDepartment] = useState("");
  const [personalEmailId, setPersonalEmailId] = useState("");
  const [officialEmailId, setOfficialEmailId] = useState("");

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    onClose(false);
  };

  // function to handle adding an employee into firebase
  const handleAddEmployee = async () => {
    // Regex for validation (allowing only alphabetic characters)
    const nameRegex = /^[a-zA-Z]{3,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const fullRegex = /^[a-zA-Z]{3,}(?: [a-zA-Z]{3,})*$/;

    // Trim whitespace from input fields
    const trimmedFirstName = firstName.trim();
    const trimmedMiddleName = middleName ? middleName.trim() : "";
    const trimmedLastName = lastName.trim();
    const trimmedReportingManager = reportingManager.trim();
    const trimmedOfficialEmailId = officialEmailId.trim();
    const trimmedPersonalEmailId = personalEmailId.trim();
    const trimmedDesignation = designation.trim();
    const trimmedDepartment = department.trim();

    // Validate required fields
    if (
      !trimmedFirstName ||
      !trimmedLastName ||
      !designation ||
      !trimmedPersonalEmailId ||
      !trimmedOfficialEmailId
    ) {
      toast.error("Please fill in all required fields.");
      return;
    }

    // Validate first name
    if (!nameRegex.test(trimmedFirstName)) {
      toast.error(
        "Please enter a valid first name (only alphabetic characters)."
      );
      return;
    }

    // Validate middle name (if provided)
    if (trimmedMiddleName && !nameRegex.test(trimmedMiddleName)) {
      toast.error(
        "Please enter a valid middle name (only alphabetic characters)."
      );
      return;
    }

    // Validate last name
    if (!nameRegex.test(trimmedLastName)) {
      toast.error(
        "Please enter a valid last name (only alphabetic characters)."
      );
      return;
    }

    // Validate reporting manager name
    if (!fullRegex.test(reportingManager)) {
      toast.error(
        "Please enter a valid Reporting Manager Name (only alphabetic characters)."
      );
      return;
    }

    // Validate official email address
    if (!emailRegex.test(trimmedOfficialEmailId)) {
      toast.error("Please enter a valid official email address.");
      return;
    }

    // Validate personal email address
    if (!emailRegex.test(trimmedPersonalEmailId)) {
      toast.error("Please enter a valid personal email address.");
      return;
    }

    // Validate designation
    if (!fullRegex.test(trimmedDesignation)) {
      toast.error("Please enter a valid designation.");
      return;
    }

    // validation for department
    if (!fullRegex.test(trimmedDepartment)) {
      toast.error("Please enter a valid department.");
      return;
    }

    // prepare employee data
    const formData = {
      firstName: trimmedFirstName,
      middleName: trimmedMiddleName,
      lastName: trimmedLastName,
      reportingManager: trimmedReportingManager,
      designation,
      department,
      personalEmailId: trimmedPersonalEmailId,
      officialEmailId: trimmedOfficialEmailId,
      isregister: "false",
    };

    try {
      // Add employee data to Firestore
      const docRef = doc(collection(firestoreDB, "nonRegEmp"));
      await setDoc(docRef, formData);
      toast.success("Employee added successfully!");

      // doing entries vacant
      setFirstName("");
      setMiddleName("");
      setLastName("");
      setDesignation("");
      setDepartment("");
      setOfficialEmailId("");
      setPersonalEmailId("");
      setReportingManager("");

      // it will help to show thw toast message for success
      setTimeout(() => {
        closeModal();
      }, 1500);
    } catch (error) {
      console.error("Error adding employee:", error);
      toast.error("Failed to add employee. Please try again later.");
    }
  };

  return (
    <>
      {/* Check if the modal is open, if yes, render the Modal component */}
      {isModalOpen ? (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <div className="flex flex-col md:mt-8 mt-4 ">
            <div className=" flex flex-col justify-center gap-[10px] ">
              {/* includes heading */}
              <div className="flex flex-col  items-center justify-center gap-[5px] ">
                <h1 className="text-xl font-bold ">Add Employee</h1>
                <div className="h-1 bg-dark-blue rounded-lg w-[110px] "></div>
              </div>

              <div className="flex md:flex-row flex-col md:justify-between  ">
                <div className="flex flex-col md:p-6 md:pb-6 pb-0  ">
                  {/* section of fname */}
                  <div className="flex flex-col gap-1">
                    <label for="fname" className="mb-1 text-[16px] ">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter First Name"
                      className="w-64 h-8 px-4 rounded-lg border border-gray-400 mb-5"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      maxLength={50}
                    ></input>
                  </div>

                  {/* middle name */}
                  <div className="flex flex-col gap-1">
                    <label for="fname" className="mb-1  text-[16px] ">
                      Middle Name
                    </label>

                    <input
                      type="text"
                      placeholder="Enter Middle Name"
                      className="w-64 h-8 px-4 rounded-lg border border-gray-400 mb-5"
                      name="middlename"
                      value={middleName}
                      onChange={(e) => setMiddleName(e.target.value)}
                      maxLength={50}
                    ></input>
                  </div>

                  {/* Toast container for displaying validation errors */}
                  <ToastContainer />

                  {/* lastname */}
                  <div className="flex flex-col gap-1">
                    <label for="fname" className="mb-1  text-[16px] ">
                      Last Name
                    </label>

                    <input
                      type="text"
                      placeholder="Enter Last Name"
                      className="w-64 h-8 px-4 rounded-lg border border-gray-400 mb-5 "
                      name="lastname"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      maxLength={50}
                    ></input>
                  </div>

                  {/* designation */}
                  <div className="flex flex-col gap-1">
                    <label for="Designation" className="mb-1  text-[16px] ">
                      Designation
                    </label>

                    <input
                      type="text"
                      placeholder="Enter Designation"
                      className="w-64 h-8 px-4 rounded-lg border border-gray-400 mb-5"
                      name="designation"
                      value={designation}
                      onChange={(e) => setDesignation(e.target.value)}
                      maxLength={30}
                    ></input>
                  </div>
                </div>

                <div className="flex flex-col md:p-6 md:pt-6 pt-5  ">
                  {/* official mail id */}
                  <div className="flex flex-col gap-1">
                    <label for="OfficialEmailId" className="mb-1  text-[16px] ">
                      Official Email Id
                    </label>

                    <input
                      type="text"
                      placeholder="Enter Official Email Id"
                      className="w-64 h-8 px-4 rounded-lg border border-gray-400 mb-5"
                      name="OfficialEmailId"
                      value={officialEmailId}
                      onChange={(e) => setOfficialEmailId(e.target.value)}
                      maxLength={30}
                    ></input>
                  </div>

                  {/* personal mail id */}
                  <div className="flex flex-col gap-1">
                    <label for="PersonalEmailid" className="mb-1  text-[16px] ">
                      Personal Email Id
                    </label>

                    <input
                      type="text"
                      placeholder="Enter Personal Email Id"
                      className="w-64 h-8 px-4 rounded-lg border border-gray-400 mb-5"
                      name="PersonalEmailId"
                      value={personalEmailId}
                      onChange={(e) => setPersonalEmailId(e.target.value)}
                      maxLength={30}
                    ></input>
                  </div>

                  {/* department */}
                  <div className="flex flex-col gap-1">
                    <label for="Department" className="mb-1  text-[16px] ">
                      Department
                    </label>

                    <input
                      type="text"
                      placeholder="Enter Department"
                      className="w-64 h-8 px-4 rounded-lg border border-gray-400 mb-5"
                      name="Department"
                      value={department}
                      onChange={(e) => setDepartment(e.target.value)}
                      maxLength={30}
                    ></input>
                  </div>

                  {/* reporting manager */}
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
                      className="w-64 h-8 px-4 rounded-lg border border-gray-400 mb-5"
                      name="Repoting Manager"
                      value={reportingManager}
                      onChange={(e) => setReportingManager(e.target.value)}
                      maxLength={50}
                    ></input>
                  </div>
                </div>
              </div>

              {/* add-employee button */}
              <div className="flex justify-center items-center  " >
                <button
                  type="submit"
                  className="h-8 bg-[#0684C7] text-white rounded-lg   mt-[-10px] text-sm px-3 p-1.5"
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
