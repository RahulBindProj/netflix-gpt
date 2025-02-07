// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5YF3tZcmW4y_aJYz4t_WzWhITQOkngZA",
  authDomain: "netflixgpt-3f82b.firebaseapp.com",
  projectId: "netflixgpt-3f82b",
  storageBucket: "netflixgpt-3f82b.firebasestorage.app",
  messagingSenderId: "666728173903",
  appId: "1:666728173903:web:0c9eaa706db300fe69353a",
  measurementId: "G-0ZT6G2PL01",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
