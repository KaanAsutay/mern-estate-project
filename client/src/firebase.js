// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-stack-37f7f.firebaseapp.com",
  projectId: "mern-stack-37f7f",
  storageBucket: "mern-stack-37f7f.appspot.com",
  messagingSenderId: "510199437753",
  appId: "1:510199437753:web:28b9d64a69380042523e68"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);