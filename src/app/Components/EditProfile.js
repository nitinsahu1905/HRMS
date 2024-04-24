"use client";

import React, { useContext, useEffect, useState } from "react";
import Modal from "../Components/Modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { authTable, firestoreDB } from "../utils/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { doc, updateDoc } from "firebase/firestore";
import ProfileContext from "../Context/profileContext";
import fetchProfileData from "./fetchProfileData";
// import {fetchP}
// import {fetchProfileData} from "../Components/fetchProfileData";
const EditProfile = ({ editprofileModal, setEditprofileModal }) => {
  // State variables for managing form inputs and modal visibility
  const [fetchedData, setFetchedData] = useState([{}]);
  const [isModalOpen, setIsModalOpen] = useState(false); // State variable to control modal visibility
  const [FirstName, setFirstName] = useState(); // State variable for First Name input
  const [MiddleName, setMiddleName] = useState(""); // State variable for Middle Name input
  const [LastName, setLastName] = useState(""); // State variable for Last Name input
  const [DOB, setDOB] = useState(""); // State variable for DOB input
  const [mobile, setMobile] = useState(""); // State variable for Mobile Number input
  const [address, setAddress] = useState(""); // State variable for Mobile Number input
  const [city, setCity] = useState(""); // State variable for Mobile Number input
  const [stateName, setStateName] = useState(""); // State variable for Mobile Number input
  const [PinCode, setPinCode] = useState(""); // State variable for Mobile Number input
  const [Nationality, setNationality] = useState(""); // State variable for Mobile Number input
  const [ReportingManager, setReportingManager] = useState(""); // State variable for Reporting Manager input
  const [EmployeeCode, setEmployeeCode] = useState(""); // State variable for Employee Code input
  const [EarnedLeaves, setEarnedLeaves] = useState(""); // State variable for Earned Leaves input
  const [Designation, setDesignation] = useState(""); // State variable for Designation input
  const [Department, setDepartment] = useState(""); // State variable for Department input
  const [PersonalEmailId, setPersonalEmailId] = useState(""); // State variable for Personal Email Id input
  const [OfficialEmailId, setOfficialEmailId] = useState(""); // State variable for Official Email Id input
  const [linkedin, setLinkedin] = useState(""); // State variable for Official Email Id input
  const [docId, setDocId] = useState("");
  // State variable to store fetched data from Firestore
  const [documentId, setDocumentId] = useState(""); // State variable to store the document ID of the fetched data
  // const {profile,docId}=useContext(ProfileContext);
  // console.log("profile",profile)
  
  // Function to open the modal
  const openModal = () => {
    setEditprofileModal(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setEditprofileModal(false);
  };

  const handleUpdateProfile = async () => {
    // Function to handle adding an employee
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const nameRegex = /^[a-zA-Z]+$/;
    // if(!docId){
    //   alert("User not found");
    //   return;
    // }

    // if (
    //   !FirstName ||
    //   !LastName ||
    //   !Designation ||
    //   !PersonalEmailId ||
    //   !OfficialEmailId 
    // ) {
    //   toast.error("Please fill all required fields.");
    //   return;
    // }
    // if (!nameRegex.test(FirstName)) {
    //   toast.error("Please enter a valid first name.");
    //   return;
    // }

    // if (MiddleName && !nameRegex.test(MiddleName)) {
    //   toast.error("Please enter a valid middle name.");
    //   return;
    // }

    // if (!nameRegex.test(LastName)) {
    //   toast.error("Please enter a valid last name.");
    //   return;
    // }
    // if (!nameRegex.test(ReportingManager)) {
    //   toast.error("Please enter a valid Reporting Manager Name");
    //   return;
    // }
    // if (!emailRegex.test(OfficialEmailId)) {
    //   toast.error("Please enter a valid official email address.");
    //   return;
    // }
    // if (!emailRegex.test(PersonalEmailId)) {
    //   toast.error("Please enter a valid personal email address.");
    //   return;
    // }

    // console.log("Adding employee:", {
    //   FirstName,
    //   MiddleName,
    //   LastName,
    //   ReportingManager,
    //   Designation,
    //   Department,
    //   PersonalEmailId,
    //   OfficialEmailId,
    // });
      const userRef = doc(firestoreDB,"users",docId);
      // const userRef2 = collection(firestoreDB, "users").where("userId", "==", "PB27BveZJXhQul4D1dcqekXIlez2");

      // const userRef2 = doc(firestoreDB,"users").where("userId", "==", "PB27BveZJXhQul4D1dcqekXIlez2")
      const updateData = {
        firstName: FirstName ? FirstName : fetchedData[0].firstName,
        // middleName: MiddleName ? MiddleName : fetchedData[0].middleName,
        lastName: LastName ? LastName : fetchedData[0].lastName,
        DOB: DOB ? DOB : fetchedData[0].DOB,
        mobile: mobile ? mobile : fetchedData[0].mobile,
        address: address ? address : fetchedData[0].address,
        city: city ? city : fetchedData[0].city,
        state: stateName ? stateName : fetchedData[0].state,
        Pincode: PinCode ? PinCode : fetchedData[0].Pincode,
        Nationality: Nationality ? Nationality : fetchedData[0].Nationality,
        // ReportingManager: ReportingManager ? ReportingManager : fetchedData[0].ReportingManager,
        EmployeeCode: EmployeeCode ? EmployeeCode : fetchedData[0].EmployeeCode,
        Designation: Designation ? Designation : fetchedData[0].designation,
        Department: Department ? Department : fetchedData[0].department,
        PersonalEmailId: PersonalEmailId ? PersonalEmailId : fetchedData[0].personalEmailId,
        officialMailId: OfficialEmailId ? OfficialEmailId : fetchedData[0].officialMailId,
        linkedin: linkedin ? linkedin : fetchedData[0].linkedin,

        // Other updates...
      };
     await updateDoc(userRef, updateData
    );

    // const q = query(collection(firestoreDB, "users"), where("userId", "==", "PB27BveZJXhQul4D1dcqekXIlez2"));
    // const querySnapshot = await getDocs(q);
    // querySnapshot.forEach((doc) => {
    //   console.log(doc.id, " => ", doc.data());
    // });

    

    // Close the modal
    
    closeModal();
    window.location.reload();
    // alert("Profile Updated successfully.");
    toast.success("Profile Updated successfully.");
  };
    useEffect(() => {
        // const fetchUser = async () => {
        //   const q = query(collection(firestoreDB, "users"), where("userId", "==", "PB27BveZJXhQul4D1dcqekXIlez2"));
        //   const querySnapshot = await getDocs(q);
        //   querySnapshot.forEach((doc) => {
        //     setDocId(doc.id);
        //     console.log(doc.data())
        //     setFetchedData(doc.data());
        //   });
        // }
        // fetchUser();
       
      //   fetchProfileData().then((data) => {
      //     console.log('used server',data)
      //     setFetchedData(data);
      //     setDocId(data.docId);
      //     setFirstName(data.FirstName);
      //     setMiddleName(data.MiddleName);
      //     setLastName(data.LastName);
      //     setDOB(data.DOB);
      //     setMobile(data.mobile);
      //     setAddress(data.address);
      //     setCity(data.city);
      //     setStateName(data.stateName);
      //     setPinCode(data.PinCode);
      //   }
      // )
       async function fetchData(){
        const {data,docId} = await fetchProfileData();
        setFetchedData(data);
        setDocId(docId);

       }
       fetchData();

        
      },[]
    );
    
        

  return (
    <>
      {/* Check if the modal is open, if yes, render the Modal component */}
      {editprofileModal ? (
        <Modal isOpen={editprofileModal} onClose={closeModal}>
          <div className="flex flex-col mx-auto  ">
            <div className=" flex flex-col justify-center md:gap-[10px] gap-[20px] ">
              <div className="flex flex-col  items-center justify-center gap-[5px] ">
                <h1 className="text-xl font-bold items-center">Edit Profile</h1>
                <div className="h-1 bg-dark-blue rounded-lg w-[100px] "></div>
              </div>
              <div className="flex flex-col md:gap-[20px] gap-[40px] ">

                {/* Inputs for Personal Details */}
                <div className="flex flex-col gap-[5px] ">
                  <div className="text-primary-blue mb-1 font-medium ">Personal Details</div>

                  {/* Row 1 for First and Middle Name */}
                  <div className="flex md:flex-row flex-col gap-[10px]   ">
                    <div className="flex flex-col gap-1">
                      <label for="fname" className="mb-1 text-[16px] ">
                      First Name

                      </label>

                      <input
                        type="text"
                        placeholder="Enter First Name"
                        className="md:w-64 w-72 h-8 px-4 rounded-md border  border-gray-400 mb-[5px]"
                        value={(FirstName) ? FirstName :fetchedData[0].firstName}
                        onChange={(e)=>setFirstName(e.target.value)}
                        maxLength={50}
                      ></input>
                    </div>

                    <div className="flex flex-col gap-1">
                      <label for="mname" className="mb-1  text-[16px] ">
                        Middle Name
                      </label>

                      <input
                        type="text"
                        placeholder="Enter Middle Name"
                        className="md:w-64 w-72 h-8 px-4 rounded-md border border-gray-400 mb-[5px]"
                        name="middlename"
                        value={(MiddleName) ? MiddleName :fetchedData[0].middleName}
                        onChange={(e) => setMiddleName(e.target.value)}
                        maxLength={50}
                      ></input>
                    </div>
                  </div>

                  {/* Row2 for Last name and dob */}
                  <div className="flex md:flex-row flex-col gap-[10px]   ">
                    <div className="flex flex-col gap-1">
                      <label for="lname" className="mb-1  text-[16px] ">
                        Last Name
                      </label>

                      <input
                        type="text"
                        placeholder="Enter Last Name"
                        className="md:w-64 w-72 h-8 px-4 rounded-md border border-gray-400 mb-[5px]"
                        name="lastname"
                        value={(LastName) ? LastName :fetchedData[0].lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        maxLength={50}
                      ></input>
                    </div>

                    <div className="flex flex-col gap-1">
                      <label for="dob" className="mb-1  text-[16px] ">
                        D.O.B.
                      </label>

                      <input
                        type="date"
                        placeholder="Enter DOB"
                        className="md:w-64 w-72 h-8 px-4 rounded-md border border-gray-400 mb-[5px]"
                        name="dob"
                        value={(DOB) ? DOB :fetchedData[0].DOB}
                        
                        onChange={(e) => setDOB(e.target.value)}
                        maxLength={50}
                      ></input>
                    </div>
                  </div>

                  {/* Row3 for Personal email and mobile */}
                  <div className="flex md:flex-row flex-col gap-[10px]   ">
                    <div className="flex flex-col gap-1">
                      <label
                        for="PersonalEmailid"
                        className="mb-1  text-[16px] "
                      >
                        Personal Email Id
                      </label>

                      <input
                        type="text"
                        placeholder="Enter Personal Email Id"
                        className="md:w-64 w-72 h-8 px-4 rounded-md border border-gray-400 mb-[5px]"
                        name="PersonalEmailId"
                        value={(PersonalEmailId) ? PersonalEmailId :fetchedData[0].personalEmailId}
                        onChange={(e) => setPersonalEmailId(e.target.value)}
                        maxLength={30}
                      ></input>
                    </div>

                    <div className="flex flex-col gap-1">
                      <label for="mobile" className="mb-1  text-[16px] ">
                        Mobile
                      </label>

                      <input
                        type="text"
                        placeholder="Enter Mobile Number"
                        className="md:w-64 w-72 h-8 px-4 rounded-md border border-gray-400 mb-[5px]"
                        name="mobile"
                        value={(mobile) ? mobile :fetchedData[0].mobile}
                        onChange={(e) => {
                            setMobile(e.target.value)
                        }}
                        onKeyDown={(event)=>{
                            var backspace=event.keyCode;
                            if(backspace==8)
                            {
                              return;
                            }
                            var key = event.key;
               
                            // Check if the key is a numeric character
                            if (!(/[0-9.]/.test(key))) {
                                // Prevent the default action of the key press
                                event.preventDefault();}}}
                        maxLength={10}
                        // minLength={0}
                        // pattern="[789][0-9]{9}"

                        required
                      ></input>
                    </div>
                  </div>

                  {/* Row4 for Address */}
                  <div className="flex md:flex-row flex-col gap-[10px] w-full   ">
                    <div className="flex flex-col gap-1 w-full ">
                      <label for="Address" className="mb-1  text-[16px] ">
                        Address
                      </label>

                      <input
                        type="text"
                        placeholder="Enter Address"
                        className="w-full h-8 px-4 rounded-md border border-gray-400 mb-[5px]"
                        name="PersonalEmailId"
                        value={(address) ? address :fetchedData[0].address}
                        onChange={(e) => setAddress(e.target.value)}
                        maxLength={100}
                      ></input>
                    </div>
                  </div>

                  {/* Row5 for City and State */}
                  <div className="flex md:flex-row flex-col gap-[10px]   ">
                    <div className="flex flex-col gap-1">
                      <label for="city" className="mb-1 text-[16px] ">
                        City
                      </label>

                      <input
                        type="text"
                        placeholder="Enter City"
                        className="md:w-64 w-72 h-8 px-4 rounded-md border  border-gray-400 mb-[5px]"
                        value={(city) ? city :fetchedData[0].city}
                        onChange={(e) => setCity(e.target.value)}
                        maxLength={50}
                      ></input>
                    </div>

                    <div className="flex flex-col gap-1">
                      <label for="state" className="mb-1  text-[16px] ">
                        State
                      </label>

                      <input
                        type="text"
                        placeholder="Enter State"
                        className="md:w-64 w-72 h-8 px-4 rounded-md border border-gray-400 mb-[5px]"
                        name="state"
                        value={(stateName) ? stateName :fetchedData[0].state}
                        onChange={(e) => setStateName(e.target.value)}
                        maxLength={50}
                      ></input>
                    </div>
                  </div>

                  {/* Row6 for Pincode and Nationality */}
                  <div className="flex md:flex-row flex-col gap-[10px]   ">
                    <div className="flex flex-col gap-1">
                      <label for="pincode" className="mb-1 text-[16px] ">
                        Pincode
                      </label>

                      <input
                        type="text"
                        placeholder="Enter Pincode"
                        className="md:w-64 w-72 h-8 px-4 rounded-md border  border-gray-400 mb-[5px]"
                        value={(PinCode) ? PinCode :fetchedData[0].Pincode}
                        onChange={(e) => setPinCode(e.target.value)}
                        maxLength={6}
                      ></input>
                    </div>

                    <div className="flex flex-col gap-1">
                      <label for="nationality" className="mb-1  text-[16px] ">
                        Nationality
                      </label>

                      <input
                        type="text"
                        placeholder="Enter Nationality"
                        className="md:w-64 w-72 h-8 px-4 rounded-md border border-gray-400 mb-[5px]"
                        name="nationality"
                        value={(Nationality) ? Nationality :fetchedData[0].Nationality}
                        onChange={(e) => setNationality(e.target.value)}
                        maxLength={20}
                      ></input>
                    </div>
                  </div>

                </div>

                {/* Input Fields for Work Details */}
                <div className="flex flex-col gap-[5px] ">
                  <div className="text-primary-blue mb-1  font-medium">Work Details</div>

                  {/* Row 1 for Reporting manger and employee code */}
                  <div className="flex md:flex-row flex-col gap-[10px]   ">
                    <div className="flex flex-col gap-1">
                      <label for="reporting Manger" className="mb-1 text-[16px] ">
                        Reporting Manager
                      </label>

                      <input
                        type="text"
                        placeholder="Enter Reporting Manger"
                        className="md:w-64 w-72 h-8 px-4 rounded-md border  border-gray-400 mb-[5px]"
                        value={ReportingManager}
                        onChange={(e) => setReportingManager(e.target.value)}
                        maxLength={30}
                        required
                      ></input>
                    </div>

                    <div className="flex flex-col gap-1">
                      <label for="employee code" className="mb-1  text-[16px] ">
                        Employee Code
                      </label>

                      <input
                        type="text"
                        placeholder="Enter Employee Code"
                        className="md:w-64 w-72 h-8 px-4 rounded-md border border-gray-400 mb-[5px]"
                        name="employee code"
                        value={(EmployeeCode) ? EmployeeCode :fetchedData[0].EmployeeCode}
                        onChange={(e) => setEmployeeCode(e.target.value)}
                        maxLength={10}
                      ></input>
                    </div>
                  </div>

                  {/* Row2 for Work email and earned leaves */}
                  <div className="flex md:flex-row flex-col gap-[10px]   ">
                    <div className="flex flex-col gap-1">
                      <label
                        for="OfficialEmailid"
                        className="mb-1  text-[16px] "
                      >
                        Official Email Id
                      </label>

                      <input
                        type="text"
                        placeholder="Enter Work Email Id"
                        className="md:w-64 w-72 h-8 px-4 rounded-md border border-gray-400 mb-[5px]"
                        name="OfficialEmailId"
                        value={OfficialEmailId}
                        onChange={(e) => setOfficialEmailId(e.target.value)}
                        maxLength={30}
                      ></input>
                    </div>

                    <div className="flex flex-col gap-1">
                      <label for="EarnedLeaves" className="mb-1  text-[16px] ">
                        Earned Leaves
                      </label>

                      <input
                        type="text"
                        placeholder="Enter Mobile Number"
                        className="md:w-64 w-72 h-8 px-4 rounded-md border border-gray-400 mb-[5px]"
                        name="EarnedLeaves"
                        value={EarnedLeaves}
                        onChange={(e) => {
                            setEarnedLeaves(e.target.value)
                        }}
                        onKeyDown={(event)=>{
                            var backspace=event.keyCode;
                            if(backspace==8)
                            {
                              return;
                            }
                            var key = event.key;
               
                            // Check if the key is a numeric character
                            if (!(/[0-9.]/.test(key))) {
                                // Prevent the default action of the key press
                                event.preventDefault();}}}
                        maxLength={2}
                        // minLength={0}
                        // pattern="[789][0-9]{9}"

                        required
                      ></input>
                    </div>
                  </div>

                  {/* Row3 for Designation and department */}
                  <div className="flex md:flex-row flex-col gap-[10px]   ">
                    <div className="flex flex-col gap-1">
                      <label for="designation" className="mb-1 text-[16px] ">
                        Designation
                      </label>

                      <input
                        type="text"
                        placeholder="Enter Designation"
                        className="md:w-64 w-72 h-8 px-4 rounded-md border  border-gray-400 mb-[5px]"
                        value={(Designation) ? Designation :fetchedData[0].Designation}

                        onChange={(e) => setDesignation(e.target.value)}
                        maxLength={30}
                        required
                      ></input>
                    </div>


                   
                  </div>
                  
                  {/* Row4 for linkedin */}
                  <div className="flex md:flex-row flex-col gap-[10px] w-full   ">
                    <div className="flex flex-col gap-1 w-full ">
                      <label for="linkedin" className="mb-1  text-[16px] ">
                        Linkedin
                      </label>

                      <input
                        type="text"
                        placeholder="Enter Linkedin"
                        className="w-full h-8 px-4 rounded-md border border-gray-400 mb-[5px]"
                        name="linkedin"
                        value={(linkedin) ? linkedin :fetchedData[0].linkedin}
                        
                        onChange={(e) => setLinkedin(e.target.value)}
                        maxLength={100}
                      ></input>
                    </div>
                  </div>
                

                </div>
              </div>

              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  className=" flex items-center justify-center
                  cursor-pointer bg-button-blue-color rounded-[10px] text-white px-[15px] py-[5px]"
                  onClick={handleUpdateProfile}
                >
                  Update Profile
                </button>
              </div>
            </div>
          </div>
        </Modal>
      ) : null}
    </>
  );
};

export default EditProfile;
