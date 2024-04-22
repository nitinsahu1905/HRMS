import { collection, getDocs, query, where } from "firebase/firestore";
import { useContext } from "react";
import ProfileContext from "../Context/profileContext";
import { firestoreDB } from "@/app/utils/firebase";
export default async function fetchProfileData() {
    // const { profile, setProfile } = useContext(ProfileContext);
    const q = query(collection(firestoreDB, "users"), where("userId", "==", "PB27BveZJXhQul4D1dcqekXIlez2"));
    const querySnapshot = await getDocs(q);
    let data = [];
    let docId;
    querySnapshot.forEach((doc) => {
        // console.log("server comph ",doc.id, " => ", doc.data());
        data.push(doc.data());
        docId = doc.id;
    });
    // setProfile(data);
    
    return {data, docId};


   
}