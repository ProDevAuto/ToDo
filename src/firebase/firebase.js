// src/firebase/firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, push, onValue, remove, update } from "firebase/database";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDacU2rnTH3H_yTFvC6plMUKhAFUrYzjFI",
  authDomain: "todo-app-b1942.firebaseapp.com",
  databaseURL: "https://todo-app-b1942-default-rtdb.firebaseio.com",
  projectId: "todo-app-b1942",
  storageBucket: "todo-app-b1942.appspot.com",
  messagingSenderId: "224802060897",
  appId: "1:224802060897:web:dc59bee0437c8f013fc820",
  measurementId: "G-16Q9QXXQTL"
};

// Initialize Firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, set, push, onValue, remove, update };
