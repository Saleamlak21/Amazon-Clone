import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD4Qeccidu7m7GAW8HaLtC4dIKYuL1uzk0",
  authDomain: "fifth-base-398400.firebaseapp.com",
  projectId: "fifth-base-398400",
  storageBucket: "fifth-base-398400.appspot.com",
  messagingSenderId: "504480769425",
  appId: "1:504480769425:web:23b0a53235e3d4ca796630",
  measurementId: "G-HEXBS95DXM",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore();

export { auth, db };
