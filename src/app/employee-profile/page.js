"use client";
import Image from "next/image";
import { TbCalendarStats } from "react-icons/tb";
import { BsGraphUpArrow } from "react-icons/bs";
import { skills } from "../Constants/EmployeeProfileData";
import { MdEdit } from "react-icons/md";
import { PiCopySimpleThin } from "react-icons/pi";
import { useEffect, useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { aboutDetails } from "../Constants/EmployeeProfileData";
import { careerDetails } from "../Constants/EmployeeProfileData";
import { achievements } from "../Constants/EmployeeProfileData";

import Link from "next/link";
import Modal from "../Components/ProfilePageModal";
import { data } from "jquery";
import EditEmployeeProfile from "../Components/EditEmployeeProfile";
import { index } from "d3";

const EmployeeProfile = () => {
  const [editEmployeeProfile, setEditEmployeeProfile] = useState(false);
  const [copied, setCopied] = useState(false);
  // State to store the selected image URL for preview
  const [selectedImage, setSelectedImage] = useState(null);
  // State to show view-details modal
  const [showModal, setShowModal] = useState(false);
  // State to map correct data in div
  const [type, setType] = useState("education");
  const [mappingData, setMappingData] = useState([]);

  // Function to initially render the education data in the box
  useEffect(() => {
    const tempData = careerDetails.filter((item) => item.type === "education");
    setMappingData(tempData);
  }, []);

  // Function to handle type change for career box
  const handleClick = (careerType) => {
    setType(careerType);
    console.log(careerType);
    const tempData = careerDetails.filter((item) => item.type === careerType);
    console.log("tempdata", tempData);
    setMappingData(tempData);
    console.log("state data", mappingData);
  };

  // Fucntion to handle the editing of careers info
  const handleEdit = () => {
    console.log("Editing");
  };

  // Function to close the editprofle
  const closeModal = () => {
    setEditEmployeeProfile(false);
  };

  const handleViewDetailsClick = (event) => {
    event.preventDefault();
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Function to handle the image input change event
  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      // Set the selected image URL for preview
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const email = "akshat.lakhara@metadologie.com";
  // function to handle the copying of email
  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <div className="w-[100%] bg-[#F8F6F6] py-[1.67vw] h-auto flex md:flex-row flex-col gap-[1vw]">
      {/* left box */}

      <div className="rounded-[0.68vw] shadow-md ml-[5vw] h-auto md:w-[34%] w-[90%]  flex flex-col items-center px-[1vw] py-[1vw] gap-[2vw]">
        {/* box for the image */}
        <div className=" relative h-[10vw] w-[10vw] p-[0.3vw] bg-white rounded-[5vw] border-[#2F2EA6] border-[0.12vw]">
          {/* edit icon for the image */}
          <span className="absolute top-2 right-2 bg-[#2F2EA6] text-white p-[0.4vw] rounded-[100px] border-[0.12vw] border-white">
            <label htmlFor="upload-button">
              <MdEdit />
            </label>
            <input
              type="file"
              id="upload-button"
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
          </span>

          {/* Profile image preview */}
          {selectedImage ? (
            <Image
              className="h-[100%] w-[100%] rounded-[5vw]"
              src={selectedImage}
              width={50}
              height={50}
              alt="Profile"
            />
          ) : (
            <Image
              className="h-[100%] w-[100%] rounded-[5vw]"
              src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=800"
              width={50}
              height={50}
              alt="Profile"
            />
          )}
        </div>

        {/* box for the name details */}
        <div className="relative flex flex-col items-center">
          <span className="text-[#2F2EA6] text-[1.2vw] font-[600]">
            Akshat Lakhara
          </span>
          <span className="text-[#808080] text-[0.8vw]">
            {/* notified after copying the mail */}
            {copied && (
              <span className="absolute top-0 right-0 bg-gray-800 text-white text-sm py-1 px-2 rounded">
                Copied
              </span>
            )}

            <span className="flex items-center justify-center gap-[0.3vw]">
              {email}
              <span onClick={copyToClipboard} className="cursor-pointer">
                <PiCopySimpleThin style={{ strokeWidth: "3" }} />
              </span>
            </span>
          </span>
          <span className="text-black text-[1vw] font-[500]">Trainee</span>
        </div>

        {/* div for the Bio */}
        <p className="w-[100%] text-[#808080]">
          Enthusiastic Salesforce trainee with a strong foundation in CRM
          principles, eager to leverage Salesforce skills to optimize business
          processes and drive customer success.
        </p>

        {/* div for the leave and efficiency */}
        <div className="w-[100%] h-[11.5vw] flex items-center justify-center gap-[3vw]">
          {/* Card for Earned Leaves */}
          <div className="bg-white shadow-[2px_2px_4px_0_rgba(0,0,0,0.1)]  rounded-[1vw] h-full">
            <div className="flex flex-col justify-between  w-[192px] h-[175px] p-[20px]   ">
              <div className="p-[10px] bg-[#f3e6e6] rounded-full w-fit text-[#00C308] text-[24px]  ">
                <TbCalendarStats />
              </div>
              <div className="flex flex-col gap-0  ">
                <div className="text-dark-blue font-semibold text-[24px] ">
                  5.5
                </div>
                <div className="text-grey-color font-normal ">
                  Earned Leaves
                </div>
              </div>
            </div>
          </div>

          {/* Card for Efficiency */}
          <div className="bg-white  shadow-[2px_2px_4px_0_rgba(0,0,0,0.1)] rounded-[1vw] h-full ">
            <div className="flex flex-col justify-between w-[192px] h-[175px] p-[20px]   ">
              <div className="p-[10px] bg-[#f3e6e6] rounded-full w-fit text-[#140B83] text-[24px]  ">
                <BsGraphUpArrow />
              </div>
              <div className="flex flex-col gap-0  ">
                <div className="text-dark-blue font-semibold text-[24px] ">
                  80%
                </div>
                <div className="text-grey-color font-normal ">Efficiency</div>
              </div>
            </div>
          </div>
        </div>

        {/* box for the list of skills */}
        <div className="flex flex-col h-auto w-[100%] gap-[1vw]">
          <span className="text-[1.15vw] font-[600]">Skill:</span>
          <div className="flex flex-wrap gap-2 justify-center items-center">
            {skills.map((skill) => (
              <span
                key={index}
                className="border-[#808080] border-[0.0521vw] bg-[#F7F8FC] h-fit w-fit p-2 rounded-[1vw]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* right box */}
      <div className="rounded-[0.68vw] h-vh w-[59%] shadow-md p-[1vw] flex flex-col gap-[1vw]">
        {/* upper box */}
        <div className="shadow-md h-[35%] rounded-[0.42vw] flex flex-col gap-[1.4vw]">
          {/* div for the heading */}
          <div className="flex items-center justify-between p-[1vw]">
            {/* div for the title & links */}
            <div className="flex items-center gap-[1.5vw]">
              <span className="text-[1.15vw] font-[600]">About me:</span>

              {/* icons links */}
              <div className="flex gap-[0.6vw]">
                {/* Facebook icon link */}
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="bg-white rounded-[1vw] p-[0.2vw] inline-block">
                    <FaFacebook style={{ color: "#17A9FD" }} />
                  </span>
                </a>

                {/* Twitter icon link */}
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="bg-white rounded-[1vw] p-[0.2vw] inline-block">
                    <FaTwitter style={{ color: "#1D9BF0" }} />
                  </span>
                </a>

                {/* LinkedIn icon link */}
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="bg-white rounded-[1vw] p-[0.2vw] inline-block">
                    <FaLinkedin style={{ color: "#0E76A8" }} />
                  </span>
                </a>
              </div>
            </div>

            {/* div for view details section & edit icon */}
            <div className="flex items-center gap-[1vw]">
              <Link
                className="underline text-[#4E4DB3] text-[1.09vw]"
                href={"#"}
                onClick={handleViewDetailsClick}
              >
                View Details
              </Link>
              <span
                onClick={() => {
                  setEditEmployeeProfile(true);
                }}
                className="shadow-md bg-white p-[0.3vw] rounded-[0.42vw]"
              >
                <MdEdit />
              </span>
            </div>

            {/* modal for view details */}
            <Modal
              show={showModal}
              onClose={handleCloseModal}
              details={aboutDetails}
            />

            {/* Modal for edit profile */}
            {editEmployeeProfile ? (
              <>
                <EditEmployeeProfile onClose={closeModal} />
              </>
            ) : null}
          </div>

          {/* div for the details */}
          <div className="grid grid-cols-3 gap-x-[5vw] gap-y-[3vw] w-[90%] mx-auto">
            {aboutDetails.map((item) => (
              <div key={index} className="flex flex-col gap-[0.5vw]">
                <span className="text-[#787879] text-[1.04vw]">
                  {item.field} :
                </span>
                <span className="text-[1.15vw]">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* lower box */}
        <div className="h-[65%] rounded-[0.42vw] flex flex-col gap-[1vw] justify-around">
          {/* headings */}
          <div className="flex justify-around items-center border-b-[0.133vw] border-[#DCDCDB] h-[3vw]">
            <span
              onClick={() => handleClick("education")}
              className={`text-[1.1vw] cursor-pointer  ${
                type === "education"
                  ? "border-b-[0.2vw] border-[rgb(59,111,239)]"
                  : "null"
              }`}
            >
              Education
            </span>
            <span
              onClick={() => handleClick("experience")}
              className={`text-[1.1vw] cursor-pointer ${
                type === "experience"
                  ? "border-b-[0.2vw] border-[rgb(59,111,239)]"
                  : "null"
              }`}
            >
              Experience
            </span>
            <span
              onClick={() => handleClick("certification")}
              className={`text-[1.1vw] cursor-pointer ${
                type === "certification"
                  ? "border-b-[0.2vw] border-[rgb(59,111,239)]"
                  : "null"
              }`}
            >
              Certification
            </span>
            <span
              onClick={() => handleEdit()}
              className="cursor-pointer text-[#4E4DB3] text-[0.9vw] shadow-md py-[0.3vw] px-[0.5vw]"
            >
              Edit
            </span>
          </div>

          {/* conditionally the careers data */}
          {type === "education" ? (
            <>
              {mappingData.map((data) => (
                <>
                  {/* mapping the content */}
                  {data.data.map((item) => (
                    <div key={index} className=" h-[6vw] flex items-center justify-center gap-[2vw] ">
                      <span className=" h-[100%] w-[90vw] flex items-center  font-[600] text-[1.15vw]">
                        {item.name}
                      </span>
                      <span className=" h-[100%] w-[100%] flex flex-col  justify-center font-[500] text-[1.15vw]">
                        <span className="text-[#787879] text-[0.68vw]">
                          Passing Year
                        </span>
                        {item.date}
                      </span>
                      <span className="h-[100%] w-[100%] flex flex-col  justify-center text-[1.15vw]">
                        <span className="text-[#787879]  text-[0.68vw] w-[100%]">
                          School
                        </span>
                        {item.place}
                      </span>
                      <a
                        className=" h-[100%] w-[100%] flex items-center text-[1.15vw] text-[#4E4DB3]"
                        href={item.link}
                      >
                        View Details
                      </a>
                    </div>
                  ))}
                </>
              ))}
            </>
          ) : (
            <></>
          )}
          {type === "experience" ? (
            <>
              {mappingData.map((data) => (
                <>
                  {/* mapping the content */}
                  {data.data.map((item) => (
                    <div key={index} className=" h-[6vw] flex items-center justify-center gap-[2vw] ">
                      <span className=" h-[100%] w-[90vw] flex items-center  font-[600] text-[1.15vw]">
                        {item.job_title}
                      </span>
                      <span className=" h-[100%] w-[100%] flex flex-col  justify-center font-[500] text-[1.15vw]">
                        <span className="text-[#787879] text-[0.68vw]">
                          Company
                        </span>
                        {item.company}
                      </span>
                      <span className="h-[100%] w-[100%] flex flex-col  justify-center text-[1.15vw]">
                        <span className="text-[#787879]  text-[0.68vw] w-[100%]">
                          Location
                        </span>
                        {item.location}
                      </span>
                      <a
                        className=" h-[100%] w-[100%] flex items-center text-[1.15vw]  text-[#4E4DB3]"
                        href={item.start_date}
                      >
                        View Details
                      </a>
                    </div>
                  ))}
                </>
              ))}
            </>
          ) : type === "certification" ? (
            <>
              {mappingData.map((data) => (
                <>
                  {/* mapping the content */}
                  {data.data.map((item) => (
                    <div key={index} className=" h-[6vw] flex items-center justify-center gap-[2vw] ">
                      <span className=" h-[100%] w-[90vw] flex items-center  font-[600] text-[1.15vw]">
                        {item.name}
                      </span>
                      <span className=" h-[100%] w-[100%] flex flex-col  justify-center font-[500] text-[1.15vw]">
                        <span className="text-[#787879] text-[0.68vw]">
                          Completion Date
                        </span>
                        {item.date}
                      </span>
                      <span className="h-[100%] w-[100%] flex flex-col  justify-center text-[1.15vw]">
                        <span className="text-[#787879]  text-[0.68vw] w-[100%]">
                          Institute
                        </span>
                        {item.place}
                      </span>
                      <a
                        className=" h-[100%] w-[100%] flex items-center text-[1.15vw]  text-[#4E4DB3]"
                        href={item.link}
                      >
                        {item.duration}
                      </a>
                    </div>
                  ))}
                </>
              ))}
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmployeeProfile;
