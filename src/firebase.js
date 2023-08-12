import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDgJPzoiwP570lL7s_fJtKq3Hm6G6nx3jA",
  authDomain: "infolocker-2824b.firebaseapp.com",
  projectId: "infolocker-2824b",
  storageBucket: "infolocker-2824b.appspot.com",
  messagingSenderId: "135525225855",
  appId: "1:135525225855:web:76dcb9b91ba987853db64a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const db = getFirestore(app);