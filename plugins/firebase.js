import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAcYnh5fPYbotH89cfOFXtgl2oeVsdgWwY",
  authDomain: "testingnuxt-b4828.firebaseapp.com",
  projectId: "testingnuxt-b4828",
  storageBucket: "testingnuxt-b4828.firebasestorage.app",
  messagingSenderId: "907113138432",
  appId: "1:907113138432:web:50fa36b454c77ee8bb4be5",
  measurementId: "G-YV46KSYRFC"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default (context, inject) => {
  inject('firebase', { app, db });
};
    