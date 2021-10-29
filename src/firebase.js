import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC5DpQxcnPyN4jhIYV_RuLbMMDsJdxe5VE",
  authDomain: "main-slack-clone.firebaseapp.com",
  projectId: "main-slack-clone",
  storageBucket: "main-slack-clone.appspot.com",
  messagingSenderId: "408776997888",
  appId: "1:408776997888:web:ce3a4f11c15e8a063cece5",
  measurementId: "G-GS85CMX98F",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore()
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
