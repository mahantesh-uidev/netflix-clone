// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATeSvjiiErsocA6nCO1CaO9aLCovfLOI0",
  authDomain: "netflixgpt-dc872.firebaseapp.com",
  projectId: "netflixgpt-dc872",
  storageBucket: "netflixgpt-dc872.appspot.com",
  messagingSenderId: "457192185997",
  appId: "1:457192185997:web:16a3fc67f17f69e40bc2c4",
  measurementId: "G-2BE8PH0CZH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();