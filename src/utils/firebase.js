// Import the functions you need from the SDKs you need
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.process?.env?.FIREBASE_KEY,
  authDomain: "netflix-gpt-55fd5.firebaseapp.com",
  projectId: "netflix-gpt-55fd5",
  storageBucket: "netflix-gpt-55fd5.firebasestorage.app",
  messagingSenderId: "979493040182",
  appId: "1:979493040182:web:cb0c13056e4e111c082897",
  measurementId: "G-7S71KLL76L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
