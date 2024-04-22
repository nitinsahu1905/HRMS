import { collection, getDocs, query, where } from "firebase/firestore";
import { firestoreDB } from "@/app/utils/firebase";

export default async function FetchData() {
  const empTable = collection(firestoreDB, "employees");
  const q = query(empTable);
  const querySnapshot = await getDocs(q);
   let data = [];
    let docId;
    querySnapshot.forEach((doc) => {
        // console.log("server comph ",doc.id, " => ", doc.data());

        data.push({...doc.data(), docId: doc.id});
        // docId = doc.id;
    });
    // setProfile(data);
    
    return {data};
}
