// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZ_KRCcbSPvZ__x3Hr2nD9SYZNrn_F9Lc",
  authDomain: "netflix-gpt-d29c9.firebaseapp.com",
  projectId: "netflix-gpt-d29c9",
  storageBucket: "netflix-gpt-d29c9.appspot.com",
  messagingSenderId: "687408347544",
  appId: "1:687408347544:web:30061f2bed1f27bc4dd3ed",
  measurementId: "G-TZVT2B0L3T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);