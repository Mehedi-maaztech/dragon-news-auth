import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfmpua2nWLprP2Nt27ZXxp1o9ofdUSUOI",
  authDomain: "dragon-news-a7b10.firebaseapp.com",
  projectId: "dragon-news-a7b10",
  storageBucket: "dragon-news-a7b10.firebasestorage.app",
  messagingSenderId: "909753497739",
  appId: "1:909753497739:web:27277b1aae5752ade57c8e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;