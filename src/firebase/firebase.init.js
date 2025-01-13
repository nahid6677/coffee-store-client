// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhOprp8cj0NmvReTbR1FwYZTm_Gh6WDLQ",
  authDomain: "coffee-store-bbcf4.firebaseapp.com",
  projectId: "coffee-store-bbcf4",
  storageBucket: "coffee-store-bbcf4.firebasestorage.app",
  messagingSenderId: "1038581911256",
  appId: "1:1038581911256:web:a9291aabe3c58d8ff491ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);