// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';
import { getDatabase,ref } from "firebase/database";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8bSXW4FFh3jsfVmeXsBvLRZmPvMepZvk",
  authDomain: "student-teacher-booking-app.firebaseapp.com",
  databaseURL: "https://student-teacher-booking-app-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "student-teacher-booking-app",
  storageBucket: "student-teacher-booking-app.appspot.com",
  messagingSenderId: "438367796109",
  appId: "1:438367796109:web:f924a533ca267e55971bc4",
  measurementId: "G-86E3WP5M73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage(app);
const db = getFirestore(app);
const auth = getAuth(app);
const rb = getDatabase(app);
const dbref = ref(rb, 'server/saving-data/fireblog');

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("success");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const registerWithEmailAndPassword = async (name,email,password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth,email,password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const logInWithEmailAndPassword1 = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const registerWithEmailAndPassword1 = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "teacher"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const sendPasswordReset1 = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const logInWithEmailAndPassword2 = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const registerWithEmailAndPassword2 = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "student"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const sendPasswordReset2 = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const logout = () => {
  signOut(auth);
};
export {
  auth,
  db,
  rb,
  storage,
  dbref,
  logInWithEmailAndPassword,
  signInWithEmailAndPassword,
  registerWithEmailAndPassword,
  logInWithEmailAndPassword1,
  registerWithEmailAndPassword1,
  logInWithEmailAndPassword2,
  registerWithEmailAndPassword2,
  sendPasswordReset,
  sendPasswordReset1,
  sendPasswordReset2,
  sendPasswordResetEmail,
  logout,
};
