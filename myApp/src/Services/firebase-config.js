// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDORAIGC8xGg9m9LWcEzvEcS4lRm609mhY",
  authDomain: "layout-index-ca8ae.firebaseapp.com",
  projectId: "layout-index-ca8ae",
  storageBucket: "layout-index-ca8ae.appspot.com",
  messagingSenderId: "905725593439",
  appId: "1:905725593439:web:f0bf144a0d2950b20c58ea",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

//export database
export { app, storage, firestore };
