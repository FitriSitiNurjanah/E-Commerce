import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCDSCWmWQf9WT42o5QOE_m5hy5lVPaoFWI",
  authDomain: "e-commerce-fd6d2.firebaseapp.com",
  projectId: "e-commerce-fd6d2",
  storageBucket: "e-commerce-fd6d2.appspot.com",
  messagingSenderId: "223856568904",
  appId: "1:223856568904:web:a6e67750bedb1339a8c67d",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    console.log("TEst BERHASIL");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

export { auth, db, logInWithEmailAndPassword };
