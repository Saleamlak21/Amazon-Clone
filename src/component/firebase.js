
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4Qeccidu7m7GAW8HaLtC4dIKYuL1uzk0",
  authDomain: "fifth-base-398400.firebaseapp.com",
  projectId: "fifth-base-398400",
  storageBucket: "fifth-base-398400.appspot.com",
  messagingSenderId: "504480769425",
  appId: "1:504480769425:web:23b0a53235e3d4ca796630",
  measurementId: "G-HEXBS95DXM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app)

export {auth}
