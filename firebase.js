// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNGRMOHKSLE9_w8W1PWWh7UepmyAjdZeA",
  authDomain: "food-delivery-c4468.firebaseapp.com",
  projectId: "food-delivery-c4468",
  storageBucket: "food-delivery-c4468.appspot.com",
  messagingSenderId: "333518070551",
  appId: "1:333518070551:web:671b33765df34cab264d52",
  measurementId: "G-G6LTZP19D5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);

