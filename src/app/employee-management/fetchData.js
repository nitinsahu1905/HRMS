import { collection, getDocs, query, where } from "firebase/firestore";
import { firestoreDB } from "@/app/utils/firebase";

export default async function FetchData() {
  const empTable = collection(firestoreDB, "employees");
  const q = query(empTable);
  const querySnapshot = await getDocs(q);
  let data = querySnapshot.docs.map((doc) => doc.data());
  return data;
}
