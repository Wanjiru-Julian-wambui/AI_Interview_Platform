// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaq4FqFrn6HIm61RphNvhLoHWtNRLt9OE",
  authDomain: "prepwise-b05f6.firebaseapp.com",
  projectId: "prepwise-b05f6",
  storageBucket: "prepwise-b05f6.firebasestorage.app",
  messagingSenderId: "630854872127",
  appId: "1:630854872127:web:eed2ad7dcb9d05bb2adc8a",
  measurementId: "G-1D2C7NSNZR"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();


export const auth = getAuth(app);
export const db = getFirestore(app);