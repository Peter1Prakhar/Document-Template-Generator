// firebase.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZPMUZC2Z22Mo-Ujcq8DxZhTzIE6Olq94",
  authDomain: "react-firebase-storage-cc9e4.firebaseapp.com",
  projectId: "react-firebase-storage-cc9e4",
  storageBucket: "react-firebase-storage-cc9e4.appspot.com",
  messagingSenderId: "997388989426",
  appId: "1:997388989426:web:6d15c64532ee7f52efb16b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
