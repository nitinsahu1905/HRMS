"use client"
import  { createContext, useEffect, useState } from 'react';
import fetchProfileData from '../Components/fetchProfileData';
const ProfileContext = createContext();

export const ProfileContextProvider= ({children})=>{
    const [profile,setProfile] = useState([{}]);
    const [docId,setDocId] = useState("");
    useEffect(() => {
          if(docId === ""){
            async function fetchData() {
                try {
                    const { data,docId } = await fetchProfileData();
                    setProfile(data);
                    setDocId(docId);
                } catch (error) {
                    console.error('Error fetching profile data:', error);
                }
            }
            fetchData();
            console.log("profile context",profile)
            console.log("docId",docId)
          }
           
            
            
           

        
        
        // Clean up function if needed
        
    });
    // useEffect(()=>{
    //     console.log("profile context",profile)
    // },[profile])

    return (
        <ProfileContext.Provider value={{profile,setProfile,docId}}>
            {children}
        </ProfileContext.Provider>
    )   
}
export default ProfileContext;