// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC2mAVbTPg-RkPDCw72w8Sm1yLZ4BgcbMc",
  authDomain: "newsapp-42459.firebaseapp.com",
  projectId: "newsapp-42459",
  storageBucket: "newsapp-42459.appspot.com",
  messagingSenderId: "636684925354",
  appId: "1:636684925354:web:c31cab66489cc9ced393d3",
  measurementId: "G-2Z679B0XYL",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
