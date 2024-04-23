// import { authTable, firestoreDB } from "../utils/firebase";
// import { collection, getDocs, query, where } from "firebase/firestore";
"use client"
import { collection, getDocs, query, where } from "firebase/firestore";
import { authTable, firestoreDB } from "@/app/utils/firebase";
import { useUser } from "@/app/Context/UserContext";

export default  function Personal() {
  // const uid = sessionStorage.getItem("userId");
  const user = useUser();
  const {userData} = user;
  // const adminTable = collection(firestoreDB, "admin");
  // const q = query(
  //   adminTable,
  //   where("userId", "==", "PB27BveZJXhQul4D1dcqekXIlez2")
  // );
  // const querySnapshot = await getDocs(q);
  // // console.log('personal',querySnapshot)
  // let data = querySnapshot.docs.map((doc) => doc.data());
  // // console.log("props Wala",data1);

  return (
    <div className="flex font-poppins">
      {/* box for the right side */}
      <div className="w-full gap-28">
        {/* first row for the data */}
        <div className="w-full text-sm flex items-center lg:gap-32 md:gap-20 gap-10 p-8 py-5  border-b border-dashed border-gray-400">
          <span className="w-14">DOB:</span>
          <span className="text-left">{userData[0].DOB}</span>
        </div>

        {/* second row for the data */}
        <div className="text-sm flex items-center lg:gap-32 md:gap-20 gap-10 p-8 py-5 border-b border-dashed border-gray-400">
          <span className="w-14">EMAIL:</span>
          <span className="text-left">{userData[0].personalEmailId}</span>
        </div>

        {/* 3rd row for the data */}
        <div className="text-sm flex items-center lg:gap-32 md:gap-20 gap-10 p-8 py-5 border-b border-dashed border-gray-400">
          <span className="w-14">GENDER:</span>
          <span className="text-left">{userData[0].gender}</span>
        </div>

        {/* 4th row for the data */}
        <div className="text-sm flex items-center lg:gap-32 md:gap-20 gap-10 p-8 py-5 border-b border-dashed border-gray-400">
          <span className="w-14">PHONE:</span>
          <span className="text-left">{userData[0].mobile}</span>
        </div>

        {/* 5th row for the data */}
        <div className="text-sm flex items-center lg:gap-32 md:gap-20 gap-10 p-8 py-5 border-b border-dashed border-gray-400">
          <span className="w-14">ADDRESS:</span>
          <span className="text-left">{userData[0].address}</span>
        </div>
      </div>
    </div>
  );
}
