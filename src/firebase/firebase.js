// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA1SWHBaNY7392NztGKb54kzXCw7TIPKq8",
  authDomain: "fol-cp.firebaseapp.com",
  projectId: "fol-cp",
  storageBucket: "fol-cp.appspot.com",
  messagingSenderId: "1037265336595",
  appId: "1:1037265336595:web:d64a30c15d2eab5ee902e6",
  measurementId: "G-5DWW8S2RNB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export const storage = getStorage();
export const db = getFirestore(app);
