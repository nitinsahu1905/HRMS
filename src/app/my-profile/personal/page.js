// import { authTable, firestoreDB } from "../utils/firebase";
// import { collection, getDocs, query, where } from "firebase/firestore";
import { collection, getDocs, query, where } from "firebase/firestore";
import { authTable, firestoreDB } from "@/app/utils/firebase";

export default async function Personal() {
  // const uid = sessionStorage.getItem("userId");
  const adminTable = collection(firestoreDB, "admin");
  const q = query(
    adminTable,
    where("userId", "==", "PB27BveZJXhQul4D1dcqekXIlez2")
  );
  const querySnapshot = await getDocs(q);
  // console.log(querySnapshot)
  let data = querySnapshot.docs.map((doc) => doc.data());
  // console.log(data);

  return (
    <div className="flex font-poppins">
      {/* box for the right side */}
      <div className="w-full gap-28">
        {/* first row for the data */}
        <div className="w-full text-sm flex items-center gap-32 p-8 py-6 h-14 border-b border-dashed border-gray-400">
          <span className="w-14">DOB:</span>
          <span>{data[0].DOB}</span>
        </div>

        {/* second row for the data */}
        <div className="text-sm flex items-center gap-32 p-8 h-11 border-b border-dashed border-gray-400">
          <span className="w-14">EMAIL:</span>
          <span>{data[0].email}</span>
        </div>

        {/* 3rd row for the data */}
        <div className="text-sm flex items-center gap-32 p-8 h-11 border-b border-dashed border-gray-400">
          <span className="w-14">GENDER:</span>
          <span>{data[0].GENDER}</span>
        </div>

        {/* 4th row for the data */}
        <div className="text-sm flex items-center gap-32 p-8 h-11 border-b border-dashed border-gray-400">
          <span className="w-14">PHONE:</span>
          <span className="">{data[0].PHONE}</span>
        </div>

        {/* 5th row for the data */}
        <div className="text-sm flex items-center gap-32 p-8 h-11 border-b border-dashed border-gray-400">
          <span className="w-14">ADDRESS:</span>
          <span className="">{data[0].ADDRESS}</span>
        </div>
      </div>
    </div>
  );
}
