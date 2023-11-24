// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkpnDJMHxQ9bmC40hU9kEJErpuLdU0xgI",
  authDomain: "chatroom-react-24d6f.firebaseapp.com",
  projectId: "chatroom-react-24d6f",
  storageBucket: "chatroom-react-24d6f.appspot.com",
  messagingSenderId: "322772137700",
  appId: "1:322772137700:web:1ed095ff9b30c9b8891ef1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
