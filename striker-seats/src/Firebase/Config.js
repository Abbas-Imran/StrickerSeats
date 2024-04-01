import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3qIFkaqhPSov8cDPtAi1hVAMwsxvddvg",
  authDomain: "striker-seats.firebaseapp.com",
  projectId: "striker-seats",
  storageBucket: "striker-seats.appspot.com",
  messagingSenderId: "849485508700",
  appId: "1:849485508700:web:588cda0aa14a364fdc7699"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);