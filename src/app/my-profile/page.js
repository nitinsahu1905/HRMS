import Personal from "./personal/page";
import { collection, getDocs, query, where } from "firebase/firestore";

import { firestoreDB } from "@/app/utils/firebase";
// exporting default page on the my-profile
export default async function MyTeams() {
  const q = query(collection(firestoreDB, "users"), where("userId", "==", "PB27BveZJXhQul4D1dcqekXIlez2"));
  const querySnapshot = await getDocs(q);
  let data = [];
  let docId;
  querySnapshot.forEach((doc) => {
    console.log("inside Page",doc.id, " => ", doc.data());
    data.push(doc.data());
    docId = doc.id;
  });

  return <Personal />;
}


// return { data, docId };