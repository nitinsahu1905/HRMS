import { collection, getDocs, query, where } from "firebase/firestore";
import { authTable, firestoreDB } from "@/app/utils/firebase";
export default async function Work() {
  const adminTable = collection(firestoreDB, "admin");
  const q = query(
    adminTable,
    where("userId", "==", "PB27BveZJXhQul4D1dcqekXIlez2")
  );
  const querySnapshot = await getDocs(q);
  // console.log(querySnapshot)
  let data = querySnapshot.docs.map((doc) => doc.data());
  console.log(data);
  return (
    <div className="flex font-poppins">
      {/* box for the right side */}
      <div className="w-full gap-28">
        {/* first row for the data */}
        <div className="text-sm flex items-center gap-32 p-8 py-6 h-14 border-b border-dashed border-gray-400">
          <span className="w-14">MANAGER:</span>
          <span>{data[0].MANAGER}</span>
        </div>

        {/* second row for the data */}
        <div className="text-sm flex items-center gap-32 p-8 h-11 border-b border-dashed border-gray-400">
          <span className="w-14">EMPLOYEE CODE:</span>
          <span>MCL001</span>
        </div>

        {/* 3rd row for the data */}
        <div className="text-sm flex items-center gap-32 p-8 h-11 border-b border-dashed border-gray-400">
          <span className="w-14">EMAIL:</span>
          <span>{data[0].email}</span>
        </div>

        {/* 4th row for the data */}
        <div className="text-sm flex items-center gap-32 p-8 h-11 border-b border-dashed border-gray-400">
          <span className="w-14">EARNED LEAVES:</span>
          <span className="">5.5</span>
        </div>
      </div>
    </div>
  );
}
