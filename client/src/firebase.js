import {firebase} from 'firebase';
import "firebase/database";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
    apiKey: "AIzaSyB_8KwbTHmIDg-y5crFeL6bf34PZjOhkP4",
    authDomain: "twitter-clone-5d001.firebaseapp.com",
    projectId: "twitter-clone-5d001",
    storageBucket: "twitter-clone-5d001.appspot.com",
    messagingSenderId: "314720159779",
    appId: "1:314720159779:web:43d2e0db46abf722ac8996",
    measurementId: "G-MS2G635GF6"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  const db = firebase.firestore();

  export default db;