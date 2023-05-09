import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBc7vbxipw7URhS7uiu8L-TNlfjICEoeAQ",
  authDomain: "socialmedia-92073.firebaseapp.com",
  projectId: "socialmedia-92073",
  storageBucket: "socialmedia-92073.appspot.com",
  messagingSenderId: "443829734419",
  appId: "1:443829734419:web:0d2d102f114c27e28fc3e6"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);