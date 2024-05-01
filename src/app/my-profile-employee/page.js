"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import profileImg from "../../../public/img1.jpeg";
import { MdEdit } from "react-icons/md";
import { RiCalendarScheduleFill } from "react-icons/ri";
import { TbCalendarStats } from "react-icons/tb";
import { BsGraphUpArrow } from "react-icons/bs";
import WhiteCardWithShadow from "../Components/WhiteCardWithShadow";
import band from '../../../public/band.png'
import EditEmployeeProfile from "../Components/EditEmployeeProfile";

const MyProfile = () => {
    const [updatedImage, setUpdatedImage] = useState("/img1.jpeg");

    const [startIndex, setStartIndex] = useState(0);
    const [editEmployeeProfile, setEditEmployeeProfile] = useState(false);
    // {console.log(editProfile)}

    const AchievemntsData = [
        {id: 1, emp_id:"MCL001", emp_name:"Lakshya Agarwal", title: "Salesforce Basic Certification", certification_date: "Feb 02, 2024" },
        {id: 2, emp_id:"MCL001", emp_name:"Lakshya Agarwal", title: "Salesforce Advance Certification", certification_date: "Apr 09, 2024" },
        {id: 2, emp_id:"MCL001", emp_name:"Lakshya Agarwal", title: "Salesforce Advance Certification", certification_date: "Apr 19, 2024" },
        {id: 3, emp_id:"MCL001", emp_name:"Lakshya Agarwal", title: "Javascript Certification", certification_date: "Apr 25, 2024" },
        {id: 3, emp_id:"MCL001", emp_name:"Lakshya Agarwal", title: "CSS Certification", certification_date: "Jan 15, 2024" },
    ]


    useEffect(() => {
        const interval = setInterval(() => {
            setStartIndex((prevIndex) =>
                prevIndex === AchievemntsData.length - 3 ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => clearInterval(interval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    const closeModal = () =>{
        setEditEmployeeProfile(false)
    }

    const hiddenFileInput = useRef(null);

    const handleChange = (event) => {
        if (event.target.files) {
          console.log(event.target.files[0]);
          const file = event.target.files[0];
          if (file) {
            const reader = new FileReader();
            console.log(reader);
            reader.onloadend = () => {
              setUpdatedImage(reader.result);
            };
            reader.readAsDataURL(file);
          }
        }
      };

      const handleImageUpdate = (event) => {
        hiddenFileInput.current.click();
      };

    


  return (
    <div className=" relative p-[0px] ">
      <div className="bg-sky-color p-[20px] rounded-[10px] flex flex-col gap-[10px] h-full ">
        {/* Upper Profile Section - Image, Name and Emial Id */}
        <div className="relative flex flex-row gap-[20px] px-[10px] py-[10px] ">
          {/* Profile Image */}
          <div className="flex items-center justify-center rounded-full object-cover relative  lg:h-24 lg:w-24 md:h-16 md:w-16 h-10 w-10 ">
            <Image
            //   src={profileImg}
              src={updatedImage}
              alt="Profile Image"
              className="rounded-full"
              width={128}
              height={128}
            />
            <input
                  type="file"
                  accept="image/*"
                  ref={hiddenFileInput}
                  onChange={handleChange}
                  style={{ display: "none" }}
                />
            <button onClick={handleImageUpdate} aria-label="file upload" className="absolute bottom-0 right-0 border-2 border-[#f7f7f7] text-white bg-primary-blue p-[5px] rounded-full flex justify-center items-center cursor-pointer ">
            <MdEdit/>
          </button>
          </div>
          
          {/* Name and Email */}
          <div className="flex flex-col justify-center gap-[10px] ">
            {/* Name */}
            <div className="text-[32px] font-semibold font-poppins text-dark-blue ">
                Lakshya Agarwal
            </div>
            {/* Email */}
            <div className="font-normal text-[14px] text-grey-color ">
                lakshya.agarwal@metadologie.com
            </div>

          </div>
        </div>
        
        {/* Middle Line in Profile */}
        <div className="mx-[10px] w-full h-[2px] bg-grey-color "></div>

        {/* Below Profile Section */}
        <div className="flex flex-row gap-[40px] px-[10px] py-[20px] ">
        
            {/* Left Side Section */}
            <div className="flex flex-col gap-[40px] py-[10px] w-[60%] ">
                {/* Row 1 for Blocks contain some Details */}
                <div className="flex flex-wrap px-[2x] gap-x-[10px] gap-y-[45px]  ">
                    {/* Employee Code */}
                    <div className="w-[200px] px-[15px] flex flex-col justify-between gap-[5px]  border-l-2 border-primary-blue ">
                        <div className="text-[24px] font-medium text-dark-blue  ">
                            MCL001
                        </div>
                        <div className=" font-normal text-grey-color ">
                            Employee Code
                        </div>

                    </div>
                    {/* Department */}
                    <div className="w-[200px] px-[15px] flex flex-col justify-between gap-[5px]  border-l-2 border-primary-blue ">
                        <div className="text-[24px] font-medium text-dark-blue  ">
                            UI
                        </div>
                        <div className=" font-normal text-grey-color ">
                            Department
                        </div>

                    </div>
                    {/* Designation */}
                    <div className="w-[250px] px-[15px] flex flex-col justify-between gap-[5px]  border-l-2 border-primary-blue ">
                        <div className="text-[24px] font-medium text-dark-blue  ">
                            Frontend Developer Inten
                        </div>
                        <div className=" font-normal text-grey-color ">
                            Designation
                        </div>

                    </div>
                    {/* Experience */}
                    <div className="w-[200px] px-[15px] flex flex-col justify-between gap-[5px]  border-l-2 border-primary-blue ">
                        <div className="text-[24px] font-medium text-dark-blue  ">
                            1 Year
                        </div>
                        <div className=" font-normal text-grey-color ">
                            Experience
                        </div>

                    </div>
                    {/* Date of Joining */}
                    <div className="w-[200px] px-[15px] flex flex-col justify-between gap-[5px]  border-l-2 border-primary-blue ">
                        <div className="text-[24px] font-medium text-dark-blue  ">
                            Feb 12, 2024
                        </div>
                        <div className=" font-normal text-grey-color ">
                            Date of Joining
                        </div>

                    </div>
                </div>

                {/* Row 2 for Cards of leave and efficiency */}
                <div className="flex flex-row px-[2x] gap-[35px] ">
                    {/* Card for Earned Leaves */}
                    <WhiteCardWithShadow>

                    <div className="flex flex-col justify-between  w-[192px] h-[175px] p-[20px]   ">
                        <div className="p-[10px] bg-[#f3e6e6] rounded-full w-fit text-[#00C308] text-[24px]  ">
                            <TbCalendarStats />
                        </div>
                        <div className="flex flex-col gap-0  ">
                            <div className="text-dark-blue font-semibold text-[24px] ">
                                2.5
                            </div>
                            <div className="text-grey-color font-normal ">
                                Earned Leaves
                            </div>

                        </div>
                    </div>
                    </WhiteCardWithShadow>
                    {/* Card for Efficiency */}
                    <WhiteCardWithShadow>
                    <div className="flex flex-col justify-between w-[192px] h-[175px] p-[20px]   ">
                        <div className="p-[10px] bg-[#f3e6e6] rounded-full w-fit text-[#140B83] text-[24px]  ">
                            <BsGraphUpArrow />
                        </div>
                        <div className="flex flex-col gap-0  ">
                            <div className="text-dark-blue font-semibold text-[24px] ">
                                70%
                            </div>
                            <div className="text-grey-color font-normal ">
                                Efficiency
                            </div>

                        </div>
                    </div>

                    </WhiteCardWithShadow>
                </div>

                {/* Row 3 for Achievement Section */}
                <div className="flex flex-row gap-[35px]  p-[2px] h-[210px] overflow-x-scroll scrollbar-hide transition-all ease-in-out duration-1000  ">
                    {AchievemntsData.slice(startIndex,startIndex + 3).map((achievement, index)=>(
                        <WhiteCardWithShadow key={index} >
                            <div className="w-[192px] h-full flex flex-col gap-[25px] p-[10px] items-center justify-between  ">
                                <div className="w-[68px] h-[68px] ">
                                    <Image src={band} alt="Certificate Badge" />
                                </div>
                                <div className="text-dark-blue text-center font-medium " >
                                    {achievement.title}
                                </div>
                                <div className="text-primary-blue ">
                                    {achievement.certification_date}
                                </div>
                            </div>
                        </WhiteCardWithShadow>
                    ))}

                    
                </div>

            </div>
            {/* Right Side Section */}
            <WhiteCardWithShadow>

            <div className="flex flex-col gap-[10px] p-[20px] h-fit   ">
                {/* Personal Information Heading */}
                <div className="flex flex-row w-full justify-between items-center ">
                    <div className="font-medium text-[24px]  ">
                        Personal Information
                    </div>
                    <button className="cursor-pointer" onClick={()=>{setEditEmployeeProfile(true)}}>
                        <MdEdit /> 
                    </button>
                </div>
                {/* Details personal Information */}
                <div className="flex flex-col gap-[25px] py-[10px] px-[5px]  ">
                    {/* Name */}
                    <div className="grid grid-cols-2  ">
                        <div className="text-grey-color ">Name</div>
                        <div className="text-dark-blue ">Lakshya Agarwal</div>
                    </div>
                    {/* Gender */}
                    <div className="grid grid-cols-2  ">
                        <div className="text-grey-color ">Gender</div>
                        <div className="text-dark-blue ">Male</div>
                    </div>
                    {/* Reporting Manager */}
                    <div className="grid grid-cols-2  ">
                        <div className="text-grey-color ">Reporting Manager</div>
                        <div className="text-dark-blue ">Bheem Singh</div>
                    </div>
                    {/* DOB */}
                    <div className="grid grid-cols-2  ">
                        <div className="text-grey-color ">Date of Birth</div>
                        <div className="text-dark-blue ">Jan 01, 2000</div>
                    </div>
                    {/* Age */}
                    <div className="grid grid-cols-2  ">
                        <div className="text-grey-color ">Age</div>
                        <div className="text-dark-blue ">23</div>
                    </div>
                    {/* Country */}
                    <div className="grid grid-cols-2  ">
                        <div className="text-grey-color ">Country</div>
                        <div className="text-dark-blue ">India</div>
                    </div>
                    {/* Mobile No */}
                    <div className="grid grid-cols-2  ">
                        <div className="text-grey-color ">Mobile No.</div>
                        <div className="text-dark-blue ">9988998899</div>
                    </div>
                    {/* Blood Group */}
                    <div className="grid grid-cols-2  ">
                        <div className="text-grey-color ">Blood Group</div>
                        <div className="text-dark-blue ">B+</div>
                    </div>
                    {/* Edu Qual */}
                    <div className="grid grid-cols-2  ">
                        <div className="text-grey-color ">Educational Qualification</div>
                        <div className="text-dark-blue ">MCA</div>
                    </div>

                </div>



                

            </div>
            </WhiteCardWithShadow>

            {editEmployeeProfile?
                <>
                    <EditEmployeeProfile onClose={closeModal} /> 
                </>
                    :
                    null
                }

        </div>
      </div>
    </div>
  );
};

export default MyProfile;
