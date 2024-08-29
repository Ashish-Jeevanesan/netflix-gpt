//for hosting our site

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBV_i0S8GHWiQxI2BdRw_Ryud5P1tFmjJc",
  authDomain: "netflixgpt-fe9e8.firebaseapp.com",
  projectId: "netflixgpt-fe9e8",
  storageBucket: "netflixgpt-fe9e8.appspot.com",
  messagingSenderId: "1097469698088",
  appId: "1:1097469698088:web:d93d7b1c613e33ba5c551d",
  measurementId: "G-TBZ5EFJJ8K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
