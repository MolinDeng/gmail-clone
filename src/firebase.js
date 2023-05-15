// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLJ51dW4IlKXxcWEO8fe9Wp4AGScFKC9Y",
  authDomain: "clone-c7b08.firebaseapp.com",
  projectId: "clone-c7b08",
  storageBucket: "clone-c7b08.appspot.com",
  messagingSenderId: "847431884057",
  appId: "1:847431884057:web:a81138f0e15cbaa7847988",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app); // get DB
const auth = getAuth(app); // get Auth
const colRef = collection(db, "emails");
export { db, auth, colRef };
