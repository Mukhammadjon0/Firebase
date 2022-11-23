// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDmDgy9Y8BvU4BNx3ZadLin6bgccqxLgqE",
  authDomain: "olx-uz-501bd.firebaseapp.com",
  projectId: "olx-uz-501bd",
  storageBucket: "olx-uz-501bd.appspot.com",
  messagingSenderId: "47368570689",
  appId: "1:47368570689:web:d83a3792e95371132c83c0",
  measurementId: "G-2TQ1HHFQLS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();
