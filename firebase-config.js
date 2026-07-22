// Firebase project: BAAKAELECTRONICS
// This config is safe to expose publicly — Firebase apps are secured by
// Firestore Security Rules, not by hiding this file. See firestore.rules
// in this project for the rules you need to set in the Firebase console.

const firebaseConfig = {
  apiKey: "AIzaSyDG8fvmkKQjIdbLTNipEbSbpcEYZ2JUuEU",
  authDomain: "baakaelectronics-72e5b.firebaseapp.com",
  projectId: "baakaelectronics-72e5b",
  storageBucket: "baakaelectronics-72e5b.firebasestorage.app",
  messagingSenderId: "817236501529",
  appId: "1:817236501529:web:63349682448e4833633688"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
