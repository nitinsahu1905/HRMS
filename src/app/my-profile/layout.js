"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
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
const adminTable = collection(firestoreDB, "admin");

export default function ProfileLayout({ children }) {
  // getting pathname from the current url
  const routes = usePathname();
  const router = useRouter();

  const [editing, setEditing] = useState(false);
  const [data, setData] = useState([{}]);
  const [name, setName] = useState("Gourav Goyal");

  const [editProfile, setEditProfile] = useState(false);


  const logoutHandler = () => {
    sessionStorage.removeItem("admin");
    window.location.reload();
    router.push("/");

  };
  

 
  // State for the Image edit
  const [editImage, setEditImage] = useState(false);
  const [updatedImage, setUpdatedImage] = useState("/profileImg.jpeg");
  
 
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
    
    const userQuery = query(collection(firestoreDB, "admin"), where("userId", "==", "PB27BveZJXhQul4D1dcqekXIlez2"));
    let data;
    getDocs(userQuery).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        data = doc.data();
        setData(data);
        console.log(doc.id, " => ", doc.data());
      });
    });
    console.log(data);
   
  }, [])
  
 
  return (
    <div className="flex flex-col h-full">
      {/* box for the bg image */}
      <div className="relative">
        <img src="https://metadologie-operations-dev-ed.my.site.com/empcommunity/s/sfsites/c/img/community/cpt/cpt-profile-banner.png" />
      </div>
 
      {/* box for the content */}
      <div className="">
        {/* box for the navigaiton & image */}
        <div className="bg-secondary-blue flex justify-evenly items-center h-12 relative ">
          {/* profile image */}
          <div
            className="rounded-full object-cover absolute top-[-40px] left-[60px]  bg-white p-1 h-32 w-32 "
            onMouseEnter={() => setEditImage(true)}
            onMouseLeave={() => setEditImage(false)}
          >
            <img className="rounded-full " src={updatedImage} />
 
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
 
          {/* navigation tabs */}
          <div className="flex h-full ">
 
            {/* link to personal section */}
            <span
              className={`${
                routes === "/my-profile/personal"
                ? "bg-white text-primary-blue"
                : "text-white"
              } text-[14px] cursor-pointer flex items-center justify-center p-3`}
            >
              <Link href="/my-profile/personal">PERSONAL</Link>
            </span>
 
            {/* link to work section */}
            <span
              className={`${
                routes === "/my-profile/work"
                  ? "bg-white text-primary-blue"
                  : "text-white"
              } text-[14px] cursor-pointer flex items-center justify-center p-3 `}
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
        <div className="w-full flex items-center justify-end pr-10 mt-2">
        <button onClick={()=>{setEditProfile(true);
          
          }          
          } className="flex items-center justify-center cursor-pointer text-white bg-button-blue-color px-[10px] py-[5px] rounded-[5px] ">
            
             Edit
          
          </button>
        </div>

        {/* passing childer component here */}
        <div className="flex flex-row w-full mt-0">
          <div className="w-1/4 flex flex-col gap-3 p-5 ">
            <div className="flex flex-col px-3 ">
            {/* Name */}
            {editing ? (
              <div className="flex gap-2">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="text-dark-blue text-[22px] font-semibold bg-gray-200 p-1 rounded-[5px] border-bg-primary-blue border-2 w-52 border-solid"
              />
              <button className="text-gray-600" onClick={updateName}><LuSave /></button>
              </div>
 
             )  :(
              <div className="flex  gap-2">
              <div className="font-semibold text-[22px] text-dark-blue ">
                {name}
              </div>
              <button onClick={()=>{setEditing(true)}}><CiEdit /></button>
              </div>
             )}
             
              {/* <div className=" text-[16px] font-normal ">CEO at Metadologie</div> */}
            </div>
            <div className="shadow-md rounded-[10px] ">
              <Card>
                <div className="flex flex-col gap-[10px] text-[14px]  ">
                  {/* Designation */}
                  <div className="flex flex-row items-center gap-[10px] text-grey-color ">
                    <div className="flex items-center">
                      <BsFillHandbagFill />
                    </div>
                    <div>
                      <span className="text-dark-blue">CEO</span> at Metadologie
                    </div>
                  </div>
                  {/* School/Institute Name */}
                  <div className="flex flex-row items-center gap-[10px] text-grey-color ">
                    <div className="flex items-center justify-center w-[15px] ">
                      <IoSchool />
                    </div>
                    <div>
                      Went to
                      <span className="text-dark-blue"> Jaipur Cambridge </span>
                    </div>
                  </div>
                  {/* Location */}
                  <div className="flex flex-row items-center gap-[10px] text-grey-color ">
                    <div className="flex items-center">
                      <FaLocationDot />
                    </div>
                    <div><span className="text-dark-blue">Jaipur</span></div>
                  </div>
                  {/* Email */}
                  <div className="flex flex-row items-center gap-[10px] text-grey-color ">
                    <div className="flex items-center">
                      <MdOutlineMail />
                    </div>
                    <div><span className="text-dark-blue">admin@gmail.com</span></div>
                  </div>
                  {/* LinkedIn profile */}
                  <div className="flex flex-row items-center gap-[10px] text-grey-color w-full ">
                  <div className="flex items-start ">
                  <FaLinkedin />
                    </div>
                    <div className="flex flex-wrap"><Link href='https://www.linkedin.com/company/metadologie/' className="text-dark-blue break-all leading-[1.1] hover:text-primary-blue ">https://www.linkedin.com/company/metadologie/</Link></div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
          <div className="w-3/4">{children}</div>
        </div>
      </div>
    </div>
  );
}
 