// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth"
import{getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_TEST,
  authDomain: "proxymusicdisc.firebaseapp.com",
  projectId: "proxymusicdisc",
  storageBucket: "proxymusicdisc.appspot.com",
  messagingSenderId: "53527993153",
  appId: "1:53527993153:web:c5101a24b50ee405fc5fc0",
  measurementId: "G-PTBWFZW57R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)