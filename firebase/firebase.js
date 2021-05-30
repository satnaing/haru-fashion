import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { seedDatabase } from "./seed";

const firebaseConfig = {
  apiKey: "AIzaSyCHVqeZFM4ZIjiYng_oFVMU2Fu7VpjdV0I",
  authDomain: "ecommerce-sn.firebaseapp.com",
  projectId: "ecommerce-sn",
  storageBucket: "ecommerce-sn.appspot.com",
  messagingSenderId: "1085998207330",
  appId: "1:1085998207330:web:28946e1e95e19bb1b49c3b",
  measurementId: "G-2GWCTE59TF",
};

console.log(process.env.FB_APIKEY);

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const db = firebase.firestore();

// Seed Firestore (run only once)
// seedDatabase(db);

export default firebase;
