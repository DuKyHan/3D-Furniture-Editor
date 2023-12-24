import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD8DfK3UywfaMJeIivVE-J6f9ZqBDDzips",
  authDomain: "furniture-ecommerce-f9d5-eb481.firebaseapp.com",
  databaseURL:
    "https://furniture-ecommerce-f9d5-eb481-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "furniture-ecommerce-f9d5-eb481",
  storageBucket: "furniture-ecommerce-f9d5-eb481.appspot.com",
  messagingSenderId: "685876188590",
  appId: "1:685876188590:web:656c5487e57c8d144a243f",
  measurementId: "G-ZS5QHVKSGK",
};
console.log(process.env.REACT_APP_APPID);
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

// connectFirestoreEmulator(db, "localhost", 8080);
// connectAuthEmulator(auth, "http://localhost:9099");
