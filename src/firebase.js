import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAdxi0Am-yuSjcw_oSz7AEmyflQAIcC_e8",
  authDomain: "facebook-clone-666.firebaseapp.com",
  projectId: "facebook-clone-666",
  storageBucket: "facebook-clone-666.appspot.com",
  messagingSenderId: "791005557333",
  appId: "1:791005557333:web:a07024647846d2d91c5adc",
  measurementId: "G-X2F2J9JNBB",
});
const db = firebase.firestore();
export default db;
