// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7JqSgDMsIZXtgkHZ6gWZjgDi4GoD_cbc",
  authDomain: "wiz-twitter-clone.firebaseapp.com",
  projectId: "wiz-twitter-clone",
  storageBucket: "wiz-twitter-clone.appspot.com",
  messagingSenderId: "727685264862",
  appId: "1:727685264862:web:be0ca4733bde4a1732194f",
  measurementId: "G-P7QVDDWB09"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
const db = firebaseApp.firestore();
export default db;