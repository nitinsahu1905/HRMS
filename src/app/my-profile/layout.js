"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useContext, useEffect, useRef, useState } from "react";
import { FaPowerOff, FaLinkedin } from "react-icons/fa";
import { MdModeEditOutline, MdOutlineMail } from "react-icons/md";
import Card from "../Components/Card";
import { BsFillHandbagFill } from "react-icons/bs";
import { IoSchool } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { LuSave } from "react-icons/lu";
import { CiEdit } from "react-icons/ci";
import { collection, getDocs, query, where } from "firebase/firestore";
import { authTable, firestoreDB } from "@/app/utils/firebase";
import { doc, updateDoc } from "firebase/firestore";
import {useRouter} from 'next/navigation'
import EditProfile from "../Components/EditProfile";
import fetchProfileData from "../Components/fetchProfileData";
import ProfileContext, { ProfileContextProvider } from "../Context/profileContext";
import { useUser } from "../Context/UserContext";
const adminTable = collection(firestoreDB, "admin");

export default function ProfileLayout({ children }) {
  // getting pathname from the current url
  const routes = usePathname();
  const router = useRouter();

  const [editing, setEditing] = useState(false);
  const [data1, setData] = useState([{}]);
  const [name, setName] = useState("Gourav Goyal");
  const [gotData, setGotData] = useState([{}]);
  const [docId, setDocId] = useState("");
  // const {profile} = useContext(ProfileContext);
  // const {profile}=useContext(ProfileContext);
  const [fetchData, setFetchData] = useState([{}]);
  // setFetchData(profile);
  // setData(profile);

  const [editProfile, setEditProfile] = useState(false);


  const logoutHandler = () => {
    sessionStorage.removeItem("admin");
    window.location.reload();
    router.push("/");

  };
  

 
  // State for the Image edit
  const [editImage, setEditImage] = useState(false);
  const [updatedImage, setUpdatedImage] = useState("/profileImg.jpeg");
  const user = useUser();
  const {userData} = user;
  // const {docuId} = user;
  console.log("profile",userData);
  

  // console.log(docuId);
  
 
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
  const updateName=async ()=>{
    setEditing(false)
    // const userQuery = query(collection(firestoreDB, "admin"), where("userId", "==", "PB27BveZJXhQul4D1dcqekXIlez2"));
    // const querySnapshot = await getDocs(userQuery);
    // querySnapshot.forEach((doc) => {
    //   console.log(doc.id, " => ", doc.data());
    // });
    // await updateDoc(doc(adminTable, "PB27BveZJXhQul4D1dcqekXIlez2"), {
    //   name: name
    // });
   



  }
 
  const handleImageUpdate = (event) => {
    hiddenFileInput.current.click();
  };
  // useEffect(()={
  //   const userQuery = query(collection(firestoreDB, "admin"), where("userId", "==", "PB27BveZJXhQul4D1dcqekXIlez2"));
  // },[])
  useEffect(() => {
    setData(userData);
    
    // const userQuery = query(collection(firestoreDB, "admin"), where("userId", "==", "PB27BveZJXhQul4D1dcqekXIlez2"));
    // let data;
    // getDocs(userQuery).then((querySnapshot) => {
    //   querySnapshot.forEach((doc) => {
    //     data = doc.data();
    //     setData(data);
    //     console.log(doc.id, " => ", doc.data());
    //   });
    // });
    // console.log(data);
    // const fetchData= async()=>{
    //   const {data,docId} = await fetchProfileData();
    //   console.log('fetcheddata',data);
    //   console.log(docId);
    //   // setData(data);
    //   setDocId(docId);
    //   setFetchData(data);
    //   setGotData(data);
    //   console.log('fetchData',fetchData);

    // }
    // fetchData();
    // // console.log('fbData',gotData);
         // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
 
  return (
    
    
    <div className="flex flex-col h-full">
      {/* box for the bg image */}
      <div className="relative ">
        {/* <img src="https://metadologie-operations-dev-ed.my.site.com/empcommunity/s/sfsites/c/img/community/cpt/cpt-profile-banner.png" /> */}
        <Image
          src="https://metadologie-operations-dev-ed.my.site.com/empcommunity/s/sfsites/c/img/community/cpt/cpt-profile-banner.png"
          alt="profile image"
          width={1920}
          height={400}
          className="relative  "
        />
      </div>
 
      {/* box for the content */}
      <div className="">
        {/* box for the navigaiton & image */}
        <div className="bg-secondary-blue flex justify-between items-center lg:h-12 md:h-10 h-8 relative lg:px-12 md:px-9 px-3 ">
          {/* profile image */}
          <div className="relative flex items-center justify-center lg:h-32 lg:w-32 md:h-24 md:w-24 h-16 w-16">

          {/* Inner profile photo div */}
          <div
            className="rounded-full object-cover absolute     bg-white p-1 lg:h-32 lg:w-32 md:h-24 md:w-24 h-16 w-16 "
            onMouseEnter={() => setEditImage(true)}
            onMouseLeave={() => setEditImage(false)}
          >
            {/* <img className="rounded-full " src={updatedImage} /> */}
            <Image
              src={updatedImage}
              alt="profile image"
              width={128}
              height={128}
              className="rounded-full"
            />
            
 
            {/* Edit Icon for image */}
            
            {editImage ? (
              <div className="rounded-full bg-black/40 flex justify-center items-center absolute inset-0 cursor-pointer text-white border-[4px] text-[25px] border-white transition-all duration-500 ease-in-out ">
                <input
                  type="file"
                  accept="image/*"
                  ref={hiddenFileInput}
                  onChange={handleChange}
                  style={{ display: "none" }}
                />
                <button onClick={handleImageUpdate} aria-label="file upload">
                  <MdModeEditOutline />
                </button>
              </div>
            ) : null}
          </div>
          </div>
 
          {/* navigation tabs */}
          <div className="flex h-full ">
 
            {/* link to personal section */}
            <span
              className={`${
                routes === "/my-profile/personal"
                ? "bg-white text-primary-blue"
                : "text-white"
              } md:text-[14px] text-[12px] cursor-pointer flex items-center justify-center px-3 h-full `}
            >
              <Link href="/my-profile/personal">PERSONAL</Link>
            </span>
 
            {/* link to work section */}
            <span
              className={`${
                routes === "/my-profile/work"
                  ? "bg-white text-primary-blue"
                  : "text-white"
              } md:text-[14px] text-[12px] cursor-pointer flex items-center justify-center px-3 h-full `}
            >
              <Link href="/my-profile/work">WORK</Link>
            </span>
          </div>
 
          {/* log-off icon */}
          <span onClick={()=>{logoutHandler()}} className="flex items-center justify-center cursor-pointer text-white">
            
            <Link href="/">
              <FaPowerOff />
            </Link>
          </span>
          
        </div>

        {/* Opening Popup for Editing Profile */}
        <div className="absolute top-0 left-0 ">

        {editProfile?
          <>
          <EditProfile editprofileModal={editProfile} setEditprofileModal={setEditProfile} />
          </>
          :
          null
        }
        </div>
        
        {/* Edit button here */}
        <div className="w-full flex items-center justify-end lg:pr-10 md:pr-9 pr-5 mt-2">
        <button onClick={()=>{setEditProfile(true);
          
          }          
          } className="flex items-center justify-center cursor-pointer text-white bg-button-blue-color md:px-[20px] px-[15px] md:py-[5px] py-[3px] rounded-[5px] ">
            
             Edit
          
          </button>
        </div>

        {/* passing childer component here */}
        <div className="flex md:flex-row flex-col w-full mt-0">
          <div className="lg:w-1/4 md:w-1/3 w-full flex flex-col gap-3 p-5 ">
            <div className="flex flex-col px-3 ">
            {/* Name */}
            <div className="flex  gap-2">
              <div className="font-semibold text-[22px] text-dark-blue ">
              {`${userData[0].firstName} ${userData[0].lastName}`}
              </div>
             
              </div>
             
            </div>

            {/* Left Short Profile Section contains General Information */}
            <div className="shadow-md rounded-[10px] overflow-hidden ">
              <Card>
                <div className="flex flex-col gap-[10px] text-[14px]  ">
                  {/* Designation */}
                  <div className="flex flex-row items-center gap-[10px] text-grey-color ">
                    <div className="flex items-center">
                      <BsFillHandbagFill />
                    </div>
                    <div>
                      <span className="text-dark-blue">{data1[0].designation}</span> at Metadologie
                    </div>
                  </div>
                  {/* School/Institute Name */}
                  <div className="flex flex-row items-center gap-[10px] text-grey-color ">
                    <div className="flex items-center justify-center w-[15px] ">
                      <IoSchool />
                    </div>
                    <div>
                      Went to
                      <span className="text-dark-blue"> {userData[0].school}</span>
                    </div>
                  </div>
                  {/* Location */}
                  <div className="flex flex-row items-center gap-[10px] text-grey-color ">
                    <div className="flex items-center">
                      <FaLocationDot />
                    </div>
                    <div><span className="text-dark-blue">{userData[0].city}</span></div>
                  </div>
                  {/* Email */}
                  <div className="flex flex-row items-center gap-[10px] text-grey-color ">
                    <div className="flex items-center">
                      <MdOutlineMail />
                    </div>
                    <div><span className="text-dark-blue">{userData[0].personalEmailId}</span></div>
                  </div>
                  {/* LinkedIn profile */}
                  <div className="flex flex-row items-center gap-[10px] text-grey-color w-full ">
                  <div className="flex items-start ">
                  <FaLinkedin />
                    </div>
                    <div className="flex flex-wrap"><Link href='https://www.linkedin.com/company/metadologie/' className="text-dark-blue break-all leading-[1.1] hover:text-primary-blue ">{data1[0].linkedin}</Link></div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
          <div className="lg:w-3/4 md:w-2/3 w-full overflow-x-hidden ">{children}</div>
        </div>
      </div>
    </div>
    
  );
}
 