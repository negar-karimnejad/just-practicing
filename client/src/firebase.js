// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-412119.firebaseapp.com",
  projectId: "mern-auth-412119",
  storageBucket: "mern-auth-412119.appspot.com",
  messagingSenderId: "861089240008",
  appId: "1:861089240008:web:3c33fb685ac72d74b5e6fd",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
