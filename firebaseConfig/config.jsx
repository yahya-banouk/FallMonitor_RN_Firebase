// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9pJRijKleeJafUQ7OxnWB0h7X-ACtik4",
  authDomain: "fallmonitor-rn-firebase.firebaseapp.com",
  projectId: "fallmonitor-rn-firebase",
  storageBucket: "fallmonitor-rn-firebase.appspot.com",
  messagingSenderId: "601275133333",
  appId: "1:601275133333:web:7410c666ca49cc7d851a9c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Initialize Database and exportit
export const db = getDatabase(app);