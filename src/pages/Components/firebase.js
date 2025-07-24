// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"; // For Realtime Database
import { getFirestore } from "firebase/firestore"; // For Firestore (choose one)

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  ur config
};

const app = initializeApp(firebaseConfig);


export const db = getDatabase(app); 
export const firestore = getFirestore(app); 
