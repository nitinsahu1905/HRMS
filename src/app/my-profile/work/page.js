"use client";
import { collection, getDocs, query, where } from "firebase/firestore";

import { authTable, firestoreDB } from "@/app/utils/firebase";
import { useUser } from "@/app/Context/UserContext";
export default  function Work() {
  const user = useUser();
  const {userData} = user;
  // console.log("work", userData);

  // const adminTable = collection(firestoreDB, "admin");
  // const q = query(
  //   adminTable,
  //   where("userId", "==", "PB27BveZJXhQul4D1dcqekXIlez2")
  // );
  // const querySnapshot = await getDocs(q);
  // // console.log(querySnapshot)
  // let data = querySnapshot.docs.map((doc) => doc.data());
  // console.log("work",data);
  return (
    <div className="flex font-poppins">
      {/* box for the right side */}
      <div className="w-full gap-28">
        {/* first row for the data */}
        <div className="text-sm flex items-center lg:gap-32 md:gap-20 gap-10 p-8 py-6 py-5 border-b border-dashed border-gray-400">
          <span className="w-14">MANAGER:</span>
          <span>{userData[0].MANAGER}</span>
        </div>
                
        {/* second row for the data */}
        <div className="text-sm flex items-center lg:gap-32 md:gap-20 gap-10 p-8 py-5 border-b border-dashed border-gray-400">
          <span className="w-14">EMPLOYEE CODE:</span>
          <span>MCL001</span>
        </div>

        {/* 3rd row for the data */}
        <div className="text-sm flex items-center lg:gap-32 md:gap-20 gap-10 p-8 py-5 border-b border-dashed border-gray-400">
          <span className="w-14">EMAIL:</span>
          <span>{userData[0].officialMailId
}</span>
        </div>

        {/* 4th row for the data */}
        <div className="text-sm flex items-center lg:gap-32 md:gap-20 gap-10 p-8 py-5 border-b border-dashed border-gray-400">
          <span className="w-14">EARNED LEAVES:</span>
          <span className="">5.5</span>
        </div>
      </div>
    </div>
  );
}
