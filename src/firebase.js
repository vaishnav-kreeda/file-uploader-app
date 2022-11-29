// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPx_WiifSjzHCr8OKT3D_ekHB_RIecYNs",
  authDomain: "file-upload-app-650ad.firebaseapp.com",
  projectId: "file-upload-app-650ad",
  storageBucket: "file-upload-app-650ad.appspot.com",
  messagingSenderId: "19138815259",
  appId: "1:19138815259:web:4ab85258b1fa679aa0dfbe",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
