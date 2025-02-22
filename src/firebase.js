// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAu32Bt3QuCySFDql4qlmHnYqI8cl1P7U",
  authDomain: "bus-in-out.firebaseapp.com",
  projectId: "bus-in-out",
  storageBucket: "bus-in-out.firebasestorage.app",
  messagingSenderId: "701414498900",
  appId: "1:701414498900:web:c1d1b8bade0615972503c1",
  measurementId: "G-HKQEB5CES4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);