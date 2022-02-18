// Import the functions you need from the SDKs you need
import "firebase/compat/auth"
import "firebase/compat/firestore"
import 'firebase/database'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyB6HgEs5_wjNjW22HZ2e41nCv3v4FrWNb8",
  authDomain: "twittercloneapp-21f50.firebaseapp.com",
  projectId: "twittercloneapp-21f50",
  storageBucket: "twittercloneapp-21f50.appspot.com",
  messagingSenderId: "878665059214",
  appId: "1:878665059214:web:0a99d8809dfdfbacf672df",
  measurementId: "G-LEX2PWLVZB"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;