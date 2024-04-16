// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getStorage } from "firebase/storage";
// import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGOHcS7a-D6XJ8JnNDO0N6N8gBgWHqUsA",
  authDomain: "adminpanel-16c7a.firebaseapp.com",
  projectId: "adminpanel-16c7a",
  storageBucket: "adminpanel-16c7a.appspot.com",
  messagingSenderId: "54015576898",
  appId: "1:54015576898:web:becf5f7fc76481619756db",
  measurementId: "G-BM3BFBJVFD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export { app };
export const authTable = getAuth(app);
export const firestoreDB = getFirestore(app);
