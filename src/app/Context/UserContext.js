"use client";
import { createContext, useContext, useEffect, useState } from "react";
import firebase from 'firebase/app';
import 'firebase/firestore';
import fetchProfileData from "../Components/fetchProfileData";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState([{}]);;
  const [docId, setDocId] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
       const {data, docId} = await fetchProfileData();
         setUserData(data);
         setDocId(docId);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);
  const userContextValue = { userData, docId };
  return (
    <UserContext.Provider value={userContextValue}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);

