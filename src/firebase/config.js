// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCn9QRQZDa7urAX4vY-SV3ljZexUSjcLVw",
  authDomain: "dharmatools-9869e.firebaseapp.com",
  projectId: "dharmatools-9869e",
  storageBucket: "dharmatools-9869e.appspot.com",
  messagingSenderId: "791605255324",
  appId: "1:791605255324:web:8601bc3b1890e61d50a159"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);