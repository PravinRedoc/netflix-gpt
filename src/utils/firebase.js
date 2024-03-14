// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBR4V13o_yMyTRNpM1h23ZSplZy8Coiz3E",
  authDomain: "netflixgpt-21f8b.firebaseapp.com",
  projectId: "netflixgpt-21f8b",
  storageBucket: "netflixgpt-21f8b.appspot.com",
  messagingSenderId: "599581882262",
  appId: "1:599581882262:web:9c4e7555019c456869cfb7",
  measurementId: "G-2Y0W8EXTL4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();