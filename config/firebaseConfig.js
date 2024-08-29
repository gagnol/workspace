// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "loopy-41394.firebaseapp.com",
  projectId: "loopy-41394",
  storageBucket: "loopy-41394.appspot.com",
  messagingSenderId: "389291052261",
  appId: "1:389291052261:web:59e82ffb39c0a8bdd4180c",
  measurementId: "G-YB7CBNW11Y"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
const analytics = getAnalytics(app);