// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxLiN0bpFflRQwN8Ug7brnBwVk-I-K1k4",
  authDomain: "react-auth-1st.firebaseapp.com",
  projectId: "react-auth-1st",
  storageBucket: "react-auth-1st.appspot.com",
  messagingSenderId: "171701662583",
  appId: "1:171701662583:web:536c6152615d80e7932772"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);