import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAP6-26ShTNZqRMlHcLRHzamzBajDO7PwU",
  authDomain: "fir-practice-aadb9.firebaseapp.com",
  projectId: "fir-practice-aadb9",
  storageBucket: "fir-practice-aadb9.firebasestorage.app",
  messagingSenderId: "725207515751",
  appId: "1:725207515751:web:d2e2d573e096306b1a4ac2",
  measurementId: "G-PGJ24X0Z1J",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
